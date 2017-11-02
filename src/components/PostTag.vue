<template>
  <div class="post-tag">Posted by Nykee on {{posttime}}</div>
</template>

<script>
  import  '../utils/DateFormat.js'
    export default {
        data() {
            return {

            }
        },
      props: ['posttime'],
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {},
      computed:{

      }
    }
</script>
<style>
  .post-tag{
    color: #CCCCCC;
    font-size: 18px;
    font-family:Lora,'Times New Roman',serif;
    font-style:italic;
    margin-top:1.5rem;
  }
</style>
