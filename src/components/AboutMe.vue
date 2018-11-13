<template>
  <div class="abm-container">
    <commonTitle :title-name="this.$t('message.aboutMe').toUpperCase()"/>
    <div>
      <img src="../../static/img/nykee.png" alt="" class="avatar">
      <p class="slogan">
        {{$t("message.aboutMeSlogan")}}
      </p>
    </div>
    <ContactIcons class="fTags"/>
  </div>
</template>

<script>
  import ContactIcons from './ContactIcons.vue';
  import  commonTitle from '../components/common-right-col-title'
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
          commonTitle
        }
    }
</script>
<style scoped="scoped">
  .abm-container{
    width: 12.5rem;
    border-top:1px solid #271111;
  }
  .avatar{
    width: 12.5rem;
  }
  .slogan{
    margin-bottom:.6rem;
    text-align: center;

  }
  .fTags{
    margin-bottom:0.6rem;
  }
  @media screen and(max-width: 1280px) and(max-width: 1440px){
    .slogan{
      font-size: 0.8rem;
    }
  }


</style>
