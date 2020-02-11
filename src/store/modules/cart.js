import {
  cookieFunctions
} from '@/mixins/cookiesMixin';

// initial state
const state = {
  cart: []
};

// getters
const getters = {
  getCart(state) {
    return state.cart;
  }
};

// actions
const actions = {
  addToCart({
    commit
  }, cartItem) {
    let temp = []
    if (!state.cart.length) {
      temp = [...temp, cartItem]
      commit("setCart", temp);
      return;
    }



    temp = state.cart;
    let exists = temp.find(items => items.cartID === cartItem.cartID);
    if (exists) {
      exists.quantity = Number(cartItem.quantity) + Number(exists.quantity);
    } else {
      temp = [...temp, cartItem];
    }
    commit("setCart", temp);
  },
  saveCart() {
    cookieFunctions.setCookie('cart', JSON.stringify(state.cart), 99999)
  },

  removeItem({
    commit
  }, cartId) {
    let temp = state.cart.filter(items => items.cartID !== cartId)
    console.log(temp, cartId)
    commit('setCart', temp)
  }
};

// mutations
const mutations = {
  setCart(state, cart) {
    state.cart = cart;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};