import Vuex from 'vuex';
import Vue from 'vue';
import products from './modules/products'
import auth from './modules/auth'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    products,
    auth
  },
});

export default store;
