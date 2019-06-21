<template>
  <Row type="flex" align="center" justify="center" class="blog-container">
    <i-col :lg="{span:18}" :md="{span:18}" class="blog-content">
      <section  class="tag-section"   >
        <CustomTag :tag="tag.name" v-for="tag in tags" :key="tag.id"/>
      </section>
      <ul class="title-list">
        <li><h1 class="title">Node.js大众点评爬虫</h1></li>
        <section>
          <PostTag :postTime="postTime" />
        </section>
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


      <PagerComponent
        prvUrl="FrontEndTricks"
        prvBgSrc="https://image.nykee.cn/html2.jpg"
        prvBlogTitle="前端技巧汇总，包括CSS,JS"

      >
      </PagerComponent>
      <Comment :bid="b_id" :btitle="btitle"></Comment>

    </i-col>

  </Row>

</template>

<script>
  import PostTag from '../../components/PostTag.vue'
  import PagerComponent from '../../components/PagerComponent'
  import mixin_PV from "../../mixins/index";
  import Comment from '../../components/BlogComment'
  import CustomTag from "../../components/CustomTag"

  export default {
    mixins:[mixin_PV],
    data() {
      return {
        postTime: '2016-11-04',
        b_id:"11",
        btitle:"Node.js大众点评爬虫",
        tags:[
          {id:1,name:"前端"},
          {id:2,name:"爬虫"},
          {id:3,name:"NodeJs"},
        ]
      }
    },
    methods: {},
    created: function () {

    },
    mounted() {
      /*this.$store.dispatch("getPV",{params:{id:"7"}});
      let pv_old = this.$store.state.blog.pv;
      console.log("pv_old:"+pv_old);*/
      let getPV_promise =mixin_PV.methods.getPV(this.b_id);
      let pvs;
      getPV_promise.then((v)=>{
        pvs=v;
        pvs+=1;
        let updatePV_promise= mixin_PV.methods.updatePV(this.b_id,pvs.toString());
        updatePV_promise.then((v)=>{
          console.log(v);
        })
      });
    },
    components: {
      PostTag,PagerComponent
      ,Comment,CustomTag
    }
  }
</script>
<style scoped>
  .descrp > li > i {
    margin-right: 0.3rem;
  }

</style>
