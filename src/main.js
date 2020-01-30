import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import store from './store/';
import { edgewood } from './apis/axios'

Vue.prototype.$axios = axios;
Vue.prototype.$edgewood = edgewood;
Vue.config.productionTip = false
Vue.component("pagination", require("laravel-vue-pagination"));


new Vue({
  axios,
  edgewood,
  router,
  store,
  render: h => h(App),
}).$mount('#app')