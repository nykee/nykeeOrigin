<template>
  <div>
    <el-row :gutter="2">
      <el-col  :span="18">
        <h1>IndexPage</h1>

        <router-link to="/Blog/:01">
          <h2>博客1标题</h2>
          <h3>博客1副标题</h3>
          <div class="content-preview">博客1内容预览博客1内容预览博客1内容预览博客1内容预览博客1内容预览博客1内容预览</div>
          <p class="=post-time">
            posted by nykee on July 12, 2017
          </p>
        </router-link>
        <router-link to="/Blog/:02">
          <h2>博客2标题</h2>
          <h3>博客2副标题</h3>
          <div class="content-preview">博客2内容预览博客2内容预览博客2内容预览博客2内容预览博客2内容预览</div>
          <p class="=post-time">
            posted by nykee on July 12, 2017
          </p>
        </router-link>
      </el-col>
      <el-col :span="4">
        <FeaturedTags></FeaturedTags>
        <AboutMe></AboutMe>
        <Friends></Friends>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import AboutMe from './AboutMe.vue'
  import FeaturedTags from './FeaturedTags.vue'
  import Friends from './Friends.vue'
    export default {
        data() {
            return {

            }
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {
          AboutMe,FeaturedTags,Friends
        }
    }
</script>
<style>

</style>
