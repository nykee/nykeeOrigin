<template>
  <div  >
    <BasicComment :post-time="postTime"
                  :content="content"
                  :nick-name="nickName"
                  :avatar="avatar"
                  :browser="browser"
                  :os="os"
                  :isp="isp"
                  :cmtId="cmtId"/>
      <Reply :parentId="cmtId"/>

  </div>
</template>

<script>

    import Reply from "../components/Reply"
    import BasicComment from "../components/BasicCommentComponent"
    import EventBus from "../utils/EventBus";
    export default {
      props:["nickName","postTime","avatar","content","browser","os","isp","cmtId"],
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
