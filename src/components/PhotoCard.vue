<template>
  <Card class="photo-card ">
    <div class="photo-card-box">
      <img :src="imgSrc" class="photo-card-img">
      <div v-if="isExpand" class="photo-card-info">
        <h3 class="photo-card-desc">{{description}}</h3>
        <h4 class="photo-card-desc-time">{{photoTime}}</h4>
        <h4 class="photo-card-desc-pos">
          <i class="fa fa-location-arrow"></i>
          <span>{{photoLocation}}</span>
        </h4>
      </div>

    <div class="img-expand-box">
      <i class="fa img-expand" :class="{'fa-arrows-alt':!isModalShow,'fa-2x':!isMobile}" @click="changeImgExpand"></i>
    </div>
    </div>

    <i class="fa  info-expand "  @click="changeExpand" :class="{'fa-compress':isExpand,'fa-expand':!isExpand,'fa-2x':!isMobile}"></i>
    <Modal v-model="isModalShow" footer-hide fullscreen :title="{description}">
      <div>
        <img :src="imgSrc" alt="" class="fullScreenImg">
      </div>
    </Modal>
  </Card>
</template>

<script>
    export default {
      props:["imgSrc","description","photoTime","photoLocation"],
        data() {
            return {
              isExpand:false,
              isMobile:false,
              isModalShow:false
            }
        },
        methods: {
          changeExpand(){
            this.isExpand =!this.isExpand
          },
          changeImgExpand(){
            this.isModalShow =!this.isModalShow
          }
        },
        created: function () {
          // console.log(this.imgSrc);
        },
        mounted() {
          if(window.screen.width<769){this.isMobile = true}
          else {
            this.isMobile =false;
          }
        },
        components: {}
    }
</script>
<style>
  .photo-card{
    width: 80%;
    margin-top: 2rem;
    padding-bottom: .5rem;
  }
  .photo-card-box{
    text-align: center;
    padding-bottom: 2rem;
  }
  .photo-card-img{
    width: 100%;
  }
  .photo-card-desc{
    margin-top: .5rem;
    color:#525558;
    margin-bottom: .3rem;
  }
  .photo-card-desc-pos{
    color:#848688;
    font-size: .4rem;
  }
  .photo-card-desc-time{
    color: #848688;
  }
  .info-expand{
    position: absolute;
    bottom:2%;
    right:2%;
    color:rgba(132,134,136,0.8);
  }
  .photo-card-info{
    padding-top: .8rem;
  }
  .img-expand{
    color:#F7F7F7;

  }
  .fullScreenImg{
    width: 100%;
    height: 100%;
  }
  .img-expand-box{
    position: absolute;
    top:3%;
    right: 2%;
    padding: .5rem;
    border-radius: 3px;
    background-color: rgba(214,214,214,0.8);
  }
  .img-expand-box:hover{
    transform:  scale(1.05);
  }
  /*.photo-card-img:hover{*/
    /*box-shadow:8px 8px 4px rgba(0,0,0,.15);*/
    /*transform:translateY(-3px) scale(1.03)*/
  /*}*/
  @media screen and (min-width: 200px) and (max-width:320px ){
    /*.photo-card-desc{font-size: 1.2rem;}*/
    .photo-card{margin-top: .5rem;}
    .photo-card-desc-time{font-size: .8rem}
    .photo-card-desc-pos{font-size: .6rem}
    .photo-card-box{padding-bottom: .3rem}
  }
  @media screen and (min-width: 321px) and (max-width:375px ){
    .photo-card{margin-top: .8rem;}
    .photo-card-img{height: 12rem;}
    .photo-card-box{padding-bottom: .5rem}
  }
  @media screen and (min-width: 376px) and (max-width:425px ){
    .photo-card{margin-top: .8rem;}
    .photo-card-box{padding-bottom: .8rem}
  }
  @media screen and (min-width: 426px) and (max-width:768px ){
    .photo-card{margin-top: 1rem;}
  }
  @media screen and (min-width: 769px) and (max-width:1024px ){
    .photo-card{margin-top: 1rem;}
  }
  @media screen and (min-width: 1025px) and (max-width:1440px ){
    .photo-card{margin-top: 1rem;}
    .photo-card-desc{font-size: 1.6rem;}
    .photo-card-desc-time{
      font-size: 1rem;
      margin-top: .8rem;
    }
    .photo-card-desc-pos{
      font-size: .8rem;
      margin-top: .4rem;
    }
  }
  @media screen and (min-width: 1441px) and (max-width:2560px ){
    .photo-card{margin-top: 1rem;}
    .photo-card-desc{
      font-size: 2.6rem;
      margin-top: 2.6rem;
    }
    .photo-card-desc-time{
      font-size: 1.8rem;
      margin-top: 1.8rem;
    }
    .photo-card-desc-pos{
      font-size: 1.4rem;
      margin-top: 1.4rem;
    }

  }
</style>
