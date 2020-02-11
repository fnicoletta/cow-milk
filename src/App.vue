<template>
	<div id="app">
		<transition mode="out-in" name="fade">
			<router-view> </router-view>
		</transition>
	</div>
</template>

<script>
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import cookieMixin from "@/mixins/cookiesMixin"
export default {
	name: "app",
	mixins: [cookieMixin],
	components: {
		Navbar,
		Footer
	},
	mounted() {
		if (this.getCookie("jwt-token")) {
			this.$store.dispatch("auth/getUser", this.getCookie("jwt-token"))
		} else {
			this.$store.commit("auth/setResolved", true)
		}
	}
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #333333;
	background: rgb(252, 244, 237);
	background: radial-gradient(
		circle,
		rgba(252, 244, 237, 1) 0%,
		rgba(252, 244, 237, 1) 35%,
		rgba(245, 216, 190, 1) 100%
	);
	font-family: "Montserrat", sans-serif;
}
.main-wrapper {
	margin: 2em auto;
	padding: 0 2em;
	max-width: 1170px;
}
.fade-enter-active,
.fade-leave-active {
	transition-duration: 0.2s;
	transition-property: opacity;
	transition-timing-function: ease-in;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}
</style>
