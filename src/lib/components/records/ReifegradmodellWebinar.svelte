<script>
	import YouTubeWrapper from './YouTubeWrapper.svelte';
</script>

<div class="video-wrapper">
	<h2 id="reifegradmodell-webinar">
		Systematische Analyse und Entwicklung von (digitaler) Barrierefreiheit an Hochschulen
	</h2>
	<p>
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
		ut labore et dolore magna aliquyam erat, sed diam voluptua.
	</p>
	<YouTubeWrapper
		videoTitle="Systematische Analyse und Entwicklung von (digitaler) Barrierefreiheit an Hochschulen"
		linkToYouTube="https://www.youtube.com/watch?v=dq-7tN5Ncp8"
		src="https://www.youtube-nocookie.com/embed/dq-7tN5Ncp8?si=7fbyWnr3kFJTFC9k"
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
