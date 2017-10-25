<template>
  <div class="container">
    <h5><router-link to="/Tags">FEATURED TAGS</router-link></h5>
    <Row  class="row">
      <i-col :span="8"><router-link to="/" class="tagBtn">前端</router-link></i-col>
      <i-col :span="8"><router-link  to="/" class="tagBtn">Git</router-link></i-col>
      <i-col :span="8"><router-link  to="/" class="tagBtn">JS</router-link></i-col>
    </Row >
    <Row class="row">
      <i-col :span="12"><router-link  to="/" class="tagBtn">MongoDB</router-link></i-col>
      <i-col :span="12"><router-link  to="/" class="tagBtn">百度地图</router-link></i-col>
    </Row>
    <Row class="row">
      <i-col :span="12"><router-link  to="/" class="tagBtn">echarts</router-link></i-col>
      <i-col :span="12"><router-link  to="/" class="tagBtn">Vue</router-link></i-col>
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
    margin-bottom:10px;
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
