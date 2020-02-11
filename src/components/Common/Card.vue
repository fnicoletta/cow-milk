<template>
  <!-- pass :premade="false" if you wanna use your own custom card content-->
  <div class="card">
    <template v-if="premade">
      <transition name="fade">
        <WhiteModal
          v-if="moreInfo"
          :includeTitle="false"
          :closeModal="toggleMoreInfo"
        >
          <div style="display: flex; justify-content:center">
            {{ itemName }}
          </div>
        </WhiteModal>
      </transition>
      <transition name="fade">
        <AddToCart
          v-if="addingToCart"
          :closeModal="toggleAddToCart"
          :product="extraProps"
        />
      </transition>
      <div class="card-cta">
        <div class="card-overlay-content">
          {{ itemName }}
        </div>
        <div>
          {{ setCurrencyType(CODE, CURRENCY, COUNTRY, extraProps.price)}}
        </div>
        <button @click="toggleAddToCart()" class="button button--success">
          Add to Cart
        </button>
        <button @click="toggleMoreInfo()" class="button button--success">
          More Info
        </button>
      </div>
      <div class="card-content">
        <div class="card-image">
          <img :src="image" alt="" />
        </div>
      </div>
    </template>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script>
// import ProductModal from '@/components/Products/ProductModal'
import WhiteModal from "@/components/Common/WhiteModal";
import SetCurrencyType from "@/mixins/currencyMixin";
import AddToCart from "@/components/Products/AddToCart";
import { mapGetters } from "vuex";
export default {
  name: "Card",
  components: {
    WhiteModal,
    AddToCart
  },
  data() {
    return {
      moreInfo: false,
      addingToCart: false
    };
  },
  methods: {
    toggleMoreInfo() {
      this.moreInfo = !this.moreInfo;
    },
    toggleAddToCart() {
      this.addingToCart = !this.addingToCart;
    }
  },
  props: {
    itemName: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    premade: {
      type: Boolean,
      default: true
    },
    extraProps: {
      type: Object,
      default: () => {}
    }
  },
  mixins: [SetCurrencyType],
  computed: mapGetters(["CODE", "COUNTRY", "CURRENCY"])
};
</script>

<style lang="scss">
.card {
  border: 1px solid gray;
  cursor: pointer;
  position: relative;
  transition: $default-timing;
  &:hover {
    // transform: scale(1.03);
    .card-cta {
      opacity: 1;
      height: 40%;
    }
  }
}
.card-image {
  img {
    width: 100%;
    height: 225px;
    @include medium("down") {
      height: 325px;
    }
  }
}
.card-see {
  margin-top: 3px;
}
.card-cta {
  position: absolute;
  bottom: 0%;
  text-align: center;
  height: 40px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  // display: inline-flex;
  // align-items: center;
  // justify-content: center;
  text-align: center;
  color: $black;
  transition: $default-timing ease-in;
  // opacity: 0;
  color: white;
  button {
    margin: 5px 2px;
  }
}

.card-footer {
  padding: 5px;
  text-align: center;
}
img {
  max-width: 100%;
}
</style>
