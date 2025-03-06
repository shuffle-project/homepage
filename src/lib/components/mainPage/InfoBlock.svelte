<script lang="ts">
	import { base } from '$app/paths';
	import Icon from '../Icon.svelte';

	interface Props {
		headline: string;
		link: string;
	}

	let { headline, link }: Props = $props();
</script>

<div class="wrapper">
	<div class="info-block">
		<h2>{headline}</h2>
		<a href={base + link}>
			<span aria-hidden="true">Mehr Informationen</span>
			<span class="sr-only">Mehr Informationen über {headline}</span>
			<Icon svg="arrow-right" color="white" />
		</a>
	</div>
</div>

<style lang="scss">
	.wrapper {
		background: linear-gradient(transparent 50%, var(--color-white) 50%, var(--color-white) 100%);
		display: flex;
		justify-content: center;
	}

	.info-block {
		background-color: var(--color-black);
		color: var(--color-white);
		max-width: 32.5rem;
		margin-inline: var(--outer-spacing);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		text-align: center;

		padding: 2.5rem;

		h2 {
			color: var(--color-white);
		}

		a {
			margin-top: 1.25rem;
			border: 1px solid var(--color-white);
			padding: 0.75rem 1rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: var(--color-white);
			text-decoration: none;
			width: 100%;
			max-width: 19.5rem;
			box-sizing: border-box;
		}
	}
</style>
