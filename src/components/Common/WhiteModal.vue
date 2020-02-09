<template>
  <ScreenOverlay v-if="show" :center="true">
    <transition name="slide-up">
    <div v-if="show" v-on-clickaway="hideModal" class="modal--white">
      <div :class="!includeTitle ? 'modal__white--no-title' : ''" class="modal--white__header">
        <div v-if="centerTitle" class="filler"></div>
        <div>
          <h3 class="modal--white__title"><template v-if="includeTitle">{{ title }}</template></h3>
        </div>
        <div class="modal__white__close">
          <span @click="hideModal">X</span>
        </div>
      </div>
      <slot />
    </div>
    </transition>
  </ScreenOverlay>
</template>

<script>
import ScreenOverlay from "@/components/Misc/ScreenOverlay";
import { directive as onClickaway } from 'vue-clickaway';

export default {
   directives: {
    onClickaway: onClickaway,
  },
  methods: {
    hideModal () {
      this.closeModal()
      document.body.classList.remove("modal-open");
    }
  },
  props: {
    closeModal: {
      type: Function,
      default: () => {}
    },
    title: {
      type: String,
      default: ""
    },
    centerTitle: {
      type: Boolean,
      default: false
    },
    includeTitle: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  components: {
    ScreenOverlay
  },
  mounted () {
    if (this.show && this.closeModal) {
      document.body.classList.add("modal-open");
    }
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
