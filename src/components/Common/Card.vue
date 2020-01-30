<template>
  <div class="card">
    <div v-if="premade" class="card-content">
      <div class="card-image">
        <img :src="image" alt="" />
      </div>
    </div>
    <div class="card-footer">
      {{ footer }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    footer: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    premade: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style>
img {
    max-width: 100%;
}
</style>
