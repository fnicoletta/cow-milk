<template>
  <div @click="close()">
    Modal
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
