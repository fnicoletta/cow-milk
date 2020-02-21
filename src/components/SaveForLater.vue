<template>
	<div class="saved-items__container">
		<h3>Saved for later:</h3>
		<div v-if="savedItems.length">
			<div v-for="items in savedItems" :key="items.id">
				<div>Item: {{ items[0].name }}</div>
				<div>Quantity: {{ items[0].quantity }}</div>
			</div>
		</div>
		<div v-else>
			<h5>No saved items...</h5>
		</div>
	</div>
</template>

<script>
export default {
	name: "SaveForLater",
	computed: {
		savedItems() {
			return this.$store.state.cart.saved
		}
	}
}
</script>

<style lang="scss">
.saved-items__container {
	border: 2px solid $red;
}
</style>
