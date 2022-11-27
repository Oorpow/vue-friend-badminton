import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import dayjs from 'dayjs'

import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'
import 'uno.css'
import '@unocss/reset/normalize.css'
import '@/assets/css/global.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)

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

app.mount('#app')
