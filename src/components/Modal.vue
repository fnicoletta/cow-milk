<template>
	<div class="modal modal-overlay">
		<span @click.prevent="closeModal" class="close">&times;</span>
		<div class="modal__content">
			<div class="modal__header">
				<h1>Join the CowMilk Family™ to recieve exclusive offers!</h1>
				<hr />
				<h3>Enter your email below to gain access to:</h3>
				<ul class="modal__list">
					<li>Tons of coupons</li>
					<li>Member exclusive sales</li>
					<li>Early access to new products</li>
					<li>A free CowMilk™ welcoming gift! ($15 value)</li>
				</ul>
			</div>
			<form class="modal__form">
				<input
					class="default-input"
					placeholder="youremail@website.com"
					type="email"
				/>
				<button class="button button--squared">Join Now!</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	props: {
		closeModal: {
			type: Function,
			default: () => {},
		},
	},
}
</script>

<style lang="scss"></style>
