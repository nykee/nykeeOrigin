<template>
  <div>
    <div v-if="!isMini" :class="{'msc-player-box-mb':isMobile,'msc-player-box':!isMobile}"
         style="top:87%;left: -320px"
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
          <i-col :span="7" class="mPlayer-main-board-block">
            <img :src="currentSong.pic" alt="" class="mPlayer-album" :class="{'picSpin':playStatus==='playing'}">
          </i-col>
          <i-col :span="2" class="mPlayer-main-board-block">
            <ul>
              <li @click="changeSongListShow" class="ctrlIcons toggleListBtn">
                <i class="fa " :class="{'fa-caret-up':!isSongListShow,'fa-caret-down':isSongListShow}"></i>
              </li>
              <li @click="changePlayMode" class="ctrlIcons">
                <i class="fa " :class="{'fa-random':isRandom,'fa-reorder':!isRandom}"></i>
              </li>
              <li v-if="isMobile" class="ctrlIcons" @click="toggleMobileMini"><i class="fa fa-toggle-left"></i></li>
            </ul>
          </i-col>
        </Row>
        <div class="time-ctrl">
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
        <div class="vol-ctrl">
          <i class="fa  volume-btn ctrlIcons" @click="showVSlider"
             :class="{'fa-volume-off':isMute,'fa-volume-up':!isMute}"></i>
          <Slider v-model="volumeNum" :step="10" class="my-slider" v-if="isVolumeSliderShow"></Slider>
        </div>
        <div class="miniBtn-container" v-if="!isMobile">
          <i class="fa   miniBtn ctrlIcons" :class="{'fa-chevron-left':!isToggle,'fa-chevron-right':isToggle}"
             @click="toggleSide"></i>
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
    <audio :src="currentSong.url" class="mscAudio" id="mscAudio" ref="mscAudio">
      您的浏览器不支持 audio 标签。请使用Chrome,Firefox等现代浏览器
    </audio>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        isSongListShow: false,  //播放列表显示标志位
        isToggle: true,         //播放器侧边显示标志位
        songLists: [], //全部歌曲
        playStatus: 'paused', //播放状态
        currentSong: [],      //当前播放歌曲
        isMobile: false,     //是否为手机标志位
        isMini: false,      //是否为Mini标志位
        isPlayingIndex: 1, //当前播放歌曲的索引
        volumeNum: 30,     //音量
        isVolumeSliderShow: false, //音量条显示标志位
        isRandom: false, //随机播放flag
        cur_song_duration: "00:00", //当前歌曲播放进度分秒
        cur_song_time_count: "00:00", //当前歌曲总分秒
        playPercent: 0 //进度条百分比
      }
    },
    methods: {
      changeSongListShow() {
        /*播放列表显示标志位*/
        this.isSongListShow = !this.isSongListShow
      },
      changePlayMode() {
        /*切换播放模式*/
        this.isRandom = !this.isRandom;
        let infoMsg = this.isRandom ? "已开启随机播放" : "已开启列表播放";
        this.$Notice.info({
          title: infoMsg
        })
      },
      toggleSide() {
        /*播放器播放器侧边模式与正常模式*/
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
        /*切换mini模式标志位*/
        this.isMini = !this.isMini;
        this.isSongListShow = false
      },
      changePlayStatus() {
        /*点击播放/暂停按钮改变播放状态*/
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
      playPrev() {
        /*播放前一首*/
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
        /*播放下一首*/
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
        /*点击播放列表播放对于的歌曲*/
        this.$refs.mscAudio.setAttribute("autoplay", "autoplay");
        this.currentSong = this.songLists[index - 1];
        this.playStatus = "playing";
        this.$refs.mscAudio.play();
        this.isPlayingIndex = index;
      },
      showVSlider() {
        /*切换音量调整条 的显示*/
        this.isVolumeSliderShow = !this.isVolumeSliderShow
      },
    },
    computed: {
      isMute() {
        /*音量为零返回计算属性isMute*/
        return this.volumeNum === 0
      }
    },
    created: function () {

    },
    mounted() {
      /*ajax获取歌单数据，绑定到songLists和currentSong*/
      axios.get("https://api.bzqll.com/music/tencent/songList?key=579621905&id=5632041384").then((res) => {
        for (let i = 0, len = res.data.data.songs.length; i < len; i++) {
          res.data.data.songs[i].index = i + 1;
        }
        this.songLists = res.data.data.songs;
        this.currentSong = res.data.data.songs[0]
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
    },
    components: {},
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
    color: #f6f6f6;
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
    display: none;
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
</style>
