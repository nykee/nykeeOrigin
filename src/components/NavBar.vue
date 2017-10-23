<template>

    <Row>
        <Menu   mode="horizontal" theme="light" active-name="1">
         <i-col :span="6"> <router-link to="/">nykee`s Blog</router-link></i-col>
          <i-col :span="6" :offset="12">
            <MenuItem name="2"><router-link to="/">HOME</router-link></MenuItem>
            <MenuItem name="3"><router-link to="/Blogs">Blogs</router-link></MenuItem>
            <MenuItem name="4"><router-link to="/Tags">TAGS</router-link></MenuItem>

          </i-col>
        </Menu>
    </Row>

</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

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
