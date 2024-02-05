import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import Login from '../components/Login.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
   {
     path: '/login',
     name: 'login',
   //route level code-splitting
   // this generates a separate chunk (about.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: () => import(/* webpackChunkName: "about" */ '../components/Login-web.vue')
   },
   {
    path: '/register',
    name: 'register',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Register-web.vue')
  },
  {
    path: '/popup',
    name: 'popup',
  //route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Register-popup.vue')
  },
  {
    path: '/navbar',
    name: 'navbar',
  //route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Navbar-web.vue')
  },
  {
    path: '/select',
    name: 'select',

    component: () => import(/* webpackChunkName: "about" */ '../components/Select-web.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
