<template>
  <div >
    <IntroHeader/>
    <!--网站简介-->
    <Row class=" site-intro">
      <i-col :xs={span:24} :sm={span:24} :md={span:12} :lg={span:8,offset:8}>
        <h2 class="site-intro-title  textA-center">
          {{$t("message.aboutPage.aboutSite")}}
        </h2>

      </i-col>
      <i-col :xs={span:24} :sm={span:24} :md={span:12} :lg={span:8,offset:8}>
        <div class="site-intro-content textA-center">
          {{$t("message.aboutPage.aboutSiteContent")}}
        </div>
        <Divider dashed />
      </i-col>

    </Row>

    <Row class="time-line-container">
      <i-col :xs={span:24} :sm={span:24} :md={span:12} :lg={span:8,offset:8}>
        <h2 class="time-line-title textA-center">
          {{$t("message.aboutPage.timeLine")}}
        </h2>

      </i-col>
      <i-col :xs={span:24} :sm={span:24} :md={span:12} :lg={span:8,offset:8}>
        <Timeline class="time-line">
        <TimelineItem color="#73E4C9">
        <p class="time">{{$t("message.aboutPage.timeLineItems[0].time")}}</p>
        <p class="content">{{$t("message.aboutPage.timeLineItems[0].activity")}}</p>
        </TimelineItem>
        <TimelineItem>
        <p class="time">{{$t("message.aboutPage.timeLineItems[1].time")}}</p>
        <p class="content">{{$t("message.aboutPage.timeLineItems[1].activity")}}</p>
        </TimelineItem>
        <TimelineItem>
        <p class="time">{{$t("message.aboutPage.timeLineItems[2].time")}}</p>
        <p class="content">{{$t("message.aboutPage.timeLineItems[2].activity")}}</p>
        </TimelineItem>
        <TimelineItem>
        <p class="time">{{$t("message.aboutPage.timeLineItems[3].time")}}</p>
        <p class="content">{{$t("message.aboutPage.timeLineItems[3].activity")}}</p>
        </TimelineItem>
        <TimelineItem>
        <p class="time">{{$t("message.aboutPage.timeLineItems[4].time")}}</p>
        <p class="content">{{$t("message.aboutPage.timeLineItems[4].activity")}}</p>
        </TimelineItem>
        <TimelineItem>
        <p class="time">{{$t("message.aboutPage.timeLineItems[5].time")}}</p>
        <p class="content">{{$t("message.aboutPage.timeLineItems[5].activity")}}</p>
        </TimelineItem>
        <TimelineItem>
        <p class="time">{{$t("message.aboutPage.timeLineItems[6].time")}}</p>
        <p class="content">{{$t("message.aboutPage.timeLineItems[6].activity")}}</p>
        </TimelineItem>
        <TimelineItem>
        <p class="time">{{$t("message.aboutPage.timeLineItems[7].time")}}</p>
        <p class="content">{{$t("message.aboutPage.timeLineItems[7].activity")}}</p>
        </TimelineItem>
        <TimelineItem>
        <p class="time">{{$t("message.aboutPage.timeLineItems[8].time")}}</p>
        <p class="content">{{$t("message.aboutPage.timeLineItems[8].activity")}}</p>
        </TimelineItem>
        </Timeline>
      </i-col>

    </Row>

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
    margin-top: .5rem;
    padding-left: 30%;
  }
  .time-line-container{
    padding: 0 1rem;
    margin-top: 1rem;
  }
  .site-intro{
    margin-top: 1.2rem;
  }
  .time-line-title{
    margin-bottom: .8rem;
  }
  .site-intro-content{
    padding: 1rem;
  }

</style>
