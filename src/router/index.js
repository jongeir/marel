import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/DashBoard'
import Service from '@/components/Service'
import Advanced from '@/components/Advanced'
import Cleaning from '@/components/Cleaning'
import Production from '@/components/Production'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard
    }, {
      path: '/service',
      name: 'Service',
      component: Service
    }, {
      path: '/advanced',
      name: 'Advanced',
      component: Advanced
    }, {
      path: '/cleaning',
      name: 'Cleaning',
      component: Cleaning
    }, {
      path: '/production',
      name: 'Production',
      component: Production
    }
  ]
})
