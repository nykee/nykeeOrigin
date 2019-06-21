<template>
    <Row type="flex" align="center" justify="center" class="blog-container">
        <i-col :lg="{span:18}" :md="{span:18}" class="blog-content">
          <section  class="tag-section"   >
            <CustomTag :tag="tag.name" v-for="tag in tags" :key="tag.id"/>
          </section>
            <section>
                <ul class="title-list">
                    <li>
                        <h1 class="title">前端性能优化</h1>
                    </li>
                </ul>
            </section>

          <section>
            <PostTag :postTime="postTime" />
          </section>
            <section class="main-body">
                <div id="part1" class="part">
                    <div class="title-lv1">一 前端部分</div>
                    <div class="descrp">
                        <p class="title-lv2">1、index.html引入CDN</p>
                        <picture>
                            <source type="image/webp" srcset="https://image.nykee.cn/cdn.jpg" >
                            <img  src="https://image.nykee.cn/cdn.jpg" alt="">
                        </picture>
                        <p class="title-lv2">2、Webpack配置externals将不需要打包的CDN排除</p>
                        <picture>
                            <source type="image/webp" srcset="https://image.nykee.cn/exter.jpg" >
                            <img  src="https://image.nykee.cn/exter.jpg" alt="">
                        </picture>
                        <p class="title-lv2">3、Vue插件注释掉Vue.use</p>
                        <picture>
                            <source type="image/webp" srcset="https://image.nykee.cn/vueuse.jpg" >
                            <img  src="https://image.nykee.cn/vueuse.jpg" alt="">
                        </picture>
                    </div>
                    <div class="title-lv1">二 iview按需引入</div>
                    <p class="title-lv2">1、按需引入组件</p>
                    <picture>
                        <source type="image/webp" srcset="https://image.nykee.cn/iview1.jpg" >
                        <img  src="https://image.nykee.cn/iview2.jpg" alt="">
                    </picture>
                    <p class="title-lv2">2、Vue.component()注册组件</p>
                    <picture>
                        <source type="image/webp" srcset="https://image.nykee.cn/iview2.jpg" >
                        <img  src="https://image.nykee.cn/iview1.jpg" alt="">
                    </picture>
                    <p class="title-lv2">3、通过webpack-bundle-analyzer插件查看打包情况</p>
                  <pre v-highlightjs>
                    <code class="lang-Bash">
                      npm run build --report
                    </code>
                  </pre>
                    <picture>
                        <source type="image/webp" srcset="https://image.nykee.cn/run_rpt.png" >
                        <img  src="https://image.nykee.cn/run_rpt.png" alt="" style="max-width: 90%">
                    </picture>


                </div>
                <div class="title-lv1">三 webpack开启GZIP</div>
                <p class="title-lv2">1、npm安装compression-webpack-plugin,修改config.build.productionGzip为true</p>
                <pre v-highlightjs>
        <code class="lang-javascript">
          if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}
        </code>
      </pre>

                <picture>
                    <source type="image/webp" srcset="https://image.nykee.cn/gzip.png" >
                    <img  src="https://image.nykee.cn/gzip.png" alt="">
                </picture>
                <p class="title-lv3">打包后体积显著变小</p>
                <picture>
                    <source type="image/webp" srcset="https://image.nykee.cn/gzipA.jpg" >
                    <img  src="https://image.nykee.cn/gzipA.jpg" alt="">
                </picture>
                <div class="title-lv1">二 后端部分</div>
                <p class="title-lv2">Tomcat配置gzip</p>
                <ul>
                    <li><span>后端仅配置了tomcat的Gzip其他容器后续用到再试</span></li>
                    <li><span>tomcat只需修改server.xml中的配置即可</span></li>
                </ul>
                <picture>
                    <source type="image/webp" srcset="https://image.nykee.cn/tomcat.jpg" >
                    <img  src="https://image.nykee.cn/tomcat.jpg" alt="">
                </picture>
                <p class="title-lv2">重启tomcat并访问验证</p>
                <p>返回的响应头的类型为GZIP即为开启gizp成功</p>
                <picture>
                    <source type="image/webp" srcset="https://image.nykee.cn/gzipRes.jpg" >
                    <img  src="https://image.nykee.cn/gzipRes.jpg" alt="">
                </picture>


                <div class="title-lv1">三 总结</div>

                <p class="title-lv3">为了个人网站的首屏开启速度也算是做了一点前端性能优化，
                    从最开始的首屏加载6.2秒到最后开启了Gzip的605ms(0.6秒)，首屏打开速度也算是有很大的飞跃，
                    自己也是摸索了蛮多的性能优化手段，包括图片压缩、webp图片格式、CDN、前后端GZIP，
                    过程中也接触了很多现在没用到的性能优化技术，webpack dll，vue路由懒加载等，等留着以后再玩吧，EOF</p>
              <ReferArticles :articles="articles"></ReferArticles>

            </section>
          <PagerComponent
            next-url="VueI18n"
            next-bg-src="https://image.nykee.cn/i18n.jpg"
            next-blog-title="Vue-i18n实现国际化"
            prvUrl="Ayada"
            prvBgSrc="https://image.nykee.cn/back.jpg"
            prvBlogTitle="阿雅达蜜月之旅"
          >
          </PagerComponent>
            <BlogComments></BlogComments>
        </i-col>

    </Row>
</template>

<script>
  import PostTag from '../../components/PostTag.vue'
  import PagerComponent from '../../components/PagerComponent'
  import Comment from '../../components/BlogComment'
  import mixin_PV from "../../mixins/index";
  import CustomTag from "../../components/CustomTag"
  import ReferArticles from "../../components/ReferArticlesComp"
  // import store from "../../store/store"


  export default {
   mixins:[mixin_PV],

    data() {
      return {
        postTime: '2018-11-20',
        // pv:mixin_PV.data().pv
        b_id:"1",
        btitle:"前端性能优化",
        tags:[
          {id:1,name:"前端"},
          {id:2,name:"性能优化"},
        ],
        articles:[
          {
            id:1,href:'https://juejin.im/post/5a291092518825293b50366d',name:'Vue SPA 首屏加载优化实践'
          },
          {
            id:2,href:'https://juejin.im/post/5a3251ee6fb9a0450f21f6ac',name:'Vue SPA 打包优化实践'
          },
          {
            id:3,href:'https://www.cnblogs.com/wukong-holmes/p/9154437.html',name:'基于Vue的SPA如何优化页面加载速度'
          },
          {
            id:4,href:'https://www.codercto.com/a/34562.html',name:'Vue SPA 项目webpack打包优化指南'
          },
        ]
      }
    },
    computed:{
      /*pv(){
        console.log(this.$store.state);
        return this.$store.state.blog.pv
      }*/
    },
    methods: {},
    created: function () {

    },
    mounted() {
     // mixin_PV.methods.getPV("1");
     // console.log(this.pv);
      /* this.$store.dispatch("getPV",{params:{id:"12"}});
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
    components: {PostTag,PagerComponent,
    Comment,CustomTag,ReferArticles}
  }
</script>
<style>

</style>
