<template>
  <div @click="goToArticle" class="article-card-container" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
    <Card class="article-card" padding="0">
        <Row>
          <i-col :lg="{span:10}">
            <ul class="article-card-detail-lists">
              <li class="article-card-detail-lists-items">
                <i class="fa fa-clock-o gray"></i><PostTime :postTime="postTime" class="post-time"></PostTime>
              </li>
              <li class="article-card-detail-lists-items">
                <span class="blog-title">{{title}}</span>
              </li>
              <li class="article-card-detail-lists-items">
                <i class="fa fa-eye gray"></i><span>{{viewSum}}热度</span>
                <i class="fa fa-comment gray"></i><span class="comments-sum">{{commentsSum}}条评论</span>
                <i class="fa fa-tag gray"></i><span class="tag">{{tag}}</span>
              </li>
              <li>{{preview}}</li>
            </ul>
          </i-col>
          <i-col :lg="{span:14}">
            <img :src="thumbPicSrc" alt="" class="img-thumb" :class="{'isHover':isHover}">
          </i-col>
        </Row>
    </Card>
  </div>
</template>

<script>
  import PostTime from "../components/PostTime"
    export default {
      props:["postTime","title","viewSum","commentsSum","tag","thumbPicSrc","route","preview"],
        data() {
            return {
                isHover:false
            }
        },
        methods: {
            goToArticle(){
              console.log(this.route);
             this.$router.push("/Blogs/"+this.route)
          },
            handleMouseOver(){
                this.isHover=true;
//                console.log("MouseOver");
            },
            handleMouseOut(){
                this.isHover=false;
//                console.log('MouseOut');
            }
        },
        created: function () {

        },
        mounted() {
//            console.log(this.viewSum)
        },
        components: {PostTime}
    }
</script>
<style >
  .img-thumb{
    width: 30rem;
    height: 20rem;
    vertical-align: bottom;
  }
  .article-card-container{ margin-top:6rem;}
  .article-card-container:hover{ cursor: pointer;box-shadow:0 1px 20px -6px rgba(0,0,0,.5) }
  .article-card{overflow: hidden}
  .article-card-detail-lists{
    padding: 2rem 1rem 0 2rem;
  }
  .article-card-detail-lists-items{
    margin-bottom:2rem;
  }
  .isHover{
    transform: scale(1.2);
    transition: transform .65s ease;
  }
  .post-time{
    display: inline-block;
    color:#9B9B9B;
  }
  .gray{
    color:#9B9B9B;
  }
  .blog-title{
    font-weight: bold;
  }
  .blog-title:hover,.comments-sum:hover,.tag:hover{
    color: #2D8CF0;
  }

</style>
