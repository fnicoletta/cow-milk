<template>
	<Layout>
		<div class="contact__container">
			<div class="contact__header">
				<h1>Contact Us</h1>
				<h3>
					Questions? Comments? Just want to say hi? Fill out our contact
					form and we'll have our people talk to your people
				</h3>
			</div>
			<form action="">
				<fieldset class="contact__form">
					<div class="contact__form-input-container">
						<input
							class="contact__form-input"
							type="text"
							placeholder="What does your mom call you?"
						/>
						<input
							class="contact__form-input"
							type="email"
							placeholder="Where should we contact you?"
						/>
					</div>
					<textarea
						class="contact__form-comments"
						cols="65"
						rows="10"
						placeholder="How can we help you?"
					></textarea>
					<button
						class="contact__button"
						@click.prevent="isSubmitted = true"
					>
						Submit
					</button>
				</fieldset>
			</form>
		</div>
		<div v-if="isSubmitted">
			<p>
				Thank you for contacting us! A member of our team will respond to
				you as soon as possible!
			</p>
		</div>
	</Layout>
</template>

<script>
export default {
	data() {
		return {
			isSubmitted: false
		}
	}
}
</script>

<style lang="scss"></style>
