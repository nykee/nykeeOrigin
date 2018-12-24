<template>
  <tooltip :content="tooltip" placement="top-start" >
    <img :class="emotionClass" :src="src" alt="" >
  </tooltip>
</template>

<script>
    export default {
      props:["src","tooltip","code","emotionClass"],
        data() {
            return {}
        },
        methods: {

        },
        created: function () {

        },
        mounted() {

        },
        components: {}
    }
</script>
<style scoped>
  .emotion-img{
    height: 2rem;
    width: 2rem;
    cursor: pointer;
  }
  .emotion-img-ali{
    height: 3rem;
    width: 3rem;
    cursor: pointer;
  }
  /*.emotion-img:hover{*/
    /*background-color: #F7F7F7;*/
  /*}*/
</style>
