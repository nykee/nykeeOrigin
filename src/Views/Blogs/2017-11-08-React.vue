<template>
  <div>
    <ul class="title-list">
      <li ><h1 class="title">React及React-router学习笔记</h1></li>
    </ul>
    <div class="main-body">
      <div id="part3" class="part">
        <div class="title-lv1">一、React-router</div>
        <p class="descrp">React-router必须设置history={browserHistory}，否则路由无法显示</p>
        <img src="../../asserts/img/1510132269(1).jpg" alt="">
      </div>
    </div>
    <PostTag :posttime="postTime"></PostTag>
  </div>
</template>

<script>
  import PostTag from '../../components/PostTag.vue'
    export default {
        data() {
            return {
              postTime:'2017-11-08'
            }
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {PostTag}
    }
</script>
<style>

</style>
