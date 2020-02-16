import { edgewood } from "../../apis/axios";
// initial state
const state = {
  all: null,
  original: null,
  single: null,
  modifying: null,
  deleting: null
};

// getters
const getters = {
    getProducts: state => {
        return state.all
    },
};

// actions
const actions = {
  async getAllProducts({ commit }) {
    await edgewood.get("/products").then(({ data }) => {
      console.log("data", data);
      commit("setProducts", data);
    });
  },
};

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products;
    if(!state.original) {
      state.original = products
    }
  },
  setProduct(state, product) {
    state.single = product
  },
  setModifying(state, product) {
    state.modifying = product
  },
  setDeleting(state, product) {
    state.deleting = product
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
