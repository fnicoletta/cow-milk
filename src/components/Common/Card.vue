<template>
	<!-- pass :premade="false" if you wanna use your own custom card content-->
	<div class="card">
		<template v-if="premade">
			<div v-if="showProductModal">
				<ProductModal :close="toggleModal" />
			</div>
			<div @click="toggleModal()" class="card-cta">
				<div class="card-overlay-content">
					{{ itemName }}
				</div>
				<div>
					{{ setCurrencyType(CODE, CURRENCY, COUNTRY) }}
				</div>
				<button class="button button--success">
					Add to Cart
				</button>
				<button class="button button--success">
					More Info
				</button>
			</div>
			<div class="card-content">
				<div class="card-image">
					<img :src="image" alt="" />
				</div>
			</div>
		</template>
		<template v-else>
			<slot />
		</template>
	</div>
</template>

<script>
import ProductModal from '@/components/Products/ProductModal'
import SetCurrencyType from '@/mixins/currencyMixin'
import { mapGetters } from 'vuex'
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
		itemName: {
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
	computed: mapGetters(['CODE', 'COUNTRY', 'CURRENCY']),
}
</script>

<style lang="scss">
.card {
	border: 1px solid gray;
	cursor: pointer;
	position: relative;
	transition: $default-timing;
	&:hover {
		// transform: scale(1.03);
		.card-cta {
			opacity: 1;
			height: 40%;
		}
	}
}
.card-image {
	img {
		width: 100%;
		height: 225px;
		@include medium('down') {
			height: 325px;
		}
	}
}
.card-see {
	margin-top: 3px;
}
.card-cta {
	position: absolute;
	bottom: 0%;
	text-align: center;
	height: 40px;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	overflow: hidden;
	// display: inline-flex;
	// align-items: center;
	// justify-content: center;
	text-align: center;
	color: $black;
	transition: $default-timing ease-in;
	// opacity: 0;
	color: white;
	button {
		margin: 5px 2px;
	}
	&:hover {
		// background-color: darken($cream, 8%);
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
