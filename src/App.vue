<template>
  <div id="app">
    <NavBar></NavBar>

    <div class="main-container">
      <router-view></router-view>
    </div>
    <Row type="flex" justify="center" align="middle">
      <FootBar></FootBar>
    </Row>
    <BackTop></BackTop>
    <MusicPlayer></MusicPlayer>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue';
  import FootBar from './components/FootBar.vue'
  import MusicPlayer from './components/MusicPlayer'
  // import hljs from "highlight.js"
  // import javascript from 'highlight.js/lib/languages/javascript';
  // hljs.registerLanguage('javascript', javascript);

  export default {
      provide:{
          isMobile:window.screen.width < 769
      },

    data() {
      return {

      }
    },
    methods: {
      /*highlightCode:() => {
        const preEl = document.querySelectorAll('pre');

        preEl.forEach((el) => {
          hljs.highlightBlock(el)
        })
      }*/
    },
    mounted: function () {
      POWERMODE.colorful = true; // 火花各种颜色
      POWERMODE.shake = false; // 关闭打字屏幕颤抖效果
      document.body.addEventListener('input', POWERMODE);

      // this.highlightCode();
    },
    updated:function () {
      // this.highlightCode();
    },
    watch: {},
    components: {
      NavBar,
      FootBar,
      MusicPlayer
    }
  }
</script>

<style>

  /*通用样式*/
  a, img {
    border: 0;
  }

  a {
    color: #666 !important;
    text-decoration: none;
  }

  a:hover {
    color: #2D8CF0 !important
  }

  li {
    list-style-type: none;
  }

  body, button, select, textarea, input, label, option, fieldset, legend {
    font-family: "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif !important;
    font-size: 14px !important;
    line-height: 18px;
    color: #444;
  }

  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, legend, input, textarea, button, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }

  .main-container {
    height: auto;
    width: auto;

  }

  body {
    overflow-x: hidden;
  }

  /*浮动*/
  .fl {
    float: left;
  }

  .fr {
    float: right
  }

  .clearfix {
    *zoom: 1
  }

  .clearfix:after {
    display: block;
    visibility: hidden;
    clear: both;
    height: 0;
    content: '.';
    font-size: 0
  }
  .cur-po{
    cursor: pointer;
  }

  /*修改pre不换行的样式*/
  pre {
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    margin-top: .6rem;
    margin-bottom: .4rem;
  }

  .flexContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .resp-img {
    width: 100%;
    height: auto;
    max-width: 100%;
    display: block;
  }

  .position-relative {
    position: relative
  }
  .textA-center{
    text-align: center;
  }

  @media (min-width: 1024px) {
    body {
      font-size: 18px
    }
  }

  /*>=1024的设备*/
  @media (min-width: 1100px) {
    body {
      font-size: 20px
    }
  }

  /*>=1024的设备*/
  @media (min-width: 1280px) {
    body {
      font-size: 22px;
    }
  }

  @media (min-width: 1366px) {
    body {
      font-size: 24px;
    }
  }

  @media (min-width: 1440px) {
    body {
      font-size: 25px
    }
  }

  @media (min-width: 1680px) {
    body {
      font-size: 28px;
    }
  }

  @media (min-width: 1920px) {
    body {
      font-size: 33px;
    }
  }
  @media screen and (min-width: 2560px)  {
    body{
      font-size: 36px;
    }
  }
  /*.blog-content{*/
    /*margin-top:2rem;*/
  /*}*/
  .tag-section{
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .ivu-slider-button-wrap{
    top:-7px !important;
    width: 12px!important;
    height: 12px!important;
  }
  .ivu-slider-button{
    width: 10px!important;
    height: 10px!important;
  }

  .shake-shake{
    animation: uk-text-shadow-glitch .95s cubic-bezier(1,-1.91,0,2.79) 0s infinite normal both running;
  }
  @keyframes uk-text-shadow-glitch {
    0% {
      text-shadow: none
    }
    25% {
      text-shadow: -1px -1px 0 #ff0048,1px 1px 0 #3234ff
    }
    50% {
      text-shadow: 1px -1px 0 #ff0048,-1px 1px 0 #3234ff
    }
    75% {
      text-shadow: -1px 1px 0 #ff0048,1px -1px 0 #3234ff
    }
    100% {
      text-shadow: 1px 1px 0 #ff0048,-1px -1px 0 #3234ff
    }
  }
  @keyframes uk-flicker {
    0% {
      opacity: 0
    }
    10% {
      opacity: .6;
      transform: scale(.8)
    }
    20% {
      opacity: 0
    }
    40% {
      opacity: 1
    }
    50% {
      opacity: .2;
      transform: scale(1.1)
    }
    100% {
      opacity: 1;
      transform: scale(1)
    }
  }
  .fs-14{
    font-size: 14px;
  }
  .fs-16{
    font-size: 16px;
  }
  .fs-18{
    font-size: 18px;
  }
  .fs-20{
    font-size: 20px;
  }
  .lh-22{
    line-height: 22px;
  }
  .lh-24{
    line-height: 24px;
  }
  .lh-26{
    line-height: 26px;
  }

</style>
