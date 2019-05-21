<template>
  <div>
    <!--PC Nav-->
    <Row>
      <Menu v-if="!isMobile" ref="myMenu" mode="horizontal" theme="light" active-name="2"  class="menu">
        <i-col :lg="{span:4}"
               :md="{span:4}"
               :sm="{span:4}"
               :xs="{span:4}">
          <router-link to="/">
            <span @click="changeActive" class="nykee-word">{{$t("message.nykee")}}</span>
          </router-link>
        </i-col>
        <i-col :lg="{span:14,offset:4}"
               :md="{span:14,offset:4}"
               :sm="{span:11,offset:7}"
               :xs="{span:6,offset:12}">
          <MenuItem name="2">
            <router-link to="/">{{ $t("message.home")}}</router-link>
          </MenuItem>
          <MenuItem name="3">
            <router-link to="/Blogs">{{ $t("message.blog")}}</router-link>
          </MenuItem>
          <MenuItem name="4">
            <router-link to="/Project">{{ $t("message.projects")}}</router-link>
          </MenuItem>
          <MenuItem name="5">
            <router-link to="/Photo">{{ $t("message.photograph")}}</router-link>
          </MenuItem>
          <MenuItem name="6">
            <router-link to="/Comments">{{ $t("message.comments")}}</router-link>
          </MenuItem>
          <MenuItem name="7">
            <router-link to="/Friends">{{ $t("message.Friends")}}</router-link>
          </MenuItem>
          <MenuItem name="8">
            <router-link to="/About">{{ $t("message.about")}}</router-link>
          </MenuItem>
        </i-col>
        <i-col :lg="{span:2}"
               :md="{span:2}"
               :sm="{span:2}"
               :xs="{span:2}">
          <select v-model="lanSel" class="lanSel">
            <option v-for="item in languages" :value="item.value" :key="item.value">{{ item.label }}</option>
          </select>
        </i-col>
      </Menu>
    </Row>
    <!--Mobile Nav-->
    <div v-if="isMobile">
      <Dropdown trigger="click" class="dropDownMenu">

        <i class="fa fa-reorder fa-2x pointer"></i>

        <DropdownMenu slot="list">
          <DropdownItem>
            <router-link to="/" class="black-color">{{ $t("message.home")}}</router-link>
          </DropdownItem>
          <DropdownItem>
            <router-link to="/Blogs" class="black-color">{{ $t("message.blog")}}</router-link>
          </DropdownItem>
          <DropdownItem>
            <router-link to="/Project" class="black-color">{{ $t("message.projects")}}</router-link>
          </DropdownItem>
          <DropdownItem>
            <router-link to="/Photograph" class="black-color">{{ $t("message.photograph")}}</router-link>
          </DropdownItem>
          <DropdownItem>
            <router-link to="/Comments" class="black-color">{{ $t("message.comments")}}</router-link>
          </DropdownItem>
          <DropdownItem>
            <router-link to="/Friends" class="black-color">{{ $t("message.Friends")}}</router-link>
          </DropdownItem>
          <DropdownItem>
            <router-link to="/About" class="black-color">{{ $t("message.about")}}</router-link>
          </DropdownItem>
          <DropdownItem>
            <select v-model="lanSel" class="lanSel">
              <option class="lanSel-option" v-for="item in languages" :value="item.value" :key="item.value">
                {{item.label }}
              </option>
            </select>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <span class="logoName" @click="directToIndex">Nykee Blog</span>
    </div>

  </div>
</template>

<script>
  import bus from '../utils/EventBus'

  export default {
    data() {
      return {
        isMobile: false,
        lanSel: 'Chinese',
        languages: [
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
        ],
        // isSticky:false
        // scroll:0

      }
    },
    methods: {
     /* handleScroll(){
          let scrollTop = document.body.scrollTop ||document.documentElement.scrollTop;
          // console.log(scrollTop);
          this.isSticky = scrollTop > 20;
      },*/

      changeActive() {
        this.$nextTick(() => {
          this.$refs.myMenu.currentActiveName = '2';
        });


      },
      directToIndex() {
        this.$router.push("/")
      },
      handleLanSel(val) {
        /*利用window.sessionStorage存储locale防止刷新页面后locale重置*/
        switch (val.toString()) {
          case "Chinese":
            this.$i18n.locale = "zh";
            window.sessionStorage.setItem("locale", "zh");
            break;
          case "English":
            this.$i18n.locale = "en";
            window.sessionStorage.setItem("locale", "en");
            break;
          case "Japanese":
            this.$i18n.locale = "ja";
            window.sessionStorage.setItem("locale", "ja");
            break;
          default:
            this.$i18n.locale = "zh";
            window.sessionStorage.setItem("locale", "zh");
            break;
        }
      },

    },
    created: function () {
      /*利用window.sessionStorage存储locale防止刷新页面后locale重置*/
      let locale = window.sessionStorage.getItem("locale");
      if (!locale) {
        window.sessionStorage.setItem("locale", "zh");
      }
      else {
        this.$i18n.locale = locale
      }

    },
    mounted() {
      // console.log(this.$i18n.locale);
      let self = this;
      switch (sessionStorage.getItem("locale")){
        case "zh":
          self.lanSel ='Chinese';
          break;
        case "ja":
          self.lanSel ='Japanese';
              break;
        case "en":
          self.lanSel ='English';
          break;
        default:
          self.lanSel ='Chinese';
          break;

      }

      // console.log(this.$i18n.locale);
      // console.log(window.sessionStorage.getItem("locale"));
      bus.$on("tagRedirect", (args) => {
        // console.log(args);
//              console.log(self.$refs);
        self.$nextTick(() => {
          self.$refs.myMenu.currentActiveName = '3';
        });
      });
      this.isMobile = window.screen.width < 769;
      // this.scroll =document.body.scrollTop||document.documentElement.scrollTop;
      /*window.addEventListener("scroll",()=>{
        this.handleScroll()
      })*/


    },

    watch: {
      lanSel: "handleLanSel"


    },

    components: {}
  }
</script>
<style scoped="scoped">
  .menu {
    font-weight: 800;
    letter-spacing: 1px;
    background: 0 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
  }

  .dropDownMenu {
    position: absolute;
    top: 10px;
    left: 5px;
    z-index: 3;
    margin-left: 2rem;
  }
  .sticky-menu{
    /*position: sticky;*/
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    background: #7c8186;
    opacity: .7;
    /*margin-top: -40px;*/
  }

  .ivu-menu-horizontal.ivu-menu-light:after {
    background: none !important;
  }

  a {
    color: #fff !important;
  }

  a:hover {
    color: #2D8CF0 !important;
  }

  .logoName {
    position: absolute;
    top: 10px;
    right: 4%;
    color: #fff;
    font-weight: 800;
    font-size: 1.1rem;
  }

  .lanSel {
    width: 5rem;
    outline: 0;
    border-radius: 4px;
  }

  .lanSel:hover, .lanSel-option:hover {
    cursor: pointer
  }

  .black-color {
    color: #000 !important;
  }

  .nykee-word {
    padding-left: .5rem;
  }
  .pointer{cursor: pointer;color: #fff}

</style>
