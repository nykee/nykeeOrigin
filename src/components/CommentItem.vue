<template>
  <div  >
    <BasicComment :post-time="postTime"
                  :content="content"
                  :nick-name="nickName"
                  :avatar="avatar"
                  :browser="browser"
                  :os="os"
                  :isp="isp"
                  :email="email"
                  :cmtId="cmtId"/>
      <Reply :parentId="cmtId" :parentBlogId="parentBlogId"/>

  </div>
</template>

<script>

    import Reply from "../components/Reply"
    import BasicComment from "../components/BasicCommentComponent"
    import EventBus from "../utils/EventBus";
    export default {
      props:["nickName","postTime","avatar","content","browser","os","isp","cmtId","parentBlogId","email"],
        data() {
            return {
              hasReply:false
            }
        },
        methods: {


        },
        created: function () {

        },
        mounted() {
          let self= this;
          EventBus.$on("replyCheck",(data)=>{
            self.hasReply=data.hasReply;
          })

        },
      computed:{


      },
        components: {BasicComment,Reply}
    }
</script>
<style>

</style>
