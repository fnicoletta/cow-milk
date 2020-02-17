import { edgewood } from "../../apis/axios";
// initial state
const state = {
  all: null,
  original: null,
  single: null,
  formProduct: null,
  deleting: null,
  sizes: [],
  categories: []
};

// getters
const getters = {
  getProducts: state => {
    return state.all;
  }
};

// actions
const actions = {
  async getAllProducts({ commit }) {
    await edgewood.get("/products").then(({ data }) => {
      console.log("data", data);
      commit("setProducts", data);
    });
  }
};

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products;
    if (!state.original) {
      state.original = products;
    }
  },
  setProduct(state, product) {
    state.single = product;
  },
  setFormProduct(state, product) {
    if (state.formProduct) {
      state.formProduct = null;
    }
    state.formProduct = product;
  },
  setDeleting(state, product) {
    if (state.deleting) {
      state.deleting = null;
    }
    state.deleting = product;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
