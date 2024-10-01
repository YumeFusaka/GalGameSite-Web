import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import { lazyPlugin } from '@/directives'
import 'echarts'

const app = createApp(App)

app.use(pinia)
app.use(lazyPlugin)
app.use(router)
app.mount('#app')
