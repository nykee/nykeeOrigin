<template>
    <Row type="flex" align="center" justify="center" class="blog-container">
        <i-col :lg="{span:18}" class="blog-content">
            <section>
                <ul class="title-list">
                    <li>
                        <h1 class="title">前端性能优化</h1>
                    </li>
                </ul>
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
                    <span>npm run build --report</span>
                    <picture>
                        <source type="image/webp" srcset="https://image.nykee.cn/run_rpt.png" >
                        <img  src="https://image.nykee.cn/run_rpt.png" alt="" style="max-width: 90%">
                    </picture>

                </div>
                <div class="title-lv1">三 webpack开启GZIP</div>
                <p class="title-lv2">1、npm安装compression-webpack-plugin,修改config.build.productionGzip为true</p>
                <pre>
        <code>
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
                    从最开始的首屏加载6.2秒到最后开启了Gzip的88ms，加载速度也算是有很大的飞跃，
                    自己也是摸索了蛮多的性能优化手段，包括图片压缩、webp图片格式、CDN、前后端GZIP，
                    过程中也接触了很多现在没用到的性能优化技术，webpack dll，vue路由懒加载等，等留着以后再玩吧，EOF</p>


                <PostTag :postTime="postTime"/>
            </section>
        </i-col>

    </Row>
</template>

<script>
  import PostTag from '../../components/PostTag.vue'

  export default {
    data() {
      return {
        postTime: '2018-11-20',
      }
    },
    methods: {},
    created: function () {

    },
    mounted() {

    },
    components: {PostTag}
  }
</script>
<style>

</style>
