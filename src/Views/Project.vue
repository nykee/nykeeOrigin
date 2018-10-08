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
            return {
              projs:[
                {
                  id:1,
                pName:'仿美骑首页',
                desc:['仿照美骑网首页，制作了一个首页+一个商品详情页','使用了JQuery+BootStrap',"电商页面，实现了商品放大镜显示等效果"],
                github:'那时候还不会用github，2333',
                stack:'BootStrap+Jquery'
                },
                {
                  id:2,
                  pName:'逸动云平台',
                  desc:[
                    '公司云平台初版，负责前后端架构设计与搭建',
                    '前台采用JQuery+BootStrap+css3，后台使用SSM框架',
                    '数据可视化采用百度echarts',
                    "参与前后端的架构搭建，完成功能开发：用户web端上传文件后，后台分析公司特有的.opt文件中的数据，写入后台后进行前端数据可视化的展示"
                  ],
                  github:'无',
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
                  desc:['个人的Github Page SPA','UI库使用iview',"icon使用font-awesome"],
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
