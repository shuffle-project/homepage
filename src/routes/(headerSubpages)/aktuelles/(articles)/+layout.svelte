<script lang="ts">
	import BackLink from '../../../../lib/components/BackLink.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="top-space"></div>

<div class="page-content">
	<div class="backlink-wrapper">
		<BackLink linkTo="/aktuelles" label="Zurück zur Übersicht" paddingLeft={false} />
	</div>

	{@render children?.()}
</div>

<style lang="scss">
	.top-space {
		height: 10rem;
		background: var(--color-blue-gradient);
	}

	.backlink-wrapper {
		margin-block: 1.875rem;
	}

	.page-content {
		max-width: var(--max-text-width);
		padding-inline: var(--outer-spacing);
		box-sizing: border-box;
		width: 100%;

		margin: 0 auto 1.875rem auto;
	}
</style>
