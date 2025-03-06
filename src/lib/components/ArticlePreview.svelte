<script lang="ts">
	import { base } from '$app/paths';

	interface Props {
		title: string;
		time: string;
		link: string;
		children?: import('svelte').Snippet;
	}

	let {
		title,
		time,
		link,
		children
	}: Props = $props();
</script>

<article class="article-preview-wrapper">
	<time datetime={time}>{time}</time>
	<h2>{title}</h2>
	<p>{@render children?.()}</p>
	<a href="{base}/aktuelles/{link}">
		<span aria-hidden="true">Mehr erfahren</span>
		<span class="sr-only">Mehr erfahren über {title}</span>
	</a>
</article>

<style lang="scss">
	.article-preview-wrapper {
		border: 1px solid var(--color-blue-line);

		max-width: var(--max-text-width);
		padding: 1.25rem;
		box-sizing: border-box;
		width: 100%;

		time {
			font-size: 0.875rem;
			color: var(--color-dark-grey);
		}

		h2 {
			font-size: clamp(1.25rem, 1vw + 1rem, 1.375rem);
			margin: 0.125rem 0 0.625rem;
		}

		a {
			text-decoration: none;
		}

		p {
			margin-top: 0;
		}
	}
</style>
