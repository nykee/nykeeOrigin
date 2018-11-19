import Vuex from 'vuex'
// import Vue from 'vue';

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
      songLists:[]
    },
    mutations:{
      [CHANGE_BLOGMENU_ACTIVENAME](state,newActiveName){
        state.blogMenuActiveName =newActiveName;
      },
      [CHANGE_PLAYSTATUS](state){
        state.playStatus = (state.playStatus==="paused")? "playing":"paused"
      },
      [INITIAL_SONGLISTS](state,songListsAjax){
        state.songLists =songListsAjax
      },
      [GET_SONGLISTS](state){
        return state.songLists;
      }
    },
    actions:{
      initialSongLists(context){
        context.commit("INITIAL_SONGLISTS",args)
      },
      getSongLists(context){
        context.commit(GET_SONGLISTS);
      }
    }
  }
)
