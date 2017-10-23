import Vue from 'vue'
import Router from 'vue-router'
import Index from '../Views/Index.vue'
import Blogs from '../Views/Blogs.vue'
import Tags from '../Views/Tags.vue'
import _2017_01_20 from '../Views/Blogs/2017-01-20-Personal-Project-2016.vue'
import _2017_01_22 from '../Views/Blogs/2017-01-22-Front-End-Tricks.vue'
import _2017_02_14 from '../Views/Blogs/2017-02-14-MongoDB-learning.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Blogs',
      name: 'Blogs',
      component: Blogs,
      children:[
        {
          path:'/_2017_01_20',
          component:_2017_01_20
        },
        {
          path:'/_2017_01_22',
          component:_2017_01_22
        },{
          path:'/_2017_02_14',
          component:_2017_02_14
        },
      ]
    },
    {
      path: '/Tags',
      name: 'Tags',
      component: Tags
    }
  ]
})
