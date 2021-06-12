import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import { Button, Select, Menu, MenuItem, Loading, Row, Pagination } from 'element-ui'

Vue.use(Button)
Vue.use(Select)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Pagination)
Vue.use(Loading.directive)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
