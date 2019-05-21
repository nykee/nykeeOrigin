<template>
  <div >
    <div v-if="!isMini" :class="{'msc-player-box':!isToggle,'msc-player-hide':isToggle}"
         style="top:86%;"
         ref="mPlayer">
      <div class="clearfix position-relative">
        <Row id="msc-player" class="mPlayer-main-board fl" type="flex" justify="center" align="middle">
          <i-col :span="6" class="mPlayer-main-board-block playCtrl">
            <i class="fa  fa-2x playBtn ctrlIcons"
               :class="{'fa-pause':playStatus==='playing',
               'fa-play':playStatus==='paused'}" @click="changePlayStatus"></i>
            <i class="fa fa-step-backward ctrlIcons" @click="playPrev"></i>
            <i class="fa fa-step-forward ctrlIcons" @click="playNext"></i>
          </i-col>
          <i-col :span="9" class="mPlayer-main-board-block">
            <ul>

                <li class="mPlayer-song-name">
                  <Tooltip :content="currentSong.title" theme="light" placement="top" style="z-index: 1000!important;" max-width="200">
                    {{currentSong.title}}
                  </Tooltip>
                </li>

              <li class="mPlayer-artist">
                <Tooltip :content="currentSong.singer" theme="light" placement="bottom">
                  {{currentSong.author}}
                </Tooltip>
              </li>
            </ul>
          </i-col>
          <i-col :span="7" class="mPlayer-main-board-block">
            <img :src="currentSong.pic" alt="" class="mPlayer-album" :class="{'picSpin':playStatus==='playing'}">
          </i-col>
          <i-col :span="2" class="mPlayer-main-board-block">
            <ul>
              <li @click="toggleSongListShow" class="ctrlIcons toggleListBtn">
                <i class="fa " :class="{'fa-toggle-up':!isSongListShow,'fa-toggle-down':isSongListShow}"></i>
              </li>
              <li @click="changePlayMode" class="ctrlIcons">
                <i class="fa " :class="{'fa-random':isRandom,'fa-reorder':!isRandom}"></i>
              </li>
              <li  class="ctrlIcons" @click="toggleMobileMini">
                <i class="fa fa-compress"></i>
              </li>
              <li class="ctrlIcons" @click="toggleLyrics">
                <i class="fa fa-newspaper-o"></i>
              </li>
            </ul>
          </i-col>
        </Row>
        <div class="time-ctrl">
          <ul class="clearfix">
            <li class="fl progress-bar" @click="handleProgressClick">
              <i-progress :percent="playPercent"
                          hide-info
                          :stroke-width="5" class="ivu-progress-bar"

              ></i-progress>
            </li>
            <li class="fl timeDuration">
              <span>{{cur_song_duration}}</span><span>/</span><span>{{cur_song_time_count}}</span>
            </li>
          </ul>
        </div>
        <div class="vol-ctrl" @mouseover="toggleVSlider" @mouseout="toggleVSlider">
          <i class="fa  volume-btn ctrlIcons"
             :class="{'fa-volume-off':isMute,'fa-volume-up':!isMute}"></i>
          <Slider v-model="volumeNum" :step="5" class="my-slider" v-if="isVolumeSliderShow"></Slider>
        </div>
        <div class="miniBtn-container" v-if="!isMobile">
          <i class="fa   miniBtn ctrlIcons" :class="{'fa-chevron-left':!isToggle,'fa-chevron-right':isToggle}"
             @click="toggleSide"></i>
        </div>
      </div>
      <keep-alive>
        <div id="mPlayer-playlist" ref="mPlayerPlaylist" class="mPlayer-playlist" v-if="isSongListShow">

           <Row v-for="song in songLists" class="mPlayer-playlist-items "
              :key="song.index">
             <div @click="clickToPlay(song.index)">
               <i-col  :span="1"  class=" playlist-cur "     :class="{'curIdx':song.index === isPlayingIndex}"></i-col>
               <i-col  :span="3"  class="playlist-index "    :class="{'playing-color':song.index === isPlayingIndex}">{{song.index}}</i-col>
               <i-col  :span="10" class=" playlist-songname" :class="{'playing-color':song.index === isPlayingIndex}">{{song.title}}</i-col>
               <i-col  :span="10" class=" playlist-artist"   :class="{'playing-color':song.index === isPlayingIndex}">{{song.author}}</i-col>
             </div>

          </Row>
        </div>
      </keep-alive>
    </div>
    <keep-alive>
      <div id="mini-player" v-if="isMini" ondrag="handleMiniPlayerDrag">

        <div class="mini-player-box">
          <i class="fa  fa-2x playBtn-mini ctrlIcons"
             :class="{'fa-pause':playStatus==='playing',
               'fa-play':playStatus==='paused'}" @click="changePlayStatus"></i>
          <i class="fa fa-expand toggle-mini-btn" @click="toggleMobileMini"></i>
          <img :src="currentSong.pic" alt="" class="mPlayer-album-mini" :class="{'picSpin':playStatus==='playing'}"/>
        </div>
      </div>
    </keep-alive>


    <audio :src="currentSong.url" class="mscAudio"  ref="mscAudio">
      您的浏览器不支持 audio 标签。请使用Chrome,Firefox等现代浏览器
    </audio>
    <keep-alive>
      <Lyrics :lyrics="lyrics" v-if="isLyricsShow"></Lyrics>
    </keep-alive>
  </div>

</template>

<script>
  import Lyrics from "../components/Lyrics"
  export default {
    data() {
      return {
        isSongListShow: false,  //播放列表显示标志位
        isToggle: true,         //播放器侧边显示标志位
        songLists: [], //全部歌曲
        playStatus: 'paused', //播放状态
        currentSong: [],      //当前播放歌曲
        isMobile: false,     //是否为手机标志位
        isMini: true,      //是否为Mini标志位
        isPlayingIndex: 1, //当前播放歌曲的索引
        volumeNum: 20,     //音量
        isVolumeSliderShow: false, //音量条显示标志位
        isRandom: false, //随机播放flag
        cur_song_duration: "00:00", //当前歌曲播放进度分秒
        cur_song_time_count: "00:00", //当前歌曲总分秒
        playPercent: 0, //进度条百分比
        lyrics:[],
        isLyricsShow:false
      }
    },
    methods: {
      toggleSongListShow() {
        /*播放列表显示标志位*/
        this.isSongListShow = !this.isSongListShow;
        // if(this.isSongListShow){this.scrollPlayList()};
      },
      changePlayMode() {
        /*切换播放模式*/
        this.isRandom = !this.isRandom;
        let infoMsg = this.isRandom ? this.$t("message.musicPlay.playModeToolTips.randomPlay") :this.$t("message.musicPlay.playModeToolTips.listPlay");
        this.$Notice.info({
          title: infoMsg
        })
      },
      toggleSide() {
        /*播放器播放器侧边模式与正常模式*/
        this.isToggle = !this.isToggle;
        // console.log(this.isToggle);
      },
      toggleLyrics(){
        this.isLyricsShow = !this.isLyricsShow
      },
      toggleMobileMini() {
        /*切换mini模式标志位*/
        this.isMini = !this.isMini;
        this.isSongListShow = false;
        if(!this.isMini){

          // console.log("切换回正常模式！");
          this.$Message.info("切换回正常播放器！");
          this.$nextTick(()=>{
            // console.log(this.$refs.mPlayer);
            this.isToggle =false;
          })


        }
        else {
          this.$Message.info("切换至mini播放器！");
          // this.toggleSide();
        }
      },
      changePlayStatus() {
        /*点击播放/暂停按钮改变播放状态*/
        this.$refs.mscAudio.setAttribute("autoplay", "autoplay");
        if (this.playStatus === "paused") {
          this.playStatus = "playing";
          this.$refs.mscAudio.play();
          this.isPlayingIndex = this.currentSong.index;
          this.$Message.info({content:"开始播放，ctrl+↑增加音量，ctrl+↓减小音量，ctrl+ ←切换上一首，ctrl+→切换下一首",duration:4})
        }
        else {
          this.playStatus = "paused";
          this.$refs.mscAudio.pause();
        }
      },
      playPrev() {
        /*播放前一首*/
        let idx = this.currentSong.index;
        let randIdx = this.getRdmIndex();
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
        if(this.playStatus ==="paused"){
          this.$refs.mscAudio.removeAttribute("autoplay")
        }
        this.getLyric();
        this.scrollPlayList();
      },
      getLyric(){
        axios.get(this.currentSong.lrc)
          .then((res) => {
            // console.log(res.data);
            this.lyrics = res.data.split("\n");
           if(this.lyrics ==="[00:00.00] 暂无歌词"){this.lyrics ="暂无歌词"}

          })
          .catch((err)=>{
            console.log(err);
          })
      },
      getRdmIndex(){
        return Math.floor(Math.random() * (this.songLists.length - 1 + 1) + 1)
      },
      playNext() {
        /*播放下一首*/
        // console.log(this.playStatus);
        let idx = this.currentSong.index;
        let randIdx = this.getRdmIndex();
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

        if(this.playStatus ==="paused"){
          this.$refs.mscAudio.removeAttribute("autoplay")
        }
        this.getLyric();
        this.scrollPlayList();
      },
      scrollPlayList(){
        // console.log(this.isPlayingIndex);
        if(this.isSongListShow){
          // console.log(this.$refs.mPlayerPlaylist.scrollTop);
          // console.log(this.$refs.mPlayerPlaylist.scrollHeight);
          let scrollHeight = this.$refs.mPlayerPlaylist.scrollHeight;
          // console.log((this.isPlayingIndex/this.songLists.length)*scrollHeight);
          let topScroll = parseInt(((this.isPlayingIndex-1)/this.songLists.length)*(scrollHeight));
          // console.log(topScroll);
          // console.log(window.getComputedStyle(this.$refs.mPlayerPlaylist).offsetHeight);
          this.$refs.mPlayerPlaylist.scrollTop = topScroll;
        }

      },
      clickToPlay(index) {
        this.$nextTick(()=>{
          console.log(index);
        });
        /*点击播放列表播放对于的歌曲*/
        this.$refs.mscAudio.setAttribute("autoplay", "autoplay");
        this.currentSong = this.songLists[index - 1];
        this.playStatus = "playing";
        this.$refs.mscAudio.play();
        this.isPlayingIndex = index;
        this.getLyric();
      },
      toggleVSlider() {
        /*切换音量调整条 的显示*/
        this.isVolumeSliderShow = !this.isVolumeSliderShow
      },
      handleProgressClick(e){
        /*快进功能*/
        e= event || window.event;
        //获得鼠标事件的clientX(相对dom元素的x轴坐标)
        console.log(e.clientX);
        let prog_x =e.clientX;
        //超出100按100取整
        prog_x = prog_x>=100? 100 :prog_x;
        this.playPercent =prog_x;
        //设置auido元素的current为百分比乘以audio中的媒体元素的总时间
        this.$refs.mscAudio.currentTime = this.$refs.mscAudio.duration * this.playPercent/100
      },
      handleMiniPlayerDrag(){

      }

    },
    computed: {
      isMute() {
        /*音量为零返回计算属性isMute*/
        return this.volumeNum === 0
      }
    },
    created() {

    },
    mounted() {
      let self = this;
      /*ajax获取歌单数据，绑定到songLists和currentSong*/
      axios.get("https://api.mlwei.com/music/api/wy/?key=523077333&cache=1&type=songlist&id=2520942859").then((res) => {
          console.log(res.data);
          if(res.data.Code === "OK"){
              for (let i = 0, len = res.data.Body.length; i < len; i++) {
                  res.data.Body[i].index = i + 1;
              }
              this.songLists = res.data.Body;
              this.currentSong = res.data.Body[0];
              console.log(this.songLists);
              console.log(this.currentSong);
          }


      }).catch((err) => {
        console.warn(err)
      });


      /*设置音量*/
      this.$refs.mscAudio.volume = parseFloat(parseInt(this.volumeNum) / 100);
      /*屏幕大小小于425则为手机页面*/
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
        let min, sec = null;
        min = Math.floor(e.target.duration / 60);
        sec = Math.floor(e.target.duration % 60);
        sec = sec < 10 ? ("0" + sec) : sec;
        min = min < 10 ? ("0" + min) : min;
        this.cur_song_time_count = min + ":" + sec;
      });
      /*监听timeUpdate事件，更新界面上的时间，设计分秒转换*/
      this.$refs.mscAudio.addEventListener("timeupdate", (e) => {
        let currentTime = Math.floor(e.target.currentTime);
        this.playPercent = Math.floor((currentTime / e.target.duration) * 100);
        let sec = "00",
          min = "00",
          colon = ":";
        if (currentTime < 60) {
          if (currentTime < 10) {
            this.cur_song_duration = min + colon + "0" + currentTime;
          }
          else {
            this.cur_song_duration = min + colon + currentTime;
          }
        }
        else {
          min = "0" + Math.floor(currentTime / 60);
          sec = Math.floor(currentTime - 60 * Math.floor(currentTime / 60));
          sec = sec < 10 ? ("0" + sec) : sec;
          this.cur_song_duration = min + colon + sec;
        }
      });
      /*this.$refs.mscAudio.addEventListener("durationchange", (e) => {
        console.log("durationchange");
      })*/


      /*监听键盘事件，切歌*/
      document.onkeydown = function (e) {
        let evn = e || event;
        let key = evn.keyCode || evn.which || evn.charCode;
        let ctrlKey =evn.ctrlKey || evn.metaKey;
        /*ctrl+左箭头切换上一首*/
        if(ctrlKey&& key ===37){
          evn.preventDefault();
          self.playPrev();
          console.log(self.currentSong);
          self.$Notice.info({
            title: "切换上一首",
            desc:"当前:"+self.currentSong.singer+"--"+self.currentSong.name
          })
        }
        /*ctrl+右箭头切换下一首*/
        if(ctrlKey&& key ===39){
          evn.preventDefault();
          // console.log("right");
          self.playNext();
          self.$Notice.info({
            title: "切换下一首",
            desc:"当前:"+self.currentSong.singer+"--"+self.currentSong.name
          })
        }
        /*ctrl+上箭头增加音量*/
        if(ctrlKey&& key ===38){
          evn.preventDefault();
          self.volumeNum+=10;
          if(self.volumeNum>100){
            self.volumeNum= 100;
            return false }
          self.$Notice.info({
            title: "音量+10,当前音量："+self.volumeNum
          });
        }
        /*ctrl+下箭头减小音量*/
        if(ctrlKey&& key ===40){
          evn.preventDefault();
          self.volumeNum-=10;
          if(self.volumeNum<0){
            self.volumeNum=0;
            return 0 }
          self.$Notice.info({
            title: "音量-10,当前音量："+self.volumeNum
          })
        }
      };




    },
    components: {Lyrics},
    watch: {
      /*监听音乐变化设置audio音量*/
      volumeNum() {
        this.$refs.mscAudio.volume = parseFloat(parseInt(this.volumeNum) / 100);
      }
    }
  }
</script>
<style scoped>
  .msc-player-box {
    z-index: 8;
    position: fixed;
    top:86%;
    transition: transform ease .9s;
    transform: translateX(0);
  }
  .msc-player-hide{
    z-index: 8;
    top:86%;
    position: fixed;
    transition: transform ease .9s;
    transform: translateX(-100%);
  }

  .mPlayer-main-board {
    background-color: #929292;
    border-radius: 4px;
    opacity: .85;
    padding: .5rem .9rem 1.5rem .4rem;
    width: 20rem;
    height: 6.5rem;
    color: #f6f6f6;
  }

  .mPlayer-song-name, .mPlayer-artist {
    text-align: center;
    font-size: .8rem !important;
    line-height: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .mPlayer-artist {
    text-overflow: ellipsis;
    margin-top: .2rem;
  }

  .mPlayer-main-board-block {
    /*padding: 0 .5rem;*/
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
    z-index: 2;
  }

  .playCtrl > i {
    padding-left: .2rem;
  }

  .mPlayer-playlist {
    position: absolute;
    bottom: 100%;
    background-color: #929292;
    opacity: .85;
    color: #f6f6f6;
    padding: .3rem;
    border-radius: 4px;
    width: 20rem;
    max-height: 20rem;
    margin-bottom: .2rem;
    overflow-x: hidden;
    overflow-y:scroll;
    font-size: .8rem;
    z-index: 8;
  }

  .playlist-index {
    padding-right: .5rem;
  }

  .playlist-artist {
    text-overflow: ellipsis;
    width: 8rem;
    white-space: nowrap;
    overflow: hidden;
    padding-right: .2rem;
    text-align: center;
  }

  .playlist-index, .playlist-songname, .playlist-artist, .playlist-cur, .ctrlIcons {
    cursor: pointer;
    /*font-size: .8rem;*/
  }
  .playlist-songname{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .mPlayer-playlist-items {
    margin-top: .3rem;
    padding: .2rem 0;
    width: 19.5rem;
    overflow: hidden;
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
    /*margin-right: .4rem;*/
  }

  .toggleListBtn {
    margin-bottom: .4rem;
  }

  .mscAudio {
    display: none;
  }



  .mini-player-box {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: rgba(146, 146, 146, 0.35);
    position: fixed;
    top: 85%;
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
    left: 36%;
    color: #fff;
    z-index: 2;
  }

  .toggle-mini-btn {
    position: absolute;
    color: #fff;
    z-index: 2;
    top: 74%;
    left: 43%;

  }
  .toggle-mini-btn:hover{
    cursor: pointer;
  }

  .volume-slider {
    position: absolute;
    top: 0;
    left: 5px
  }

  .volume-btn {
    position: absolute;
    top: 55%;
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

  .time-ctrl {
    position: absolute;
    bottom: 5%;
    right: 40%;
  }

  .timeDuration {
    margin-left: .4rem;
    font-size: .8rem;
    color: #f8f8f8;
  }

  .ivu-progress-bar {
    width: 7rem
  }

  .vol-ctrl {
    position: absolute;
    bottom: 10%;
    right: 10%;
    color: #fff;
    width: 4rem;
    height: 1rem;

  }

  .my-slider {
    position: absolute;
    top: -21%;
    left: 27%;
    width: 4.5rem;
  }

  .mPlayer-playlist::-webkit-scrollbar-track-piece {
  /*滚动条凹槽的颜色，还可以设置边框属性*/
    background-color:#f8f8f8;
  }
  .mPlayer-playlist::-webkit-scrollbar {
  /*滚动条的宽度*/
    width:8px;
    height:9px;
  }
  .mPlayer-playlist::-webkit-scrollbar-thumb {
  /*滚动条的设置*/
    background-color:#dddddd;
    background-clip:padding-box;
    min-height:28px;
  }
  .mPlayer-playlist::-webkit-scrollbar-thumb:hover {
    background-color:#bbb;
  }
  .progress-bar{
    cursor: pointer;
  }


</style>
