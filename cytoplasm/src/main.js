import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

// 引入路由
import router from './router'

// 引入pinia插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'


console.log(import.meta.env)
console.log(import.meta.env.VITE_API_URL)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

for(const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus,{
    locale: zhCn
})

app.use(router)
app.use(pinia)


app.mount('#app')