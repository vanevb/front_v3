import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Addbook from '../views/Addbook'
import Login from '../views/Login'
import Landingpage from '../views/LandingPage'
import Carrito from '../views/Carrito'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/add',
    name: 'add',
    component: Addbook
  },
  {
    path: '/index',
    name: 'index',
    component: Landingpage
  },
  {
    path: '/cart',
    name: 'cart',
    component: Carrito
  }
]

const router = new VueRouter({
  routes
})

export default router
