<script lang="ts">
	import type { Image } from '$lib/interfaces/project.interface';

	export let gallery: Image[];
	export let projectId: string;

	let randomId = (Math.random() + 1).toString(36).substring(7);

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
</div>

<style lang="scss">
	.wrapper {
	}
</style>
