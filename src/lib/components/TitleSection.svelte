<div class="title-section-wrapper">
	<div class="title-section">
		<h1 class="title"><slot name="title" /></h1>
		<p class="intro-text"><slot name="intro-text" /></p>
		<slot name="dgs-icon" />
	</div>
</div>

<style lang="scss">
	.title-section-wrapper {
		width: 100%;
		background: var(--color-blue-gradient);
		padding: 6rem 0 2rem;
		height: 14rem;
		display: flex;
		align-items: flex-end;
	}

	.title-section {
		width: 100%;
		max-width: var(--max-text-width);
		padding-inline: var(--outer-spacing);
		margin-inline: auto;
		box-sizing: border-box;

		h1 {
			line-height: 120%;
		}
	}
</style>
