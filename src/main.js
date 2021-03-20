import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'
import mock_toppings from './mock-toppings.js'


Vue.config.productionTip = false

let data = {
  products: mock,
  toppings: mock_toppings,
  cart: [],
  addedToppings: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
