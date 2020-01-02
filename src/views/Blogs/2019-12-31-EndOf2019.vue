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
                            <h1 class="title">愿生有去处，仓有归途--记我的2019</h1>
                        </li>
                    </ul>
                </section>
                <section class="fs-20 lh-24">
                        2019一言难尽，这一年，换了工作，又没了工作。这一年生了一场病，然鹅病还要吃好久的药。这一年和LP只去了一个地方，就去了麻袋（还是蜜月旅行），今年点真的
                        挺背的，丢了皮夹，车被撞了还被逃逸了。如果这是最低谷的话，我希望后面可以慢慢上升。生活能重新再好起来。明年希望能多锻炼锻炼身体，多和LP一起去近郊骑骑车，
                        也蛮希望能买个全画幅微单，能记录记录生活，用镜头来感受周围的世界。希望能再找到一份安稳一点的工作，把身体养好。然后就可以和LP要BB了。写下这篇的时候2019只剩6个小时
                    不到了，希望明年能否极泰来，自己也要过得更加用力一点，更加热爱生活，无论生活给你的是笑或者泪。
                </section>
                <section>
                    <PostTag :postTime="postTime" />
                </section>
                <section class="main-body">




                </section>


                <PagerComponent
                        next-url="CtripConf"
                        next-bg-src="//image.nykee.cn/ctripThumb.jpg"
                        next-blog-title="携程大前端技术沙龙"
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
                postTime: '2019-12-31',
                b_id:"16",
                btitle:"愿生有去处，仓有归途--记我的2019",
                tags:[
                    {id:1,name:"杂谈"},
                    {id:2,name:"2019总结"},
                ],
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
