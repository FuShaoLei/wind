import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/layout.styl'
import mavonEditor from 'mavon-editor-update'
import 'mavon-editor-update/dist/css/index.css'
//导入axios->跨域请求
import axios from 'axios'

import './plugins/element.js'
// 挂载axios
Vue.prototype.$http=axios
//设置访问路径
axios.defaults.baseURL="http://localhost:9000"


Vue.use(mavonEditor)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
