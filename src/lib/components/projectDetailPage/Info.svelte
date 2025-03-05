<script lang="ts">
	interface Props {
		infoMessage: string;
	}

	let { infoMessage }: Props = $props();
</script>

<div class="wrapper">
	<h2>Wichtig</h2>
	<p>{infoMessage}</p>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		max-width: 60rem;
		padding: 1.875rem;
		box-sizing: border-box;
		margin-top: 3.125rem;
		border: 1px dashed var(--color-yellow);
		// background-color: var(--color-yellow);

		h2 {
			background-color: var(--color-yellow);
			display: inline-block;
			padding-inline: 0.25rem;
		}
	}
</style>
