<script lang="ts">
	import { ALL_PROJECTS } from '$lib/constants/allProjects.constant.js';
	import type { Project, TargetGroup } from '$lib/interfaces/project.interface';

	import ResultCard from '../ProjectCard.svelte';
	import ProjectsMobile from './ProjectsMobile.svelte';

	let selectedIndex: number = 0;
	let selectedTab: 'Alle' | TargetGroup = 'Alle';
	const tabOptions: ('Alle' | TargetGroup)[] = ['Alle', 'Für Lehrende', 'Für die Hochschulleitung'];

	const projects = ALL_PROJECTS;

	let selectedProjects: Project[] = [];

	$: {
		selectedProjects = projects.filter((pl) => {
			if (selectedTab === 'Alle') return true;
			if (pl.targetGroup.includes(selectedTab)) return true;
		});
	}

	function onKeypressed(event: KeyboardEvent) {
		if (event.code === 'ArrowLeft') {
			event.preventDefault();
			let element = document.getElementById(`results-tab-${selectedIndex - 1}`);
			element?.focus();
			element?.click();
		} else if (event.code === 'ArrowRight') {
			event.preventDefault();
			let element = document.getElementById(`results-tab-${selectedIndex + 1}`);
			element?.focus();
			element?.click();
		}
	}
</script>

<div class="results-section">
	<h2 id="projektergebnisse">Projektergebnisse</h2>
	<p class="intro-text">
		Während das SHUFFLE-Projekt weiterläuft, stehen bereits jetzt erste Ergebnisse und Projekte zur
		Verfügung, die Sie erkunden und ausprobieren können. In den kommenden Wochen und Monaten werden
		zudem weitere hinzukommen.
	</p>

	<!-- <div role="tablist" class="tablist" aria-label="Projektergebnisse filtern">
		{#each tabOptions as tabOption, i}
			<button
				id="results-tab-{i}"
				role="tab"
				aria-selected={selectedTab === tabOption}
				tabindex={selectedTab === tabOption ? 0 : -1}
				on:click={() => ((selectedTab = tabOption), (selectedIndex = i))}
				on:keydown={onKeypressed}
			>
				{tabOption}
			</button>
		{/each}
	</div> -->

	<div class="results-list desktop">
		{#key selectedProjects}
			{#each selectedProjects as project, i (project.id)}
				<div id="result-card-{i + 1}">
					<ResultCard {project} />
				</div>
			{/each}
		{/key}
	</div>

	<!-- exlude to new component where the whole embla code get reinitialized  -->
	<div class="mobile">
		{#key selectedProjects}
			<ProjectsMobile {selectedProjects} />
		{/key}
	</div>
</div>

<style lang="scss">
	.results-section {
		background: var(--color-white);
		padding: 0 var(--outer-spacing);
		display: flex;
		flex-direction: column;
		align-items: center;

		h2 {
			padding: var(--section-vertical-spacing) 0 1.25rem;
		}

		.intro-text {
			max-width: var(--max-text-width);
		}

		// .tablist {
		// 	width: 100%;
		// 	max-width: var(--max-text-width);

		// 	padding: 0.625rem;

		// 	display: flex;
		// 	flex-wrap: wrap;
		// 	gap: 0.625rem;

		// button {
		// 	background-color: transparent;
		// 	color: var(--color-black);
		// 	border: 1px solid var(--color-black);
		// 	font-size: 0.875rem;
		// 	padding: 0.25rem 0.5rem;
		// 	cursor: pointer;

		// Without it, there is some flickering while switching the tabs
		// transition: all 0s ease-in-out;

		// position: relative;

		// &[aria-selected='true'] {
		// 	color: var(--color-white);
		// 	background-color: var(--color-black);
		// }

		// 		&:hover {
		// 			outline: none;
		// 		}

		// 		&:focus-visible {
		// 			outline: 2px solid var(--color-black);
		// 			outline-offset: 2px;
		// 		}
		// 	}
		// }

		.results-list {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			gap: 3.125rem;

			margin-top: 2.5rem;
		}

		.mobile {
			position: relative;
			max-width: calc(100% + 2.5rem); // results in jitter when page resice // TODO fix
			min-width: 100%;
		}
	}

	@media (max-width: 40.5625rem) {
		.results-section {
			.desktop {
				display: none;
			}
		}
	}

	@media (min-width: 40.625rem) {
		.results-section {
			.mobile {
				display: none;
			}
		}
	}
</style>
