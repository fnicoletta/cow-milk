<template>
  <div :class="`screen-overlay ${classes} ${centerContent}`">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: ""
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    centerContent() {
      if (this.center === true) {
        return "screen-overlay--center";
      }
      return false;
    }
  }
  // mounted () {
  //     document.body.style.overflow = "hidden"
  // }
};
</script>

<style>
.screen-overlay {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  top: 0%;
  left: 0%;
}

.screen-overlay--center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
