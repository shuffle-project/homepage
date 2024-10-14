<script>
	import YouTubeWrapper from './YouTubeWrapper.svelte';
</script>

<div class="video-wrapper">
	<h2 id="digitale-lernraume-webinar">Digitale Lernräume und Materialien barrierefrei gestalten</h2>
	<p>
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
		ut labore et dolore magna aliquyam erat, sed diam voluptua.
	</p>

	<YouTubeWrapper
		videoTitle="Digitale Lernräume und Materialien barrierefrei gestalten"
		linkToYouTube="https://www.youtube.com/watch?v=hZzg3BgwkXU"
		src="https://www.youtube-nocookie.com/embed/hZzg3BgwkXU?si=cue6m2yepbek_wVa"
	/>
</div>

<style lang="scss">
	.video-wrapper {
		margin-bottom: 2.5rem;

		h2 {
			font-size: clamp(1rem, 4vw + 0.25rem, 1.875rem);
		}
	}

	@media (max-width: 41.25rem) {
		.video-wrapper {
			h2,
			p {
				padding-inline: var(--outer-spacing);
			}
		}
	}
</style>
