<script>
	import TitleSection from '../../../lib/components/TitleSection.svelte';
</script>

<svelte:head>
	<title>Aktuelles - SHUFFLE</title>
</svelte:head>

<TitleSection>
	<svelte:fragment slot="title">Aktuelles</svelte:fragment>
</TitleSection>

<div class="articles">
	<a href="/news/shuffle-projekttreffen-in-heidelberg">SHUFFLE-Projekttreffen in Heidelberg</a>
	<a href="/news/konferenzbeitraege-bei-der-geneme-2023">Konferenzbeiträge bei der GeNeMe 2023</a>
</div>

<style lang="scss">
	.articles {
		display: flex;
		flex-direction: column;
	}
</style>
