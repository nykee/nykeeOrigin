<template>
  <div class="footBar">
    <Row type="flex" justify="center" align="middle" class="icons">
      <i-col>
        <ContactIcons style="height: 50px"></ContactIcons>
      </i-col>
    </Row>
    <Row type="flex" justify="center" align="middle" class="copyright">
      <p>Copyright © nykee 2017 </p>
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

  .icons,.copyright{
    width: 400px;
  }
</style>
