<template>
  <span>
    <tooltip :content="tooltip" placement="top-start" v-if="!isMobile">
      <img :class="emotionClass" class="emoj-img" :src="src" alt="" />
    </tooltip>
    <img :class="emotionClass" class="emoj-img" :src="src" alt="" v-if="isMobile"/>
  </span>

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
  .emoj-img{

    }
  .emoj-img:hover{transform: scale(1.2)}
</style>
