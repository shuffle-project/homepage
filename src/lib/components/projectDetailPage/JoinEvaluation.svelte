<script lang="ts">
	import type { JoinEvaluation } from '$lib/interfaces/project.interface';
	import Icon from '../Icon.svelte';

	export let join: JoinEvaluation;

	function saveToClipboard() {
		navigator.clipboard.writeText(join.contactEmail);
	}
</script>

<div class="wrapper">
	<div class="info">
		<h2>Projektpartner werden</h2>
		<p>{join.introduction}</p>
	</div>
	<hr aria-hidden="true" />
	<div class="call-to-action">
		<h3>Interessiert?</h3>
		<p>Bitte melden Sie sich bei {join.contactName} unter:</p>
		<a class="contact-email" href="mailto:{join.contactEmail}">{join.contactEmail}</a>
		<button on:click={() => saveToClipboard()} class="copy-link">
			<div class="icon-wrapper">
				<Icon svg="copy" size="parent" color="dark-grey" />
			</div>
			Adresse kopieren
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
			min-width: 12.5rem;

			p {
				margin-bottom: 0;
			}

			.contact-email {
				color: var(--color-blue);
				text-decoration: none;
			}

			.copy-link {
				display: flex;
				align-items: center;
				gap: 0.25rem;
				border: none;
				background-color: transparent;
				color: var(--color-grey);

				cursor: pointer;

				margin-top: 0.625rem;
				padding: 0.25rem 0.125rem;

				&:focus,
				&:hover {
					outline: 2px solid var(--color-black);
				}

				.icon-wrapper {
					width: 0.9375rem;
					height: 1.25rem;
				}
			}
		}
	}

	@media (max-width: 37.4375rem) {
		.wrapper {
			flex-direction: column;

			hr {
				margin: 1.875rem -1.875rem;
				min-height: 4px;
			}
		}
	}
</style>
