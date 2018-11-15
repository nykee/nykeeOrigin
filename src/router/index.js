// import Vue from 'vue'
// import Router from 'vue-router'
import Index from '../views/Index.vue'
import Blogs from '../views/Blogs.vue'
import Project from '../views/Project.vue'
import Photo from '../views/Photo.vue'
import DZDPCrawlSpider from '../views/Blogs/2017-01-20-DZDP-Crawl-Spider.vue'
import FrontEndTricks from '../views/Blogs/2017-01-22-Front-End-Tricks.vue'
import MongoDBLearning from '../views/Blogs/2017-02-14-MongoDB-learning.vue'
import BaiduMapLearning from '../views/Blogs/2017-06-08-BaiduMap-Learning.vue'
import EchartsLearning from '../views/Blogs/2017-09-21-Echarts2.7.2.vue'
import VueLearning from '../views/Blogs/2017-09-26-Vue.vue'
import GitLearning  from '../views/Blogs/2017-11-07-Git.vue'
import ReactTricks from '../views/Blogs/2017-11-08-React.vue'
import D3Learning from '../views/Blogs/2018-04-03-D3.jsV4.0.vue'
import ReactLearning from '../views/Blogs/2018-05-29-React.vue'
import NettyLearning from '../views/Blogs/2018-05-17-Netty.vue'
import VueI18n from '../views/Blogs/2018-11-07-Vue-i18n.vue'

// Vue.use(VueRouter);

const router = new VueRouter({
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
        {
          path:'VueI18n',
          component:VueI18n
        },
      ]
    },
    {
      path: '/Project',
      name: 'Project',
      component: Project
    },
    {
      path: '/Photograph',
      name: 'Photo',
      component: Photo
    }
  ]
});

export default  router
