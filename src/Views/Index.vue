<template>
  <div>
    <Row>
      <i-col>
        <IntroHeader></IntroHeader>
      </i-col>
    </Row>
    <Row class="self-info-container">

      <i-col  :lg="20"  :md="20" :sm="24" :xs="24" class="leftCol">
        <h1 class="intro">个人简介</h1>


        <pre id="wrap" class="self-intro">
          前端打杂一枚，大学学的是网络工程。目前在一家创业公司打杂，作为该公司云平台项目的负责人（创业公司你懂的，前端后端全包o(╥﹏╥),
          方案及项目进度都一人全包）。之前在上海金蝶做过java开发工程师。可以说后端也会(wan)一(quan)点(bu)点(hui)。
          但目前玩下来还是喜欢前端开发，毕竟所见即所得。目前的项目下来，累积的经验有：
            1、了解后端（SSM框架）
            2、对前端数据可视化有一定经验（echarts、D3)
            3、可以独立得完成一个项目（后端到前端）
          最喜欢喝着咖啡，听着电音码代码^_^
          Anyway,人的精力是有限的。现在希望能在前端方面巩固专注下去吧！
        <h3 class="slogan">希望养恶鬼，热情喂狂风</h3>
        </pre>


      </i-col>
      <i-col :lg="4"  :md="4" :sm="24" :xs="24">
        <Row>
          <i-col  :lg="24"  :md="24" :sm="24" :xs="24">
            <FeaturedTags ></FeaturedTags>
          </i-col>
          <i-col :lg="24"  :md="24" :sm="24" :xs="24">
            <AboutMe></AboutMe>
          </i-col>
          <i-col :lg="24"  :md="24" :sm="24" :xs="24">
            <Friends></Friends>
          </i-col>
        </Row>
      </i-col>
    </Row>

  </div>
</template>

<script>
  import AboutMe from '../components/AboutMe.vue'
  import FeaturedTags from '../components/FeaturedTags.vue'
  import Friends from '../components/Friends.vue'
  import IntroHeader from '../components/IntroHeader.vue'
    export default {
        data() {
            return {

            }
        },
        methods: {},
        created: function () {


        },
        mounted() {
          function Typewriter(arg){

            //options
            var el = arg.el;
            var cursorFlash = arg.cursorFlash;
            var wordFlash = arg.wordFlash instanceof Array? arg.wordFlash : [0,400];
            var m = wordFlash[0];
            var n = wordFlash[1];

            //创建过就不要再创建了
            if(!el.typewriter){
              el.typewriter = true;
            }else{
              return false;
            }

            //初始化
            var text = el.innerHTML;
            var len = 0;

            var text_box = document.createElement('span');
            text_box.id = 'typewriter-text';

            var cursor_box = document.createElement('span');
            cursor_box.id = 'typewriter-cursor';
            cursor_box.innerHTML = '|';

            el.innerHTML = '';
            el.appendChild(text_box);
            el.appendChild(cursor_box);

            //光标闪闪
            var cursorInt=setInterval(function CursorFlash(){
              if(cursor_box.show){
                cursor_box.style.opacity = 1;
                cursor_box.show = false;
              }else{
                cursor_box.style.opacity = 0;
                cursor_box.show = true;
              }
            },cursorFlash);

//style="background-image: url('../asserts/img/home-bg.jpg')"
            //添加字符
            function addWords(){
              if(len<=text.length){
                text_box.innerHTML = text.slice(0,len);
                len++;
                setTimeout(addWords,Math.random()*(n-m)+m);

              }
              else {
                clearInterval(cursorInt);
                cursor_box.style.opacity =0;
              }
            }
            //API

            this.startWrite = function(){
              if(!text_box.canadd){
                text_box.canadd = true;
                addWords();
              }
            }
          }


          var wrap = document.querySelector('#wrap');


          //创建打字机
          var tw = new Typewriter({
            el: wrap,
            cursorFlash: 400,
            wordFlash: [0,400]
          });

          //开始
          window.onload = tw.startWrite();



        },
        components: {
          AboutMe,FeaturedTags,Friends,IntroHeader
        }
    }
</script>
<style scoped="scoped">
  .intro{
    margin-bottom:18px;
  }
  .leftCol{
    padding-left: 10px;
  }
  .slogan{
    margin-top:30px;
  }
  .self-info-container{
    margin-top:20px;
    width: 100%;
  }
  .self-intro{
    font-size:14px;
    word-wrap: break-word;
    height: 15.375rem;
    width:100%
  }


</style>
