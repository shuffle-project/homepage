<script lang="ts">
	import { getGlobalState } from '$lib/globalState.svelte';

	const globalState = getGlobalState();
</script>

<div class="wrapper">
	<label for="apa-toggle">APA-Quellenangaben verwenden</label>
	<input id="apa-toggle" type="checkbox" bind:checked={globalState.useAPAFormat} />
</div>

<style lang="scss">
	.wrapper {
		border-bottom: 1px solid var(--color-blue-line);

		padding: 0.625rem 1.875rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.25rem;
		width: 100%;

		label {
			cursor: pointer;
		}

		input {
			appearance: none;
			-webkit-appearance: none;
			min-width: 4rem;
			height: 2rem;
			border: 1px solid var(--color-black);
			border-radius: 0;
			position: relative;
			background-color: var(--color-white);
			cursor: pointer;

			&::before {
				position: absolute;
				inset: 0;
				margin-block: auto;
				margin-left: 0.25rem;
				content: '';
				height: 1.5rem;
				width: 1.5rem;
				background-color: var(--color-dark-grey);

				transition: all 0.2s ease-in-out;
			}

			&:checked {
				&::before {
					margin-left: 2.125rem;

					content: url('/icons/check-white.svg');

					background-color: var(--color-black);
				}
			}

			&:focus-visible {
				outline: 2px solid var(--color-black);
				outline-offset: 2px;
			}
		}
	}

	@media (max-width: 40.5625rem) {
		.wrapper {
			padding: 0.625rem 0;
		}
	}
</style>
