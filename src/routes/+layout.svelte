<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import MetaTags from '$lib/components/MetaTags.svelte';
</script>

<MetaTags />

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="scss" global>
	@import './../scss/_main.scss';
</style>
