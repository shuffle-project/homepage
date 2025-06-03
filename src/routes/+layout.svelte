<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import MetaTags from '$lib/components/MetaTags.svelte';
	import { getGlobalState, setGlobalState } from '$lib/globalState.svelte';
	import { deviceHasTouchScreen } from '$lib/utils/utils';
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	setGlobalState();
	const globalState = getGlobalState();

	let { children } = $props();

	let notificationCloseFocus = $state(false);

	function onHandleGlobalKeypress(e: KeyboardEvent) {
		if (e.key !== 'Escape') return;
		if (globalState.notificationMessage !== '') {
			globalState.resetNotificationMessage();
		}
	}

	let touchscreen = false;
	onMount(() => {
		touchscreen = deviceHasTouchScreen();

		if (localStorage.getItem('allowYouTubeEmbed') === 'true') {
			globalState.allowYouTubeEmbed = true;
		}
	});
</script>

<MetaTags />

<Header />

<main>
	{@render children?.()}
</main>

<Footer />

<div aria-live={!notificationCloseFocus ? 'polite' : 'off'}>
	{#key globalState.notificationMessage}
		<div
			transition:fly={{ duration: 600, easing: quintOut, y: 100 }}
			class="notification"
			aria-hidden={globalState.notificationMessage === ''}
			class:hidden={globalState.notificationMessage === ''}
		>
			<p>
				<span>{globalState.notificationMessage.split('=')[0]}</span>
				<strong>In die Zwischenablage kopiert</strong>
				<span class="sr-only">Escape-Taste um Benachrichtigung zu schließen</span>
			</p>
			<button
				tabindex={globalState.notificationMessage === '' ? -1 : 0}
				onclick={() => globalState.resetNotificationMessage()}
				onfocusin={() => (notificationCloseFocus = true)}
				onfocusout={() => (notificationCloseFocus = false)}
				aria-label={notificationCloseFocus ? 'Zwischenablage-Benachrichtigung schließen' : ''}
			>
				<Icon svg="close" color="black" size="30" />
				<span class="escape-key-info" aria-hidden="true">esc</span>
			</button>
		</div>
	{/key}
</div>

<svelte:window onkeyup={(e) => onHandleGlobalKeypress(e)} />

<style lang="scss" global>
	@import './../scss/_main.scss';

	.notification {
		position: fixed;
		inset: auto 0 0 0;
		z-index: 100;
		background-color: var(--color-yellow);
		margin-inline: auto;

		max-width: 20rem;
		height: 4.5rem;

		color: var(--color-white);

		display: flex;
		align-items: center;
		justify-content: space-between;

		&.hidden {
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
