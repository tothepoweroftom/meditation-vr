// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAframe from '../helpers/vue-aframe'
import 'aframe-terrain-model-component'
import 'aframe-effects'
import 'aframe-particle-system-component'

import './custom-aframe-components/terrain'
// import './custom-aframe-components/wat'

Vue.use(VueAframe);
Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'a-scene',
  'a-entity',
  'a-camera',
  'a-box'
]
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
