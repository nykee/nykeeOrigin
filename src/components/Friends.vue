<template>
  <div class="fl-container">
    <commonTitle :title-name="this.$t('message.friendsLinks')"/>
    <Row class="f-content" :gutter="10">
      <i-col span="8" v-for="fri in friends" :key="fri.id" class="link-items">
        <a :href="fri.href" target="_blank">{{fri.title}}</a>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import commonTitle from './CommonRightColTitle'

  export default {
    data() {
      return {
        friends:[
          {id:1,href:'http://annwyn.top/',title:"Annwyn's BLOG"},
          {id:2,href:'https://2heng.xin/',title:"樱花庄的白猫"},
          {id:3,href:'http://huangxuan.me/',title:"Hux Blog"},
          {id:4,href:'https://www.fghrsh.net/',title:"FGHRSH 的博客"},
          {id:5,href:'https://heroyf.club/',title:"萌萌哒の柯基"},
          {id:6,href:'https://www.hojun.cn/',title:"hojun"},
          {id:7,href:'https://blog.woc.moe/',title:"jmglsi的博客"},
          {id:8,href:'https://www.yooomu.com/',title:"Kong's Blog"},
          {id:9,href:'https://lishaoy.net/',title:"Persilee's Blog"},
          {id:10,href:'https://meowqvq.wordpress.com/',title:"惡魔菌の记事簿"}
          ]
      }
    },
    methods: {},
    created: function () {

    },
    mounted() {

    },
    components: {commonTitle}
  }
</script>
<style scoped>
  .fl-container {
    width: 14rem;
    border-top: 1px solid #271111;
  }


  .f-content {
    margin-top: 15px;
  }
  .link-items{
    margin-bottom: .4rem;
    font-size: .8rem;
    height: 2.6rem;
  }


</style>
