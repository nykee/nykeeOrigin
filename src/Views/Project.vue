<template>
  <div>
    <IntroHeader></IntroHeader>
    <transition-group name="bounce" tag="p">
      <Row type="flex" justify="center" align="middle"  style="margin-top: 1rem" v-for="proj in projs" v-bind:key="proj">
        <i-col  span="12">
          <ProjectCard :proj-name="proj.pName" :description="proj.desc" :stack="proj.stack" :github="proj.github"></ProjectCard>
        </i-col>
      </Row>
    </transition-group>
    <!--<Row type="flex" justify="center" align="middle"  style="margin-top: 1rem">
      <i-col  span="12">
        <ProjectCard :proj-name="mq.pName" :description="mq.desc" :stack="mq.stack" :github="mq.github"></ProjectCard>
      </i-col>
    </Row>
    <Row type="flex" justify="center" align="middle"  style="margin-top: 1rem">
      <i-col  span="12">
        <ProjectCard :proj-name="innoJQ.pName" :description="innoJQ.desc" :stack="innoJQ.stack" :github="innoJQ.github"></ProjectCard>
      </i-col>
    </Row>
    <Row type="flex" justify="center" align="middle"  style="margin-top: 1rem">
      <i-col  span="12">
        <ProjectCard :proj-name="innoVue.pName" :description="innoVue.desc" :stack="innoVue.stack" :github="innoVue.github"></ProjectCard>
      </i-col>
    </Row>
    <Row type="flex" justify="center" align="middle"  style="margin-top: 1rem">
      <i-col span="12" >
        <ProjectCard :proj-name="nykee.pName" :description="nykee.desc" :stack="nykee.stack" :github="nykee.github"></ProjectCard>
      </i-col>
    </Row>
    <Row type="flex" justify="center" align="middle"  style="margin-top: 1rem">
      <i-col span="12" >
        <ProjectCard :proj-name="FluoVue.pName" :description="FluoVue.desc" :stack="FluoVue.stack" :github="FluoVue.github"></ProjectCard>
      </i-col>
    </Row>
    <Row type="flex" justify="center" align="middle"  style="margin-top: 1rem">
      <i-col span="12" >
        <ProjectCard :proj-name="FluoReact.pName" :description="FluoReact.desc" :stack="FluoReact.stack" :github="FluoReact.github"></ProjectCard>
      </i-col>
    </Row>
    <Row type="flex" justify="center" align="middle"  style="margin-top: 1rem">
      <i-col span="12" >
        <ProjectCard :proj-name="dzdp.pName" :description="dzdp.desc" :stack="dzdp.stack" :github="dzdp.github"></ProjectCard>
      </i-col>
    </Row>-->
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
                pName:'仿美骑首页',
                desc:['仿照美骑网首页，制作了一个首页+一个商品详情页','使用了JQuery+BootStrap'],
                github:'',
                stack:'BootStrap+Jquery'
                },
                {
                  pName:'inno云平台 build by jq&boot',
                  desc:['仿照美骑网首页，制作了一个首页+一个商品详情页','使用了JQuery+BootStrap'],
                  github:'',
                  stack:'BootStrap+Jquery'
                },
                {
                  pName:'inno云平台 build by Vue',
                  desc:['仿照美骑网首页，制作了一个首页+一个商品详情页','使用了JQuery+BootStrap'],
                  github:'https://github.com/nykee/innoVue',
                  stack:'BootStrap+Jquery'
                },
                {
                  pName:'FluoMotion云平台 build by Vue',
                  desc:['仿照美骑网首页，制作了一个首页+一个商品详情页','iview'],
                  github:'https://github.com/nykee/FluoMotion',
                  stack:'BootStrap+Jquery'
                },
                {
                  pName:'FluoMotion云平台 build by React',
                  desc:['react重写了FluoMotion平台，作为入门react','UI组件库使用的阿里的ant-d'],
                  github:'https://github.com/nykee/FluoMotionVReact',
                  stack:'BootStrap+Jquery'
                },
                {
                  pName:'nykee.github.io',
                  desc:['个人的Github Page','UI库使用iview'],
                  github:'https://github.com/nykee/nykee.github.io',
                  stack:'iview'
                },
                {
                  pName:'大众点评NodeJS爬虫',
                  desc:['大众点评NodeJS爬虫','使用了JQuery+BootStrap'],
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
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
