<template>
    <div>
      <IntroHeader/>
      <div class="flexContainer" >
        <ul class="photo-intro">
          <li class="photo-intro-items">{{$t("message.photoPage.intro[0]")}}</li>
          <li class="photo-intro-items">{{$t("message.photoPage.intro[1]")}}</li>
          <li class="photo-intro-items">{{$t("message.photoPage.intro[2]")}}</li>
          <li class="photo-intro-items">{{$t("message.photoPage.intro[3]")}}</li>
          <li class="photo-intro-items">{{$t("message.photoPage.intro[4]")}}</li>
        </ul>
      </div>
      <div v-for="photo in photoData">
        <div class="flexContainer">
          <PhotoCard :description="photo.desc" :webpSrc="photo.webpSrc" :imgSrc="photo.imgSrc" :photoTime="photo.photoTime" :photoLocation="photo.photoLocation"/>
        </div>
      </div>
    </div>
</template>
<script>
    import IntroHeader from '../components/IntroHeader.vue'
    import PhotoCard from '../components/PhotoCard'

    export default {
        data() {
            return {
                photoData:[
                  {
                    "desc":this.$t("message.photoPage.photos[0].title"),
                    "webpSrc":"http://imagenykeecn.test.upcdn.net/yuyuan.webp",
                    "imgSrc":"http://imagenykeecn.test.upcdn.net/yuyuan.jpg",
                    "photoTime":this.$t("message.photoPage.photos[0].time"),
                    "photoLocation":this.$t("message.photoPage.photos[0].location"),
                  },
                  {
                    "desc":this.$t("message.photoPage.photos[1].title"),
                    "webpSrc":"http://imagenykeecn.test.upcdn.net/maitian.webp",
                    "imgSrc":"http://imagenykeecn.test.upcdn.net/maitian.jpg",
                    "photoTime":this.$t("message.photoPage.photos[1].time"),
                    "photoLocation":this.$t("message.photoPage.photos[1].location"),
                  },
                  {
                    "desc":this.$t("message.photoPage.photos[2].title"),
                    "webpSrc":"http://imagenykeecn.test.upcdn.net/nightrain.webp",
                    "imgSrc":"http://imagenykeecn.test.upcdn.net/nightrain.jpg",
                    "photoTime":this.$t("message.photoPage.photos[2].time"),
                    "photoLocation":this.$t("message.photoPage.photos[2].location"),
                  },
                  {
                    "desc":this.$t("message.photoPage.photos[3].title"),
                    "webpSrc":"http://imagenykeecn.test.upcdn.net/puppy.webp",
                    "imgSrc":"http://imagenykeecn.test.upcdn.net/puppy.jpg",
                    "photoTime":this.$t("message.photoPage.photos[3].time"),
                    "photoLocation":this.$t("message.photoPage.photos[3].location"),
                  },
                  {
                    "desc":this.$t("message.photoPage.photos[4].title"),
                    "webpSrc":"http://imagenykeecn.test.upcdn.net/szmuseum.webp",
                    "imgSrc":"http://imagenykeecn.test.upcdn.net/szmuseum.jpg",
                    "photoTime":this.$t("message.photoPage.photos[4].time"),
                    "photoLocation":this.$t("message.photoPage.photos[4].location"),
                  },
                  {
                    "desc":this.$t("message.photoPage.photos[5].title"),
                    "webpSrc":"http://imagenykeecn.test.upcdn.net/sakura.webp",
                    "imgSrc":"http://imagenykeecn.test.upcdn.net/sakura.jpg",
                    "photoTime":this.$t("message.photoPage.photos[5].time"),
                    "photoLocation":this.$t("message.photoPage.photos[5].location"),
                  },
                  {
                    "desc":this.$t("message.photoPage.photos[6].title"),
                    "webpSrc":"http://imagenykeecn.test.upcdn.net/sea.webp",
                    "imgSrc":"http://imagenykeecn.test.upcdn.net/sea.jpg",
                    "photoTime":this.$t("message.photoPage.photos[6].time"),
                    "photoLocation":this.$t("message.photoPage.photos[6].location"),
                  },
                  {
                    "desc":this.$t("message.photoPage.photos[7].title"),
                    "webpSrc":"http://imagenykeecn.test.upcdn.net/boat.webp",
                    "imgSrc":"http://imagenykeecn.test.upcdn.net/boat.jpg",
                    "photoTime":this.$t("message.photoPage.photos[7].time"),
                    "photoLocation":this.$t("message.photoPage.photos[7].location"),
                  },
                  {
                    "desc":this.$t("message.photoPage.photos[8].title"),
                    "webpSrc":"http://imagenykeecn.test.upcdn.net/bird.webp",
                    "imgSrc":"http://imagenykeecn.test.upcdn.net/bird.jpg",
                    "photoTime":this.$t("message.photoPage.photos[8].time"),
                    "photoLocation":this.$t("message.photoPage.photos[8].location"),
                  },
                  {
                    "desc":this.$t("message.photoPage.photos[9].title"),
                    "webpSrc":"http://imagenykeecn.test.upcdn.net/car.webp",
                    "imgSrc":"http://imagenykeecn.test.upcdn.net/car.jpg",
                    "photoTime":this.$t("message.photoPage.photos[9].time"),
                    "photoLocation":this.$t("message.photoPage.photos[9].location"),
                  },
                  {
                    "desc":this.$t("message.photoPage.photos[10].title"),
                    "webpSrc":"http://imagenykeecn.test.upcdn.net/sky.webp",
                    "imgSrc":"http://imagenykeecn.test.upcdn.net/sky.jpg",
                    "photoTime":this.$t("message.photoPage.photos[10].time"),
                    "photoLocation":this.$t("message.photoPage.photos[10].location"),
                  }
                ]
            }
        },
        components: {
            IntroHeader,PhotoCard
        }
    }
</script>
<style>

  .photo-intro{
    text-align: left;
    margin-top: 1.5rem;
    width: 80%;
    border: 1px solid #E9EBED;
    padding: 1rem 1rem;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }
  .photo-intro-items{
    margin-top: .3rem;
    /*padding: .2rem;*/
  }
  @media screen and (max-width: 320px){
    .photo-intro-items{font-size: .8rem}
  }
  @media screen and (min-width: 1440px) and (max-width: 2560px) {
    .photo-intro-items{padding: .4rem 0}
  }
</style>
