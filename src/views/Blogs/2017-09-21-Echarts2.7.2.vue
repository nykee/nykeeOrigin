<template>
  <div>
    <ul class="title-list">
      <li ><h1 class="title">echarts学习笔记</h1></li>
    </ul>
    <div class="main-body">
      <div class="title-lv1">echarts 2.7.2爬坑记录</div>
      <p class="descrp">echarts2.7.2比较坑，标注点的坐标的配置为{  name: '北京',
        geoCoord:[116.46, 39.92], },要把geoCoord写在data里面，具体mapoption的配置如下：</p>
      <pre class="code-text">
            <code>
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
    <PostTag :postTime="postTime"/>
  </div>
</template>

<script>
  import PostTag from '../../components/PostTag.vue'
    export default {
        data() {
            return {
              postTime:'2017-09-21'
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
