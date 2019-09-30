import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import My from '@/pages/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      index: '2'
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      index: '0'
    },
    {
      path: '/My',
      name: 'My',
      component: My,
      index: '1'
    }
  ]
})
