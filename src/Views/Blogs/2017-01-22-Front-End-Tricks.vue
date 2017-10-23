<template>
  <div>
    <ul class="list">
      <li ><h1 class="title">前端技巧汇总，包括CSS,JS,Git</h1></li>
    </ul>
    <div class="main-body">
      <div class="part1">
        <div class="title-lv1">一、CSS部分</div>
        <div>
          <p class="title-lv2"> 1.加载CDN文件时，可以省掉HTTP标识</p>
          现在很流行的CDN即从专门的服务器加载一些通用的JS和CSS文件，出于安全考虑有的CDN服务器使用HTTPS方式连接，而有的是传统的HTTP，其实我们在使用时可以忽略掉这个，将它从URL中省去。
          <pre class="code-text">
            <code>
              {{sc}}
            </code>
          </pre>
        </div>
        <div>
          <p class="title-lv2"> 2.简单的文字模糊效果</p>

          以下两行简单的CSS3代码可达到将文字模糊化处理的目的，出来的效果有点像使用PS的滤镜，so cool!

          <pre class="code-text">
            <code>
              p {
              color: transparent;
              text-shadow: #111 0 0 5px;
              }
            </code>
          </pre>
        </div>
        <div>
          <p class="title-lv2">3.创建长宽比固定的元素</p>
          通过设置父级窗口的 padding-bottom 可以达到让容器保持一定的长度比的目的，这在响应式页面设计中比较有用，能够保持元素不变形。
          <pre class="code-text">
            <code>

            </code>
          </pre>
        </div>
      </div>



    </div>





  </div  >
</template>

<script>
    export default {
        data() {
            return {
              sc:`<script src="//domain.com/path/to/script.js">`
            }
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
