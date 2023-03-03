import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import '@/styles/index.scss'
import 'element-plus/dist/index.css'
import './styles/element/index.scss'
import './theme/index.css'
// import '@/router/permission'
import SvgIcon from '@/components/SvgIcon'
// main.js

import '@/icons'// svg component
window.onerror = function (message, source, lineno, colno, error) {
  console.log(message, source, lineno, colno, error)
} // icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// if (process.env.NODE_ENV === 'production') {
const { mockXHR } = require('../mock')
mockXHR()
// }

app.component('svg-icon', SvgIcon)
app.use(store).use(ElementPlus).use(router).mount('#app')
