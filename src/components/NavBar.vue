<template>

    <Row>
        <Menu v-if="!isMobile" ref="myMenu" mode="horizontal" theme="light" active-name="2" class="menu" >
         <i-col :lg="{span:4}"
                :md="{span:4}"
                :sm="{span:4}"
                :xs="{span:4}" >
             <router-link to="/">
                 <span @click="changeActive" style="padding-left: .2rem">{{$t("message.nykee")}}</span>
             </router-link>
         </i-col>
          <i-col :lg="{span:7,offset:11}"
                 :md="{span:6,offset:12}"
                 :sm="{span:6,offset:12}"
                 :xs="{span:6,offset:12}">
            <MenuItem name="2">
                <router-link to="/">{{ $t("message.home")}}</router-link>
            </MenuItem>
            <MenuItem name="3">
                <router-link to="/Blogs/FrontEndTricks">{{ $t("message.blog")}}</router-link>
            </MenuItem>
            <MenuItem name="4">
                <router-link to="/Project">{{ $t("message.projects")}}</router-link>
            </MenuItem>

          </i-col>
            <i-col :lg="{span:2}"
                   :md="{span:2}"
                   :sm="{span:2}"
                   :xs="{span:2}">
                <select v-model="lanSel"  style="width: 5rem" >
                    <option v-for="item in languages" :value="item.value" :key="item.value">{{ item.label }}</option>
                </select>
            </i-col>
        </Menu>

        <Dropdown trigger="click" style="margin-left: 2rem" v-if="isMobile" class="dropDownMenu">
            <a href="javascript:void(0)">
                <i class="fa fa-reorder fa-2x"></i>
            </a>
            <DropdownMenu slot="list">
                <DropdownItem>
                    <router-link to="/" style="color:#000!important;">{{ $t("message.home")}}</router-link>
                </DropdownItem>
                <DropdownItem>
                    <router-link to="/Blogs/FrontEndTricks" style="color:#000!important;">{{ $t("message.blog")}}</router-link>
                </DropdownItem>
                <DropdownItem>
                    <router-link to="/Project" style="color:#000!important;">{{ $t("message.projects")}}</router-link>
                </DropdownItem>
              <DropdownItem>
                <select v-model="lanSel"  style="width: 5rem" >
                  <option v-for="item in languages" :value="item.value" :key="item.value">{{ item.label }}</option>
                </select>
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
                isMobile:false,
              lanSel:'Chinese',
              languages:[
                {
                  value: 'Chinese',
                  label: '中文'
                },
                {
                  value: 'English',
                  label: 'English'
                },
                {
                  value: 'Japanese',
                  label: '日本語'
                },
              ]

            }
        },
        methods: {

          changeActive(){
            this.$nextTick(()=>{
              this.$refs.myMenu.currentActiveName='2';
            });


          },
          handleLanSel(val){
            /*利用window.sessionStorage存储locale防止刷新页面后locale重置*/
            switch (val.toString()){
              case "Chinese":
                this.$i18n.locale = "zh";
                window.sessionStorage.setItem("locale","zh");
                break;
              case "English":
                this.$i18n.locale = "en";
                window.sessionStorage.setItem("locale","en");
                break;
              case "Japanese":
                this.$i18n.locale = "ja";
                window.sessionStorage.setItem("locale","ja");
                break;
              default:
                this.$i18n.locale = "zh";
                window.sessionStorage.setItem("locale","ja");
                break;
            }
          },

        },
        created: function () {
          /*利用window.sessionStorage存储locale防止刷新页面后locale重置*/
          let locale =window.sessionStorage.getItem("locale");
          if(!locale){window.sessionStorage.setItem("locale","zh");}
          else {this.$i18n.locale =locale}

        },
        mounted() {
          // console.log(this.$i18n.locale);
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
        beforeDestroy(){
            bus.$off('tagRedirect')
        },
      watch:{
          lanSel:"handleLanSel"


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
