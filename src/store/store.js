import Vuex from 'vuex'
import Vue from 'vue';

import {CHANGE_BLOGMENU_ACTIVENAME} from './mutation-types'

Vue.use(Vuex);
export default new Vuex.Store(
  {
    state:{
      blogMenuActiveName:"1"
    },
    mutations:{
      [CHANGE_BLOGMENU_ACTIVENAME](state,newActiveName){
        state.blogMenuActiveName =newActiveName;
      }
    }
  }
)
