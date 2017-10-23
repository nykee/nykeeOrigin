<template>
  <div class="layout">
    <Row type="flex" :gutter="20">
      <i-col span="5" >
        <Menu  theme="light" width="auto" >


            <MenuItem ><router-link to="/_2017_01_20">大众点评Node.js爬虫</router-link></MenuItem>
            <MenuItem ><router-link to="/_2017_01_22">前端技巧汇总，包括CSS,JS,Git</router-link></MenuItem>
            <MenuItem ><router-link to="/_2017_02_14">MongoDB学习笔记</router-link></MenuItem>
            <MenuItem ><router-link to="/_2017_06_18">百度地图学习笔记</router-link></MenuItem>
            <MenuItem ><router-link to="/_2017_09_21">Echarts2.7.2爬坑记录</router-link></MenuItem>
            <MenuItem ><router-link to="/_2017_09_26">Vue学习笔记</router-link></MenuItem>


        </Menu>
      </i-col>
      <i-col span="19" >


          <router-view></router-view>


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
  .title{
    color: #8391a5;
    margin-bottom:15px;
  }
  .desc>li{
    margin-left:20px;
  }
  .list-items{
    font-size: 16px;
    margin-top:5px;

  }
  .list{
    margin-bottom:15px;
  }
  .code-text{
    background-color: #F8F8F8;
    font-family: Menlo,Monaco,Consolas,Courier New,monospace;
  }
  .title-lv1{
    font-size: 18px;
  }
  .title-lv2{
    font-size: 16px;
  }

</style>
