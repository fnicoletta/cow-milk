<template>
  <div v-on-clickaway="close" class="panel">
    <span @click="close" class="panel__close">X</span>

    <slot />
  </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway';

export default {
  directives: {
    onClickaway: onClickaway,
  },
  props: {
    close: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<style></style>
