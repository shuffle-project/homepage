<script>
	import YouTubeWrapper from './YouTubeWrapper.svelte';
</script>

<div class="video-wrapper">
	<h2 id="barrierefrei-lehren-webinar">
		Digitale Barrierefreiheit im Hochschulkontext: Zertifikat “Barrierefrei Lehren”
	</h2>
	<p>
		Entdecken Sie den Lernkurs zum <span lang="en">Knowledge Badge</span> „Barrierefrei lehren" und
		erfahren Sie, wie Sie das <span lang="en">"Knowledge Badge"</span> im Rahmen einer Prüfung bei
		der IAAP D-A-CH, der deutschsprachigen Vertretung der
		<span lang="en">International Association of Accessibility Professionals</span>, erlangen
		können.
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
