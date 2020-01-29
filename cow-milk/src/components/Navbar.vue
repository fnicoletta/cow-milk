<template>
  <div class="navbar">
    <div class="navbar__container" :class="scrolledBy ? 'navbar--theme' : 'navbar--transparent'">
      <ul class="navbar__container-items">
        <router-link to="/">
          <li>Home</li>
        </router-link>
        <router-link to="/products">
          <li>Products</li>
        </router-link>
        <router-link to="/events">
          <li>Events</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },
  computed: {
    scrolledBy() {
      if (this.scrollPosition > 250) {
        return true;
      }
      return false;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>

<style lang="scss"></style>
