<template>
	<div class="navbar">
		<ScaleTransition :duration="200">
		<Login :register="toggleRegister" v-if="loggingIn" :closeModal="toggleLogin" />
		</ScaleTransition>
		<ScaleTransition :duration="200">
		<Register :login="toggleLogin" v-if="registering" :closeModal="toggleRegister" />
		</ScaleTransition>
		<div
			class="navbar__container"
			:class="
				scrolledBy ? 'navbar--theme navbar--fixed' : 'navbar--transparent'
			"
		>
			<ul class="navbar__container-items">
				<!-- todo -->
				<div class="navbar__logo">
					<img
						src="https://dcassetcdn.com/design_img/3136635/606087/606087_17349263_3136635_50b8542e_thumbnail.png"
						alt="logo"
					/>
				</div>
				<div class="navbar__links">
					<router-link to="/">
						<li>Home</li>
					</router-link>
					<router-link to="/products">
						<li>Products</li>
					</router-link>
					<router-link to="/events">
						<li>Events</li>
					</router-link>
					<router-link to="/cart"><li>Cart</li></router-link>
				</div>
				<div v-if="$store.state.auth.resolved" class="navbar__ctas">
					<NavbarPanel :close="toggleOptions" v-if="options" />
					<!-- <div style="background-color: white; position: absolute; top: 100%; border-radius: 3px;" class="d">
            
          </div> -->
					<a
						v-if="$store.state.auth.user"
						class="navbar__cta-link--options"
					>
						<img
							@click="toggleOptions"
							src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png"
							alt="avatar"
						/>
					</a>
					<a v-if="!$store.state.auth.user" class="navbar__cta-link">
						<li>
							<span @click="toggleLogin">Login</span>
						</li>
					</a>
				</div>
				<Spinner v-else />
			</ul>
		</div>
	</div>
</template>

<script>
import cookieMixin from "@/mixins/cookiesMixin"
import Login from "@/components/Auth/Login"
import Register from "@/components/Auth/Register"
import NavbarPanel from "@/components/NavbarPanel"
import { ShoppingCartIcon } from "vue-feather-icons"
export default {
	components: {
		Login,
		Register,
		NavbarPanel,
		ShoppingCartIcon
	},
	mixins: [cookieMixin],
	data() {
		return {
			scrollPosition: 0,
			loading: false,
			registering: false,
			loggingIn: false,
			options: false
		}
	},
	methods: {
		toggleLogin() {
			this.loggingIn = !this.loggingIn
		},
		toggleRegister() {
			this.registering = !this.registering
		},
		toggleOptions() {
			this.options = !this.options
		},
		updateScroll() {
			this.scrollPosition = window.scrollY
		}
	},
	computed: {
		scrolledBy() {
			if (this.scrollPosition > 80) {
				return true
			}
			return false
		}
	},
	mounted() {
		window.addEventListener("scroll", this.updateScroll)
	}
}
</script>

<style lang="scss">
.navbar__cta-link {
	cursor: pointer;
}
</style>
