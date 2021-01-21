import Vue from 'vue'
import VueRouter from 'vue-router'
import Room from '../views/Room.vue'
import Login from '../views/Login.vue'
import Game from '../views/Game.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/room',
    name: 'Room',
    component: Room
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
