<template>
  <Row type="flex" align="center" justify="center">
      <i-col :lg="{span:18}" :md="{span:18}" class="blog-content">
          <ul class="title-list">
              <li><h1 class="title">百度地图学习笔记</h1></li>
          </ul>
          <div class="main-body">
       <pre class="code-text">
            <code>
       var map = new BMap.Map("container");
       var point = new BMap.Point(116.331398,39.897445);
       map.centerAndZoom(point, 5);  // 编写自定义函数，创建标注
       function addMarker(point, index){
              // 创建图标对象var myIcon = new BMap.Icon("markers.png", new BMap.Size(23, 25), {
              // 指定定位位置。
              // 当标注显示在地图上时，其所指向的地理位置距离图标左上
              // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
               // 图标中央下端的尖角位置。
               offset: new BMap.Size(10, 25),
               // 设置图片偏移。
               // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
               // 需要指定大图的偏移位置，此做法与css sprites技术类似。
               imageOffset: new BMap.Size(0, 0 - index * 25)   // 设置图片偏移
           });
// 创建标注对象并添加到地图
           var marker = new BMap.Marker(point, {icon: myIcon});
           map.addOverlay(marker);
       }
       // 随机向地图添加10个标注
       var bounds = map.getBounds();
       var lngSpan = bounds.maxX - bounds.minX;
       var latSpan = bounds.maxY - bounds.minY;
       for (var i = 0; i < 10; i ++) {
           var point = new BMap.Point(bounds.minX + lngSpan * (Math.random() * 0.7 + 0.15),
               bounds.minY + latSpan * (Math.random() * 0.7 + 0.15));
           addMarker(point, i);
       }*!/

       /!*信息窗口*!/
       /!*var opts = {
           width : 250,     // 信息窗口宽度
           height: 100,     // 信息窗口高度
           title : "Hello"  // 信息窗口标题
       };
       var infoWindow = new BMap.InfoWindow("World", opts);  // 创建信息窗口对象
       map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口*!/

       /!*折线*!/
       /!*var polyline = new BMap.Polyline([
               new BMap.Point(116.399, 39.910),
               new BMap.Point(116.405, 39.920)
           ],
           {strokei-color:"blue", strokeWeight:6, strokeOpacity:0.5}
       );
       map.addOverlay(polyline);*!/
       map.addEventListener("dragend", function(){
           var center = map.getCenter();
           console.log("地图中心点变更为：" + center.lng + ", " + center.lat);
       });

       map.addEventListener("click", function(e){
           console.log(e.point.lng + ", " + e.point.lat);
       });


       var geolocation = new BMap.Geolocation();
       geolocation.getCurrentPosition(function(r){
           if(this.getStatus() == BMAP_STATUS_SUCCESS){
               map.panTo(r.point);
           }
           else {
               alert('failed'+this.getStatus());
           }
       },{enableHighAccuracy: true});
       map.enableScrollWheelZoom();                   //允许鼠标滚轮缩放
       map.addControl(new BMap.NavigationControl()); //地图平移缩放控件
       map.addControl(new BMap.ScaleControl());      //比例尺控件
       map.addControl(new BMap.OverviewMapControl());//缩略地图控件
       map.addControl(new BMap.MapTypeControl());    //地图类型控件
       map.setCurrentCity("上海"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用*/
            </code>
          </pre>
          </div>


          <PostTag :postTime="postTime"/>

        <PagerComponent
          prvUrl="EchartsLearning"
          prvBgSrc="https://image.nykee.cn/echarts.jpg"
          prvBlogTitle="echarts 2.7.2爬坑记录"
          next-url="MongoDBLearning"
          next-bg-src="https://image.nykee.cn/mongo.jpg"
          next-blog-title="MongoDB学习笔记"
        >
        </PagerComponent>
      </i-col>


  </Row>
</template>

<script>
  import PostTag from '../../components/PostTag.vue'
  import PagerComponent from '../../components/PagerComponent'
  import mixin_PV from "../../mixins/index";

  export default {
    mixins:[mixin_PV],
    data() {
      return {
        postTime: '2017-06-08',
        b_id:"8"
      }
    },
    methods: {},
    created: function () {

    },
    mounted() {
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
    components: {PostTag,PagerComponent}
  }
</script>
<style>

</style>
