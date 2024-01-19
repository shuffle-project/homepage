<script lang="ts">
	import type { Project } from '$lib/interfaces/project.interface';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Icon from '../Icon.svelte';
	import ResultCard from '../ProjectCard.svelte';

	export let selectedProjects: Project[] = [];

	const options = { loop: true, align: 'center' };
	let emblaAPI: any;
	let emblaSelectedIndex: number = 0;

	let componentHasFocus = false;
	$: ariaLiveText =
		selectedProjects[emblaSelectedIndex].title +
		', ' +
		(emblaSelectedIndex + 1) +
		' von ' +
		selectedProjects.length;

	const onInit = (e: any) => {
		emblaAPI = e.detail;
		emblaAPI.on('select', () => {
			emblaSelectedIndex = emblaAPI.internalEngine().index.get();
		});
	};

	function scrollPrevious() {
		if (!emblaAPI) return;
		componentHasFocus = true;
		emblaAPI.scrollPrev();
	}

	function scrollNext() {
		if (!emblaAPI) return;
		componentHasFocus = true;
		emblaAPI.scrollNext();
	}
</script>

<div aria-roledescription="Karussell" role="navigation" aria-label="Projekte">
	<button
		on:click={() => scrollPrevious()}
		on:focusout={() => (componentHasFocus = false)}
		class="previous-button before-card"
		aria-label="Vorheriges Projekt"
	>
		<Icon svg="arrow-back" size="30" />
	</button>
	<div class="embla" use:emblaCarouselSvelte={{ options }} on:emblaInit={onInit}>
		<div class="embla__container">
			{#each selectedProjects as project, i (project.id)}
				<div
					id="result-card-{i + 1}"
					class="embla__slide"
					aria-roledescription="Folie"
					inert={i !== emblaSelectedIndex}
				>
					<ResultCard {project} horizontalCenter />
				</div>
			{/each}
		</div>
	</div>

	<div class="slider-navigation">
		<button
			on:click={() => scrollPrevious()}
			on:focusout={() => (componentHasFocus = false)}
			class="previous-button after-card"
			aria-label="Vorheriges Projekt"
		>
			<Icon svg="arrow-back" size="30" />
		</button>

		<p class="slide-number-info">
			{emblaSelectedIndex + 1} von {selectedProjects.length}
		</p>

		<button
			on:click={() => scrollNext()}
			on:focusout={() => (componentHasFocus = false)}
			class="next-button"
			aria-label="Nächstes Projekt"
			><Icon svg="arrow-forward" size="30" />
		</button>
	</div>

	{#if componentHasFocus}
		<div aria-live="polite" class="sr-only">
			{#key ariaLiveText}
				{ariaLiveText}
			{/key}
		</div>
	{/if}
</div>

<style lang="scss">
	.slider-navigation {
		max-width: 16.25rem;
		position: relative;
		height: 3rem;
		margin-inline: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 1.25rem;
	}

	.slide-number-info {
		text-align: center;
		color: var(--color-dark-grey);
		font-size: 0.875rem;
	}

	.previous-button,
	.next-button {
		position: absolute;
		top: auto;
		bottom: 0;
		z-index: 5;

		display: flex;
		align-items: center;
		justify-content: center;

		height: 3rem;
		aspect-ratio: 1/1;
	}

	.previous-button {
		left: 0;

		&.before-card {
			display: none;
		}
	}

	.next-button {
		right: 0;
	}

	.embla {
		margin-top: 2.5rem;
		overflow: hidden;
	}

	.embla__container {
		display: flex;
	}

	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}

	@media (min-width: 25.625rem) {
		.slider-navigation {
			max-width: none;
			position: initial;
			height: auto;
			display: block;
		}

		.previous-button,
		.next-button {
			top: 0;
			bottom: 0;
			margin-block: auto;
		}

		.previous-button {
			left: 1.25rem;

			&.before-card {
				display: block;
			}

			&.after-card {
				display: none;
			}
		}

		.next-button {
			right: 1.25rem;
		}
	}
</style>
