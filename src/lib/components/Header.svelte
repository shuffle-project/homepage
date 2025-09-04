<script lang="ts">
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import MenuButton from './sidebarMenu/MenuButton.svelte';

	let scrolling = $state(false);
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
		<div class="header">
			<a href={resolve('/')} class="logo">
				<img src={resolve('/logos/shuffle-logo.svg')} alt="" aria-hidden="true" />
				<span class="shuffle-logo-text">SHUFFLE</span>
			</a>
			<nav class="desktop-nav">
				<ul>
					<li>
						<a href={resolve('/#projektergebnisse')}>Projektergebnisse</a>
					</li>
					<li>
						<a href={resolve('/webinaraufnahmen')}>Webinaraufnahmen</a>
					</li>
					<li>
						<a href={resolve('/team')}>Team</a>
					</li>
					<li>
						<a href={resolve('/aktuelles')}>Aktuelles</a>
					</li>
					<li>
						<a href={resolve('/kontakt')}>Kontakt</a>
					</li>
					<li>
						<a href={resolve('/publikationen')}>Publikationen</a>
					</li>
				</ul>
			</nav>

			<nav class="menu-button-wrapper">
				<MenuButton />
			</nav>
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

	@media (max-width: 54.9375rem) {
		header {
			.header {
				.desktop-nav,
				ul {
					display: none;
				}
			}
		}
	}

	@media (min-width: 55rem) {
		header {
			.header {
				.menu-button-wrapper {
					display: none;
				}
			}
		}
	}
</style>
