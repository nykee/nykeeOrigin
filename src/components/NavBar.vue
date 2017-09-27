<template>

    <el-row>
        <el-menu   :default-active="activeIndex" class="fl menu" mode="horizontal" @select="handleSelect">
         <el-col :span="6"> <el-menu-item index="1"><router-link to="/">      nykee`s Blog  </router-link></el-menu-item></el-col>
          <el-col :span="6" :offset="12">
            <el-menu-item index="2"><router-link to="/">       HOME   </router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/About">ABOUT </router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/Tags">TAGS</router-link></el-menu-item>
          </el-col>
        </el-menu>
    </el-row>

</template>

<script>
    export default {
        data() {
            return {
              activeIndex: '1',
            }
        },
        methods: {
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }
        },
        created: function () {

        },
        mounted() {

        },
        components: {}
    }
</script>
<style>

</style>
