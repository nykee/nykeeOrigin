<template>
  <div class="container">
    <h5 >FRIENDS LINKS</h5>
    <Row class="f-content">
      <i-col :span="8" class="f-link"><a href="https://cn.vuejs.org/" class="f-link-vue"  target="view_window">Vue</a></i-col>
      <i-col :span="8" class="f-link"><a href="">热门</a></i-col>
      <i-col :span="8" class="f-link"><a href="">广告</a></i-col>
    </Row>
    <Row>
      <i-col :span="8" class="f-link"><a href="">位置</a></i-col>
      <i-col :span="8" class="f-link"><a href="">长期</a></i-col>
      <i-col :span="8" class="f-link"><a href="">出租</a></i-col>
    </Row>


  </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {}
    }
</script>
<style scoped>
  .container{
    width: 200px;
    border-top:1px solid #271111;
  }
  h5{  color: #666;}
  .f-link{
    font-size:16px;
    margin-bottom:16px;
  }
  .f-content{
    margin-top:15px;
  }
  .f-link-vue:hover{
    color: #41B883 !important;
  }

</style>
