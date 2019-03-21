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
          <img :src="avatar" alt=""  :class="{'fri-avatar-hover':isHover,'fri-avatar':!isHover}" :onerror="img404"/>
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
              isHover:false,
              img404:"this.onerror='';this.src='https://image.nykee.cn/b.png'"
            }
        },
        methods: {
          /*img404:function(){
            this.$refs.avatarPic.onerror =function () {
              this.avatar ='https://image.nykee.cn/b.png'
            }
          },*/
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
    margin-top:.6rem;

  }
  .fri-comp-hover{
    border: 1px solid #E8EAEC;
    /*box-shadow: #7c8186;*/
    padding: .8rem;
    border-radius: 20px;
    height: 8rem;
    margin-top:.6rem;
    box-shadow:0 4px 4px 4px rgba(110,110,110,.5)
   /* background: #E8EAEC;
    opacity: .3;
    color: #fff !important;*/
  }
  .fri-avatar{
    width: 4rem;
    height: 4rem;
    border: 1px solid rgba(124,129,134,.4);
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
    border: 1px solid rgba(124,129,134,.4);
    border-radius: 50%;
    transform: rotateZ(360deg);
    transition: transform 1.5s ease;
  }
</style>
