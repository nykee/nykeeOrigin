<template>

    <Row>
        <Menu v-if="!isMobile" ref="myMenu" mode="horizontal" theme="light" active-name="2" class="menu" >
         <i-col :lg="{span:6}"
                :md="{span:6}"
                :sm="{span:6}"
                :xs="{span:4}">
             <router-link to="/">
                 <span @click="changeActive">Nykee`s Blog</span>
             </router-link>
         </i-col>
          <i-col :lg="{span:6,offset:12}"
                 :md="{span:6,offset:12}"
                 :sm="{span:6,offset:12}"
                 :xs="{span:4,offset:12}">
            <MenuItem name="2">
                <router-link to="/">HOME</router-link>
            </MenuItem>
            <MenuItem name="3">
                <router-link to="/Blogs">BLOGS</router-link>
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
                    <router-link to="/Blogs" style="color:#000!important;">BLOGS</router-link>
                </DropdownItem>
                <DropdownItem>
                    <router-link to="/Project" style="color:#000!important;">PROJECTS</router-link>
                </DropdownItem>

            </DropdownMenu>
        </Dropdown>
    </Row>

</template>

<script>
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
            isPhoneWatcher(){

                window.onresize =function () {
                    console.log("navbar reseize事件触发")
                    if(window.screen.width<430){this.isMobile = true}
                    else {this.isMobile = false}
                }
            }
        },
        created: function () {
        },
        mounted() {
            if(window.screen.width<430){this.isMobile = true}
            else {this.isMobile =false}
//            this.isPhoneWatcher();

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
