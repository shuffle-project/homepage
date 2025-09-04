<script lang="ts">
	import { resolve } from '$app/paths';
	import Icon from './Icon.svelte';

	interface Props {
		link: string;
		details?: string;
		detailsLang?: 'de' | 'en';
		invertedStyle?: boolean;
		secondaryStyle?: boolean;
		download?: boolean;
		allowReferrer?: boolean;
		noBase?: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		link,
		details = '',
		detailsLang = 'de',
		invertedStyle = false,
		secondaryStyle = false,
		download = false,
		allowReferrer = false,
		noBase = false,
		children
	}: Props = $props();
</script>

{#if !download}
	<a
		href={link}
		class:invertedStyle
		class:secondaryStyle
		target="_blank"
		rel={allowReferrer ? 'noopener no-referrer-when-downgrade' : 'noopener noreferrer'}
	>
		<span aria-hidden="true">{@render children?.()}</span>
		<span class="sr-only"
			>{@render children?.()}<span lang={detailsLang}>{details}</span> (öffnet neues Fenster)</span
		>
		<Icon svg="open-in-new-tab" size="20" color={invertedStyle ? 'white' : 'blue'} />
	</a>
{:else}
	<a href={!noBase ? resolve(`/${link}`) : link} download class:invertedStyle class:secondaryStyle>
		<span aria-hidden="true">{@render children?.()}</span>
		<span class="sr-only">{@render children?.()}<span lang={detailsLang}>{details}</span></span>
		<Icon svg="download" size="20" color={invertedStyle ? 'white' : 'blue'} />
	</a>
{/if}

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
			padding: 0.375rem 0.5rem;
			border: 1px solid var(--color-blue);
		}

		&.secondaryStyle {
			color: var(--color-blue);
			border: 1px solid var(--color-blue);
			background-color: var(--color-white);
			padding: 0.375rem 0.5rem;
		}
	}

	@media (max-width: 37.4375rem) {
		a {
			white-space: initial;
		}
	}
</style>
