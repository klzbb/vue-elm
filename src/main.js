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
import 'lib-flexible/flexible.js'
import '@/icons' // global svg
import '@/permission.js' // permission control
FastClick.attach(document.body) // fix移动端点击延时

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
