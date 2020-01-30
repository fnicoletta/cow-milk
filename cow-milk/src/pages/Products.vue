<template>
  <div class="products container main-wrapper">
      Products
  </div>
</template>

<script>
export default {
mounted () {
  this.$store.dispatch('products/getAllProducts')
  console.log(this.$store)
}
}
</script>

<style>

</style>
