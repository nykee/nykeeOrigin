// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import {
  Row, Col, Tooltip, Menu, MenuItem, BackTop, Dropdown,
  DropdownItem, LoadingBar, Modal, Card, Drawer, Slider,Progress,Message,Time
} from 'iview'
// import {RouterLink} from "VueRouter"
// import iview from "iView"
import 'iview/dist/styles/iview.css'
// import 'font-awesome-webpack'
import vueI18n from 'vue-i18n'

// import Axios from 'axios';
// Vue.prototype.$http =Axios;

Vue.config.productionTip = false;
// Vue.use(iview);
// Vue.use(VueLazyload,{
//   preLoad: 1.3,
//   loading:'../static/img/loading.gif',
//   attempt: 1,
//   // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
//   listenEvents: [ 'scroll' ]
// });
/*组成iview组件*/
Vue.component("Row", Row);
Vue.component("Col", Col);
Vue.component("Tooltip", Tooltip);
Vue.component("Menu", Menu);
Vue.component("MenuItem", MenuItem);
Vue.component("BackTop", BackTop);
Vue.component("Dropdown", Dropdown);
Vue.component("DropdownItem", DropdownItem);
Vue.component("LoadingBar", LoadingBar);
Vue.component("Modal", Modal);
Vue.component("Card", Card);
Vue.component("Drawer", Drawer);
Vue.component("Slider", Slider);
Vue.component("Progress", Progress);
Vue.component("Message", Message);
Vue.component("Time", Time);
// Vue.use(VueI18n);


const i18n = new vueI18n({
  locale: 'zh',
  messages: {
    zh: require('./i18n/app-zh.json'),
    en: require('./i18n/app-en.json'),
    ja: require('./i18n/app-ja.json'),

  }
});


router.beforeEach((from, to, next) => {
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
    step = 50;
  // console.log(scrollY);;

  let timer = setInterval(function () {
    if (scrollY > 0) {
      scrollY -= step;
      window.scrollTo(0, scrollY);
    }
    else {
      clearInterval(timer)
    }

  }, ms)


}



Vue.filter('fomatTime', function (valueTime) {

  if(valueTime){
    var newData =  Date.parse(new Date());
    var diffTime = Math.abs(newData-valueTime);
    if (diffTime > 7 * 24 * 3600 * 1000) {
      var date = new Date(valueTime);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      var d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      var h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      var minute = date.getMinutes();
      var second = date.getSeconds();
      minute = minute < 10 ? ('1' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      return  m + '-' + d+' '+h+':'+minute;

    } else if (diffTime < 7 * 24 * 3600 * 1000 && diffTime > 24 * 3600 * 1000) {
      // //注释("一周之内");

      // var time = newData - diffTime;
      var dayNum = Math.floor(diffTime / (24 * 60 * 60 * 1000));
      return dayNum + "天前";

    } else if (diffTime < 24 * 3600 * 1000 && diffTime > 3600 * 1000) {
      // //注释("一天之内");
      // var time = newData - diffTime;
      var dayNum = Math.floor(diffTime / (60 * 60 * 1000));
      return dayNum + "小时前";

    } else if (diffTime < 3600 * 1000 && diffTime > 0) {
      // //注释("一小时之内");
      // var time = newData - diffTime;
      var dayNum = Math.floor(diffTime / (60 * 1000));
      if(dayNum === 0 ){return "刚刚"}
      return dayNum + "分钟前";

    }
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: {App}
});
