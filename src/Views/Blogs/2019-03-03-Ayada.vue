<template>
    <Row type="flex" align="center" justify="center" class="blog-container">
        <i-col :lg="{span:18}" :md="{span:18}" class="blog-content">
          <section  class="tag-section"   >
            <CustomTag :tag="tag.name" v-for="tag in tags" :key="tag.id"/>
          </section>
            <section>
                <ul class="title-list">
                    <li>
                        <h1 class="title">阿雅达蜜月旅行</h1>
                    </li>
                </ul>
            </section>
          <section>
            <PostTag :postTime="postTime" />
          </section>
            <section class="main-body">
                <p>一生一次的蜜月旅行选择了马尔代夫，这个在小学课本里据说还有50年就要因为全球变暖而海平面上升而湮没的国家。马代是比较适合放松度假的，
                也不用一直奔波全程在走路的感觉，沙滩玩玩水，房间里躺躺，拍拍照片，吃吃喝喝还是很惬意的。马代最苦恼的就是选岛，100多个岛屿，有句话叫："爱她就带她到马代，恨她就让她选岛"，
                经过一番艰苦卓绝的选择，我和领导大人最终选择了六星岛阿雅达。属于土耳其Aydeniz酒店集团，有白色灯塔，网红吊床，橙色的装饰，超赞。唯一的一点小缺点就是
                距离马尔代夫首都马累有点远，上岛需要先乘坐1个小时的内陆飞机，然后再转45分钟左右的快艇才到。航空公司选择的是新加坡航空，伙食是很不错的比起港龙来说，机上娱乐电影比港龙少多了，就是攻略没做好，新加坡机场购物被自己给坑了，允悲。
                总得来说是一段很难忘的旅行回忆，第一次去海岛，第一次和老婆真正意义上的出国旅行，第一次在印度洋上看到了最多的星星，第一次稍微浮潜了一下。</p>
                <Divider>放图时间，流量预警！！！</Divider>
                <h3 class="photo-title">阿雅达的标志性建筑--白色灯塔</h3>

                <CustomPicture imgSrc="https://image.nykee.cn/tower.jpeg"
                               srcSet="https://image.nykee.cn/tower.webp"
                               className="commonBlogImg"
                ></CustomPicture>
                <h3 class="photo-title">reception还有一个迷你版的灯塔</h3>
                <CustomPicture imgSrc="https://image.nykee.cn/aya_minitower.jpg"
                               srcSet="https://image.nykee.cn/aya_minitower.webp"
                               className="commonBlogImg"
                ></CustomPicture>
                <h3 class="photo-title">透过阿雅达的水瓶看大海</h3>
                <CustomPicture imgSrc="https://image.nykee.cn/bottle.jpg"
                               srcSet="https://image.nykee.cn/bottle.webp"
                               className="commonBlogImg"
                ></CustomPicture>
                <h3 class="photo-title">我们的沙屋房间号码是203，emmm还不错，离餐厅蛮近的，后面看看其实沙屋都差不多，没啥好位置和差位置之分</h3>
                <CustomPicture imgSrc="https://image.nykee.cn/aya_203.jpg"
                               srcSet="https://image.nykee.cn/aya_203.webp"
                               className="commonBlogImg"
                ></CustomPicture>
                <h3 class="photo-title">水屋幸运地拿到了最好的520，不过也是用沙屋晚退房4个小时换来的，还是值得的</h3>
                <CustomPicture imgSrc="https://image.nykee.cn/aya_520.jpg"
                               srcSet="https://image.nykee.cn/aya_520.webp"
                               className="commonBlogImg"
                ></CustomPicture>
                <h3 class="photo-title">沙滩上的寄居蟹，photo by LP大人</h3>
                <CustomPicture imgSrc="https://image.nykee.cn/aya_crab.jpg"
                               srcSet="https://image.nykee.cn/aya_crab.webp"
                               className="commonBlogImg"
                ></CustomPicture>
                <h3 class="photo-title">蜜月晚餐点的饮料,Blue Ocean，颜色是Tiffany蓝的，味道还不错</h3>
                <CustomPicture imgSrc="https://image.nykee.cn/aya_cheers.jpg"
                               srcSet="https://image.nykee.cn/aya_cheers.webp"
                               className="commonBlogImg"
                ></CustomPicture>
                <h3 class="photo-title">在水屋的日出</h3>
                <CustomPicture imgSrc="https://image.nykee.cn/aya_sunrise.jpg"
                               srcSet="https://image.nykee.cn/aya_sunrise.webp"
                               className="commonBlogImg"
                ></CustomPicture>
                <h3 class="photo-title">Ocean Breeze餐厅拍的日落，印度洋的晚霞</h3>
                <CustomPicture imgSrc="https://image.nykee.cn/sunset.jpg"
                               srcSet="https://image.nykee.cn/sunset.webp"
                               className="commonBlogImg"
                ></CustomPicture>
                <h3 class="photo-title">落日晚霞，岁月静好，身边有你</h3>
                <CustomPicture imgSrc="https://image.nykee.cn/back.jpg"
                               srcSet="https://image.nykee.cn/back.webp"
                               className="commonBlogImg"
                ></CustomPicture>
                <Divider>手动分割线</Divider>
                <p>
                    麻袋真是个度假的好地方，椰林沙滩，美到相机已经无法记录了，唯有用心去感受。下次准备换个岛再玩玩，等结婚5年纪念日或者10年纪念日吧，哈哈哈。
                    EOF.
                </p>
            </section>


          <PagerComponent
            next-url="FeOpt"
            next-bg-src="https://image.nykee.cn/feopt.jpg"
            next-blog-title="前端性能优化"
            prvUrl="FeInterview"
            prvBgSrc="https://image.nykee.cn/cartoon2.jpg"
            prvBlogTitle="前端面试题总结"
          >
          </PagerComponent>
            <Comment :bid="b_id" :btitle="btitle"></Comment>
        </i-col>

    </Row>
</template>

<script>
    import PostTag from '../../components/PostTag.vue'
    import CustomPicture from '../../components/CustomPicture.vue'
    import PagerComponent from '../../components/PagerComponent'
    import Comment from '../../components/BlogComment'
    import mixin_PV from "../../mixins/index";
    import CustomTag from "../../components/CustomTag"

    export default {
      mixins:[mixin_PV],
        data() {
            return {
                postTime: '2019-03-03',
              b_id:"12",
              btitle:'阿雅达蜜月旅行',
              tags:[{id:1,name:"旅行"}]
            }
        },
        methods: {},
        created: function () {
            console.log(this.$data);
        },
        mounted() {
          // this.$store.dispatch("getPV",{params:{id:"13"}});
          // let pv_old = this.$store.state.blog.pv;
          // console.log("pv_old:"+pv_old);

          let getPV_promise =mixin_PV.methods.getPV(this.b_id);
          // console.log(res);
          let pvs;
          getPV_promise.then((v)=>{
            // console.log(v);
            pvs=v;
            // console.log(pvs);
            pvs+=1;
            let updatePV_promise= mixin_PV.methods.updatePV(this.b_id,pvs.toString());
            updatePV_promise.then((v)=>{
                console.log(v);
            })
          });



        },
        components: {
          PostTag,
            CustomPicture,
            PagerComponent,
            Comment,
            CustomTag
      }
    }
</script>
<style>

    .photo-title{
        margin-bottom:.4rem;
        margin-top:1rem;
    }
</style>
