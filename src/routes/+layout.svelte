<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import MetaTags from '$lib/components/MetaTags.svelte';
	import { notificationMessage } from '$lib/store';
	import { deviceHasTouchScreen } from '$lib/utils/utils';
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let notificationCloseFocus = false;

	function onHandleGlobalKeypress(e: KeyboardEvent) {
		if (e.key !== 'Escape') return;
		if ($notificationMessage !== '') {
			notificationMessage.set('');
		}
	}

	let touchscreen = false;
	onMount(() => {
		touchscreen = deviceHasTouchScreen();
	});
</script>

<MetaTags />

<Header />

<main>
	<slot />
</main>

<Footer />

<div aria-live={!notificationCloseFocus ? 'polite' : 'off'}>
	{#key $notificationMessage}
		<div
			transition:fly={{ duration: 600, easing: quintOut, y: 100 }}
			class="test"
			aria-hidden={$notificationMessage === ''}
			class:hidden={$notificationMessage === ''}
		>
			<p>
				<span>{$notificationMessage.split('=')[0]}</span>
				<strong>In die Zwischenablage kopiert</strong>
				<span class="sr-only">Escape-Taste um Benachrichtigung zu schließen</span>
			</p>
			<button
				tabindex={$notificationMessage === '' ? -1 : 0}
				on:click={() => notificationMessage.set('')}
				on:focusin={() => (notificationCloseFocus = true)}
				on:focusout={() => (notificationCloseFocus = false)}
				aria-label={notificationCloseFocus ? 'Zwischenablage-Benachrichtigung schließen' : ''}
			>
				<Icon svg="close" color="black" size="30" />
				<span class="escape-key-info" aria-hidden="true">esc</span>
			</button>
		</div>
	{/key}
</div>

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
