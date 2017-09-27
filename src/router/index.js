import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import About from '../components/About.vue'
import Tags from '../components/Tags.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Tags',
      name: 'Tags',
      component: Tags
    }
  ]
})
