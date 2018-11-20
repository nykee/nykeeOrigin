<template>
  <div>
    <IntroHeader/>

    <div class="flexContainer">
      <Timeline style="margin-top: 5rem;">
        <TimelineItem color="#73E4C9">
          <p class="time">2017.09.26</p>
          <p class="content">初版开始编写，git仓库初始化</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2018.11.06</p>
          <p class="content">添加i18n国际化适配</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2018.11.12</p>
          <p class="content">迁移阿里云</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2018.11.13</p>
          <p class="content">添加Vue-lazyload</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2018.11.15</p>
          <p class="content">完成ICP备案</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2018.11.15</p>
          <p class="content">首屏优化：第三方库使用CDN,iView按需加载</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2018.11.20</p>
          <p class="content">加入音乐播放功能(半成品，完善ing)</p>
        </TimelineItem>
      </Timeline>
    </div>


  </div>
</template>

<script>
  import IntroHeader from '../components/IntroHeader.vue'
    export default {
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {IntroHeader}
    }
</script>
<style scoped="scoped">
  .time{
    font-weight: 800;
    font-size: 0.8rem;
  }
</style>
