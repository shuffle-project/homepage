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
		display: flex;
		align-items: center;
		gap: 0.125rem;
		text-decoration: none;
	}
</style>
