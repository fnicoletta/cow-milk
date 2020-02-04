<template>
  <div class="auth-base">
      <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.auth-base {
    display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: $cream;
  .default-input, button {
      width: 400px;
  }
  .default-input {
      margin: 10px 0;
  }
}
</style>