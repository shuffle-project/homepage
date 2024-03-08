<script lang="ts">
	import { base } from '$app/paths';
	import type { TeamMember } from '$lib/interfaces/teamMember.interface';
	import { onCopyEmailToClipboard } from '$lib/utils/utils';
	import Icon from './Icon.svelte';

	export let member: TeamMember;

	let short = '';
	let domain = '';

	if (member.contact) {
		short = member.contact.short;
		domain = member.contact.domain;
	}
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

	{#if member.contact}
		<button
			class="email-button"
			aria-label="E-Mail von {member.name} in die Zwischenablage kopieren"
			on:click={() => onCopyEmailToClipboard(short, domain)}
		>
			<Icon svg="copy" size="16" color="blue" />
			<span aria-hidden="true">E-Mail Adresse</span>
		</button>
	{:else}
		<div class="email-button-placeholder" />
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

	.email-button {
		min-height: 1.875rem;

		font-size: 1rem;
		color: var(--color-blue);
		text-decoration: none;

		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.email-button-placeholder {
		min-height: 1.875rem;
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
