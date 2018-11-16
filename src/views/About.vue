<template>
  <div>
    <IntroHeader/>
    <div class="flexContainer" style="margin-top: 2rem;">

      <Timeline>
        <TimelineItem>
          <!--<i class="fa fa-dotted fa-2x" slot="dot"></i>-->
          <p class="time">2017.01.01</p>
          <p class="content">初版完成编写</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2017.01.01</p>
          <p class="content">V2版完成编写</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2018.01.01</p>
          <p class="content">完成gitpage首次部署</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2018.01.01</p>
          <p class="content">迁移至阿里云</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2018.01.01</p>
          <p class="content">首屏优化</p>
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
<style>

</style>
