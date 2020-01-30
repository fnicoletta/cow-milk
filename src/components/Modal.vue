<template>
	<div class="modal" :class="{ 'is-closed': isClosed }">
		<span @click="isClosed = true" class="close">&times;</span>
		<div class="modal__header">
			<h1>Join the CowMilk Family™ to recieve exclusive offers!</h1>
			<hr />
			<h3>Enter your email below to gain access to:</h3>
			<ul>
				<li>Tons of coupons</li>
				<li>Member exclusive sales</li>
				<li>Early access to new products</li>
				<li>A free CowMilk™ welcoming gift! ($15 value)</li>
			</ul>
		</div>
		<form class="modal__form">
			<input placeholder="youremail@website.com" type="email" />
			<button>Join Now!</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isClosed: false,
		}
	},
}
</script>

<style lang="scss">
.modal {
	display: block;
	position: relative;
	background-color: $brown;
	color: $white;
	margin: 0 auto;
	width: 40%;
	height: 60vh;
	z-index: 10000;
	text-align: center;
	border-radius: 5%;
	box-shadow: 5px 5px 10px grey;
	animation: modal-grow 0.8s;

	&__header {
		padding: 15px;
	}
}

.close {
	font-size: 20px;
	padding: 0 5px;
	float: right;
	font-weight: bold;
	margin: 10px 10px 0 0;
	transition: 0.3s;
	border: solid white 1px;
	cursor: pointer;

	&:hover {
		border-radius: 50%;
	}
}

.is-closed {
	display: none;
}

ul {
	text-align: left;
	margin-left: 90px;
}

@keyframes modal-grow {
	from {
		opacity: 0%;
		left: 20px;
	}
	to {
		opacity: 100%;
		left: 0;
	}
}
</style>
