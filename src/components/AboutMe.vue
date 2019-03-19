<template>
  <div class="abm-container">
    <commonTitle :title-name="this.$t('message.aboutMe').toUpperCase()"/>
    <div  class="avatar-container">
      <picture >
        <source type="image/webp" srcset="https://image.nykee.cn/nykee.webp" class="avatar">
        <img src="https://image.nykee.cn/nykee.png" class="avatar"/>
      </picture>
      <p class="slogan">
        {{$t("message.aboutMeSlogan")}}
      </p>
    </div>
    <ContactIcons class="fTags"/>
  </div>
</template>

<script>
  import ContactIcons from './ContactIcons.vue';
  import commonTitle from './CommonRightColTitle'
  export default {
    data() {
      return {}
    },
    methods: {},
    created: function () {

    },
    mounted() {

    },
    components: {
      ContactIcons,
      commonTitle,
    }
  }
</script>
<style scoped="scoped">
  .abm-container {
    width: 12.5rem;
    border-top: 1px solid #271111;
    /*margin: .5rem 0;*/
  }

  .slogan {
    margin-bottom: .6rem;
    text-align: center;
    margin-top:.8rem;

  }

  .fTags {
    margin-bottom: 0.6rem;
  }
  .avatar-container{
    margin: .5rem 0;
    text-align: center;
  }
  .avatar{
    /*border: 1px solid #666666;*/
    width: 8rem;
    height: 8rem;
    /*border-radius: 50%;*/
  }

  @media screen and(max-width: 1280px) and(max-width: 1440px) {
    .slogan {
      font-size: 0.8rem;
    }
  }


</style>
