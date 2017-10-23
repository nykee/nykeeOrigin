<template>
  <div class="container">
    <h5><router-link to="/Tags">FEATURED TAGS</router-link></h5>
    <Row  class="row">
      <i-col :span="8"><router-link to="/" class="tagBtn">前端</router-link></i-col>
      <i-col :span="8"><router-link  to="/" class="tagBtn">Git</router-link></i-col>
      <i-col :span="8"><router-link  to="/" class="tagBtn">JS</router-link></i-col>
    </Row >
    <Row class="row">
      <i-col :span="12"><router-link  to="/" class="tagBtn">前端</router-link></i-col>
      <i-col :span="12"><router-link  to="/" class="tagBtn">Git</router-link></i-col>
    </Row>
    <Row class="row">
      <i-col :span="12"><router-link  to="/" class="tagBtn">前端</router-link></i-col>
      <i-col :span="12"><router-link  to="/" class="tagBtn">Git</router-link></i-col>
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
  .tagBtn{
    display: inline-block;
    width: 60px;
    border: 1px solid #eee;
    border-radius: 20px;
    text-align: center;
  }.row{
       margin-top:8px;
     }
</style>
