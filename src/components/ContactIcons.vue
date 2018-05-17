<template>
  <Row :gutter="20" >
    <i-col :span="6" >
      <a href="https://www.zhihu.com/people/LighteningFE/activities"  target="view_window" >
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-stack-1x fa-inverse ">知</i>
        </span>
      </a>
    </i-col>
    <i-col :span="6">
      <a href="mailto:nykee@sina.com">
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-envelope fa-stack-1x fa-inverse "></i>
        </span>
        <i ></i>
      </a>
    </i-col>
    <i-col :span="6" >

      <a href="http://weibo.com/jasonz1989/profile?rightmod=1&wvr=6&mod=personinfo"  target="view_window">

        <span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-weibo fa-stack-1x fa-inverse "></i>
        </span>
      </a>
    </i-col>
    <i-col :span="6" >
      <a href="https://github.com/nykee"  target="view_window">
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-github fa-stack-1x fa-inverse "></i>
        </span>
      </a>
    </i-col>
  </Row>
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
