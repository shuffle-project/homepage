<script lang="ts">
	import Icon from './Icon.svelte';

	interface Props {
		email: string;
	}

	let { email }: Props = $props();
	let copySuccessInfoVisible = $state(false);

	function saveToClipboard() {
		setTimeout(async () => {
			await navigator.clipboard.writeText(email);
			copySuccessInfoVisible = true;
		});
	}

	function handleFocusOut() {
		if (copySuccessInfoVisible) {
			copySuccessInfoVisible = false;
		}
	}

	function handleKeyPress(event: KeyboardEvent) {
		if (event.code === 'Escape' && copySuccessInfoVisible) copySuccessInfoVisible = false;
	}
</script>

<div class="wrapper">
	<button
		onkeyup={(e) => handleKeyPress(e)}
		onclick={() => saveToClipboard()}
		onfocusout={() => handleFocusOut()}
	>
		<div class="icon-wrapper">
			<Icon svg="copy" size="parent" color="dark-grey" />
		</div>
		Adresse kopieren
	</button>

	{#if copySuccessInfoVisible}
		<div aria-live="polite" class="copy-success-info"><strong>Kopiert</strong></div>
	{/if}
</div>

<style lang="scss">
	.wrapper {
		margin-top: 0.625rem;
		display: flex;
		gap: 0.125rem;
	}

	button {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		color: var(--color-grey);

		padding: 0.25rem 0.25rem 0.25rem 0.125rem;

		.icon-wrapper {
			width: 0.9375rem;
			height: 1.25rem;
		}
	}

	.copy-success-info {
		background-color: var(--color-yellow);
		color: var(--color-black);

		padding: 0.25rem 0.625rem;
		font-size: 0.875rem;
	}
</style>
