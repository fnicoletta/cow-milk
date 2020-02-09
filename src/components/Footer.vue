<template>
	<div class="container__footer">
		<h2 class="footer-title text-center">Contact Us</h2>
		<div class="icon-container">
			<a
				style="color: antiquewhite"
				href="https://www.facebook.com"
				target="_blank"
				><facebook-icon class="icon"></facebook-icon
			></a>
			<a
				style="color: antiquewhite"
				href="https://www.twitter.com"
				target="_blank"
				><twitter-icon class="icon"></twitter-icon
			></a>
			<a
				style="color: antiquewhite"
				href="https://www.instagram.com"
				target="_blank"
				><instagram-icon class="icon"></instagram-icon
			></a>
			<a
				style="color: antiquewhite"
				href="https://www.gmail.com"
				target="_blank"
				><mail-icon class="icon"></mail-icon
			></a>
		</div>
		<p class="text-center">
			Visit our on-farm retail store for<br />
			handcrafted cheese from grass-fed cows
		</p>
		<hr class="hr" />
		<p class="text-center footer__mobile-text" style="opacity: 65%">
			123 Milky Way &bull; San Jose, CA 95123 &bull; Phone: 555.555.5555
			&bull; Fax: 555.555.5555 &bull; email@address.com
		</p>
	</div>
</template>

<script>
import {
	FacebookIcon,
	TwitterIcon,
	InstagramIcon,
	MailIcon
} from "vue-feather-icons"
export default {
	components: {
		FacebookIcon,
		TwitterIcon,
		InstagramIcon,
		MailIcon
	}
}
</script>

<style lang="scss"></style>
