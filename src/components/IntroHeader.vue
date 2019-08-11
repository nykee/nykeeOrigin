<template>
    <header >
      <div class="intro-container" :class="introHeaderClass" v-if="!isProj">
        <div class="site-heading">
          <h1 :class="siteHeadTitleClass" @mouseenter="addShake" @mouseleave="removeShake">{{Title}}</h1>
          <span class="site-heading-subtitle">{{subTitle}}</span>
        </div>
      </div>
      <div  class="proj-container" v-if="isProj">
        <div class="site-heading">
          <h1 :class="siteHeadTitleClass">{{Title}}</h1>
          <span class="site-heading-subtitle">{{subTitle}}</span>
        </div>
        <div id="particles" ></div>
      </div>
    </header>
</template>

<script>
//   import particlesJS from "particles.js"
  // import {checkWebp} from "../utils/WebPutil"

  export default {
      props:["Title","subTitle","introHeaderClass","isProjectPage"],
    data() {
      return {
        isProj:false,
          siteHeadTitleClass:'site-heading-title'
        /*canUseWebp: false,
        isIndex: true,
        isBlogs: false,
        isTags: false,
        isPhoto: false,
        isAbout: false,
        isComments:false,*/
      }
    },
    methods: {
        addShake(){
          this.siteHeadTitleClass = "site-heading-title shake-shake"
        },
        removeShake(){
            this.siteHeadTitleClass = "site-heading-title";
        },

      myParticles() {
//          console.log(particlesJS)
        particlesJS.load('particles', "../../static/particles.json", function () {
          console.log('callback - particles.js config loaded');
        });
      }
    },
    created: function () {

    },
    mounted() {
//        console.log(location.pathname)
        if(location.pathname ==="/Project"){
           this.isProj = true;
            this.myParticles();
        }
//      this.myParticles();

    },
    components: {}
  }
</script>
<style>

  .intro-header-friends{
    background-image: url("https://image.nykee.cn/sydney.jpg") ;
  }
  .intro-header-friends-webp{
    background-image: url("https://image.nykee.cn/sydney.webp") ;
  }
  .intro-header-index {
    background-image: url("https://image.nykee.cn/index.jpg") ;
  }


  .intro-header-index-webp {

    background-image: url("https://image.nykee.cn/index.webp");
  }


  .intro-header-blogs {


      background-image: url("https://image.nykee.cn/tower_new.jpg") ;


  }

  .intro-header-blogs-webp {
    background-image: url("https://image.nykee.cn/tower_new.webp");

  }

  .intro-header-photo {
    background-image: url("https://image.nykee.cn/lishui.jpg") ;
  }

  .intro-header-photo-webp {
    background-image: url("https://image.nykee.cn/lishui.webp");
  }

  .intro-header-about {
    background-image: url("https://image.nykee.cn/about.jpg");
  }

  .intro-header-about-webp {
    background-image: url("https://image.nykee.cn/about.webp") ;
  }
  .intro-header-comments{background-image: url("https://image.nykee.cn/HK.jpg");}
  .intro-header-comments-webp{background-image: url("https://image.nykee.cn/HK.webp");}

  .intro-container {
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: scroll;
    background-color: #ccc;
    background-size: cover;
    width: 100%;
    height: 25rem;
    /*margin-bottom: .4rem;*/
    /*background-image: url("https://image.nykee.cn/HK.jpg");*/
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .proj-container{
      /*width: 100%;*/
      height:auto;
  }

  .site-heading {
    text-align: center;
    position: absolute;
  }

  .site-heading-title {
    cursor: pointer;
    font-size: 3.75rem;
    color: #fff;
    line-height: 1.1;
    font-family: Courgette !important;
  }

  .site-heading-subtitle {
    color: #fff;
    font-size: 1.125rem;
    line-height: 1.1;
    font-weight: 400;
    margin: .625rem 0 0;
    display: inline-block;
  }

  #particles {
    position: absolute;
    top: 0;
    width: 100%;
    height: 24.75rem;
    z-index: -1;
    background: linear-gradient(to right, #213862 0%, #1E7890 50%, #213862 100%);
    background: -webkit-linear-gradient(to right, #213862 0%, #1E7890 50%, #213862 100%);
    background: -moz-linear-gradient(to right, #213862 0%, #1E7890 50%, #213862 100%);
  }

  @media screen and (min-width: 200px) and (max-width: 320px ) {
    .site-heading-title {
      font-size: 2rem;
    }

    .site-heading-subtitle {
      font-size: .9rem;
    }

    .site-heading {
      width: 14rem;
    }

    .intro-container, #particles {
      height: 15rem;
    }
  }

  @media screen and (min-width: 321px) and (max-width: 375px ) {
    .site-heading-title {
      font-size: 2.5rem;
    }

    .site-heading-subtitle {
      font-size: 1rem;
    }

    .site-heading {
      width: 18rem;
    }

    .intro-container, #particles {
      height: 18rem;
    }
  }

  @media screen and (min-width: 376px) and (max-width: 425px ) {
    .site-heading-title {
      font-size: 2.8rem;
    }

    .site-heading-subtitle {
      font-size: 1.2rem;
    }

    .site-heading {
      width: 20rem;
    }

    .intro-container, #particles {
      height: 18rem
    }
  }

  @media screen and (min-width: 426px) and (max-width: 768px ) {
    .site-heading-title {
      font-size: 3.5rem;
    }

    .site-heading-subtitle {
      font-size: 1.2rem;
    }

    .site-heading {
      width: 25rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px ) {
    .site-heading-title {
      font-size: 3rem;
    }

    .site-heading-subtitle {
      font-size: 1.1rem;
    }

    .site-heading {
      width: 25rem;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px ) {
    .site-heading {
      width: 28rem;
    }
  }

  @media screen and (min-width: 1441px) and (max-width: 1680px ) {
    .site-heading-title {
      font-size: 5rem;
      width: 35rem;
    }

    .site-heading-subtitle {
      font-size: 2rem;
    }

    .site-heading {
      width: 35rem;
    }

    .intro-container, #particles {
      height: 40rem
    }
  }
  @media screen and (min-width: 1681px) and (max-width: 1920px ) {
    .site-heading-title {
      font-size: 5rem;
      width: 35rem;
    }

    .site-heading-subtitle {
      font-size: 2rem;
    }

    .site-heading {
      width: 35rem;
    }

    .intro-container, #particles {
      height: 40rem
    }
  }
  @media screen and (min-width: 1921px) and (max-width: 2560px ) {
    .site-heading-title {
      font-size: 5rem;
      width: 40rem;
    }

    .site-heading-subtitle {
      font-size: 2rem;
    }

    .site-heading {
      width: 40rem;

    }

    .intro-container, #particles {
      height: 44rem
    }
  }

  @media screen and (min-width: 2561px)  {
   /* html{
      font-size: 24px;
    }*/
    .site-heading {
      width: 35rem;
    }
  }
</style>
