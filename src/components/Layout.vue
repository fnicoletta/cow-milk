<template>
  <div>
    <Navbar />
    <slot />
   <BottomNavigation />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNavigation from "@/components/BottomNavigation";
export default {
  components: {
    Navbar,
    BottomNavigation,
    Footer
  }
};
</script>

<style></style>
