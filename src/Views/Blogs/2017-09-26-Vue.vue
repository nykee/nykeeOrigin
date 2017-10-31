<template>
  <div>
    <ul class="title-list">
      <li ><h1 class="title">Vue学习笔记</h1></li>
    </ul>
    <div class="main-body">
      <div id="part1" class="part">
        <div id="part1-section1" class="section">
          <p class="title-lv2"> 1、Vue监听滚动事件</p>
          <p class="title-lv3">1.1在method里面写处理方法：</p>
          <pre class="code-text">
            <code>
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
            </code>
          </pre>
          <ul>需要注意的是，各浏览器下获取 scrollTop 有所差异
            <li>Chrome： document.body.scrollTop</li>
            <li>Firefox： document.documentElement.scrollTop</li>
          </ul>
          <p class="title-lv3">1.2 在mounted钩子里面写添加监听：</p>
          <pre class="code-text">
            <code>
              window.addEventListener('scroll', this.chkscroll)
            </code>
          </pre>
        </div>
      </div>
      <div id="part2" class="part">
        <div id="part2-section1" class="section">
          <p class="title-lv2"> 2、Vue父子组件之间通信</p>
          <p class="title-lv3">2.1父到子</p>
          <p>html:</p>
          <pre class="code-text">
            <code>
              <span><</span>CommonChart ref ="commonchart" :chart-type="chartType"><span><</span>/CommonChart>
            </code>
          </pre>
          <p>js:</p>
          <pre class="code-text">
            <code>
        /*父组件通过$refs调用子组件的方法和属性*/
        this.$refs.commonchart.drawChart();
            </code>
          </pre>
          <p class="title-lv3">2.2子到父</p>
          <p>js:</p>
          <pre class="code-text">
            <code>
               /*子组件通过props属性接受父组件向下传递的数据*/
            props:["chartType"],
            </code>
          </pre>


        </div>
      </div>
      <div id="part3" class="part">
        <div id="part3-section1" class="section">
          <p class="title-lv2"> 3、vue获取当前页面的url</p>

          <pre class="code-text">
            <code>
              当前页面
              完整url可以用 window.location.href
              路由路径可以用 this.$route.path
              路由路径参数 this.$route.params
            </code>
          </pre>

        </div>
      </div>
    </div>
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
