<template>
  <div id="app">
    <Navbar />
    <router-view>

    </router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
  }
  .main-wrapper {
    margin: 2em auto;
    padding: 0 2em;
    max-width: 1170px;
  }
</style>
