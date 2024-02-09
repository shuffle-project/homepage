<script lang="ts">
	import { base } from '$app/paths';
	import type { Image } from '$lib/interfaces/project.interface';

	export let gallery: Image[];
	export let projectId: string;

	// let randomId = (Math.random() + 1).toString(36).substring(7);

	// let picture = `${base}/static/gallery/${projectId}/blinddate-gallery-3.png`;
	// console.log(picture);
</script>

<div class="wrapper">
	<!-- <enhanced:img src="/static/gallery/blinddate/blinddate-gallery-3.png" alt="" /> -->

	<!-- {#if gallery && projectId}
		{#each gallery as image, i}
			<enhanced:img src="{base}/gallery/{projectId}/{image.src}" alt={image.alt ?? ''} />

			{#if image.visibleDescription}
				<p id="gallery-img-">{image.visibleDescription}</p>
			{/if}
		{/each}
	{/if} -->

	<h2>Bildergallerie</h2>
	{#each gallery as image, i}
		<div class="image-wrapper">
			<div class="image">
				<img
					id="img-{projectId}-{i}"
					src="{base}/gallery/{projectId}/{image.src}"
					alt=""
					aria-hidden="true"
				/>
			</div>
			<div class="line" />
			<div class="description">
				<p>{image.description}</p>
			</div>
		</div>
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
