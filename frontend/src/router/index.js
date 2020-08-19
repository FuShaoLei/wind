import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import About from '../components/page/about.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      { path: '/about', component: About }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
