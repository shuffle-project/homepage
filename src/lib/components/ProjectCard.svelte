<script lang="ts">
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
		<p class="subtitle">{project.cardSubtitle}</p>

		<div class="title">
			<div class="color-square in-result-card" />
			<h3>{project.title}</h3>
		</div>

		<hr aria-hidden="true" />
		<p>{project.cardText}</p>
	</div>
	<div class="links">
		<a href="/{project.id}" class="link-more-info">
			<span aria-hidden="true">Mehr Informationen</span>
			<span class="sr-only">Mehr Informationen über {project.title}</span>
		</a>
		<div class="link-to-project">
			<a href="/" aria-label="{project.linkText} (Öffnet neues Fenster)"
				><Icon svg="open-in-new-tab" color="white" /></a
			>
		</div>
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
			background-color: var(--color-dark-grey);
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

			padding: 0 1.25rem 1.25rem;

			display: flex;
			align-items: center;
			justify-content: space-between;

			.link-more-info {
				color: var(--color-blue);
				text-decoration: none;
			}

			.link-to-project {
				background-color: var(--color-blue);
				width: 2.25rem;
				height: 1.375rem;

				position: relative;

				display: flex;
				align-items: center;
				justify-content: center;

				transition: transform 0.2s ease-in-out;

				&:hover {
					transform: scale(110%);
					transition: transform 0.2s ease-in-out;
				}

				a {
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 0.375rem;
					z-index: 2;

					&:focus-visible {
						outline: 2px solid var(--color-black);
					}
				}

				&:before {
					content: '';
					position: absolute;
					top: -0.5rem;
					border-left: 1.15rem solid transparent;
					border-right: 1.15rem solid transparent;
					border-bottom: 0.5rem solid var(--color-blue);
				}

				&:after {
					content: '';
					position: absolute;
					bottom: -0.5rem;
					border-left: 1.15rem solid transparent;
					border-right: 1.15rem solid transparent;
					border-top: 0.5rem solid var(--color-blue);
				}
			}
		}
	}
</style>
