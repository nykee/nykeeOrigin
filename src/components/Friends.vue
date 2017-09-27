<template>
  <div class="container">
    <h5>FRIENDS LINKS</h5>
    <el-row>
      <el-col :span="8"><a href="">1</a></el-col>
      <el-col :span="8"><a href="">2</a></el-col>
      <el-col :span="8"><a href="">3</a></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><a href="">4</a></el-col>
      <el-col :span="12"><a href="">5</a></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><a href="">6</a></el-col>
      <el-col :span="12"><a href="">7</a></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><a href="">8</a></el-col>
      <el-col :span="12"><a href="">9</a></el-col>

    </el-row>

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
