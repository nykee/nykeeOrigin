<template>
  <div>
    ---
    layout: post
    title: Vue学习笔记
    category: IT
    keywords: echarts
    ---

    # Vue学习笔记
    ## 1、Vue监听滚动事件
    ### 在method里面写处理方法：

    chkscroll(){
    this.isIndex = this.$route.path ==="/";
    this.scroll = document.body.scrollTop ||document.documentElement.scrollTop;
    if(this.isIndex&&(this.scroll>100)){
    this.isShow = true;
    }
    else{
    this.isShow =false;
    }
    },
    需要注意的是，各浏览器下获取 scrollTop 有所差异

    Chrome： document.body.scrollTop

    Firefox： document.documentElement.scrollTop

    ###  在mounted钩子里面写添加监听：
    window.addEventListener('scroll', this.chkscroll)
    ##  2、Vue父子组件之间通信
    ###  2.1父到子
    html:

    <CommonChart ref ="commonchart" :chart-type="chartType"></CommonChart>
    js:

    /*父组件通过$refs调用子组件的方法和属性*/
    this.$refs.commonchart.drawChart();


    ###  2.2 子到父

    js:

    /*子组件通过props属性接受父组件向下传递的数据*/
    props:["chartType"],














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
