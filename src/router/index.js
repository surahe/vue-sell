import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'

Vue.use(Router)
Vue.prototype.$http = axios

const routes = [{
  path: '/',
  redirect: '/goods'
}, {
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}]

export default new Router({
  linkActiveClass: 'active',
  routes
})
