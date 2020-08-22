import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout.vue'
import Index from '../views/index.vue'
import Post from '../views/post.vue'
import Login from '../views/management/login.vue'
import Home from '../views/management/home.vue'
import Edit from '../views/management/edit.vue'
import Posts from '../views/management/posts.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[
      {path:'/',name: 'Index',component: Index},
      {path: '/blog/:blogId',name: 'Post',component: Post}
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/posts',
    children:[
      {path: '/home/posts',name: 'Posts',component: Posts},
      {path: '/home/edit',name: 'Edit',component: Edit},
      {path: '/home/edit/:blogId',name: 'Edited',component: Edit}
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
