import Vuex from 'vuex'
// import Vue from 'vue';
import axios from 'axios';
import {CHANGE_BLOGMENU_ACTIVENAME,
  CHANGE_PLAYSTATUS,
  INITIAL_SONGLISTS,
  GET_SONGLISTS} from './mutation-types'

// Vue.use(Vuex);
export default new Vuex.Store(
  {
    state:{
      blogMenuActiveName:"1",
      playStatus:"paused",
      song_current:[],
      songLists:null
    },
    mutations:{
      [CHANGE_BLOGMENU_ACTIVENAME](state,newActiveName){
        state.blogMenuActiveName =newActiveName;
      },
      [CHANGE_PLAYSTATUS](state){
        state.playStatus = (state.playStatus==="paused")? "playing":"paused"
      },
      [INITIAL_SONGLISTS](state,data){
        console.log(data);
        state.songLists =data;

      },
      [GET_SONGLISTS](state){
        return state.songLists;
      }
    },
    actions:{
      initialSongLists(context){
        let result=null;
        axios.get("https://api.bzqll.com/music/tencent/songList?key=579621905&id=5471246374").then((res)=>{

          for(let i=0,len =res.data.data.songs.length;i<len;i++){
            res.data.data.songs[i].index = i+1;
            // console.log(res.data.data.songs[i]);
          }
           result =res.data.data.songs;
        }).catch((err)=>{
          console.warn(err)
        });
        context.commit("INITIAL_SONGLISTS",result)
      },
    }
  }
)
