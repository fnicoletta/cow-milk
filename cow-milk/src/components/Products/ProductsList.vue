<template>
  <div class="products-list">
    <div class="products-list__items">
      <div
        v-for="product in products.data"
        :key="product.id"
        class="products-list__item"
      >
        {{ product.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style></style>
