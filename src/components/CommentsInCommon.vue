<template>
  <div class="comment-container">
    <!--header-->
    <Row type="flex" justify="center" align="middle" class="comment-header">
      <i-col :xs={span:spanXS} :sm={span:spanSM} :md={span:spanMD} :lg={span:spanLG} >
        <span>Comments</span>
        <span class="cut-off-line"></span>
        <span class="comments-sum">{{commentsAndReplySum}}</span>
        <span>{{$t("message.commentsPage.commentCountDesc")}}</span>
      </i-col>
    </Row>
    <!--body-->
    <Row type="flex" justify="center" align="middle">
      <i-col v-if="spinShow"
             :xs={span:spanXS} :sm={span:spanSM} :md={span:spanMD} :lg={span:spanLG} >
        <div class="loading-mask">
          <Spin size="large" fix>
            <Icon type="ios-loading" size=32 class="demo-spin-icon-load"></Icon>
            <div>Loading...</div>
          </Spin>
        </div>
      </i-col>
      <i-col v-if="!spinShow"
             :xs={span:spanXS} :sm={span:spanSM} :md={span:spanMD} :lg={span:spanLG}
             v-for="com in commentSFromDB" :key="com.id">

        <CommentItem :nick-name="com.nickName"
                     :content="com.content"
                     :avatar ="com.avatar"
                     :post-time ="com.postTime"

                     :browser="com.browser"
                     :os="com.os"
                     :isp="com.isp"
                     :cmt-id="com.id"
                     :parentBlogId="bid"
                     :email="com.email"
                     v-if="!isEmpty"
        />
      </i-col>
      <CommentEmptyStatus v-if="isEmpty"></CommentEmptyStatus>


    </Row>
    <!--footer评论输入区-->
    <Row type="flex" justify="center" align="middle" class="item-row">
      <i-col :xs={span:spanXS} :sm={span:spanSM} :md={span:spanMD} :lg={span:spanLG}>
        <Page :total="commentsTotal" @on-change="handlePageChange" show-elevator/>
        <span class="reply-btn" v-if="isReplyMode">
          <Button size="small" type="warning" @click="cancelReply">取消回复</Button>
        </span>
      </i-col>
    </Row>
    <Row type="flex" justify="center" align="middle" class="item-row">
      <i-col :xs={span:spanXS} :sm={span:spanSM} :md={span:spanMD} :lg={span:spanLG}>
        <Input ref="commentsInput" v-model="comments" type="textarea" :rows="4" :placeholder="this.$t('message.commentsPage.placeholder_comment')" />
      </i-col>
    </Row>
    <Row type="flex" justify="center" align="middle" class="item-row">
      <i-col :xs={span:spanXS} :sm={span:spanSM} :md={span:spanMD} :lg={span:spanLG} v-if="!isMobile">
        <Poptip   word-wrap>
          <span @click="toggleEmoji" class="emoji-toggle-contanier">
            <i class="fa fa-smile-o fa-2x emoji-toggle-btn" :class="{'active-btn':isEmojShow}" ></i>
            {{$t("message.commentsPage.emoji")}}
          </span>
          <div slot="content">
            <Tabs value="baidu_emoji" class="emoj-pages">
              <TabPane label="贴吧" name="baidu_emoji">
             <span v-for="emo in baiduEmojis" :key="emo.id"   @click="addEmoji(emo.code)">
          <Emotion :src="emo.src" :tooltip="emo.name" :code="emo.code" emotionClass="emotion-img"/>
        </span>
              </TabPane>
              <TabPane label="阿狸" name="ali_emoji">
            <span v-for="emo in aliEmojis" :key="emo.id"   @click="addEmoji(emo.code)">
          <Emotion :src="emo.src" :tooltip="emo.name" :code="emo.code" emotionClass="emotion-img-ali"/>
        </span>
              </TabPane>
              <TabPane label="QQ" name="qq_emoji">
            <span v-for="emo in qqEmojis" :key="emo.id"   @click="addEmoji(emo.code)">
              <Emotion :src="emo.src" :tooltip="emo.name" :code="emo.code" emotionClass="emotion-img"/>
            </span>
              </TabPane>
            </Tabs>
          </div>
        </Poptip>
      </i-col>

      <i-col :xs={span:spanXS} :sm={span:spanSM} :md={span:spanMD} :lg={span:spanLG}  v-if="isMobile">
          <span @click="toggleEmoji" class="emoji-toggle-contanier">
            <i class="fa fa-smile-o fa-2x emoji-toggle-btn" :class="{'active-btn':isEmojShow}" ></i>
            {{$t("message.commentsPage.emoji")}}
          </span>
      </i-col>
      <i-col :xs={span:spanXS} :sm={span:spanSM} :md={span:spanMD} :lg={span:spanLG} class="emotion-toggle-container" v-show="isEmojShow&&isMobile" >
        <Tabs value="baidu_emoji">
          <TabPane label="贴吧" name="baidu_emoji">
             <span v-for="emo in baiduEmojis" :key="emo.id"   @click="addEmoji(emo.code)">
          <Emotion :src="emo.src" :tooltip="emo.name" :code="emo.code" emotionClass="emotion-img"/>
        </span>
          </TabPane>
          <TabPane label="阿狸" name="ali_emoji">
            <span v-for="emo in aliEmojis" :key="emo.id"   @click="addEmoji(emo.code)">
          <Emotion :src="emo.src" :tooltip="emo.name" :code="emo.code" emotionClass="emotion-img-ali"/>
        </span>
          </TabPane>
          <TabPane label="QQ" name="qq_emoji">
            <span v-for="emo in qqEmojis" :key="emo.id"   @click="addEmoji(emo.code)">
              <Emotion :src="emo.src" :tooltip="emo.name" :code="emo.code" emotionClass="emotion-img"/>
            </span>
          </TabPane>
        </Tabs>
      </i-col>


    </Row>
    <Row type="flex" justify="center" align="middle" class="item-row" >
      <i-col :xs={span:spanXS} :sm={span:spanSM} :md={span:spanMD} :lg={span:spanLG}>
        <Row>
          <i-col span="2">
            <Avatar  size="large" :src="avatarSrc" >{{ nickName }}</Avatar>
          </i-col>
          <i-col span="10" offset="1">
            <Input v-model="nickName" :placeholder="this.$t('message.commentsPage.placeholder_nickname')" class="comment-input-items"  @on-blur="handleOnBlur" />
          </i-col>
          <i-col span="10" offset="1">
            <Input v-model="email" :placeholder="this.$t('message.commentsPage.placeholder_email')"  class="comment-input-items" @on-blur="validateEmail"/>
          </i-col>
        </Row>
      </i-col>
    </Row>
    <Row type="flex" justify="center" align="middle">
      <i-col :xs={span:spanXS} :sm={span:spanSM} :md={span:spanMD} :lg={span:spanLG} class="textA-center">
        <Radio v-model="isHuman">{{$t("message.commentsPage.notRobot")}}</Radio>
      </i-col>
    </Row>
    <Row type="flex" justify="center" align="middle" class="item-row">
      <i-col :xs={span:spanXS} :sm={span:spanSM} :md={span:spanMD} :lg={span:spanLG} class="textA-center">
        <Button type="primary" @click="submitComments" :disabled="subBtnDisable">{{$t("message.commentsPage.submit_comment")}}</Button>
      </i-col>
    </Row>
    <!--<Row type="flex" justify="center" align="middle" class="item-row">-->
      <!--<Spin size="large"></Spin>-->
    <!--</Row>-->
  </div>
</template>

<script>
  import {isMobile} from '../utils/ScreenWidth'
  import EventBus from "../utils/EventBus"
  import CommentItem from './CommentItem'
  import Emotion from '../components/Emotion'
  import CommentEmptyStatus   from "./CommentEmptyStatus"
  export default {
    props:["bid","spanLG","spanMD","spanSM","spanXS","btitle"],
    data() {
      return {
        isEmpty:false,
        commentsAndReplySum:0,
        commentsTotal:0,
        comments:'',
        isHuman:false,
        nickName:'',
        qqNum:"",
        email:'',
        ispInfo:'未知ISP',
        // total:0,
        isMobile:false,
        spinShow:false,
        isEmojShow:false,
        commentSFromDB:[],
        avatarSrc:'',
        isRouterAlive:false,
        baiduEmojis:[
          {
            name:'无语',
            id:'aa',
            code:':aa',
            src:'https://image.nykee.cn/baidu_emoji/icon_aa.gif'
          },
          {
            name:'愤怒',
            id:'anger',
            code:':anger',
            src:'https://image.nykee.cn/baidu_emoji/icon_anger.gif'
          },
          {
            name:'极好的',
            id:'awesome',
            code:':awesome',
            src:'https://image.nykee.cn/baidu_emoji/icon_awesome.gif'
          },
          {
            name:'太开心',
            id:'bbd',
            code:':bbd',
            src:'https://image.nykee.cn/baidu_emoji/icon_bbd.gif'
          },
          {
            name:'咖啡',
            id:'britan',
            code:':britan',
            src:'https://image.nykee.cn/baidu_emoji/icon_britan.gif'
          },
          {
            name:'疑问',
            id:'doubt',
            code:':doubt',
            src:'https://image.nykee.cn/baidu_emoji/icon_doubt.gif'
          },
          {
            name:'可怜',
            id:'good',
            code:':good',
            src:'https://image.nykee.cn/baidu_emoji/icon_good.gif'
          },
          {
            name:'委屈',
            id:'Grievance',
            code:':Grievance',
            src:'https://image.nykee.cn/baidu_emoji/icon_Grievance.gif'
          },
          {
            name:'哈哈',
            id:'haha',
            code:':haha',
            src:'https://image.nykee.cn/baidu_emoji/icon_haha.gif'
          },
          {
            name:'汗',
            id:'han',
            code:':han',
            src:'https://image.nykee.cn/baidu_emoji/icon_han.gif'
          },
          {
            name:'高兴',
            id:'Happy',
            code:':Happy',
            src:'https://image.nykee.cn/baidu_emoji/icon_Happy.gif'
          },
          {
            name:'呼',
            id:'hu',
            code:':hu',
            src:'https://image.nykee.cn/baidu_emoji/icon_hu.gif'
          },
          {
            name:'滑稽',
            id:'funny',
            code:':funny',
            src:'https://image.nykee.cn/baidu_emoji/icon_funny.gif'
          },
          {
            name:'酷',
            id:'ku',
            code:':ku',
            src:'https://image.nykee.cn/baidu_emoji/icon_ku.gif'
          },
          {
            name:'天真',
            id:'naive',
            code:':naive',
            src:'https://image.nykee.cn/baidu_emoji/icon_naive.gif'
          },
          {
            name:'NicoNicoNi~',
            id:'niconiconi',
            code:':niconiconi',
            src:'https://image.nykee.cn/baidu_emoji/icon_niconiconi.gif'
          },
          {
            name:'NicoNicoNi~',
            id:'niconiconit',
            code:':Dniconiconi',
            src:'https://image.nykee.cn/baidu_emoji/icon_niconiconit.gif'
          },
          {
            name:'咦',
            id:'rbq',
            code:':rbq',
            src:'https://image.nykee.cn/baidu_emoji/icon_rbq.gif'
          },
          {
            name:'嫌弃',
            id:'reluctantly',
            code:':reluctantly',
            src:'https://image.nykee.cn/baidu_emoji/icon_reluctantly.gif'
          },
          {
            name:'rmb',
            id:'rmb',
            code:':rmb',
            src:'https://image.nykee.cn/baidu_emoji/icon_rmb.gif'
          },
          {
            name:'花心',
            id:'se',
            code:':se',
            src:'https://image.nykee.cn/baidu_emoji/icon_se.gif'
          },
          {
            name:'阴险',
            id:'blackness',
            code:':blackness',
            src:'https://image.nykee.cn/baidu_emoji/icon_blackness.gif'
          },
          {
            name:'吐',
            id:'spit',
            code:':spit',
            src:'https://image.nykee.cn/baidu_emoji/icon_spit.gif'
          },
          {
            name:'噗',
            id:'spray',
            code:':spray',
            src:'https://image.nykee.cn/baidu_emoji/icon_spray.gif'
          },
          {
            name:'惊哭',
            id:'surprisedCry',
            code:':surprisedCry',
            src:'https://image.nykee.cn/baidu_emoji/icon_surprised.gif'
          },
          {
            name:'惊讶',
            id:'surprised',
            code:':surprised',
            src:'https://image.nykee.cn/baidu_emoji/icon_surprised2.gif'
          },
          {
            name:'流泪',
            id:'tear',
            code:':tear',
            src:'https://image.nykee.cn/baidu_emoji/icon_tear.gif'
          },
          {
            name:'黑线',
            id:'theblackline',
            code:':theblackline',
            src:'https://image.nykee.cn/baidu_emoji/icon_theblackline.gif'
          },
          {
            name:'吐舌',
            id:'tongue',
            code:':tongue',
            src:'https://image.nykee.cn/baidu_emoji/icon_tongue.gif'
          },
          {
            name:'赞',
            id:'like',
            code:':like',
            src:'https://image.nykee.cn/baidu_emoji/icon_like.png'
          },
        ],
        aliEmojis:[
          {
            name:'洗澡',
            id:'bath',
            code:':ali_bath',
            src:'https://image.nykee.cn/ali_emoji/bath.jpg'
          },
          {
            name:'扎心',
            id:'shootheart',
            code:':ali_shootheart',
            src:'https://image.nykee.cn/ali_emoji/shootheart.jpg'
          },
          {
            name:'拜拜',
            id:'bye',
            code:':ali_bye',
            src:'https://image.nykee.cn/ali_emoji/bye.jpg'
          },
          {
            name:'鼓掌',
            id:'clap',
            code:':ali_clap',
            src:'https://image.nykee.cn/ali_emoji/clap.jpg'
          },
          {
            name:'哭',
            id:'cry',
            code:':ali_cry',
            src:'https://image.nykee.cn/ali_emoji/cry.jpg'
          },
          {
            name:'别走',
            id:'dontgo',
            code:':ali_dontgo',
            src:'https://image.nykee.cn/ali_emoji/dontgo.jpg'
          },
          {
            name:'悠闲',
            id:'easy',
            code:':ali_easy',
            src:'https://image.nykee.cn/ali_emoji/easy.jpg'
          },
          {
            name:'拳击',
            id:'fight',
            code:':ali_fight',
            src:'https://image.nykee.cn/ali_emoji/fight.jpg'
          },
          {
            name:'委屈',
            id:'grievance',
            code:':ali_grievance',
            src:'https://image.nykee.cn/ali_emoji/grievance.jpg'
          },
          {
            name:'飞吻',
            id:'kiss',
            code:':ali_kiss',
            src:'https://image.nykee.cn/ali_emoji/kiss.jpg'
          },
          {
            name:'啦啦啦',
            id:'lalala',
            code:':ali_lalala',
            src:'https://image.nykee.cn/ali_emoji/lalala.jpg'
          },
          {
            name:'笑Cry',
            id:'laugh',
            code:':ali_laugh',
            src:'https://image.nykee.cn/ali_emoji/laugh.jpg'
          },
          {
            name:'喜欢',
            id:'like',
            code:':ali_like',
            src:'https://image.nykee.cn/ali_emoji/like.jpg'
          },
          {
            name:'凄凉',
            id:'loneliness',
            code:':ali_loneliness',
            src:'https://image.nykee.cn/ali_emoji/loneliness.jpg'
          },
          {
            name:'不',
            id:'no',
            code:':ali_no',
            src:'https://image.nykee.cn/ali_emoji/no.jpg'
          },
          {
            name:'转身哭',
            id:'roundcry',
            code:':ali_roundcry',
            src:'https://image.nykee.cn/ali_emoji/roundcry.jpg'
          },
          {
            name:'睡觉',
            id:'sleep',
            code:':ali_sleep',
            src:'https://image.nykee.cn/ali_emoji/sleep.jpg'
          },
          {
            name:'吓',
            id:'surprised',
            code:':ali_surprised',
            src:'https://image.nykee.cn/ali_emoji/surprised.jpg'
          },
          {
            name:'摔',
            id:'throw',
            code:':ali_throw',
            src:'https://image.nykee.cn/ali_emoji/throw.jpg'
          },
          {
            name:'耶',
            id:'yeah',
            code:':ali_yeah',
            src:'https://image.nykee.cn/ali_emoji/yeah.jpg'
          },

        ],
        qqEmojis:[
          {
            name:'鼓掌',
            id:'clap',
            code:':qq_clap',
            src:'https://image.nykee.cn/qq_emoji/e4005.gif'
          },
          {
            name:'害羞',
            id:'redface',
            code:':qq_redface',
            src:'https://image.nykee.cn/qq_emoji/e4006.gif'
          },
          {
            name:'抖',
            id:'shake',
            code:':qq_shake',
            src:'https://image.nykee.cn/qq_emoji/e4007.gif'
          },
          {
            name:'汗',
            id:'han',
            code:':qq_han',
            src:'https://image.nykee.cn/qq_emoji/e4009.gif'
          },


          {
            name:'雷人',
            id:'thunder',
            code:':qq_thunder',
            src:'https://image.nykee.cn/qq_emoji/e4011.gif'
          },
          {
            name:'潜水',
            id:'hide',
            code:':qq_hide',
            src:'https://image.nykee.cn/qq_emoji/e4012.gif'
          },
          {
            name:'大笑',
            id:'laugh',
            code:':qq_laugh',
            src:'https://image.nykee.cn/qq_emoji/e4018.gif'
          },
          {
            name:'路过',
            id:'plane',
            code:':qq_plane',
            src:'https://image.nykee.cn/qq_emoji/e6097.gif'
          },
          {
            name:'干杯',
            id:'cheers',
            code:':qq_cheers',
            src:'https://image.nykee.cn/qq_emoji/e6098.gif'
          },
          {
            name:'恭喜发财',
            id:'gxfc',
            code:':qq_gxfc',
            src:'https://image.nykee.cn/qq_emoji/e6100.gif'
          },
          {
            name:'红包',
            id:'redbag',
            code:':qq_redbag',
            src:'https://image.nykee.cn/qq_emoji/e6101.gif'
          },
          {
            name:'玫瑰',
            id:'rose',
            code:':qq_rose',
            src:'https://image.nykee.cn/qq_emoji/e6104.gif'
          },
          {
            name:'求约会',
            id:'askdate',
            code:':qq_askdate',
            src:'https://image.nykee.cn/qq_emoji/e6107.gif'
          },
        ],
        isReplyMode:false,
        cmt_id_reply_to:'',
        origin_email:"",
        origin_name:'',
        origin_content:'',
        location:'',
        subBtnDisable:false,
        randomAvatar:[
          "https://image.nykee.cn/d-avatar(3).jpg",
          "https://image.nykee.cn/d-avatar(4).jpg",
          "https://image.nykee.cn/d-avatar(5).jpg",
          "https://image.nykee.cn/d-avatar(6).jpg",
          "https://image.nykee.cn/d-avatar(7).jpg",
        ],
        isUserExist:false,
          isCommentInserting:false,
      }
    },
    methods: {
      validateEmail(){
          /**
           * @file: CommentsInCommon.vue
           * @method validateEmail
           * @param {type} argName - description 
           * @param {type} argName - description 
           * @param {type} argName - description 
           * @return {type} argName - description
           * @description: 
           * @author: admin
           * @date: 2020/3/1
           */
        if(this.email.length ===0){
          this.$Message.warning("请填写邮箱！")
        }
        else {
          let  reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          if(!reg.test(this.email)){
            this.$Message.warning("请填写有效的邮箱地址！");
            this.subBtnDisable =true;
          }
          else {
            this.subBtnDisable =false;
          }
        }
        let param = {
          nickname:this.nickName,
          avatar:this.avatarSrc,
          email:this.email
        };
        if(!this.isUserExist&&this.email.length!==0){
          axios.post("/user/insertUserInfo",param)
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
      },
      isQQ:function (aQQ) {
        let  bValidate = new RegExp(/^[1-9][0-9]{4,9}$/).test(aQQ);
        return bValidate;
      },
      QueryCommentsInitial:function(){
          /**
           * @file: CommentsInCommon.vue
           * @method QueryCommentsInitial
           * @param {type} argName - description 
           * @param {type} argName - description 
           * @param {type} argName - description 
           * @return {type} argName - description
           * @description: 
           * @author: admin
           * @date: 2020/3/1
           */
        let self = this;
        this.isEmpty = this.commentsAndReplySum ===0;
        this.spinShow =true;
        // self.commentsAndReplySum+=1;
        self.commentSFromDB=[];
        self.nickName ="";
        self.email ='';
        self.comments='';
        axios.get("/Comment/QueryCommentsInitial",{params:{parentBlogId:self.bid}})
          .then((res)=>{
            // console.log(res.data);
            for(let i=0,len =res.data.length;i<len;i++){
              self.commentSFromDB .push(res.data[i]) ;
            }
            this.spinShow =false;
          })
          .catch((err)=>{
            console.warn(err);
          });
//        console.log(self.commentSFromDB);
      },
      submitComments:function(){
/**
 * @file: CommentsInCommon.vue
 * @method submitComments
 * @param {type} argName - description 
 * @param {type} argName - description 
 * @param {type} argName - description 
 * @return {type} argName - description
 * @description: 
 * @author: admin
 * @date: 2020/3/1
 */
        let self= this;
        let browser = this.getBrowserInfo();
        let os = this.getOsInfo();
        if(!this.isHuman){
          this.$Message.warning('请刷老司机卡上车');
          return false;
        }
        else {
          if(this.comments.length ===0){
            this.$Message.warning('不允许空评论噢！');
            return false;
          }
          else if(this.nickName.length ===0||this.email.length ===0){
            this.$Message.warning('昵称或邮箱必填噢！');
            return false;
          }
          else {
            self.subBtnDisable =true;

            // alert(this.btitle);
            let timeStamp = new Date().getTime().toString();
            this.comments=this.utf16toEntities(this.comments);
            let params = {
              postTime:timeStamp,
              content:this.comments,
              email:this.email,
              nickname:this.nickName,
              avatar:this.avatarSrc,
              browser:browser,
              os:os,
              isp:this.ispInfo,
              parentBlogId:this.bid,
              btitle:this.btitle
            };
            if(!this.isReplyMode ){
                this.isCommentInserting = true;
              axios.post("/Comment/insertNewComment",params)
                .then((res)=>{
                  console.log(res.data);
                  if(String(res.data.code)==="200"){
                    self.subBtnDisable =false;
                    self.isCommentInserting = false;
                    self.$Message.success({
                      content: "评论成功！",
                      duration: 3
                    })
                  }
                  self.QueryCommentsInitial();
                })
                .catch((err)=>{
                  console.log(err);
                })
            }
            else {
              params["replyTo"] =this.cmt_id_reply_to;
              params["originName"] = this.origin_name;
              params["originContent"] =this.origin_content;
              params["originEmail"] =this.origin_email;
              params["location"] =this.location;

              axios.post("/Comment/insertNewReply",params)
                .then((res)=>{
                  if(String(res.data.code)==="200"){
                    self.subBtnDisable =false;
                    self.$Message.success({
                      content: "回复成功！",
                      duration: 3
                    });
                    self.isReplyMode =false;

                  }


                  self.QueryCommentsInitial();

                })
                .catch((err)=>{
                  console.log(err);
                })

            }

          }
          this.commentsAndReplySum+=1;
          let commentCountParam={
            commentSum:this.commentsAndReplySum,
            id:this.bid
          };
          axios.post("/Blog/UpdateCommentsCount",commentCountParam)
            .then((res)=>{

              console.log(res);
            })
            .catch((err)=>{
              console.log(err);
            })
        }



        // location.reload();
        // window.scrollTo(0,0)
      },
      addEmoji(code){
        this.comments+=code;
      },
      handlePageChange:function(page){
          /**
           * @file: CommentsInCommon.vue
           * @method handlePageChange
           * @param {type} argName - description 
           * @param {type} argName - description 
           * @param {type} argName - description 
           * @return {type} argName - description
           * @description: 
           * @author: admin
           * @date: 2020/3/1
           */
        let index = (page-1)*10,
          rowLimit =10,
          self=this,
          params ={
            index:index,
            rowLimit:rowLimit,
            parentBlogId:this.bid

          };
        this.spinShow =true;
        axios.post("/Comment/QueryCommentsPerPage",params)
          .then(
            (res)=>{

              for(let i=0,len=self.commentSFromDB.length;i<len;i++){
                self.commentSFromDB.shift();
              }

              for(let i=0,len =res.data.length;i<len;i++){
                self.commentSFromDB .push(res.data[i]) ;
              }
              self.spinShow =false;
            }
          )
          .catch(
            (err)=>{
              console.log(err);
            }
          )
      },
      toggleEmoji(){
        this.isEmojShow = !this.isEmojShow;
      },
      handleOnBlur(){
          /**
           * @file: CommentsInCommon.vue
           * @method handleOnBlur
           * @param {type} argName - description 
           * @param {type} argName - description 
           * @param {type} argName - description 
           * @return {type} argName - description
           * @description: 
           * @author: admin
           * @date: 2020/3/1
           */
        let qqNum = this.nickName;
        let self=this,
          params ={
            uid:this.nickName,
            uIP:this.uIP
          };
        if(this.nickName.length===0){
          this.$Message.warning('请填写昵称或QQ');
          this.avatarSrc ="";
          return false
        }
        if(!this.isQQ(this.nickName)){

          // this.$Message.warning('QQ不正确');
          /*if(sessionStorage.getItem("userAvatar")){
            this.avatarSrc = sessionStorage.getItem("userAvatar")
          }else {
            this.avatarSrc =this.randomAvatar[Math.floor(Math.random()*(this.randomAvatar.length-0+1)+0)] ;
            sessionStorage.setItem("userAvatar",this.avatarSrc);
          }*/
          let par ={
            nickname:this.nickName
          };
          let userCount;
          axios.post("/user/getNicknameCount",par)
            .then((res)=>{
              // console.log(res.data.extendInfo);
              userCount = res.data.extendInfo.nicknameCount;
              if(parseInt(userCount) >0){
                this.isUserExist =true;
                console.log("old user!");
                axios.post("/user/getAvatarAndEmail",par)
                  .then((res)=>{
                      console.log(res);
                      let result = res.data.extendInfo.avatarAndEmail;
                      result =JSON.parse(result);
                      console.log(result);
                      self.avatarSrc = result.avatar;
                      self.email =result.email;
                  })
                  .catch((err)=>{
                      console.log(err);
                  })
              }
              else {
                this.isUserExist =false;
                this.avatarSrc =this.randomAvatar[Math.floor(Math.random()*(this.randomAvatar.length-0+1)+0)] ;
              }
          }).catch((err)=>{
              console.log(err);
          });


          return false
        }
        else {
          axios.post("/Comment/getAvatar",params)
            .then(
              (res)=>{
                let nickName = JSON.parse(res.data.extendInfo.nickName);
                let headPhoto =res.data.extendInfo.headPhoto;
                nickName =nickName[nickName.length-2];
                headPhoto = headPhoto.substring(headPhoto.indexOf("{"),headPhoto.lastIndexOf("}")+1);
                let headPhotoParse =JSON.parse(headPhoto);
                let namekey = self.nickName;
                self.avatarSrc = headPhotoParse[namekey];
                self.nickName =nickName;
                if(self.nickName){self.email = qqNum+"@qq.com"}

              }
            )
        }


      },
      getOsInfo(){
          /**
           * @file: CommentsInCommon.vue
           * @method getOsInfo
           * @param {type} argName - description
           * @param {type} argName - description
           * @param {type} argName - description
           * @return {type} argName - description
           * @description:
           * @author: admin
           * @date: 2020/3/1
           */
        let sUserAgent = navigator.userAgent;

        let isWin = (navigator.platform === "Win32") || (navigator.platform === "Windows");
        let isMac = (navigator.platform === "Mac68K") || (navigator.platform === "MacPPC") || (navigator.platform === "Macintosh") || (navigator.platform === "MacIntel");
        if (isMac)
          return "Mac";
        let isUnix = (navigator.platform === "X11") && !isWin && !isMac;
        if (isUnix)
          return "Unix";
        let isLinux = (String(navigator.platform).indexOf("Linux") > -1);
        if (isLinux)
          return "Linux";
        //windows
        if (isWin) {
          let isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
          if (isWin2K)
            return "Windows2000";
          let isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
          if (isWinXP)
            return "WindowsXP";
          let isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
          if (isWin2003)
            return "Windows2003";
          let isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
          if (isWinVista)
            return "WindowsVista";
          let isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
          if (isWin7)
            return "Windows7";
          let isWin8 = sUserAgent.indexOf("Windows NT 6.2") > -1|| sUserAgent.indexOf("Windows 8") > -1;
          if(isWin8)
            return "Windows8";
          let isWin10 = sUserAgent.indexOf("Windows NT 10.0") > -1|| sUserAgent.indexOf("Windows 10") > -1;
          if(isWin10)
            return "Windows10";

        }
        let isIphone = sUserAgent.indexOf("iphone;")>-1;
        let isPad = sUserAgent.indexOf("iPad;")>-1;
        let isMac2 = sUserAgent.indexOf("Macintosh;")>-1;
        console.log(isIphone !== -1);
        if(isIphone|| isPad){
          return "IOS"}
        if(isMac2){return "Mac"}
        return "other";
      },
      getBrowserInfo:function(){
        // let is360 = false;
        // let isIE = false;
        // let isFireFox =false;
        // let isChrome = false;
        // let isEdge = false;
        // let isQQ =false;
        let broName = '';
        let strStart = 0;
        let strStop = 0;
        let temp = '';
        let userAgent = window.navigator.userAgent; //包含以下属性中所有或一部分的字符串：appCodeName,appName,appVersion,language,platform
        // console.log(userAgent);

        //FireFox
        if (userAgent.indexOf('Firefox') !== -1) {
          // isFireFox = true;
          strStart = userAgent.indexOf('Firefox');
          temp = userAgent.substring(strStart);
          broName = temp.replace('/', ' ')

        }

        //Opera
        else if (userAgent.indexOf('Opera') !== -1) {
          // isFireFox = true;
          strStart = userAgent.indexOf('Opera');
          strStop = userAgent.indexOf('(');
          temp = userAgent.substring(strStart,strStop);
          broName = temp.replace('/', ' ')

        }

        //Edge
        else if (userAgent.indexOf('Edge') !== -1) {
          // isEdge = true;
          /*broName = 'Edge浏览器';*/
          strStart = userAgent.indexOf('Edge');
          temp = userAgent.substring(strStart);
          broName = temp.replace('/', ' ');
        }

        //IE浏览器
        else if (userAgent.indexOf('NET') !== -1 && userAgent.indexOf("rv") !== -1) {
          // isIE = true;
          /*broName = 'IE浏览器'; */
          strStart = userAgent.indexOf('rv');
          strStop = userAgent.indexOf(')');
          temp = userAgent.substring(strStart, strStop);
          broName = temp.replace('rv', 'IE').replace(':', ' ');
        }

        //360极速模式可以区分360安全浏览器和360极速浏览器
        else if (userAgent.indexOf('WOW') !== -1 && userAgent.indexOf("NET") < 0 && userAgent.indexOf("Firefox") < 0) {
          if (navigator.javaEnabled()) {
            console.log(userAgent);
            // is360 = true;
            broName = '360安全浏览器-极速模式';
          } else {
            // is360 = true;
            broName = '360极速浏览器-极速模式';
          }
        }

        //360兼容
        else if (userAgent.indexOf('WOW') !== -1 && userAgent.indexOf("NET") !== -1 && userAgent.indexOf("MSIE") !== -1 && userAgent.indexOf("rv") < 0) {
          // is360 = true;
          broName = '360兼容模式';
        }

        //Chrome浏览器
        else if (userAgent.indexOf('WOW') < 0 && userAgent.indexOf("Edge") < 0) {
          // isChrome = true;
          strStart = userAgent.indexOf('Chrome');
          strStop = userAgent.indexOf(' Safari');
          temp = userAgent.substring(strStart, strStop);
          broName = temp.replace('/', ' ');
        }
        else if (userAgent.indexOf('QQ') !== -1) {
          broName = 'QQ浏览器';
        }
        else {
          broName = "M78星云信息探测器"
        }
        if(userAgent.indexOf("iPhone;")>-1 ||userAgent.indexOf("iPad;")>-1||userAgent.indexOf("Macintosh;")>-1){
          if(userAgent.search(/AppleWebKit/g)){
            broName = "Safari"
          }
        }

        return broName
      },
      utf16toEntities: function(str) {
          /**
           * @file: CommentsInCommon.vue
           * @method utf16toEntities
           * @param {type} argName - description
           * @param {type} argName - description
           * @param {type} argName - description
           * @return {type} argName - description
           * @description: 检测utf16emoji表情 转换为实体字符以供后台存储
           * @author: admin
           * @date: 2020/3/1
           */
        let patt=/[\ud800-\udbff][\udc00-\udfff]/g;
        str = str.replace(patt, function(char){
          let H, L, code;
          if (char.length===2) {   //辅助平面字符（我们需要做处理的一类）
            H = char.charCodeAt(0); // 取出高位
            L = char.charCodeAt(1); // 取出低位
            code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00; // 转换算法
            return "&#" + code + ";";
          } else {
            return char;
          }
        });
        return str;
      },
      cancelReply(){
        this.isReplyMode =false;
        this.comments = ''
      }
    },
    created: function () {
    },
    mounted() {
      // console.log(this.btitle);
      this.isEmpty = this.commentsAndReplySum ===0;
      this.isMobile =isMobile();

      this.uIP=  returnCitySN["cip"];
      // console.log(this.uIP);
//        axios.get("/Comment/getCip").then((res)=>{
////          console.log(res.data.extendInfo.Cip);
//          let idx1 = res.data.extendInfo.Cip.indexOf(":");
//          let idx2 = res.data.extendInfo.Cip.indexOf(",");
////          console.log(res.data.extendInfo.Cip.indexOf(":"));
////          console.log(res.data.extendInfo.Cip.indexOf(","));
////            console.log(cip)
//         this.uIP=  res.data.extendInfo.Cip.slice(idx1, idx2).replace(":", "").replace('"', '').replace('"', '');
//      });
      let self = this;
      this.spinShow =true;
      axios.get("/Comment/QueryCommentsCount",{params:{parentBlogId:self.bid}})
        .then((res)=>{
          self.commentsTotal+= parseInt(res.data.extendInfo.commentsSum);
          axios.get("/Comment/QueryReplyCount",{params:{parentBlogId:self.bid}})
            .then((res)=>{
              // console.log(typeof res.data.extendInfo.replySum);
              self.commentsAndReplySum=self.commentsTotal+parseInt(res.data.extendInfo.replySum);
              self.isEmpty = self.commentsAndReplySum === 0;
              // console.log("this.commentsAndReplySum:"+self.commentsAndReplySum);
            })
            .catch((err)=>{
              console.log(err);
            });

        })
        .catch((err)=>{
          console.log(err);
        });


      axios.get("/Comment/QueryCommentsInitial",{params:{parentBlogId:self.bid}})
        .then((res)=>{
          // console.log(res.data);
          for(let i=0,len =res.data.length;i<len;i++){
            self.commentSFromDB .push(res.data[i]) ;
          }
          this.spinShow =false;
        })
        .catch((err)=>{
          console.warn(err);
        });
      axios.post("/Comment/getIpInfo",{uIP:this.uIP})
        .then((res)=>{
          // console.log(res.data.extendInfo.ipinfo);
          let result = JSON.parse(res.data.extendInfo.ipinfo);
//            console.log(result)
          // console.log(result);
          let country =result.result.ad_info.nation; //国家
          let region =result.result.ad_info.district;  //地区
          let city =result.result.ad_info.city;      //城市
//          let isp =result.result.ad_info.isp;      //宽带供应商
          // console.log(city);
          if(country ==="中国"){
            self.ispInfo = (region ===city)? city: city+region;
          }
          else {
            self.ispInfo = country+city+region;
          }
        })
        .catch((err)=>{
          console.warn(err);
        });
      EventBus.$on("rePlyComment",(data)=>{
        this.$refs.commentsInput.focus();
        this.comments="";
        this.comments+= "回复@"+data.nickName+"：";
        this.isReplyMode =true;
        this.cmt_id_reply_to =data.id;
        this.origin_email=data.email;
        this.origin_content =data.content;
        this.origin_name = data.nickName;
        this.location = data.location;
      });

    },
    computed:{

    },
    components: {CommentItem,Emotion,CommentEmptyStatus}
  }
</script>
<style scoped>
  .comment-container{
    margin: 4rem 0 ;
    padding:0 .6rem ;
  }
  .comment-header{margin: .6rem 0;}
  .cut-off-line{border-right: 1px solid #000}
  .comments-sum{margin-left: .6rem;}
  .item-row{margin-top:.6rem;}
  .emotion-toggle-container{padding: 1rem 0;}
  .emoji-toggle-contanier{cursor: pointer}
  .emoji-toggle-btn{
    cursor: pointer;
    color:#ccc;
    vertical-align:center;
    margin-right: .4rem;
  }

  .loading-mask{
    /*width:20rem;*/
    height: 20.5625rem;
    background-color: #f3f3f3;
    opacity: 1;
    position: relative;
  }
  .active-btn{color: #2b85e4}
  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
  .reply-btn{position: absolute;bottom:0;right:0;font-size: .6rem}
  .emoj-pages{
    width: 18rem;
    height: 20rem}
</style>
