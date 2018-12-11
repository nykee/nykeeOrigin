<template>
  <div>
    <section>
      <ul class="title-list">
        <li >
          <h1 class="title">Vue-i18n实现国际化</h1>
        </li>
      </ul>
    </section>
    <section class="main-body">
      <div id="part1" class="part">
        <div class="title-lv1">Step1 依赖安装及脚手架配置</div>
        <div class="descrp">
          <ul>
            <li class="steps">1、安装依赖：vue-i18n 、@kazupon/vue-i18n-loader</li>
            <li class="steps">2、配置Vue-cli的配置文件：
              <ul>
                <li class="steps-item">
                  webpack.base.conf.js中的loader指向了Vue-loader于是在Vue-loader.conf.js中修改
                </li>
                <li class="steps-item">
                  <picture>
                    <source type="image/webp" srcset="http://image.nykee.cn/webapck.base.webp" class="resp-img" >
                    <img class="blog-img" src="http://image.nykee.cn/webapck.base.jpg" alt="">
                  </picture>
                </li>
                <li class="steps-item">
                  在loader中添加{ i18n: '@kazupon/vue-i18n-loader' } ，修改后的loader配置如下：
                </li>
                <li class="steps-item">
                 <!-- <CustomPicture imgSrc="../../../static/img/vue-loader.conf.jpg"
                                 className="blog-img"
                                 srcSet="../../../static/img/vue-loader.conf.webp"/>-->
                  <picture>
                    <source type="image/webp" srcset="http://image.nykee.cn/vue-loader.conf.webp" class="resp-img" >
                    <img src="http://image.nykee.cn/vue-loader.conf.jpg" class="resp-img"/>
                  </picture>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div id="part2" class="part">
        <div class="title-lv1">Step2 Vue中的配置</div>
        <div class="descrp">
          <ul>
            <li>
              <span>1、入口文件引入并使用i18n</span>
              <pre>
                <code class="code-text">
                    import VueI18n from 'vue-i18n'
                    Vue.use(VueI18n);
                </code>
              </pre>
            </li>
            <li>
              <span>2、实例化Vuei18n,设置默认的语言，并通过require引入相关的词典json文件</span>
              <pre>
                <code class="code-text">
                  const i18n = new VueI18n({
                      locale:'zh',
                        messages:{
                          zh: require('./i18n/app-zh.json'),
                          en: require('./i18n/app-en.json'),
                          ja: require('./i18n/app-ja.json'),

                        }
                    });
                </code>
              </pre>
            </li>
            <li>
              <span>3、json词典文件例子如下</span>
              <pre>
                <code class="code-text">
                  {
                    "message": {
                      "home": "home",
                      "projects": "projects",
                      "nykee": "Nykee`s blog",
                      "blog":"blogs",
                      "aboutMe":"AboutMe",
                      "selfIntro":" Hi,my name is nykee .And i am interested in Web front-end!I am working at a start-up company as a web developer",
                    }
                  }
                </code>
              </pre>
            </li>
            <li>
              <span>4、将实例化的i18n配置通过option的方式注入到Vue实例上</span>
              <pre>
                <code class="code-text">
                   new Vue({
                el: '#app',
                router,
                store,
                i18n,
                template: '&ltApp/>',
                components: { App }
                });
                </code>
              </pre>
            </li>
          </ul>
        </div>
      </div>
      <div id="part3" class="part">
        <div class="title-lv1">Step3 Vue template及js中使用</div>
        <div class="descrp">
          <ul>
            <li>
              <span>1、在Vue template中通过 {{i18nVar}}来使用</span>
              <pre>
                <code class="code-text">
                 &lt;router-link to="/Blogs/FrontEndTricks" style="color:#000!important;">{&nbsp;{ $t("message.blog")}} &lt;/router-link>
                </code>
              </pre>
            </li>
            <li>
              <span>2、在javascript中通过this.$t("message.xxx")来使用</span>
              <pre>
                <code class="code-text">
                  &lt;commonTitle :title-name="this.$t('message.aboutMe')"/>
                </code>
              </pre>
            </li>
          </ul>
        </div>
      </div>  <div id="part4" class="part">
      <div class="title-lv1">Step4 动态切换语言</div>
      <div class="descrp">
        <ul>
          <li>
            <span>1、使用select组件切换语言，并绑定语言变量</span>
            <pre>
              <code class="code-text">
                &lt;Select v-model="lanSel" size="small" style="width: 5rem">
                    &lt;Option v-for="lan in languages" :value="lan.value" :key="lan.value">{&nbsp;{ lan.label }}&lt;/Option>
                &lt;/Select>
              </code>
            </pre>
          </li>
          <li>
            <span>2、通过watch方法来监听绑定的语言变量，并通过this.$i18n.locale来改变locale</span>
            <pre>
              <code class="code-text">
                watch:{
          lanSel:function (val) {
            switch (val.toString()){
              case "Chinese":
                this.$i18n.locale = "zh";
                break;
              case "English":
                this.$i18n.locale = "en";
                break;
              case "Japanese":
                this.$i18n.locale = "ja";
                break;
              default:
                this.$i18n.locale = "zh";
                break;
            }

          }
      },
              </code>
            </pre>
          </li>
        </ul>
      </div>
    </div>
        <PostTag :postTime="postTime"/>
    </section>
  </div>
</template>

<script>
  import PostTag from '../../components/PostTag.vue'
//  import CustomPicture from "../../components/CustomPicture"
    export default {
        data() {
            return {
              postTime:'2018-11-07',
              i18nVar:"{{ $t(\"message.变量\") }}"
            }
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {PostTag,}
    }
</script>
<style>

</style>
