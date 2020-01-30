import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import { edgewood } from './apis/axios'

Vue.prototype.$axios = axios;
Vue.prototype.$edgewood = edgewood;
Vue.config.productionTip = false

new Vue({
  axios,
  edgewood,
  router,
  render: h => h(App),
}).$mount('#app')
