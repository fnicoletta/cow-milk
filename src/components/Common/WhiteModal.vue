<template>
  <ScreenOverlay :center="true">
    <div class="modal--white">
      <div class="modal--white__close"><span @click="closeModal">X</span></div>
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
