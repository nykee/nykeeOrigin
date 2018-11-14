<template>
  <div >

        <header :class="{'intro-header-index':isIndex,'intro-header-blogs':isBlogs,'intro-header-photo':isPhoto}" v-if="!isTags" >
          <div class="intro-container">

                <div class="site-heading">
                  <h1 class="site-heading-title">{{head}}</h1>
                  <span class="site-heading-subtitle">{{subHead}}</span>
                </div>


          </div>
        </header>





    <header v-if="isTags" >
        <div class="intro-container" >

              <div class="site-heading">
                <h1 class="site-heading-title">{{head}}</h1>
                <span class="site-heading-subtitle">{{subHead}}</span>
              </div>
              <div id="particles"></div>

        </div>

    </header>


  </div>

</template>

<script>
  import "particles.js"
    export default {
        data() {
            return {
              isIndex:true,
              isBlogs:false,
              isTags:false,
              isPhoto:false,
              head:'About Me',
              subHead:"Life`s short,I use js"
            }
        },
        methods: {
          changeBG(){
            let path = String(this.$route.path);
            if(path ==="/Blogs"||path.substring(0,path.lastIndexOf('/')) ==="/Blogs"){
              this.isBlogs = true;
              this.isIndex =false;
              this.isTags =false;
                this.isPhoto =false;
              this.head ='Nykee Blog';
              this.subHead ='Talk is cheap,show me ur code~'
            }
            else if(path ==="/Project"){
              this.isBlogs = false;
              this.isIndex =false;
              this.isTags =true;
                this.isPhoto =false;
              this.head ='My Projects';
              this.subHead ='Think Different!'
            }
            else if(path ==="/Photograph"){
                this.isBlogs = false;
                this.isIndex =false;
                this.isTags =false;
                this.isPhoto =true;
                this.head ='See the world';
                this.subHead ='With my eyes and my camera!'
            }
          },
          myParticles(){
            particlesJS('particles', {
              "particles": {
                "number": {
                  "value": 30,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#ffffff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 5
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 10,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 50,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 300,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 2
                },
                "move": {
                  "enable": true,
                  "speed": 8,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": false,
                    "mode": "repulse"
                  },
                  "onclick": {
                    "enable": false,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 800,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 800,
                    "size": 80,
                    "duration": 2,
                    "opacity": 0.8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 400,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }, function() {
              console.log('callback - particles.js config loaded');
            });
          }
        },
        created: function () {
          this.changeBG();
        },
        mounted() {
//          this.changeBG();
          this.myParticles();

        },
        components: {}
    }
</script>
<style>
    .intro-header-index,.intro-header-blogs,.intro-header-photo{
        background: no-repeat center center;
        background-attachment: scroll;
        background-color: #ccc;
        background-size: cover;
    }
  .intro-header-index{
    background-image: url("../../static/img/index.jpg");

  }
  .intro-header-blogs{
    background-image: url("../../static/img/code.jpg") ;

  }
  .intro-header-photo{
      background-image: url("../../static/img/lishui-c.jpg") ;
  }
  .intro-container{
    width: 100%;
    height: 25rem;
  }
  .site-heading {
    text-align: center;
    position: absolute;
  }

  .site-heading-title{
    font-size: 3.75rem;
    color: #fff;
    line-height:1.1
  }
  .site-heading-subtitle{
    color: #fff;
    font-size: 1.125rem;
    line-height:1.1;
    font-weight: 400;
    margin: .625rem 0 0 ;
    display: inline-block;
  }
  #particles {
    position: absolute;
    top:0;
    width: 100%;
    height: 24.75rem;
    z-index: -1;
    background:linear-gradient(to right,#213862 0%,#1E7890 50%,#213862 100%);
    background:-webkit-linear-gradient(to right,#213862 0%,#1E7890 50%,#213862 100%);
    background:-moz-linear-gradient(to right,#213862 0%,#1E7890 50%,#213862 100%);
  }

  @media screen and (min-width: 200px) and (max-width:320px ){
    .site-heading-title{
      font-size: 2rem;
    }
    .site-heading-subtitle{
      font-size: .9rem;
    }
    .site-heading{
      width: 14rem;
      top: 14%;
      left: 17%;
    }
    .intro-container,#particles {
      height: 15rem;
    }
  }
    @media screen and (min-width: 321px) and (max-width:375px ){
      .site-heading-title{
        font-size: 2.5rem;
      }
      .site-heading-subtitle{
        font-size: 1rem;
      }
      .site-heading{
        width: 18rem;
        top: 16%;
        left: 12%;
      }
      .intro-container,#particles {
        height: 18rem;
      }
    }
    @media screen and (min-width: 376px) and (max-width:425px ){
      .site-heading-title{
        font-size: 2.8rem;
      }
      .site-heading-subtitle{
        font-size: 1.2rem;
      }
      .site-heading{
        width: 20rem;
        top: 16%;
        left: 13%;
      }
      .intro-container,#particles{height: 18rem}
    }
    @media screen and (min-width: 426px) and (max-width:768px ){
      .site-heading-title{
        font-size: 3.5rem;
      }
      .site-heading-subtitle{
        font-size: 1.2rem;
      }
      .site-heading{
        width: 25rem;
        top: 22%;
        left: 27%;
      }
    }
    @media screen and (min-width: 769px) and (max-width:1024px ){
      .site-heading-title{
        font-size: 3rem;
      }
      .site-heading-subtitle{
        font-size: 1.1rem;
      }
      .site-heading{
        width: 25rem;
        top: 20%;
        left: 30%;
      }
    }
    @media screen and (min-width: 1025px) and (max-width:1440px ){
      .site-heading{
          width: 28rem;
          top:18%;
          left:35%;
      }
    }
    @media screen and (min-width: 1441px) and (max-width:2560px ){
      .site-heading-title{
        font-size: 5rem;
        width: 35rem;
      }
      .site-heading-subtitle{
        font-size: 2rem;
      }
      .site-heading{
        width: 35rem;
          top:18%;
          left:35%;
      }
        .intro-container{height: 40rem}
    }
</style>
