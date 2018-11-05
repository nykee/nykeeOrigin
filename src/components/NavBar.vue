<template>

    <Row>
        <Menu v-if="!isMobile" ref="myMenu" mode="horizontal" theme="light" active-name="2" class="menu" >
         <i-col :lg="{span:6}"
                :md="{span:4}"
                :sm="{span:4}"
                :xs="{span:4}">
             <router-link to="/">
                 <span @click="changeActive" style="padding-left: .2rem">Nykee`s Blog</span>
             </router-link>
         </i-col>
          <i-col :lg="{span:6,offset:12}"
                 :md="{span:8,offset:12}"
                 :sm="{span:10,offset:10}"
                 :xs="{span:4,offset:12}">
            <MenuItem name="2">
                <router-link to="/">HOME</router-link>
            </MenuItem>
            <MenuItem name="3">
                <router-link to="/Blogs/FrontEndTricks">BLOGS</router-link>
            </MenuItem>
            <MenuItem name="4">
                <router-link to="/Project">PROJECTS</router-link>
            </MenuItem>
          </i-col>
        </Menu>

        <Dropdown trigger="click" style="margin-left: 2rem" v-if="isMobile" class="dropDownMenu">
            <a href="javascript:void(0)">
                <i class="fa fa-reorder fa-2x"></i>
            </a>
            <DropdownMenu slot="list">
                <DropdownItem>
                    <router-link to="/" style="color:#000!important;">HOME</router-link>
                </DropdownItem>
                <DropdownItem>
                    <router-link to="/Blogs/FrontEndTricks" style="color:#000!important;">BLOGS</router-link>
                </DropdownItem>
                <DropdownItem>
                    <router-link to="/Project" style="color:#000!important;">PROJECTS</router-link>
                </DropdownItem>

            </DropdownMenu>
        </Dropdown>

    </Row>

</template>

<script>
  import bus from '../utils/EventBus'
    export default {
        data() {
            return {
                isMobile:false

            }
        },
        methods: {

          changeActive(){
            this.$nextTick(()=>{
              this.$refs.myMenu.currentActiveName='2';
            });


          },

        },
        created: function () {
        },
        mounted() {
          let self = this;
          bus.$on("tagRedirect",(args)=>{
              // console.log(args);
//              console.log(self.$refs);
            self.$nextTick(()=>{
              self.$refs.myMenu.currentActiveName='3';
            });
          });
            if(window.screen.width<769){this.isMobile = true}
            else {this.isMobile =false}
//            this.isPhoneWatcher();

        },
        beforeDestory(){
            bus.$off('tagRedirect')
        },

        components: {}
    }
</script>
<style scoped="scoped">
  .menu{
    font-weight: 800;
    text-transform:uppercase;
    letter-spacing:1px;
    background:0 0;
    position:absolute;
    top:0;
    left: 0;
    z-index: 3;
    width: 100%;
  }
  .dropDownMenu{
      position: absolute;
      top:10px;
      left:5px;
      z-index: 3;
  }
  .ivu-menu-horizontal.ivu-menu-light:after{
    background: none !important;
  }
  a{
    color: #fff !important;
  }
  a:hover{
    color: #2D8CF0 !important;
  }

</style>
