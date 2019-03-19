<template>
  <div class="pager-item-box" @click="handlePagerItemClick">
    <div class="pager-item-bg">
      <img :src="BgSrc" alt="" class="pager-item-bg-img">
    </div>
    <div class="pager-item-info">
      <span class="pager-item-info-label">{{Label}}</span>
      <h3 class="pager-item-info-title">{{BlogTitle}}</h3>
    </div>
  </div>
</template>

<script>
    export default {
      props:["Label","BlogTitle","BlogUrl","BgSrc"],
        data() {
            return {}
        },
        methods: {
          handlePagerItemClick(){
            this.$router.push("/Blogs/"+this.BlogUrl)
          }
        },
        created: function () {

        },
        mounted() {

        },
        components: {}
    }
</script>
<style>
  .pager-item-box{
    position: relative;
  }
  .pager-item-box:hover{
    cursor: pointer;
    opacity: .8;
  }
  .pager-item-bg{
    display: inline-block;
    height: 12rem;
    width: 99%;
  }
  .pager-item-bg-img{
    height: 100%;
    width: 100%;
    object-fit:fill;
  }
  .pager-item-info{
    position: absolute;
    top: 38%;
    left:35%;
  }
  .pager-item-info-label{
    color: #fff;
    opacity: .86;
    margin-bottom: .3rem;
    display: inline-block;
    font-weight: 800;
  }
  .pager-item-info-title{
    color: #fff;
    font-size: .9rem;
  }
  @media screen and (min-width: 1900px){
    .pager-item-info{
      left:44%;
    }
  }
</style>
