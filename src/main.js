/*
 * @Descripttion: DOP
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2019-11-26 17:45:15
 * @LastEditors: konglingzhan
 * @LastEditTime: 2019-12-06 10:54:18
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'

import 'lib-flexible/flexible.js' // rem set
import '@/icons' // global svg
import '@/permission.js'
FastClick.attach(document.body) // permission control

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
