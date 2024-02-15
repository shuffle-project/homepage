<script lang="ts">
	import type { Project } from '$lib/interfaces/project.interface';

	import Icon from '../Icon.svelte';
	import LinkNewTab from '../LinkNewTab.svelte';
	export let project: Project;
</script>

<div class="project-header">
	<div class="upper-part">
		<div class="decorative-icon">
			<Icon svg={project.id} color="white" size="parent" />
		</div>
		<div class="project-details">
			<div class="title">
				<!-- <div class="color-square" /> -->
				<h1>{@html project.title}</h1>
			</div>
			<p>{project.summary}</p>

			<ul class="project-partners" aria-label="Projektpartner">
				{#each project.partners as partner}
					<li class="partner">
						<Icon
							svg={'icon-' + partner.toLowerCase().split(' ').at(-1)}
							alt={partner}
							size="parent"
							color="dark-grey"
						/>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	{#if project.link}
		<div class="link-to-project">
			<LinkNewTab invertedStyle link={project.link.toProject}>{project.link.label}</LinkNewTab>
		</div>
	{/if}

	{#if project.subProjects}
		<div class="subprojects-wrapper">
			{#each project.subProjects as subProject}
				<div class="subproject">
					<hr aria-hidden="true" />
					<h2>{subProject.title}</h2>
					<p>{subProject.summary}</p>
					<div class="link-to-subproject">
						<LinkNewTab invertedStyle link={subProject.link.toProject}
							>{subProject.link.label}</LinkNewTab
						>
					</div>
				</div>
			{/each}
		</div>
	{/if}

	{#if project.showInDevelopmentInfo}
		<p class="in-development-info">
			Das Projekt befindet sich derzeit noch in der Entwicklungsphase, daher steht noch kein Link
			zur Verfügung.
		</p>
	{/if}
</div>

<style lang="scss">
	.project-header {
		width: 100%;
		max-width: 60rem;

		border: 1px solid var(--color-blue-line);
		padding: 1.875rem;

		box-sizing: border-box;

		position: relative;

		.upper-part {
			display: flex;
			gap: 1.875rem;
			.decorative-icon {
				min-width: clamp(5.9375rem, 25vw + 1rem, 11.875rem);
				aspect-ratio: 1/1.5;
				background-color: var(--color-grey-blue);
				padding-inline: 2.5rem;
				box-sizing: border-box;
				box-shadow: 0px 6px 10px 0px rgba(var(--color-black-rgb), 0.15);
				align-self: center;
			}

			.project-details {
				.title {
					display: flex;
					align-items: baseline;
					hyphens: auto;

					h1 {
						line-height: 110%;
					}
				}

				.project-partners {
					display: flex;
					gap: 1.25rem;
					list-style: none;
					padding: 0;
					margin-bottom: 3rem;

					.partner {
						width: 1.875rem;
						height: 1.875rem;
					}
				}
			}
		}

		.subprojects-wrapper {
			.subproject {
				hr {
					height: 1px;
					border: none;
					background-color: var(--color-blue-line);
					margin: 1.875rem 0;
				}

				.link-to-subproject {
					display: flex;
					justify-content: end;
				}
			}
		}

		.link-to-project {
			position: absolute;
			inset: auto 1.875rem 1.875rem auto;
		}

		.in-development-info {
			background-color: var(--color-blue-line);
			margin: 0rem -1.875rem -1.875rem;
			padding: 0.75rem 1.875rem;
		}
	}

	@media (max-width: 40.5625rem) {
		.project-header {
			.upper-part {
				flex-direction: column;

				.decorative-icon {
					min-width: 100%;
					max-height: 10rem;
					padding: 1.25rem 2.5rem;
				}
			}

			&:has(.link-to-project) {
				.upper-part {
					margin-bottom: 3rem;
				}
			}

			.link-to-project {
				inset: auto 1.875rem 1.875rem auto;
				margin-left: 1.875rem;
			}
		}
	}
</style>
