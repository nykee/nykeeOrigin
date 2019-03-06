// import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Blogs from '../views/Blogs.vue'
import Project from '../views/Project.vue'
import Photo from '../views/Photo.vue'
import About from '../views/About.vue'
import Comments from '../views/Comments.vue'
import DZDPCrawlSpider from '../views/Blogs/2017-01-20-DZDP-Crawl-Spider.vue'
import FrontEndTricks from '../views/Blogs/2017-01-22-Front-End-Tricks.vue'
import MongoDBLearning from '../views/Blogs/2017-02-14-MongoDB-learning.vue'
import BaiduMapLearning from '../views/Blogs/2017-06-08-BaiduMap-Learning.vue'
import EchartsLearning from '../views/Blogs/2017-09-21-Echarts2.7.2.vue'
import VueLearning from '../views/Blogs/2017-09-26-Vue.vue'
import GitLearning from '../views/Blogs/2017-11-07-Git.vue'
// import ReactTricks from '../views/Blogs/2017-11-08-React.vue'
// import D3Learning from '../views/Blogs/2018-04-03-D3.jsV4.0.vue'
import ReactLearning from '../views/Blogs/2018-05-29-React.vue'
import NettyLearning from '../views/Blogs/2018-05-17-Netty.vue'
import VueI18n from '../views/Blogs/2018-11-07-Vue-i18n.vue'
import FeOPT from '../views/Blogs/2018-11-20-FE-Optimize.vue'
import Ayada from '../views/Blogs/2019-03-03-Ayada.vue'
import BlogsIndex from '../views/Blogs/BlogsIndex.vue'
import FeInterview from '../views/Blogs/2019-03-06-FeInterview.vue'


// Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/About',
      name: ' About',
      component: About
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
              path:'/',
                component:BlogsIndex
            },
            {
              path:'MongoDBLearning',
                component:MongoDBLearning
            },
            {
                path: 'FrontEndTricks',
                component: FrontEndTricks
            },
            {
                path: 'BaiduMapLearning',
                component: BaiduMapLearning
            },
            {
                path: 'EchartsLearning',
                component: EchartsLearning
            },
            {
                path: 'VueLearning',
                component: VueLearning
            },
            {
                path: 'GitLearning',
                component: GitLearning
            },


            {
                path: 'ReactLearning',
                component: ReactLearning
            },
            {
                path: 'NettyLearning',
                component: NettyLearning
            },
            {
                path: 'VueI18n',
                component: VueI18n
            },
            {
                path: 'FeOPT',
                component: FeOPT
            },

            {
                path: 'Ayada',
                component: Ayada
            },
            {
                path: 'FeInterview',
                component: FeInterview
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
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Comments',
      name: 'Comments',
      component: Comments
    },
  ]
});

export default router
