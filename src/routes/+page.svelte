<script lang="ts">
	import ProjectPartners from '$lib/components/mainPage/ProjectPartners.svelte';
	import Results from '$lib/components/mainPage/Results.svelte';
	import ShuffleExplanation from '$lib/components/mainPage/ShuffleExplanation.svelte';
	import Hero from '../lib/components/mainPage/Hero.svelte';
</script>

<svelte:head>
	<title>Startseite - SHUFFLE</title>
</svelte:head>

<Hero />
<ShuffleExplanation />
<Results />
<ProjectPartners />
