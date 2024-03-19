<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from './Icon.svelte';

	let menu: HTMLDialogElement;

	export function toggleDisplay() {
		if (menu?.open) {
			menu?.close();
			document?.body.removeAttribute('style');
			menu?.setAttribute('inert', '');
		} else {
			document?.body.setAttribute('style', 'overflow:hidden');
			menu?.showModal();
		}
	}

	function handleBackdropClick(e: MouseEvent) {
		const dialogDimensions = menu?.getBoundingClientRect();
		if (
			e.clientX < dialogDimensions.left ||
			e.clientX > dialogDimensions.right ||
			e.clientY < dialogDimensions.top ||
			e.clientY > dialogDimensions.bottom
		) {
			toggleDisplay();
		}
	}

	onMount(() => {
		const menuAttrObserver = new MutationObserver((mutations, observer) => {
			mutations.forEach((mutation) => {
				if (mutation.attributeName === 'open') {
					const dialog: any = mutation.target;
					const isOpen = dialog.hasAttribute('open');
					if (!isOpen) return;
					dialog.removeAttribute('inert');

					//set focus
					const focusTarget = dialog.querySelector('[autofocus]');
					focusTarget ? focusTarget.focus() : dialog.querySelector('button').focus();
				}
			});
		});

		menuAttrObserver.observe(menu, {
			attributes: true
		});

		menu?.addEventListener('close', () => {
			if (document?.body.hasAttribute('style')) document.body.removeAttribute('style');
		});
	});
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- TODO make aria label dynamic -->
<dialog
	inert
	bind:this={menu}
	aria-label="Untertitel Einstellungen"
	on:click|stopPropagation={(e) => handleBackdropClick(e)}
>
	<div class="menu-header">
		<h1><slot name="headline" /></h1>
		<button
			autofocus
			type="button"
			on:click|stopPropagation={() => toggleDisplay()}
			aria-label="Fertig"
		>
			<Icon svg="close" size="parent" />
		</button>
	</div>
	<div class="content-wrapper" tabindex="0">
		<slot name="content" />
	</div>
</dialog>

<style lang="scss">
	dialog {
		display: grid;
		grid-template-rows: auto 1fr;
		margin: auto;
		padding: 0;
		min-inline-size: 20rem;
		width: 90%;
		max-inline-size: 40rem;

		height: 100%;
		max-block-size: 80vh;
		max-block-size: 80svh;
		box-sizing: border-box;
		overflow: hidden;

		border: none;
		box-shadow: -10px 0 20px rgba(var(--color-black-rgb), 0.1);

		position: fixed;
		inset: 0;
		opacity: 100%;

		&[open] {
			right: 0;
		}

		&:not([open]) {
			pointer-events: none;
			opacity: 0%;
		}

		&::backdrop {
			background: var(--color-backdrop);
			backdrop-filter: blur(5px);
			-webkit-backdrop-filter: blur(10px);
		}
	}

	.menu-header {
		padding: 0.625rem var(--outer-spacing);
		height: var(--header-height);

		border-bottom: 1px solid var(--color-blue-line);

		display: flex;
		justify-content: space-between;
		align-items: center;

		h1 {
			font-size: clamp(1.25rem, 1vw + 1rem, 1.375rem);
			margin: 0;
		}

		button {
			padding: 0;
			width: 2.5rem;
			aspect-ratio: 1;
		}
	}

	.content-wrapper {
		overflow-y: auto;
		max-block-size: 100%; /* safari */
		overscroll-behavior-y: contain;
	}

	@media (prefers-reduced-motion: no-preference) {
		dialog[open] {
			@keyframes animation-zoom-in {
				from {
					transform: scale(98%);
					opacity: 0%;
				}
				to {
					transform: scale(100%);
					opacity: 100%;
				}
			}

			animation: animation-zoom-in 0.2s ease-out;
		}
	}
</style>
