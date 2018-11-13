// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'font-awesome-webpack'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false;
Vue.use(iView);

Vue.use(VueI18n);


const i18n = new VueI18n({
  locale:'zh',
  messages:{
    zh: require('./i18n/app-zh.json'),
    en: require('./i18n/app-en.json'),
    ja: require('./i18n/app-ja.json'),

  }
});



router.beforeEach(( from ,to, next)=>{
  // window.scrollTo(0,0);
  easeScroll(16);
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
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
  i18n,
  template: '<App/>',
  components: { App }
});
