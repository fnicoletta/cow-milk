<template>
	<Layout>
		<transition name="fade">
		<div v-if="removing" class="notification notification-success">
			<span class="cart__removed-text">{{ removing }} Removed</span> <span class="notification-icon"><i class="fas fa-check"></i></span>
		</div>
		</transition>
		<div class="cart-container">
			<h1 class="text-center title-color">My Cart</h1>
			<div class="cart" v-if="shoppingCart.length">
				<div
					class="cart__items"
					v-for="products in shoppingCart"
					:key="products.cartID"
				>
					<img :src="products.image" />
					<div class="cart__items-info">
						<h4>{{ products.name }}({{ products.size }}) <br /></h4>
						<h4>
							Quantity:
							<select
								@change="saveQuantity()"
								class="default-select"
								name="quantity"
								id="quantity"
								v-model="products.quantity"
							>
								<option
									:key="quantity"
									v-for="quantity in 20"
									:value="quantity"
								>
									{{ quantity }}
								</option>
							</select>
							<br />
						</h4>
						<h4>Total: ${{ (products.price * products.quantity).toFixed(2) }}</h4>
					</div>
					<div class="button__container">
						<button @click="saveItem" class="btn-link">
							Save for later
						</button>
						<button @click="removeItem(products)" class="btn-link">
							Remove
						</button>
					</div>
				</div>
				<div class="cart__total text-center">
					Total ${{ cartTotal }}
				</div>
				<div class="button__container">
					<button class="btn-checkout button button--transparent">
						Checkout
					</button>
				</div>
			</div>
			<div class="text-center" v-else>
				<h2>Cart is empty :(</h2>
				<router-link to="/products"
					><button class="btn-shopping button button--transparent">
						Add to Cart
					</button></router-link
				>
			</div>
		</div>
	</Layout>
</template>

<script>
import chz1 from "../static/cheese_1.jpg"
export default {
	data() {
		return {
			removing: ''
		}
	},
	methods: {
		removeItem(products) {
			this.removing = products.name
			this.$store.dispatch("cart/removeItem", products.cartID)
			this.$store.dispatch("cart/saveCart")
			const self = this;
            setTimeout(() => {
                self.removing = '';
            }, 2000);
		},
		saveItem() {
			alert("saved")
		},
		saveQuantity() {
			this.$store.dispatch("cart/saveCart")
		}
	},
	computed: {
		shoppingCart() {
			return this.$store.state.cart.cart
		},
		cartTotal() {
			let total = 0
			this.shoppingCart.forEach((cartItem) => {
				total += cartItem.price * cartItem.quantity
			})
			return total.toFixed(2)
		}
	}
}
</script>

//
<style lang="scss">
.cart-container {
	max-width: 80%;
	margin: auto;
}

.cart {
	display: flex;
	flex-direction: column;
}

.cart__items {
	display: flex;
	background: $cream;
	border: 1px $red solid;
	margin: 1vh 0;
	img {
		max-height: 200px;
		border: 3px solid $red;
	}
}

.button__container {
	display: flex;
	flex-direction: column-reverse;
	align-items: flex-end;
	width: 100%;
	.btn-link {
		justify-content: flex-end;
		margin: 10px;
	}
}

.cart__items-info {
	margin: auto 15px;
	h4 {
		white-space: nowrap;
	}
}

.btn-shopping {
	margin-bottom: 20px;
}

.btn-checkout {
	margin: 10px auto;
}

@include small(down) {
	.cart__items {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		width: 100%;
	}
}
</style>
