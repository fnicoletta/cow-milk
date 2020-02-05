<template>
  <ScreenOverlay :center="true">
    <div class="auth-modal">
      <div class="auth-close"><span @click="closeModal">X</span></div>
      <slot />
    </div>
  </ScreenOverlay>
</template>

<script>
import ScreenOverlay from "@/components/Misc/ScreenOverlay";
export default {
  props: {
    closeModal: {
      type: Function,
      default: () => {}
    }
  },
  components: {
    ScreenOverlay
  }
};
</script>

<style></style>
