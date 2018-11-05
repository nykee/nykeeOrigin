// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import iview from 'iview'
import locale from 'iview/dist/locale/en-US';
import 'iview/dist/styles/iview.css'
import 'font-awesome-webpack'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false;
Vue.use(iview,{locale});
Vue.use(VueI18n);

router.beforeEach(( from ,to, next)=>{
  // window.scrollTo(0,0);
  easeScroll(16);
  next();
});
function easeScroll(ms) {
  let scrollY = window.scrollY,
      step=50;
  // console.log(scrollY);;

    let  timer =setInterval(function () {
      if(scrollY>0){
        scrollY -=step;
        window.scrollTo(0,scrollY);
      }
      else {clearInterval(timer)}

    },ms)




}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
