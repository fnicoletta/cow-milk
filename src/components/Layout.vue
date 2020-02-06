<template>
  <div>
    <Navbar />
    <slot />
    <div class="navbar__bottom">
      <div class="navbar__bottom__container">
        <div class="navbar__bottom__link">Link1</div>
        <div class="navbar__bottom__link">Link1</div>
        <div class="navbar__bottom__link">Link1</div>
        <div class="navbar__bottom__link">Link1</div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
    components: {
        Navbar,
        Footer
    }
};
</script>

<style></style>
