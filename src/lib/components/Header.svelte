<script lang="ts">
	import { base } from '$app/paths';
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
					<p
		class="wip-info"
		style="background-color: #99bef5; text-align: center; padding: 0 1rem; margin: 0"
	>
		Diese Seite befindet sich noch in der Entwicklung. Bitte nur für interne Zwecke verwenden.
	</p>
		<div class="header">	
		<a href="{base}/" class="logo">
			<img src="{base}/logos/shuffle-logo.svg" alt="" aria-hidden="true" />
			<span class="shuffle-logo-text">SHUFFLE</span>
		</a>

		<ul>
			<li>
				<a href="{base}/team">Team</a>
			</li>
			<li>
				<a href="{base}/news">Aktuelles</a>
			</li>
			<li>
				<a href="{base}/contact">Kontakt</a>
			</li>
			<li>
				<a href="{base}/publications">Publikationen</a>
			</li>
		</ul>

		<div class="menu-button-wrapper">
			<MenuButton />
		</div>
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
		.header {
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
			.header {
				ul {
					display: none;
				}
			}
	
		}
	}

	@media (min-width: 40.625rem) {
		header {
			.header {
				.menu-button-wrapper {
					display: none;
				}
			}
			
		}
	}
</style>
