<template>
  <div >
    <!--header-->
    <div class="flexContainer">
      <div class="comment-header">
        <span>Comments</span>
        <span class="cut-off-line"></span>
        <span class="comments-sum">{{count}}</span>
        <span>条评论</span>
      </div>
    </div>

    <!--body-->
    <div class="comment-display-container">

    </div>
    <div class="comment-input-container">
      <div class="flexContainer">
        <Input class="comment-inputarea" v-model="comments" type="textarea" :rows="4" placeholder="Enter something..." />
      </div>
      <div class="flexContainer prof-input">
        <Avatar icon="ios-person" size="large" />
        <Input v-model="value" placeholder="昵称或QQ号码" class="comment-input-items" />
        <Input v-model="value" placeholder="邮箱"  class="comment-input-items"/>
      </div>
      <div class="flexContainer">
        <Radio v-model="isHuman">滴，老司机卡</Radio>
      </div>
      <div class="flexContainer">
       <Button type="primary">留言</Button>
      </div>


    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
              count:0,
              comments:'',
              isHuman:false
            }
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {}
    }
</script>
<style>
  .comment-header{
    margin-top: .6rem;}
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
  .prof-input{
    margin-top: .8rem;
  }
</style>
