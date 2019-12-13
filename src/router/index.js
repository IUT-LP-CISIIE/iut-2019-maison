import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Maison from '../components/Maison.vue'
import Salon from '../components/Salon.vue'
import Grenier from '../components/Grenier.vue'
import Cuisine from '../components/Cuisine.vue'
import Chambre from '../components/Chambre.vue'

Vue.use(VueRouter)

const routes = [
  /*{
    path: '/',
    name: 'home',
    component: Home
  },*/
  {
    path: '/',
    name: 'maison',
    component: Maison
  },
  {
    path: '/Salon',
    name: 'salon',
    component: Salon
  },
  {
    path: '/Grenier',
    name: 'grenier',
    component: Grenier
  },
  {
    path: '/Cuisine',
    name: 'cuisine',
    component: Cuisine
  },
  {
    path: '/Chambre',
    name: 'chambre',
    component: Chambre
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
