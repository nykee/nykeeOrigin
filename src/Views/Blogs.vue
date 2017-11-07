<template>
  <div >
    <Row>
      <i-col>
        <IntroHeader></IntroHeader>
      </i-col>
    </Row>
    <Row  class="blog-container">
      <i-col :span="5" >
        <Menu  theme="light" active-name="1" >



            <MenuItem name="1"><router-link to="/_2017_01_22">前端技巧汇总，包括CSS,JS</router-link></MenuItem>
            <MenuItem name="7"><router-link to="/_2017_11_07">Git笔记</router-link></MenuItem>
            <MenuItem name="2"><router-link to="/_2017_02_14">MongoDB学习笔记</router-link></MenuItem>
            <MenuItem name="3"><router-link to="/_2017_06_18">百度地图学习笔记</router-link></MenuItem>
            <MenuItem name="4"><router-link to="/_2017_09_21">Echarts2.7.2爬坑记录</router-link></MenuItem>
            <MenuItem name="5"><router-link to="/_2017_09_26">Vue学习笔记</router-link></MenuItem>
            <MenuItem name="6"><router-link to="/_2017_01_20">大众点评Node.js爬虫</router-link></MenuItem>



        </Menu>
      </i-col>
      <i-col :span="19" >


          <router-view></router-view>


      </i-col>
    </Row>
    <BackTop></BackTop>
  </div>
</template>

<script>
  import IntroHeader from '../components/IntroHeader.vue'
    export default {
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        mounted() {
          this.$router.push('/_2017_01_22')

        },
        components: {
          IntroHeader
        }
    }
</script>
<style>
  .title{
    margin-bottom:15px;
  }
  .desc>li{
    margin-left:20px;
  }
  .list-items{
    font-size: 16px;
    margin-top:5px;

  }
  .title-list{
    margin-bottom:15px;
  }
  .code-text{
    background-color: #EAEEF3;
    font-family: Menlo,Monaco,Consolas,Courier New,monospace;
    margin-top:15px;
    margin-bottom:15px;
    color:#333;
    word-break:normal;
    display: block;
    font-size:14px;
    padding: 1px;
  }
  .title-lv1{
    font-size: 20px;
    font-weight:bold;

  }
  .title-lv2{
    font-size: 18px;
    font-weight:bold;
  }
  .title-lv3{
    font-size: 16px;
    margin-left: 10px;
    margin-top:10px;
    font-weight:bold;
  }
  .part{
    margin-bottom:10px;
  }
  .section{
    margin-top:10px;
  }
  .blog-container{
    margin-top:20px;
  }
  .descrp{
    font-size: 16px;
    line-height: 1.27rem;
    margin-top:1rem;
  }


</style>
