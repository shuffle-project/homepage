<script lang="ts">
	import Icon from './Icon.svelte';

	export let link: string;
	export let details = '';
	export let detailsLang: 'de' | 'en' = 'de';
</script>

<a href={link}>
	<span aria-hidden="true"><slot /></span>
	<span class="sr-only"
		><slot /><span lang={detailsLang}>{details}</span> (öffnet neues Fenster)</span
	>
	<Icon svg="open-in-new-tab" size="20" color="blue" />
</a>

<style lang="scss">
	a {
		color: var(--color-blue);
		text-decoration: none;

		display: flex;
		align-items: center;
		gap: 0.125rem;

		white-space: nowrap;
	}

	@media (max-width: 37.4375rem) {
		a {
			white-space: initial;
		}
	}
</style>
