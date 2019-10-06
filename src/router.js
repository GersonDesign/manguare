import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detalle from './views/detalle.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detalle',
      name: 'detalle',
      component: Detalle
    },
    {
      path: '/busqueda',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
