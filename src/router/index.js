import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BuildOwn from '../views/BuildOwn.vue'
import Pizzas from '../views/Pizzas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/build-own',
    name: 'BuildOwn',
    component: BuildOwn
  },
  {
    path: '/pizzas',
    name: 'Pizzas',
    component: Pizzas
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
