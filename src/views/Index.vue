<template>
  <div>
    <Row>
      <i-col>
        <IntroHeader></IntroHeader>
      </i-col>
    </Row>
    <Row class="self-info-container">

      <i-col  :lg="20"  :md="20" :sm="24" :xs="24" class="leftCol">
        <h1 class="intro">{{ $t("message.aboutMe")}}</h1>
        <pre id="wrap" class="self-intro">
          {{$t("message.selfIntro")}}
          {{$t("message.selfIntro2")}}
          {{$t("message.selfIntro3")}}
          {{$t("message.selfIntro4")}}
          {{$t("message.selfIntro5")}}
          {{$t("message.selfIntro6")}}
        <h3 class="slogan">{{ $t("message.selfIntroSlogan")}}</h3>
        </pre>


      </i-col>
      <i-col :lg="4"  :md="4" :sm="24" :xs="24">
        <Row>
          <i-col  :lg="24"  :md="24" :sm="24" :xs="24">
            <FeaturedTags ></FeaturedTags>
          </i-col>
          <i-col :lg="24"  :md="24" :sm="24" :xs="24">
            <AboutMe></AboutMe>
          </i-col>
          <i-col :lg="24"  :md="24" :sm="24" :xs="24">
            <Friends></Friends>
          </i-col>
        </Row>
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

            }
        },
        methods: {},
        created: function () {


        },
        mounted() {





        },
        components: {
          AboutMe,FeaturedTags,Friends,IntroHeader
        }
    }
</script>
<style scoped="scoped">
  .intro{
    margin-bottom:18px;
  }
  .leftCol{
    padding-left: 10px;
  }
  .slogan{
    margin-top:30px;
  }
  .self-info-container{
    margin-top:20px;
    width: 100%;
  }
  .self-intro{
    font-size:14px;
    word-wrap: break-word;
    height: auto;
    max-height: 26rem;
    width:100%;
    word-break:break-all;
  }
  #wrap{
    padding-right: .8rem;
  }



</style>
