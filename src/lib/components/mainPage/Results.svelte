<script lang="ts">
	import { PLACEHOLDERS } from '$lib/constants/placeholders';
	import type { Project, TargetGroup } from '$lib/interfaces/project.interface';
	import ResultCard from '../ResultCard.svelte';

	let selectedIndex: number = 0;
	let selectedTab: 'Alle' | TargetGroup = 'Alle';
	const tabOptions: ('Alle' | TargetGroup)[] = ['Alle', 'Für Lehrende', 'Für die Hochschulleitung'];

	const projects = PLACEHOLDERS;
	let selectedProjects: Project[] = [];

	$: {
		selectedProjects = projects.filter((pl) => {
			if (selectedTab === 'Alle') return true;
			if (pl.targetGroup === selectedTab) return true;
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
	<h2>Projektergebnisse</h2>
	<p class="intro-text">
		Wir haben ... und ... und natürlich auch ... gemacht. Im Folgenden befinden sich alle
		Projektergebnisse.
	</p>

	<div role="tablist" class="tablist" aria-label="Projektergebnisse filtern">
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
	</div>

	<div class="resultslist">
		{#key selectedProjects}
			{#each selectedProjects as project, i}
				<div id="result-card-{i + 1}">
					<ResultCard {project} />
				</div>
			{/each}
		{/key}
	</div>
</div>

<style lang="scss">
	.results-section {
		background: var(--color-blue-gradient);
		padding: var(--section-vertical-spacing) var(--outer-spacing);
		display: flex;
		flex-direction: column;
		align-items: center;

		h2 {
			margin-bottom: 1.25rem;
		}

		.intro-text {
			max-width: var(--max-text-width);
		}

		.tablist {
			width: 100%;
			max-width: var(--max-text-width);

			padding: 0.625rem;

			display: flex;
			flex-wrap: wrap;
			gap: 1rem;

			button {
				background-color: transparent;
				color: var(--color-black);
				border: 1px solid var(--color-black);
				font-size: 0.875rem;
				padding: 0.25rem 0.5rem;
				cursor: pointer;

				&[aria-selected='true'] {
					color: var(--color-white);
					background-color: var(--color-black);
				}

				&:hover,
				&:focus {
					outline: 1px solid var(--color-black);
					outline-offset: 2px;

					transition: all 0.1s ease-in;
				}
			}
		}

		.resultslist {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			gap: 3.125rem;

			margin-top: 2.5rem;
		}
	}
</style>
