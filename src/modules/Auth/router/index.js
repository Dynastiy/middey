import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      layout: 'auth',
      requiresAuth: false,
      name: 'login',
      parent: 'login',
      title: 'Hello,<br> Sign in!',
      pageTitle: 'Sign In',
      desc: 'Please, enter your details'
    }
  },

  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      layout: 'auth',
      requiresAuth: false,
      name: 'register',
      parent: 'register',
      title: 'Create Your <br> Account',
      pageTitle: 'Create Account',
      desc: 'Provide the following details to create an account'
    }
  }
]

export default routes
