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
        <Row type="flex" justify="center" align="middle">

            <Button class="load-more-btn" @click="loadMoreBlogs" v-if="!isLoading">加载更多</Button>
            <Spin size="large" v-if="isLoading" class="loading-spin"></Spin>
        </Row>
    </div>
</template>
<script>
import BlogCard from "../../components/BlogCard.vue"
    export default {

        data() {
            return {
              isLoading:false,
                blogItems:[],
              // limit:5,
              offset:0
            }
        },
      mounted(){
        axios.get("/Blog/QueryBlogsInit")
          .then((res)=>{
              console.log(res);
              let result =res.data;
              console.log(result);
              for(let i=0,len=result.length;i<len;i++){
                // result[i].postTime = DateFormat.Format(result[i].postTime);
                console.log(result[i].postTime);
                this.blogItems.push(result[i])
              }
          })
          .catch((err)=>{
              console.log(err);
          })
      },
      methods:{
        loadMoreBlogs(){
          this.isLoading = true;
          this.offset+=5;
          axios.get("/Blog/loadMoreBlogs",{params:{
            // limit:this.limit,
              offset:this.offset
            }})
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })
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
  @media screen and (max-width: 414px){
    .load-more-btn{
      margin-top:3rem;
      padding: .6rem 1.4rem;
      border-radius: 14px;
    }
  }
  .loading-spin{
    margin-top: 4rem;
  }
</style>
