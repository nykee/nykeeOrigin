<template>
  <div class="comment-item-container" @mouseenter="showReplyBtn" @mouseleave="hideReplyBtn">
    <Row type="flex" justify="center" align="middle" :gutter="10">
      <i-col :lg={span:2}
             :md={span:2}
             :sm={span:2}
             :xs={span:4}>
        <Avatar icon="ios-person" size="large" :src="avatar"/>
      </i-col>
      <i-col :lg={span:18}
             :md={span:18}
             :sm={span:18}
             :xs={span:16}>
        <ul>
          <li class="nickname-li">
            {{nickName}}
            <Tag v-if="isOwner" color="gold">博主</Tag>
          </li>
          <li class="time-li">
            <ul>
              <li class="c-items">
                <span class="post-at">{{$t("message.commentsPage.postAt")}}</span>
                <Time :time="processedTime" type="datetime" ></Time>
              </li>
              <li class="c-items">
                <span class="ua">
                  <img class="info-icon" :src="bsr_icon_src"/>
                  <span v-if="!isMobile">{{browser}}</span>
                </span>
                <span class="os">
                  <img class="info-icon" :src="os_icon_src"/>
                  <span v-if="!isMobile">{{os}}</span>
                </span>
              </li>
              <li class="c-items">
                <span class="c-items-isp">{{$t("message.commentsPage.fromWhat")}}{{isp}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </i-col>
      <i-col :lg={span:3}
             :md={span:3}
             :sm={span:3}
             :xs={span:3}>
        <Button class="reply-btn" type="primary" size="small" @click="replyTo" v-if="isReplyBtnShow">{{$t("message.commentsPage.reply")}}</Button>
      </i-col>
    </Row>
    <Row>
      <div class="comment-detail"  v-html="decodedContent">
      </div>
    </Row>
  </div>
</template>

<script>
  import {isMobile,isPad} from '../utils/ScreenWidth'
  import EventBus from '../utils/EventBus'
    export default {
      props:["nickName","postTime","avatar","content","browser","os","isp","email","cmtId","parentId"],

      data() {
            return {
              bsr_icon_src:'',
              os_icon_src:'',
              isMobile:false,
              isReplyBtnShow:false,
                isOwner:false
            }
        },
        methods: {
          replyTo:function () {
            // console.log(this.cmtId);
            // console.log(this.parentId);
            let replyToId = this.cmtId || this.parentId;
            // console.log(replyToId);
            EventBus.$emit("rePlyComment",{id:replyToId,nickName:this.nickName,email:this.email,content:this.decodedContent,location:location.href})

          },
          showReplyBtn(){

            this.isReplyBtnShow =true;
            // console.log(this.isReplyBtnShow);
          },
          hideReplyBtn(){
            this.isReplyBtnShow =false;
          }
        },
        created: function () {

        },
        mounted() {
          if(this.nickName === "I am Specialized"){this.isOwner =true}
          else if(this.nickName === "nykee"){this.isOwner =true}
          else {this.isOwner =false}
        // console.log(screen.width);
          if(isPad()||isMobile()){
            this.isReplyBtnShow =true;
          }
        // console.log(this.parentId);
        // console.log(this.content);
          this.isMobile =isMobile();
          /*根据传入的browser来动态改变browser图标*/
          if(this.browser.indexOf("Chrome")!==-1){
            this.bsr_icon_src = "https://image.nykee.cn/browser_icons/chrome.svg"
          }
          else if(this.browser.indexOf("Firefox")!==-1){
            this.bsr_icon_src = "https://image.nykee.cn/browser_icons/firefox.svg"
          }
          else if(this.browser.indexOf("Edge")!==-1){
            this.bsr_icon_src = "https://image.nykee.cn/browser_icons/edge.svg"
          }
          else if(this.browser.indexOf("IE")!==-1){
            this.bsr_icon_src = "https://image.nykee.cn/browser_icons/ie.jpg"
          }
          else if(this.browser.indexOf("360安全浏览器-极速模式")!==-1){
            this.bsr_icon_src = "https://image.nykee.cn/browser_icons/chrome.svg"
          }
          else if(this.browser.indexOf("QQ")!==-1){
            this.bsr_icon_src = "https://image.nykee.cn/browser_icons/QQBrowser.svg"
          }
          else if(this.browser.indexOf("Safari")!==-1){
            this.bsr_icon_src = "https://image.nykee.cn/browser_icons/safari.svg"
          }else if(this.browser.indexOf("Opera")!==-1){
            this.bsr_icon_src = "https://image.nykee.cn/browser_icons/opera.png"
          }
          else {
            this.bsr_icon_src = "https://image.nykee.cn/browser_icons/chrome.svg"
          }

          /*根据传入的os来动态改变os的图标*/
          if(this.os.indexOf("Windows7")!==-1){
            this.os_icon_src = "https://image.nykee.cn/browser_icons/windows_win7.svg"
          }
          else if(this.os.indexOf("Windows8")!==-1){
            this.os_icon_src = "https://image.nykee.cn/browser_icons/windows_win8.svg"
          }
          else if(this.os.indexOf("Windows10")!==-1){
            this.os_icon_src = "https://image.nykee.cn/browser_icons/windows_win10.svg"
          }
          else if(this.os.indexOf("android")!==-1){
            this.os_icon_src = "https://image.nykee.cn/browser_icons/android.svg"
          }
          else if(this.os.indexOf("Linux")!==-1){
            this.os_icon_src = "https://image.nykee.cn/browser_icons/linux.svg"
          }
          else if(this.os.indexOf("IOS")!==-1 ||this.os.indexOf("Mac")!==-1 ){
            this.os_icon_src = "https://image.nykee.cn/browser_icons/apple.jpg"
          }
          else {
            this.os_icon_src = "https://image.nykee.cn/browser_icons/windows_win7.svg"
          }

        },
      computed:{
        decodedContent:function () {
          let baseUrl = "https://image.nykee.cn/";
          //存放正则和对应的文件名称的数据结构
          let tempMap = [
            {
              pattern:/:aa/g,
              fileName:"baidu_emoji/icon_aa.gif"
            },
            {
              pattern:/:anger/g,
              fileName:"baidu_emoji/icon_anger.gif"
            }, {
              pattern:/:awesome/g,
              fileName:"baidu_emoji/icon_awesome.gif"
            }, {
              pattern:/:bbd/g,
              fileName:"baidu_emoji/icon_bbd.gif"
            },
            {
              pattern:/:britan/g,
              fileName:"baidu_emoji/icon_britan.gif"
            },
            {
              pattern: /:doubt/g,
              fileName:"baidu_emoji/icon_doubt.gif"
            }, {
              pattern: /:good/g,
              fileName:"baidu_emoji/icon_good.gif"
            }, {
              pattern:/:Grievance/g,
              fileName:"baidu_emoji/icon_Grievance.gif"
            }, {
              pattern:/:haha/g,
              fileName:"baidu_emoji/icon_haha.gif"
            }, {
              pattern: /:han/g,
              fileName:"baidu_emoji/icon_han.gif"
            }, {
              pattern:/:Happy/g,
              fileName:"baidu_emoji/icon_Happy.gif"
            }, {
              pattern:/:hu/g,
              fileName:"baidu_emoji/icon_hu.gif"
            }, {
              pattern:/:funny/g,
              fileName:"baidu_emoji/icon_funny.gif"
            }, {
              pattern:/:ku/g,
              fileName:"baidu_emoji/icon_ku.gif"
            }, {
              pattern:/:naive/g,
              fileName:"baidu_emoji/icon_naive.gif"
            }, {
              pattern:/:niconiconi/g,
              fileName:"baidu_emoji/icon_niconiconi.gif"
            }, {
              pattern:/:Dniconiconi/g,
              fileName:"baidu_emoji/icon_niconiconit.gif"
            }, {
              pattern: /:rbq/g,
              fileName:"baidu_emoji/icon_rbq.gif"
            }, {
              pattern:/:reluctantly/g,
              fileName:"baidu_emoji/icon_reluctantly.gif"
            }, {
              pattern: /:rmb/g,
              fileName:"baidu_emoji/icon_rmb.gif"
            }, {
              pattern:/:se/g,
              fileName:"baidu_emoji/icon_se.gif"
            }, {
              pattern: /:blackness/g,
              fileName:"baidu_emoji/icon_blackness.gif"
            }, {
              pattern:/:spit/g,
              fileName:"baidu_emoji/icon_spit.gif"
            }, {
              pattern: /:spray/g,
              fileName:"baidu_emoji/icon_spray.gif"
            }, {
              pattern: /:surprisedCry/g,
              fileName:"baidu_emoji/icon_surprised.gif"
            }, {
              pattern: /:surprised/g,
              fileName:"baidu_emoji/icon_surprised2.gif"
            }, {
              pattern: /:tear/g,
              fileName:"baidu_emoji/icon_tear.gif"
            }, {
              pattern:/:theblackline/g,
              fileName:"baidu_emoji/icon_theblackline.gif"
            }, {
              pattern: /:tongue/g,
              fileName:"baidu_emoji/icon_tongue.gif"
            },{
              pattern: /:like/g,
              fileName:"baidu_emoji/icon_like.png"
            },
            {
              pattern: /:ali_bath/g,
              fileName:"ali_emoji/bath.jpg"
            }
            ,
            {
              pattern: /:ali_shootheart/g,
              fileName:"ali_emoji/shootheart.jpg"
            }
            ,
            {
              pattern: /:ali_bye/g,
              fileName:"ali_emoji/bye.jpg"
            }
            ,
            {
              pattern: /:ali_clap/g,
              fileName:"ali_emoji/clap.jpg"
            }
            ,
            {
              pattern: /:ali_cry/g,
              fileName:"ali_emoji/cry.jpg"
            }
            ,
            {
              pattern: /:ali_dontgo/g,
              fileName:"ali_emoji/dontgo.jpg"
            }
            ,
            {
              pattern: /:ali_easy/g,
              fileName:"ali_emoji/easy.jpg"
            }
            ,
            {
              pattern: /:ali_fight/g,
              fileName:"ali_emoji/fight.jpg"
            }
            ,
            {
              pattern: /:ali_grievance/g,
              fileName:"ali_emoji/grievance.jpg"
            }
            ,
            {
              pattern: /:ali_kiss/g,
              fileName:"ali_emoji/kiss.jpg"
            }
            ,
            {
              pattern: /:ali_lalala/g,
              fileName:"ali_emoji/lalala.jpg"
            }
            ,
            {
              pattern: /:ali_laugh/g,
              fileName:"ali_emoji/laugh.jpg"
            }
            ,
            {
              pattern: /:ali_like/g,
              fileName:"ali_emoji/like.jpg"
            }
            ,
            {
              pattern: /:ali_loneliness/g,
              fileName:"ali_emoji/loneliness.jpg"
            }
            ,
            {
              pattern: /:ali_no/g,
              fileName:"ali_emoji/no.jpg"
            }
            ,
            {
              pattern: /:ali_roundcry/g,
              fileName:"ali_emoji/roundcry.jpg"
            }
            ,
            {
              pattern: /:ali_sleep/g,
              fileName:"ali_emoji/sleep.jpg"
            }
            ,
            {
              pattern: /:ali_surprised/g,
              fileName:"ali_emoji/surprised.jpg"
            }
            ,
            {
              pattern: /:ali_throw/g,
              fileName:"ali_emoji/throw.jpg"
            }
            ,
            {
              pattern: /:ali_yeah/g,
              fileName:"ali_emoji/yeah.jpg"
            }
            ,
            {
              pattern: /:qq_clap/g,
              fileName:"qq_emoji/e4005.gif"
            }
            ,
            {
              pattern: /:qq_redface/g,
              fileName:"qq_emoji/e4006.gif"
            }
            ,
            {
              pattern: /:qq_shake/g,
              fileName:"qq_emoji/e4007.gif"
            }
            ,
            {
              pattern: /:qq_han/g,
              fileName:"qq_emoji/e4009.gif"
            }
            ,
            {
              pattern: /:qq_thunder/g,
              fileName:"qq_emoji/e4011.gif"
            }
            ,
            {
              pattern: /:qq_hide/g,
              fileName:"qq_emoji/e4012.gif"
            }
            ,
            {
              pattern: /:qq_laugh/g,
              fileName:"qq_emoji/e4018.gif"
            }
            ,
            {
              pattern: /:qq_plane/g,
              fileName:"qq_emoji/e6097.gif"
            }
            ,
            {
              pattern: /:qq_cheers/g,
              fileName:"qq_emoji/e6098.gif"
            }
            ,
            {
              pattern: /:qq_gxfc/g,
              fileName:"qq_emoji/e6100.gif"
            }
            ,
            {
              pattern: /:qq_redbag/g,
              fileName:"qq_emoji/e6101.gif"
            }
            ,
            {
              pattern: /:qq_rose/g,
              fileName:"qq_emoji/e6104.gif"
            }
            ,
            {
              pattern: /:qq_askdate/g,
              fileName:"qq_emoji/e6107.gif"
            }
            ,



          ];
          let temp_content =this.content;
          for(let i =0,len = tempMap.length;i<len;i++){
            //遍历上面数据结构，用str的replace匹配数据结构中的pattern，替换为img,src采用baseurl+数据结构中的filename拼接
            temp_content = temp_content.replace(tempMap[i].pattern,`<img style="width: 1.8rem;height: 1.8rem;vertical-align: middle;padding-left: .1rem" src="${baseUrl}${tempMap[i].fileName}"/>`)
          }
          // 返回拼接好的计算属性
          return   temp_content;
        },
        processedTime:function () {
          return new Date(parseInt(this.postTime)).getTime()
        }
      },
        components: {}
    }
</script>
<style>
  .comment-item-container{margin:1rem 0}
  .comment-detail{
    padding: .6rem .5rem 2rem .5rem;
    border-bottom: 1px dotted #DCDEE2}
  .time-li{
    margin-top: .3rem;color: #979c9c}
  .post-at{
    margin-right: .3rem;}
  .info-icon{
    height: .8rem;width: .8rem;
    margin: 0 .3rem 0 .4rem;
  }
  .c-items-isp{font-size: .8rem}
  .reply-btn{opacity: .8;font-size: .6rem}
</style>
