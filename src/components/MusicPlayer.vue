<template>
  <div>
    <div v-if="!isMini" :class="{'msc-player-box-mb':isMobile,'msc-player-box':!isMobile}" style="top:87%;left: -320px"
         ref="mPlayer">


      <div class="clearfix position-relative">

        <Row id="msc-player" class="mPlayer-main-board fl" type="flex" justify="center" align="middle">
          <i-col :span="7" class="mPlayer-main-board-block playCtrl">
            <i class="fa  fa-2x playBtn ctrlIcons"
               :class="{'fa-pause':playStatus==='playing',
               'fa-play':playStatus==='paused'}" @click="changePlayStatus"></i>
            <i class="fa fa-step-backward ctrlIcons" @click="playPrev"></i>
            <i class="fa fa-step-forward ctrlIcons" @click="playNext"></i>
          </i-col>
          <i-col :span="8" class="mPlayer-main-board-block">
            <ul>
              <li class="mPlayer-song-name">{{currentSong.name}}</li>
              <li class="mPlayer-artist">{{currentSong.singer}}</li>
            </ul>
          </i-col>
          <i-col :span="6" class="mPlayer-main-board-block">
            <img :src="currentSong.pic" alt="" class="mPlayer-album" :class="{'picSpin':playStatus==='playing'}">
          </i-col>
          <i-col :span="1" class="volume-box">

            <!--<Slider v-model="volume" :step="10" class="volume-slider" v-if="isVolumeSliderShow"></Slider>-->
            <i class="fa fa-volume-up volume-btn ctrlIcons" @click="showVSlider"></i>
            <div class="volume-slider" v-if="isVolumeSliderShow">
              <!--<input type="range" class="slide-range" min="0" max="100" step="1" v-model="volumeNum">-->
              <div class="volume-slider-wrap">
                <input type="range" class="slide-range" min="0" max="100" step="1" v-model="volumeNum">
                <div class="volume-slider-bar" v-bind:style="{height:volumeNum+'%'}"></div>
                <div class="volume-slider-btn" v-bind:style="{bottom:volumeNum+'%'}"
                     @mousedown="handleMouseDown($event)"
                     @mousemove="handleMouseMove($event)"
                     @mouseup="handleMouseUp($event)"
                     draggable="true"></div>
              </div>


            </div>


          </i-col>
          <i-col :span="1" class="mPlayer-main-board-block">
            <ul>
              <li @click="changeSongListShow" class="ctrlIcons toggleListBtn"><i class="fa "
                                                                                 :class="{'fa-caret-up':!isSongListShow,'fa-caret-down':isSongListShow}"></i>
              </li>
              <li @click="changePlayMode" class="ctrlIcons"><i class="fa "
                                                               :class="{'fa-random':isRandom,'fa-reorder':!isRandom}"></i>
              </li>
              <li v-if="isMobile" class="ctrlIcons" @click="toggleMobileMini"><i class="fa fa-toggle-left"></i></li>
            </ul>
          </i-col>
        </Row>
        <!--<Row>
          <i-col :span="8"></i-col>
          <i-col :span="8">
            <span>2:21</span>
            <span>/</span>
            <span>3:40</span>
          </i-col>
        </Row>-->
        <div  class="time-ctrl">
          <ul class="clearfix">
            <li class="fl progress-bar">
              <i-progress :percent="playPercent"
                          hide-info
                          :stroke-width="5" class="ivu-progress-bar"/>
            </li>
            <li class="fl timeDuration">
              <span>{{cur_song_duration}}</span><span>/</span><span>{{cur_song_time_count}}</span>
            </li>
          </ul>
        </div>


        <div class="miniBtn-container" v-if="!isMobile">
          <i class="fa   miniBtn ctrlIcons" :class="{'fa-chevron-left':!isToggle,'fa-chevron-right':isToggle}"
             @click="toggleMini"></i>
        </div>
      </div>

      <keep-alive>
      <div id="mPlayer-playlist" class="mPlayer-playlist" v-if="isSongListShow">
        <ul v-for="song in songLists" class="clearfix mPlayer-playlist-items " @click="clickToPlay(song.index)"
            :key="song.index">
          <li class="fl playlist-cur " :class="{'curIdx':song.index === isPlayingIndex}"></li>
          <li class="fl playlist-index " :class="{'playing-color':song.index === isPlayingIndex}">{{song.index}}</li>
          <li class="fl playlist-songname" :class="{'playing-color':song.index === isPlayingIndex}">{{song.name}}</li>
          <li class="fr playlist-artist" :class="{'playing-color':song.index === isPlayingIndex}">{{song.singer}}</li>
        </ul>
      </div>
      </keep-alive>


    </div>
    <div id="mini-player" v-if="isMini">
      <div class="mini-player-box">
        <i class="fa  fa-2x playBtn-mini ctrlIcons"
           :class="{'fa-pause':playStatus==='playing',
               'fa-play':playStatus==='paused'}" @click="changePlayStatus"></i>
        <i class="fa fa-toggle-right toggle-mini-btn" @click="toggleMobileMini"></i>
        <img :src="currentSong.pic" alt="" class="mPlayer-album-mini" :class="{'picSpin':playStatus==='playing'}">
      </div>
    </div>
    <audio :src="currentSong.url" class="mscAudio" id="mscAudio" ref="mscAudio"  :timeupdate="handleTimeUpdate">
      您的浏览器不支持 audio 标签。请使用Chrome,Firefox等现代浏览器
    </audio>
  </div>

</template>

<script>
  // import { mapState } from 'vuex'
  export default {
    data() {
      return {
        isSongListShow: false,
        isToggle: true,
        songLists: [], //全部歌曲
        playStatus: 'paused', //播放状态
        currentSong: [],
        isMobile: false,
        isMini: false,
        isPlayingIndex: 1,
        volumeNum: 30,
        isVolumeSliderShow: false,
        mouseY: 0,
        moveDistance: 0,
        isRandom: false, //随机播放flag
        cur_song_duration:"00:00", //当前歌曲播放进度分秒
        cur_song_time_count:"00:00", //当前歌曲总分秒
        playPercent:0 //进度条百分比
      }
    },
    methods: {
      changeSongListShow() {
        this.isSongListShow = !this.isSongListShow
      },
      changePlayMode() {
        this.isRandom = !this.isRandom;
        let infoMsg = this.isRandom?"已开启随机播放":"已开启列表播放";
        this.$Notice.info({

          title:infoMsg
        })

      },

      toggleMini() {
        let self = this;
        let left = parseInt(this.$refs.mPlayer.style.left.slice(0, this.$refs.mPlayer.style.left.toString().indexOf("px")));

        if (left === 0) {
          let timer = setInterval(function () {
            if (left <= -320) {
              clearInterval(timer);
              self.isToggle = true;
              return
            }
            self.isSongListShow = false;
            self.isVolumeSliderShow = false;
            left -= 10;
            self.$refs.mPlayer.style.left = left + "px";
          }, 16);
        }
        else {
          let timer = setInterval(function () {
            if (left >= 0) {
              clearInterval(timer);
              self.isToggle = false;
              return
            }

            left += 10;
            self.$refs.mPlayer.style.left = left + "px";
          }, 16);
        }


      },
      toggleMobileMini() {
        this.isMini = !this.isMini;
        this.isSongListShow = false
      },
      changePlayStatus() {
        this.$refs.mscAudio.setAttribute("autoplay", "autoplay");
        if (this.playStatus === "paused") {
          this.playStatus = "playing";

          this.$refs.mscAudio.play();

          this.isPlayingIndex = this.currentSong.index;
        }
        else {
          this.playStatus = "paused";
          this.$refs.mscAudio.pause();

        }
      },

      handleTimeUpdate(){
       console.log("timeUpdated");
      },

      playPrev() {

        let idx = this.currentSong.index;
        let randIdx = Math.floor(Math.random() * (this.songLists.length - 1 + 1) + 1);

        if (this.isRandom) {
          this.currentSong = this.songLists[randIdx - 1];
          this.isPlayingIndex = randIdx;
        }
        else {
          if (idx !== 1) {
            idx -= 1;
            this.currentSong = this.songLists[idx - 1];
          }
          this.isPlayingIndex = idx;

        }





      },
      playNext() {

        let idx = this.currentSong.index;
        let randIdx = Math.floor(Math.random() * (this.songLists.length - 1 + 1) + 1);
        if (this.isRandom) {
          this.currentSong = this.songLists[randIdx - 1];
        }
        else {
          if (idx === this.songLists.length) {
            this.currentSong = this.songLists[0];
          }
          else {
            this.currentSong = this.songLists[idx];

          }
        }
        this.isPlayingIndex = this.currentSong.index;


      },
      clickToPlay(index) {
        this.$refs.mscAudio.setAttribute("autoplay", "autoplay");
        this.currentSong = this.songLists[index - 1];
        this.playStatus = "playing";
        this.$refs.mscAudio.play();
        this.isPlayingIndex = index;
//        this.getSongDuration();
      },
      showVSlider() {
        this.isVolumeSliderShow = !this.isVolumeSliderShow
      },
      /*changeVolume(){

      }*/
      handleMouseDown(e) {
        console.log("MouseDown");
        console.log(e.clientY);
//            console.log(e.clientX);
        this.mouseY = e.clientY;
      },
      handleMouseMove(e) {
        console.log("MouseMove");
//            console.log(e.clientY);
        console.log(e.clientY - this.mouseY);

      },
      handleMouseUp(e) {
        console.log("MouseUp");
//            console.log(e);
        console.log(e.clientY);
      },





    },
    computed: {
      isMute() {
        return this.volumeNum === 0
      }
    }
    ,
    created: function () {

    },
    mounted() {
      /*ajax获取歌单数据，绑定到songLists和currentSong*/
      axios.get("https://api.bzqll.com/music/tencent/songList?key=579621905&id=5632041384").then((res) => {
        for (let i = 0, len = res.data.data.songs.length; i < len; i++) {
          res.data.data.songs[i].index = i + 1;
        }
        // this.$store.dispatch('initialSongLists',res.data.data.songs);
        this.songLists = res.data.data.songs;
        this.currentSong = res.data.data.songs[0]
      }).catch((err) => {
        console.warn(err)
      });
      /*设置音量*/
      this.$refs.mscAudio.volume = parseFloat(parseInt(this.volumeNum) / 100);
      if (window.screen.width <= 425) {
        this.isMobile = true;
        this.isMini = true;
      }
      else {
        this.isMobile = false;
      }
      /*监听ended事件，一个音频放完后，调用playnext方法，手动播放下一首歌*/
      this.$refs.mscAudio.addEventListener("ended", () => {
        this.playNext();
      });
      /*监听loadedmetadata事件，音频文件加载完成后获取duration，绑定到cur_song_time_count上*/
      this.$refs.mscAudio.addEventListener("loadedmetadata", (e) => {
        let min,sec = null;
        min=Math.floor(e.target.duration/60);
        sec = Math.floor(e.target.duration%60);
        sec = sec<10?("0"+sec):sec;
        min = min<10?("0"+min):min;

        this.cur_song_time_count = min+":"+sec;
      });

      this.$refs.mscAudio.addEventListener("timeupdate", (e) => {
//        console.log(e.target.duration);
        let currentTime =Math.floor( e.target.currentTime);
//        console.log(currentTime);
//        console.log(Math.floor((currentTime/e.target.duration)*100));
//      console.log(currentTime);
        this.playPercent =Math.floor((currentTime/e.target.duration)*100);

      let sec="00",
      min="00",
      colon=":";

      if(currentTime<60){

        if(currentTime<10){
          this.cur_song_duration = min+colon+"0"+currentTime;
        }
        else {
          this.cur_song_duration = min+colon+currentTime;
        }

      }
      else{
        min= "0"+Math.floor(currentTime/60);
        sec = Math.floor(currentTime- 60*Math.floor(currentTime/60));
        sec = sec<10? ("0"+sec):sec;
//        console.log(min);
//        console.log(sec);
//        this.cur_song_duration = Math.floor(e.target.currentTime/60)
//        console.log("0"+Math.floor(e.target.currentTime/60)+":"+(Math.floor(e.target.currentTime- 60*Math.floor(e.target.currentTime/60))));
        this.cur_song_duration =min+colon+sec;
      }


      });

    },
    components: {}
  }
</script>
<style scoped>
  .msc-player-box {
    z-index: 8;
    position: fixed;

  }

  .mPlayer-main-board {
    background-color: #929292;
    border-radius: 4px;
    opacity: .85;
    padding: .5rem .9rem 1.5rem .4rem;
    width: 20rem;
    height: 6.5rem;
    /*width: 16rem;*/
    color: #f6f6f6;
  }

  .mPlayer-song-name, .mPlayer-artist {
    text-align: center;
    font-size: .8rem;
  }

  .mPlayer-artist {
    text-overflow: ellipsis;
    margin-top: .2rem;
  }

  .mPlayer-main-board-block {
    padding: 0 .5rem;
  }

  .mPlayer-album {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    vertical-align: top;
  }

  .miniBtn {
    line-height: 6.5rem;

  }

  .miniBtn-container {
    height: 6.5rem;
    width: 1.8rem;
    position: absolute;
    top: 0;
    left: 100%;
    background-color: rgba(137, 137, 137, .75);
    border-radius: 2px;
    text-align: center;
  }

  .playCtrl > i {
    padding-left: .2rem;
  }

  .mPlayer-playlist {
    position: absolute;
    bottom: 100%;
    background-color: #929292;
    opacity: .85;
    /*background-color: rgba(255,255,255,.65);*/
    /*background:rgba(146,146,146,.85);*/
    color: #f6f6f6;
    /*border: 2px solid #f6f6f6;*/
    /*border-top: 2px solid #eee;*/
    padding: .3rem;
    border-radius: 4px;
    width: 20rem;
    margin-bottom: .2rem;
  }

  .playlist-index {
    padding-right: .5rem;

  }

  .playlist-artist {
    text-overflow: ellipsis;
    width: 9rem;
    white-space: nowrap;
    overflow: hidden;
    padding-right: .2rem;
  }

  .playlist-index, .playlist-songname, .playlist-artist, .playlist-cur, .ctrlIcons {
    cursor: pointer
  }

  .mPlayer-playlist-items {
    margin-top: .3rem;
    padding: .2rem 0;
    width: 19.5rem;
    overflow: hidden;

    /*text-overflow: ellipsis;*/
    /*white-space:nowrap;*/

  }

  .playing-color {
    color: orange;
  }

  .playlist-cur {

    width: 3px;
    height: 1rem;
    margin-right: .3rem;
  }

  .curIdx {
    background-color: orange;
  }

  .mPlayer-playlist-items:hover {
    background-color: #fff;
    opacity: .5;
    color: orange;
  }

  .curSong {
    background-color: #d4d3da;
  }

  .playBtn {
    width: 2rem;
  }

  .toggleListBtn {
    margin-bottom: .4rem;
  }

  .mscAudio {
    /*display: none;*/
  }

  .msc-player-box-mb {
    position: fixed;
    top: 88% !important;
    left: 0 !important;
  }

  .mini-player-box {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: rgba(146, 146, 146, 0.35);
    position: fixed;
    top: 88%;
    left: 1%;
  }

  .mPlayer-album-mini {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    vertical-align: top;
    /*opacity: 0.75;*/
    /*position: absolute;*/
  }

  @keyframes picRotate {
    from {
      transform: rotate(0)
    }
    to {
      transform: rotate(360deg)
    }
  }

  .picSpin {
    animation: picRotate 10.2s linear infinite;
  }

  .playBtn-mini {
    width: 2rem;
    position: absolute;
    top: 28%;
    left: 40%;
    color: #fff;
    z-index: 2;
  }

  .toggle-mini-btn {
    position: absolute;
    color: #fff;
    z-index: 2;
    top: 76%;
    left: 45%;

  }

  .volume-slider {
    position: absolute;
    /*width: 3px;*/
    /*height:40px;*/
    /*background-color: #2b85e4;*/
    top: 0;
    left: 5px
  }

  .volume-btn {
    position: absolute;
    top: 55%;
    /*width: 10px;*/
    /*height: 10px;*/
    /*border-radius: 50%;*/
    /*border: 2px solid #57a3f3;*/
    /*background-color: #fff;*/
    /*outline: 0;*/
  }

  .slide-range {
    display: none;
  }

  .volume-slider-bar {
    background-color: #57a3f3;
    border-radius: 3px;
    width: 4px;
    /*height: 30%;*/
    position: absolute;
    bottom: 0;
  }

  .volume-slider-wrap {
    width: 4px;
    height: 46px;
    background-color: #e8eaec;
    border-radius: 3px;
  }

  .volume-slider-btn {
    width: 10px;
    height: 10px;
    border: 2px solid #57a3f3;
    border-radius: 50%;
    background-color: #fff;
    outline: 0;
    position: absolute;
    left: -3px;
    /*bottom:30%;*/
    cursor: pointer;
  }

  .volume-box {
    height: 5rem
  }
  .time-ctrl{
    position: absolute;
    bottom:5%;
    right:40%;
  }
  .timeDuration{
    margin-left: .4rem;
    font-size: .8rem;
    color: #f8f8f8;
  }
  .ivu-progress-bar{width: 7rem}
</style>
