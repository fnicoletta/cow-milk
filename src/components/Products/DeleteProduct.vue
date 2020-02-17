<template>
  <WhiteModal
    :closeModal="toggle"
    :title="`Delete Confirmation for ${product.name}`"
  >
    <div class="delete-product">
      {{ product }}
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

<style></style>
