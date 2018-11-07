<template>
  <div >
    <Row>
      <i-col>
        <IntroHeader></IntroHeader>
      </i-col>
    </Row>
    <Row  class="blog-container">
      <i-col :lg="{span:5}"
             :md="{span:7}"
             :sm="{span:24}"
             :xs="{span:24}">
        <Menu  theme="light" v-show="!isMobile" ref="bMenu" :activeName="activeName"  >
            <MenuItem name="1">
                <span @click="directTo('FrontEndTricks')">前端技巧汇总，包括CSS,JS</span>
            </MenuItem>
            <MenuItem name="2">
                <span @click="directTo('MongoDBLearning')">MongoDB学习笔记</span>
            </MenuItem>
            <MenuItem name="3">
                <span @click="directTo('BaiduMapLearning')">百度地图学习笔记</span>
            </MenuItem>
            <MenuItem name="4">
                <span @click="directTo('EchartsLearning')">Echarts2.7.2爬坑记录</span>
            </MenuItem>
            <MenuItem name="5">
                <span @click="directTo('VueLearning')">Vue学习笔记</span>
            </MenuItem>
            <MenuItem name="6">
                <span @click="directTo('DZDPCrawlSpider')">大众点评Node.js爬虫</span>
            </MenuItem>
          <MenuItem name="7">
            <span @click="directTo('GitLearning')">Git笔记</span>
          </MenuItem>
            <MenuItem name="8">
                <span @click="directTo('ReactTricks')">React\react-router采坑记录</span>
            </MenuItem>
            <MenuItem name="9">
                <span @click="directTo('D3Learning')">D3笔记</span>
            </MenuItem>
            <MenuItem name="10">
                <span @click="directTo('NettyLearning')">Netty心跳笔记</span>
            </MenuItem>
            <MenuItem name="11">
                <span @click="directTo('ReactLearning')">React学习笔记</span>
            </MenuItem>
          <MenuItem name="12">
            <span @click="directTo('VueI18n')">VueI18n国际化</span>
          </MenuItem>
        </Menu>

          <Dropdown trigger="click"  v-show="isMobile" class="dropDownMenu">
              <a href="javascript:void(0)">
                  BLOG目录
                  <i class="fa fa-reorder fa-2x"></i>
              </a>
              <DropdownMenu slot="list">
                  <DropdownItem>
                      <span @click="directTo('FrontEndTricks')">前端技巧汇总，包括CSS,JS</span>
                  </DropdownItem>
                  <DropdownItem>
                      <span @click="directTo('GitLearning')">Git笔记</span>
                  </DropdownItem>
                  <DropdownItem>
                      <span @click="directTo('MongoDBLearning')">MongoDB学习笔记</span>
                  </DropdownItem>
                  <DropdownItem>
                      <span @click="directTo('BaiduMapLearning')">百度地图学习笔记</span>
                  </DropdownItem>
                  <DropdownItem>
                      <span @click="directTo('EchartsLearning')">Echarts2.7.2爬坑记录</span>
                  </DropdownItem>
                  <DropdownItem>
                      <span @click="directTo('VueLearning')">Vue学习笔记</span>
                  </DropdownItem>
                  <DropdownItem>
                      <span @click="directTo('DZDPCrawlSpider')">大众点评Node.js爬虫</span>
                  </DropdownItem>
                  <DropdownItem>
                      <span @click="directTo('ReactTricks')">React\react-router采坑记录</span>
                  </DropdownItem>
                  <DropdownItem>
                      <span @click="directTo('D3Learning')">D3笔记</span>
                  </DropdownItem>
                  <DropdownItem>
                      <span @click="directTo('NettyLearning')">Netty心跳笔记</span>
                  </DropdownItem>
                  <DropdownItem>
                      <span @click="directTo('ReactLearning')">React学习笔记</span>
                  </DropdownItem>

              </DropdownMenu>
          </Dropdown>
      </i-col>
      <i-col :lg="{span:19}"
             :md="{span:17}"
             :sm="{span:24}"
             :xs="{span:24}">


          <router-view></router-view>


      </i-col>
    </Row>
    <BackTop></BackTop>
  </div>
</template>

<script>
  import bus from '../utils/EventBus'
  import IntroHeader from '../components/IntroHeader.vue'
  import { mapState, mapActions } from 'vuex'
    export default {
        data() {
            return {
                isMobile:false,
              _index :"1"
            }
        },
        methods: {
            directTo(add){
            this.$router.push('/Blogs/'+add);

          },
          hendleEvent(args){

          }

        },
        created: function () {
          /*let self= this;
          bus.$on("tagRedirect",(args)=>{
            self.$nextTick(()=>{
              console.log();
            })


          });*/
        },
      computed(){
       /* mapState({
          activeName: state => state.blogMenuActiveName
        })*/
      },
        mounted() {

          mapState({
            activeName: state => state.blogMenuActiveName
          });
          this.$nextTick(()=>{
            // console.dir(this.$refs.bMenu);
            this.$refs.bMenu.updateActiveName();
          });
          // this._index ="3";

              /*bus.$on("tagRedirect",(args)=>{
                self.$nextTick(()=>{

                  console.log(self.$refs);
                })


              });*/
          /*console.log(this._index);
          this.$nextTick(()=>{

            console.log(this.$refs);

            console.log(this.$refs.bMenu.currentActiveName);
          });*/





            if(window.screen.width<769){this.isMobile = true}
            else {
              this.isMobile =false;
            }


        },

        updated:function () {
        },
        components: {
          IntroHeader
        }
    }
</script>
<style >
  .title{
    margin-bottom:15px;
  }
  .desc>li{
    margin-left:20px;
  }
  .list-items{
    font-size: 16px;
    margin-top:5px;

  }
  .title-list{
    margin-bottom:15px;
  }
  .code-text{
    background-color: #EAEEF3;
    font-family: Menlo,Monaco,Consolas,Courier New,monospace;
    margin-top:15px;
    margin-bottom:15px;
    color:#333;
    word-break:normal;
    display: block;
    font-size:14px;
    padding: 1px;
  }
  .title-lv1{
    margin-top: .8rem;
    font-size: 20px;
    font-weight:bold;
    padding-left: .4rem;

  }
  .title-lv2{
    margin-top: .6rem;
    font-size: 18px;
    font-weight:bold;
    padding-left: .8rem;
  }
  .title-lv3{
    font-size: 16px;
    margin-left: 10px;
    margin-top:.4rem;
    font-weight:bold;
  }
  .part{
    margin-bottom:10px;
  }
  .section{
    margin-top:10px;
  }
  .blog-container{
    margin-top:20px;
    padding-right: .4rem;
    padding-left: .4rem;
  }
  .descrp{
    font-size: 16px;
    line-height: 1.27rem;
    margin-top:1rem;
    padding-left: 1rem;

  }
    .dropDownMenu{
        margin-left:30%;
        margin-bottom:2rem;
    }

  .steps{
    margin-top: .5rem;
  }
  .steps-item{
    margin-top: .5rem;
  }


</style>
