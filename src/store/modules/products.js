import { edgewood } from "../../apis/axios";
// initial state
const state = {
  all: null
};

// getters
const getters = {
    getProducts: state => {
        return state.all
    }
};

// actions
const actions = {
  async getAllProducts({ commit }) {
    await edgewood.get("/products").then(({ data }) => {
        // console.log('data', data)
      commit("setProducts", data);
    });
  },
  getPaginatedProducts({commit}, page = 1) {
    alert('happened')
    console.log('page', page)
  }
};

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
