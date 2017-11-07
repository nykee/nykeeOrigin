import Vue from 'vue'
import Router from 'vue-router'
import Index from '../Views/Index.vue'
import Blogs from '../Views/Blogs.vue'
import Tags from '../Views/Tags.vue'
import _2017_01_20 from '../Views/Blogs/2017-01-20-Personal-Project-2016.vue'
import _2017_01_22 from '../Views/Blogs/2017-01-22-Front-End-Tricks.vue'
import _2017_02_14 from '../Views/Blogs/2017-02-14-MongoDB-learning.vue'
import _2017_06_18 from '../Views/Blogs/2017-06-08-BaiduMap-Learning.vue'
import _2017_09_21 from '../Views/Blogs/2017-09-21-Echarts2.7.2.vue'
import _2017_09_26 from '../Views/Blogs/2017-09-26-Vue.vue'
import _2017_11_07 from '../Views/Blogs/2017-11-07-Git.vue'

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
        },
        {
          path:'/_2017_02_14',
          component:_2017_02_14
        }, {
          path:'/_2017_06_18',
          component:_2017_06_18
        }, {
          path:'/_2017_09_21',
          component:_2017_09_21
        },
        {
          path:'/_2017_09_26',
          component:_2017_09_26
        },
        {
          path:'/_2017_11_07',
          component:_2017_11_07
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
