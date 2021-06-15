import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import { Button, Menu, MenuItem, Loading, Row, Pagination, Table, TableColumn } from 'element-ui'

Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Loading.directive)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
