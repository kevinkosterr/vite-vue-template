import { createRouter, createWebHistory } from 'vue-router'

import generalRoutes from './general.ts'

export default createRouter({
  history: createWebHistory(),
  routes: [
    ...generalRoutes
  ]
})