<script lang="ts">
	import ApaToggle from '$lib/components/APAToggle.svelte';
	import BackLink from '$lib/components/BackLink.svelte';
	import PlayerExtended from '$lib/components/player/PlayerExtended.svelte';
	import Gallery from '$lib/components/projectDetailPage/Gallery.svelte';
	import Info from '$lib/components/projectDetailPage/Info.svelte';
	import JoinEvaluation from '$lib/components/projectDetailPage/JoinEvaluation.svelte';
	import MelvinGitHub from '$lib/components/projectDetailPage/MelvinGitHub.svelte';
	import ProjectHeader from '$lib/components/projectDetailPage/ProjectHeader.svelte';
	import Publications from '$lib/components/projectDetailPage/Publications.svelte';
	import BarrierefreiLehrenWebinar from '$lib/components/records/BarrierefreiLehrenWebinar.svelte';
	import BlindDateWebinar from '$lib/components/records/BlindDateWebinar.svelte';
	import DigitaleLernraumeWebinar from '$lib/components/records/DigitaleLernraumeWebinar.svelte';
	import ReifegradmodellWebinar from '$lib/components/records/ReifegradmodellWebinar.svelte';
	import { WEBINAR_COMPONENTS, type Publication } from '$lib/interfaces/project.interface.js';
	import { onMount } from 'svelte';

	let { data } = $props();
	const { project } = data;

	let publicationPaper: Publication[] = $state([]);
	let publicationWorkshops: Publication[] = $state([]);
	let publicationPoster: Publication[] = $state([]);
	let publicationTheses: Publication[] = $state([]);
	let publicationOther: Publication[] = $state([]);

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

	{#if project.id === 'melvin'}
		<MelvinGitHub />
	{/if}

	{#if project.webinar}
		<div class="webinar-wrapper">
			{#if project.webinar === WEBINAR_COMPONENTS.LERNRAUME}
				<DigitaleLernraumeWebinar />
			{:else if project.webinar === WEBINAR_COMPONENTS.BLINDDATE}
				<BlindDateWebinar />
			{:else if project.webinar === WEBINAR_COMPONENTS.RGM}
				<ReifegradmodellWebinar />
			{:else if project.webinar === WEBINAR_COMPONENTS.BADGE}
				<BarrierefreiLehrenWebinar />
			{/if}
		</div>
	{/if}

	{#if project.publications}
		<div class="publication-header">
			<h2>Publikationen</h2>
			<ApaToggle />
		</div>

		{#if publicationPaper.length > 0}
			<Publications publications={publicationPaper} category="Paper / Buchbeiträge" />
		{/if}
		{#if publicationWorkshops.length > 0}
			<Publications publications={publicationWorkshops} category="Workshops" />
		{/if}
		{#if publicationPoster.length > 0}
			<Publications publications={publicationPoster} category="Posterpräsentationen" />
		{/if}
		{#if publicationTheses.length > 0}
			<Publications publications={publicationTheses} category="Abschlussarbeiten" />
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
		min-height: 60vh;
	}

	.webinar-wrapper {
		margin-top: 3.125rem;
		width: 100%;
		max-width: 60rem;
	}

	.publication-header {
		margin-top: 5rem;
		text-align: left;
		width: 100%;
		max-width: 60rem;
		padding-right: 3.75rem;
		box-sizing: border-box;
		margin-bottom: 2rem;

		h2 {
			padding-inline: 1.875rem;
			margin-bottom: 1.25rem;
		}
	}

	.back-link-wrapper {
		width: 100%;
		max-width: 60rem;
		margin: 1.25rem 1.875rem;
	}

	@media (max-width: 40.5625rem) {
		.publication-header {
			padding-right: 0rem;
			h2 {
				padding-inline: 0;
			}
		}
	}

	@media (max-width: 41.25rem) {
		.webinar-wrapper {
			width: calc(100% + 2 * var(--outer-spacing));
		}
	}
</style>
