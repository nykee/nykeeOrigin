<template>
  <div>
    <Row >
      <i-col  :span="19" class="leftCol">
        <h1 class="intro">个人简介</h1>
        <p>前端初学者一枚，大学学的是网络工程。由于各种各样的原因毕业后没有从事IT相关的工作，干了4年不到一点的电气工程师o(╯□╰)o。
          后来公司走下坡路&&学不到东西了，在一次偶然的机会中接触到前端，便引发了兴趣。故而转向前端。不学不知道，一学吓一跳，前端的东西
          好玩是好玩（所见即所得）,可是要掌握的东西也是不少。然鹅这也证明了大前端的蓬勃发展啊。编程好玩的东西不少：web，大数据，爬虫，机器学习。
          要想样样精通对于晚起步的我来说是不可能的，全都去大致了解一下，然后再挑一两样去深入研究才是王道。
          2016开始往后的职业发展就是主前端，辅后端。希望能在programming的路上走得远一点吧。</p>

        <h3 class="slogan">希望养恶鬼，热情喂狂风</h3>
      </i-col>
      <i-col :span="5">
        <FeaturedTags ></FeaturedTags>
        <AboutMe></AboutMe>
        <Friends></Friends>
      </i-col>
    </Row>

  </div>
</template>

<script>
  import AboutMe from '../components/AboutMe.vue'
  import FeaturedTags from '../components/FeaturedTags.vue'
  import Friends from '../components/Friends.vue'
    export default {
        data() {
            return {

            }
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {
          AboutMe,FeaturedTags,Friends
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

</style>
