<template>
  <div class="layout">
    <Row type="flex">
      <i-col span="5" >
      <Menu  theme="light" width="auto" >


          <MenuItem ><router-link to="/_2017_01_20">大众点评Node.js爬虫</router-link></MenuItem>
          <MenuItem ><router-link to="/_2017_01_22">前端技巧汇总，包括CSS,JS,Git</router-link></MenuItem>
          <MenuItem ><router-link to="/_2017_02_14">MongoDB学习笔记</router-link></MenuItem>


      </Menu>
      </i-col>
      <i-col span="19">

        <div >
          <router-view></router-view>
        </div>

      </i-col>
    </Row>
  </div>
</template>

<script>

    export default {
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {}
    }
</script>
<style>

</style>
