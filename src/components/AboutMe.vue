<template>
  <div class="abm-container">
    <commonTitle :title-name="this.$t('message.aboutMe').toUpperCase()"/>
    <div>

      <CustomPicture imgSrc="../../static/img/nykee.png"
                     className="avatar"
                     srcSet="../../static/img/nykee.webp"/>
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
  import  CustomPicture from '../components/CustomPicture'
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
          CustomPicture
        }
    }
</script>
<style scoped="scoped">
  .abm-container{
    width: 12.5rem;
    border-top:1px solid #271111;
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
