<template>
  <div class="footBar">
    <Row type="flex" justify="center" align="middle" class="icons">
      <i-col>
        <ContactIcons style="height: 60px"></ContactIcons>
      </i-col>
    </Row>
    <Row type="flex" justify="center" align="middle" class="copyright">
      <p class="copyright-content">Copyright © Nykee 2017-Now </p>
    </Row>

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
<style>
  .footBar{
    margin-bottom:20px;
  }
  .icons{
    font-size: 18px;
  }
  .icons,.copyright{
    width: 400px;
  }
  .copyright-content{
    font-size: 16px;
  }
</style>
