<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '../Icon.svelte';

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
<dialog
	inert
	bind:this={menu}
	aria-label="Hauptmenü"
	on:click|stopPropagation={(e) => handleBackdropClick(e)}
>
	<div class="menu-header">
		<button
			autofocus
			type="button"
			on:click|stopPropagation={() => toggleDisplay()}
			aria-label="Hauptmenü schließen"
		>
			<Icon svg="close" size="parent" />
		</button>
		<img src="/logos/shuffle-logo.svg" alt="" aria-hidden="true" />
	</div>
	<div class="content-wrapper">
		<ul>
			<li>
				<a href="/">Team</a>
			</li>
			<li>
				<a href="/">Aktuelles</a>
			</li>
			<li>
				<a href="/">Kontakt</a>
			</li>
			<li>
				<a href="/">Alle Publikationen</a>
			</li>
		</ul>
	</div>
</dialog>

<style lang="scss">
	dialog {
		display: grid;
		grid-template-rows: auto 1fr;
		margin: 0;
		padding: 0;
		min-inline-size: 20rem;
		height: 100%;
		max-block-size: 100vh;
		box-sizing: border-box;
		overflow: hidden;

		border: none;
		box-shadow: -10px 0 20px rgba(var(--color-black-rgb), 0.1);

		position: fixed;
		inset: 0 -20rem 0 auto;
		opacity: 100%;

		&[open] {
			right: 0;
		}

		&:not([open]) {
			pointer-events: none;
			opacity: 0%;
			transition: opacity 0s;
			transition-delay: 0.3s;
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

		background: var(--color-blue-gradient);

		display: flex;
		justify-content: space-between;
		align-items: center;

		button {
			padding: 0;
			width: 1.875rem;
			aspect-ratio: 1;
		}
	}

	.content-wrapper {
		overflow-y: auto;
		max-block-size: 100%; /* safari */
		overscroll-behavior-y: contain;

		ul {
			margin: 0;
			padding: var(--outer-spacing);

			li {
				list-style-type: none;
				margin-block: 1.875rem;

				a {
					text-decoration: none;
					color: var(--color-black);
					font-weight: bold;
				}
			}
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		dialog {
			@keyframes animation-slide-out-right {
				from {
					transform: translateX(-100%);
				}
				to {
					transform: translateX(0%);
				}
			}

			animation: animation-slide-out-right 0.4s ease-out;
		}

		dialog[open] {
			@keyframes animation-slide-in-right {
				from {
					transform: translateX(100%);
				}
				to {
					transform: translateX(0%);
				}
			}

			animation: animation-slide-in-right 0.4s ease-out;
		}
	}
</style>
