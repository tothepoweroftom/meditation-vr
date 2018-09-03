import Vue from 'vue'
import Router from 'vue-router'
import GameWorld from '@/components/GameWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GameWorld',
      component: GameWorld
    }
  ]
})
