import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/pages/BlogList.vue'
import Regsiter from '../components/pages/Regsiter.vue'
import Login from '../components/pages/Login.vue'
const routes = [
  {
    path: '/Home',
    name: 'home',
    component: Home,
    meta: {
      show: true
    }
  },
  {
    path: '/Regsiter',
    name: 'register',
    component: Regsiter,
    meta: {
      show: false
    }
  },
  {
    path: '/Login',
    name: 'login',
    component: Login,
    meta: {
      show: false
    }
  },
  {
    // 初始登录页面时，本目录重定向到home页
    path: '/',
    redirect: '/Home'
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
