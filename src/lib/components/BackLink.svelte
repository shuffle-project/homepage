<script lang="ts">
	import Icon from './Icon.svelte';
</script>

<div>
	<a href="/">
		<Icon svg="arrow-back" size="20" color="blue" />
		<span>Zurück zur Startseite</span></a
	>
</div>

<style lang="scss">
	div {
		display: inline-block;
	}

	a {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		text-decoration: none;
		color: var(--color-blue);
		padding: 0.25rem 0.375rem;
		outline-offset: 0px;
	}
</style>
