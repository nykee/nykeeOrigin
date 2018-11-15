<template>
  <Card class="photo-card ">
    <div class="photo-card-box">
      <div style="position: relative">
        <img v-lazy="imgSrc" class="photo-card-img"/>
        <div class="img-expand-box" >
          <i class="fa img-expand" :class="{'fa-arrows-alt':!isModalShow,'fa-2x':!isMobile}" @click="changeImgExpand" ></i>
        </div>
      </div>
      <div v-if="isExpand" class="photo-card-info">
        <h3 class="photo-card-desc">{{description}}</h3>
        <h4 class="photo-card-desc-time">{{photoTime}}</h4>
        <h4 class="photo-card-desc-pos">
          <i class="fa fa-location-arrow"></i>
          <span>{{photoLocation}}</span>
        </h4>
      </div>
    </div>
    <i class="fa  info-expand "  @click="changeExpand" :class="{'fa-compress':isExpand,'fa-expand':!isExpand,'fa-2x':!isMobile}"></i>
      <Modal v-model="isModalShow" footer-hide fullscreen >
        <div>
          <span class="modal-title">{{description}}</span>
          <img :src="imgSrc" alt="" class="fullScreenImg">
          <ul class="modal-footer">
            <li>{{photoTime}}</li>
            <li><i class="fa fa-location-arrow"></i>{{photoLocation}}</li>
          </ul>
        </div>
      </Modal>
    <div class="mobileModal" v-if="isMobileModalShow">
      <div class="mobileModal-mask"></div>
      <div class="mobileModal-content ">
        <div class="mModal-header clearfix">
          <i class="fa fa-close fa-2x mModal-close fr"  @click="closeMmodal"></i>
        </div>
        <img :src="imgSrc" alt="" class="mb-fullScreenImg"/>
        <div class="mModal-footer clearfix">
          <ul class="fl">
            <li><span class="mobileModal-title">{{description}}</span></li>
            <li class="mModal-footer-time">{{photoTime}}</li>
            <li class="mModal-footer-pos"><i class="fa fa-location-arrow"></i>{{photoLocation}}</li>
          </ul>
          <i class="fa fa-heart fa-2x fr likeBtn"></i>
        </div>
      </div>
    </div>


  </Card>
</template>

<script>
    export default {
      props:["imgSrc","description","photoTime","photoLocation"],
        data() {
            return {
              isExpand:false,
              isMobile:false,
              isModalShow:false,
              isMobileModalShow:false
            }
        },
        methods: {
          changeExpand(){
            this.isExpand =!this.isExpand
          },
          changeImgExpand(){
            if(!this.isMobile){this.isModalShow =!this.isModalShow;}
            if(this.isMobile) {this.isMobileModalShow = !this.isMobileModalShow;}
          },
          closeMmodal(){
            this.isMobileModalShow =false
          }
        },
        created: function () {
          // console.log(this.description);
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
    /*position: relative;*/
  }
  .photo-card-box{
    text-align: center;
    padding-bottom: 2rem;
    /*position: relative;*/
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
    font-size: .6rem;
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
    top:1%;
    right: 1%;
    padding: .5rem;
    border-radius: 3px;
    background-color: rgba(214,214,214,0.6);
  }
  .img-expand-box:hover{
    transform:  scale(1.05);
  }
  .modal-title{
    font-size: 1.3rem;
    display: inline-block;
    padding-bottom: .3rem;
    border-bottom: 1px solid #E8EAEC;
    margin-bottom: 1rem;
    width: 100%;
  }
  .modal-footer{
    margin-top: .5rem;
    text-align: center;
    padding-bottom: .2rem;
  }
  .mobileModal{
    width: 100%;
    height: 100%;


  }
  .mobileModal-mask{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    background-color: #000;
    z-index: 50;
  }
  .mobileModal-content{
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: .5rem;
    /*background-color: pink;*/
  }
  .mobileModal-title{
    font-size: 1rem;
    color:#f7f7f7;
    display: inline-block;
    padding-left: .3rem;
    margin-bottom: .3rem;
  }
  .mb-fullScreenImg{
    width: 100%;
    height: 50%;
    /*padding: 0 .3rem;*/
    padding: 0;
    margin-top: 20%;
    margin-bottom: 10%;

  }
  .mModal-close{
    color:#f7f7f7;
    margin-top: 8%;
    padding-right: 4%;
  }
  .mModal-header{
    margin-bottom: .8rem;
  }
  .mModal-footer{
    margin-top: 10%;
    /*margin-bottom: 10%;*/
  }
  .likeBtn{
    color:#fff;
    padding-right: .2rem;
  }
  .mModal-footer-time,.mModal-footer-pos{color:#808080;}
  @media screen and (min-width: 200px) and (max-width:425px ){
    .img-expand-box{
      padding: .2rem .3rem;
      border-radius: 1px;}

  }
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
