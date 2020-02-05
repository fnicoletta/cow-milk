<template>
  <Layout>
    <div class="products main-wrapper">
      <template v-if="products && !loading">
        <ProductsList :products="products" />
        <pagination
          :data="products"
          @pagination-change-page="getResults"
        ></pagination>
      </template>
      <div v-if="loading" class="skeleton">

      </div>
      <Loading v-if="loading" />
    </div>
  </Layout>
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
      if (!this.products) {
        this.$store.dispatch("products/getAllProducts");
      }
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

<style lang="scss">
.skeleton {
  background-color: rgb(219, 219, 219);
  height: 600px;

}
</style>
