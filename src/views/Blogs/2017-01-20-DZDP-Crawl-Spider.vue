<template>
  <Row type="flex" align="center" justify="center" class="blog-container">
    <i-col :lg="{span:14}" class="blog-content">
      <ul class="title-list">
        <li><h1 class="title">Node.js大众点评爬虫</h1></li>
        <li class="list-items">语言: Node.js</li>
        <li class="list-items">日期: 2016/11/04</li>
      </ul>
      <ol class="descrp">概述：
        <li><i class="fa fa-dot-circle-o "></i>搜索了下网上的node.js爬虫，发现有个爬大众点评的，吃向来是中国人比较感兴趣的，就点进去逛了下</li>
        <li><i class="fa fa-dot-circle-o"></i>自己照葫芦画瓢写了个爬上海的美食的小爬虫</li>
        <li><i class="fa fa-dot-circle-o "></i>语言为Node.js,superagent发起请求,cheerio解析网页,async控制并发</li>
        <li><i class="fa fa-github fa-2x"></i>GitHub地址： <a href="https://github.com/nykee/dzdp_spider">https://github.com/nykee/dzdp_spider</a>
        </li>
      </ol>

      <PostTag :postTime="postTime"/>
    </i-col>

  </Row>

</template>

<script>
  import PostTag from '../../components/PostTag.vue'

  export default {
    data() {
      return {
        postTime: '2016-11-04'
      }
    },
    methods: {},
    created: function () {

    },
    mounted() {

    },
    components: {
      PostTag
    }
  }
</script>
<style scoped>
  .descrp > li > i {
    margin-right: 0.3rem;
  }

</style>
