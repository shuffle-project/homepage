<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '../Icon.svelte';

	let infoSpan: HTMLSpanElement | undefined = $state();
	let rangeInput: HTMLInputElement | undefined = $state();

	let smallScreen = false;

	const min = 1;
	const max = 1614;

	const today = new Date();
	const endDay = new Date('2026-01-01');

	const dayDifference = dateDiffInDays(today, endDay);
	const inputValue = max - dayDifference;
	const textValue =
		dayDifference === 0
			? 'Beendet'
			: dayDifference === 1
				? `noch ${dayDifference} Tag`
				: `noch ${dayDifference} Tage`;

	function dateDiffInDays(a: Date, b: Date) {
		const _MS_PER_DAY = 1000 * 60 * 60 * 24;
		const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
		const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

		return Math.floor((utc2 - utc1) / _MS_PER_DAY);
	}

	function repositionInfoSpan() {
		if (smallScreen && infoSpan) {
			infoSpan.style.left = '0';
			infoSpan.style.opacity = '100%';
			return;
		}

		if (infoSpan && rangeInput && !smallScreen) {
			const val = Number(rangeInput.value);
			const min = rangeInput.min ? Number(rangeInput.min) : 0;
			const max = rangeInput.max ? Number(rangeInput.max) : 100;
			const newVal = Number(((val - min) * 100) / (max - min));

			infoSpan.style.left = `calc(${newVal}% + (${-6.375}rem))`;
			infoSpan.style.opacity = '100%';
		}
	}

	onMount(() => {
		smallScreen = window.innerWidth < 382;
		repositionInfoSpan();

		window.addEventListener('resize', () => {
			if (smallScreen !== window.innerWidth < 382) {
				smallScreen = window.innerWidth < 382;
				repositionInfoSpan();
			}
		});
	});
</script>

<span class="inline-wrapper" aria-label="Von August 2021 bis Dezember 2025, {textValue}">
	<span aria-hidden="true" class="start-date">Aug. 2021</span>
	<span aria-hidden="true" class="countdown-line">
		<span class="countdown-info" bind:this={infoSpan}>
			<div class="countdown-text">{textValue}</div>

			<div class="countdown-frame">
				<Icon svg="countdown-frame" size="parent" color="dark-grey" />
			</div>
		</span>
		<input type="range" {min} {max} value={inputValue} bind:this={rangeInput} disabled />
	</span>
	<span aria-hidden="true" class="end-date">Dez. 2025</span>
</span>

<style lang="scss">
	.inline-wrapper {
		width: 100%;

		display: flex;
		gap: 0.625rem;

		.start-date,
		.end-date {
			white-space: nowrap;
		}

		.countdown-line {
			width: auto;
			flex-grow: 1;
			position: relative;

			.countdown-info {
				font-size: 0.8125rem;
				color: var(--color-dark-grey);

				position: absolute;
				bottom: 0.25rem;

				opacity: 0%;
				transition: opacity 0.1s ease-out;

				.countdown-text {
					min-width: 6.375rem;
					position: absolute;
					white-space: nowrap;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-top: 0.125rem;
				}
				.countdown-frame {
					min-width: 6.375rem;
				}
			}

			input[type='range'] {
				margin: 0;
				appearance: none;
				-webkit-appearance: none;
				height: 1px;
				width: 100%;
				background-color: var(--color-dark-grey);

				&::-webkit-slider-thumb {
					appearance: none;
					-webkit-appearance: none;
				}

				&::-moz-range-thumb {
					appearance: none;
					-webkit-appearance: none;
					height: 0;
					width: 0;
					opacity: 0%;
				}
			}
		}
	}

	@media (max-width: 23.875rem) {
		.inline-wrapper {
			.countdown-line {
				.countdown-info {
					left: 0;
					right: 0;
					display: flex;
					justify-content: center;
					bottom: 1rem;
					width: 100%;
					height: 100%;

					.countdown-text {
						border: 1px solid var(--color-dark-grey);
					}
				}

				.countdown-frame {
					display: none;
				}

				input[type='range'] {
					&::-webkit-slider-thumb {
						appearance: none;
						-webkit-appearance: none;
						height: 0.625rem;
						width: 2px;
						opacity: 100%;
						background-color: var(--color-dark-grey);
						border: none;
						border-radius: 0;
					}

					&::-moz-range-thumb {
						appearance: none;
						-webkit-appearance: none;
						height: 0.625rem;
						width: 2px;
						opacity: 100%;
						background-color: var(--color-dark-grey);
						border: none;
						border-radius: 0;
					}
				}
			}
		}
	}
</style>
