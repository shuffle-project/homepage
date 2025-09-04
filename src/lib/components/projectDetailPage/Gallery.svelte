<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Image } from '$lib/interfaces/project.interface';

	interface Props {
		gallery: Image[];
		projectId: string;
	}

	let { gallery, projectId }: Props = $props();
</script>

<div class="wrapper">
	<h2>Bildergalerie</h2>
	{#each gallery as image, i}
		<figure class="image-wrapper">
			<div class="image" role="group">
				<img id="img-{projectId}-{i}" src={resolve(`/gallery/${projectId}/${image.src}`)} alt="" />
			</div>
			<div class="line"></div>
			<figcaption class="description">
				<p>{image.description}</p>
			</figcaption>
		</figure>
	{/each}
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		max-width: 60rem;

		box-sizing: border-box;
		margin-top: 3.125rem;

		h2 {
			padding-inline: 1.875rem;
		}

		.image-wrapper {
			display: flex;
			flex-direction: row;
			border: 1px solid var(--color-blue-line);
			margin-top: 1.25rem;
			width: 100%;
			margin-left: 0rem;

			.image {
				display: flex;
				align-items: center;
				justify-content: center;
				min-width: 65%;

				img {
					object-fit: contain;
					max-width: 100%;
				}
			}

			.line {
				min-width: 1px;
				min-height: 100%;
				background-color: var(--color-blue-line);
			}

			.description {
				margin: 0;
				min-width: 35%;

				display: flex;
				align-items: center;

				padding: 1.25rem 2.5rem;
				box-sizing: border-box;
			}
		}
	}

	@media (max-width: 53rem) {
		.wrapper {
			.image-wrapper {
				flex-direction: column;

				.line {
					min-height: 1px;
					min-width: 100%;
				}
			}
		}
	}
</style>
