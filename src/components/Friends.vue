<template>
  <div class="fl-container">
    <commonTitle :title-name="this.$t('message.friendsLinks')"/>
    <Row class="f-content" :gutter="10">
      <i-col :span="8" class="f-link"><a href="http://annwyn.top/" target="_blank">Annwyn's BLOG</a></i-col>
      <i-col :span="8" class="f-link"><a href="https://2heng.xin/" target="_blank">樱花庄的白猫</a></i-col>
      <i-col :span="8" class="f-link"><a href="http://huangxuan.me/" target="_blank">Hux Blog</a></i-col>
    </Row>
  </div>
</template>

<script>
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
    components: {commonTitle}
  }
</script>
<style scoped>
  .fl-container {
    width: 12.5rem;
    border-top: 1px solid #271111;
  }
  .f-link {
    font-size: .8rem;
    margin-bottom: 1rem;
  }

  .f-content {
    margin-top: 15px;
  }


</style>
