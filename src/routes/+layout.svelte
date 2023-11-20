<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="scss" global>
	@import './../scss/_main.scss';
</style>
