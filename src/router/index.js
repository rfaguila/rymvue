import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { 
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/characters/:id',
    name: 'characters',
 
    component: function () {
      return import(/* webpackChunkName: "characters" */ '../views/CharactersId.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
