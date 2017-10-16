<template>
	<div>indexpage</div>
</template>

<script type="es6">
	export default {
		created() {
			this.$api.get('topics', null, r => {
				console.log(r)
			})
		}
	}
</script>

<style>

</style>