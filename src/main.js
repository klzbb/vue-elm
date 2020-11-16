/*
 * @Descripttion: DOP
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2019-11-26 17:45:15
 * @LastEditors: konglingzhan
 * @LastEditTime: 2019-12-06 10:54:18
 */
import 'babel-polyfill' // 全局垫片
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import 'lib-flexible/flexible.js' // rem布局js库
import '@/icons' // global svg
import '@/permission.js' // 全局路由钩子函数

import vFilters from '@/filters/index.js' // register global filters
for (const key in vFilters) {
  Vue.filter(key, vFilters[key])
}

FastClick.attach(document.body) // 移动端点击延时

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
