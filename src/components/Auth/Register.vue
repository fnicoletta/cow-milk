<template>
  <WhiteModal :closeModal="closeModal">
      Register
  </WhiteModal>
</template>

<script>
import WhiteModal from "@/components/Common/WhiteModal";
export default {
    props: {
    closeModal: {
      type: Function,
      default: () => {}
    }
  },
    components: {
        WhiteModal
    }
}
</script>

<style>

</style>