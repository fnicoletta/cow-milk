<template>
  <div class="products container main-wrapper">
    <div v-for="product in products.data" :key="product.id">
      <h1>{{ product.name }}</h1>
    </div>
    <pagination :data="products" @pagination-change-page="getResults"></pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: {}
    };
  },
  methods: {
    setProducts () {
      this.products = this.$store.state.products.all
    },
    getResults(page = 1) {
			this.$edgewood.get('/products?page=' + page)
				.then(response => {
          console.log(response)
					this.products = response.data;
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
