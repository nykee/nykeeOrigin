<template>
  <div class="footBar">
    <el-row type="flex" justify="center" class="icons">
      <el-col :span="14" >
        <ContactIcons style="height: 50px"></ContactIcons>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="copyright">
      <p>Copyright © nykee 2017 </p>
    </el-row>

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
