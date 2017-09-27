<template>
  <div class="container">
    <h5><router-link to="/About">ABOUT ME</router-link></h5>
    <div>
      <img src="../../static/img/nykee.png" alt="" class="avatar">
      <p>
        keep Coding! <br>
        人生苦短，我用JS
      </p>
    </div>
    <ContactIcons></ContactIcons>
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

</style>
