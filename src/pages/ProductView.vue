<template>
<Layout>
  <div class="product-view text-center">
      <h1>My Product</h1>
    {{ product.name }}<br>
    <img :src="product.image" :alt="product.name"><br>
    {{product.description}}
    {{product.price}}
  </div>
</Layout>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.state.products.all.data.find(
        prods => prods.name === this.$route.params.product.split("-").join(" ")
      );
    }
  }
};
</script>

<style></style>
