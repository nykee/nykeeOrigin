<template>
  <div>
      <IntroHeader Title="About Me"
                   introHeaderClass="intro-header-index"
                   subTitle="Life`s short,I use js"
                   :isProjectPage="false">
      </IntroHeader>
    <Row class="self-info-container">
      <i-col :lg="20" :md="19" :sm="24" :xs="24" class="leftCol">
        <h1 class="intro">{{ $t("message.aboutMe")}}</h1>
        <pre class="self-intro">
            {{$t("message.selfIntro[0]")}}
            {{$t("message.selfIntro[1]")}}
            {{$t("message.selfIntro[2]")}}
            {{$t("message.selfIntro[3]")}}
            {{$t("message.selfIntro[4]")}}
            {{$t("message.selfIntro[5]")}}
            {{$t("message.selfIntro[6]")}}
          <h3 class="slogan">{{ $t("message.selfIntroSlogan")}}</h3>
        </pre>
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
      return {}
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


</style>
