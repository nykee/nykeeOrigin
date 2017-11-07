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
            }
            </code>
          </pre>
          <ul class="descrp">需要注意的是，各浏览器下获取 scrollTop 有所差异
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
          <p class="descrp">html:</p>
          <pre class="code-text">
            <code>
              <span><</span>CommonChart ref ="commonchart" :chart-type="chartType"><span><</span>/CommonChart>
            </code>
          </pre>
          <p class="descrp">js:</p>
          <pre class="code-text">
            <code>
        /*父组件通过$refs调用子组件的方法和属性*/
        this.$refs.commonchart.drawChart();
            </code>
          </pre>
          <p class="title-lv3">2.2子到父</p>
          <p class="descrp">js:</p>
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
      <div id="part4-section1" class="section">
        <p class="title-lv2"> 3.Vue响应式原理： </p>
        <p class="descrp">将一个普通的javascript对象传递给Vue实例的data选项，Vue会遍历此对象的所有属性，并使用Object.defineProperty将这些属性转化为
          getter/setter。每个组件实例都有相应的watcher实例对象，它会在渲染过程中把属性记录为依赖，然后当它的依赖项的setter被调用后，会通知
          watcher进行重算，从而使它关联的组件得到更新。</p>
      </div>
      <div id="part4-section2" class="section">
        <p class="title-lv2"> 4.Vue组件化 </p>
        <p class="descrp">每个页面应用可抽象画为一颗组件树的模型</p>
      </div>
      <div id="part4-section3" class="section">
        <p class="title-lv2"> 5.v-if对比v-show </p>
        <p class="descrp">v-if 是“真正的”条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
          >v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
          >相比之下， v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
          >一般来说， v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件不太可能改变，则使用 v-if 较好。
        </p>
      </div>
    </div>
    <PostTag :posttime="postTime"></PostTag>
  </div>
</template>

<script>
  import PostTag from '../../components/PostTag.vue'
    export default {
        data() {
            return {
              postTime:'2017-09-26'
            }
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {PostTag}
    }
</script>
<style>

</style>
