<script>
	import YouTubeWrapper from './YouTubeWrapper.svelte';
</script>

<div class="video-wrapper">
	<h2 id="barrierefrei-lehren-webinar">
		Digitale Barrierefreiheit im Hochschulkontext: Zertifikat “Barrierefrei Lehren”
	</h2>
	<p>
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
		ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
		dolores et ea rebum.
	</p>
	<YouTubeWrapper
		videoTitle="Digitale Barrierefreiheit im Hochschulkontext: Zertifikat “Barrierefrei Lehren”"
		linkToYouTube="https://www.youtube.com/watch?v=ZFqaNRmteTg"
		src="https://www.youtube-nocookie.com/embed/ZFqaNRmteTg?si=PygqmAWEZa-nQHUZ"
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
