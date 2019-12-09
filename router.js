import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/index'
import Users from './pages/users'
import User from './pages/user'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'users',
        path: '/:lang?/users',
        component: Users
      },
      {
        name: 'user',
        path: '/:lang?/user/:id',
        component: User
      },
      {
        name: 'home',
        path: '/:lang?',
        component: Home
      }
    ]
  })
}
