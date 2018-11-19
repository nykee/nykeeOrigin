<template>
  <div class="mPlayer-box"  style="top: 90%;left: -23%" ref="mPlayer">

    <!--<div class="clearfix mPlayer-main-board-box">-->

     <div style="position: relative" class="clearfix" >

        <Row class="mPlayer-main-board fl" type="flex" justify="center" align="middle" >
          <i-col  :span="7" class="mPlayer-main-board-block playCtrl">
            <i class="fa  fa-2x playBtn ctrlIcons"
               :class="{'fa-pause':playStatus==='playing',
               'fa-play':playStatus==='paused'}" @click="changePlayStatus"></i>
            <i class="fa fa-step-backward ctrlIcons"></i>
            <i class="fa fa-step-forward ctrlIcons"></i>
          </i-col>
          <i-col  :span="7" class="mPlayer-main-board-block">
            <ul>
              <li class="mPlayer-song-name">Alone</li>
              <li class="mPlayer-artist">MashMallo</li>
            </ul>
          </i-col>
          <i-col  :span="8" class="mPlayer-main-board-block">
            <img :src="currentSong.pic" alt="" class="mPlayer-album">
          </i-col>
          <i-col :span="2" class="mPlayer-main-board-block">
            <ul>
              <li @click="changeSongListShow" class="ctrlIcons toggleListBtn"> <i class="fa fa-reorder" ></i></li>
              <li @click="changePlayMode" class="ctrlIcons"><i class="fa fa-random" ></i></li>
            </ul>
          </i-col>
          <audio :src="currentSong.url" class="mscAudio" ref="mscAudio"></audio>
        </Row>



      <div   class="miniBtn-container">
        <i class="fa   miniBtn" :class="{'fa-chevron-left':!isToggle,'fa-chevron-right':isToggle}" @click="toggleMini" ></i>
      </div>
    </div>
    <!--<keep-alive>-->
      <div class="mPlayer-playlist" v-if="isSongListShow" >
        <ul v-for="song in songLists" class="clearfix mPlayer-playlist-items ">
          <li class="fl playlist-cur "></li>
          <li class="fl playlist-index ">{{song.index}}</li>
          <li class="fl playlist-songname">{{song.name}}</li>
          <li class="fr playlist-artist">{{song.singer}}</li>
        </ul>
      </div>
    <!--</keep-alive>-->




  </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
        data() {
            return {
              isSongListShow:false,
              isToggle:true,
              // songSrc:'',
              // albumPicSrc:'',
              songLists:[],
              // playStatus:''
              currentSong:[]
            }
        },
        methods: {
          changeSongListShow(){
            this.isSongListShow =!this.isSongListShow
          },
          changePlayMode(){

          },
          toggleMini(){

            let self= this;
            // console.log();
            let left = parseInt(this.$refs.mPlayer.style.left.slice(0,this.$refs.mPlayer.style.left.toString().indexOf("%")));
            // console.log(left);

          if(left ===0){
            let timer= setInterval(function () {
              if(left<=-23){
                clearInterval(timer);
                self.isToggle =true;
                return
              }
              self.isSongListShow =false;
              left -=1;
              // console.log(left);
              self.$refs.mPlayer.style.left =left +"%";
            },16);
          }
          else {
            let timer= setInterval(function () {
              if(left>=0){
                clearInterval(timer);
                self.isToggle =false;
                return
              }

              left +=1;
              // console.log(left);
              self.$refs.mPlayer.style.left =left +"%";
            },16);
          }




          },
          changePlayStatus(){
            this.$store.commit("CHANGE_PLAYSTATUS");
            if(this.playStatus ==="paused"){
              this.$ref.mscAudio.play();
            }
          }
        },
      computed: {
          // playStatus(){
          //   return this.$store.state.playStatus
          // }
        ...mapState({
          playStatus:state => state.playStatus,
          songLists: state => state.songLists
        })
      }
      ,
        created: function () {
          // let self= this;
          axios.get("https://api.bzqll.com/music/tencent/songList?key=579621905&id=5471246374").then((res)=>{

            for(let i=0,len =res.data.data.songs.length;i<len;i++){
              res.data.data.songs[i].index = i+1;
              // console.log(res.data.data.songs[i]);
            }
            this.$store.dispatch('initialSongLists',res.data.data.songs);
             this.songLists =res.data.data.songs;
             this.currentSong = res.data.data.songs[0]
          }).catch((err)=>{
            console.warn(err)
          });
//        this.$store.dispatch('initialSongLists');
//        console.log(this.$store.dispatch('initialSongLists'));

        },
        mounted() {
          console.log(this.currentSong);
//         this.$store.commit("GET_SONGLISTS");

          // console.log(this.playStatus);

        },
        components: {}
    }
</script>
<style scoped>
  .mPlayer-box{
  z-index: 1000;
    position: fixed;
    /*bottom:1%;*/
    /*right: 80%;*/

  }
  .mPlayer-main-board{
    background:rgba(146,146,146,0.35);
    border-radius: 8px;
    padding: .5rem .9rem .5rem .5rem;
    width: 19.5rem;
    /*width: 16rem;*/
  }
  .mPlayer-song-name,.mPlayer-artist{
    text-align: center;
  }
  .mPlayer-main-board-block{
    padding: 0 .5rem;
  }
  .mPlayer-album{
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    vertical-align: top;
  }
  .miniBtn{
     /*color: #fff;*/
    line-height: 5rem;

   }
  .miniBtn-container{
    height: 5rem;
    width: 1.8rem;
    position: absolute;
    top:0;
    left:99%;
    background-color: rgba(137,137,137,.75);
    border-radius: 2px;
    text-align: center;
  }
  .playCtrl>i{
    padding-left: .2rem;
  }

  .mPlayer-playlist{
    position: absolute;
    bottom:100%;
    /*background-color: rgba(146,146,146,0.35);*/
    background-color: #fff;
    border: 2px solid #eee;
    /*border-top: 2px solid #eee;*/
    padding: 0 .5rem;
    border-radius: 8px;
    width: 19.5rem;
    margin-bottom: .2rem;
  }
  .playlist-index{
    margin-right: 1rem;

  }
  .playlist-songname{
    margin-right: 2rem;
  }
  .playlist-index,.playlist-songname,.playlist-artist,.playlist-cur,.ctrlIcons{cursor: pointer}
  .mPlayer-playlist-items{
    margin-top: .3rem;
    padding:  .2rem;

  }
  .playlist-cur{

    width: 3px;
    height: 1rem;
    margin-right: .3rem;
  }
  .curIdx{
    background-color: orange;
  }
  .mPlayer-playlist-items:hover{
    background-color: rgba(146,146,146,0.35);
  }
  .curSong{
    background-color: #F8F8F8;
  }
  .playBtn{
    width: 2rem;
  }
  .toggleListBtn{
    margin-bottom: .4rem;
  }
  .mscAudio{
    display: none;
  }

</style>
