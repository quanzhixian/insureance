import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Home from '@/views/home'
import Share from '@/views/share'
import Zoom from '@/views/zoom'

import ProjectDetail from '@/views/productDetail'
import ShareDetail from '@/views/shareDetail'
import Login from '@/components/login'

import PolicyInfo  from '@/views/policyInfo'
Vue.use(Router)

let routers =  new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/share',
      name: 'share',
      component: Share
    },
    {
      path: '/zoom',
      name: 'zoom',
      component: Zoom
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/projectDetail/:productId',
      name: 'projectDetail',
      component: ProjectDetail
    },
    {
      path: '/shareDetail/:title',
      name: 'shareDetail',
      component: ShareDetail
    },
    {
      path: '/policyInfo',
      name: 'policyInfo',
      component: PolicyInfo
    },
  ]
})
// routers.beforeEach((to,from,next)=>{
//   if(!localStorage.getItem('userel') && to.path!='/login'){
//     next('/login')
//   }else{
//     next()
//   }
// })
export default routers
