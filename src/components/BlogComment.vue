<template>
  <div>
    <CommentsInCommon :bid="bid" :btitle="btitle" spanLG="24" spanMD="24" spanSM="24" spanXS="24"></CommentsInCommon>
  </div>


</template>

<script>
  import CommentsInCommon from "./CommentsInCommon";
  export default {
    props:["bid","btitle"],
    data() {
      return {

      }
    },
    methods: {

    },
    created: function () {
    },
    mounted() {

      console.log(this.bid);
      console.log(this.btitle);
    },
    computed:{

    },
    components: {CommentsInCommon}
  }
</script>
<style scoped>

</style>
