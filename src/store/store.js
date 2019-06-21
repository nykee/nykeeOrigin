import Vuex from 'vuex'
// import Vue from 'vue';
import axios from 'axios';
// import {
//   CHANGE_BLOGMENU_ACTIVENAME,
//   CHANGE_PLAYSTATUS,
//   INITIAL_SONGLISTS,
//   GET_SONGLISTS,GET_PV
// } from './mutation-types'
import * as types from "./mutation-types"
// Vue.use(Vuex);
export default new Vuex.Store(
  {
    state: {
      blogMenuActiveName: "1",
      playStatus: "paused",
      song_current: [],
      songLists: null,
       blog:{
        id:1,
         pv:0
       }
    },
    mutations: {
      [types.CHANGE_BLOGMENU_ACTIVENAME](state, newActiveName) {
        state.blogMenuActiveName = newActiveName;
      },
      [types.CHANGE_PLAYSTATUS](state) {
        state.playStatus = (state.playStatus === "paused") ? "playing" : "paused"
      },
      [types.INITIAL_SONGLISTS](state, data) {
        console.log(data);
        state.songLists = data;

      },
      [types.GET_SONGLISTS](state) {
        return state.songLists;
      },
        [types.GET_PV](state,value){
        // console.log("进入mutation");
        // console.log(value);
        // console.log(pv);
          state.blog.pv = value;
          // console.log(state.pv);
          // return state.pv;
        }

    },
    getters:{
      getPV:state => state.blog.pv
    },
    actions: {
      initialSongLists(context) {
        let result = null;
        axios.get("https://api.bzqll.com/music/tencent/songList?key=579621905&id=5471246374").then((res) => {

          for (let i = 0, len = res.data.data.songs.length; i < len; i++) {
            res.data.data.songs[i].index = i + 1;
            // console.log(res.data.data.songs[i]);
          }
          result = res.data.data.songs;
        }).catch((err) => {
          console.warn(err)
        });
        context.commit("INITIAL_SONGLISTS", result)
      },
        getPV(context,params){
        // console.log("进去action");
        console.log(params);
          // let result=null;
            axios.get("/Blog/QueryBlogPV",params)
                .then((res)=>{
                    // console.log(res.data);
                  context.commit("GET_PV",res.data)
                    // return res.data;
                })
                .catch((err)=>{
                    console.log(err);
                });

        },
        updatePV(context){
            let param ={
                id:articleID,
                viewSum:viewSum
            };

            axios.post("/Blog/UpdateBlogPV",param)
                .then((res)=>{
                    console.log(res);
                    return res;
                })
                .catch((err)=>{
                    console.log(err);
                })

        }
        }
    }

)
