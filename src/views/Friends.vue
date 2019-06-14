<template>
  <div >
    <IntroHeader
      Title="Friends"
      introHeaderClass="intro-header-friends"
      subTitle=""
      :isProjectPage="false"/>
    <div class="fri-parent-page">
      <Row type="flex" justify="center" align="middle" class="info-row ">
        <i-col :xs={span:24} :sm={span:24} :md={span:16} :lg={span:16} class="fri-page">
          <div class="">
            <h2 class="info-main-title">欢迎各位大佬光临我的小破站</h2>
            <h3 class="info-main-title">想要互换友链的大佬请在最下方的留言板按照以下格式留言，我看到会尽快回复的~~</h3>

            <ul class="indicator">请提供你的：
              <li class="indicator-items">1、名字</li>
              <li class="indicator-items">2、一句话介绍（熟人我会亲自帮写的）</li>
              <li class="indicator-items">3、头像url</li>
              <li class="indicator-items">4、主页地址</li>
            </ul>

            <ul class="example">
              <li class="example-items">For Example(我提供我的)：</li>
              <li class="example-items">Name: Nykee`s blog</li>
              <li class="example-items">Bio: 前端打杂狮/电音爱好者</li>
              <li class="example-items">Avatar: https://image.nykee.cn/nykee.png</li>
              <li class="example-items">URL: https://www.nykee.cn</li>
            </ul>
            <h3 class="remark">
              <!--<i class="fa fa-flash fa-2x" style="color: #F8C64B"></i>-->
              <span class="remark-fbi">FBI WARNING</span>:请先添加本站为友链，然后再申请友链哦。死链如不进行恢复会不定期进行清除，以上！
            </h3>
          </div>
          <div class="fri-page-part">
            <h3 class="fri-subtitle">大佬们</h3>
            <Row gutter="10">
              <i-col :xs="24" :sm="24" :md="8" :lg="8" v-for="ge in geeks" :key="ge.id" style="margin-top: .6rem;">
                <FriendsComp :avatar="ge.avatar" :name="ge.name" :bio="ge.bio" :site-add="ge.webSiteAdd" ></FriendsComp>
              </i-col>

            </Row>
          </div>
          <div class="fri-page-part">
            <h3 class="fri-subtitle">前端技术博客</h3>
            <Row gutter="10">
              <i-col :xs="24" :sm="24" :md="8" :lg="8" v-for="blog in blogs" :key="blog.id" style="margin-top: .6rem;">
                <FriendsComp :avatar="blog.avatar" :name="blog.name" :bio="blog.bio" :site-add="blog.webSiteAdd" ></FriendsComp>
              </i-col>

            </Row>
          </div>
          <div class="fri-page-part">
            <h3 class="fri-subtitle">API&工具</h3>
            <Row gutter="10">
              <i-col :xs="24" :sm="24" :md="8" :lg="8" v-for="tool in tools" :key="tool.id" style="margin-top: .6rem;">
                <FriendsComp :avatar="tool.avatar" :name="tool.name" :bio="tool.bio" :site-add="tool.webSiteAdd" ></FriendsComp>
              </i-col>

            </Row>
          </div>
          <div class="fri-page-part">
            <h3 class="fri-subtitle">小伙伴们</h3>
            <Row gutter="10">
              <i-col :xs="24" :sm="24" :md="8" :lg="8" v-for="fri in friends" :key="fri.id" style="margin-top: .6rem;">
                <FriendsComp :avatar="fri.avatar" :name="fri.name" :bio="fri.bio" :site-add="fri.webSiteAdd" ></FriendsComp>
              </i-col>

            </Row>
          </div>
          <div>
            <Comment :bid="b_id" :btitle="btitle"></Comment>
          </div>

        </i-col>


      </Row>
    </div>


  </div>
</template>

<script>
  import FriendsComp from "../components/FriendsComp"
  import IntroHeader from "../components/IntroHeader"
  import Comment from '../components/BlogComment'
    export default {
        data() {
            return {
              b_id:"-1",
              btitle:"友链申请",
              friends:[
                {id:0,avatar:"https://avatars1.githubusercontent.com/u/10057887?s=460&v=4",bio:"annwynAval",webSiteAdd:"http://annwyn.top",name:"Annwyn's BLOG"},
                {id:1,avatar:"https://view.moezx.cc/images/2018/03/27/avatar.th.jpg",bio:" You got to put the past behind you before you can move on. ",webSiteAdd:"https://2heng.xin/",name:"樱花庄的白猫"},
                {id:2,avatar:"http://huangxuan.me/img/avatar-hux-ny.jpg",bio:"离开世界之前，一切都是过程",webSiteAdd:"http://huangxuan.me/",name:"Hux Blog"},
                {id:3,avatar:"https://gravatar.fghrsh.net/avatar/0c5d77513a08b8c3e38336859b53b027?s=80&d=mm&r=G",bio:"既然我无法停留，那么就飞到我再也不能飞的那一天吧。",webSiteAdd:"https://www.fghrsh.net/",name:"FGHRSH 的博客"},
                {id:4,avatar:"https://file.heroyf.club/logo.jpg",bio:"苹果是给那些为了爱选择死亡的人的奖励",webSiteAdd:"https://heroyf.club/",name:"萌萌哒の柯基"},
                {id:5,avatar:"https://wx1.sinaimg.cn/large/006bYVyvgy1ftand2qurdj303c03cdfv.jpg",bio:"一个好奇的博客",webSiteAdd:"https://www.hojun.cn/",name:"hojun"},
                // {id:6,avatar:"https://avatars3.githubusercontent.com/u/13348805?v=4",bio:"不折腾会死星人",webSiteAdd:"https://blog.woc.moe/",name:"jmglsi的博客"},
                // {id:7,avatar:"https://view.moezx.cc/images/2018/12/21/youmu.jpg",bio:"在这片充满魔力的土地下",webSiteAdd:"https://www.yooomu.com/",name:"Kong's Blog"},
                {id:8,avatar:"https://view.moezx.cc/images/2018/04/28/lsy.png",bio:"爱好摄影 的程序猿",webSiteAdd:"https://lishaoy.net/",name:"Persilee's Blog"},
                {id:9,avatar:"https://meowqvq.files.wordpress.com/2019/01/%E5%A4%B4%E5%83%8F.jpeg",bio:"半文艺、半动漫的二次元美少女的涂鸦簿！",webSiteAdd:"https://meowqvq.wordpress.com/",name:"惡魔菌の记事簿"},
                {id:10,avatar:"https://ws1.sinaimg.cn/large/006Xmmmgly1fytpojlve9j30500500sl.jpg",bio:"可这世间疾苦照样没能放过我",webSiteAdd:"https://www.uo33.cn/",name:"林阿三"},
                {id:11,avatar:"https://5sir.cn/logo.jpg",bio:"因为喜欢，所以折腾。",webSiteAdd:"https://5sir.cn/",name:"梁Sir blog"},
                {id:12,avatar:"https://www.xcnte.com/Logo.png",bio:"终其一生，我们都在寻找自己",webSiteAdd:"https://www.xcnte.com/",name:"Xcnte's Blog"},
                {id:13,avatar:"https://file.eyuyun.com/usr/uploads/icon.ico",bio:"有格调的技术部落",webSiteAdd:"https://www.eyuyun.com/",name:"E语云博客"},
                {id:14,avatar:"https://cdn.jsdelivr.net/gh/jerryc127/CDN@1.0/Photo/avatar.png",bio:"Never put off till tomorrow what you can do today",webSiteAdd:"http://jerryc.me/",name:"JerryC"},
                {id:15,avatar:"https://blog.w3cr.com/favicon.png",bio:"专注于web开发的工具链硬件猿",webSiteAdd:"https://w3c.ink",name:"W3C王三尺"},
              ],
              geeks:[
                {id:0,avatar:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",bio:"Overreacted",webSiteAdd:"https://overreacted.io/",name:"Dan Abramov"},
                {id:1,avatar:"https://tva1.sinaimg.cn/crop.0.0.180.180.180/537f5932jw1e8qgp5bmzyj2050050aa8.jpg",bio:"JS大佬，ES6系列",webSiteAdd:"http://www.ruanyifeng.com/blog/",name:"阮一峰"},
                {id:2,avatar:"//tva2.sinaimg.cn/crop.0.1.635.635.50/62d8efadgw1ej30downrsj20hs0hq0ws.jpg",bio:"各种教程JS,python",webSiteAdd:"https://www.liaoxuefeng.com/",name:"廖雪峰"},
                {id:3,avatar:"//image.zhangxinxu.com/image/blog/zxx_240_0818.jpg",bio:"CSS大佬",webSiteAdd:"https://www.zhangxinxu.com/",name:"张鑫旭"},
              ],
              tools:[
                {id:0,avatar:"http://www.weatherdt.com/images/index/u152.png",bio:"天气API",webSiteAdd:"http://www.weatherdt.com/",name:"智慧气象服务云平台"},
                {id:1,avatar:"http://image.nykee.cn/xztq.png",bio:"天气API",webSiteAdd:"https://www.seniverse.com/doc#now",name:"心知天气"},
                {id:2,avatar:"https://caniuse.com/img/favicon-128.png",bio:"前端兼容性查询",webSiteAdd:"https://caniuse.com/",name:"caniuse"},
                {id:3,avatar:"http://image.nykee.cn/b.png",bio:"网易云音乐API",webSiteAdd:"https://api.imjad.cn/cloudmusic.md",name:"网易云音乐API"},
                {id:4,avatar:"http://image.nykee.cn/bzqll.png",bio:"音乐API",webSiteAdd:"https://api.bzqll.com/",name:"音乐API"},
                {id:5,avatar:"http://image.nykee.cn/b.png",bio:"很全很强大的官方API集合",webSiteAdd:"https://blog.csdn.net/u012562943/article/details/54613647",name:"很全很强大的官方API集合"},
                {id:6,avatar:"http://image.nykee.cn/b.png",bio:"Git常用命令清单",webSiteAdd:"https://github.com/jaywcjlove/handbook/blob/master/other/Git%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%E6%B8%85%E5%8D%95.md#push",name:"Git常用命令清单"},
                {id:7,avatar:"https://react.parts/static/media/logo-small.ea659c11.svg",bio:"React组件汇总",webSiteAdd:"https://react.parts/?sort=relevance",name:"React组件汇总"},
                {id:8,avatar:"https://www.tslang.net/images/typescript-icon.svg",bio:"TypeScript 中文手册",webSiteAdd:"https://www.tslang.net/",name:"TypeScript 中文手册"},
                {id:9,avatar:"http://image.nykee.cn/b.png",bio:"Markdown 语法说明",webSiteAdd:"https://www.appinn.com/markdown/",name:"Markdown 语法说明"},
                {id:10,avatar:"http://jquery.cuishifeng.cn/images/favicon.ico",bio:"jQueryAPI",webSiteAdd:"http://jquery.cuishifeng.cn/",name:"jQueryAPI"},
                {id:11,avatar:"https://squoosh.app/logo.40348.svg",bio:"squoosh图像在线压缩",webSiteAdd:"https://squoosh.app/",name:"squoosh图像在线压缩"},
                {id:12,avatar:"https://tinypng.com/images/favicon.ico",bio:"tinypng图像在线压缩",webSiteAdd:"https://tinypng.com/",name:"tinypng图像在线压缩"},
                {id:13,avatar:"http://image.nykee.cn/gtm.png",bio:"gtmetrix网站性能分析",webSiteAdd:"https://gtmetrix.com/",name:"gtmetrix网站性能分析"},
                {id:16,avatar:"https://www.jsdelivr.com/img/logo.png",bio:"jsdelivr cdn资源",webSiteAdd:"https://www.jsdelivr.com/",name:"jsdelivr前端cdn资源"},
                {id:17,avatar:"https://s2.ssl.qhres.com/static/2b10def9f0fc3c61.svg",bio:"360 前端静态资源库",webSiteAdd:"https://cdn.baomitu.com/",name:"360 前端静态资源库"},
                {id:18,avatar:"http://image.nykee.cn/b.png",bio:"【开发利器】中国国内可用API合集",webSiteAdd:"https://microzz.com/2017/02/03/API/",name:"【开发利器】中国国内可用API合集"},
                {id:19,avatar:"http://image.nykee.cn/b.png",bio:"DPI Calculator",webSiteAdd:"https://www.sven.de/dpi/",name:"DPI Calculator"},
                {id:20,avatar:"https://alpha.wallhaven.cc/images/layout/logo.png",bio:"wallhaven壁纸",webSiteAdd:"https://alpha.wallhaven.cc/",name:"wallhaven壁纸"},
                {id:21,avatar:"http://image.nykee.cn/b.png",bio:"d3.js案例",webSiteAdd:"https://bl.ocks.org/mbostock",name:"d3.js案例"},
                {id:22,avatar:"https://wordart.com/static/img/logo.png",bio:"wordart词云生成",webSiteAdd:"https://wordart.com/",name:"wordart词云生成"},
                {id:23,avatar:"http://image.nykee.cn/es6.png",bio:"ECMAScript 6 入门",webSiteAdd:"http://es6.ruanyifeng.com/",name:"ECMAScript 6 入门"},
              ],
              blogs:[
                {id:1,avatar:"http://jsdig.com/img/logo.svg",bio:"前端导航网",webSiteAdd:"http://jsdig.com/",name:"前端导航网"},
                {id:3,avatar:"https://static2.cnodejs.org/public/images/cnodejs_light.svg",bio:"CNode：Node.js专业中文社区",webSiteAdd:"https://cnodejs.org/",name:"CNode"},
                {id:4,avatar:"http://web.jobbole.com/wp-content/themes/jobboleblogv3/_assets/img/jobbole-logo.png",bio:"Web前端伯乐在线",webSiteAdd:"http://web.jobbole.com/",name:"Web前端伯乐在线"},
                {id:2,avatar:"http://img.alicdn.com/tps/TB1Nv_wKXXXXXbmXVXXXXXXXXXX-295-195.png",bio:"淘宝前端团队（FED）",webSiteAdd:"http://taobaofed.org/",name:"淘宝前端团队（FED）"},
                {id:5,avatar:"https://awps-assets.meituan.net/mit/blog/v20190124-1/asset/icon/android-icon-192x192.png?v=Whistle&t=20181017-1r",bio:"美团技术团队",webSiteAdd:"https://tech.meituan.com/",name:"美团技术团队"},
                {id:6,avatar:"http://image.nykee.cn/dsc.png",bio:"相信技术改变世界，这里是我们的点滴思考和总结。",webSiteAdd:"http://f2e.souche.com/blog/",name:"搜车大无线团队博客"},
                {id:7,avatar:"http://fex.baidu.com/public/images/logo.png",bio:"百度 FEX",webSiteAdd:"http://fex.baidu.com/",name:"百度 FEX"},
                {id:8,avatar:"http://cdn.alloyteam.com/assets/img/avatar-8f3f90.png",bio:"成为地球卓越的Web团队",webSiteAdd:"http://www.alloyteam.com/",name:"腾讯AlloyTeam"},
                {id:9,avatar:"https://75team.com/static/upload/20170409/logo.svg",bio:"奇舞团博客",webSiteAdd:"https://75team.com/post/list",name:"360奇舞团前端"},
                {id:10,avatar:"https://aotu.io/img/o2logo.png",bio:"凹凸实验室",webSiteAdd:"https://75team.com/post/list",name:"凹凸实验室"},
              ]
            }
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {FriendsComp,IntroHeader,Comment}
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
  .indicator,.example{
    margin-top: 1rem;
  }
  .info-main-title{
    line-height: 2rem;
  }
  .remark{
    margin-top: 2rem;line-height: 1.6rem}
  .remark-fbi{
    background: #D72622;
    color: #fff;
    padding: .2rem;
  }
  .example-items,.indicator-items{
    line-height: 1rem;
    margin-top: .4rem;
  }
  .indicator-items{
    font-weight: 800;
    font-size: .9rem;
  }
  .example-items{
    font-weight: 500;
  }
  .rows{
    margin: 1rem 0;
  }
  .fri-page{
    /*border: 1px solid #e4393c;*/
    padding: 1rem;
  }
  .fri-parent-page{
    /*border: 1px solid #00ff00;*/
  }
  .fri-page-part{
    margin-top:2rem;
  }
</style>
