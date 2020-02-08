<template>
	<div class="container__footer">
		<h2 class="footer-title text-center">Footer</h2>
		<div class="icon-container">
			<facebook-icon class="icon"></facebook-icon>
			<twitter-icon class="icon"></twitter-icon>
			<instagram-icon class="icon"></instagram-icon>
			<mail-icon class="icon"></mail-icon>
		</div>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
			dolorum odio eos at asperiores quis ipsa harum vero, labore molestias
			temporibus minima voluptatibus! Officia, iusto! Similique magni iure
			sit id, deleniti sapiente doloremque ratione voluptatem molestiae quod
			ipsum asperiores modi ipsam. Velit repellendus illum ducimus officiis.
			Ipsa sunt id praesentium eaque suscipit repellendus. Aliquam, animi
			suscipit repudiandae natus ipsam eius adipisci harum nobis porro qui ad
			at reiciendis nulla alias explicabo asperiores nisi nihil quisquam
			fuga, blanditiis quam eos dolores debitis exercitationem. Saepe enim
			deleniti possimus et, assumenda inventore atque, incidunt cumque fuga
			modi dicta veniam fugit debitis
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

<style lang="scss">
.container__footer {
	background: $brown;
	color: white;
	border: solid $brown 3px;
}

.icon-container {
	display: flex;
	justify-content: center;
}

.icon {
	font-size: 20px;
	margin: 0 8px;
	padding: 4px;
	border: 1px solid white;
	border-radius: 5px;
	cursor: pointer;
	transition: 0.5s;

	&:hover {
		color: $brown;
		background: white;
	}
}

.footer-title {
	margin: 15px;
}
</style>
