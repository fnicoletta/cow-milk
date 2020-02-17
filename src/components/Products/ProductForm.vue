<template>
  <WhiteModal :closeModal="toggle" title="Product Form">
    <div class="product-form">
      <div class="text-center">
        <template v-if="!url">
          <div v-if="image" class="product-form__img">
            <img :src="image" :alt="`${product.name}'s image`" />
          </div>
          <label for="image" class="default-file-upload">
            <span>Click to Change Image</span>
            <input @change="getURL" type="file" name="image" id="image" />
          </label>
        </template>
        <template v-else>
          <div class="product-form__img">
            <img :src="url" alt="preview before upload" />
          </div>
          <button @click="url = ''" class="button">
            Cancel and Retain Old Image
          </button>
        </template>
      </div>
      <form>
        <label for="name">Name</label>
        <input v-model="name" type="text" class="default-input" />
        <label for="description">Description</label>
        <textarea cols="20" v-model="description" type="text" class="default-input" />
        <label for="price">Price</label>
        <input v-model="price" type="text" class="default-input" />
        <label for="category">
          Category
        </label>
        <select
          v-model="category"
          name="category"
          id="category"
          class="default-select"
        >
          <option
            :value="each.id"
            v-for="each in $store.state.categories.all"
            :key="each.id"
          >
            {{ each.catname }}
          </option>
        </select>
        <label for="size">Size</label>
        <select
          @change="updateSize"
          name="size"
          id="size"
          class="default-select"
        >
          <option v-if="val && val === size" :value="val.id">
            {{ val.size }} test
          </option>
          <option :key="each.id" v-for="each in sizes" :value="each.id">
            {{ sizeDisplay(each.size) }}
          </option>
        </select>
        <div class="product-form__submit">
          <button class="button button--success">
            Update {{ product.name }}
          </button>
        </div>
      </form>
    </div>
  </WhiteModal>
</template>

<script>
import WhiteModal from "@/components/Common/WhiteModal";
export default {
  data() {
    return {
      val: null,
      name: "",
      description: "",
      price: 0,
      image: "",
      category: null,
      url: ""
    };
  },
  components: {
    WhiteModal
  },
  props: {
    toggleFormProduct: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    toggle() {
      if (this.product) {
        this.$store.commit("products/setFormProduct", null);
      }
    },
    getURL(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    async getSizes() {
      if (!this.$store.state.sizes.all) {
        await this.$store.dispatch("sizes/getSizes");
        if (this.product) {
          this.val = this.product.size;
          this.val = this.$store.getters["sizes/findInitial"](this.val);
        }
      }
    },
    getCategories() {
      if (!this.$store.state.categories.all) {
        this.$store.dispatch("categories/getCategories");
      }
    },
    initializeForm() {
      if (this.product) {
        this.name = this.product.name;
        this.description = this.product.description;
        this.price = this.product.price.toFixed(2);
        this.image = this.product.image;
        this.category = this.product.category;
      }
    },
    sizeDisplay(size) {
      return size.split("*").join(", ");
    },
    updateSize(e) {
      this.val = e.target.value;
    },
    initializeSize(val) {
      return this.$store.getters["sizes/findInitial"](val);
    }
  },
  computed: {
    sizeHandler: {
      // getter
      get: function() {
        return this.val;
      },
      // setter
      set: function(newSize) {
        this.val = newSize;
      }
    },
    product() {
      if (this.$store.state.products.formProduct) {
        return this.$store.state.products.formProduct;
      }
    },
    size() {
      if (this.product) {
        return this.product.size;
      }
    },
    sizes() {
      if (this.$store.state.sizes.all) {
        return this.$store.getters["sizes/listing"](this.val);
      }
    }
  },
  mounted() {
    this.getSizes();
    this.getCategories();
    this.initializeForm();
  }
};
</script>

<style lang="scss">
.product-form {
  pointer-events: auto;
  .default-select {
    margin-left: 25px;
  }
  .product-form__select {
    margin-left: 25px;
  }
}
.product-form__img {
  img {
    width: 60%;
    height: 250px;
  }
}

.product-form__submit {
  text-align: center;
  margin-top: 8px;
  button {
    width: 90%;
  }
}
</style>
