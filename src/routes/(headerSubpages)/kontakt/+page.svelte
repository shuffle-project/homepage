<script>
	import CopyEmail from '../../../lib/components/CopyEmail.svelte';
	import TitleSection from '../../../lib/components/TitleSection.svelte';

	let contactEmail = 'info@shuffle-projekt.de';
	let contactName = 'SHUFFLE-Team';
</script>

<svelte:head>
	<title>Kontakt - SHUFFLE</title>
</svelte:head>

<TitleSection>
	{#snippet title()}
		Kontakt
	{/snippet}
	{#snippet introText()}
		Das Projekt ist abgeschlossen. Bei wichtigen Fragen und Anliegen können Sie uns jedoch weiterhin
		über die folgende E-Mail-Adresse erreichen.
	{/snippet}
</TitleSection>

<div class="wrapper">
	<div class="call-to-action">
		<p>Bitte melden Sie sich beim {contactName} unter:</p>
		<a class="contact-email" href="mailto:{contactEmail}">{contactEmail}</a>
		<CopyEmail email={contactEmail} />
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: start;
		min-height: 50vh;
	}

	.call-to-action {
		border: 1px solid var(--color-blue-line);

		max-width: var(--max-text-width);
		padding: 1.25rem;
		box-sizing: border-box;
		width: 100%;

		margin: 2.5rem var(--outer-spacing);

		p {
			margin: 0 0 0.125rem;
		}

		.contact-email {
			color: var(--color-blue);
			text-decoration: none;
		}
	}
</style>
