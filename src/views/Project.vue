<template>
  <div>
    <IntroHeader
            Title="Projects"
            imgSrc="https://image.nykee.cn/index.jpg"
            subTitle=""
            :isProjectPage="false"/>
    <div class="proj-box">
      <Row type="flex" justify="center" align="middle" class="proj-row" v-for="proj in projs" v-bind:key="proj.id">
        <i-col :xs={span:24} :sm={span:24} :md={span:16} :lg={span:12}>
          <ProjectCard :proj-name="proj.pName" :description="proj.desc" :stack="proj.stack"
                       :github="proj.github"></ProjectCard>
        </i-col>
      </Row>
    </div>

  </div>
</template>

<script>
  import ProjectCard from '../components/ProjectCard.vue'
  import IntroHeader from '../components/IntroHeader.vue'

  export default {
    data() {
      // console.log(this.$t("message.projects_iRide.name"));
      return {
        // projs:


      }
    },
    methods: {},
    created: function () {

    },
    mounted() {

    },
    computed:{
      projs:function () {
        return  [
          {
            id: 1,
            pName: this.$t("message.projects_iRide.name"),
            desc: [this.$t("message.projects_iRide.description_1"), this.$t("message.projects_iRide.description_2"), this.$t("message.projects_iRide.description_3")],
            github: this.$t("message.projects_iRide.githubAdd"),
            stack: 'BootStrap+Jquery'
          },
          {
            id: 2,
            pName: this.$t("message.projects_inno.name"),
            desc: [
              this.$t("message.projects_inno.description_1"),
              this.$t("message.projects_inno.description_2"),
              this.$t("message.projects_inno.description_3"),
              this.$t("message.projects_inno.description_4"),
            ],
            github: this.$t("message.projects_inno.githubAdd"),
            stack: 'Spring、SpringMVC、Mybatis、mysql、BootStrap、Jquery'
          },
          {
            id: 3,
            pName: this.$t("message.projects_innoVue.name"),
            desc: [
              this.$t("message.projects_innoVue.description_1"),
              this.$t("message.projects_innoVue.description_2"),
              this.$t("message.projects_innoVue.description_3"),
            ],
            stack: 'Vue、SSM'
          },
          {
            id: 4,
            pName: this.$t("message.projects_fluoVue.name"),
            desc: [this.$t("message.projects_fluoVue.description_1"), this.$t("message.projects_fluoVue.description_2"),],
            stack: 'Vue'
          },
          {
            id: 5,
            pName: this.$t("message.projects_fluoReact.name"),
            desc: [this.$t("message.projects_fluoReact.description_1"), this.$t("message.projects_fluoReact.description_2"),],
            stack: 'Ant-d React'
          },
          {
            id: 6,
            pName: this.$t("message.projects_nykee.name"),
            desc: [this.$t("message.projects_nykee.description_1"),
              this.$t("message.projects_nykee.description_2"),
              this.$t("message.projects_nykee.description_3"),
              this.$t("message.projects_nykee.description_4"),
              this.$t("message.projects_nykee.description_5"),
              this.$t("message.projects_nykee.description_6"),
              this.$t("message.projects_nykee.description_7"),
            ],
            github: 'https://github.com/nykee/nykeeOrigin',
            stack: 'Vue.js'
          },
          {
            id: 7,
            pName: this.$t("message.projects_dzdp.name"),
            desc: [this.$t("message.projects_dzdp.description_1"),
              this.$t("message.projects_dzdp.description_2"),
              this.$t("message.projects_dzdp.description_3"),],
            github: 'https://github.com/nykee/dzdp_spider',
            stack: 'NodeJS'
          },
          {
            id: 8,
            pName: this.$t("message.projects_wkzf.name"),
            desc: [this.$t("message.projects_wkzf.description_1"),
              this.$t("message.projects_wkzf.description_2"),
              this.$t("message.projects_wkzf.description_3"),],
            github: '',
            stack: 'Java'
          },
        ]
      }
    },
    components: {IntroHeader, ProjectCard}
  }
</script>
<style scoped>
  .proj-row {
    margin-top: 1rem;
  }
  .proj-box{
    margin-top: 24rem;
  }
  @media screen and (min-width: 320px){
    .proj-box{
      margin-top: 18rem;
    }
  }
  @media screen and (min-width: 375px){
    .proj-box{
      margin-top: 20rem;
    }
  }
  @media screen and (min-width: 425px){
    .proj-box{
      margin-top: 22rem;
    }
  }
  @media screen and (min-width: 768px){
    .proj-box{
      margin-top: 28rem;
    }
  }
  @media screen and (min-width: 1024px){
    .proj-box{
      margin-top: 28rem;
    }
  }
  @media screen and (min-width: 1200px){
    .proj-box{
      margin-top: 28rem;
    }
  }
  @media screen and (min-width: 1440px){
    .proj-box{
      margin-top: 28rem;
    }
  }
  @media screen and (min-width: 1680px){
    .proj-box{
      margin-top: 42rem;
    }
  }
  @media screen and (min-width: 1900px){
    .proj-box{
      margin-top: 42rem;
    }
  }
  @media screen and (min-width: 2560px){
    .proj-box{
      margin-top: 48rem;
    }

  }
</style>
