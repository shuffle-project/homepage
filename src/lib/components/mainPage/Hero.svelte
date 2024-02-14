<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	let mobileUserAgent = false;

	onMount(() => {
		mobileUserAgent = navigator.userAgent.includes('Mobile');
	});
</script>

<div class="hero-section" class:mobileUserAgent>
	<img src="{base}/logos/shuffle-logo.svg" alt="" aria-hidden="true" />
	<h1>SHUFFLE</h1>
	<p>Hochschulinitiative digitale Barrierefreiheit für Alle</p>
</div>

<style lang="scss">
	.hero-section {
		background: var(--color-blue-gradient);
		height: max(30rem, 70vh);

		display: flex;
		flex-direction: column;

		align-items: center;
		justify-content: center;

		img {
			width: 10rem;
			height: 10rem;
			margin-top: 4.375rem;
		}

		h1 {
			letter-spacing: 0.5rem;
			margin: 0.625rem 0;
		}

		p {
			font-size: clamp(1rem, 2vw + 1rem, 2rem);
			font-weight: 300;
			margin: 0;
			text-align: center;
			margin-inline: var(--outer-spacing);
		}

		&.mobileUserAgent {
			height: max(42rem);
		}
	}
</style>
