<template>
  <header :class="{'intro-header-index':isIndex,'intro-header-blogs':isBlogs,'intro-header-tags':isTags}" >
    <div class="intro-container">
      <Row>
        <i-col>
          <div class="site-heading">
            <h1>{{head}}</h1>
            <span class="sub-heading">{{subHead}}</span>
          </div>
        </i-col>
      </Row>
    </div>
  </header>
</template>

<script>
    export default {
        data() {
            return {
              isIndex:true,
              isBlogs:false,
              isTags:false,
              head:'Nykee Blog',
              subHead:'人生苦短，我用JS!'
            }
        },
        methods: {
          changeBG(){
            let path = this.$route.path;
            console.log(path);
            if(path ==="/Blogs"){
              this.isBlogs = true;
              this.isIndex =false;
              this.isTags =false;
              this.head ='About Me';
              this.subHead ='This is nykee~'
            }
            else if(path ==="/Tags"){
              this.isBlogs = true;
              this.isIndex =false;
              this.isTags =true;
              this.head ='Tags';
              this.subHead ='Use different color!'
            }
          }
        },
        created: function () {

        },
        mounted() {
          this.changeBG();

        },
        components: {}
    }
</script>
<style>
  .intro-header-index{
    background-image: url("../asserts/img/home-bg.jpg") !important;
    background: no-repeat center center;
    background-attachment: scroll;
    background-color: #ccc;
    background-size: cover;
  }
  .intro-header-blogs{
    background-image: url("../asserts/img/about-bg-walle.jpg") !important;
    background: no-repeat center center;
    background-attachment: scroll;
    background-color: #ccc;
    background-size: cover;
  }
  .intro-header-tags{
    background-image: url("../asserts/img/tag-bg.jpg") !important;
    background: no-repeat center center;
    background-attachment: scroll;
    background-color: #ccc;
    background-size: cover;
  }
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
  }

</style>
