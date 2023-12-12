<script lang="ts">
	import type { Project } from '$lib/interfaces/project.interface';

	import Icon from '../Icon.svelte';
	export let project: Project;
</script>

<div class="project-header">
	<div class="decorative-icon">
		<Icon svg={project.id} color="white" size="parent" />
	</div>
	<div class="project-details">
		<div class="title">
			<div class="color-square" />
			<h1>{project.title}</h1>
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

		<a href={project.linkToProject} class="link-to-project">
			<span aria-hidden="true">{project.linkText}</span>
			<span class="sr-only">{project.linkText} (öffnet neues Fenster)</span>
			<Icon svg="open-in-new-tab" color="white" />
		</a>
	</div>
</div>

<style lang="scss">
	.project-header {
		width: 100%;
		max-width: 60rem;

		border: 1px solid var(--color-blue-line);
		padding: 1.875rem;

		display: flex;
		gap: 1.875rem;

		box-sizing: border-box;

		.decorative-icon {
			min-width: clamp(5.9375rem, 25vw + 1rem, 11.875rem);
			aspect-ratio: 1/1.5;
			background-color: var(--color-dark-grey);
			padding-inline: 2.5rem;
			box-sizing: border-box;
			box-shadow: 0px 6px 10px 0px rgba(var(--color-black-rgb), 0.15);
			align-self: center;
		}

		.project-details {
			position: relative;

			.title {
				display: flex;
				align-items: baseline;
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

			.link-to-project {
				position: absolute;
				inset: auto 0 0 auto;

				background-color: var(--color-blue);
				color: var(--color-white);
				padding: 0.375rem 0.75rem;
				text-decoration: none;
				display: flex;
				align-items: center;
				gap: 0.3125rem;
			}
		}
	}

	@media (max-width: 40.5625rem) {
		.project-header {
			flex-direction: column;

			.decorative-icon {
				min-width: 100%;
				max-height: 10rem;
				padding: 1.25rem 2.5rem;
			}

			.project-details {
				.project-partners {
					margin-bottom: 4rem;
				}
			}
		}
	}
</style>
