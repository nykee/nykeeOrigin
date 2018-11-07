<template>
  <div>
    <IntroHeader></IntroHeader>

      <Row type="flex" justify="center" align="middle"  style="margin-top: 1rem" v-for="proj in projs" v-bind:key="proj.id">
        <i-col  :xs={span:24} :sm={span:24} :md={span:12} :lg={span:12}>
          <ProjectCard :proj-name="proj.pName" :description="proj.desc" :stack="proj.stack" :github="proj.github"></ProjectCard>
        </i-col>
      </Row>

    <BackTop></BackTop>



  </div>
</template>

<script>
  import ProjectCard from '../components/ProjectCard.vue'
  import IntroHeader from '../components/IntroHeader.vue'
    export default {
        data() {
          console.log(this.$t("message.projects_iRide.name"));
            return {
              projs:[
                {
                  id:1,
                pName:this.$t("message.projects_iRide.name"),
                desc:[this.$t("message.projects_iRide.description_1"),this.$t("message.projects_iRide.description_2"),this.$t("message.projects_iRide.description_3")],
                github:this.$t("message.projects_iRide.githubAdd"),
                stack:'BootStrap+Jquery'
                },
                {
                  id:2,
                  pName:this.$t("message.projects_inno.name"),
                  desc:[
                    this.$t("message.projects_inno.description_1"),
                    this.$t("message.projects_inno.description_2"),
                    this.$t("message.projects_inno.description_3"),
                    this.$t("message.projects_inno.description_4"),
                  ],
                  github:this.$t("message.projects_inno.githubAdd"),
                  stack:'Spring、SpringMVC、Mybatis、mysql、BootStrap、Jquery'
                },
                {
                  id:3,
                  pName:'inno云平台 build by Vue',
                  desc:['云平台项目使用Vue重构'],
                  github:'https://github.com/nykee/innooooVue',
                  stack:'Vue'
                },
                {
                  id:4,
                  pName:'FluoMotion云平台 build by Vue',
                  desc:['FluoMotion云平台用Vue.js进行重写','iview'],
                  github:'https://github.com/nykee/nykeeMotion',
                  stack:'Vue'
                },
                {
                  id:5,
                  pName:'FluoMotion云平台 build by React',
                  desc:['react重写了FluoMotion平台，作为入门react','UI组件库使用的阿里的ant-d'],
                  github:'https://github.com/nykee/nykeeMotionVReact',
                  stack:'Ant-d React'
                },
                {
                  id:6,
                  pName:'nykee.github.io',
                  desc:['个人的Github Page SPA','UI库使用iview',
                    "icon使用font-awesome","使用Vue、vue-router"],
                  github:'https://github.com/nykee/nykee.github.io',
                  stack:'Vue.js'
                },
                {
                  id:7,
                  pName:'大众点评NodeJS爬虫',
                  desc:['NodeJS爬虫娱乐项目','使用大众点评的API','superagent发起请求,cheerio解析网页,async控制并发'],
                  github:'https://github.com/nykee/dzdp_spider',
                  stack:'NodeJs'
                },
              ],



            }
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {IntroHeader,ProjectCard}
    }
</script>
<style>

</style>
