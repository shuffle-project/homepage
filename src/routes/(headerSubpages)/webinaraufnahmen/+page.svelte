<script>
	import BarrierefreiLehrenWebinar from '../../../lib/components/records/BarrierefreiLehrenWebinar.svelte';
	import BlindDateWebinar from '../../../lib/components/records/BlindDateWebinar.svelte';
	import DigitaleLernraumeWebinar from '../../../lib/components/records/DigitaleLernraumeWebinar.svelte';
	import ReifegradmodellWebinar from '../../../lib/components/records/ReifegradmodellWebinar.svelte';
	import TitleSection from '../../../lib/components/TitleSection.svelte';
</script>

<svelte:head>
	<title>Webinaraufnahmen - SHUFFLE</title>
</svelte:head>

<TitleSection>
	<svelte:fragment slot="title">Webinaraufnahmen</svelte:fragment>
	<svelte:fragment slot="intro-text">
		Hier finden Sie alle Aufzeichnungen der bisherigen Webinare.
	</svelte:fragment>
</TitleSection>

<div class="page-content">
	<DigitaleLernraumeWebinar />
	<BlindDateWebinar />
	<ReifegradmodellWebinar />
	<BarrierefreiLehrenWebinar />
</div>

<style lang="scss">
	.page-content {
		max-width: 60rem;
		box-sizing: border-box;
		width: 100%;
		margin: 1.875rem auto 0 auto;
		padding-inline: var(--outer-spacing);
	}

	@media (max-width: 41.25rem) {
		.page-content {
			padding-inline: 0;
		}
	}
</style>
