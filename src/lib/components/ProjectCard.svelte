<script lang="ts">
	import { base } from '$app/paths';
	import type { Project } from '$lib/interfaces/project.interface';
	import Icon from './Icon.svelte';

	export let project: Project;
	export let horizontalCenter = false;
</script>

<div class="result-card" class:horizontal-center={horizontalCenter}>
	<div class="decorative-icon">
		<Icon svg={project.id} color="white" size="parent" />
	</div>
	<div class="content">
		<p class="subtitle">{project.category}</p>

		<div class="title">
			<h3>{project.title}</h3>
		</div>

		<hr aria-hidden="true" />
		<p>{@html project.shortSummary}</p>
	</div>
	<div class="links">
		<a href="{base}/{project.id}" class="link-more-info">
			<span aria-hidden="true">Mehr Informationen</span>
			<span class="sr-only">Mehr Informationen über {project.title}</span>
		</a>
		{#if project.showLinkToProject}
			<a
				class="link-to-project"
				href={project.linkToProject}
				aria-label="{project.linkText} (Öffnet neues Fenster)"
				><Icon svg="open-new-tab-hexagon" color="original" size="parent" />
			</a>
		{/if}
	</div>
</div>

<style lang="scss">
	.result-card {
		min-height: 25rem;
		max-width: 16.25rem;
		width: 100%;

		background-color: var(--color-white);
		box-shadow: 0px 6px 10px 6px rgba(var(--color-black-rgb), 0.05);

		position: relative;

		&.horizontal-center {
			margin-inline: auto;
		}

		.decorative-icon {
			background-color: var(--color-grey-blue);
			height: 8.125rem;
			padding: 1.25rem;
			box-sizing: border-box;
		}

		.content {
			padding: 0.5rem 1.25rem 0rem;

			.subtitle {
				color: var(--color-dark-grey);
				font-size: 0.875rem;
			}

			.title {
				position: relative;

				h3 {
					padding: 0;
					line-height: 120%;
					font-size: 1.375rem;

					hyphens: auto;
				}
			}

			hr {
				height: 1px;
				border: none;
				background-color: var(--color-blue-line);
				margin: 0.5rem 0 0.5rem;
			}

			p {
				margin: 0;
			}
		}

		.links {
			position: absolute;
			inset: auto 0 0 0;

			padding: 0 1.25rem 0.875rem;
			height: 2.5rem;

			display: flex;
			align-items: center;
			justify-content: space-between;

			.link-more-info {
				color: var(--color-blue);
				text-decoration: none;
			}

			.link-to-project {
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 0.125rem;
				z-index: 2;

				&:focus-visible {
					outline: 2px solid var(--color-black);
				}
			}
		}
	}
</style>
