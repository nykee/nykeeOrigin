<template>
  <div class="container">
    <h5 >ABOUT ME</h5>
    <div>
      <img src="../asserts/img/nykee.png" alt="" class="avatar">
      <p class="slogan">
        keep Coding! <br>
        人生苦短，我用JS
      </p>
    </div>
    <ContactIcons class="fTags"></ContactIcons>
  </div>
</template>

<script>
  import ContactIcons from './ContactIcons.vue'
    export default {
        data() {
            return {}
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
<style scoped>
  .container{
    width: 200px;
    border-top:1px solid #271111;
  }
  .avatar{
    width: 200px;
  }
  .slogan{
    margin-bottom:10px;
    text-align: center;
  }
  .fTags{
    margin-bottom:15px;
  }


</style>
