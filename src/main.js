import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import store from './store/';
import { edgewood } from './apis/axios'
import Layout from '@/components/Layout'
import Spinner from '@/components/Misc/Spinner'
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";


Vue.prototype.$axios = axios;
Vue.prototype.$edgewood = edgewood;
Vue.config.productionTip = false
Vue.component("Spinner", Spinner);
Vue.component("Layout", Layout);
Vue.component("pagination", require("laravel-vue-pagination"));
const options = {
  confirmButtonColor: "#41b882",
  cancelButtonColor: "#ff7674"
};
Vue.use(VueSweetalert2, options)


new Vue({
  axios,
  edgewood,
  router,
  store,
  VueSweetalert2,
  render: h => h(App),
}).$mount('#app')
