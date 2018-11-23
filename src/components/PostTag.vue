<template>
  <div class="post-tag">Posted by Nykee on {{postTime}}</div>
</template>

<script>
  import '../utils/DateFormat.js'

  export default {
    data() {
      return {}
    },
    props: ['postTime'],
    methods: {},
    created: function () {

    },
    mounted() {

    },
    components: {},
    computed: {}
  }
</script>
<style>
  .post-tag {
    color: #CCCCCC;
    font-size: 18px;
    font-family: Lora, 'Times New Roman', serif;
    font-style: italic;
    margin-top: 1.5rem;
  }
</style>
