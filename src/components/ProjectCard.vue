<template>
  <Card >
    <p slot="title" style="text-align: center">{{projName}}</p>
    <ul>
      <li><i class="fa fa-code fa-2x"></i><span>技术栈：{{stack}}</span></li>
      <li><i class="fa fa-hand-o-right fa-2x"></i><span>描述：{{description}}</span></li>
      <li><i class="fa fa-github fa-2x"></i><span>github地址：<a :href="github.toString()">{{github}}</a></span></li>
    </ul>
  </Card>
</template>

<script>
    export default {
      props : ['projName','stack','description','github'],
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

</style>
