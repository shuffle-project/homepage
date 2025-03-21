<script lang="ts">
	import type { Project } from '$lib/interfaces/project.interface';

	import Icon from '../Icon.svelte';
	import Link from '../Link.svelte';
	interface Props {
		project: Project;
	}

	let { project }: Props = $props();
</script>

<div class="project-header">
	<div class="upper-part">
		<div class="decorative-icon">
			<Icon svg={project.id} color="white" size="parent" />
		</div>
		<div class="project-details">
			<div class="title">
				{#if project.longTitle}
					<h1>{@html project.longTitle}</h1>
				{:else}
					<h1>{@html project.title}</h1>
				{/if}
			</div>
			<p>{@html project.summary}</p>

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
	{#if project.download}
		<div class="link-to-project-wrapper">
			{#if project.additionalDownload}
				<Link noBase download secondaryStyle link={project.additionalDownload.url}
					>{project.additionalDownload.label}
				</Link>
			{/if}
			<Link noBase download invertedStyle link={project.download.url}>{project.download.label}</Link
			>
		</div>
	{/if}

	{#if project.link}
		<div class="link-to-project-wrapper">
			{#if project.additionalLink}
				<Link secondaryStyle link={project.additionalLink.url}>{project.additionalLink.label}</Link>
			{/if}

			<Link invertedStyle link={project.link.url}>{project.link.label}</Link>
		</div>
	{/if}

	{#if project.subProjects}
		<div class="subprojects-wrapper">
			{#each project.subProjects as subProject}
				<div class="subproject">
					<hr aria-hidden="true" />
					<h2>{@html subProject.title}</h2>
					<p>{@html subProject.summary}</p>
					<div class="link-to-subproject">
						<Link invertedStyle link={subProject.link.url}>{subProject.link.label}</Link>
					</div>
				</div>
			{/each}
		</div>
	{/if}

	{#if project.showInDevelopmentInfo}
		<p class="in-development-info">
			Dieses Projektergebnis befindet sich derzeit noch in der Entwicklungsphase, daher steht noch
			kein Link zur Verfügung.
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
					-webkit-hyphens: auto;

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

		.link-to-project-wrapper {
			display: flex;
			gap: 0.5rem;
			justify-content: flex-end;
			flex-wrap: wrap;
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
					height: 10rem;
					padding: 1.25rem 2.5rem;
				}
			}
		}
	}
</style>
