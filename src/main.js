// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import {Row,Col,Tooltip,Menu,MenuItem,BackTop,Dropdown,
    DropdownItem,LoadingBar,Modal,Card,Drawer} from 'iview'
// import {RouterLink} from "VueRouter"
import 'iview/dist/styles/iview.css'
// import 'font-awesome-webpack'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false;
// Vue.use(iview);
Vue.use(VueLazyload,{ loading:'../static/img/loading.gif'});
Vue.component("Row",Row);
Vue.component("Col",Col);
Vue.component("Tooltip",Tooltip);
Vue.component("Menu",Menu);
Vue.component("MenuItem",MenuItem);
Vue.component("BackTop",BackTop);
Vue.component("Dropdown",Dropdown);
Vue.component("DropdownItem",DropdownItem);
Vue.component("LoadingBar",LoadingBar);
Vue.component("Modal",Modal);
Vue.component("Card",Card);
Vue.component("Drawer",Drawer);
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
  LoadingBar.start();
  next();
});

router.afterEach(route => {
  LoadingBar.finish();
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
