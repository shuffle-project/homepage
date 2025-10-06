<script lang="ts">
	import { ALL_PROJECTS } from '$lib/constants/allProjects.constant.js';
	import {
		AWARENESS_PROJECTS,
		CERTIFICATION_PROJECTS,
		CONSULTATION_PROJECTS,
		FILTER_OPTIONS,
		IT_PROJECTS,
		STRATEGY_PROJECTS,
		TEACHING_PROJECTS
	} from '$lib/constants/filter.constant';
	import type { FilterOptions, Project } from '$lib/interfaces/project.interface';

	import ResultCard from '../ProjectCard.svelte';
	import ProjectsMobile from './ProjectsMobile.svelte';

	let selectedProjects: Project[] = $state(ALL_PROJECTS);

	let selectedFilterOption: 'all' | FilterOptions = $state('all');

	function onSelectFilterOption(option: 'all' | FilterOptions) {
		selectedFilterOption = option;

		switch (option) {
			case 'all':
				selectedProjects = ALL_PROJECTS;
				break;
			case 'consultation':
				selectedProjects = CONSULTATION_PROJECTS;
				break;
			case 'awareness':
				selectedProjects = AWARENESS_PROJECTS;
				break;
			case 'teaching':
				selectedProjects = TEACHING_PROJECTS;
				break;
			case 'strategy':
				selectedProjects = STRATEGY_PROJECTS;
				break;
			case 'it':
				selectedProjects = IT_PROJECTS;
				break;
			case 'certification':
				selectedProjects = CERTIFICATION_PROJECTS;
				break;
			default:
				selectedProjects = ALL_PROJECTS;
				break;
		}
	}
</script>

<div class="results-section">
	<h2 id="projektergebnisse">Projektergebnisse</h2>
	<p class="intro-text">
		Das SHUFFLE-Projekt ist inzwischen abgeschlossen. Die im Rahmen des Projekts entstandenen
		Ergebnisse und Anwendungen stehen Ihnen weiterhin zur Verfügung und können erkundet und
		ausprobiert werden.
	</p>

	<details>
		<summary>
			<span> Ergebnisse filtern </span>
		</summary>

		<div class="details-content" role="radiogroup" aria-label="Filteroptionen">
			<div class="row-default">
				<div class="input-wrapper">
					<input
						id="input-0"
						type="radio"
						name="filter"
						value="all"
						checked={selectedFilterOption === 'all'}
						onchange={(e) => onSelectFilterOption('all')}
					/>
					<label for="input-0"> Alle Ergebnisse </label>
				</div>
			</div>
			<div class="row-categories">
				{#each FILTER_OPTIONS as option, i}
					<div class="input-wrapper">
						<input
							id="input-{i + 1}"
							type="radio"
							name="filter"
							value={option.value}
							checked={selectedFilterOption === option.value}
							onchange={() => onSelectFilterOption(option.value)}
						/>
						<label for="input-{i + 1}">
							{option.label}
						</label>
					</div>
				{/each}
			</div>
		</div>
	</details>

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
	details {
		width: 100%;
		max-width: var(--max-text-width);
		border: 1px solid var(--color-blue-line);

		.details-content {
			padding: 0.625rem;
		}

		.input-wrapper {
			display: flex;
			align-items: center;
			gap: 0.25rem;

			label,
			input {
				cursor: pointer;
			}

			input {
				-webkit-appearance: none;
				appearance: none;
				background-color: var(--color-white);
				margin: 0;

				border: 1px solid var(--color-black);
				border-radius: 50%;
				width: 1rem;
				height: 1rem;
			}

			input:focus-visible {
				outline: 1px solid var(--color-black);
				outline-offset: 0px;
			}

			input:checked {
				position: relative;

				&::before {
					content: '';
					width: 0.625rem;
					height: 0.625rem;
					background-color: var(--color-black);
					position: absolute;
					top: 2px;
					left: 2px;

					border-radius: 50%;
				}
			}
		}

		.row-default {
			margin-bottom: 1.625rem;
		}

		.row-categories {
			display: flex;
			flex-wrap: wrap;
			gap: 0.625rem 0.875rem;
		}
		// }

		summary {
			padding: 0.625rem;
			font-weight: bold;
			cursor: pointer;
			position: relative;

			&:focus-visible {
				outline: 2px solid var(--color-black);
			}
		}
	}

	details[open] {
		summary {
			border-bottom: 1px solid var(--color-blue-line);
		}
	}

	.results-section {
		background: var(--color-white);
		padding: 0 var(--outer-spacing);
		display: flex;
		flex-direction: column;
		align-items: center;

		h2 {
			margin: var(--section-vertical-spacing) 0 1.25rem;
		}

		.intro-text {
			max-width: var(--max-text-width);
		}

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
		details {
			margin-bottom: 2.5rem;
		}

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
