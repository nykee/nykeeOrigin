<template>
  <div>
    <IntroHeader
            Title="Photos"
            introHeaderClass="intro-header-photo"
            subTitle=""
            :isProjectPage="false"/>
    <div class="flexContainer">
      <ul class="photo-intro" >
        <li class="photo-intro-items" v-for="intro in intros" :key="intro.id">{{intro.content}}</li>
      </ul>
    </div>
   <!-- <Scroll :on-reach-bottom="handleReachBottom" >-->
      <div v-for="photo in photoData" >
        <div class="flexContainer">
          <PhotoCard :description="photo.title"
                     :webpSrc="photo.webpSrc"
                     :imgSrc="photo.imgSrc"
                     :photoTime="photo.time"
                     :photoLocation="photo.location"
          class="photo-card"/>
        </div>
      </div>
    <!--</Scroll>-->

  </div>
</template>
<script>
  import IntroHeader from '../components/IntroHeader.vue'
  import PhotoCard from '../components/PhotoCard'
  import {throttle} from "../utils/throttle";

  export default {
    data() {
      return {
        photoData: [

        ],
        intros:[]
      }
    },
    created(){
      this.intros =this.$t("message.photoPage.intro");
      this.photoData =this.$t("message.photoPage.photos");
      let photoSrc =[
        {"webSrc":"https://image.nykee.cn/yuyuan.webp","imgSrc":"https://image.nykee.cn/yuyuan.jpg"},
        {"webSrc":"https://image.nykee.cn/maitian.webp","imgSrc":"https://image.nykee.cn/maitian.jpg"},
        {"webSrc":"https://image.nykee.cn/nightrain.webp","imgSrc":"https://image.nykee.cn/nightrain.jpg"},
        {"webSrc":"https://image.nykee.cn/puppy.webp","imgSrc":"https://image.nykee.cn/puppy.jpg"},
        {"webSrc":"https://image.nykee.cn/szmuseum.webp","imgSrc":"https://image.nykee.cn/szmuseum.jpg"},
        {"webSrc":"https://image.nykee.cn/sakura.webp","imgSrc":"https://image.nykee.cn/sakura.jpg"},
        {"webSrc":"https://image.nykee.cn/sea.webp","imgSrc":"https://image.nykee.cn/sea.jpg"},
        {"webSrc":"https://image.nykee.cn/boat.webp","imgSrc":"https://image.nykee.cn/boat.jpg"},
        {"webSrc":"https://image.nykee.cn/bird.webp","imgSrc":"https://image.nykee.cn/bird.jpg"},
        {"webSrc":"https://image.nykee.cn/car.webp","imgSrc":"https://image.nykee.cn/car.jpg"},
        {"webSrc":"https://image.nykee.cn/sky.webp","imgSrc":"https://image.nykee.cn/sky.jpg"},
        {"webSrc":"https://image.nykee.cn/ayada.webp","imgSrc":"https://image.nykee.cn/ayada.jpg"},
        {"webSrc":"https://image.nykee.cn/sunset.webp","imgSrc":"https://image.nykee.cn/sunset.jpg"},
        {"webSrc":"https://image.nykee.cn/building.webp","imgSrc":"https://image.nykee.cn/building.jpg"},
        {"webSrc":"https://image.nykee.cn/building2.webp","imgSrc":"https://image.nykee.cn/building2.jpg"},
        {"webSrc":"https://image.nykee.cn/towercrane.webp","imgSrc":"https://image.nykee.cn/towercrane.jpg"},
        {"webSrc":"https://image.nykee.cn/windmill.webp","imgSrc":"https://image.nykee.cn/windmill.jpg"},
        {"webSrc":"https://image.nykee.cn/yellow.webp","imgSrc":"https://image.nykee.cn/yellow.jpg"},
        {"webSrc":"https://image.nykee.cn/look.webp","imgSrc":"https://image.nykee.cn/look.jpg"},
        {"webSrc":"https://image.nykee.cn/flower.webp","imgSrc":"https://image.nykee.cn/flower.jpg"},
      ];
      // this.intros =this.$t("message.photoPage.intro");
      for(let i=0,len=this.photoData.length;i<len;i++){
        this.photoData[i].webSrc =photoSrc[i].webSrc;
        this.photoData[i].imgSrc =photoSrc[i].imgSrc;
      }
      console.log(this.photoData);
    },
    mounted(){

      // console.log(this.intro);
      window.addEventListener('scroll', throttle(this.handleScroll));


    },
    methods:{
      handleScroll(){
        let self =this;
        // console.log("ReachBottom");
        let scrollTop =Math.floor(document.body.scrollTop ||document.documentElement.scrollTop)
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
        console.log("clientHeight:"+clientHeight);
        console.log("scrollTop:"+scrollTop);
        console.log("scrollHeight:"+scrollHeight);

        if(scrollHeight = clientHeight+scrollTop){

          setTimeout(() => {
            let startIndex = self.photoData.length;
            let limit =3;
            for(let i = startIndex;i<startIndex+limit;i++){
              console.log(i);
            }
            /*  self.photoData.push(
                {

                }
              );*/

          },1000)

        }


      }
    },
    components: {
      IntroHeader, PhotoCard
    }
  }
</script>
<style>

  .photo-intro {
    text-align: left;
    margin-top: 1.5rem;
    width: 80%;
    border: 1px solid #E9EBED;
    padding: 1rem 1rem;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }

  .photo-intro-items {
    margin-top: .3rem;
    /*padding: .2rem;*/
  }

  @media screen and (max-width: 320px) {
    .photo-intro-items {
      font-size: .8rem
    }
  }

  @media screen and (min-width: 1440px) and (max-width: 2560px) {
    .photo-intro-items {
      padding: .4rem 0
    }
  }

</style>
