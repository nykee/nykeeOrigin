<template>
  <el-row :gutter="20" style="height: 100px">
    <el-col :span="6" style="height: 100px">
      <a href="">
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-stack-1x fa-inverse ">知</i>
        </span>
      </a>
    </el-col>
    <el-col :span="6" style="height: 100px">
      <a href="">
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-weibo fa-stack-1x fa-inverse "></i>
        </span>
      </a>
    </el-col>
    <el-col :span="6" style="height: 100px">
      <a href="">
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-wechat fa-stack-1x fa-inverse "></i>
        </span>
      </a>
    </el-col>
    <el-col :span="6" style="height: 100px" >
      <a href="">
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-github fa-stack-1x fa-inverse "></i>
        </span>
      </a>
    </el-col>
  </el-row>
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
  a{
    display: inline-block;
    width: 40px;
  }
</style>
