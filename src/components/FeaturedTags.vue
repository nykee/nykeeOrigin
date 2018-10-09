<template>
  <div class="container">
    <commonTitle title-name="FEATURED TAGS"/>
    <Row  class="row">
      <i-col :span="8"><span  @click="emitFromTagEvent('/Blogs/FrontEndTricks',true ,1)" class="tagBtn">前端</span></i-col>
      <i-col :span="8"><span   @click="emitFromTagEvent('/Blogs/GitLearning',true ,7)" class="tagBtn">Git</span></i-col>
      <i-col :span="8"><span  @click="emitFromTagEvent('/Blogs/FrontEndTricks',true ,1)" class="tagBtn">JS</span></i-col>
    </Row >
    <Row class="row">
      <i-col :span="12"><span   @click="emitFromTagEvent('/Blogs/MongoDBLearning',true ,2)" class="tagBtn">MongoDB</span></i-col>
      <i-col :span="12"><span   @click="emitFromTagEvent('/Blogs/BaiduMapLearning',true ,3)" class="tagBtn">百度地图</span></i-col>

    </Row>
    <Row class="row">
      <i-col :span="12"><span  @click="emitFromTagEvent('/Blogs/EchartsLearning',true ,4)" class="tagBtn">echarts</span></i-col>
      <i-col :span="12"><span   @click="emitFromTagEvent('/Blogs/VueLearning',true ,5)" class="tagBtn">Vue</span></i-col>

    </Row>
    <Row class="row">
      <i-col :span="6"><span   @click="emitFromTagEvent('/Blogs/ReactLearning',true ,11)" class="tagBtn">React</span></i-col>
      <i-col :span="6" :offset="1"><span   @click="emitFromTagEvent('/Blogs/D3Learning',true ,9)" class="tagBtn">D3</span></i-col>
      <i-col :span="11"><span   @click="emitFromTagEvent('/Blogs/DZDPCrawlSpider',true ,7)" class="tagBtn">Node爬虫</span></i-col>

    </Row>

  </div>
</template>

<script>
  import  commonTitle from '../components/common-right-col-title'
  import bus from '../utils/EventBus'
    export default {
        data() {
            return {
              isActive:false
            }
        },
        methods: {
          emitFromTagEvent(path, flag, index){
            bus.$emit("tagRedirect",{flag:flag,index:index});
            this.$router.push(path)
          },

        },
        created: function () {

        },
        mounted() {

        },
        components: {commonTitle}
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
    cursor: pointer;
    color:#2b85e4
  }
  .row{
       margin-top:8px;
     }

</style>
