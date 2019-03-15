<template>
   <Row type="flex" align="center" justify="center">
     <i-col :lg="{span:18}" :md="{span:18}" class="blog-content">
       <section  class="tag-section"   >
         <CustomTag :tag="tag.name" v-for="tag in tags" :key="tag.id"/>
       </section>
       <ul class="title-list">
         <li><h1 class="title">echarts学习笔记</h1></li>
       </ul>
       <section>
         <PostTag :postTime="postTime" />
       </section>
       <div class="main-body">
         <div class="title-lv1">echarts 2.7.2爬坑记录</div>
         <p class="descrp">echarts2.7.2比较坑，标注点的坐标的配置为{ name: '北京',
           geoCoord:[116.46, 39.92], },要把geoCoord写在data里面，具体mapoption的配置如下：</p>
         <pre v-highlightjs>
            <code class="lang-javascript">
              mapOption:{
                 /*地图用到的数据，Object形式*/
                 series: [
                   {
                     name: '逸动多中心分布',
                     type: 'map',
                     hoverable:false,//鼠标经过高亮
                     mapLocation: {
                       x: 'center',
                       y: 'center',
                       // height: 600
                     },

                     selectedMode: false,
                     itemStyle:{
                       normal: {
                         // borderWidth: 2,
                         // borderi-color: '#025192',
                         color: '#003156',
                         label: {
                           show: false
                         }
                       },
                     },
                     data: [],
                     /*地图标注点*/
                     markPoint: {
                     symbol:'pin',
                       symbolSize:10,
                       show: true,
                       itemStyle: {
                         normal: {
                           color: '#00c1de'
                         },
                         emphasis: {
                           borderi-color: '#1e90ff',
                           borderWidth: 5,
                           label: {
                             show: false
                           }
                         }
                       },
                       effect:{
                         show: true,
                         type: 'scale',
                         loop: true,
                         period: 15,
                         scaleSize : 2,
                         bounceDistance: 10,
                         color :'#00c1de',
                         shadowi-color : null,
                         shadowBlur : 0

                       },
                       data: [
                         {
                           name: '北京',
                           geoCoord:[116.46, 39.92],

                         },
                         {
                           name: '上海',
                           geoCoord:[121.4648, 31.2891],


                         },
                         {
                           name:'广州',
                           geoCoord:[113.27, 23.13]
                         },
                         {
                           name:'合肥',
                           geoCoord:[117.27,31.86]
                         },
                         {
                           name:'武汉',
                           geoCoord:[114.31,30.52]
                         },
                         {
                           name:'长沙',
                           geoCoord:[113.00,28.21]
                         },
                         {
                           name:'贵阳',
                           geoCoord:[106.71,26.57]
                         },
                         {
                           name:'成都',
                           geoCoord:[104.07,30.67]
                         },
                         {
                           name:'长春',
                           geoCoord:[125.35,43.88]
                         },
                         {
                           name:'济南',
                           geoCoord:[116.98,36.67]
                         }
                       ],

                     },
                   }
                 ]
               }
            </code>
          </pre>
       </div>

       <PagerComponent
         prvUrl="VueLearning"
         prvBgSrc="https://image.nykee.cn/vue.jpg"
         prvBlogTitle="Vue学习笔记"
         next-url="BaiduMapLearning"
         next-bg-src="https://image.nykee.cn/bdmap.jpg"
         next-blog-title="百度地图学习笔记"
       >
       </PagerComponent>
       <Comment :bid="b_id" :btitle="btitle"></Comment>
     </i-col>

   </Row>
</template>

<script>
  import PostTag from '../../components/PostTag.vue'
  import PagerComponent from '../../components/PagerComponent'
  import Comment from '../../components/BlogComment'
  import mixin_PV from "../../mixins/index";
  import CustomTag from "../../components/CustomTag"

  export default {
    mixins:[mixin_PV],
    data() {
      return {
        postTime: '2017-09-21',
        b_id:"7",
        btitle:"echarts学习笔记",
        tags:[
          {id:1,name:"前端"},
          {id:2,name:"echarts"}
        ]
      }
    },
    methods: {},
    created: function () {

    },
    mounted() {
     /* this.$store.dispatch("getPV",{params:{id:"4"}});
      let pv_old = this.$store.state.blog.pv;
      console.log("pv_old:"+pv_old);*/
      let getPV_promise =mixin_PV.methods.getPV(this.b_id);
      let pvs;
      getPV_promise.then((v)=>{
        pvs=v;
        pvs+=1;
        let updatePV_promise= mixin_PV.methods.updatePV(this.b_id,pvs.toString());
        updatePV_promise.then((v)=>{
          console.log(v);
        })
      });
    },
    components: {PostTag,PagerComponent
      ,Comment,CustomTag}
  }
</script>
<style>

</style>
