<script lang="ts">
	import { base } from '$app/paths';
	import Icon from '../Icon.svelte';
</script>

<div class="wrapper">
	<h2>Das Reifegradmodell-Paket</h2>
	<div class="content">
		<div class="text-wrapper">
			<p>
				Mit den hier downloadbaren Dokumenten können Sie das Reifegradmodell direkt für Ihre
				Hochschule anwenden. Sie finden in den Dokumenten eine kurze Einleitung, die beschreibt,
				warum digitale Barrierefreiheit und das Reifegradmodell wichtig sind und die Sie auch für
				die Kommunikation innerhalb Ihrer Hochschule nutzen können.
			</p>
			<p>
				Zudem finden Sie eine Anleitung, in der die Anwendung des Reifegradmodells beschrieben ist.
				Die Anwendung selbst erfolgt momentan über die Excel-Datei „Anwendungstool“, in der Sie die
				Stufen eintragen können und dann ein Ergebnis und für Ihre Stufe passende
				Handlungsempfehlungen erhalten.
			</p>
			<p>
				Alle Handlungsempfehlungen sind zudem nochmals in dem Dokument „Handlungsempfehlungen“
				zusammengefasst und auch noch durch Hinweise und Good-Practice-Beispiele erweitert.
			</p>
		</div>
		<div class="download-wrapper">
			<a download href="{base}/downloads/Gesamtpaket-SHUFFLE-Reifegradmodell.zip">
				Gesamtpaket (.zip)
				<Icon svg="download" color="blue" />
			</a>
			<hr aria-hidden="true" />

			<h3>Einzelne Dateien:</h3>
			<hr aria-hidden="true" />
			<ul>
				<li>
					<a download href="{base}/downloads/Einleitung-SHUFFLE-Reifegradmodell.docx">
						Einleitung (.docx)
						<Icon svg="download" color="blue" />
					</a>
					<hr aria-hidden="true" />
				</li>
				<li>
					<a download href="{base}/downloads/Anleitung-SHUFFLE-Reifegradmodell.docx">
						Anleitung (.docx)
						<Icon svg="download" color="blue" />
					</a>
					<hr aria-hidden="true" />
				</li>
				<li>
					<a download href="{base}/downloads/Anwendungstool-SHUFFLE-Reifegradmodell.xlsx">
						Anwendungstool (.xlsx)
						<Icon svg="download" color="blue" />
					</a>
					<hr aria-hidden="true" />
				</li>
				<li>
					<a download href="{base}/downloads/Handlungsempfehlungen-SHUFFLE-Reifegradmodell.docx">
						Handlungsempfehlungen (.docx)
						<Icon svg="download" color="blue" />
					</a>
				</li>
			</ul>
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
				flex: 1;
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
