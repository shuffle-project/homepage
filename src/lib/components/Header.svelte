<script lang="ts">
	import { onMount } from 'svelte';
	import MenuButton from './sidebarMenu/MenuButton.svelte';

	let scrolling = false;
	let throttle = false;

	onMount(() => {
		scrolling = window.scrollY > 0;

		window.addEventListener('scroll', () => {
			if (throttle) return;
			throttle = true;
			setTimeout(() => {
				if (window.scrollY > 10 && !scrolling) {
					scrolling = true;
				}

				if (window.scrollY < 10 && scrolling) {
					scrolling = false;
				}

				throttle = false;
			}, 300);
		});
	});
</script>

<div class="header-wrapper" class:scrolling>
	<header>
		<a href="/" class="logo">
			<img src="/logos/shuffle-logo.svg" alt="" aria-hidden="true" />
			<span class="shuffle-logo-text">SHUFFLE</span>
		</a>

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

		<div class="menu-button-wrapper">
			<MenuButton />
		</div>
	</header>
	<hr aria-hidden="true" />
</div>

<style lang="scss">
	.header-wrapper {
		position: fixed;
		z-index: 10;
		inset: 0 0 auto 0;
		background-color: transparent;
		transition: background-color 0.6s ease-in-out;

		hr {
			opacity: 0%;
			transition: opacity 0.6s ease-in-out;
		}

		&.scrolling {
			background-color: var(--color-white);

			hr {
				opacity: 100%;
			}
		}
	}

	header {
		margin: 0.625rem var(--outer-spacing);
		height: var(--header-height);

		display: flex;
		justify-content: space-between;

		.logo {
			display: flex;
			align-items: center;
			gap: 0.3125rem;

			text-decoration: none;

			&:hover {
				span {
					text-decoration: underline;
				}
			}

			img {
				width: 2.5rem;
				height: 2.5rem;
			}
		}

		ul {
			display: flex;
			align-items: center;
			gap: 1.25rem;

			list-style: none;
			padding: 0;

			a {
				font-weight: bold;
				color: var(--color-black);
				text-decoration: none;
			}
		}

		.menu-button-wrapper {
			display: flex;
			align-items: center;
		}
	}

	hr {
		width: 100%;
		background-color: var(--color-blue-line);
		height: 1px;
		border: none;
		margin: 0;
	}

	@media (max-width: 40.5625rem) {
		header {
			ul {
				display: none;
			}
		}
	}

	@media (min-width: 40.625rem) {
		header {
			.menu-button-wrapper {
				display: none;
			}
		}
	}
</style>
