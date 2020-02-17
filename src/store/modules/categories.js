import { edgewood } from "../../apis/axios";

const state = {
  all: null
};

const getters = {

}

const actions = {
  getCategories({ commit }) {
    edgewood
      .get("/categories")
      .then(({ data }) => {
        commit("setCategories", data);
      })
      .catch(err => {
        alert("Something went wrong...");
        console.log(err);
      });
  }
};

const mutations = {
  setCategories(state, categories) {
    state.all = categories;
  }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
