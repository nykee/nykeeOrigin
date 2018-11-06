<template>
  <div class="container">
    <!--<h5 >ABOUT ME</h5>-->
    <commonTitle :title-name="this.$t('message.aboutMe')"/>
    <div>
      <img src="../asserts/img/nykee.png" alt="" class="avatar">
      <p class="slogan">
        {{$t("message.aboutMeSlogan")}}
      </p>
    </div>
    <ContactIcons class="fTags"></ContactIcons>
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
<style scoped>
  .container{
    width: 200px;
    border-top:1px solid #271111;
  }
  .avatar{
    width: 200px;
  }
  .slogan{
    margin-bottom:10px;
    text-align: center;
  }
  .fTags{
    margin-bottom:15px;
  }


</style>
