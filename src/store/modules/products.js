import { edgewood } from "../../apis/axios";
// initial state
const state = {
  all: null,
  original: null,
  single: null,
  formProduct: null,
  deleting: null,
  sizes: [],
  categories: [],
  loading: false
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
  },
  productHandler({commit}, {product, action}) {
    commit("setLoading", true)
    const fd = new FormData();
    fd.append('id', product.id)
    fd.append('name', product.name)
    fd.append('description', product.description)
    fd.append('price', product.price)
    fd.append('category', product.category)
    fd.append('size', product.size)
    fd.append('photo', product.image)
    if (action === 'modify') {
      edgewood.post("/products/update", fd)
      .then(({data}) => {
        console.log(data)
        commit('setLoading', false)
      })
      .catch(err => {
        console.log(err)
        commit('setLoading', false)
      })
    }
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
  },
  setLoading(state, bool) {
    state.loading = bool
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
