<template>
  <div class="footBar">
    <el-row>
      <ContactIcons></ContactIcons>
    </el-row>
    <p>Copyright © nykee 2017 </p>
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
    width: 100px;
  }
</style>
