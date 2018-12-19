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

  export default {

    data() {
      return {}
    },
    methods: {},
    mounted: function () {

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

  /*修改pre不换行的样式*/
  pre {
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
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

</style>
