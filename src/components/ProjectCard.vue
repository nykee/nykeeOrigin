<template>
  <Card class="proj-card">
    <p slot="title" class="proj-card-title">{{projName}}</p>
    <ul>
      <li><i class="fa fa-code fa-2x vAlineMiddle"></i><span>{{$t("message.proj_stack")}}：{{stack}}</span></li>
      <li>
        <i class="fa fa-hand-o-right fa-2x vAlineMiddle"></i>
        <span>{{$t("message.proj_discri")}}：</span>
        <ul class="proj-card-desc-box">
          <li v-for="des in description"><i class="fa fa-dot-circle-o  proj-card-desc-dot"></i>{{des}}</li>
        </ul>
      </li>
      <li v-if="hasGithub">
        <i class="fa fa-github fa-2x vAlineMiddle"></i>
        <span>
            {{$t("message.proj_git")}}：<span class="proj-card-desc-git" @click="reDirectTo(github)"
                                             @mouseenter="changeActive" @mouseout="changeActive"
                                             :class="{active:isActive}">{{github}}</span>
          </span>
      </li>
    </ul>
  </Card>
</template>

<script>

  export default {
    props: ['projName', 'stack', 'description', 'github'],
    data() {
      return {
        hasGithub: true,
        isActive: false
      }
    },
    methods: {
      reDirectTo(path) {
        // window.location.href = path;
        path = String(path);
        if (path.indexOf("https://") === -1) {
//              console.log("不是链接");
          return false

        }
        else {
          window.open(path)
        }
      },
      changeActive() {
        this.isActive = !this.isActive
      }
    },
    created: function () {


    },
    computed: {},

    mounted() {
      this.hasGithub = (this.github.length !== 0);

    },
    components: {}
  }
</script>
<style scoped="scoped">
  li {
    margin-top: 0.5rem;
  }

  .active {
    cursor: pointer;
    color: #2b85e4;
  }

  .proj-card {
    margin: 0 1rem;
  }

  .proj-card-title {
    text-align: center;
    font-size: 1rem;
  }

  .proj-card-desc-box {
    margin-left: 1.5rem;
  }

  .proj-card-desc-dot {
    color: #2d8cf0;
    vertical-align: middle;
    margin-right: 0.3rem;
  }

  .proj-card-desc-git {
    text-overflow: ellipsis;
  }


</style>
