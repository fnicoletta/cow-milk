import Vuex from 'vuex';
import Vue from 'vue';
import products from './modules/products'
import auth from './modules/auth'
import countries from './modules/countries'
import cart from './modules/cart'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    products,
    auth,
    countries,
    cart
  },
});

export default store;