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
	<a href="/news/zwei-tage-lernen-gruebeln-und-vernetzen-auf-der-summer-school"
		>Zwei Tage lernen, grübeln und vernetzen auf der Summer School</a
	>
	<a href="/news/kennst-du-eigentlich-gabriel">Kennst Du eigentlich Gabriel?</a>
	<a href="/news/chi2023">CHI2023</a>
	<a href="/news/accessibility-day-in-stuttgart">Accessibility Day in Stuttgart</a>
	<a href="/news/fruehlingstreffen-in-bielefeld">Frühlingstreffen in Bielefeld</a>
	<a
		href="/news/die-zukunft-barrierefrei-shuffle-mit-zwei-beitraegen-beim-university-future-festival-2023"
		>Die Zukunft barrierefrei! – SHUFFLE mit zwei Beiträgen beim University Future Festival 2023</a
	>
	<a href="/news/shuffle-unterwegs">SHUFFLE unterwegs</a>
	<a href="/news/shuffle-beim-bi-teach-tag-der-lehre">SHUFFLE beim Bi.teach – Tag der Lehre</a>
	<a href="/news/shuffle-mitglieder-haben-pruefungen-erfolgreich-bestanden"
		>SHUFFLE-Mitglieder haben Prüfungen erfolgreich bestanden</a
	>
</div>

<style lang="scss">
	.articles {
		display: flex;
		flex-direction: column;
	}
</style>
