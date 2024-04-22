<script lang="ts">
	import ApaToggle from '$lib/components/APAToggle.svelte';
	import Publications from '$lib/components/projectDetailPage/Publications.svelte';
	import { ALL_PROJECTS } from '$lib/constants/allProjects.constant';
	import { GENERAL_PUBLICATIONS } from '$lib/constants/generalPublications.constant';
	import type { Publication } from '$lib/interfaces/project.interface';
	import { onMount } from 'svelte';
	import TitleSection from '../../../lib/components/TitleSection.svelte';

	let unsortedAllPublications: Publication[] = [...GENERAL_PUBLICATIONS];

	ALL_PROJECTS.forEach((project) => {
		if ('publications' in project) unsortedAllPublications.push(...project.publications!);
	});

	let publicationPaper: Publication[] = [];
	let publicationWorkshops: Publication[] = [];
	let publicationPoster: Publication[] = [];
	let publicationOther: Publication[] = [];

	onMount(() => {
		if (unsortedAllPublications) {
			unsortedAllPublications.forEach((pub) => {
				switch (pub.category) {
					case 'Paper / Buchbeiträge':
						publicationPaper = [...publicationPaper, pub];
						break;
					case 'Workshops':
						publicationWorkshops = [...publicationWorkshops, pub];
						break;
					case 'Posterpräsentationen':
						publicationPoster = [...publicationPoster, pub];
						break;
					default:
						publicationOther = [...publicationOther, pub];
				}
			});

			publicationPaper.sort((a, b) => (b.releaseDate < a.releaseDate ? -1 : 1));
			publicationWorkshops.sort((a, b) => (b.releaseDate < a.releaseDate ? -1 : 1));
			publicationPoster.sort((a, b) => (b.releaseDate < a.releaseDate ? -1 : 1));
			publicationOther.sort((a, b) => (b.releaseDate < a.releaseDate ? -1 : 1));
		}
	});
</script>

<svelte:head>
	<title>Publikationen - SHUFFLE</title>
</svelte:head>

<TitleSection>
	<svelte:fragment slot="title">Publikationen</svelte:fragment>
	<svelte:fragment slot="intro-text"
		>Im Folgenden sind alle Publikationen, die durch SHUFFLE veröffentlicht wurden. Sortiert nach
		dem Veröffentlichungsdatum.
	</svelte:fragment>
</TitleSection>

<div class="page-content">
	<div class="apa-button-wrapper">
		<ApaToggle />
	</div>

	{#if publicationPaper.length > 0}
		<Publications
			publications={publicationPaper}
			category="Paper / Buchbeiträge"
			headingLevel="h2"
		/>
	{/if}
	{#if publicationWorkshops.length > 0}
		<Publications publications={publicationWorkshops} category="Workshops" headingLevel="h2" />
	{/if}
	{#if publicationPoster.length > 0}
		<Publications
			publications={publicationPoster}
			category="Posterpräsentationen"
			headingLevel="h2"
		/>
	{/if}
	{#if publicationOther.length > 0}
		<Publications
			publications={publicationOther}
			category="Sonstige Veröffentlichungen"
			headingLevel="h2"
		/>
	{/if}
</div>

<style lang="scss">
	.page-content {
		max-width: 60rem;
		box-sizing: border-box;
		width: 100%;
		margin: 1.875rem auto 0 auto;
		padding-inline: var(--outer-spacing);

		.apa-button-wrapper {
			margin-bottom: 4rem;
			max-width: 60rem;
			box-sizing: border-box;
			padding-right: 0rem;
		}
	}

	h2 {
		margin-top: 4.375rem;
		display: flex;
		align-items: baseline;
		gap: 0.3125rem;
	}

	@media (min-width: 40.625rem) {
		h2 {
			padding-inline: 1.875rem;
		}

		.page-content {
			.apa-button-wrapper {
				padding-right: 3.75rem;
			}
		}
	}
</style>
