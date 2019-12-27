import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import ArticleImage from '@/components/ArticleImage'
import ArticleVideo from '@/components/ArticleVideo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
