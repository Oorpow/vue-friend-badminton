import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import dayjs from 'dayjs'
import { io } from 'socket.io-client'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/dark/css-vars.css'
// import 'element-plus/dist/index.css'
import 'uno.css'
import '@unocss/reset/normalize.css'
import '@/assets/css/global.css'

import App from './App.vue'
import router from './router'
import { vHasAuth } from './directives/vHasAuth'

const app = createApp(App)
const pinia = createPinia()

// 全局的socket实例
const socket = io(import.meta.env.VITE_SOCKET_SERVER, {
  autoConnect: false,
})

app.provide('socket', socket)

type Format = {
  format(time: string): string
}

// 全局的格式化时间戳方法
app.config.globalProperties.$formatTime = {
  format(time: string): string {
    const dateTime = dayjs(time).format('YYYY/MM/DD')
    return dateTime
  },
}

declare module 'vue' {
  export interface ComponentCustomProperties {
    $formatTime: Format
  }
}

pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.directive('hasAuth', vHasAuth)

app.mount('#app')
