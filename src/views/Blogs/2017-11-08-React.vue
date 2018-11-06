<template>
  <div>
    <ul class="title-list">
      <li ><h1 class="title">React及React-router注意点</h1></li>
    </ul>
    <div class="main-body">
      <div id="part1" class="part">
        <div class="title-lv1">1、React-router</div>
        <p class="descrp">React-router必须设置history={browserHistory}，否则路由无法显示</p>
        <img src="../../asserts/img/1510132269(1).jpg" alt="">


        <div class="title-lv1">2、React图片引入</div>
        <p class="descrp">React图片地址由父组件通过props的方式传递给子组件时，必须使用字符串拼接的方式，否则图片无法加载</p>
        <pre class="code-text">
          <code>
            父组件：<span><</span>SwiperItem imgSrc="food" itemName="美食"><span><</span>/SwiperItem>
            子组件：<span><</span>div ><span><</span>img   src={require("../../images/swiper/"+this.props.imgSrc+".jpg")} alt=""/><span><</span>/div>
          </code>
        </pre>
      </div>
    </div>
    <PostTag :posttime="postTime"/>
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
