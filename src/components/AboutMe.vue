<template>
  <div class="abm-container">
    <commonTitle :title-name="this.$t('message.aboutMe').toUpperCase()"/>
    <div  class="avatar-container">
      <picture >
        <source type="image/webp" srcset="https://image.nykee.cn/nykee.webp" class="avatar">
        <img src="https://image.nykee.cn/nykee.png" class="avatar"/>
      </picture>
      <ul class="slogan">
        <li v-for="s in aboutMeSlogan">
          {{s}}
        </li>
      </ul>
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
      computed:{
          aboutMeSlogan(){
              return this.$t("message.aboutMeSlogan")
          }
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
    border-bottom: 1px solid #271111;
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
    width: 12rem;
    height: 8rem;
    /*border-radius: 50%;*/
  }

  @media screen and(max-width: 1280px) and(max-width: 1440px) {
    .slogan {
      font-size: 0.8rem;
    }
  }


</style>
