<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
    <FootBar></FootBar>
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
</style>
