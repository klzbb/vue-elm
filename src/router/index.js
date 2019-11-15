import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/50X',
    name: '50X',
    component: () => import('@/views/err/50x.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/err/404.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})

export default router
