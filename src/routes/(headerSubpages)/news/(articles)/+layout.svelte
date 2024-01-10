<script lang="ts">
	import BackLink from '../../../../lib/components/BackLink.svelte';
</script>

<div class="top-space" />

<div class="page-content">
	<div class="backlink-wrapper">
		<BackLink linkTo="/news" label="Zurück zur Übersicht" paddingLeft={false} />
	</div>

	<slot />
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

		margin: 0 auto;
	}
</style>
