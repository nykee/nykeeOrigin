<template>
  <div class="comment-container">
    <!--header-->
    <Row type="flex" justify="center" align="middle" class="comment-header">
      <i-col :xs={span:24} :sm={span:24} :md={span:12} :lg={span:14} >
        <span>Comments</span>
        <span class="cut-off-line"></span>
        <span class="comments-sum">{{count}}</span>
        <span>条评论</span>
      </i-col>
    </Row>

    <!--body-->
    <!--<div class="comment-display-container">
      <div class="flexContainer">留言板空空如也~~</div>
      <div class="flexContainer">
        <Page :total="100" />
      </div>
    </div>-->
   <Row type="flex" justify="center" align="middle">
     <i-col :xs={span:24} :sm={span:24} :md={span:12} :lg={span:14} v-for="com in initCommentSFromDB" :key="com.id">
       <!--<div style="height: 20rem;background: #ccc">留言板空空如也~~</div>-->
       <CommentItem :nick-name="com.nickName"
                    :content="com.content"
                    :avatar ="com.avatar"
                    :post-time ="com.postTime"
       />

     </i-col>
   </Row>
    <Row type="flex" justify="center" align="middle" class="page-row">
      <i-col :xs={span:24} :sm={span:24} :md={span:12} :lg={span:14}>
        <Page :total="count" />
      </i-col>
    </Row>
    <div class="comment-input-container ">
      <div class="flexContainer input-section">
        <Input class="comment-inputarea" v-model="comments" type="textarea" :rows="4" placeholder="Enter something..." />
      </div>
      <div class="flexContainer input-section">
        <Avatar icon="ios-person" size="large" />
        <Input v-model="nickName" placeholder="昵称" class="comment-input-items" />
        <Input v-model="email" placeholder="邮箱"  class="comment-input-items"/>
      </div>
      <div class="flexContainer input-section">
        <Radio v-model="isHuman">滴，老司机卡</Radio>
      </div>
      <div class="flexContainer input-section">
       <Button type="primary" @click="submitComments">留言</Button>
      </div>


    </div>
  </div>
</template>

<script>
  import CommentItem from './CommentItem'
    export default {
        data() {
            return {
              count:0,
              comments:'',
              isHuman:false,
              nickName:'',
              email:'',
              total:0,
              initCommentSFromDB:[],
              commentSFromDB:[
                {
                  id:"001",
                nickName:"Nykee",
                postTime:"发布与三天前",
                avatar:"",
                content:"这个能不能告诉我iOS移动端现在怎么登陆，挂了vpn（确定能上谷歌，推特，油管的）也卡在登陆那里，现在PC端的登陆掉了以后就只能通过忘掉密码的方式登陆了"
              },
                {
                  id:"002",
                  nickName:"Nykee",
                  postTime:"发布与2天前",
                  avatar:"",
                  content:"这个能不能告诉我iOS移动端现在怎么登陆，挂了vpn（确定能上谷歌，推特，油管的）也卡在登陆那里，现在PC端的登陆掉了以后就只能通过忘掉密码的方式登陆了"
                },
              ]
            }
        },
        methods: {
          submitComments:function(){
            console.log(this.comments);
            if(!this.isHuman){
              this.$Message.warning('请刷老司机卡上车');
            }
            else {
              if(this.comments.length ===0){
                this.$Message.warning('不允许空评论噢！');
              }
              else if(this.nickName.length ===0||this.email.length ===0){
                this.$Message.warning('昵称或邮箱必填噢！');
              }
              else {
                let timeStamp = new Date().getTime().toString();
                console.log(timeStamp);
                // console.log(self.content);
                // console.log(this.content);
                let params = {
                  postTime:timeStamp,
                  content:this.comments,
                  nickname:this.nickName,
                  avatar:""};
                // params = JSON.stringify(params);
                axios.post("/Comment/insertNewComment",params,


                )
                  .then((res)=>{
                    console.log(res.data);
                  })
                  .catch((err)=>{
                    console.log(err);
                  })
              }
            }
            window.location.reload();

          }
        },
        created: function () {

        },
        mounted() {
          let self = this;
          axios.get("/Comment/QueryCommentsCount")
            .then((res)=>{
              console.log(res.data.extendInfo.commentsSum);
              self.count = res.data.extendInfo.commentsSum;
            })
            .catch((err)=>{
              console.log(err);
            });

          axios.get("/Comment/QueryCommentsInitial")
            .then((res)=>{
              console.log(res.data);

              for(let i=0,len =res.data.length;i<len;i++){
                self.initCommentSFromDB .push(res.data[i]) ;
              }
              console.log(self.initCommentSFromDB);
            })
            .catch((err)=>{

            })

        },
        components: {CommentItem}
    }
</script>
<style>
  .comment-container{margin: .9rem 0}
  .comment-header{
    margin: .6rem 0;}
  .cut-off-line{border-right: 1px solid #000}
  .comments-sum{
    margin-left: .6rem;}
  .comment-inputarea{
    width: 60%;
  }
  .comment-input-container{
    margin-top: .6rem;
  }
  .comment-input-items{
    width: 28%;
    margin-left: .6rem;
  }
  .input-section{
    margin-top: .8rem;
  }
  .comment-display-container{
    height: 20rem;
  }
  .page-row{
    margin-top:.6rem;
  }
</style>
