<script lang="ts">
	import Publications from '$lib/components/projectDetailPage/Publications.svelte';
	import { PLACEHOLDERS } from '$lib/constants/placeholders';
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

	PLACEHOLDERS.forEach((project) => {
		if ('publications' in project) unsortedAllPublications.push(...project.publications!);
	});

	let sortedAllPublications = new Map<number, Map<number, Publication[]>>();

	unsortedAllPublications.forEach((publication: Publication) => {
		const publicationYear = new Date(publication.releaseDate).getFullYear();
		const publicationMonth = new Date(publication.releaseDate).getMonth();

		const yearEntry = sortedAllPublications.get(publicationYear);

		if (!yearEntry) {
			const newEntry = new Map<number, Publication[]>();
			newEntry.set(publicationMonth, [publication]);

			sortedAllPublications.set(publicationYear, newEntry);
		} else {
			const monthEntry = yearEntry.get(publicationMonth);

			if (!monthEntry) {
				yearEntry.set(publicationMonth, [publication]);
				sortedAllPublications.set(publicationYear, yearEntry);
			} else {
				yearEntry.set(publicationMonth, [...monthEntry.values(), publication]);
				sortedAllPublications.set(publicationYear, yearEntry);
			}

			const filler = new Map(
				[...sortedAllPublications.get(publicationYear)!.entries()].sort((a, b) => {
					return a[0] - b[0];
				})
			);

			sortedAllPublications.set(publicationYear, filler);
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

			{#each yearEntry[1] as monthEntry}
				<h3>
					<span>{months[monthEntry[0]]}</span>
					<span class="year">{yearEntry[0]}</span>
				</h3>
				<!-- <hr class="month-hr" /> -->
				<div class="month-publications-wrapper">
					<Publications
						year={yearEntry[0]}
						month={months[monthEntry[0]]}
						publications={monthEntry[1]}
					/>
				</div>
			{/each}
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
