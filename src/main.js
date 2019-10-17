import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入 Element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'// 引入 element-ui 的样式
// 导入全局样式
import '@/styles/index.less'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
