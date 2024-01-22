<script lang="ts">
	import { base } from '$app/paths';
	import type { TeamMember } from '$lib/interfaces/teamMember.interface';

	export let member: TeamMember;
</script>

<li>
	{#if member.title}
		<p class="member-title">{member.title}</p>
	{/if}

	{#if member.img}
		<div class="img-wrapper">
			<img class="member-img" src="{base}/members/{member.img}" alt="" aria-hidden="true" />
		</div>
	{:else}
		<div class="img-placeholder img-wrapper">
			<img src="{base}/logos/shuffle-logo.svg" alt="" aria-hidden="true" />
		</div>
	{/if}

	<p class="member-name">{member.name}</p>
	<p class="member-project-partner">{member.projectPartner}</p>

	{#if member.email}
		<a href="mailto:{member.email}" class="member-email">{member.email}</a>
	{/if}
</li>

<style lang="scss">
	li {
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	p {
		margin: 0;
	}

	.member-title {
		font-weight: bold;
		font-size: 1.25rem;
		margin-bottom: 0.625rem;
	}

	.member-name {
		font-weight: bold;
		font-size: 1rem;
	}

	.member-project-partner {
		color: var(--color-dark-grey);
		font-size: 0.875rem;
	}

	.member-email {
		font-size: 0.875rem;
		color: var(--color-blue);
		text-decoration: none;
	}

	.img-wrapper {
		width: 18.75rem;
		max-width: 18.75rem;
		aspect-ratio: 1;
		background: var(--color-blue-gradient);
		margin-bottom: 0.625rem;
		position: relative;

		&::before {
			content: '';
			background: var(--color-blue-gradient);
			mix-blend-mode: color;
			position: absolute;
			inset: 0;
			z-index: 2;
		}

		&.img-placeholder {
			display: flex;
			align-items: center;
			justify-content: center;

			img {
				width: 5rem;
				aspect-ratio: 1;
				filter: grayscale(100%);
				opacity: 20%;
			}
		}

		.member-img {
			width: 100%;
			max-width: 18.75rem;
			aspect-ratio: 1;
			object-fit: cover;
			filter: grayscale(100%);
		}
	}
</style>
