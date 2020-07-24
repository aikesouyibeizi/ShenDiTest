import Vue from 'vue'
import Router from 'vue-router'
import menu from '@/components/menu/menu'
import WorkBench from '@/components/menu/WorkBench'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/WorkBench',
      name: 'WorkBench',
      component: WorkBench
    },
  ]
})
