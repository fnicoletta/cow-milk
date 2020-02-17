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
  loading: false,
  res: ""
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
      commit("setProducts", data);
    });
  },
  async productHandler({ commit }, { product, action }) {
    commit("setRes", "");
    commit("setLoading", true);
    const findProduct = state.all.data.find(prod => prod.id === product.id);
    const fd = new FormData();
    fd.append("id", product.id);
    fd.append("name", product.name);
    fd.append("description", product.description);
    fd.append("price", product.price);
    fd.append("category", product.category);
    fd.append("size", product.size);
    fd.append("photo", product.image);
    if (action === "modify") {
      await edgewood
        .post("/products/update", fd)
        .then(({ data }) => {
          commit("setProduct", findProduct);
          commit("updateProduct", product);
          commit("setLoading", false);
          commit("setRes", "success");
        })
        .catch(err => {
          console.log(err);
          commit("setLoading", false);
          commit("setRes", "fail");
        });
    }
  },
  delete({ commit }, { id }) {
    commit("setRes", "");

    edgewood
      .post("/products/delete", { id })
      .then(({ data }) => {
        commit("setRes", "success");
        commit("setLoading", false);
      })
      .catch(err => {
        commit("setRes", "fail");
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
  },
  setLoading(state, bool) {
    state.loading = bool;
  },
  setRes(state, val) {
    state.res = val;
  },
  updateProduct(state, { name, description, price, src, category, size }) {
    state.single.name = name;
    state.single.description = description;
    state.single.price = price;
    state.single.size = size;
    state.single.category = category;
    if (src) {
      state.single.image = src;
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
