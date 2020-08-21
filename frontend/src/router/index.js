import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/layout.vue'
import Index from '../components/index.vue'
import Post from '../components/post.vue'
import Login from '../components/admin/login.vue'
import Backhome from '../components/admin/backhome.vue'
import Edit from '../components/admin/edit.vue'
import Bkindex from '../components/admin/bkindex.vue'
import Allblogs from '../components/admin/allblogs.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Layout,
    children:[
      {path:'/',component: Index},
      {path: '/blog/:blogId',component: Post}
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/backhome',
    component: Backhome,
    children:[
      {path: '/backhome',component: Bkindex},
      {path: '/backhome/allblogs',component: Allblogs},
      {path: '/backhome/edit',component: Edit},
      {path: '/backhome/edit/:blogId',component: Edit}
    ]
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to,from,next)=>{
//   if(to.path == '/backhome') return next();
// })

export default router
