import { createRouter, createWebHistory } from 'vue-router'
import { ElNotification } from 'element-plus'
import routes from './routes'
import { routeInIgnore } from '@/utils/routeInIgnore'
import { getLocalToken } from '@/utils/getLocalStorage'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const isIn = routeInIgnore(to.path)
  const token = getLocalToken()

  if (token) {
    // 已登录
    next()
  } else {
    // 未登录，并且企图访问超越权限的路由
    if (isIn) {
      next('/')
      ElNotification({
        title: '该页面需要登录后才能访问',
        type: 'warning',
      })
    } else {
      next()
    }
  }
})

export default router
