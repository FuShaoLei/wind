import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/layout.styl'
//导入axios->跨域请求
import axios from 'axios'
// 挂载axios
Vue.prototype.$http=axios
//设置访问路径
axios.defaults.baseURL="http://localhost:9000"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
