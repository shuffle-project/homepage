<script lang="ts">
	import BackLink from '$lib/components/BackLink.svelte';
	import PlayerExtended from '$lib/components/player/PlayerExtended.svelte';
	import Gallery from '$lib/components/projectDetailPage/Gallery.svelte';
	import Info from '$lib/components/projectDetailPage/Info.svelte';
	import JoinEvaluation from '$lib/components/projectDetailPage/JoinEvaluation.svelte';
	import ProjectHeader from '$lib/components/projectDetailPage/ProjectHeader.svelte';
	import Publications from '$lib/components/projectDetailPage/Publications.svelte';
	import { type Publication } from '$lib/interfaces/project.interface.js';
	import { onMount } from 'svelte';

	export let data;
	const { project } = data;

	let publicationPaper: Publication[] = [];
	let publicationWorkshops: Publication[] = [];
	let publicationPoster: Publication[] = [];
	let publicationOther: Publication[] = [];

	// function sortDate(a: string, b: string) {
	// 	return new Date(b) - new Date (a);
	// }

	onMount(() => {
		if (project.publications) {
			project.publications.forEach((pub) => {
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
	<title>{project.title} - SHUFFLE</title>
</svelte:head>

<div class="wrapper">
	<div class="back-link-wrapper">
		<BackLink linkTo="/#projektergebnisse" />
	</div>
	<ProjectHeader {project} />

	{#if project.info}
		<Info infoMessage={project.info} />
	{/if}

	{#if project.video}
		<PlayerExtended extendedPlayerConfig={project.video} />
	{/if}

	{#if project.joinEvaluation}
		<JoinEvaluation join={project.joinEvaluation} />
	{/if}

	{#if project.gallery}
		<Gallery gallery={project.gallery} projectId={project.id} />
	{/if}

	{#if project.publications}
		<h2 class="publication-header">Publikationen</h2>
		{#if publicationPaper.length > 0}
			<Publications publications={publicationPaper} category="Paper / Buchbeiträge" />
		{/if}
		{#if publicationWorkshops.length > 0}
			<Publications publications={publicationWorkshops} category="Workshops" />
		{/if}
		{#if publicationPoster.length > 0}
			<Publications publications={publicationPoster} category="Posterpräsentationen" />
		{/if}
		{#if publicationOther.length > 0}
			<Publications publications={publicationOther} category="Sonstige Veröffentlichungen" />
		{/if}
	{/if}
</div>

<style lang="scss">
	.wrapper {
		margin: 6.5rem var(--outer-spacing) 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.publication-header {
		margin-top: 5rem;
		text-align: left;
		width: 100%;
		max-width: 60rem;
		padding-inline: 1.875rem;
		box-sizing: border-box;
	}

	.back-link-wrapper {
		width: 100%;
		max-width: 60rem;
		margin: 1.25rem 1.875rem;
	}

	@media (max-width: 40.5625rem) {
		.publication-header {
			padding-inline: 0;
		}
	}
</style>
