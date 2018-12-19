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


   <Row type="flex" justify="center" align="middle">
     <i-col :xs={span:24} :sm={span:24} :md={span:12} :lg={span:14} v-for="com in commentSFromDB" :key="com.id">
       <!--<div style="height: 20rem;background: #ccc">留言板空空如也~~</div>-->
       <CommentItem :nick-name="com.nickName"
                    :content="com.content"
                    :avatar ="com.avatar"
                    :post-time ="com.postTime"/>
     </i-col>
   </Row>
    <Row type="flex" justify="center" align="middle" class="item-row">
      <i-col :xs={span:24} :sm={span:24} :md={span:12} :lg={span:14}>
        <Page :total="count" @on-change="handlePageChange" show-elevator/>
      </i-col>
    </Row>
    <!--<div class="comment-input-container ">
      <div class="flexContainer input-section">
        <Input class="comment-inputarea" v-model="comments" type="textarea" :rows="4" placeholder="Enter something..." />
      </div>
      <div class="flexContainer input-section">
        <Avatar icon="ios-person" size="large" :src="avatarSrc"/>
        <Input v-model="nickName" placeholder="昵称" class="comment-input-items"  @on-blur="handleOnBlur" />
        <Input v-model="email" placeholder="邮箱"  class="comment-input-items"/>
      </div>
      <div class="flexContainer input-section">
        <Radio v-model="isHuman">滴，老司机卡</Radio>
      </div>
      <div class="flexContainer input-section">
       <Button type="primary" @click="submitComments">留言</Button>
      </div>


    </div>-->
    <Row type="flex" justify="center" align="middle" class="item-row">
      <i-col :xs={span:24} :sm={span:24} :md={span:12} :lg={span:14}>

          <Input  v-model="comments" type="textarea" :rows="4" placeholder="Enter something..." />

      </i-col>
    </Row>
    <Row type="flex" justify="center" align="middle" class="item-row" >
      <i-col :xs={span:24} :sm={span:24} :md={span:12} :lg={span:14}>
        <Row>
          <i-col span="2">
            <Avatar icon="ios-person" size="large" :src="avatarSrc"/>
          </i-col>
          <i-col span="10" offset="1">
            <Input v-model="nickName" placeholder="昵称或QQ号码" class="comment-input-items"  @on-blur="handleOnBlur" />
          </i-col>
          <i-col span="10" offset="1">
            <Input v-model="email" placeholder="邮箱"  class="comment-input-items"/>
          </i-col>
        </Row>



      </i-col>
    </Row>
    <Row type="flex" justify="center" align="middle">
      <i-col :xs={span:24} :sm={span:24} :md={span:12} :lg={span:14} class="textA-center">
        <Radio v-model="isHuman">滴，老司机卡</Radio>
      </i-col>
    </Row>
    <Row type="flex" justify="center" align="middle" class="item-row">
      <i-col :xs={span:24} :sm={span:24} :md={span:12} :lg={span:14} class="textA-center">
        <Button type="primary" @click="submitComments">留言</Button>
      </i-col>
    </Row>
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
              qqNum:"",
              email:'',
              total:0,
              commentSFromDB:[],
              avatarSrc:''
            }
        },
        methods: {
          isQQ:function (aQQ) {
            var bValidate = RegExp(/^[1-9][0-9]{4,9}$/).test(aQQ);
            if (bValidate) {
              return true;
            }
            else
              return false;
          },
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
                  avatar:this.avatarSrc};
                // params = JSON.stringify(params);
                axios.post("/Comment/insertNewComment",params,


                )
                  .then((res)=>{
                    // console.log(res.data);
                  })
                  .catch((err)=>{
                    console.log(err);
                  })
              }
            }
            window.location.reload();

          },
          handlePageChange:function(page){
            // console.log(page);
            let index = (page-1)*10,
              rowLimit =10,
              self=this,
              params ={
                index:index,
                rowLimit:rowLimit
              };
            axios.post("/Comment/QueryCommentsPerPage",params)
              .then(
                (res)=>{
                  console.log(res.data);
                  for(let i=0,len =res.data.length;i<len;i++){
                    console.log(len);
                    self.commentSFromDB.shift();
                    // console.log(res.data[i]);
                    self.commentSFromDB .push(res.data[i]) ;
                    console.log(self.commentSFromDB[i]);


                  }
                  console.log(self.commentSFromDB);
                }
              )
              .catch(
                (err)=>{
                  console.log(err);
                }
              )
          },
          handleOnBlur(){
            let qqNum = this.nickName;
            let self=this,
              params ={
                uid:this.nickName,
              };
            if(this.nickName.length===0){
              this.$Message.warning('请填写昵称或QQ');
              return false
            }
            if(!this.isQQ(this.nickName)){
              // this.$Message.warning('QQ不正确');
              return false
            }else {
              axios.post("/Comment/getAvatar",params)
                .then(
                  (res)=>{
                    console.log(res.data.extendInfo.headPhoto);
                    let nickName = res.data.extendInfo.nickName;
                    let headPhoto =res.data.extendInfo.headPhoto;
                    nickName= nickName.split(",");
                    nickName = nickName[nickName.length-2];
                    nickName =nickName.replace(/"/g, "");
                    console.log(nickName);
                    // console.log(nickName.split(",")[nickName.length-1]);
                    let index = headPhoto.indexOf("https");
                    let len =headPhoto.length;
                    if(index === -1){
                      return false
                    }
                    headPhoto =headPhoto.substring(index,len-3);
                    console.log(headPhoto);

                    self.avatarSrc = headPhoto;
                    self.nickName =nickName;
                    console.log(self.avatarSrc);
                    if(self.nickName){self.email = qqNum+"@qq.com"}

                    // alert(res);
                  }
                )
            }


          }
        },
        created: function () {

        },
     /* directives:{
          'myBlur'(el,binding,vnode){
            let input = el.querySelector('input')
          }
      },*/
        mounted() {
          let self = this;
          axios.get("/Comment/QueryCommentsCount")
            .then((res)=>{
              // console.log(res.data.extendInfo.commentsSum);
              self.count = res.data.extendInfo.commentsSum;
            })
            .catch((err)=>{
              console.log(err);
            });

          axios.get("/Comment/QueryCommentsInitial")
            .then((res)=>{
              // console.log(res.data);

              for(let i=0,len =res.data.length;i<len;i++){
                self.commentSFromDB .push(res.data[i]) ;
              }
              // console.log(self.commentSFromDB);
            })
            .catch((err)=>{

            })

        },
        components: {CommentItem}
    }
</script>
<style>
  .comment-container{
    margin: .9rem 0;
    padding:0 .6rem ;
  }
  .comment-header{margin: .6rem 0;}
  .cut-off-line{border-right: 1px solid #000}
  .comments-sum{margin-left: .6rem;}
  .item-row{margin-top:.6rem;}
</style>
