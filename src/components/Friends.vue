<template>
  <div class="container">
    <!--<h5 >FRIENDS LINKS</h5>-->
    <commonTitle :title-name="this.$t('message.friendsLinks')"/>
    <Row class="f-content" :gutter="10">
      <i-col :span="8" class="f-link"><a href="http://annwyn.top/" target="_blank">Annwyn's BLOG</a></i-col>
      <i-col :span="8" class="f-link"><a href="https://2heng.xin/" target="_blank">樱花庄的白猫</a></i-col>
    </Row>
  </div>
</template>

<script>
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
        components: {commonTitle}
    }
</script>
<style scoped>
  .container{
    width: 200px;
    border-top:1px solid #271111;
  }
  h5{  color: #666;}
  .f-link{
    font-size:.8rem;
    margin-bottom:1rem;
  }
  .f-content{
    margin-top:15px;
  }
  .f-link-vue:hover{
    color: #41B883 !important;
  }

</style>
