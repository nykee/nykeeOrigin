<template>
  <div :class="{'fri-comp':!isHover,'fri-comp-hover':isHover}" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
    <a :href="siteAdd" target="_blank">
      <Row>

        <i-col span="16">

          <ul>
            <li>{{name}}
              <Divider dashed></Divider>
            </li>

            <li class="fri-bio">
              <Tooltip :content="bio"  theme="light"><span >{{bio}}</span></Tooltip>
            </li>
          </ul></i-col>
        <i-col span="8">
          <img :src="avatar" alt="" :class="{'fri-avatar-hover':isHover,'fri-avatar':!isHover}">
        </i-col>
      </Row>
    </a>

  </div>
</template>

<script>

    export default {
      props:["avatar","name","bio","siteAdd"],

        data() {
            return {
              isHover:false
            }
        },
        methods: {
          handleMouseOver(){
            this.isHover =true;
          },
          handleMouseOut(){
            this.isHover =false;
          }
        },
        created: function () {

        },
        mounted() {

        },
        components: {}
    }
</script>
<style scoped>
  .fri-comp{
    border: 1px solid #E8EAEC;
    padding: .8rem;
    border-radius: 20px;
    height: 8rem;

  }
  .fri-comp-hover{
    border: 1px solid #E8EAEC;
    /*box-shadow: #7c8186;*/
    padding: .8rem;
    border-radius: 20px;
    height: 8rem;
   /* background: #E8EAEC;
    opacity: .3;
    color: #fff !important;*/
  }
  .fri-avatar{
    width: 4rem;
    height: 4rem;
    border: 2px solid rgba(124,129,134,.6);
    border-radius: 50%;
  }
  .fri-bio{
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
  }
  .fri-avatar-hover{
    width: 4rem;
    height: 4rem;
    border: 2px solid #7c8186;
    border-radius: 50%;
    transform: rotateZ(360deg);
    transition: transform 1.5s ease;
  }
</style>
