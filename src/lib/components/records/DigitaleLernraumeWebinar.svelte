<script>
	import YouTubeWrapper from './YouTubeWrapper.svelte';
</script>

<div class="video-wrapper">
	<h2 id="digitale-lernraume-webinar">Digitale Lernräume und Materialien barrierefrei gestalten</h2>
	<p>
		Wollen Sie Ihre Lehr-/Lernumgebung für alle Studierende zugänglich gestalten? Dann lernen Sie in
		diesem Webinar, wie Sie mithilfe einfacher Checklisten und Umsetzungshilfen Ihre Materialien
		(9:32) und Lernumgebungen in Moodle (17:50) und Ilias (27:10) digital barrierefrei umsetzen
		können.
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
