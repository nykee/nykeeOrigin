<template>
  <div @click="goToArticle" class="article-card-container" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
    <Card class="article-card" padding="0">
        <Row>
          <i-col :lg="{span:10}" :md="{span:9}" :sm="{span:14}" :xs="{span:24}">
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
          <i-col :lg="{span:14}" :md="{span:15}" :sm="{span:14}" :xs="{span:24}">
            <div class="img-container">
              <img :src="thumbPicSrc" alt="" class="img-thumb" :class="{'isHover':isHover}">
            </div>

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
    max-width: 100%;
    max-height: 100%;
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
  .img-container{
    overflow: hidden;
  }
  @media screen and (max-width: 414px) {
    .article-card-detail-lists{padding:.4rem;
      text-align: center;
      margin-bottom: .4rem;}
    .article-card-detail-lists-items{
      margin-bottom: .6rem;}
    .img-thumb{height: 14rem}

  }

</style>
