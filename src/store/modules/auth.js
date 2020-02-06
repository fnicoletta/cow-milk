import { edgewood } from "../../apis/axios";
// initial state
const state = {
  user: null,
  resolved: false
};

// getters
const getters = {
  getProducts: state => {
    return state.all;
  }
};

// actions
const actions = {
  async getUser({ commit }, token) {
      console.log(token)
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
    await edgewood.post("/users/getAuthedUser", {}, headers)
    .then(({ data }) => {
      commit("setUser", data.user);
      commit("setResolved", true)
    })
    .catch(err => {
        console.log(err)
    })
    ;
  },
//   getPaginatedProducts({ commit }, page = 1) {
//     alert("happened");
//     console.log("page", page);
//   }
};

// mutations
const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setResolved(state, bool) {
    state.resolved = bool
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
