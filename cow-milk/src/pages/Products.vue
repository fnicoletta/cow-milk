<template>
  <div class="products container main-wrapper">
    <Loading v-if="loading" />
    <ProductsList :products="products.data" />
    <pagination :data="products" @pagination-change-page="getResults"></pagination>
  </div>
</template>

<script>
import ProductsList from '../components/Products/ProductsList';
import Loading from '../components/Misc/Loading';
export default {
  components: {
    ProductsList,
    Loading,
  },
  data() {
    return {
      products: {},
      loading: false
    };
  },
  methods: {
    setProducts () {
      this.products = this.$store.state.products.all
    },
    getResults(page = 1) {
      this.loading = true
			this.$edgewood.get('/products?page=' + page)
				.then(response => {
          console.log(response)
          this.products = response.data;
          this.loading = false
				});
		}
  },
  mounted() {
    this.$store.dispatch("products/getAllProducts");
    this.setProducts()
  }
};
</script>

<style></style>
