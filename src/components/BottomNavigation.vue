<template>
	<div class="navbar__bottom">
		<div class="navbar__bottom__container">
			<router-link to="/">
				<div class="navbar__bottom__link">
					<i class="fas fa-home"></i>
					<span>Home</span>
				</div>
			</router-link>
			<router-link to="/products">
				<div class="navbar__bottom__link">
					<i class="fab fa-product-hunt"></i>
					<span>
						Products
					</span>
				</div>
			</router-link>
			<router-link to="/events">
				<div class="navbar__bottom__link">
					<i class="far fa-calendar-alt"></i>
					<span>
						Events
					</span>
				</div>
			</router-link>
			<router-link to="/cart">
				<div class="navbar__bottom__link">
					<i class="fas fa-shopping-cart"></i>
					<span>
						Cart
					</span>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style></style>
