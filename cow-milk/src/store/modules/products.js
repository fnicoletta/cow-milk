import { edgewood } from "../../apis/axios";
// initial state
const state = {
  all: ["test"]
};

// getters
const getters = {};

// actions
const actions = {
  async getAllProducts({ commit }) {
    await edgewood.get("/products").then(({ data }) => {
      commit("setProducts", data);
    });
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
