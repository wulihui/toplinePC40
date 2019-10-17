import Vue from 'vue'
import Router from 'vue-router'
// 导入useElement
import UseElement from './views/useElement'
// 导入 login & home
import Login from '@/views/login'
import Home from '@/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'name',
      component: Home
    },
    {
      path: '/useElement',
      name: 'useElement',
      component: UseElement
    }
  ]
})
