<template>
	<div id="app">
		<Modal v-if="showModal" :closeModal="closeModal" />
		<transition mode="out-in" name="fade">
			<router-view> </router-view>
		</transition>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import cookieMixin from '@/mixins/cookiesMixin'
export default {
	name: 'app',
	mixins: [cookieMixin],
	components: {
		Navbar,
		Footer,
		Modal,
	},
	data() {
		return {
			showModal: true,
		}
	},
	methods: {
		closeModal() {
			this.showModal = false
		},
	},
	mounted () {
	 if (this.getCookie('jwt-token')) {
		 this.$store.dispatch('auth/getUser', this.getCookie('jwt-token'))
	 } else {
		 this.$store.commit('auth/setResolved', true)
	 }
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
