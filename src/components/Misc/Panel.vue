<template>
  <div class="panel">
    <span @click="close" class="panel__close">X</span>

    <slot />
  </div>
</template>

<script>
export default {
  props: {
    close: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<style></style>
