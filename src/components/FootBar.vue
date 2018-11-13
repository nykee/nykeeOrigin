<template>
  <div class="footBar">
    <Row type="flex" justify="center" align="middle" class="icons">
      <i-col>
        <ContactIcons class="c-icon-foot" />
      </i-col>
    </Row>
    <Row type="flex" justify="center" align="middle" class="copyright">
      <p class="copyright-content">Copyright © Nykee 2017-{{yearCurrent}} </p>
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
  .icons{
    font-size: 1rem;
  }
  .icons,.copyright{
    width: 25rem;
  }
  .copyright-content{
    font-size: 1rem;
  }
  .c-icon-foot{
    margin-bottom: .9rem;
  }
</style>
