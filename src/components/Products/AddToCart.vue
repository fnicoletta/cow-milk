<template>
  <WhiteModal
    :center-title="true"
    :closeModal="hideModal"
    :title="`Add ${product.name} to cart`"
  >
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
          <select
            @change="updateSize($event)"
            class="default-select"
            name="size"
            id="size"
          >
            <option :key="index" v-for="(size, index) in sizes" :value="size">
              {{ size
              }}<template v-if="index > 0"
                >(+${{ (index * 2).toFixed(2) }})</template
              >
            </option>
          </select>
        </div>
        <div class="add-to-cart__select">
          <label for="quantity">Quantity </label><br />
          <select
            @change="updateQuantity($event)"
            class="default-select"
            name="quantity"
            id="quantity"
          >
            <option :key="quantity" v-for="quantity in 20" :value="quantity">
              {{ quantity }}
            </option>
          </select>
        </div>
        <div class="add-to-cart__total text-center">
          <span>Total ${{ (product.price + extraPrice).toFixed(2) }}</span>
        </div>
        <div class="add-to-cart__submit">
          <button type="submit" class="button button--secondary">
            Add to Cart
          </button>
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
  mounted() {
    if (this.product) {
      this.cartSize = this.product.size.split("*")[0];
    }
  },
  data() {
    return {
      cartQuantity: 1,
      cartSize: "",
      extraPrice: 0
    };
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
    updateQuantity(e) {
      this.cartQuantity = e.target.value;
    },
    updateSize(e) {
      this.extraPrice = this.sizes.indexOf(e.target.value) * 2;
      this.cartSize = e.target.value;
    },
    hideModal() {
      document.body.classList.remove("modal-open");
      this.closeModal();
    },
    addToCart() {
      // go to store and send cart batch
      this.$store.dispatch("cart/addToCart", this.cartBatch);
      this.$store.dispatch("cart/saveCart");
      this.$swal({
        title: `${this.product.name} added to cart successfully!`,
        icon: "success",
        timer: 2000
      });
      this.hideModal();
    }
  },
  computed: {
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
        quantity: this.cartQuantity,
        size: this.cartSize,
        cartID: `${this.product.id}-${this.cartSize}`
      };
    }
  }
};
</script>

<style></style>
