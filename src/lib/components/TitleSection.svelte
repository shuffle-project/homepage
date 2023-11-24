<div class="title-section-wrapper">
	<div class="title-section">
		<h1 class="title"><slot name="title" /></h1>
		<p class="intro-text"><slot name="intro-text" /></p>
	</div>
</div>

<style lang="scss">
	.title-section-wrapper {
		width: 100%;
		background: var(--color-blue-gradient);
		padding-block: 4rem;
		height: 12rem;
		display: flex;
		align-items: flex-end;
	}

	.title-section {
		width: 100%;
		max-width: var(--max-text-width);
		padding-inline: var(--outer-spacing);
		margin-inline: auto;
		box-sizing: border-box;
	}
</style>
