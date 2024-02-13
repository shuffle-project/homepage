<script lang="ts">
	import Icon from './Icon.svelte';

	export let link: string;
	export let details = '';
	export let detailsLang: 'de' | 'en' = 'de';
	export let invertedStyle = false;
</script>

<a href={link} class:invertedStyle>
	<span aria-hidden="true"><slot /></span>
	<span class="sr-only"
		><slot /><span lang={detailsLang}>{details}</span> (öffnet neues Fenster)</span
	>
	<Icon svg="open-in-new-tab" size="20" color={invertedStyle ? 'white' : 'blue'} />
</a>

<style lang="scss">
	a {
		color: var(--color-blue);
		text-decoration: none;

		display: flex;
		align-items: center;
		gap: 0.125rem;

		white-space: nowrap;

		&.invertedStyle {
			color: var(--color-white);
			background-color: var(--color-blue);
			padding: 0.25rem 0.5rem;
		}
	}

	@media (max-width: 37.4375rem) {
		a {
			white-space: initial;
		}
	}
</style>
