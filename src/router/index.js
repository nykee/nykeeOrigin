import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Blogs from '../views/Blogs.vue'
import Project from '../views/Project.vue'
import Photo from '../views/Photo.vue'
import PhotoNew from '../views/Photo_New.vue'
import About from '../views/About.vue'
import Friends from '../views/Friends.vue'
import Comments from '../views/Comments.vue'
import DZDPCrawlSpider from '../views/Blogs/2017-01-20-DZDP-Crawl-Spider.vue'
import FrontEndTricks from '../views/Blogs/2017-01-22-Front-End-Tricks.vue'
import MongoDBLearning from '../views/Blogs/2017-02-14-MongoDB-learning.vue'
import BaiduMapLearning from '../views/Blogs/2017-06-08-BaiduMap-Learning.vue'
import EchartsLearning from '../views/Blogs/2017-09-21-Echarts2.7.2.vue'
import VueLearning from '../views/Blogs/2017-09-26-Vue.vue'
import GitLearning from '../views/Blogs/2017-11-07-Git.vue'
import ReactLearning from '../views/Blogs/2018-05-29-React.vue'
import NettyLearning from '../views/Blogs/2018-05-17-Netty.vue'
import VueI18n from '../views/Blogs/2018-11-07-Vue-i18n.vue'
import FeOPT from '../views/Blogs/2018-11-20-FE-Optimize.vue'
import Ayada from '../views/Blogs/2019-03-03-Ayada.vue'
import BlogsIndex from '../views/Blogs/BlogsIndex.vue'
import FeInterview from '../views/Blogs/2019-03-06-FeInterview.vue'
import ImgComp from '../views/Blogs/2019-03-12-FrontEndImageCompress.vue'
import CtripConf from '../views/Blogs/2019-03-30-Ctrip.vue'

if (process.env.NODE_ENV === 'development') {
    Vue.use(VueRouter)
}
// Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/About',
      name: ' About',
      component: About
    },

    {
      path: '/Friends',
      name: ' Friends',
      component: Friends
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
            {
                path: 'ImgComp',
                component: ImgComp
            },
            {
                path: 'CtripConf',
                component: CtripConf
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
          path: '/Photo',
          name: 'Photo_new',
          component: PhotoNew
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
