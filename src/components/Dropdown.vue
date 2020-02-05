<template>
	<div class="dropdown-container">
		<h3>Not from around here?</h3>
		<div class="dropdown-content">
			<div class="dropdown-btn button" @click="dropped = !dropped">
				Countries
			</div>
			<div v-if="dropped" class="menu">
				<div
					v-for="(places, i) in countries"
					:key="i"
					class="dropdown-items"
				>
					<a href="#">{{ places.name }}</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dropped: false,
			countries: [
				{
					name: 'USA',
					location: 'us',
					currency: 'USD',
				},
				{
					name: 'Europe',
					location: 'de',
					currency: 'EUR',
				},
				{
					name: 'UK',
					location: 'uk',
					currency: 'GBP',
				},
				{
					name: 'Mexico',
					location: 'mx',
					currency: 'MXN',
				},
				{
					name: 'Canada',
					location: 'ca',
					currency: 'CAD',
				},
				{
					name: 'Palestine',
					location: 'ps',
					currency: 'ILS',
				},
				{
					name: 'Thailand',
					location: 'th',
					currency: 'THB',
				},
			],
		}
	},
}
</script>

<style lang="scss"></style>
