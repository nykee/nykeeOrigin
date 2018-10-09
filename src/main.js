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

Vue.config.productionTip = false;
Vue.use(iview,{locale});

router.beforeEach(( from ,to, next)=>{
  window.scrollTo(0,0);
  next();
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
