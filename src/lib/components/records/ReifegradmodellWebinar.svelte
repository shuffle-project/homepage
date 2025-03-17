<script>
	import YouTubeWrapper from './YouTubeWrapper.svelte';
</script>

<div class="video-wrapper">
	<h2 id="reifegradmodell-webinar">
		Systematische Analyse und Entwicklung von (digitaler) Barrierefreiheit an Hochschulen
	</h2>
	<p>
		Wir möchten Ihnen das SHUFFLE-Reifegradmodell vorstellen. Es ist ein Selbstbewertungstool zur
		Verbesserung der digitalen Teilhabe an Hochschulen und hilft Verantwortlichen, relevante Daten
		strukturiert zu erheben, zu bündeln und diese strategisch einzusetzen. Im Webinar gehen wir auf
		die Schritte für die Entwicklung des Reifegradmodells ein (ab 4:46) und stellen Ihnen das
		Reifegradmodell mit seinen verschiedenen Bestandteilen vor (ab 12:47) inklusive des Analysetools
		(ab 20:23), der Ergebnisdarstellung des Ist-Zustands (ab 25:52) und den Handlungsempfehlungen
		(ab 28:08).
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

		h2,
		p {
			padding-inline: 1.875rem;
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
