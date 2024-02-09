<script lang="ts">
	import { base } from '$app/paths';
	import Icon from '$lib/components/Icon.svelte';
	import TitleSection from '../../../lib/components/TitleSection.svelte';
</script>

<svelte:head>
	<title>Erläuterung in Gebärdensprache (DGS) - SHUFFLE</title>
</svelte:head>

<TitleSection>
	<svelte:fragment slot="title">Erläuterung in Gebärdensprache (DGS)</svelte:fragment>
	<svelte:fragment slot="dgs-icon">
		<div class="dgs-icon">
			<Icon svg="dgs-symbol" color="original" size="parent" />
		</div>
	</svelte:fragment>
</TitleSection>

<div class="page-content">
	<p>
		Das folgende Video erläutert die Website des SHUFFLE Projekts in Deutscher Gebärdensprache
		(DGS).
	</p>
</div>

<div class="video-wrapper">
	<!-- svelte-ignore a11y-media-has-caption -->
	<video controls muted poster="{base}/videos/dgs_shuffle_teaser.jpg">
		<source src="{base}/videos/dgs_shuffle.mp4" type="video/mp4" />
		Ihr Browser unterstützt die Wiedergabe von Videos nicht.
	</video>
</div>

<div class="page-content">
	<p>
		Sie können das <a class="chakra-link css-spn4bz" href="{base}/videos/dgs_shuffle.mp4" download
			>Video herunterladen</a
		>. Es hat eine Länge von <abbr title="6 Minuten 32 Sekunden">06:32</abbr> und eine Dateigröße
		von <abbr title="42 Mebibyte">42 MiB</abbr>.
	</p>
</div>

<style lang="scss">
	.dgs-icon {
		width: 5rem;
	}

	.page-content {
		max-width: var(--max-text-width);
		padding-inline: var(--outer-spacing);
		width: 100%;
		box-sizing: border-box;

		margin: 1.875rem auto 0 auto;
	}

	.video-wrapper {
		max-width: 50rem;
		margin-inline: auto;

		video {
			max-width: 100%;
		}
	}
</style>
