<script lang="ts">
	import ApaToggle from '$lib/components/APAToggle.svelte';
	import Publications from '$lib/components/projectDetailPage/Publications.svelte';
	import { ALL_PROJECTS } from '$lib/constants/allProjects.constant';
	import { GENERAL_PUBLICATIONS } from '$lib/constants/generalPublications.constant';
	import type { Publication } from '$lib/interfaces/project.interface';
	import { onMount } from 'svelte';
	import TitleSection from '../../../lib/components/TitleSection.svelte';

	let unsortedAllPublications: Publication[] = [...GENERAL_PUBLICATIONS];
	const publicationTitles = new Set<string>();

	ALL_PROJECTS.forEach((project) => {
		if ('publications' in project) {
			project.publications!.forEach((pub) => {
				if (!publicationTitles.has(pub.title)) {
					unsortedAllPublications.push(pub);
					publicationTitles.add(pub.title);
				}
			});
		}
	});

	let publicationPaper: Publication[] = $state([]);
	let publicationWorkshops: Publication[] = $state([]);
	let publicationPoster: Publication[] = $state([]);
	let publicationTheses: Publication[] = $state([]);
	let publicationOther: Publication[] = $state([]);

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
					case 'Abschlussarbeiten':
						publicationTheses = [...publicationTheses, pub];
						break;
					default:
						publicationOther = [...publicationOther, pub];
				}
			});

			publicationPaper.sort((a, b) => (b.releaseDate < a.releaseDate ? -1 : 1));
			publicationWorkshops.sort((a, b) => (b.releaseDate < a.releaseDate ? -1 : 1));
			publicationPoster.sort((a, b) => (b.releaseDate < a.releaseDate ? -1 : 1));
			publicationTheses.sort((a, b) => (b.releaseDate < a.releaseDate ? -1 : 1));
			publicationOther.sort((a, b) => (b.releaseDate < a.releaseDate ? -1 : 1));
		}
	});
</script>

<svelte:head>
	<title>Publikationen - SHUFFLE</title>
</svelte:head>

<TitleSection>
	{#snippet title()}
		Publikationen
	{/snippet}

	{#snippet introText()}
		Im Folgenden sind alle Publikationen des SHUFFLE-Projektes aufgelistet. Bei Veröffentlichungen
		durch Dritte im Rahmen von beispielsweise Sammelbänden, können wir nicht für die
		Barrierefreiheit garantieren.
	{/snippet}
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
	{#if publicationTheses.length > 0}
		<Publications publications={publicationTheses} category="Abschlussarbeiten" headingLevel="h2" />
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

	@media (min-width: 40.625rem) {
		.page-content {
			.apa-button-wrapper {
				padding-right: 3.75rem;
			}
		}
	}
</style>
