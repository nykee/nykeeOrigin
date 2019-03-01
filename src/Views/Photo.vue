<template>
  <div>
    <IntroHeader
            Title="See the world"
            introHeaderClass="intro-header-photo"
            subTitle="With my eyes and my camera!"
            :isProjectPage="false"/>
    <div class="flexContainer">
      <ul class="photo-intro">
        <li class="photo-intro-items">{{$t("message.photoPage.intro[0]")}}</li>
        <li class="photo-intro-items">{{$t("message.photoPage.intro[1]")}}</li>
        <li class="photo-intro-items">{{$t("message.photoPage.intro[2]")}}</li>
        <li class="photo-intro-items">{{$t("message.photoPage.intro[3]")}}</li>
        <li class="photo-intro-items">{{$t("message.photoPage.intro[4]")}}</li>
      </ul>
    </div>
   <!-- <Scroll :on-reach-bottom="handleReachBottom" >-->
      <div v-for="photo in photoData" >
        <div class="flexContainer">
          <PhotoCard :description="photo.desc"
                     :webpSrc="photo.webpSrc"
                     :imgSrc="photo.imgSrc"
                     :photoTime="photo.photoTime"
                     :photoLocation="photo.photoLocation"/>
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
          {
            "desc": this.$t("message.photoPage.photos[0].title"),
            "webpSrc": "https://image.nykee.cn/yuyuan.webp",
            "imgSrc": "https://image.nykee.cn/yuyuan.jpg",
            "photoTime": this.$t("message.photoPage.photos[0].time"),
            "photoLocation": this.$t("message.photoPage.photos[0].location"),
          },
          {
            "desc": this.$t("message.photoPage.photos[1].title"),
            "webpSrc": "https://image.nykee.cn/maitian.webp",
            "imgSrc": "https://image.nykee.cn/maitian.jpg",
            "photoTime": this.$t("message.photoPage.photos[1].time"),
            "photoLocation": this.$t("message.photoPage.photos[1].location"),
          },
          {
            "desc": this.$t("message.photoPage.photos[2].title"),
            "webpSrc": "https://image.nykee.cn/nightrain.webp",
            "imgSrc": "https://image.nykee.cn/nightrain.jpg",
            "photoTime": this.$t("message.photoPage.photos[2].time"),
            "photoLocation": this.$t("message.photoPage.photos[2].location"),
          },
          {
            "desc": this.$t("message.photoPage.photos[3].title"),
            "webpSrc": "https://image.nykee.cn/puppy.webp",
            "imgSrc": "https://image.nykee.cn/puppy.jpg",
            "photoTime": this.$t("message.photoPage.photos[3].time"),
            "photoLocation": this.$t("message.photoPage.photos[3].location"),
          },
          {
            "desc": this.$t("message.photoPage.photos[4].title"),
            "webpSrc": "https://image.nykee.cn/szmuseum.webp",
            "imgSrc": "https://image.nykee.cn/szmuseum.jpg",
            "photoTime": this.$t("message.photoPage.photos[4].time"),
            "photoLocation": this.$t("message.photoPage.photos[4].location"),
          },
          {
            "desc": this.$t("message.photoPage.photos[5].title"),
            "webpSrc": "https://image.nykee.cn/sakura.webp",
            "imgSrc": "https://image.nykee.cn/sakura.jpg",
            "photoTime": this.$t("message.photoPage.photos[5].time"),
            "photoLocation": this.$t("message.photoPage.photos[5].location"),
          },
          {
            "desc": this.$t("message.photoPage.photos[6].title"),
            "webpSrc": "https://image.nykee.cn/sea.webp",
            "imgSrc": "https://image.nykee.cn/sea.jpg",
            "photoTime": this.$t("message.photoPage.photos[6].time"),
            "photoLocation": this.$t("message.photoPage.photos[6].location"),
          },
          {
            "desc": this.$t("message.photoPage.photos[7].title"),
            "webpSrc": "https://image.nykee.cn/boat.webp",
            "imgSrc": "https://image.nykee.cn/boat.jpg",
            "photoTime": this.$t("message.photoPage.photos[7].time"),
            "photoLocation": this.$t("message.photoPage.photos[7].location"),
          },

         {
            "desc": this.$t("message.photoPage.photos[8].title"),
            "webpSrc": "https://image.nykee.cn/bird.webp",
            "imgSrc": "https://image.nykee.cn/bird.jpg",
            "photoTime": this.$t("message.photoPage.photos[8].time"),
            "photoLocation": this.$t("message.photoPage.photos[8].location"),
          },
          {
            "desc": this.$t("message.photoPage.photos[9].title"),
            "webpSrc": "https://image.nykee.cn/car.webp",
            "imgSrc": "https://image.nykee.cn/car.jpg",
            "photoTime": this.$t("message.photoPage.photos[9].time"),
            "photoLocation": this.$t("message.photoPage.photos[9].location"),
          },
          {
            "desc": this.$t("message.photoPage.photos[10].title"),
            "webpSrc": "https://image.nykee.cn/sky.webp",
            "imgSrc": "https://image.nykee.cn/sky.jpg",
            "photoTime": this.$t("message.photoPage.photos[10].time"),
            "photoLocation": this.$t("message.photoPage.photos[10].location"),
          }
            ,
            {
                "desc": this.$t("message.photoPage.photos[11].title"),
                "webpSrc": "https://image.nykee.cn/ayada.webp",
                "imgSrc": "https://image.nykee.cn/ayada.jpg",
                "photoTime": this.$t("message.photoPage.photos[11].time"),
                "photoLocation": this.$t("message.photoPage.photos[11].location"),
            }
            ,
            {
                "desc": this.$t("message.photoPage.photos[12].title"),
                "webpSrc": "https://image.nykee.cn/sunset.webp",
                "imgSrc": "https://image.nykee.cn/sunset.jpg",
                "photoTime": this.$t("message.photoPage.photos[12].time"),
                "photoLocation": this.$t("message.photoPage.photos[12].location"),
            }
        ]
      }
    },
    mounted(){
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
