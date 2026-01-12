<script lang="ts">
	import { resolve } from '$app/paths';
	import Icon from '../Icon.svelte';
</script>

<div class="wrapper">
	<h2>Das Reifegradmodell-Paket</h2>
	<div class="content">
		<div class="text-wrapper">
			<p>
				Mit den hier downloadbaren Dokumenten können Sie das Reifegradmodell direkt für Ihre
				Hochschule anwenden. Sie finden in den Dokumenten eine <strong>kurze Einleitung</strong>,
				die beschreibt, warum digitale Barrierefreiheit und das Reifegradmodell wichtig sind und die
				Sie auch für die Kommunikation innerhalb Ihrer Hochschule nutzen können.
			</p>
			<p>
				Zudem finden Sie eine <strong>Anleitung</strong>, in der die Anwendung des Reifegradmodells
				beschrieben ist. Die Anwendung selbst erfolgt momentan über
				<strong>die Excel-Datei „Anwendungstool“</strong>, in der Sie die Stufen eintragen können
				und dann ein Ergebnis und für Ihre Stufe passende Handlungsempfehlungen erhalten.
			</p>
			<p>
				Alle Handlungsempfehlungen sind zudem nochmals in dem Dokument <strong>
					„Handlungsempfehlungen“</strong
				>
				zusammengefasst und auch noch durch Hinweise und Good-Practice-Beispiele erweitert.
			</p>
			<p>
				Das SHUFFLE-Reifegradmodell kann bald auch in einem <strong>Webservice</strong> und per digitalem
				Fragebogen angewendet werden. Hier finden Sie zukünftig die Verlinkung zu dem SHUFFLE-Reifegradmodell-Webservice.
			</p>
		</div>
		<div class="download-wrapper">
			<a download href={resolve('/downloads/Gesamtpaket-SHUFFLE-Reifegradmodell.zip')}>
				Gesamtpaket (.zip)
				<Icon svg="download" color="blue" />
			</a>
			<hr aria-hidden="true" />
		</div>
	</div>
	<h2>Dokumentation der Entwicklung</h2>
	<div class="content">
		<div class="text-wrapper">
			<p>Diese ZIP-Datei beinhaltet zwei Dokumente:</p>
			<p>
				Die <strong>Dokumentation</strong> der verschiedenen Phasen der Entwicklung des SHUFFLE-Reifegradmodells
				zu digitaler Barrierefreiheit an deutschen Hochschulen. Wir haben dafür den Entwicklungsprozess
				reflektiert, abstrahiert und zusammengefasst. Diese Dokumentation kann als Inspiration und „Anleitung“
				genutzt werden, um weitere Reifegradmodelle zu erstellen.
			</p>
			<p>
				Die <strong>Indikatoren-Sammlung</strong>, die als Grundlage zur Entwicklung des
				SHUFFLE-Reifegradmodells erstellt und verwendet wurde. Auch diese Sammlung kann genutzt
				werden, um ein Reifegradmodell zu erstellen. Aber bitte beachten Sie, dass die Sammlung für
				den Hochschulkontext erstellt wurde und ergänzen Sie diese für ein Reifegradmodell für
				andere Bildungsbereiche.
			</p>
		</div>
		<div class="download-wrapper">
			<a download href={resolve('/downloads/Dokumentation-SHUFFLE-Reifegradmodell.zip')}>
				Dokumentation (.zip)
				<Icon svg="download" color="blue" />
			</a>
			<hr aria-hidden="true" />
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		max-width: 60rem;

		margin-top: 3.125rem;
		padding-inline: 1.875rem;

		box-sizing: border-box;

		.content {
			display: flex;
			gap: 3.125rem;

			.text-wrapper {
				flex: 3;
			}

			.download-wrapper {
				flex: 1;
				padding-top: 1rem;

				a {
					display: flex;
					align-items: center;
					justify-content: space-between;
					text-decoration: none;

					&:hover {
						text-decoration: none !important;
						background-color: rgba(var(--color-black-rgb), 0.08);
						outline: 4px solid rgba(var(--color-black-rgb), 0.08);
						border: none;
					}

					&:focus-visible {
						text-decoration: none !important;
						outline: 2px solid var(--color-black);
						outline-offset: 2px;
					}
				}

				hr {
					border: none;
					height: 1px;
					background-color: var(--color-blue-line);
					margin: 1rem 0;
				}

				ul {
					list-style: none;
					padding: 0;
					margin: 0;
				}

				h3 {
					padding-top: 1.5rem;
					font-size: 1rem;
					color: var(--color-blue);
				}
			}
		}
	}

	@media (max-width: 50rem) {
		.wrapper {
			.content {
				flex-direction: column;
				gap: 1rem;
			}
		}
	}

	@media (max-width: 40.5625rem) {
		.wrapper {
			padding-inline: 0;
		}
	}
</style>
