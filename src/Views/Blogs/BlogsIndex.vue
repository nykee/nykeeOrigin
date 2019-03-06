<template>
    <div>
        <Row type="flex" justify="center" align="middle" v-for="bItem in blogItems" :key="bItem.title">
            <i-col :lg="{span:14}" :md="{span:14}" :sm="{span:10}" :xs="{span:20}">
                <BlogCard :postTime="bItem.postTime"
                          :title="bItem.title"
                          :viewSum="bItem.viewSum"
                          :commentsSum="bItem.commentSum"
                          :tag="bItem.tag"
                          :thumbPicSrc="bItem.thumbPicSrc"
                          :route="bItem.route"
                          :preview="bItem.preview"
                          :imgOrder="bItem.imgOrder"
                          :contentOrder="bItem.contentOrder"
                >

                </BlogCard>
            </i-col>
        </Row>
        <Row type="flex" justify="center" align="middle" class="bottom-line-row">

            <!--<Button class="load-more-btn" @click="loadMoreBlogs" v-if="!isLoading&&!noMoreBlogs">加载更多</Button>-->
            <Spin size="large" v-if="isLoading&&!noMoreBlogs" class="loading-spin"></Spin>
            <NoMoreBlogBaseLine v-if="noMoreBlogs"></NoMoreBlogBaseLine>
        </Row>
    </div>
</template>
<script>
import BlogCard from "../../components/BlogCard.vue"
import NoMoreBlogBaseLine from "../../components/NoMoreBlogBaseLine";
import {getScrollTop,getScrollHeight,getWindowHeight} from "../../utils/WindowScroll"
    export default {

        data() {
            return {
              isLoading:false,
                noMoreBlogs:false,
                blogItems:[],
              // limit:5,
              offset:0
            }
        },
      mounted(){
          this.isLoading =true;
        axios.get("/Blog/QueryBlogsInit")
          .then((res)=>{
//              console.log(res);
              let result =res.data;
            this.isLoading =false;
//              console.log(result);
              for(let i=0,len=result.length;i<len;i++){
                // result[i].postTime = DateFormat.Format(result[i].postTime);
//                console.log(result[i].postTime);
                this.blogItems.push(result[i])
              }
          })
          .catch((err)=>{
              console.log(err);
          });
        window.addEventListener("scroll",this.handleScroll)

      },
      methods:{
          handleScroll(){
            let scrollT=getScrollTop();
            console.log("scrolltop"+scrollT);
            let scrollH = getScrollHeight();
              console.log("scrollH"+scrollH);
              let windH = getWindowHeight();
              console.log("windH"+windH);
              if(scrollT+windH ===scrollH){
                  this.loadMoreBlogs();
              }

          },
        loadMoreBlogs(){
          this.isLoading = true;
          this.offset+=5;
          axios.get("/Blog/LoadMoreBlogs",{params:{
            // limit:this.limit,
              offset:this.offset
            }})
            .then((res)=>{
//                console.log(res);
                let result =res.data;
                if(result.length ===0){
                    this.noMoreBlogs =true;
                }
//                console.log(result);
                for(let i=0,len=result.length;i<len;i++){
                    // result[i].postTime = DateFormat.Format(result[i].postTime);
//                    console.log(result[i].postTime);
                    this.blogItems.push(result[i])
                }
                this.isLoading =false;

            })
            .catch((err)=>{
                console.log(err);
            })
        }
      },
        components: {
            BlogCard,NoMoreBlogBaseLine
        }
    }
</script>
<style scoped>
    .bottom-line-row{
        margin-top:4rem;
    }

  @media screen and (max-width: 414px){

      .bottom-line-row{
          margin-top:3rem;
      }
  }
  .loading-spin{
    margin-top: 4rem;
  }
</style>
