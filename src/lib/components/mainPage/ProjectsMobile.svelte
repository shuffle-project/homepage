<script lang="ts">
	import type { Project } from '$lib/interfaces/project.interface';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/core';

	import Icon from '../Icon.svelte';
	import ProjectCard from '../ProjectCard.svelte';

	export let selectedProjects: Project[] = [];

	let carousel: Splide;

	const splideOptions = {
		type: 'loop',
		live: false,
		keyboard: false,
		i18n: {
			prev: 'Vorheriges Projekt',
			next: 'Nächstes Projekt',
			slide: 'Projekt'
		},
		pagination: false,
		arrows: false
	};

	let carouselSelectedIndex: number = 0;

	let componentHasFocus = false;
	$: ariaLiveText =
		selectedProjects[carouselSelectedIndex].title +
		', ' +
		(carouselSelectedIndex + 1) +
		' von ' +
		selectedProjects.length;

	function moveSlide(direction: string) {
		if (!carousel) return;
		carousel.go(direction);
		carouselSelectedIndex = carousel.splide.index;
	}
</script>

<Splide
	aria-roledescription="Karussell"
	role="navigation"
	aria-label="Projekte"
	options={splideOptions}
	bind:this={carousel}
	hasTrack={false}
>
	<button
		on:focusout={() => (componentHasFocus = false)}
		on:focusin={() => (componentHasFocus = true)}
		on:click={() => moveSlide('<')}
		class="previous-button before-card"
		aria-label="Vorheriges Projekt"
	>
		<Icon svg="arrow-back" size="30" />
	</button>

	<SplideTrack>
		{#each selectedProjects as project, i (project.id)}
			<SplideSlide id="result-card-{i + 1}" aria-roledescription="Folie">
				<ProjectCard {project} horizontalCenter />
			</SplideSlide>
		{/each}
	</SplideTrack>
	<div class="splide__arrows" />

	<div class="slider-navigation">
		<button
			on:focusout={() => (componentHasFocus = false)}
			on:focusin={() => (componentHasFocus = true)}
			on:click={() => moveSlide('<')}
			class="previous-button after-card"
			aria-label="Vorheriges Projekt"
		>
			<Icon svg="arrow-back" size="30" />
		</button>

		<p class="slide-number-info">
			{carouselSelectedIndex + 1} von {selectedProjects.length}
		</p>

		<button
			on:focusout={() => (componentHasFocus = false)}
			on:focusin={() => (componentHasFocus = true)}
			on:click={() => moveSlide('>')}
			class="next-button"
			aria-label="Nächstes Projekt"
			><Icon svg="arrow-forward" size="30" />
		</button>
	</div>
</Splide>

{#if componentHasFocus}
	<div aria-live="polite" class="sr-only">
		{#key ariaLiveText}
			{ariaLiveText}
		{/key}
	</div>
{/if}

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

		.slide-number-info {
			text-align: center;
			color: var(--color-dark-grey);
			font-size: 0.875rem;
		}
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
		width: 3rem;
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
		padding: 1.25rem 0;
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
