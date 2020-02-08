<template>
	<Layout>
		<div class="home main-wrapper">
			<h1 class="text-center">
				Naturally fed. Naturally crafted. Naturally good.
			</h1>
			<h2 class="text-center">
				Producing handcrafted cheeses and cream-line milk from our own
				dairy, ​using a natural and balanced rotational grazing system.
			</h2>

			<div class="home__products-header">
				<h3>Top Selling Products:</h3>
			</div>

			<div
				v-if="featuredProducts"
				class="home__featured-products text-center"
			>
				<div
					:key="index"
					v-for="(product, index) in featuredProducts.data.slice(0, 3)"
					class="home__featured-products-item"
				>
					<img :src="product.image" :alt="product.name" />
					<span class="home__featured-products-item-title">{{
						product.name
					}}</span>
				</div>
			</div>
			<router-link to="/products">
				<div class="btn__container">
					<button class="button--transparent">Shop Now</button>
				</div>
			</router-link>
		</div>
	</Layout>
</template>

<script>
export default {
	data() {
		return {}
	},
	methods: {
		getProducts() {
			if (!this.featuredProducts) {
				this.$store.dispatch('products/getAllProducts')
			}
		},
	},
	computed: {
		featuredProducts() {
			return this.$store.state.products.all
		},
	},
	mounted() {
		this.getProducts()
	},
}
</script>

<style lang="scss"></style>
