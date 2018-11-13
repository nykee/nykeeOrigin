<template>
    <div>
      <IntroHeader/>
      <div class=" flexContainer" >
        <ul class="photo-intro">
          <li class="photo-intro-items">我曾经跨过山和大海 也穿过人山人海</li>
          <li class="photo-intro-items">我曾经拥有着的一切 转眼都飘散如烟</li>
          <li class="photo-intro-items">我曾经失落失望 失掉所有方向</li>
          <li class="photo-intro-items">直到看见平凡 才是唯一的答案</li>
          <li class="photo-intro-items">--&nbsp;朴树 《平凡之路》</li>
        </ul>
      </div>
      <div v-for="photo in photoData">
        <div class="flexContainer">
          <PhotoCard :description="photo.desc" :imgSrc="photo.imgSrc" :photoTime="photo.photoTime":photoLocation="photo.photoLocation"/>
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
                    "imgSrc":"../../static/img/yuyuan.jpg",
                    "photoTime":this.$t("message.photoPage.photos[0].time"),
                    "photoLocation":this.$t("message.photoPage.photos[0].location"),
                  },
                  {
                    "desc":this.$t("message.photoPage.photos[1].title"),
                    "imgSrc":"../../static/img/maitian.jpg",
                    "photoTime":this.$t("message.photoPage.photos[1].time"),
                    "photoLocation":this.$t("message.photoPage.photos[1].location"),
                  },
                  {
                    "desc":this.$t("message.photoPage.photos[2].title"),
                    "imgSrc":"../../static/img/nightrain.jpg",
                    "photoTime":this.$t("message.photoPage.photos[2].time"),
                    "photoLocation":this.$t("message.photoPage.photos[2].location"),
                  },
                  {
                    "desc":this.$t("message.photoPage.photos[3].title"),
                    "imgSrc":"../../static/img/puppy.jpg",
                    "photoTime":this.$t("message.photoPage.photos[3].time"),
                    "photoLocation":this.$t("message.photoPage.photos[3].location"),
                  },
                  {
                    "desc":this.$t("message.photoPage.photos[4].title"),
                    "imgSrc":"../../static/img/SZmuseum2.jpg",
                    "photoTime":this.$t("message.photoPage.photos[4].time"),
                    "photoLocation":this.$t("message.photoPage.photos[4].location"),
                  },
                  {
                    "desc":this.$t("message.photoPage.photos[5].title"),
                    "imgSrc":"../../static/img/sakura.jpg",
                    "photoTime":this.$t("message.photoPage.photos[5].time"),
                    "photoLocation":this.$t("message.photoPage.photos[5].location"),
                  },
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
