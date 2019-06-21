<template>
 <!-- <picture class="custom-pic">
    <source :srcset="srcSet" type="image/webp" :class="className" style="display: none;height: 500px"
            v-on:load="getSomething($event)">
    <img :src="imgSrc" alt="" :class="className" style="display: none;height: 500px" v-on:load="getSomething($event)"/>
  </picture>-->
   <picture class="custom-pic">
    <source :srcset="srcSet" type="image/webp" :class="className">
    <img :src="imgSrc" alt="" :class="className"  />
  </picture>

</template>

<script>
  export default {
    props: ["className", "srcSet", "imgSrc",],
    data() {
      return {}
    },
    methods: {
      getSomething(e) {
        var target = e.currentTarget;
        // console.log(document.body.offsetWidth*.8);
        // target.style.height = "500px"
        // console.log(target.width);
        // console.log(window.innerWidth);
        // console.log(screen.width);
        // target.style.width =screen.width*.8 ;
        // target.style.height = "100%";

        target.style.opacity = 0;
        target.style.display = 'block';
        var timer = setInterval(function () {
          target.style.opacity = parseFloat(target.style.opacity) + 0.01;
          if (parseFloat(target.style.opacity) >= 0.98) {
            target.style.height = "auto"
            clearInterval(timer);
          }
        }, 30);
      }
    },
    created: function () {

    },
    mounted() {
//          console.log(this.vLazy);
    },
    components: {}
  }
</script>
<style>
 /* .custom-pic:hover{
    transform: scale(1.2);
  }*/
 .custom-pic{
   /*height: 500px;*/
 }


</style>
