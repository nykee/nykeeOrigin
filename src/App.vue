<template>
  <div id="app">
    <NavBar></NavBar>

    <div class="main-container">
      <router-view></router-view>
    </div>
    <Row type="flex" justify="center" align="middle" style="margin-top: 20px">
      <FootBar ></FootBar>
    </Row>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue';
  import FootBar from './components/FootBar.vue'
export default {

  data(){
    return {

    }
  },
  methods:{


  },
  mounted:function () {

  },
  watch:{

  },
  components:{
    NavBar,FootBar
  }
}
</script>

<style>

  /*通用样式*/
  a,img{border:0;}
  a{color: #666 !important;text-decoration: none;}
  a:hover{color: #2D8CF0 !important}
  li{list-style-type:none;}
  body, button, select, textarea, input, label, option, fieldset, legend{font-family: 微软雅黑E\8F6F\96C5\9ED1,Tahoma,Verdana;font-size: 12px;line-height: 18px;color: #444;}
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, legend, input, textarea, button, p, blockquote, th, td{margin: 0;padding: 0;}
  .main-container{
    height: auto;
    width: auto;

  }
  body{
    overflow-x:hidden;
  }
  @media screen and (max-width: 425px){
    .container{
      margin-left: 29%;
      margin-bottom:3rem
    }
  }
  /*修改pre不换行的样式*/
  pre{
    white-space:pre-wrap;
    white-space:-moz-pre-wrap;
    white-space:pre-wrap;
    white-space:-o-pre-wrap;
    word-wrap:break-word;
  }
</style>
