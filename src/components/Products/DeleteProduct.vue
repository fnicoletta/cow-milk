<template>
  <WhiteModal
    :closeModal="toggle"
    :title="`Delete Confirmation for ${product.name}`"
  >
    <div class="delete-product text-center">
      <h2>
        
        Delete {{ product.name }}?
        </h2>
      <button @click="deleteProduct" class="button button--success">Yes, delete it</button>
      <button @click="toggle" class="button button--secondary">No, keep it</button>
    </div>
  </WhiteModal>
</template>

<script>
import WhiteModal from "@/components/Common/WhiteModal";

export default {
  components: {
    WhiteModal
  },
  props: {
    toggleDeleting: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    toggle() {
      if (this.product) {
        this.$store.commit("products/setDeleting", null);
        document.body.classList.remove("modal-open")
      }
    },
    deleteProduct() {
      const tempName = this.product.name
      this.$store.products.dispatch('products/delete', this.product)
      if (this.$store.state.products.res === "success") {
        alert("success")
      } else {
        alert('failed')
      }
    }
  },
  computed: {
    product() {
      if (this.$store.state.products.deleting) {
        return this.$store.state.products.deleting;
      }
    }
  }
};
</script>

<style lang="scss">
.delete-product {
  h2 {
    margin: 5px;
  }
  button {
    margin: 0 2px;
    padding: 10px;
  }
}

</style>
