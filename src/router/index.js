import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'

// require auth
const authRequired = (to, from, next) => {
  let token = localStorage.getItem('token')

  if (!token) {
    next({ name: 'Login' })
  } else {
    next()
  }
}

// no auth required
const noAuthRequired = (to, from, next) => {
  let token = localStorage.getItem('token')

  if (token) {
    next({ name: 'Home' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // beforeEnter: authRequired
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: noAuthRequired
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: noAuthRequired
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
