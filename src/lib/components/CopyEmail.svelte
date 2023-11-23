<script lang="ts">
	import Icon from './Icon.svelte';

	export let email: string;
	let copySuccessInfoVisible = false;

	function saveToClipboard() {
		navigator.clipboard.writeText(email);
		copySuccessInfoVisible = true;
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
		on:keyup={(e) => handleKeyPress(e)}
		on:click={() => saveToClipboard()}
		on:focusout={() => handleFocusOut()}
		class="copy-link"
	>
		<div class="icon-wrapper">
			<Icon svg="copy" size="parent" color="dark-grey" />
		</div>
		Adresse kopieren
	</button>

	{#if copySuccessInfoVisible}
		<div aria-live="polite" class="copy-success-info">Kopiert</div>
	{/if}
</div>

<style lang="scss">
	.wrapper {
		margin-top: 0.625rem;
		display: flex;
		gap: 0.125rem;
	}

	.copy-link {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		border: none;
		background-color: transparent;
		color: var(--color-grey);

		cursor: pointer;

		padding: 0.25rem 0.25rem 0.25rem 0.125rem;

		&:focus,
		&:hover {
			outline: 2px solid var(--color-black);
		}

		.icon-wrapper {
			width: 0.9375rem;
			height: 1.25rem;
		}
	}

	.copy-success-info {
		background-color: var(--color-black);
		color: var(--color-white);
		outline: 2px solid var(--color-black);

		padding: 0.25rem 0.625rem;
		font-size: 0.875rem;
	}
</style>
