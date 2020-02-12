<template>
  <ScreenOverlay :center="true">
    <div class="loading">
      <h1 v-if="message">{{ message }}</h1>
      <h1 v-else>Loading</h1>
      <div class="spinner">
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>
</div>
    </div>
  </ScreenOverlay>
</template>

<script>
import ScreenOverlay from "./ScreenOverlay";
export default {
  components: {
    ScreenOverlay
  },
  props: {
    message: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss">
.loading {
    color: white;
    display: flex;
    align-items: center;
    h1 {
      margin-right: 3px;
    }
}
.spinner {
  margin: 0px auto 0;
  width: 70px;
  text-align: center;
  margin-top: 20px;
}

.spinner > div {
  width: 18px;
  height: 18px;
  background-color: white;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1s infinite ease-in-out both;
  animation: sk-bouncedelay 1s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}
</style>
