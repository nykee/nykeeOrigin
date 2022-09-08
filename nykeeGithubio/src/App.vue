<script setup>
</script>

<template>
  <div class="index-page">
    <div class="intro-wrapper">
<!--      <div class="douyin-style-font mb20">
        <div class="douyin-style-title" data-title="Hello,Nykee">
&lt;!&ndash;          <span>Hello,Nykee</span>&ndash;&gt;
        </div>
      </div>-->
      <div class="tiktok">Hello,Nykee</div>
      <h3 class="c-fff">前端开发</h3>
      <h3 class="c-fff">退役骑游选手</h3>
      <h3 class="c-fff">联系我 :
        <div><a class="a-link" href="https://www.zhihu.com/people/LighteningFE" target="_blank">知乎</a></div>
        <div><a class="a-link" href="mailto:nykee@sina.com" >nykee@sina.com</a></div>
      </h3>
    </div>

  </div>
</template>

<style scoped lang="scss">
.mb20{
  margin-bottom: 20px;
}
  .index-page{
    background: url("./assets/index.webp") no-repeat center center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: relative;

    .intro-wrapper{
      width: 400px;
      height: 400px;
      position: absolute;
      top:calc(50% - 200px);
      left:calc(50% - 200px);
      text-align: center;
     /* .doudong{
        font-size: 30px;
        animation: uk-text-shadow-glitch .65s cubic-bezier(1,-1.91,0,2.79) 0s infinite normal both running;
      }
      @keyframes uk-text-shadow-glitch {
       0% {
        text-shadow: none
    }
    25% {
        text-shadow: -2px -2px 0 #ff004f,2px 2px 0 #00f7ef
    }
    50% {
        text-shadow: 2px -2px 0 #ff004f,-2px 2px 0 #00f7ef
    }
    75% {
        text-shadow: -2px 2px 0 #ff004f,2px -2px 0 #00f7ef
    }
    100% {
        text-shadow: 2px 2px 0 #ff004f,-2px -2px 0 #00f7ef
    }
      }
      @keyframes uk-flicker {
        0% {
          opacity: 0
        }
        10% {
          opacity: .6;
          transform: scale(.8)
        }
        20% {
          opacity: 0
        }
        40% {
          opacity: 1
        }
        50% {
          opacity: .2;
          transform: scale(1.1)
        }
        100% {
          opacity: 1;
          transform: scale(1)
        }
      }*/
      .tiktok{
        color: #fff;
        font-family: sans-serif;
        font-size: 4em;
        margin-bottom: 40px;
        cursor: pointer;
        &:hover{
          animation: animate .8s linear infinite;
        }
      }
      @keyframes animate {
        0%{
          text-shadow:none
        }
        25% {
          text-shadow: -2px -2px 0 #0ff, 2px 2px 0 #f00;
        }
        50% {
          text-shadow: 2px -2px 0 #0ff, -2px 2px 0 #f00;
        }
        75% {
          text-shadow: -2px 2px 0 #0ff, 2px -2px 0 #f00;
        }
        100% {
          text-shadow: 2px 2px 0 #0ff, -2px -2px 0 #f00;
        }
      }
      .a-link{
        color: #fff;
      }
      .c-fff{
        color: #fff;
      }
    }
  }
</style>
