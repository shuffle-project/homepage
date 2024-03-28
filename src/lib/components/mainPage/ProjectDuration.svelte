<script lang="ts">
	let min = 1;
	let max = 1614;
	let value = max - 646;
</script>

<span class="inline-wrapper">
	<span class="start-date">August 2021</span>
	<span class="countdown-line">
		<span class="countdown-info">noch XXX Tage</span>
		<input type="range" {min} {max} {value} />
	</span>
	<span class="end-date">Dezember 2025</span>
</span>

<style lang="scss">
	.inline-wrapper {
		width: 100%;

		display: flex;
		gap: 0.625rem;

		.start-date,
		.end-date {
		}

		.countdown-line {
			width: auto;
			flex-grow: 1;
			position: relative;

			.countdown-info {
				font-size: 0.875rem;

				position: absolute;
			}

			input[type='range'] {
				margin: 0;

				&::-webkit-slider-thumb {
				}

				&::-moz-range-thumb {
				}
			}
		}
	}
</style>
