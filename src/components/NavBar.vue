<template>

    <Row>
        <Menu   mode="horizontal" theme="light" active-name="2" class="menu" >
         <i-col :span="6"  > <router-link to="/">Nykee`s Blog</router-link></i-col>
          <i-col :span="5" :offset="13">
            <MenuItem name="2"><router-link to="/">HOME</router-link></MenuItem>
            <MenuItem name="3"><router-link to="/Blogs">BLOGS</router-link></MenuItem>
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
<style scoped="scoped">
  .menu{
    font-weight: 800;
    text-transform:uppercase;
    letter-spacing:1px;
    background:0 0;
    position:absolute;
    top:0;
    left: 0;
    z-index: 3;
    width: 100%;
  }
  .ivu-menu-horizontal.ivu-menu-light:after{
    background: none !important;
  }
  a{
    color: #fff !important;
  }
  a:hover{
    color: #2D8CF0 !important;
  }

</style>
