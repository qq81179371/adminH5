import { createApp } from 'vue'
import { realImg } from '@/directive'
import App from './App.vue'
import router from './router'

import '@/permission'
import 'amfe-flexible'

import 'virtual:svg-icons-register'
import '@/styles/index.scss'
// 需要全局引入再添加
import SvgIcon from './components/SvgIcon.vue' // 全局svg图标组件

const app = createApp(App)

app.directive('img', realImg)

app.use(router)

app.component('svg-icon', SvgIcon)

app.mount('#app')
