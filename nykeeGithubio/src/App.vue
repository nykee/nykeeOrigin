<script setup>
</script>

<template>
  <div class="index-page">
    <div class="intro-wrapper">
      <h1 class="c-fff">Nykee</h1>
      <h3 class="c-fff">contact me :
        <div><a class="a-link" href="https://www.zhihu.com/people/LighteningFE" target="_blank">知乎</a></div>
        <div><a class="a-link" href="mailto:nykee@sina.com" >nykee@sina.com</a></div>
      </h3>
    </div>

  </div>
</template>

<style scoped lang="scss">
  .index-page{
    background: url("./assets/index.webp") no-repeat center center;
    width: 100vw;
    height: 100vh;
    position: relative;

    .intro-wrapper{
      width: 400px;
      height: 400px;
      position: absolute;
      top:40%;
      left:40%;
      .a-link{
        color: #fff;
      }
      .c-fff{
        color: #fff;
      }
    }
  }
</style>
