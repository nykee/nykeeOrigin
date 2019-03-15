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
                            <h1 class="title">前端面试题总结</h1>

                        </li>
                    </ul>
                </section>
                <section>
                    <PostTag :postTime="postTime"/>
                </section>
                <section class="main-body">
                    <ul>
                        <li v-for="article in articles" class="article-items">
                            <a :href="article.href" target="_blank">{{article.title}}</a>
                        </li>
                    </ul>
                    <Divider>手动分割线</Divider>
                    <h4>😓前端的东西真心多。上面的就是我自己整理的前端的文章，大多数为面试题,有些是平时前端的知识点整理。希望对小伙伴们有点用，也方便自己随时查看了。</h4>
                </section>
                <section>
                    <PagerComponent

                            next-url="Ayada"
                            next-bg-src="https://image.nykee.cn/back.jpg"
                            next-blog-title="阿雅达蜜月旅行"
                            prv-url="ImgComp"
                            prv-bg-src="https://image.nykee.cn/seaboat.jpg"
                            prv-blog-title="前端图片压缩"
                    >
                    </PagerComponent>
                  <Comment :bid="b_id" :btitle="b_title"></Comment>
                </section>
            </i-col>
        </Row>

    </div>
</template>
<script>
    import mixin_PV from "../../mixins/index";
    import PostTag from '../../components/PostTag.vue'
    import PagerComponent from '../../components/PagerComponent'
    import Comment from '../../components/BlogComment'
    import CustomTag from "../../components/CustomTag"
    export default {
        mixins:[mixin_PV],
        data() {
            return {
                postTime: '2019-03-06',
                b_id:"13",
              tags:[
                {id:1,name:"前端"},
                {id:2,name:"面试"},
                {id:3,name:"知识点"},


              ],
              b_title:"前端面试题总结",
                articles:[
                    {id:1,title:"前端面试校招问题准备（总结）",href:"https://www.nowcoder.com/discuss/59411"},
                    {id:2,title:"前端调试清单之优化网络资源",href:"https://segmentfault.com/a/1190000014364828"},
                    {id:3,title:"Vue.js异步更新及nextTick",href:"https://juejin.im/post/5b85b3326fb9a019fc76ecee"},
                    {id:4,title:"ajax跨域，这应该是最全的解决方案了",href:"https://segmentfault.com/a/1190000012469713#articleHeader0 "},
                    {id:5,title:"How JavaScript Timers Work",href:"https://johnresig.com/blog/how-javascript-timers-work/"},
                    {id:6,title:"冴羽写博客的地方，预计写四个系列：JavaScript深入系列、JavaScript专题系列、ES6系列、React系列。",href:"https://github.com/mqyqingfeng/Blog "},
                    {id:7,title:"mpvue开发小程序总结",href:"https://juejin.im/post/5bc00a8bf265da0ab503a0fd "},
                    {id:8,title:"Web前端岗位面试题有哪些？",href:"https://www.zhihu.com/question/41466747?sort=created"},
                    {id:9,title:"总结了17年初到18年初百场前端面试的面试经验(含答案)",href:"https://juejin.im/post/5b44a485e51d4519945fb6b7"},
                    {id:10,title:"2018最新Web前端经典面试试题及答案",href:"https://blog.csdn.net/wdlhao/article/details/79079660 "},
                    {id:11,title:"常见前端面试题及答案",href:"https://www.cnblogs.com/yb880319/p/8472053.html "},
                    {id:12,title:"2018年中高级前端面试题目小结",href:"https://www.haorooms.com/post/2018_mianshiqianduan"},
                    {id:13,title:"关于React面试题汇总",href:"http://www.cnblogs.com/cangqinglang/p/9188466.html"},
                    {id:14,title:"2018前端面试题及参考答案整理(二)",href:"https://www.cnblogs.com/vsmart/p/8890890.html "},
                    {id:15,title:"浏览器缓存知识小结及应用 - 流云诸葛 - 博客园",href:"http://www.cnblogs.com/lyzg/p/5125934.html"},
                    {id:16,title:"前端面试考点多？看这些文章就够了",href:"https://juejin.im/post/5aae076d6fb9a028cc6100a9"},
                    {id:17,title:"从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！",href:"https://zhuanlan.zhihu.com/p/34453198?group_id=957277540147056640"},
                    {id:18,title:"实战笔记：Jenkins打造强大的前端自动化工作流",href:"https://juejin.im/post/5ad1980e6fb9a028c42ea1be"},
                    {id:19,title:"大公司里怎样开发和部署前端代码？",href:"https://www.zhihu.com/question/20790576"},
                    {id:20,title:"前端面试笔试知识汇总1（含答案）",href:"http://www.cnblogs.com/huansky/p/5923665.html "},
                    {id:21,title:"前端面试笔试知识汇总2（含答案）",href:"http://www.cnblogs.com/huansky/p/5923733.html"},
                    {id:22,title:"前端面试笔试知识汇总3（含答案）",href:"http://www.cnblogs.com/huansky/p/5953202.html"},
                    {id:23,title:"前端基础面试题总结",href:"https://www.nowcoder.com/discuss/136331"},
                    {id:24,title:" 如何让一个vue项目支持多语言（vue-i18n）",href:"https://segmentfault.com/a/1190000015008808"},
                    ]
            }
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
        components: {
            PostTag,
            PagerComponent,
          Comment,CustomTag
        }
    }
</script>
<style scoped>
    .article-items{
        margin:.8rem 0;

    }
    /*.article-items>a{
        display: inline-block;
        !*font-size: 1.2rem;*!
    }*/
</style>
