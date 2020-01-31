<template>
  <div id="app">
    <Modal v-if="showModal" :closeModal="closeModal" />
    <transition mode="out-in" name="fade">
      <router-view> </router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "@/components/Modal";
export default {
  name: "app",
  components: {
    Navbar,
    Footer,
    Modal
  },
  data() {
    return {
      showModal: true
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
}
.main-wrapper {
  margin: 2em auto;
  padding: 0 2em;
  max-width: 1170px;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.20s;
  transition-property: opacity;
  transition-timing-function: ease-in;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
