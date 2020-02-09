<template>
	<div>
		<div class="products-list">
			<div class="products-list__items">
				<div
					v-for="(product, i) in products.data"
					:key="product.id"
					class="products-list__item"
					:style="`animation-duration: 1.${i * 2}s`"
				>
					<Card :extra-props="product" :image="product.image" :item-name="product.name" />
				</div>
			</div>
		</div>
		<Dropdown />
	</div>
</template>

<script>
import Card from '../Common/Card'
import Dropdown from '@/components/Dropdown'
export default {
	components: {
		Card,
		Dropdown,
	},
	props: {
		products: {
			type: Object,
			default: () => {},
		},
	},
}
</script>

<style></style>
