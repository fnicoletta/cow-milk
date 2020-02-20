<template>
  <Layout>
    <Modal v-if="showModal" :closeModal="closeModal" />
    <div class="home main-wrapper">
      <h1 class="text-center title-color">
        Naturally fed. Naturally crafted. Naturally good.
      </h1>
      <h2 class="text-center">
        Producing handcrafted cheeses and cream-line milk from our own dairy,
        ​using a natural and balanced rotational grazing system.
      </h2>

      <div class="home__products-header">
        <h3>Top Selling Products:</h3>
      </div>

      <div v-if="featuredProducts" class="home__featured-products text-center">
        <div
          :key="index"
          v-for="(product, index) in featuredProducts.data.slice(0, 3)"
          class="home__featured-products-item"
        >
          <router-link
          @click="$store.commit('products/setProduct', product)"
            :to="{
              path: `/products/${product.name.split(' ').join('-')}`,
              props: { product }
            }"
          >
            <img :src="product.image" :alt="product.name" />
            <span class="home__featured-products-item-title">{{
              product.name
            }}</span>
          </router-link>
        </div>
      </div>

      <div class="btn__container">
        <router-link to="/products">
          <button class="button button--transparent">Shop Now</button>
        </router-link>
      </div>
    </div>
  </Layout>
</template>

<script>
import Modal from "@/components/Modal";
export default {
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    }
  },
  computed: {
    featuredProducts() {
      return this.$store.state.products.all;
    }
  },
  mounted() {
    if (!this.$store.state.auth.user) {
      this.showModal = true;
    }
  },
  components: {
    Modal
  },
	created () {
		document.title = "Home"
	}
};
</script>

<style lang="scss"></style>
