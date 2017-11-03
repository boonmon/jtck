import Vue from 'vue'
import Router from 'vue-router'
import content from '@/page/content'
import index from '@/page/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/content/:id',
      name: 'content',
      component: content
    }
  ]
})
