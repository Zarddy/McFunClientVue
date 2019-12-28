import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import ArticleImage from '@/components/ArticleImage'
import ArticleVideo from '@/components/ArticleVideo'
import TabView from '@/components/TabView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TabView',
      component: TabView,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/articleImage',
      name: 'ArticleImage',
      component: ArticleImage
    },
    {
      path: '/articleVideo',
      name: 'ArticleVideo',
      component: ArticleVideo
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
