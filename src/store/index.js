import Vuex from 'vuex';
import Vue from 'vue';
import products from './modules/products'
import auth from './modules/auth'
import countries from './modules/countries'
import cart from './modules/cart'
import sizes from './modules/sizes'
import categories from './modules/categories'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    products,
    auth,
    countries,
    cart,
    sizes,
    categories
  },
});

export default store;