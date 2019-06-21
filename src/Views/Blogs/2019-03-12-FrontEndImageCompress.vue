<template>
  <div>
    <Row type="flex" align="center" justify="center" class="blog-container">
      <i-col :lg="{span:18}" :md="{span:18}" class="blog-content">
        <section  class="tag-section">
          <CustomTag :tag="tag.name" v-for="tag in tags" :key="tag.id"/>
        </section>
        <section>
          <ul class="title-list">
            <li>
              <h1 class="title">前端图片压缩</h1>
            </li>
          </ul>
        </section>
        <section>
          <PostTag :postTime="postTime"/>
        </section>
        <section class="main-body">
          <p>前期图片压缩与转格式都是在tinypng和squoosh的网站在线转换的，操作比较繁琐。着实不是一种好方案啊，当时就在想能不能用代码的方式去解决它。
          后来在知乎上读到一篇翻译的文章就是讲的图片压缩。随后实践了下，真香。需要安装几个npm包：</p>
          <pre v-highlightjs>
            <code class="bash" >
              imagemin-webp //main lib
              imagemin-webp //png/jpg转换为webp格式
              imagemin-mozjpeg //图片jpg压缩为moz-jpeg格式
              imagemin-pngquant //用来压缩PNG格式的图片
            </code>
          </pre>
          <h3>config.js</h3>
          <pre v-highlightjs>
            <code class="lang-javascript">
let   config={
  PNGImages:'../../../static/img/*.png', //PNG文件存放路径
  JPEGImages:'../../../static/img/*.jpg', //JPG文件存放路径
  outputPath:'../../../static/imgMin'  //压缩后的文件输出路径
};
module.exports =config;

            </code>
          </pre>
          <h3>imageMin.js</h3>
         <pre v-highlightjs>
           <code class="lang-javascript">
/*压缩图片*/

const imagemin = require('imagemin');  //引入imagemin
const imageminWebp = require('imagemin-webp'); //引入imagemin-webp，用来压缩webp
const imageminMozjpeg = require('imagemin-mozjpeg'); //引入imagemin-mozjpeg，用来压缩jpg
const imageminPngquant = require('imagemin-pngquant'); //引入imagemin-pngquant，压缩PNG
const conf =require("./config"); //引入config文件

const JPG =conf.JPEGImages;
const PNG =conf.PNGImages;
const out=conf.outputPath;
/*压缩jpg文件*/
const optimiseJPEGImages = () =>
  imagemin([JPG], out, {
    plugins: [
      imageminMozjpeg({
        quality: 70, //压缩质量
      }),
    ]
  });
/*压缩PNG文件*/
const optimisePNGImages = () =>
  imagemin([PNG], out, {
    plugins: [
      imageminPngquant({ quality: '65-80' })  //压缩质量
    ],
  });
/*PNG文件转换为webp*/
const convertPNGToWebp = () =>
  imagemin([PNG], out, {
    use: [
      imageminWebp({
        quality: 85,
      }),
    ]
  });
/*jpg文件转换为webp*/
const convertJPGToWebp = () =>
  imagemin([JPG], out, {
    use: [
      imageminWebp({
        quality: 75,
      }),
    ]
  });
/*promise的方式进行处理压缩*/
optimiseJPEGImages()
  .then(() => optimisePNGImages())
  .then(() => convertPNGToWebp())
  .then(() => convertJPGToWebp())
  .catch(error => console.log(error));
           </code>
         </pre>
<h3>最后node运行一下imageMin.js就可以得到压缩好的图片文件了,so easy :滑稽</h3>
          <ReferArticles :articles="articles"></ReferArticles>
        </section>
        <section>
          <PagerComponent

            next-url="FeInterview"
            next-bg-src="https://image.nykee.cn/cartoon2.jpg"
            next-blog-title="前端面试题总结"
          >
          </PagerComponent>
          <Comment :bid="b_id" :btitle="btitle"></Comment>
        </section>
      </i-col>
    </Row>

  </div>
</template>
<script>
  import mixin_PV from "../../mixins/index";
  import PostTag from '../../components/PostTag.vue'
  import PagerComponent from '../../components/PagerComponent'
  import Comment from '../../components/BlogComment'
  import CustomTag from "../../components/CustomTag"
  import ReferArticles from "../../components/ReferArticlesComp"
    export default {
        data() {
            return {
              postTime: '2019-03-13',
              b_id:"14",
              btitle:"前端图片压缩",
              tags:[
                {id:1,name:"前端"},
                {id:2,name:"代码"},
              ],
              articles:[
                {
                  id:1,href:'https://www.jianshu.com/p/b55e951e9f03',name:'web前端优化之图片优化'
                },
                {
                  id:2,href:'https://www.cnblogs.com/zhuzhenwei918/p/6935426.html?utm_source=itdadao&utm_medium=referral',name:'前端性能优化之优化图片 && 优化显示图片'
                },
                {
                  id:3,href:'https://blog.csdn.net/wcslb/article/details/79559746',name:'前端性能优化之路——图片篇。'
                },
                {
                  id:4,href:'https://www.photo-mark.com/notes/image-preloading/',name:'A better way to preload images for web galleries'
                },
              ]
            }
        },
      mounted(){
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
        components: {
          PostTag,
          PagerComponent,
          Comment,
          CustomTag,
          ReferArticles
        }
    }
</script>
<style>

</style>
