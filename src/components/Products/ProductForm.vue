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
            <img :src="url.src" alt="preview before upload" />
          </div>
          <button @click="url = ''" class="button">
            Cancel and Retain Old Image
          </button>
        </template>
      </div>
      <form @submit.prevent="modifyProduct">
        <label for="name">Name</label>
        <input v-model="name" type="text" class="default-input" />
        <label for="description">Description</label>
        <textarea
          cols="20"
          v-model="description"
          type="text"
          class="default-input"
        />
        <label for="price">Price</label>
        <input v-model="price" type="text" class="default-input" />
        <template v-if="$store.state.categories.all && $store.state.sizes.all">
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
            v-if="val"
            @change="updateSize"
            name="size"
            id="size"
            class="default-select"
          >
            <option selected v-if="val === initialSize" :value="val.id">
              {{ sizeDisplay(val.size) }}
            </option>
            <option :key="each.id" v-for="each in sizes" :value="each.id">
              {{ sizeDisplay(each.size) }}
            </option>
          </select>
        </template>
        <div v-else class="d-f-c-h w-100">
          <Spinner color="black" />
        </div>
        <div v-if="!$store.state.products.loading" class="product-form__submit">
          <button class="button button--success">
            Update {{ product.name }}
          </button>
        </div>
        <div v-else class="d-f-c-h w-100">
          <Spinner color="black" />
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
      url: "",
      initialSize: null
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
      this.url = { src: URL.createObjectURL(file), imageObj: file };
    },
    async getSizes() {
      if (!this.$store.state.sizes.all) {
        await this.$store.dispatch("sizes/getSizes");
        this.val = this.$store.getters["sizes/findInitial"](this.val);
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
        this.price = this.product.price;
        this.image = this.product.image;
        this.category = this.product.category;
        this.val = this.product.sizes;
        if (this.$store.state.sizes.all) {
          this.val = this.$store.getters["sizes/findInitial"](this.val);
          this.initialSize = this.val;
        }
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
    },
    async modifyProduct() {
      const tempName = this.product.name;
      await this.$store.dispatch("products/productHandler", {
        product: this.currentProduct,
        action: "modify"
      });
      if (this.$store.state.products.res === "success") {
        this.$swal({
          title: `${tempName} has been updated!`,
          icon: "success"
        });
      } else {
        this.$swal({
          title: `Something went wrong...`,
          icon: "warning"
        });
      }
      this.toggle()
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
        return this.$store.getters["sizes/listing"](this.product.sizes);
      }
    },
    currentProduct() {
      return {
        id: this.product.id,
        name: this.name,
        description: this.description,
        price: this.price,
        category: this.category,
        size: typeof this.val === "string" ? this.val : this.val.id,
        image: this.url ? this.url.imageObj : ""
      };
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
    margin-left: 5%;
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
