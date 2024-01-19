<script lang="ts">
	import { base } from '$app/paths';
	import TitleSection from '../../../lib/components/TitleSection.svelte';
</script>

<svelte:head>
	<title>Sitemap - SHUFFLE</title>
</svelte:head>

<TitleSection>
	<svelte:fragment slot="title">Sitemap</svelte:fragment>
	<svelte:fragment slot="intro-text">Diese Sitemap listet alle Seiten auf.</svelte:fragment>
</TitleSection>

<div class="page-content">
	<h2>Alle Seiten (alphabetisch)</h2>
	<!-- Add project subpages when ready -->
	<ul>
		<li>
			<a href="{base}/news">Aktuelles</a>
		</li>
		<li>
			<a href="{base}/privacy">Datenschutz</a>
		</li>
		<li>
			<a href="{base}/">Erklärung zur Barrierefreiheit</a>
		</li>
		<li>
			<a href="{base}/">Gebärdensprache (DGS)</a>
		</li>
		<li>
			<a href="{base}/imprint">Impressum</a>
		</li>
		<li>
			<a href="{base}/contact">Kontakt</a>
		</li>
		<li>
			<a href="{base}/plain-language">Leichte Sprache</a>
		</li>
		<li>
			<a href="{base}/">Startseite</a>
		</li>
		<li>
			<a href="{base}/team">Team</a>
		</li>
	</ul>
</div>

<style lang="scss">
	.page-content {
		max-width: var(--max-text-width);
		padding-inline: var(--outer-spacing);
		width: 100%;
		box-sizing: border-box;

		margin: 1.875rem auto 0 auto;

		ul {
			li {
				margin: 0.25rem 0;
			}
		}

		a {
			text-decoration: none;
		}
	}
</style>
