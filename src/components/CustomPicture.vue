<template>
  <picture>
    <source :srcset="srcSet"  type="image/webp" :class="className" style="display: none;" v-on:load="getSomething($event)">
    <img :src="imgSrc" alt="" :class="className" style="display: none;" v-on:load="getSomething($event)" />
  </picture>
</template>

<script>
    export default {
      props:["className","srcSet","imgSrc",],
        data() {
            return {}
        },
        methods: {
          getSomething(e){
            var target = e.currentTarget;
            target.style.opacity = 0;
            target.style.display = 'block';
            var timer = setInterval(function () {
              target.style.opacity = parseFloat(target.style.opacity) + 0.01;
              if (parseFloat(target.style.opacity) >= 0.98) {
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
  .avatar{
    width: 12.5rem;
  }

</style>
