<template>
  <div class="footBar">
    <Row type="flex" justify="center" align="middle" class="copyright">
      <p class="copyright-content">Copyright © Nykee 2017-{{yearCurrent}} </p>
    </Row>
    <Row type="flex" justify="center" align="middle" class="beian">
      <p class="beian-content" ><a href="//www.beian.miit.gov.cn/">沪ICP备18042752号</a></p>
    </Row>
    <Row type="flex" justify="center" align="middle" class="supporter" >
      <picture>
        <source type="image/webp" srcset="https://image.nykee.cn/ypy.webp" class="logo-ypy">
        <img src="https://image.nykee.cn/ypy.png" alt="" class="logo-ypy"/>
      </picture>
    </Row>
  </div>
</template>
<script>
  import ContactIcons from './ContactIcons.vue'
    export default {
        data() {
            return {
              yearCurrent:new Date().getFullYear()
            }
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {
          ContactIcons
        }
    }
</script>
<style>
  .footBar{
   margin: 1.5rem 0 1rem 0;
  }
  .copyright{
    width: 25rem;
  }
  .copyright-content{
    font-size: 1rem;
    margin-bottom: .5rem;
  }
  .copyright-content,.beian-content a{
    color:#B9B9B9 !important;
  }

  .logo-ypy{
    width: 8rem;
  }
</style>
