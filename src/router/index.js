import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

import Auth from './modules/auth'
import App from './modules/app'

// Error Page
import PageNotFound from '../modules/ErrorPages/Error404Page.vue'

const baseRoutes = [
  // Route for Page Not found
  { path: '/:pathMatch(.*)', component: PageNotFound }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: baseRoutes.concat(Auth, App),
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

router.beforeEach((to, from, next) => {
  var isLoggedIn = store.getters['auth/getAuthenticated']
  // Check if the route requires authentication
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if the user is authenticated
    if (!isLoggedIn) {
      // Redirect to the login page
      next({ path: '/login', query: { redirect: to.fullPath } })
    } else {
      next()
    }
  } else {
    next()
  }
})
// Navigation Guards

export default router
