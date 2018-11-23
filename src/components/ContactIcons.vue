<template>
  <Row>
    <i-col :span="6">
      <a href="https://www.zhihu.com/people/LighteningFE/activities" target="_blank">
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-stack-1x fa-inverse ">知</i>
        </span>
      </a>
    </i-col>
    <i-col :span="6">
      <Tooltip content="nykee@sina.com" placement="top-start">
        <a href="mailto:nykee@sina.com">
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-envelope fa-stack-1x fa-inverse "></i>
        </span>
        </a>
      </Tooltip>
    </i-col>
    <i-col :span="6">
      <a href="http://weibo.com/jasonz1989/profile?rightmod=1&wvr=6&mod=personinfo" target="_blank">
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-weibo fa-stack-1x fa-inverse "></i>
        </span>
      </a>
    </i-col>
    <i-col :span="6">
      <Tooltip content="github.com/nykee" placement="bottom-start">
        <a href="https://github.com/nykee" target="_blank" class="c-icons">
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-github fa-stack-1x fa-inverse "></i>
        </span>
        </a>
      </Tooltip>
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
</style>
