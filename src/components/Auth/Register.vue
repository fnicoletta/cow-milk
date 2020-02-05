<template>
  <AuthModal :closeModal="closeModal">
      Register
  </AuthModal>
</template>

<script>
import AuthModal from "@/components/Auth/AuthModal"
export default {
    props: {
    closeModal: {
      type: Function,
      default: () => {}
    }
  },
    components: {
        AuthModal
    }
}
</script>

<style>

</style>