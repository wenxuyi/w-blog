import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/pages/BlogList.vue'
import Regsiter from '../components/pages/Regsiter.vue'
import Login from '../components/pages/Login.vue'
import UpFile from '../components/pages/UpFile.vue'

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
    path: '/UpFile',
    name: 'upfile',
    component: UpFile,
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
});
router.beforeEach((to, from, next) => {
  let isLogin = localStorage.getItem("TOKEN");
  if (to.fullPath === '/UpFile') {
    if (isLogin == null) {
      alert('账号未登录，请先登录');
      next('/login');
    }else{
      next();
    }
  } else if (!(to.fullPath === '/UpFile')) {
    next();
  }
  else {
    next('/login');
  }
})


export default router
