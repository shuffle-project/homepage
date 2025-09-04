<script lang="ts">
	import { resolve } from '$app/paths';
	import Icon from './Icon.svelte';

	interface Props {
		label?: string;
		linkTo?: string;
		paddingLeft?: boolean;
	}

	let { label = 'Zurück zur Startseite', linkTo, paddingLeft = true }: Props = $props();
</script>

<div>
	<a href={resolve(`/${linkTo}`)} class:paddingLeft>
		<Icon svg="arrow-back" size="16" color="blue" />
		<span>{label}</span></a
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
		padding: 0.25rem 0.375rem 0.25rem 0;
		outline-offset: 0px;

		&.paddingLeft {
			padding: 0.25rem 0.375rem;
		}
	}
</style>
