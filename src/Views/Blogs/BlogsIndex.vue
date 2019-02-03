<template>
    <div>
        <Row type="flex" justify="center" align="middle" v-for="bItem in blogItems" :key="bItem.title">
            <i-col :lg="{span:10}" :md="{span:10}">
                <BlogCard :postTime="bItem.postTime"
                          :title="bItem.title"
                          :viewSum="bItem.viewSum"
                          :commentsSum="bItem.commentsSum"
                          :tag="bItem.tag"
                          :thumbPicSrc="bItem.thumbPicSrc"
                          :route="bItem.route"
                          :preview="bItem.preview">

                </BlogCard>
            </i-col>
        </Row>
        <Row type="flex" justify="center" align="middle">

            <Button class="load-more-btn">加载更多</Button>
        </Row>
    </div>
</template>
<script>
import BlogCard from "../../components/BlogCard.vue"
    export default {

        data() {
            return {
                blogItems:[
                    {postTime:"2017/1/22",
                        title:'前端技巧汇总，包括CSS,JS',
                        viewSum:300,
                        commentsSum:10,
                        tag:"前端",
                        thumbPicSrc:'https://image.nykee.cn/sakura.webp',
                        route:'FrontEndTricks',
                        preview:"前端技巧汇总，包括CSS,JS"
                    },
                    {postTime:"2017/2/14",
                        title:'MongoDB学习笔记',
                        viewSum:30,
                        commentsSum:11,
                        tag:"前端",
                        thumbPicSrc:'https://image.nykee.cn/sakura.webp',
                        route:'MongoDBLearning',
                        preview:"MongoDB学习笔记"
                    },
                    {postTime:"2017/6/08",
                        title:'百度地图学习笔记',
                        viewSum:100,
                        commentsSum:22,
                        tag:"前端",
                        thumbPicSrc:'https://image.nykee.cn/sakura.webp',
                        route:'BaiduMapLearning',
                        preview:"百度地图学习笔记"
                    },
                    {postTime:"2017/9/21",
                        title:'echarts 2.7.2爬坑记录',
                        viewSum:30,
                        commentsSum:1,
                        tag:"前端",
                        thumbPicSrc:'https://image.nykee.cn/sakura.webp',
                        route:'EchartsLearning',
                        preview:"echarts 2.7.2爬坑记录"
                    },
                    {postTime:"2017/9/26",
                        title:'Vue学习笔记',
                        viewSum:222,
                        commentsSum:2,
                        tag:"前端",
                        thumbPicSrc:'https://image.nykee.cn/sakura.webp',
                        route:'VueLearning',
                        preview:"Vue学习笔记"

                    },
                ]
            }
        },
        components: {
            BlogCard
        }
    }
</script>
<style scoped>
    .load-more-btn{
        margin-top:4rem;
        padding: .8rem 2rem;
        border-radius: 14px;
    }
</style>
