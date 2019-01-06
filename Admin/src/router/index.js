import Vue from 'vue'
import Router from 'vue-router'
import blank from '@/components/blank'
import product from '@/components/product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blank',
      component: blank
    },
    {
      path: '/product',
      name: 'product',
      component: product
    }
  ]
})
