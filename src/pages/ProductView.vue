<template>
  <Layout>
    <!-- <transition name="fade">
      <AddToCart
        v-if="addingToCart"
        :closeModal="toggleAddToCart"
        :product="product"
      />
    </transition> -->
    <div v-if="product" class="product-view text-center">
      <h1 class="title-color">{{ product.name }}</h1>
      <div class="product-view__container">
        <div class="product-view__image">
          <img :src="product.image" :alt="product.name" /><br />
        </div>
        <div class="product-view__content">
          <div>
            <div>
              <span :key="index" v-for="(star, index) in 5"
                ><i class="fas fa-star"></i></span
              ><br />
              8 Customer Reviews
            </div>

            <p class="product-view__description">
              <template v-if="product.description">{{
                product.description
              }}</template>
              <template v-else>No description provided.</template>
            </p>
          </div>
          <div class="product-view__cta">
            <div class="product-view__inputs">
              <div class="product-view__input">
                Qty
                <input
                  class="default-input"
                  type="number"
                  v-model="qty"
                  max="20"
                />
              </div>
              <div class="product-view__input">
                Size
                <select
                  @change="updateSize($event)"
                  class="default-select"
                  name="size"
                  id="size"
                >
                  <option
                    v-for="(size, index) in sizes"
                    :key="size"
                    :value="size"
                  >
                    {{ size }}
                    <template v-if="index > 0"
                      >(+${{ (index * 2).toFixed(2) }})</template
                    >
                  </option>
                </select>
              </div>
            </div>
            <span class="w-100 d-block"> ${{ product.price.toFixed(2) }} </span>
            <button @click="addToCart" class="button button--red">
              Add to Cart
            </button>
          </div>
          <div class="product-view__category">
            <span>Category:</span> <span>{{ product.catname }}</span>
          </div>
        </div>
      </div>
      <hr />
      <h3>You may also like</h3>
      <div class="product-view__more">
        <div
          class="product-view__more-item"
          :key="prod.id"
          v-for="prod in $store.state.products.original.data
            .filter(p => p.id !== product.id && p.category === product.category)
            .slice(0, 4)"
        >
          <span class="bold d-block">{{ prod.name }}</span>
          <img
            @click="
              $router.push(`/products/${prod.name.split(' ').join('-')}`),
                $store.commit('products/setProduct', prod)
            "
            :src="prod.image"
            :alt="prod.name"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <Loading :message="$store.state.products.single" />
    </div>
  </Layout>
</template>

<script>
import Loading from "@/components/Misc/Loading";
import AddToCart from "@/components/Products/AddToCart";
import cookieMixin from "@/mixins/cookiesMixin";

export default {
  components: {
    Loading,
    AddToCart
  },
  mixins: [cookieMixin],
  mounted() {
    if (this.product) {
      this.setCookie("prod", JSON.stringify(this.product), 999);
      document.title = `View - ${this.product.name}`
    }
  },
  data() {
    return {
      addingToCart: false,
      qty: 1,
      cartSize: this.initializeSize,
      extraPrice: 0
    };
  },
  methods: {
    addToCart() {
      // go to store and send cart batch
      this.$store.dispatch("cart/addToCart", this.cartBatch);
      this.$store.dispatch("cart/saveCart");
      this.$swal({
        title: `${this.product.name} added to cart successfully!`,
        icon: "success",
        timer: 2000
      });
    },
    updateSize(e) {
      this.extraPrice = this.sizes.indexOf(e.target.value) * 2;
      this.cartSize = e.target.value;
    }
  },
  computed: {
    product() {
      if (this.$store.state.products.single) {
        return this.$store.state.products.single;
      }
      return JSON.parse(this.getCookie('prod'));
    },
    initializeSize() {
      if (this.product) {
        return this.sizes[0];
      }
      return null;
    },
    sizes() {
      if (this.product) {
        return this.product.size.split("*");
      }
      return [];
    },
    cartBatch() {
      return {
        id: this.product.id,
        price: this.product.price + this.extraPrice,
        name: this.product.name,
        image: this.product.image,
        quantity: this.qty,
        size: this.cartSize ? this.cartSize : this.initializeSize,
        cartID: `${this.product.id}-${this.cartSize}`
      };
    }
  }
};
</script>

<style lang="scss"></style>
