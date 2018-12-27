<template>
  <div class="reply-container">
    <div v-for="rep in repFromDB">
      <BasicComment :post-time="rep.postTime"
                    :content="rep.content"
                    :nick-name="rep.nickName"
                    :avatar="rep.avatar"
                    :browser="rep.browser"
                    :os="rep.os"
                    :isp="rep.isp"
                    :parentId="parentId"/>
    </div>
  </div>

</template>

<script>
  import BasicComment from "./BasicCommentComponent"
  import EventBus from "../utils/EventBus";
    export default {
      props:["parentId"],
        data() {
            return {
              repFromDB:[]




            }
        },
        methods: {},
        created: function () {

        },
        mounted() {
        console.log(this.parentId);
          let params={replyTo:this.parentId};
          // console.log(this.cmtId);
          let self =this;
          // console.log(typeof this.cmtId);
          axios.post("/Comment/queryReply",params)
            .then((res)=>{
              // console.log(res.data);
              if(res.data.length>0){
                EventBus.$emit("replyCheck",{hasReply:true});
              }
              for(let i=0,len =res.data.length;i<len;i++){
                // console.log(res.data[i]);
                self.repFromDB.push(res.data[i])
              }
              // console.log(self.repFromDB);


            })
            .catch((err)=>{
              console.log(err);
            })

        },
        components: {BasicComment}
    }
</script>
<style>
  .reply-container{padding-left: 1.2rem}
</style>
