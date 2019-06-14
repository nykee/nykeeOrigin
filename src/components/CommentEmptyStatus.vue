<template>
  <i-col span="24" >
    <div   class="empty-comment">
      <span class="empty-comment-cont">留言板空空如也~~，快来发表第一条评论吧</span></div>
  </i-col>
</template>

<script>
    export default {
        data() {
            return {}
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
  .empty-comment{
    height: 20rem;
    background: #ccc;
    opacity: .8;
    position: relative;
    border-radius: 6px;

  }
  .empty-comment-cont{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-weight: bold;
  }
</style>
