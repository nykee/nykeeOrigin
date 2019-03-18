<template>
  <div >
    <IntroHeader
            Title="About"
            introHeaderClass="intro-header-about"
            subTitle=""
            :isProjectPage="false"/>
    <!--网站简介-->
    <Row class=" site-intro" type="flex" justify="center" align="middle">
      <i-col :xs={span:24} :sm={span:24} :md={span:14} :lg={span:14}>
        <h2 class="site-intro-title  textA-center">
          {{$t("message.aboutPage.aboutSite")}}
        </h2>

      </i-col>
      <i-col :xs={span:24} :sm={span:24} :md={span:12} :lg={span:14}>
        <div class="site-intro-content ">
          {{$t("message.aboutPage.aboutSiteContent")}}
        </div>
        <Divider dashed />
      </i-col>

    </Row>

    <Row class="time-line-container" type="flex" justify="center" align="middle">
      <i-col :xs={span:24} :sm={span:24} :md={span:14} :lg={span:14}>
        <h2 class="time-line-title textA-center">
          {{$t("message.aboutPage.timeLine")}}
        </h2>

      </i-col>
      <i-col :xs={span:24} :sm={span:24} :md={span:14} :lg={span:14}>
        <Timeline class="time-line" >
          <TimelineItem  v-for="item in items" :key="item.activity">
            <p class="time">{{item.time}}</p>
            <p class="content">{{item.activity}}</p>
          </TimelineItem>
        </Timeline>
        <Divider dashed />
      </i-col>

    </Row>

    <Row type="flex" justify="center" align="middle">
      <i-col :xs={span:24} :sm={span:24} :md={span:14} :lg={span:14} style="text-align: center">
         <p class="day-count-box">
           本站<i class="fa fa-superpowers s-icon"></i>已运行<span class="day-count">{{dayCount}}天</span>| 当前有1人在线
         </p>
      </i-col>
    </Row>

  </div>
</template>

<script>
  import IntroHeader from '../components/IntroHeader.vue'
  import moment from "moment"

  export default {
    data() {
      return {
        // items:[]
        dayCount:0

      }
    },
    methods: {

    },
    created: function () {

    },
    mounted() {
      axios.get("Blog/getUserCounts").then((res)=>{
          console.log(res);
      }).catch((err)=>{
          console.log(err);
      });

      moment.locale('zh-cn');
      let currentTime = moment(new Date(), 'YYYYMMDD');
      let foundTime =moment(new Date("2017-09-26"), 'YYYYMMDD');
      this.dayCount=currentTime.diff(foundTime,"days");

    },
    computed:{
      items:function () {
        return this.$t("message.aboutPage.timeLineItems")
      }
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
    padding-left: 38%;
  }
  @media screen and (max-width: 425px){
    .time-line {
      padding-left: 30%;
    }
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
  .day-count-box{
    color: #B9B9B9;
  }
  .day-count{
    color:#C71585 ;
  }
  .s-icon{
    color:#E1BA52 ;
  }

</style>
