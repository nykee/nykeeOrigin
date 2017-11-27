<template>
  <!--<transition name="fade">-->
    <Card>
      <p slot="title" style="text-align: center;font-size: 1.0rem" >{{projName}}</p>
      <ul>
        <li><i class="fa fa-code fa-2x vAlineMiddle"></i><span>技术栈：{{stack}}</span></li>
        <li>
          <i class="fa fa-hand-o-right fa-2x vAlineMiddle"></i>
          <span>项目描述：</span>
            <ul style="margin-left: 1.5rem">
              <li v-for="des in description"><i class="fa fa-dot-circle-o vAlineMiddle" style="color:#2d8cf0"></i>{{des}}</li>
            </ul>
          </li>
        <li v-if="hasGithub"><i class="fa fa-github fa-2x vAlineMiddle" ></i><span>Github地址：<a :href="github.toString()">{{github}}</a></span></li>
      </ul>
    </Card>
  <!--</transition>-->
</template>

<script>
    export default {
      props : ['projName','stack','description','github'],
        data() {
            return {
              hasGithub:true,
              isMouseEnter:false
            }
        },
        methods: {
          handleMouseOver(){
            this.isMouseEnter =true;
          }
        },
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
<style scoped="scoped">
.vAlineMiddle{
  vertical-align: middle;
  margin-right:0.3rem;
}
  li{
    margin-top:0.5rem;
  }
</style>
