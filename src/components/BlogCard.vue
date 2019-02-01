<template>
  <div @click="goToArticle" class="article-card-container" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
    <Card class="article-card" padding="0">
        <Row>
          <i-col :span="11">
            <ul class="article-card-detail-lists">
              <li class="article-card-detail-lists-items">
                <PostTime :postTime="postTime"></PostTime>
              </li>
              <li class="article-card-detail-lists-items">
                <span>{{title}}</span>
              </li>
              <li class="article-card-detail-lists-items">
                <span>{{viewNum}}热度</span>
                <span>{{commentsNum}}评论</span>
                <span>{{tag}}</span>
              </li>
            </ul>
          </i-col>
          <i-col :span="13">
            <img :src="thumbPicSrc" alt="" class="img-thumb">
          </i-col>
        </Row>
    </Card>
  </div>
</template>

<script>
  import PostTime from "../components/PostTime"
    export default {
      props:["postTime","title","viewSum","commentsSum","tag","thumbPicSrc","route"],
        data() {
            return {
                isHover:false
            }
        },
        methods: {
            goToArticle(){
             this.$router.push("/Blogs/"+this.route)
          },
            handleMouseOver(){
                this.isHover=true;
            },
            handleMouseOut(){
                this.isHover=false;
            }
        },
        created: function () {

        },
        mounted() {
            console.log(this.viewSum)
        },
        components: {PostTime}
    }
</script>
<style >
  .img-thumb{
    width: 25.8rem;
    height: 20rem;
    vertical-align: bottom;
  }
  .article-card-container{ margin-top:8rem;}
  .article-card-container:hover{ cursor: pointer;box-shadow:0 1px 20px -6px rgba(0,0,0,.5) }
  .article-card{overflow: hidden}
  .article-card-detail-lists{
    padding: 2rem 3rem 0 2rem;
  }
  .article-card-detail-lists-items{
    margin-bottom:2rem;
  }

</style>
