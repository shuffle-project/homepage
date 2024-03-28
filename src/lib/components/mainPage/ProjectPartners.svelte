<script>
	import { base } from '$app/paths';
	import Link from '../Link.svelte';
</script>

<div class="project-partners-section">
	<h2>Projektpartner</h2>

	<div class="partners-wrapper">
		<div class="partner">
			<div class="image-wrapper">
				<img src="{base}/logos/hdm-stuttgart.svg" alt="" aria-hidden="true" />
			</div>
			<h3>Hochschule der Medien Stuttgart</h3>
			<p>
				Als konsortialführende Hochschule ist die Hochschule der Medien in den meisten
				Arbeitspaketen vertreten und übernimmt die Projektkoordination. Zentrale Anlaufstelle ist
				das hochschuleigene Kompetenzzentrum für digitale Barrierefreiheit. Das Institut für
				Digitale Ethik (IDE) übernimmt zudem die ethische und datenschutzrechtliche Beratung der
				Teilprojekte.
			</p>
		</div>
		<div class="partner">
			<div class="image-wrapper">
				<img src="{base}/logos/uni-bielefeld.svg" alt="" aria-hidden="true" />
			</div>
			<h3>Universität Bielefeld</h3>
			<p>
				Die Universität Bielefeld konzentriert sich auf Arbeitspakete rund um die
				Digitalisierungsstrategie, Unterstützung von Lehrenden beim Erstellen von barrierefreien
				Lernmaterialien und der Verbesserung der Barrierefreiheit von e-Prüfungen und der
				Lernplattform Moodle.
			</p>
		</div>
		<div class="partner">
			<div class="image-wrapper">
				<img src="{base}/logos/ph-heidelberg.svg" alt="" aria-hidden="true" />
			</div>
			<h3>Pädagogische Hochschule Heidelberg</h3>
			<p>
				Die PH Heidelberg ist mit den Abteilungen Hören und Kommunikation sowie Blinden- und
				Sehbehindertenpädagogik in dem Projekt vertreten. Sie bringt ihre Expertise bei der
				Erstellung von Multimodalen Lernskripten sowie bei der Entwicklung der digitalen Lern- und
				Begegnungsplattform ein.
			</p>
		</div>
		<div class="partner">
			<div class="image-wrapper">
				<img src="{base}/logos/ph-freiburg.svg" alt="" aria-hidden="true" />
			</div>
			<h3>Pädagogische Hochschule Freiburg</h3>
			<p>
				Im Fokus der PH Freiburg steht die Barrierefreiheit von der Lernplattform ILIAS und
				e-Prüfungen. Mit rund 5000 Studierenden ist die PH Freiburg eine der größten Pädagogischen
				Hochschulen Baden-Württembergs.
			</p>
		</div>
	</div>

	<h2>gefördert von</h2>
	<div class="sponsor-wrapper">
		<div class="partner">
			<div class="image-wrapper">
				<img
					src="{base}/logos/stiftung-innovation-in-der-hochschullehre.svg"
					alt=""
					aria-hidden="true"
				/>
			</div>
			<h3>Stiftung Innovation in der Hochschullehre</h3>
			<p>
				Die 2020 gegründete Stiftung Innnovation in der Hochschullehre hat zum Ziel, Innovationen im
				Bereich des Lehrens und Lernens an Hochschulen zu ermöglichen sowie die Erneuerungsfähigkeit
				der Hochschullehre insgesamt und kontinuierlich zu stärken. Programm und Förderung der
				Stiftung kommen der gesamten Breite der deutschen Hochschullandschaft zugute. Die Stiftung
				Innovation in der Hochschullehre ist eine Treuhandstiftung in Trägerschaft der
				gemeinnützigen Toepfer Stiftung gGmbH. Sämtliche Mittel für Förderung, Programm,
				Organisation und Verwaltung werden von Bund und Ländern zur Verfügung gestellt.
			</p>
			<div class="link-wrapper">
				<Link link="https://stiftung-hochschullehre.de/" details="Innovation in der Hochschullehre">
					Zur Webseite der Stiftung
				</Link>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.project-partners-section {
		margin-block: var(--section-vertical-spacing) -3.125rem;
		padding: var(--section-vertical-spacing) var(--outer-spacing);
		background: var(--color-blue-gradient);

		h2 {
			text-align: center;
		}

		p {
			margin-top: 0.5rem;
		}

		.partners-wrapper {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;

			margin-bottom: 3.75rem;
		}

		.sponsor-wrapper {
			display: flex;
			justify-content: center;

			.partner {
				width: 100%;
				max-width: 30rem;

				.link-wrapper {
					display: inline-block;
				}
			}
		}
	}

	.partner {
		width: 25%;
		padding: 2.5rem;
		box-sizing: border-box;

		.image-wrapper {
			margin-top: 1.25rem;
			height: 10rem;

			display: flex;
			align-items: center;
			justify-content: center;

			img {
				width: 90%;
				max-height: 8rem;
			}
		}
	}

	@media (max-width: 75rem) {
		.partner {
			width: 33.3%;
		}
	}

	@media (max-width: 56.25rem) {
		.partner {
			width: 50%;
		}
	}

	@media (max-width: 38.75rem) {
		.partner {
			width: 100%;
		}
	}
</style>
