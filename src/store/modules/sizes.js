import { edgewood } from "../../apis/axios";

const state = {
  all: null
};

const getters = {
  listing: (state) => (size) => {
    return state.all.filter(each => each.id !== size)
  },
  findInitial: (state) => (size) => {
    return state.all.find(each => each.id === size)
  }
}

const actions = {
  async getSizes({ commit }) {
    await edgewood
      .get("/sizes")
      .then(({ data }) => {
        commit("setSizes", data);
      })
      .catch(err => {
        alert("Something went wrong...");
        console.log(err);
      });
  }
};

const mutations = {
  setSizes(state, sizes) {
    state.all = sizes;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};