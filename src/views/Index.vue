<template>
  <div>
      <IntroHeader Title="Nykee"
                   introHeaderClass="intro-header-index"
                   subTitle=""
                   :isProjectPage="false">
      </IntroHeader>
    <Row class="self-info-container">
      <i-col :lg="20" :md="19" :sm="24" :xs="24" class="leftCol">
        <h1 class="intro">{{ $t("message.aboutMe")}}</h1>
        <ul class="self-intro-box">
          <li v-for="s in selfIntros" class="self-intro-items">{{s}}</li>
        </ul>
        <h3 class="self-intro-slogan">{{ $t("message.selfIntroSlogan")}}</h3>
      </i-col>
      <i-col :lg="4" :md="5" :sm="24" :xs="24">
        <div class="flexContainer">
          <FeaturedTags/>
        </div>
        <div class="flexContainer">
          <AboutMe/>
        </div>
        <div class="flexContainer">
          <Friends/>
        </div>
      </i-col>
    </Row>

  </div>
</template>

<script>
  import AboutMe from '../components/AboutMe.vue'
  import FeaturedTags from '../components/FeaturedTags.vue'
  import Friends from '../components/Friends.vue'
  import IntroHeader from '../components/IntroHeader.vue'

  export default {
    data() {
      return {
        selfIntros:this.$t(("message.selfIntro"))
      }
    },
    methods: {},
    created: function () {


    },
    mounted() {


    },
    computed: {},
    components: {
      AboutMe, FeaturedTags, Friends, IntroHeader
    }
  }
</script>
<style scoped="scoped">
  .intro {
    margin-bottom: 1rem;
  }

  .leftCol {
    padding-left: 0.625rem;
  }

  .self-info-container {
    margin-top: 20px;
    width: 100%;
  }

  .self-intro {
    font-size: 14px;
    word-wrap: break-word;
    height: auto;
    max-height: 26rem;
    width: 100%;
    word-break: keep-all;
  }

  #wrap {
    padding-right: .8rem;
  }
  .self-intro-box{
    margin-left: .8rem;
  }
  .self-intro-items{
    line-height: 1.2rem;
  }
  .self-intro-slogan{
    margin-top: 2.8rem;
  }


</style>
