<template>
  <div class="container">
    <h5>FRIENDS LINKS</h5>
    <Row>
      <i-col :span="8"><a href="">1</a></i-col>
      <i-col :span="8"><a href="">2</a></i-col>
      <i-col :span="8"><a href="">3</a></i-col>
    </Row>
    <Row>
      <i-col :span="12"><a href="">4</a></i-col>
      <i-col :span="12"><a href="">5</a></i-col>
    </Row>
    <Row>
      <i-col :span="12"><a href="">6</a></i-col>
      <i-col :span="12"><a href="">7</a></i-col>
    </Row>
    <Row>
      <i-col :span="12"><a href="">8</a></i-col>
      <i-col :span="12"><a href="">9</a></i-col>

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

</style>
