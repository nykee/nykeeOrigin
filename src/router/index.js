import Vue from 'vue'
import Router from 'vue-router'
import Index from '../Views/Index.vue'
import Blogs from '../Views/Blogs.vue'
import Project from '../Views/Project.vue'
import DZDPCrawlSpider from '../Views/Blogs/2017-01-20-DZDP-Crawl-Spider.vue'
import FrontEndTricks from '../Views/Blogs/2017-01-22-Front-End-Tricks.vue'
import MongoDBLearning from '../Views/Blogs/2017-02-14-MongoDB-learning.vue'
import BaiduMapLearning from '../Views/Blogs/2017-06-08-BaiduMap-Learning.vue'
import EchartsLearning from '../Views/Blogs/2017-09-21-Echarts2.7.2.vue'
import VueLearning from '../Views/Blogs/2017-09-26-Vue.vue'
import GitLearning  from '../Views/Blogs/2017-11-07-Git.vue'
import ReactTricks from '../Views/Blogs/2017-11-08-React.vue'
import D3Learning from '../Views/Blogs/2018-04-03-D3.jsV4.0'
import ReactLearning from '../Views/Blogs/2018-05-29-React'
import NettyLearning from '../Views/Blogs/2018-05-17-Netty'

Vue.use(Router);
const router = new Router({
  mode:'history',
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
          path:'DZDPCrawlSpider',
          component:DZDPCrawlSpider
        },
        {
          path:'FrontEndTricks',
          component:FrontEndTricks
        },
        {
          path:'MongoDBLearning',
          component:MongoDBLearning
        }, {
          path:'BaiduMapLearning',
          component:BaiduMapLearning
        }, {
          path:'EchartsLearning',
          component:EchartsLearning
        },
        {
          path:'VueLearning',
          component:VueLearning
        },
        {
          path:'GitLearning',
          component:GitLearning
        },
        {
          path:'ReactTricks',
          component:ReactTricks
        },
        {
          path:'D3Learning',
          component:D3Learning
        },
        {
          path:'NettyLearning',
          component:NettyLearning
        },
        {
          path:'ReactLearning',
          component:ReactLearning
        },
      ]
    },
    {
      path: '/Project',
      name: 'Project',
      component: Project
    }
  ]
});

export default  router
