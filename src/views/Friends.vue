<template>
  <div>
    <IntroHeader
      Title="Friends"
      introHeaderClass="intro-header-photo"
      subTitle=""
      :isProjectPage="false"/>
    <Row type="flex" justify="center" align="middle" class="info-row">
      <i-col :xs={span:24} :sm={span:24} :md={span:14} :lg={span:14}>
        <h2>欢迎各位大佬来我的小破站⁄(⁄⁄•⁄ω⁄•⁄⁄)⁄</h2>
        <h3>##想要互换友联的就在下方留言吧，我看到会尽快回复的哦~</h3>

        <ul class="indicator">请提供你的：
          <li class="indicator-items">1、名字</li>
          <li class="indicator-items">2、一句话介绍（熟人我会亲自帮写的）</li>
          <li class="indicator-items">3、头像url</li>
          <li class="indicator-items">4、主页地址</li>
        </ul>

        <ul class="example">
          <li class="example-items">For Example(我提供我的)：</li>
          <li class="example-items">Name: Nykee`s blog</li>
          <li class="example-items">Bio: 前端打杂狮</li>
          <li class="example-items">Avatar: https://image.nykee.cn/nykee.png</li>
          <li class="example-items">URL: https://www.nykee.cn</li>
        </ul>

      </i-col>


    </Row>
    <Row type="flex" justify="center" align="middle"  class="fri-xhb">
      <i-col :xs={span:24} :sm={span:24} :md={span:14} :lg={span:14} >
        <h4 class="fri-subtitle">小伙伴们</h4>
        <Row gutter="10">
          <i-col span="8" v-for="fri in friends" :key="fri.id" style="margin-top: .6rem;">
            <FriendsComp :avatar="fri.avatar" :name="fri.name" :bio="fri.bio" :site-add="fri.webSiteAdd" ></FriendsComp>
          </i-col>

        </Row>

      </i-col>
    </Row>

  </div>
</template>

<script>
  import FriendsComp from "../components/FriendsComp"
  import IntroHeader from "../components/IntroHeader"
    export default {
        data() {
            return {
              friends:[
                {id:0,avatar:"https://avatars1.githubusercontent.com/u/10057887?s=460&v=4",bio:"annwynAval",webSiteAdd:"http://annwyn.top",name:"Annwyn's BLOG"},
                {id:1,avatar:"https://view.moezx.cc/images/2018/03/27/avatar.th.jpg",bio:" You got to put the past behind you before you can move on. ",webSiteAdd:"https://2heng.xin/",name:"樱花庄的白猫"},
                {id:2,avatar:"http://huangxuan.me/img/avatar-hux-ny.jpg",bio:"离开世界之前，一切都是过程",webSiteAdd:"http://huangxuan.me/",name:"Hux Blog"},
                {id:3,avatar:"https://gravatar.fghrsh.net/avatar/0c5d77513a08b8c3e38336859b53b027?s=80&d=mm&r=G",bio:"既然我无法停留，那么就飞到我再也不能飞的那一天吧。",webSiteAdd:"https://www.fghrsh.net/",name:"FGHRSH 的博客"},
                {id:4,avatar:"https://file.heroyf.club/logo.jpg",bio:"苹果是给那些为了爱选择死亡的人的奖励",webSiteAdd:"https://heroyf.club/",name:"萌萌哒の柯基"},
                {id:5,avatar:"https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg",bio:"一个好奇的博客",webSiteAdd:"https://www.hojun.cn/",name:"hojun"},
                {id:6,avatar:"https://avatars3.githubusercontent.com/u/13348805?v=4",bio:"不折腾会死星人",webSiteAdd:"https://blog.woc.moe/",name:"jmglsi的博客"},
                {id:7,avatar:"https://view.moezx.cc/images/2018/12/21/youmu.jpg",bio:"在这片充满魔力的土地下",webSiteAdd:"https://www.yooomu.com/",name:"Kong's Blog"},
                {id:8,avatar:"https://view.moezx.cc/images/2018/04/28/lsy.png",bio:"爱好摄影 的程序猿",webSiteAdd:"https://lishaoy.net/",name:"Persilee's Blog"},
                {id:9,avatar:"https://meowqvq.files.wordpress.com/2019/01/%E5%A4%B4%E5%83%8F.jpeg",bio:"半文艺、半动漫的二次元美少女的涂鸦簿！",webSiteAdd:"https://meowqvq.wordpress.com/",name:"惡魔菌の记事簿"},
                {id:10,avatar:"https://ws1.sinaimg.cn/large/006Xmmmgly1fytpojlve9j30500500sl.jpg",bio:"可这世间疾苦照样没能放过我",webSiteAdd:"https://www.uo33.cn/",name:"林阿三"},
                {id:11,avatar:"https://5sir.cn/logo.jpg",bio:"因为喜欢，所以折腾。",webSiteAdd:"https://5sir.cn/",name:"梁Sir blog"},
                {id:12,avatar:"https://www.xcnte.com/Logo.png",bio:"终其一生，我们都在寻找自己",webSiteAdd:"https://www.xcnte.com/",name:"Xcnte's Blog"},
              ]
            }
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {FriendsComp,IntroHeader}
    }
</script>
<style scoped>
  .info-row{
    margin-top: 1.4rem;
  }
  .fri-xhb{
    margin-top: 2rem;
  }
  .fri-subtitle{
    padding-left: 1rem;
    border-left: 4px solid #2b85e4;
  }
</style>
