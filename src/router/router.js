import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home/Home.vue')
  },
  {
    path: '/Planets',
    name: 'Planets',
    component: () => import(/* webpackChunkName: "about" */ '../views/Planets/Planets.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
