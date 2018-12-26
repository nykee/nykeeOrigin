<template>
  <div>
    <tooltip :content="tooltip" placement="top-start" v-if="!isMobile">
      <img :class="emotionClass" :src="src" alt="" />
    </tooltip>
    <img :class="emotionClass" :src="src" alt="" v-if="isMobile"/>
  </div>

</template>

<script>
  import {isMobile} from '../utils/ScreenWidth'
    export default {
      props:["src","tooltip","code","emotionClass"],
        data() {
            return {
              isMobile:false
            }
        },
        methods: {

        },
        created: function () {

        },
        mounted() {
          this.isMobile =isMobile();
          // console.log(this.isMobile);
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
