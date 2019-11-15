import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// rem set
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
