<template>
  <div class="container">
    <h5><router-link to="/Tags">FEATURED TAGS</router-link></h5>
    <Row  class="row">
      <i-col :span="8"><router-link to="/Blogs/FrontEndTricks" class="tagBtn">前端</router-link></i-col>
      <i-col :span="8"><router-link  to="/Blogs/GitLearning" class="tagBtn">Git</router-link></i-col>
      <i-col :span="8"><router-link  to="/Blogs/FrontEndTricks" class="tagBtn">JS</router-link></i-col>
    </Row >
    <Row class="row">
      <i-col :span="12"><router-link  to="/Blogs/MongoDBLearning" class="tagBtn">MongoDB</router-link></i-col>
      <i-col :span="12"><router-link  to="/Blogs/BaiduMapLearning" class="tagBtn">百度地图</router-link></i-col>
    </Row>
    <Row class="row">
      <i-col :span="12"><router-link  to="/Blogs/EchartsLearning" class="tagBtn">echarts</router-link></i-col>
      <i-col :span="12"><router-link  to="/Blogs/VueLearning" class="tagBtn">Vue</router-link></i-col>

    </Row>
    <Row class="row">
      <i-col :span="12"><router-link  to="/Blogs/ReactLearning" class="tagBtn">React</router-link></i-col>

    </Row>

  </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {}
    }
</script>
<style scoped>
  .container{
    width: 200px;
    border-top:1px solid #271111;
    padding-bottom: 1rem;
  }
  .tagBtn{
    display: inline-block;
    /*width: 65px;*/
    padding: 0 10px;
    border: 1px solid #BFBFBF;
    border-radius: 999rem;
    text-align: center;
    font-size: 12px;
    line-height:24px;
  }
  .tagBtn:hover{
    border-color: #2b85e4;
  }
  .row{
       margin-top:8px;
     }

</style>
