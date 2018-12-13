<template>
  <div >
    <IntroHeader/>
    <div class="flexContainer time-line-container">
      <Timeline class="time-line">
        <TimelineItem color="#73E4C9">
          <p class="time">{{$t("message.aboutPage.timeLine[0].time")}}</p>
          <p class="content">{{$t("message.aboutPage.timeLine[0].activity")}}</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">{{$t("message.aboutPage.timeLine[1].time")}}</p>
          <p class="content">{{$t("message.aboutPage.timeLine[1].activity")}}</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">{{$t("message.aboutPage.timeLine[2].time")}}</p>
          <p class="content">{{$t("message.aboutPage.timeLine[2].activity")}}</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">{{$t("message.aboutPage.timeLine[3].time")}}</p>
          <p class="content">{{$t("message.aboutPage.timeLine[3].activity")}}</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">{{$t("message.aboutPage.timeLine[4].time")}}</p>
          <p class="content">{{$t("message.aboutPage.timeLine[4].activity")}}</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">{{$t("message.aboutPage.timeLine[5].time")}}</p>
          <p class="content">{{$t("message.aboutPage.timeLine[5].activity")}}</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">{{$t("message.aboutPage.timeLine[6].time")}}</p>
          <p class="content">{{$t("message.aboutPage.timeLine[6].activity")}}</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">{{$t("message.aboutPage.timeLine[7].time")}}</p>
          <p class="content">{{$t("message.aboutPage.timeLine[7].activity")}}</p>
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
  .time {
    font-weight: 800;
    font-size: 0.8rem;
  }

  .time-line {
    margin-top: 5rem;
  }
  .time-line-container{
    padding: 0 1rem;
  }


</style>
