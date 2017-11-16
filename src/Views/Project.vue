<template>
  <div>
    <IntroHeader></IntroHeader>
    <Row type="flex" justify="center" align="middle"  style="margin-top: 1rem">
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
              mq:{pName:'仿美骑首页',desc:``,github:'',stack:'BootStrap+Jquery'},
              innoJQ:{pName:'inno云平台 build by jq&boot',desc:'inno云平台JQ',github:'',stack:'BootStrap+Jquery'},
              innoVue:{pName:'inno云平台 build by Vue',desc:'inno云平台Vue',github:'https://github.com/nykee/innoVue',stack:'BootStrap+Jquery'},
              FluoVue:{pName:'FluoMotion云平台 build by Vue',desc:'FluoMotion云平台Vue',github:'https://github.com/nykee/FluoMotion',stack:'BootStrap+Jquery'},
              FluoReact:{pName:'FluoMotion云平台 build by React',desc:'Fluo云平台React',github:'https://github.com/nykee/FluoMotionVReact',stack:'BootStrap+Jquery'},
              nykee:{pName:'nykee.github.io',desc:'nykee.github.io',github:'https://github.com/nykee/nykee.github.io',stack:'iview'},
              dzdp:{pName:'大众点评NodeJS爬虫',desc:'大众点评描述',github:'https://github.com/nykee/dzdp_spider',stack:'NodeJs'},

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
