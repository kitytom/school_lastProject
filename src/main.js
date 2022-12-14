import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view'
import './assets/index.css'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(dataV)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
