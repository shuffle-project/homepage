<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import MetaTags from '$lib/components/MetaTags.svelte';
	import { notificationMessage } from '$lib/store';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	function onHandleGlobalKeypress(e: KeyboardEvent) {
		if (e.key !== 'Escape') return;
		if ($notificationMessage !== '') {
			notificationMessage.set('');
		}
	}
</script>

<MetaTags />

<Header />

<main>
	<slot />
</main>

<Footer />

{#key $notificationMessage}
	<div
		transition:fly={{ duration: 600, easing: quintOut, y: 100 }}
		class="test"
		aria-hidden={$notificationMessage === ''}
		class:hidden={$notificationMessage === ''}
	>
		<p role="alert">
			<span>{$notificationMessage}</span>
			<strong>In die Zwischenablage kopiert</strong>
		</p>
		<button
			tabindex={$notificationMessage === '' ? -1 : 0}
			on:click={() => notificationMessage.set('')}
			aria-label="Zwischenablage-Benachrichtigung schließen"
		>
			<Icon svg="close" color="black" size="30" />
			<span class="escape-key-info" aria-hidden="true">esc</span>
		</button>
	</div>
{/key}

<svelte:window on:keyup={(e) => onHandleGlobalKeypress(e)} />

<style lang="scss" global>
	@import './../scss/_main.scss';

	.test {
		position: fixed;
		inset: auto 0 0 0;
		z-index: 100;
		// background-color: var(--color-black);
		background-color: var(--color-yellow);
		margin-inline: auto;

		max-width: 20rem;
		height: 4.5rem;

		color: var(--color-white);

		display: flex;
		align-items: center;
		justify-content: space-between;
		// opacity: 100%;

		&.hidden {
			// transform: translateY(100%);
			opacity: 0%;
			pointer-events: none;
		}

		p {
			color: var(--color-black);
			display: flex;
			flex-direction: column;
			padding: 0 1.25rem;
			margin: 0;

			span:first-child {
				font-size: 0.875rem;
				color: rgba(var(--color-black-rgb), 0.8);
			}
		}

		button {
			width: 2.5rem;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-right: 0.625rem;

			&:focus-visible {
				outline: 2px solid var(--color-black);
			}

			.escape-key-info {
				font-size: 0.75rem;
				color: rgba(var(--color-black-rgb), 0.7);
				height: 0.625rem;
				line-height: 20%;
			}
		}
	}

	main {
		padding-bottom: 3.125rem;
	}
</style>
