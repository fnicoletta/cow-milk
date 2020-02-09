<template>
  <WhiteModal :center-title="true" :closeModal="closeModal" :title="`Add ${product.name} to cart`">
    <div class="add-to-cart">
      <div class="add-to-cart-image text-center">
        <img :src="product.image" :alt="product.name" />
      </div>
      <h4 class="text-center">Description</h4>
      <p class="text-center">
        {{ product.description }}
      </p>
      <form @submit.prevent="addToCart">
      <div class="add-to-cart__select">
        <label for="size"> Size </label><br />
        <select @change="updateSize($event)" class="default-select" name="size" id="size">
          <option :key="index" v-for="(size, index) in sizes" :value="size">
            {{ size }}
          </option>
        </select>
      </div>
      <div class="add-to-cart__select">
        <label for="quantity">Quantity </label><br />
        <select @change="updateQuantity($event)" class="default-select" name="quantity" id="quantity">
          <option :key="quantity" v-for="quantity in 20" :value="quantity">
            {{ quantity }}
          </option>
        </select>
      </div>
      <div class="add-to-cart__submit">
        <button type="submit" class="button button--secondary">Add to Cart</button>
      </div>
      </form>
    </div>
  </WhiteModal>
</template>

<script>
import WhiteModal from "@/components/Common/WhiteModal";
export default {
  components: {
    WhiteModal
  },
  mounted () {
    if (this.product) {
      this.cartSize = this.product.size.split('*')[0]
    }
  },
  data () {
    return {
      cartQuantity: 1,
      cartSize: ''
    }
  },
  props: {
    product: {
      type: Object,
      default: () => {}
    },
    closeModal: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    updateQuantity (e) {
      this.cartQuantity = e.target.value
    },
    updateSize (e) {
      this.cartSize = e.target.value
    },
    addToCart () {
      // go to store and send cart batch
      console.log(this.cartBatch)
    },
  },
  computed: {
    sizes() {
      if (this.product) {
        return this.product.size.split("*");
      }
      return [];
    },
    cartBatch () {
      return {
        id: this.product.id,
        name: this.product.name,
        quantity: this.cartQuantity,
        cartID: `${this.product.id}-${this.cartSize}`,
      }
    }
  }
};
</script>

<style></style>
