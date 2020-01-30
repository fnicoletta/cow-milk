<template>
  <div class="products container main-wrapper">
    <Loading v-if="loading" />
    <ProductsList v-if="products" :products="products" />
    <pagination
      v-if="products"
      :data="products"
      @pagination-change-page="getResults"
    ></pagination>
  </div>
</template>

<script>
import ProductsList from "../components/Products/ProductsList";
import Loading from "../components/Misc/Loading";
export default {
  components: {
    ProductsList,
    Loading
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    getProducts() {
      this.$store.dispatch("products/getAllProducts");
    },
    getResults(page = 1) {
      this.loading = true;
      this.$edgewood.get("/products?page=" + page).then(response => {
        this.$store.commit("products/setProducts", response.data);
        this.loading = false;
      });
    }
  },
  computed: {
    products() {
      return this.$store.state.products.all;
    }
  },
  mounted() {
    this.getProducts();
  }
};
</script>

<style></style>
