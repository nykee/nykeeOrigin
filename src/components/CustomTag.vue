<template>
  <span class="custom-tag-box">{{tag}}</span>
</template>

<script>
    export default {
      props:["tag"],
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        mounted() {
          console.log(this.tagName);
        },
        components: {}
    }
</script>
<style>
  .custom-tag-box{
    display: inline-block;
    height: 2rem;
    width: 4rem;
    line-height: 2rem;
    background: transparent;
    border-radius: 10px;
    color: #979c9c;
    border: 1px solid #7c8186;
    text-align: center;
    margin-right: .6rem;
  }

  .custom-tag-box:hover{
    cursor: pointer;
    opacity: .4;
    background: #8391a5;
    color: #fff;
  }
</style>
