<template>
	<div class="card">
		<div v-if="showProductModal">
			<ProductModal :close="toggleModal" />
		</div>
		<div @click="toggleModal()" class="card-cta">
			See Product
		</div>
		<div v-if="premade" class="card-content">
			<div class="card-image">
				<img :src="image" alt="" />
			</div>
			<div class="card-footer">
				{{ footer }} <br />
				{{ setCurrencyType('en', 'USD') }}
			</div>
		</div>
	</div>
</template>

<script>
import ProductModal from '@/components/Products/ProductModal'
import SetCurrencyType from '@/mixins/currencyMixin'
export default {
	components: {
		ProductModal,
	},
	data() {
		return {
			showProductModal: false,
		}
	},
	methods: {
		toggleModal() {
			this.showProductModal = !this.showProductModal
		},
	},
	props: {
		footer: {
			type: String,
			default: '',
		},
		image: {
			type: String,
			default: '',
		},
		premade: {
			type: Boolean,
			default: true,
		},
	},
	mixins: [SetCurrencyType],
}
</script>

<style lang="scss">
.card {
	border: 1px solid gray;
	cursor: pointer;
	position: relative;
	transition: $default-timing;
	&:hover {
		transform: scale(1.03);
		.card-cta {
			opacity: 1;
			height: 50px;
		}
	}
}
.card-image {
	img {
		width: 100%;
		height: 225px;
	}
}
.card-cta {
	position: absolute;
	bottom: 0%;
	text-align: center;
	height: 0px;
	width: 100%;
	background-color: $cream;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	color: $black;
	transition: $default-timing ease-in;
	opacity: 0;
	&:hover {
		background-color: darken($cream, 8%);
	}
}

.card-footer {
	padding: 5px;
	text-align: center;
}
img {
	max-width: 100%;
}
</style>
