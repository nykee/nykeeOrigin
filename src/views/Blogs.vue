<template>
  <div >
    <IntroHeader/>
    <Row  class="blog-container">
      <i-col :lg="{span:5}"
             :md="{span:7}"
             :sm="{span:24}"
             :xs="{span:24}">
        <div v-show="!isMobile">
          <BlogMenu/>
        </div>

        <div v-show="isMobile">
          <div @click="drawerShow = true" class="mbNav-box"><i class="fa fa-navicon fa-2x"><span class="mbNav-name">文章目录</span></i></div>
          <Drawer title="文章目录" placement="left" :closable="false" v-model="drawerShow">
            <BlogMenu/>
          </Drawer>
        </div>
      </i-col>
      <i-col :lg="{span:19}"
             :md="{span:17}"
             :sm="{span:24}"
             :xs="{span:24}">
          <router-view></router-view>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import IntroHeader from '../components/IntroHeader.vue'
  import  BlogMenu from "../components/BlogMenu"

    export default {
        data() {
            return {
                isMobile:false,
              drawerShow:false
            }
        },
        methods: {


        },
        created: function () {

        },
      computed(){

      },
      beforeRouteUpdate(to,from,next){
        if(this.isMobile)this.drawerShow = !this.drawerShow;
        next();
      },
        mounted() {
          if(window.screen.width<769){this.isMobile = true}
          else {
            this.isMobile =false;
          }


        },

        updated:function () {
        },
        components: {
          IntroHeader,BlogMenu
        }
    }
</script>
<style >
  .title{
    margin-bottom:15px;
  }
  .desc>li{
    margin-left:20px;
  }
  .list-items{
    font-size: 16px;
    margin-top:5px;

  }
  .title-list{
    margin-bottom:15px;
  }
  .code-text{
    background-color: #EAEEF3;
    font-family: Menlo,Monaco,Consolas,Courier New,monospace;
    margin-top:15px;
    margin-bottom:15px;
    color:#333;
    word-break:normal;
    display: block;
    font-size:14px;
    padding: 1px;
  }
  .title-lv1{
    margin-top: .8rem;
    font-size: 20px;
    font-weight:bold;
    padding-left: .4rem;

  }
  .title-lv2{
    margin-top: .6rem;
    font-size: 18px;
    font-weight:bold;
    padding-left: .8rem;
  }
  .title-lv3{
    font-size: 16px;
    margin-left: 10px;
    margin-top:.4rem;
    font-weight:bold;
  }
  .part{
    margin-bottom:10px;
  }
  .section{
    margin-top:10px;
  }
  .blog-container{
    margin-top:1rem;
    padding: 0 .6rem;

  }
  .descrp{
    font-size: 16px;
    line-height: 1.27rem;
    margin-top:1rem;
    padding-left: 1rem;

  }
    .dropDownMenu{
        margin-left:30%;
        margin-bottom:2rem;
    }

  .steps{
    margin-top: .5rem;
  }
  .steps-item{
    margin-top: .5rem;
  }
  .mbNav-box{
    margin-bottom: 1rem;
  }
  .mbNav-name{
    margin-left:.5rem;
  }
  .consoleImg{
    width:100%;height:auto;max-width:100%;display:block;
  }


</style>
