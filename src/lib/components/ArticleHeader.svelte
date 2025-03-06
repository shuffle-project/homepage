<script lang="ts">
	import { base } from '$app/paths';
	import { WHOLE_TEAM, type TeamMemberName } from '$lib/constants/teamMembers.constant';
	import type { TeamMember } from '$lib/interfaces/teamMember.interface';

	interface Props {
		title: string;
		authorName: TeamMemberName;
		date: string;
	}

	let { title, authorName, date }: Props = $props();
	let author: TeamMember = WHOLE_TEAM.find((teamMember) => teamMember.name === authorName)!;
</script>

<h1>{title}</h1>

<div class="details-section">
	<div class="author">
		{#if author.img}
			<div class="img-wrapper">
				<img class="member-img" src="{base}/members/{author.img}" alt="" aria-hidden="true" />
			</div>
		{:else}
			<div class="img-placeholder img-wrapper">
				<img src="{base}/logos/shuffle-logo.svg" alt="" aria-hidden="true" />
			</div>
		{/if}
		<span>{author.name}</span>
	</div>
	<span>{date}</span>
</div>

<style lang="scss">
	h1 {
		font-size: clamp(1.375rem, 3vw + 1rem, 1.875rem);
		margin: 0;
	}

	.details-section {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin: 1.25rem 0 2.5rem 0;
	}

	.author {
		display: flex;
		align-items: center;
		gap: 0.625rem;
	}

	.img-wrapper {
		width: 2.5rem;
		height: 2.5rem;

		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color-blue-gradient);

		position: relative;

		&::before {
			content: '';
			background: var(--color-blue-gradient);
			mix-blend-mode: color;
			position: absolute;
			inset: 0;
			z-index: 2;
			border-radius: 50%;
		}

		&.img-placeholder {
			display: flex;
			align-items: center;
			justify-content: center;

			img {
				width: 2rem;
				aspect-ratio: 1;
				filter: grayscale(100%);
				opacity: 20%;
			}
		}

		.member-img {
			max-width: 2.5rem;

			aspect-ratio: 1;
			object-fit: cover;
			filter: grayscale(100%);

			border-radius: 50%;
		}
	}
</style>
