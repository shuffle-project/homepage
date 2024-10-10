<script>
	import YouTubeWrapper from './YouTubeWrapper.svelte';
</script>

<div class="video-wrapper">
	<h2 id="blinddate-webinar">
		Ein BlindDate mit virtuellen Studierenden – Sensibilisierung durch Perspektivwechsel
	</h2>
	<p>
		Erfahren Sie mehr über den Erstellungsprozess der Personas, die interaktiven Elemente der
		Webseite sowie spannende Hintergrundinformationen zu Designentscheidungen.
	</p>
	<YouTubeWrapper
		videoTitle="Ein BlindDate mit virtuellen Studierenden – Sensibilisierung durch Perspektivwechsel"
		linkToYouTube="https://www.youtube.com/watch?v=-9rDo3h8yng"
		src="https://www.youtube-nocookie.com/embed/-9rDo3h8yng?si=EGyCC-QCfiteAfb6"
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
