<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	export let data;
	const { project } = data;
</script>

<div class="wrapper">
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
			<div class="link-to-project">
				<a href={project.linkToProject} class="link-to-project">
					<span aria-hidden="true">Zu {project.title}</span>
					<span class="sr-only">Zu {project.title} (öffnet neues Fenster)</span>
					<Icon svg="open-in-new-tab" color="white" />
				</a>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		margin: 6.5rem var(--outer-spacing) 0;
		display: flex;
		justify-content: center;
	}

	.project-header {
		width: 100%;
		max-width: 60rem;

		border: 1px solid var(--color-blue-line);
		padding: 1.875rem;

		display: flex;
		gap: 1.875rem;

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
			.title {
				display: flex;
				align-items: baseline;
			}

			.project-partners {
				display: flex;
				gap: 1.25rem;
				list-style: none;
				padding: 0;

				.partner {
					width: 1.875rem;
					height: 1.875rem;
				}
			}

			.link-to-project {
				display: flex;
				justify-content: flex-end;

				a {
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
	}
</style>
