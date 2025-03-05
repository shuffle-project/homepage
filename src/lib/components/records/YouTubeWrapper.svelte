<script lang="ts">
	import { base } from '$app/paths';
	import { allowYouTubeEmbed } from '$lib/store';
	interface Props {
		src?: string;
		linkToYouTube?: string;
		videoTitle?: string;
	}

	let { src = '', linkToYouTube = '', videoTitle = '' }: Props = $props();

	const randomId =
		Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
</script>

<div class="wrapper">
	{#if $allowYouTubeEmbed}
		<div class="content-size">
			<iframe
				width="100%"
				height="100%"
				{src}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
	{:else}
		<div class="not-allowed content-size">
			<div class="toggle-wrapper">
				<label
					>YouTube-Inhalte erlauben
					<input
						aria-describedby="privacy-{randomId}"
						type="checkbox"
						bind:checked={$allowYouTubeEmbed}
					/>
				</label>

				<p id="privacy-{randomId}" class="privacy-notice">
					Personenbezogene Daten können an Drittplattformen übermittelt werden, siehe unsere
					<a href="{base}/datenschutz">Datenschutzerklärung</a>.
				</p>
			</div>
		</div>
	{/if}
	<p class="link-to-youtube">
		Link zum
		<a rel="noopener" href={linkToYouTube}>
			<span>YouTube-Inhalt</span>
			<span class="sr-only">{videoTitle}</span>
		</a>
	</p>
</div>

<style lang="scss">
	.link-to-youtube {
		font-size: 0.875rem;
		margin: 0.25rem 0 0;
	}

	.content-size {
		aspect-ratio: 16/9;
	}

	.not-allowed {
		background-color: var(--color-light-blue);
		padding: var(--outer-spacing);
	}

	.toggle-wrapper {
		.privacy-notice {
			font-size: 0.875rem;
			margin: 0.625rem 0 0;
			max-width: 22rem;
		}

		label {
			cursor: pointer;
			font-weight: bold;
			display: flex;
			align-items: center;
			gap: 0.625rem;
		}

		input {
			appearance: none;
			-webkit-appearance: none;
			min-width: 3rem;
			height: 1.5rem;
			border: 1px solid var(--color-black);
			border-radius: 0;
			position: relative;
			background-color: var(--color-white);
			cursor: pointer;

			&::before {
				position: absolute;
				inset: 0;
				margin-block: auto;
				margin-left: 0.125rem;
				content: '';
				height: 1.125rem;
				width: 1.125rem;

				display: flex;
				justify-content: center;
				padding-top: 0.0625rem;
				box-sizing: border-box;

				background-color: var(--color-dark-grey);

				transition: all 0.2s ease-in-out;
			}

			&:checked {
				&::before {
					margin-left: 1.625rem;
					background-color: var(--color-black);

					content: url('/icons/check-white-small.svg');
				}
			}

			&:focus-visible {
				outline: 2px solid var(--color-black);
				outline-offset: 2px;
			}
		}
	}

	@media (max-width: 41.25rem) {
		.link-to-youtube {
			padding-inline: var(--outer-spacing);
		}
	}
</style>
