<script lang="ts">
	import type { JoinEvaluation } from '$lib/interfaces/project.interface';
	import CopyEmail from '../CopyEmail.svelte';

	export let join: JoinEvaluation;
</script>

<div class="wrapper">
	<div class="info">
		<h2>{join.title}</h2>
		<p>{join.introduction}</p>
	</div>
	<hr aria-hidden="true" />
	<div class="call-to-action">
		<h3>Kontakt</h3>
		<p>Bitte melden Sie sich bei {join.contactName} unter:</p>
		<a class="contact-email" href="mailto:{join.contactEmail}">{join.contactEmail}</a>
		<CopyEmail email={join.contactEmail} />
	</div>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		max-width: 60rem;
		padding: 1.875rem;
		box-sizing: border-box;
		background: var(--color-blue-gradient);
		margin-top: 3.125rem;

		display: flex;

		hr {
			border: none;
			min-width: 4px;
			background-color: var(--color-white);
			margin: -1.875rem 1.875rem;
		}

		.call-to-action {
			min-width: 13rem;

			p {
				margin-bottom: 0;
			}

			.contact-email {
				color: var(--color-blue);
				text-decoration: none;
			}
		}
	}

	@media (max-width: 40.5625rem) {
		.wrapper {
			flex-direction: column;

			hr {
				margin: 1.875rem -1.875rem;
				min-height: 4px;
			}
		}
	}
</style>
