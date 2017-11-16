<template>
  <div >
    <header :class="{'intro-header-index':isIndex,'intro-header-blogs':isBlogs}" v-if="!isTags" >
      <div class="intro-container">
            <div class="site-heading">
              <h1>{{head}}</h1>
              <span class="sub-heading">{{subHead}}</span>
            </div>
      </div>
    </header>

    <header v-if="isTags" >
        <div class="intro-container" style="position: relative">

              <div class="site-heading">
                <h1>{{head}}</h1>
                <span class="sub-heading">{{subHead}}</span>
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
              head:'About Me',
              subHead:'人生苦短，我用JS!'
            }
        },
        methods: {
          changeBG(){
            let path = String(this.$route.path);

//            console.log(path.substring(0,path.lastIndexOf('/')));
            if(path ==="/Blogs"||path.substring(0,path.lastIndexOf('/')) ==="/Blogs"){
              this.isBlogs = true;
              this.isIndex =false;
              this.isTags =false;
              this.head ='Nykee Blog';
              this.subHead ='Talk is cheap,show me ur code~'
            }
            else if(path ==="/Project"){
              this.isBlogs = true;
              this.isIndex =false;
              this.isTags =true;
              this.head ='My Projects';
              this.subHead ='Think Different!'
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
  .intro-header-index{
    background-image: url("../asserts/img/index.jpg") !important;
    background: no-repeat center center;
    background-attachment: scroll;
    background-color: #ccc;
    background-size: cover;
  }
  .intro-header-blogs{
    background-image: url("../asserts/img/code.jpg") !important;
    background: no-repeat center center;
    background-attachment: scroll;
    background-color: #ccc;
    background-size: cover;
  }
  ./*intro-header-tags{
    !*background-image: url("../asserts/img/tags.jpg") !important;*!
    background: no-repeat center center;
    background-attachment: scroll;
    background-color: #ccc;
    background-size: cover;
  }*/
  .intro-container{
    width: 100%;
    height: 400px;
  }
  .site-heading {
    text-align: center;
  }
  header{display: block}
  .sub-heading{
    margin: 10px 0;
  }
  @media only screen and (min-width: 768px) {
    .site-heading{
      padding: 150px 0;
    }
  }
  .site-heading>h1{
    font-size: 60px;
    color: #fff;
    line-height:1.1
  }
  .sub-heading{
    color: #fff;
    font-size: 18px;
    line-height:1.1;
    font-weight: 300;
    margin: 10px 0 0 ;
    display: inline-block;
  }
  #particles {
    position: absolute;
    top:0;
    width: 100%;
    height: 396px;
    z-index: -1;
    background:linear-gradient(to right,#213862 0%,#1E7890 50%,#213862 100%);
    background:-webkit-linear-gradient(to right,#213862 0%,#1E7890 50%,#213862 100%);
    background:-moz-linear-gradient(to right,#213862 0%,#1E7890 50%,#213862 100%);
  }

</style>
