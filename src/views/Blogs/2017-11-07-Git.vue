<template>
  <Row type="flex" align="center" justify="center">

    <i-col :lg="{span:18}" :md="{span:18}" class="blog-content">
      <ul class="title-list">
        <li><h1 class="title">Git学习笔记</h1></li>
      </ul>
      <section>
        <PostTag :postTime="postTime" />
      </section>
      <div class="main-body">
        <div id="part3" class="part">
          <div class="title-lv1">一、Git常用命令</div>
          <pre class="code-text">
            <code>
    git init   # 初始化一个git仓库
    git config --global user.email "you@example.com" # 设置git账户邮箱地址
    git config --global user.name "yourname" # 设置git用户名
    git add <span><</span>file> # 将工作文件修改提交到本地暂存区
    git add .  # 将所有修改过的工作文件提交暂存区
    git add -A # 提交所有变化
    git reset --hard # 恢复最近一次提交过的状态，即放弃上次提交后的所有本次修改
    git commit -m "ur message" //提交并且加注释
    git remote add origin https://github.com/nykee/doubanFilm.git #设置远程仓库地址
    git push -u origin master # 将本地主分支推到远程(如无远程主分支则创建，用于初始化远程仓库)
    git push origin master # 将本地主分支推到远程主分支
    git rm <span><</span>file> # 从版本库中删除文件
    git rm <span><</span>file> --cached # 从版本库中删除文件，但不删除文件
    git config credential.helper 'cache --timeout=3600' # 设置记住密码1小时
    git config --global credential.helper store # 长期存储Git密码
            </code>
          </pre>
        </div>
      </div>

      <PagerComponent
        prvUrl="ReactLearning"
        prvBgSrc="https://image.nykee.cn/react.png"
        prvBlogTitle="React学习笔记"
        next-url="VueLearning"
        next-bg-src="https://image.nykee.cn/vue.jpg"
        next-blog-title="Vue学习笔记"
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
        postTime: '2017-11-07',
        b_id:"5"
      }
    },
    methods: {},
    created: function () {

    },
    mounted() {
      /*this.$store.dispatch("getPV",{params:{id:"9"}});
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
