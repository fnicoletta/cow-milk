<template>
	<Layout>
		<div class="cart-container">
			<h1 class="text-center">My Cart</h1>
			<div class="cart" v-if="products > 0">
				<div class="cart__items" v-for="(products, i) in cart" :key="i">
					<img :src="require('../static/cheese_1.jpg')" />
					<div class="cart__items-info">
						<h4>name <br /></h4>
						<h4>
							Quantity:
							<input type="number" :value="5" min="1" max="20" />
							<br />
						</h4>
						<h4>Total: $20</h4>
					</div>
					<div class="button__container">
						<button @click="saveItem" class="btn-link">
							Save for later
						</button>
						<button @click="removeItem" class="btn-link">Remove</button>
					</div>
				</div>
			</div>
			<div class="text-center" v-else>
				<h2>Cart is empty :(</h2>
				<router-link to="/products"
					><button class="btn-shopping button--transparent">
						Add to Cart
					</button></router-link
				>
			</div>
		</div>
	</Layout>
</template>

<script>
import chz1 from "../static/cheese_1.jpg"
import { mapGetters } from "vuex"
export default {
	data() {
		return {
			cart: [...PRODUCTS]
		}
	},
	methods: {
		removeItem() {
			alert("removed")
		},
		saveItem() {
			alert("saved")
		}
	}
	//computed: mapGetters([PRODUCTS])
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
	display: inline-flex;
	background: $cream;
	border: 1px $red solid;
	margin: 1vh 0;
	img {
		max-height: 300px;
		max-width: 300px;
		border: 3px solid $red;
	}
}

.button__container {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 100%;
	.btn-link {
		justify-content: flex-end;
		margin: 10px;
	}
}

.cart__items-info {
	margin: auto 15px;
}

.btn-shopping {
	margin-bottom: 20px;
}

@include small(down) {
	.cart__items {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}
}
</style>
