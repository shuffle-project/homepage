<div class="hero-section">
	<img src="/logos/shuffle-logo.svg" alt="" aria-hidden="true" />
	<h1>SHUFFLE</h1>
	<p>Hochschulinitiative digitale Barrierefreiheit für Alle</p>
</div>

<style lang="scss">
	.hero-section {
		background: var(--color-blue-gradient);
		height: max(30rem, 100vh);
		transition: height 1s ease-in-out;

		display: flex;
		flex-direction: column;

		align-items: center;
		justify-content: center;

		img {
			width: 10rem;
			height: 10rem;
		}

		h1 {
			letter-spacing: 0.5rem;
			margin: 0.625rem 0;
		}

		p {
			font-size: clamp(1rem, 2vw + 1rem, 2rem);
			font-weight: 300;
			margin: 0;
			text-align: center;
			margin-inline: var(--outer-spacing);
		}
	}
</style>
