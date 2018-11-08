<template>
  <div>
    <ul class="title-list">
      <li ><h1 class="title">前端技巧汇总，包括CSS,JS</h1></li>
    </ul>
    <div class="main-body">
      <div id="part1" class="part">

        <div class="title-lv1">一、CSS部分</div>
        <div id="part1-section1" class="section">
          <p class="title-lv2"> 1.加载CDN文件时，可以省掉HTTP标识</p>
          <p class="descrp">现在很流行的CDN即从专门的服务器加载一些通用的JS和CSS文件，出于安全考虑有的CDN服务器使用HTTPS方式连接，而有的是传统的HTTP，其实我们在使用时可以忽略掉这个，将它从URL中省去。</p>
          <pre class="code-text">
            <code>
              {{sc}}
            </code>
          </pre>
        </div>


        <div id="part1-section2" class="section">
          <p class="title-lv2"> 2.简单的文字模糊效果</p>
          <p class="descrp">以下两行简单的CSS3代码可达到将文字模糊化处理的目的，出来的效果有点像使用PS的滤镜，so cool!</p>
          <pre class="code-text">
            <code>
              p {
              color: transparent;
              text-shadow: #111 0 0 5px;
              }
            </code>
          </pre>
        </div>
        <div id="part1-section3" class="section">
          <p class="title-lv2">3.创建长宽比固定的元素</p>
          <p class="descrp">通过设置父级窗口的 padding-bottom 可以达到让容器保持一定的长度比的目的，这在响应式页面设计中比较有用，能够保持元素不变形。</p>
          <pre class="code-text">
            <code>
              <span><</span>div style="width: 100%; position: relative; padding-bottom: 20%;">
                <span><</span>div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0;background-color:yellow;">
                  this content will have a constant aspect ratio that varies based on the width.
                <span><</span>/div>
              <span><</span>/div>
            </code>
          </pre>
        </div >
      </div>
      <div id="part2" class="part" >
        <div class="title-lv1">二、Javascript部分:</div>
        <div id="part2-section1" class="section">
          <p class="title-lv2"> 1.生成随机字符串</p>
          <p class="descrp">利用 Math.random 和 toString 生成随机字符串，来自前一阵子看到的一篇博文。这里的技巧是利用了 toString 方法可以接收一个基数作为参数的原理，这个基数从2到36封顶。如果不指定，默认基数是10进制。略屌！</p>
          <pre class="code-text">
            <code>
               function generateRandomAlphaNum(len) {
                  var rdmString = "";
                  for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
                  return rdmString.substr(0, len);
                }
            </code>
          </pre>
          <img src="../../asserts/img/string.jpg">
        </div>
        <div id="part2-section2" class="section">
          <p class="title-lv2"> 2.整数的操作</p>
          <p class="descrp">JavaScript中是没有整型概念的，但利用好位操作符可以轻松处理，同时获得效率上的提升。</p>
          <p class="descrp">|0 和 ~~ 是很好的一个例子，使用这两者可以将浮点转成整型且效率方面要比同类的 parseInt , Math.round  要快。在处理像素及动画位移等效果的时候会很有用。性能比较见此。</p>
          <pre class="code-text">
            <code>
               var foo = (12.4 / 4.13) | 0;//结果为3
                var bar = ~~(12.4 / 4.13);//结果为3
            </code>
          </pre>
          <p class="descrp">顺便说句， !! 将一个值方便快速转化为布尔值 !!window===true  。</p>
        </div>
        <div id="part2-section3" class="section">
          <p class="title-lv2"> 3.关于console的恶作剧</p>
          <p class="descrp">关于重写原生方法，这里有个恶作剧大家可以拿去寻开心。Chrome的 console.log 是支持对文字添加样式的，甚至log图片都可以。于是可以重写掉默认的log方法，把将要log的文字应用到CSS的模糊效果，这样当有人试图调用console.log()的时候，出来的是模糊不清的文字。好冷，我表示没有笑。

            是从这篇G+帖子的评论里看到的。使用之后的效果是再次调用log会输出字迹模糊不清的文字。</p>
          <pre class="code-text">
            <code>
               var _log = console.log;
                console.log = function() {
                    _log.call(console, '%c' + [].slice.call(arguments).join(' '), 'color:transparent;text-shadow:0 0 2px rgba(0,0,0,.5);');
                };
            </code>
          </pre>
        </div>
        <div id="part2-section4" class="section">
          <p class="title-lv2"> 4.不声明第三个变量的值交换</p>
          <p class="descrp">我们都知道交换两个变量值的常规做法，那就是声明一个中间变量来暂存。但鲜有人去挑战不声明中间变量的情况，下面的代码给出了这种实现。蛮有创意 的。</p>
          <pre class="code-text">
            <code>
               var a=1,b=2;a=[b,b=a][0];
            </code>
          </pre>
        </div>
        <div id="part2-section5" class="section">
          <p class="title-lv2"> 5.console.table</p>
          <p class="descrp">Chrome专属，IE绕道的 console 方法。可以将JavaScript关联数组以表格形式输出到浏览器 console ，效果很惊赞，界面很美观。</p>
          <pre class="code-text">
            <code>
               //采购情况
    var data = [{'品名': '杜雷斯', '数量': 4}, {'品名': '冈本', '数量': 3}];
    console.table(data);
            </code>
          </pre>
          <img src="../../asserts/img/console.table.jpg" :style="{width: this.screenWidth+'px'}">
        </div>
        <div id="part2-section6" class="section">
          <p class="title-lv2"> 6.用媒体查询来设置html的font-size：</p>
          <pre class="code-text">
            <code>
               @media screen and (min-width: 320px) {
         html {font-size: 14px;}
     }

     @media screen and (min-width: 360px) {
         html {font-size: 16px;}
     }

     @media screen and (min-width: 400px) {
         html {font-size: 18px;}
     }

     @media screen and (min-width: 440px) {
         html {font-size: 20px;}
     }

     @media screen and (min-width: 480px) {
         html {font-size: 22px;}
     }

     @media screen and (min-width: 640px) {
         html {font-size: 28px;}
     }
            </code>
          </pre>
        </div>
        <div id="part2-section7" class="section">
          <p class="title-lv2"> 7.利用js计算当前设备的DPR，动态设置在html标签上，并动态设置html的font-size，利用css的选择器根据DPR来设置不同DPR下的字体大小（这个方法很不错哦~）</p>
          <pre class="code-text">
            <code>
               !function(win, lib) {
        var timer,
            doc     = win.document,
            docElem = doc.documentElement,

            vpMeta   = doc.querySelector('meta[name="viewport"]'),
            flexMeta = doc.querySelector('meta[name="flexible"]'),

            dpr   = 0,
            scale = 0,

            flexible = lib.flexible || (lib.flexible = {});

        // 设置了 viewport meta
        if (vpMeta) {

            console.warn("将根据已有的meta标签来设置缩放比例");
            var initial = vpMeta.getAttribute("content").match(/initial\-scale=([\d\.]+)/);

            if (initial) {
                scale = parseFloat(initial[1]); // 已设置的 initialScale
                dpr = parseInt(1 / scale);      // 设备像素比 devicePixelRatio
            }

        }
        // 设置了 flexible Meta
        else if (flexMeta) {
            var flexMetaContent = flexMeta.getAttribute("content");
            if (flexMetaContent) {

                var initial = flexMetaContent.match(/initial\-dpr=([\d\.]+)/),
                    maximum = flexMetaContent.match(/maximum\-dpr=([\d\.]+)/);

                if (initial) {
                    dpr = parseFloat(initial[1]);
                    scale = parseFloat((1 / dpr).toFixed(2));
                }

                if (maximum) {
                    dpr = parseFloat(maximum[1]);
                    scale = parseFloat((1 / dpr).toFixed(2));
                }
            }
        }

        // viewport 或 flexible
        // meta 均未设置
        if (!dpr && !scale) {
            // QST
            // 这里的 第一句有什么用 ?
            // 和 Android 有毛关系 ?
            var u = (win.navigator.appVersion.match(/android/gi), win.navigator.appVersion.match(/iphone/gi)),
                _dpr = win.devicePixelRatio;

            // 所以这里似乎是将所有 Android 设备都设置为 1 了
            dpr = u ? ( (_dpr >= 3 && (!dpr || dpr >= 3))
                            ? 3
                            : (_dpr >= 2 && (!dpr || dpr >= 2))
                                ? 2
                                : 1
                      )
                    : 1;

            scale = 1 / dpr;
        }

        docElem.setAttribute("data-dpr", dpr);

        // 插入 viewport meta
        if (!vpMeta) {
            vpMeta = doc.createElement("meta");

            vpMeta.setAttribute("name", "viewport");
            vpMeta.setAttribute("content",
                "initial-scale=" + scale + ", maximum-scale=" + scale + ", minimum-scale=" + scale + ", user-scalable=no");

            if (docElem.firstElementChild) {
                docElem.firstElementChild.appendChild(vpMeta)
            } else {
                var div = doc.createElement("div");
                div.appendChild(vpMeta);
                doc.write(div.innerHTML);
            }
        }

        function setFontSize() {
            var winWidth = docElem.getBoundingClientRect().width;

            if (winWidth / dpr > 540) {
                (winWidth = 540 * dpr);
            }

            // 根节点 fontSize 根据宽度决定
            var baseSize = winWidth / 10;

            docElem.style.fontSize = baseSize + "px";
            flexible.rem = win.rem = baseSize;
        }

        // 调整窗口时重置
        win.addEventListener("resize", function() {
            clearTimeout(timer);
            timer = setTimeout(setFontSize, 300);
        }, false);


        // 这一段是我自己加的
        // orientationchange 时也需要重算下吧
        win.addEventListener("orientationchange", function() {
            clearTimeout(timer);
            timer = setTimeout(setFontSize, 300);
        }, false);


        // pageshow
        // keyword: 倒退 缓存相关
        win.addEventListener("pageshow", function(e) {
            if (e.persisted) {
                clearTimeout(timer);
                timer = setTimeout(setFontSize, 300);
            }
        }, false);

        // 设置基准字体
        if ("complete" === doc.readyState) {
            doc.body.style.fontSize = 12 * dpr + "px";
        } else {
            doc.addEventListener("DOMContentLoaded", function() {
                doc.body.style.fontSize = 12 * dpr + "px";
            }, false);
        }

        setFontSize();

        flexible.dpr = win.dpr = dpr;

        flexible.refreshRem = setFontSize;

        flexible.rem2px = function(d) {
            var c = parseFloat(d) * this.rem;
            if ("string" == typeof d && d.match(/rem$/)) {
                c += "px";
            }
            return c;
        };

        flexible.px2rem = function(d) {
            var c = parseFloat(d) / this.rem;

            if ("string" == typeof d && d.match(/px$/)) {
                c += "rem";
            }
            return c;
        }
    }(window, window.lib || (window.lib = {}));
            </code>
          </pre>
        </div>
        <div id="part2-section8" class="section">
          <p class="title-lv2"> 8.CSS文字居中：</p>
          <pre class="code-text">
            <code>
               给父元素设置height:20px;line-height:20px;
            </code>
          </pre>
        </div>
        <div id="part2-section9" class="section">
          <p class="title-lv2"> 9.数字格式化为货币格式</p>
          <pre class="code-text">
            <code>
               (23333333).toLocaleString('en-US')  //"23,333,333"
            </code>
          </pre>
        </div>
        <div id="part2-section10" class="section">
          <p class="title-lv2"> 10.JS获取屏幕宽度高度</p>
          <pre class="code-text">
            <code>
               网页可见区域宽： document.body.clientWidth
            　　网页可见区域高： document.body.clientHeight
            　　网页可见区域宽： document.body.offsetWidth (包括边线的宽)
            　　网页可见区域高： document.body.offsetHeight (包括边线的高)
            　　网页正文全文宽： document.body.scrollWidth
            　　网页正文全文高： document.body.scrollHeight
            　　网页被卷去的高： document.body.scrollTop
            　　网页被卷去的左： document.body.scrollLeft
            　　网页正文部分上： window.screenTop
            　　网页正文部分左： window.screenLeft
            　　屏幕分辨率的高： window.screen.height
            　　屏幕分辨率的宽： window.screen.width
            　　屏幕可用工作区高度： window.screen.availHeight
            　　屏幕可用工作区宽度： window.screen.availWidth
            </code>
          </pre>
        </div>


      </div>

      <!--<div id="part4" class="part">
        <div class="title-lv1">四、Vue学习总结 </div>


      </div>-->
      <div id="part5" class="part">
        <div class="title-lv1">三、webpack总结</div>
        <ol class="descrp">Webpack的核心原理：
          <li>一切皆模块：
            正如js文件可以是一个“模块（module）”一样，其他的（如css、image或html）文件也可视作模 块。因此，你可以require('myJSfile.js')亦可以require('myCSSfile.css')。这意味着我们可以将事物（业务）分割成更小的易于管理的片段，从而达到重复利用等的目的。
          </li>
          <li>按需加载：
            传统的模块打包工具（module bundlers）最终将所有的模块编译生成一个庞大的bundle.js文件。但是在真实的app里边，“bundle.js”文件可能有10M到15M之大可能会导致应用一直处于加载中状态。
            因此Webpack使用许多特性来分割代码然后生成多个“bundle”文件，而且异步加载部分代码以实现按需加载。
          </li>
        </ol>
      </div>




    </div>
    <PostTag :posttime="postTime"></PostTag>





  </div  >
</template>

<script>
  import PostTag from '../../components/PostTag.vue'
    export default {
        data() {
            return {
              sc:`<script src="//domain.com/path/to/script.js">`,
              postTime:'2017-01-22',
              screenWidth:0
            }
        },
        methods: {},
        created: function () {
          if(window.screen.width<420){
            this.screenWidth = window.screen.width-20;
          }

        },
        mounted() {



        },
        components: {PostTag}
    }
</script>
<style scoped>
@media screen and (max-width: 420px){

}
</style>
