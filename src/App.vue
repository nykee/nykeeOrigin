<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
    <el-row type="flex" justify="center">
      <FootBar ></FootBar>
    </el-row>
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
  a{color: #666;text-decoration: none;}
  li{list-style-type:none;}
  body, button, select, textarea, input, label, option, fieldset, legend{font-family: 微软雅黑E\8F6F\96C5\9ED1,Tahoma,Verdana;font-size: 12px;line-height: 18px;color: #444;}
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, legend, input, textarea, button, p, blockquote, th, td{margin: 0;padding: 0;}

</style>
