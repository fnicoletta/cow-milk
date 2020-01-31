<template>
  <div class="products-list">
    <div class="products-list__items">
      <div
        v-for="(product, i) in products.data"
        :key="product.id"
        class="products-list__item"
        :style="`animation-duration: 1.${i * 2}s`"
      >
        <Card :image="product.image" :footer="product.name" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../Common/Card";
export default {
  components: {
    Card
  },
  props: {
    products: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style></style>
