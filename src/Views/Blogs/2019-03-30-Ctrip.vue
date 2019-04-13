<template>
    <div>
        <Row type="flex" align="center" justify="center" class="blog-container">
            <i-col :lg="{span:18}" :md="{span:18}" class="blog-content">
                <section  class="tag-section"   >
                    <CustomTag :tag="tag.name" v-for="tag in tags" :key="tag.id"/>
                </section>
                <section>
                    <ul class="title-list">
                        <li>
                            <h1 class="title">携程技术沙龙之大前端工程实践</h1>
                        </li>
                    </ul>
                </section>
                <section>
                    <PostTag :postTime="postTime" />
                </section>
                <section class="main-body">
                    <p class="part">2019年3月30号，本小菜鸡参加了人生的第一次技术分享之旅。在凌空SOHO携程前端总部受到了前端大佬们的知识洗礼。大厂果然福利好，有健身房，乒乓房。
                    哇塞，感觉人生走向了巅峰。ps:其实也就那样啦，大牛虽然牛，可是我还是一个小菜鸡，最终还是要靠自己。PPS:很多其实也算是技术布道，也没有分享很多奇淫巧技。
                        Anyway,也算是一段技术/人生经历吧。</p>
                    <Divider></Divider>
                    <CustomPicture imgSrc="https://image.nykee.cn/ctripThumbBig.jpg"
                                   srcSet="https://image.nykee.cn/ctripThumbBig.webp"
                                   className="commonBlogImg"
                    ></CustomPicture>
                    <Divider></Divider>
                    <ul>
                        <h3>下面是主要的8个议程</h3>
                        <li>
                            <span>《多端统一开发框架Taro原理与实践》- 京东李伟涛</span>



                        </li>
                        <li>
                            <span>《携程酒店小程序技术经验分享》- 携程崔广宇</span>

                        </li>
                        <li>
                            <span>《构建高可用的Node.js应用》- 腾讯王伟嘉</span>

                        </li>
                        <li>
                            <span>《陆金所前端多租户实践漫谈》- 陆金所冯康</span>

                        </li>
                        <li>
                            <span>《Electron在NFES Developer Tools中的探索与实践》- 携程隋丰蔚</span>

                        </li>
                        <li>
                            <span>《美团点评PWA管理平台》- 美团点评王懿</span>

                        </li>
                        <li>
                            <span>《浅谈React数据流管理》- 携程颜陈宇</span>


                        </li>
                        <li>
                            <span>《Flutter编程最佳实践探索》- 阿里熊华丽（匠修）</span>

                        </li>
                    </ul>
                    <Divider>放图分割线</Divider>
                    <ul>
                        <li v-for="img in imgs" :key="img.id" class="mt20">
                            <span class="pic-desc">{{img.desc}}</span>
                            <CustomPicture :srcSet="img.srcSet" :imgSrc="img.imgSrc" className="commonBlogImg" ></CustomPicture>
                        </li>
                    </ul>
                    <Divider>快结束的分割线</Divider>
                    <h2 class="ending">
                        携程的午餐还是不错的，虽然我也交了参会的钱。大前端还是很有广泛的前景的。不过貌似也是在开拓前行中，electron的内容就有很多小伙伴不太感兴趣。
                        干货最多的是react数据流管理，估计也是因为更贴近开发者的日常吧。阿里咸鱼的小伙伴也算是Flutter的一直以来的践行者吧，大牛语速果然也是大牛级别的，
                        我全程就是只听到XXX widget,YYYYY widget,各种widget。离大牛还是有很大的距离的，哎，革命尚未成功，还需努力吧。EOF~
                    </h2>



                </section>


                <PagerComponent
                        next-url="FeInterview"
                        next-bg-src="https://image.nykee.cn/cartoon2.jpg"
                        next-blog-title="前端面试题总结"
                        prvUrl=""
                        prvBgSrc=""
                        prvBlogTitle=""
                >
                </PagerComponent>
                <Comment :bid="b_id" :btitle="btitle"></Comment>
            </i-col>

        </Row>

    </div>
</template>
<script>
    import mixin_PV from "../../mixins/index";
    import PostTag from '../../components/PostTag.vue'
    import CustomPicture from '../../components/CustomPicture.vue'
    import PagerComponent from '../../components/PagerComponent'
    import Comment from '../../components/BlogComment'
    import CustomTag from "../../components/CustomTag"
    export default {
        data() {
            return {
                postTime: '2019-04-13',
                b_id:"15",
                btitle:"携程大前端技术沙龙",
                tags:[
                    {id:1,name:"前端"},
                    {id:2,name:"沙龙"},
                    {id:3,name:"技术分享"},
                ],
                imgs:[
                    {
                        id:1,
                        srcSet:'https://image.nykee.cn/ctripFlutter1.webp',
                        imgSrc:"https://image.nykee.cn/ctripFlutter1.jpg",
                        desc:"闲鱼的小伙伴匠修关于Flutter的分享"
                    },

                    {
                        id:5,
                        srcSet:'https://image.nykee.cn/ctripLunch1.webp',
                        imgSrc:"https://image.nykee.cn/ctripLunch1.jpg",
                        desc:"请各位看官忽略我的胖手，🤣"
                    },
                    {
                        id:6,
                        srcSet:'https://image.nykee.cn/ctripLunch2.webp',
                        imgSrc:"https://image.nykee.cn/ctripLunch2.jpg",
                        desc:"携程的午餐还是蛮好吃的"
                    },
                    {
                        id:7,
                        srcSet:'https://image.nykee.cn/ctripNode1.webp',
                        imgSrc:"https://image.nykee.cn/ctripNode1.jpg",
                        desc:"毕业于复旦的腾讯云大佬的node布道"
                    },
                    {
                        id:4,
                        srcSet:'https://image.nykee.cn/ctripNode2.webp',
                        imgSrc:"https://image.nykee.cn/ctripNode2.jpg",
                        desc:"毕业于复旦的腾讯云大佬的node布道"
                    },
                    {
                        id:4,
                        srcSet:'https://image.nykee.cn/ctripNode3.webp',
                        imgSrc:"https://image.nykee.cn/ctripNode3.jpg",
                        desc:"毕业于复旦的腾讯云大佬的node布道"
                    },
                    {
                        id:4,
                        srcSet:'https://image.nykee.cn/ctripNode4.webp',
                        imgSrc:"https://image.nykee.cn/ctripNode4.jpg",
                        desc:"毕业于复旦的腾讯云大佬的node布道"
                    },

                    {
                        id:4,
                        srcSet:'https://image.nykee.cn/ctripReact2.webp',
                        imgSrc:"https://image.nykee.cn/ctripReact2.jpg",
                        desc:"携程小伙伴的React数据流管理,干货"
                    },
                    {
                        id:4,
                        srcSet:'https://image.nykee.cn/ctripReact3.webp',
                        imgSrc:"https://image.nykee.cn/ctripReact3.jpg",
                        desc:"携程小伙伴的React数据流管理,干货"
                    },
                    {
                        id:4,
                        srcSet:'https://image.nykee.cn/ctripReact4.webp',
                        imgSrc:"https://image.nykee.cn/ctripReact4.jpg",
                        desc:"携程小伙伴的React数据流管理,干货"
                    },
                    {
                        id:4,
                        srcSet:'https://image.nykee.cn/ctripReact5.webp',
                        imgSrc:"https://image.nykee.cn/ctripReact5.jpg",
                        desc:"携程小伙伴的React数据流管理,干货"
                    },

                    {
                        id:4,
                        srcSet:'https://image.nykee.cn/ctripTaro2.webp',
                        imgSrc:"https://image.nykee.cn/ctripTaro2.jpg",
                        desc:"京东凹凸实验室的taro跨端框架"
                    },


                ]
            }
        },
        mounted(){
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
    .mt20{
        margin-top:1rem;
    }
    .ending{
        line-height: 1.6rem;
    }
    .pic-desc{
        color: #70706a;
        margin-bottom:.8rem;
        display: inline-block;
        font-size: 1.1rem;
    }
    .part{
        line-height: 1.2rem;
        font-weight: 700;
        font-size: 1.1rem;
    }
</style>
