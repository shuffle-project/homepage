<script lang="ts">
	import BackLink from '$lib/components/BackLink.svelte';
	import JoinEvaluation from '$lib/components/projectDetailPage/JoinEvaluation.svelte';
	import ProjectHeader from '$lib/components/projectDetailPage/ProjectHeader.svelte';
	import Publications from '$lib/components/projectDetailPage/Publications.svelte';

	export let data;
	const { project } = data;
</script>

<div class="wrapper">
	<div class="back-link-wrapper">
		<BackLink />
	</div>
	<ProjectHeader {project} />

	{#if project.joinEvaluation}
		<JoinEvaluation join={project.joinEvaluation} />
	{/if}

	{#if project.publications}
		<Publications publications={project.publications} />
	{/if}
</div>

<style lang="scss">
	.wrapper {
		margin: 6.5rem var(--outer-spacing) 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.back-link-wrapper {
		width: 100%;
		max-width: 60rem;
		margin: 1.25rem 1.875rem;
	}
</style>
