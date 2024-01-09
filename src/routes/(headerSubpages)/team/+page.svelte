<script>
	import TeamMember from '../../../lib/components/TeamMember.svelte';
	import TitleSection from '../../../lib/components/TitleSection.svelte';
	import { TEAM_LEADERSHIP, TEAM_MEMBERS } from '../../../lib/constants/teamMembers.constant';
</script>

<svelte:head>
	<title>Team - SHUFFLE</title>
</svelte:head>

<TitleSection>
	<svelte:fragment slot="title">Team</svelte:fragment>
	<svelte:fragment slot="intro-text"
		>Wir sind ein interdisziplinäres Team aus Professor*innen, Doktor*innen und wissenschaftlichen
		Mitarbeiter*innen aus verschiedensten Fachbereichen wie Pädagogik, Informatik und Ethik.
	</svelte:fragment>
</TitleSection>

<div class="page-content">
	<ul class="leadership-list">
		{#each TEAM_LEADERSHIP as member}
			<TeamMember {member} />
		{/each}
	</ul>
	<hr class="list-seperator" />
	<ul class="team-list">
		{#each TEAM_MEMBERS as member}
			<TeamMember {member} />
		{/each}
	</ul>
</div>

<style lang="scss">
	.page-content {
		padding: var(--outer-spacing);
	}

	.leadership-list {
		margin-bottom: 3.125rem;
	}

	.list-seperator {
		max-width: 18.75rem;
		height: 1px;
		border: none;
		background-color: var(--color-blue-line);

		margin: 0rem auto 3.75rem;
	}

	ul {
		padding: 0;

		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 3.125rem 1.875rem;
	}

	@media (min-width: 41.875rem) {
		.list-seperator {
			display: none;
		}
	}
</style>
