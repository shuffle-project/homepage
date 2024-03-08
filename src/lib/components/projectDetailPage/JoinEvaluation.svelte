<script lang="ts">
	import type { JoinEvaluation } from '$lib/interfaces/project.interface';
	import { onCopyEmailToClipboard } from '$lib/utils/utils';
	import Icon from '../Icon.svelte';

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
		<p>
			Bitte melden Sie sich bei {join.contactName} über die folgende E-Mail Adresse:
		</p>
		<button
			class="email-button"
			aria-label="E-Mail von {join.contactName} in die Zwischenablage kopieren"
			on:click={() => onCopyEmailToClipboard(join.contact.short, join.contact.domain)}
		>
			<Icon svg="copy" size="16" color="blue" />
			<span aria-hidden="true">E-Mail Adresse</span>
		</button>
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

			.email-button {
				min-height: 1.875rem;

				font-size: 1rem;
				color: var(--color-blue);
				text-decoration: none;

				display: flex;
				align-items: center;
				gap: 0.25rem;
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
