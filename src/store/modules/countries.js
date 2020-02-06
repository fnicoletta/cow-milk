import Vue from 'vue'
import Vuex from 'vue'


const state = {
   countryCode: 'us',
   currencyType: 'USD',
   country: 'USA'
}

const getters = {
   CURRENCY: state => state.currencyType,
   CODE: state => state.countryCode,
   COUNTRY: state => state.country
}

const mutations = {
   setCurrency(state, {
      countryCode,
      country,
      currencyType
   }) {
      state.countryCode = countryCode
      state.country = country
      state.currencyType = currencyType
   }
}

const actions = {
   setCurrency(commit, value) {
      commit('setCurrency', value)
   }
}


export default {
   state,
   getters,
   actions,
   mutations
}