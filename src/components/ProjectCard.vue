<template>
  <Card >
    <p slot="title" style="text-align: center">{{projName}}</p>
    <ul>
      <li><i class="fa fa-code fa-2x"></i><span>技术栈：{{stack}}</span></li>
      <li>
        <i class="fa fa-hand-o-right fa-2x"></i>
        <span>项目描述：</span>
          <ul style="margin-left: 1.5rem">
            <li v-for="des in description"><i class="fa fa-dot-circle-o"></i>{{des}}</li>
          </ul>
        </li>
      <li v-if="hasGithub"><i class="fa fa-github fa-2x"></i><span>github地址：<a :href="github.toString()">{{github}}</a></span></li>
    </ul>
  </Card>
</template>

<script>
    export default {
      props : ['projName','stack','description','github'],
        data() {
            return {
              hasGithub:true
            }
        },
        methods: {},
        created: function () {


        },

        mounted() {
        console.log(this.github);
          if(this.github.toString() ===''){
            this.hasGithub =false;
          }

        },
        components: {}
    }
</script>
<style>

</style>
