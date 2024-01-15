<script lang="ts">
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
			<a href="/news">Aktuelles</a>
		</li>
		<li>
			<a href="/privacy">Datenschutz</a>
		</li>
		<li>
			<a href="/">Erklärung zur Barrierefreiheit</a>
		</li>
		<li>
			<a href="/">Gebärdensprache (DGS)</a>
		</li>
		<li>
			<a href="/imprint">Impressum</a>
		</li>
		<li>
			<a href="/contact">Kontakt</a>
		</li>
		<li>
			<a href="/plain-language">Leichte Sprache</a>
		</li>
		<li>
			<a href="/">Startseite</a>
		</li>
		<li>
			<a href="/team">Team</a>
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
