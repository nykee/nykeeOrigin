<template>
  <Card class="photo-card ">
    <div class="photo-card-box">
      <div style="position: relative" class="custom-pic-container">
        <CustomPicture class-name="resp-img"  :imgSrc="imgSrc" :srcSet="webpSrc"  />
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
          <picture>
            <source :srcset="webpSrc"  type="image/webp" class="full-screen-img" >
            <img :src="imgSrc" alt="" class="full-screen-img"  />
          </picture>
          <ul class="modal-footer">
            <li>{{photoTime}}</li>
            <li>
              <i class="fa fa-location-arrow"></i>
              {{photoLocation}}
            </li>
          </ul>
        </div>
      </Modal>
    <div class="mobile-modal" v-if="isMobileModalShow">
      <div class="mobile-modal-mask"></div>
      <div class="mobile-modal-content ">
        <div class="mobile-modal-header clearfix">
          <i class="fa fa-close fa-2x mobile-modal-close fr"  @click="closeMmodal"></i>
        </div>
        <picture>
          <source :srcset="webpSrc"  type="image/webp" class="mb-full-screen-img" >
          <img :src="imgSrc" alt="" class="mb-full-screen-img"  />
        </picture>
        <div class="mobile-modal-footer clearfix">
          <ul class="fl">
            <li><span class="mobile-modal-title">{{description}}</span></li>
            <li class="mobile-modal-footer-time">{{photoTime}}</li>
            <li class="mobile-modal-footer-pos">
              <i class="fa fa-location-arrow"></i>
              {{photoLocation}}
            </li>
          </ul>
          <i class="fa fa-heart fa-2x fr like-btn"></i>
        </div>
      </div>
    </div>


  </Card>
</template>

<script>
  import CustomPicture from '../components/CustomPicture'
    export default {
      props:["imgSrc","webpSrc","description","photoTime","photoLocation"],
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
          },

        },
        created: function () {
        },
        mounted() {
          if(window.screen.width<769){this.isMobile = true}
          else {
            this.isMobile =false;
          }
        },
        components: {CustomPicture}
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
    width: 100%;
    height: 100%;
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
    bottom:1%;
    right:2%;
    color:rgba(132,134,136,0.8);
    cursor: pointer;
  }
  .photo-card-info{
    padding-top: .8rem;
  }
  .img-expand{
    color:#F7F7F7;
  }
  .full-screen-img{
    width:100%;
    height:auto;
    max-width:100%;
    display:block;
  }
  .img-expand-box{
    position: absolute;
    top:1%;
    right: 1%;
    padding: .5rem;
    border-radius: 3px;
    background-color: rgba(214,214,214,0.6);
    cursor: pointer;
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
  .mobile-modal{
    width: 100%;
    height: 100%;
  }
  .mobile-modal-mask{
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
  .mobile-modal-content{
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: .5rem;
  }
  .mobile-modal-title{
    font-size: 1rem;
    color:#f7f7f7;
    display: inline-block;
    padding-left: .3rem;
    margin-bottom: .3rem;
  }
  .mb-full-screen-img{
    width: 100%;
    height: 50%;
    padding: 0;
    margin-top: 20%;
    margin-bottom: 10%;

  }
  .mobile-modal-close{
    color:#f7f7f7;
    margin-top: 8%;
    padding-right: 4%;
  }
  .mobile-modal-header{
    margin-bottom: .8rem;
  }
  .mobile-modal-footer{
    margin-top: 10%;
  }
  .like-btn{
    color:#fff;
    padding-right: .2rem;
  }
  .mobile-modal-footer-time,.mobile-modal-footer-pos{color:#808080;}
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
    .photo-card-img-box{
      width: 14rem;
      height: 10rem;
    }

  }
  @media screen and (min-width: 321px) and (max-width:375px ){
    .photo-card{margin-top: .8rem;}
    /*.photo-card-img{height: 12rem;}*/
    .photo-card-box{padding-bottom: .5rem}
    .photo-card-img-box{
      width: 17rem;
      height: 13rem;
    }

  }
  @media screen and (min-width: 376px) and (max-width:425px ){
    .photo-card{margin-top: .8rem;}
    .photo-card-box{
      padding-bottom: .8rem;

    }
    .photo-card-img-box{
      width: 19rem;
      height: 14rem;
    }
  }
  @media screen and (min-width: 426px) and (max-width:768px ){
    .photo-card{margin-top: 1rem;}
    .photo-card-img-box{
      width: 36rem;
      height: 24rem;
    }
  }
  @media screen and (min-width: 769px) and (max-width:1024px ){
    .photo-card{margin-top: 1rem;}
    .photo-card-img-box{
      width: 49rem;
      height: 32.5rem;
    }
  }
  @media screen and (min-width: 1025px) and (max-width:1440px ){
    .photo-card{margin-top: 4rem;}
    .photo-card-desc{font-size: 1.6rem;}
    .photo-card-desc-time{
      font-size: 1rem;
      margin-top: .8rem;
    }
    .photo-card-desc-pos{
      font-size: .8rem;
      margin-top: .4rem;
    }
    .photo-card-img-box{
      width: 10rem;
      height: 10rem;
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
    .photo-card-box{
      margin-bottom:3rem;}
    .photo-card-img-box{
      width: 10rem;
      height: 10rem;
    }

  }
  .custom-pic-container{
    max-width: 100%;
    height: 0;
    padding-bottom: 75%;
    overflow: hidden;
  }




</style>
