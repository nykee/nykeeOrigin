<template>
  <Row type="flex" align="center" justify="center">
      <i-col :lg="{span:18}" :md="{span:18}" class="blog-content">
          <section>
              <ul class="title-list">
                  <li>
                      <h1 class="title">React学习笔记</h1>
                  </li>
              </ul>
          </section>
        <section>
          <PostTag :postTime="postTime" />
        </section>
          <section class="main-body">
              <div id="part1" class="part">
                  <div class="title-lv1">React概述</div>
                  <div class="descrp">
                      <p>React 的核心思想是：封装组件。</p>
                      <p>各个组件维护自己的状态和 UI，当状态变更，自动重新渲染整个组件。</p>
                      <p>避免频繁操作dom</p>
                      React 大体包含下面这些概念：
                      <ul>
                          <li>组件</li>
                          <li>JSX</li>
                          <li>Virtual DOM</li>
                          <li>Data Flow</li>
                      </ul>
                      <br>
                      这里通过一个简单的组件来快速了解这些概念，以及建立起对 React 的一个总体认识。
                      <pre>
          <code class="code-text">
import React, { Component } from 'react';
import { render } from 'react-dom';

class HelloMessage extends Component {
  render() {
    return &lt;div>Hello {this.props.name}&lt;/div>;
  }
}

// 加载组件到 DOM 元素 mountNode
render(&lt;HelloMessage name="John" />, mountNode);
          </code>
        </pre>
                  </div>
                  <div class="title-lv2">组件</div>
                  <div class="descrp">
                      React 应用都是构建在组件之上。
                      上面的 HelloMessage 就是一个 React 构建的组件，最后一句 render 会把这个组件显示到页面上的某个元素 mountNode 里面，显示的内容就是 &lt;div>Hello John &lt;/div>。
                      props 是组件包含的两个核心概念之一，另一个是 state（这个组件没用到）。
                      可以把 props 看作是组件的配置属性，在组件内部是不变的，只是在调用这个组件的时候传入不同的属性（比如这里的 name）来定制显示这个组件。
                  </div>
                  <div class="title-lv2">Virtual DOM</div>
                  <div class="descrp">
                      当组件状态 state 有更改的时候，React 会自动调用组件的 render 方法重新渲染整个组件的 UI。
                      当然如果真的这样大面积的操作 DOM，性能会是一个很大的问题，所以 React 实现了一个Virtual DOM，
                      组件 DOM 结构就是映射到这个 Virtual DOM 上，React 在这个 Virtual DOM 上实现了一个 diff 算法，当要重新渲染组件的时候，
                      会通过 diff 寻找到要变更的 DOM 节点，再把这个修改更新到浏览器实际的 DOM 节点上，
                      所以实际上不是真的渲染整个 DOM 树。这个 Virtual DOM 是一个纯粹的 JS 数据结构，所以性能会比原生 DOM 快很多。
                  </div>
                  <div class="title-lv2">组件</div>
                  <div class="descrp">
                      “单向数据绑定”是 React 推崇的一种应用架构的方式。当应用足够复杂时才能体会到它的好处，虽然在一般应用场景下你可能不会意识到它的存在，也不会影响你开始使用 React，你只要先知道有这么个概念。
                  </div>



              </div>
          </section>
          <div class="main-body">
              <div id="part3" class="part">
                  <div class="title-lv1">React-router</div>
                  <p class="descrp">React-router必须设置history={browserHistory}，否则路由无法显示</p>

                  <!-- <CustomPicture srcSet="https://image.nykee.cn/history.webp"
                                  img-src="https://image.nykee.cn/history.jpg"/>-->

                  <picture>
                      <source type="image/webp" srcset="https://image.nykee.cn/history.webp" >
                      <img src="https://image.nykee.cn/history.jpg" />
                  </picture>

                  <div class="title-lv1">React图片引入</div>
                  <p class="descrp">React图片地址由父组件通过props的方式传递给子组件时，必须使用字符串拼接的方式，否则图片无法加载</p>
                  <pre class="code-text">
          <code>
            父组件：<span><</span>SwiperItem imgSrc="food" itemName="美食"><span><</span>/SwiperItem>
            子组件：<span><</span>div ><span><</span>img   src={require("../../images/swiper/"+this.props.imgSrc+".jpg")} alt=""/><span><</span>/div>
          </code>
        </pre>
              </div>
          </div>

        <PagerComponent
          prvUrl="NettyLearning"
          prvBgSrc="https://image.nykee.cn/jap.jpg"
          prvBlogTitle="Netty心跳机制"
          next-url="GitLearning"
          next-bg-src="https://image.nykee.cn/git.jpg"
          next-blog-title="Git学习笔记"
        >
        </PagerComponent>
        <Comment :bid="b_id"></Comment>
      </i-col>

  </Row>

</template>

<script>
  import PostTag from '../../components/PostTag.vue'
  import PagerComponent from '../../components/PagerComponent'
  import Comment from '../../components/BlogComment'
  import mixin_PV from "../../mixins/index";

  export default {
    mixins:[mixin_PV],
    data() {
      return {
        postTime: '2017-11-08',
        b_id:"4"
      }
    },
    methods: {},
    created: function () {

    },
    mounted() {
      /*this.$store.dispatch("getPV",{params:{id:"10"}});
      let pv_old = this.$store.state.blog.pv;
      console.log("pv_old:"+pv_old);*/
      let getPV_promise =mixin_PV.methods.getPV(this.b_id);
      let pvs;
      getPV_promise.then((v)=>{
        pvs=v;
        pvs+=1;
        let updatePV_promise= mixin_PV.methods.updatePV(this.b_id,pvs.toString());
        updatePV_promise.then((v)=>{
          console.log(v);
        })
      });
    },
    components: {PostTag,PagerComponent
      ,Comment}
  }
</script>
<style>

</style>
