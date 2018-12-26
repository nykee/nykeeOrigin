<template>
  <Menu theme="light" ref="bMenu" :activeName="activeName">
    <MenuItem name="1">
      <span @click="directTo('FrontEndTricks')">前端技巧汇总，包括CSS,JS</span>
    </MenuItem>
    <MenuItem name="2">
      <span @click="directTo('MongoDBLearning')">MongoDB学习笔记</span>
    </MenuItem>
    <MenuItem name="3">
      <span @click="directTo('BaiduMapLearning')">百度地图学习笔记</span>
    </MenuItem>
    <MenuItem name="4">
      <span @click="directTo('EchartsLearning')">Echarts2.7.2爬坑记录</span>
    </MenuItem>
    <MenuItem name="5">
      <span @click="directTo('VueLearning')">Vue学习笔记</span>
    </MenuItem>
    <MenuItem name="6">
      <span @click="directTo('DZDPCrawlSpider')">大众点评Node.js爬虫</span>
    </MenuItem>
    <MenuItem name="7">
      <span @click="directTo('GitLearning')">Git笔记</span>
    </MenuItem>
    <MenuItem name="8">
      <span @click="directTo('ReactTricks')">React\react-router采坑记录</span>
    </MenuItem>
    <MenuItem name="9">
      <span @click="directTo('D3Learning')">D3笔记</span>
    </MenuItem>
    <MenuItem name="10">
      <span @click="directTo('NettyLearning')">Netty心跳笔记</span>
    </MenuItem>
    <MenuItem name="11">
      <span @click="directTo('ReactLearning')">React学习笔记</span>
    </MenuItem>
    <MenuItem name="12">
      <span @click="directTo('VueI18n')">VueI18n国际化</span>
    </MenuItem>
    <MenuItem name="13">
      <span @click="directTo('FeOPT')">前端性能优化</span>
    </MenuItem>
  </Menu>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {}
    },
    methods: {
      directTo(add) {
        this.$router.push('/Blogs/' + add);

      },
    },
    created: function () {
      mapState({
        activeName: state => state.blogMenuActiveName
      });
      this.$nextTick(() => {
        this.$refs.bMenu.updateActiveName();
      });
    },
    mounted() {

    },
    components: {}
  }
</script>
<style>

</style>
