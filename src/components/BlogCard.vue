<template>
  <div @click="goToArticle" class="article-card-container" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
    <Card class="article-card" padding="0">
        <Row type="flex">
          <i-col :lg="{span:10}" :md="{span:9}" :sm="{span:14}" :xs="{span:24}" :order="contentOrder">
            <ul class="article-card-detail-lists">
              <li class="article-card-detail-lists-items">
                <i class="fa fa-clock-o gray"></i><PostTime :postTime="postTime" class="post-time"></PostTime>
              </li>
              <li class="article-card-detail-lists-items">
                <span class="blog-title">{{title}}</span>
              </li>
              <li class="article-card-detail-lists-items">
                <span class="view-sum">
                  <i class="fa fa-eye gray"></i><span >{{viewSum}}热度</span>
                </span>
                <span class="comments-sum">
                  <i class="fa fa-comment gray"></i><span >{{commentsSum}}条评论</span>
                </span>
                <span class="tag">
                  <i class="fa fa-tag gray"></i><span >{{tag}}</span>
                </span>
              </li>
              <li>{{preview}}</li>
            </ul>
          </i-col>
          <i-col :lg="{span:14}" :md="{span:15}" :sm="{span:14}" :xs="{span:24}" :order="imgOrder">
            <div class="img-container">
              <img v-lazy="thumbPicSrc" alt="" class="img-thumb" :class="{'isHover':isHover}">
            </div>

          </i-col>
        </Row>
    </Card>
  </div>
</template>

<script>
  import PostTime from "../components/PostTime"
    export default {
      props:["postTime","title","viewSum","commentsSum","tag","thumbPicSrc","route","preview","imgOrder","contentOrder"],
        data() {
            return {
                isHover:false
            }
        },
        methods: {
            goToArticle(){
//              console.log(this.route);
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
  @media screen and (min-width: 1280px){
    .img-thumb{
      width:28rem;
      height:18rem;
    }
  }
  @media screen and (min-width: 1440px){
    .img-thumb{
      width:31rem;
      height:20rem;
    }
  }
  @media screen and (min-width: 1680px){
    .img-thumb{
      width:40rem;
      height:24rem;
    }
  }
  @media screen and (min-width: 1900px){
    .img-thumb{
      width:41rem;
      height:26rem;
    }
  }
  @media screen and (min-width: 2560px){
    .img-thumb{
      width:56rem;
      height:34rem;
    }
  }

  .article-card-container{ margin-top:4rem;}
  .ivu-card:hover{cursor: pointer;box-shadow:0 6px 10px 6px rgba(110,110,110,.5)!important;}
  .article-card:hover{ cursor: pointer;box-shadow:0 6px 10px 6px rgba(110,110,110,.5) }
  .article-card{overflow: hidden;border-radius: 18px!important;}
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
  .blog-title:hover,.comments-sum:hover,.tag:hover,.view-sum:hover{
    color: #2D8CF0 !important;
    cursor: pointer;
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
