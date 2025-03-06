<script lang="ts">
	import { base } from '$app/paths';

	interface Props {
		svg: string;
		alt?: string;
		color?: 'original' | 'white' | 'black' | 'blue' | 'dark-grey';
		size?: '20' | '24' | '30' | '16' | 'parent';
	}

	let { svg = $bindable(), alt = '', color = 'black', size = '24' }: Props = $props();

	const svgSize = 'size-' + size;
	if (!svg.endsWith('.svg')) svg = svg + '.svg';
	if (!svg.startsWith('/')) svg = '/icons/' + svg;
</script>

<img src={base + svg} {alt} aria-hidden={alt === ''} class="{color} {svgSize}" />

<style lang="scss">
	img {
		&.size-16 {
			width: 1rem;
			height: 1rem;
		}
		&.size-20 {
			width: 1.25rem;
			height: 1.25rem;
		}

		&.size-24 {
			width: 1.5rem;
			height: 1.5rem;
		}

		&.size-30 {
			width: 1.875rem;
			height: 1.875rem;
		}

		&.size-parent {
			width: 100%;
			height: 100%;
		}

		&.white {
			filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(241deg) brightness(103%)
				contrast(103%);
		}

		&.black {
			filter: invert(9%) sepia(4%) saturate(3987%) hue-rotate(185deg) brightness(95%) contrast(94%);
		}

		&.blue {
			filter: invert(26%) sepia(68%) saturate(630%) hue-rotate(186deg) brightness(92%) contrast(91%);
		}

		&.dark-grey {
			filter: invert(36%) sepia(12%) saturate(268%) hue-rotate(184deg) brightness(97%) contrast(87%);
		}
	}
</style>
