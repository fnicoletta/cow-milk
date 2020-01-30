<template>
  <ScreenOverlay :center="true">
    <div class="loading">
      <h1>Loading...</h1>
    </div>
  </ScreenOverlay>
</template>

<script>
import ScreenOverlay from "./ScreenOverlay";
export default {
  components: {
    ScreenOverlay
  }
};
</script>

<style>
.loading {
    color: white;
}
</style>
