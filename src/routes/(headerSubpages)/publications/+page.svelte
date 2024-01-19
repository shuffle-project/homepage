<script lang="ts">
	import Publications from '$lib/components/projectDetailPage/Publications.svelte';
	import { ALL_PROJECTS } from '$lib/constants/allProjects.constant';
	import type { Publication } from '$lib/interfaces/project.interface';
	import TitleSection from '../../../lib/components/TitleSection.svelte';

	const months = [
		'Januar',
		'Februar',
		'März',
		'April',
		'Mai',
		'Juni',
		'Juli',
		'August',
		'September',
		'Oktober',
		'November',
		'Dezember'
	];

	let unsortedAllPublications: Publication[] = [];

	ALL_PROJECTS.forEach((project) => {
		if ('publications' in project) unsortedAllPublications.push(...project.publications!);
	});

	let sortedAllPublications = new Map<number, Publication[]>();

	unsortedAllPublications.forEach((publication: Publication) => {
		const publicationYear = new Date(publication.releaseDate).getFullYear();
		const yearEntry = sortedAllPublications.get(publicationYear);

		if (!yearEntry) {
			sortedAllPublications.set(publicationYear, [publication]);
		} else {
			let publications = [...sortedAllPublications.get(publicationYear)!, publication];
			publications.sort((a, b) => {
				return new Date(a.releaseDate).getMonth() - new Date(b.releaseDate).getMonth();
			});

			sortedAllPublications.set(publicationYear, publications);
		}
	});

	const readyPublications = new Map([...sortedAllPublications.entries()].reverse());
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

{#if readyPublications}
	<div class="page-content">
		{#each readyPublications as yearEntry, i}
			<h2>
				<div class="color-square" />
				{yearEntry[0]}
			</h2>

			<Publications year={yearEntry[0]} publications={yearEntry[1]} />
		{/each}
	</div>
{/if}

<style lang="scss">
	.page-content {
		max-width: 60rem;
		box-sizing: border-box;
		width: 100%;
		margin: 1.875rem auto 0 auto;
		padding-inline: var(--outer-spacing);
	}

	h3 {
		margin-top: 1.875rem;

		.year {
			color: var(--color-dark-grey);
			font-weight: 400;
			font-size: 1rem;
		}
	}

	h2 {
		margin-top: 4.375rem;
		display: flex;
		align-items: baseline;
		gap: 0.3125rem;
	}

	.month-publications-wrapper {
		border: 1px solid var(--color-blue-line);
		padding-inline: 0.625rem;
	}

	@media (min-width: 40.625rem) {
		h2,
		h3 {
			padding-inline: 1.875rem;
		}

		.month-publications-wrapper {
			padding-inline: 0rem;
		}
	}
</style>
