<template>
  <Card class="photo-card ">
    <div style="text-align:center">
      <img :src="imgSrc" class="photo-card-img">
      <h3 class="photo-card-desc">{{description}}</h3>
      <h4 class="photo-card-desc-time">
          {{photoTime}}
      </h4>
      <h4 class="photo-card-desc-pos">
        <i class="fa fa-location-arrow"></i>
        <span>{{photoLocation}}</span>
      </h4>
    </div>
  </Card>
</template>

<script>
    export default {
      props:["imgSrc","description","photoTime","photoLocation"],
        data() {
            return {}
        },
        methods: {},
        created: function () {
          console.log(this.imgSrc);
        },
        mounted() {

        },
        components: {}
    }
</script>
<style>
  .photo-card{
    width: 80%;
    margin-top: 2rem;
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
    font-size: .4rem;
  }
  .photo-card-desc-time{
    color: #848688;
  }
  @media screen and (min-width: 200px) and (max-width:320px ){
    .photo-card{margin-top: .5rem;}
  }
  @media screen and (min-width: 321px) and (max-width:375px ){
    .photo-card{margin-top: .8rem;}
    .photo-card-img{height: 12rem;}
  }
  @media screen and (min-width: 376px) and (max-width:425px ){
    .photo-card{margin-top: .8rem;}
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
