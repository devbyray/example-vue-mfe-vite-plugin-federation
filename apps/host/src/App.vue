<script setup>
// Remove the HelloWorld import - you don't need it anymore
</script>

<template>
	<div id="app">
		<nav>
			<RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink> |
			<RouterLink to="/products">Products</RouterLink> |
			<RouterLink to="/settings">Settings</RouterLink>
		</nav>
		<!-- This is where your pages will be rendered -->
		<RouterView />
	</div>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
