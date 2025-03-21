<script lang="ts">
	import { base } from '$app/paths';
	import type { Project } from '$lib/interfaces/project.interface';
	import Icon from './Icon.svelte';

	interface Props {
		project: Project;
		horizontalCenter?: boolean;
	}

	let { project, horizontalCenter = false }: Props = $props();
</script>

<div class="result-card" class:horizontal-center={horizontalCenter}>
	<div class="decorative-icon">
		<a href="{base}/{project.id}" aria-label="Mehr erfahren über {project.title}">
			<Icon svg={project.id} color="white" size="parent" />
		</a>
	</div>
	<div class="content-wrapper">
		<div class="content">
			<div class="title">
				<h3>{project.title}</h3>
			</div>

			<hr aria-hidden="true" />
			<p>{@html project.shortSummary}</p>
		</div>
		<div class="links">
			<a href="{base}/{project.id}" class="link-more-info">
				<span aria-hidden="true">Mehr erfahren</span>
				<span class="sr-only">Mehr erfahren über {project.title}</span>
			</a>
			{#if project.link}
				<a
					class="link-to-project"
					href={project.link.url}
					aria-label="{project.link.label} (Öffnet neues Fenster)"
					target="_blank"
					rel="noopener noreferrer"
					><Icon svg="open-new-tab-hexagon" color="original" size="parent" />
				</a>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	.result-card {
		min-height: 24rem;
		max-width: 16.25rem;
		width: 100%;

		background-color: var(--color-white);
		// box-shadow: 0px 6px 10px 6px rgba(var(--color-black-rgb), 0.05);
		// box-shadow: 0px 0px 20px 6px rgba(var(--color-blue-rgb), 0.2);

		&.horizontal-center {
			margin-inline: auto;
		}

		.decorative-icon {
			background-color: var(--color-grey-blue);
			height: 8.125rem;
			padding: 1.25rem;
			box-sizing: border-box;

			a:focus-visible {
				outline: 2px solid var(--color-white);
			}
		}

		.content-wrapper {
			border: 1px solid var(--color-blue-line);
			border-top: 0px;
			position: relative;
			min-height: calc(24rem - 8.125rem);

			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		.content {
			padding: 0.625rem 1.125rem 0rem;

			.title {
				h3 {
					padding: 0;
					line-height: 120%;
					font-size: 1.375rem;

					hyphens: auto;
					-webkit-hyphens: auto;
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
			padding: 0 1.125rem 0.875rem;
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
