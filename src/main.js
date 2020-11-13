import Vue from 'vue'
import App from './App.vue'
import SmartTable from 'vuejs-smart-table'
import router from './router'

Vue.config.productionTip = false

Vue.use(SmartTable)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
