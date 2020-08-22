import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/layout.styl'
import mavonEditor from 'mavon-editor-update'
import 'mavon-editor-update/dist/css/index.css'
// Vue-cli生成的工程文件的src/main.js
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件
//导入axios->跨域请求
import axios from 'axios'

import './plugins/element.js'
// 挂载axios
Vue.prototype.$http=axios
//设置访问路径
axios.defaults.baseURL="http://localhost:9000"


Vue.use(mavonEditor)
Vue.config.productionTip = false


Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
