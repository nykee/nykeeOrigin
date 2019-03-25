<template>
  <div class="ft-container">
    <commonTitle :title-name="this.$t('message.featuredTags')"/>
    <Row class="row">
      <i-col :span="8">
        <span @click="emitFromTagEvent('/Blogs/FrontEndTricks',true ,1)"
              class="tagBtn">
          {{$t("message.webFE")}}
        </span>
      </i-col>
      <i-col :span="8">
        <span @click="emitFromTagEvent('/Blogs/GitLearning',true ,7)"
              class="tagBtn">
          Git
        </span>
      </i-col>
      <i-col :span="8">
        <span @click="emitFromTagEvent('/Blogs/FrontEndTricks',true ,1)"
              class="tagBtn">
          JS
        </span>
      </i-col>
    </Row>
    <Row class="row">
      <i-col :span="12">
        <span @click="emitFromTagEvent('/Blogs/MongoDBLearning',true ,2)"
              class="tagBtn">
          MongoDB
        </span>
      </i-col>
      <i-col :span="12">

        <span @click="emitFromTagEvent('/Blogs/BaiduMapLearning',true ,3)"
              class="tagBtn">
          {{$t("message.baiduMap")}}
        </span>
      </i-col>

    </Row>
    <Row class="row">
      <i-col :span="12">
        <span @click="emitFromTagEvent('/Blogs/EchartsLearning',true ,4)"
              class="tagBtn">
          echarts
        </span>
      </i-col>
      <i-col :span="12">
        <span @click="emitFromTagEvent('/Blogs/VueLearning',true ,5)"
              class="tagBtn">
          Vue
        </span>
      </i-col>

    </Row>
    <Row class="row">
      <i-col :span="6">
        <span @click="emitFromTagEvent('/Blogs/ReactLearning',true ,11)"
              class="tagBtn">
        React
        </span>
      </i-col>
      <!--<i-col :span="6" :offset="1">
        <span @click="emitFromTagEvent('/Blogs/D3Learning',true ,9)"
              class="tagBtn">
          D3
        </span>
      </i-col>-->
      <i-col :span="11" offset="7">
        <span @click="emitFromTagEvent('/Blogs/DZDPCrawlSpider',true ,7)"
              class="tagBtn">
          {{$t("message.nodeSpider")}}
        </span>
      </i-col>

    </Row>

  </div>
</template>

<script>
  import commonTitle from './CommonRightColTitle'
  import bus from '../utils/EventBus'

  export default {
    data() {
      return {
        isActive: false
      }
    },
    methods: {
      emitFromTagEvent(path, flag, index) {
        bus.$emit("tagRedirect", {flag: flag, index: index});
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
  .ft-container {
    width: 12.5rem;
    border-top: 1px solid #271111;
    padding-bottom: 1rem;
  }

  .tagBtn {
    display: inline-block;
    padding: 0 .625rem;
    border: 1px solid #BFBFBF;
    border-radius: 999rem;
    text-align: center;
    font-size: .75rem;
    line-height: 1.5rem;
  }

  .tagBtn:hover {
    border-color: #2b85e4;
    cursor: pointer;
    color: #2b85e4
  }

  .row {
    margin-top: 8px;
  }

</style>
