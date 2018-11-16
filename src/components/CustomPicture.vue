<template>
  <picture>
    <source :srcset="srcSet"  type="image/webp" :class="className"  :v-lazy="vLaazy">
    <img :src="imgSrc" alt="" :class="className" :v-lazy="vLaazy" />
  </picture>
</template>

<script>
    export default {
      props:["className","srcSet","imgSrc","vLaazy"],
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {}
    }
</script>
<style>
  .avatar{
    width: 12.5rem;
  }
</style>
