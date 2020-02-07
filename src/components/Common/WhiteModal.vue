<template>
  <ScreenOverlay :center="true">
    <div class="modal--white">
      <div class="modal--white__header">
        <div>
          <h3 class="modal--white__title">{{ title }}</h3>
        </div>
        <div class="modal__white__close">
          <span @click="closeModal">X</span>
        </div>
      </div>
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
    },
    title: {
      type: String,
      default: ""
    }
  },
  components: {
    ScreenOverlay
  }
};
</script>

<style>
.modal--white__header {
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
}
</style>
