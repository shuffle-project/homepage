import type { Project } from '$lib/interfaces/project.interface';

export const MATURITY_MODEL: Project = {
	id: 'shuffle-reifegradmodell',
	title: 'SHUFFLE-Reifegradmodell',
	shortSummary:
		'Unterstützungstool zur Analyse und Optimierung der digitalen Barrierefreiheit von Hochschulen.',
	summary:
		'Das SHUFFLE-Reifegradmodell ist ein Unterstützungstool zur Verbesserung der (digitalen) Barrierefreiheit an Hochschulen. Es hilft Verantwortlichen, relevante Daten strukturiert zu erheben und zu bündeln. Durch das 5-stufige Modell können sich Hochschulen einen Überblick über den Stand ihrer (digitalen) Barrierefreiheit verschaffen. Das Reifegradmodell unterstützt dann bei dessen systematischen Ausbau, indem es Optimierungspotentiale aufzeigt und konkrete Handlungsempfehlungen dafür gibt.',
	webinar: 'reifegradmodell',
	showInDevelopmentInfo: false,
	partners: [
		'Hochschule der Medien Stuttgart',
		'Universität Bielefeld',
		'Pädagogische Hochschule Freiburg',
		'Pädagogische Hochschule Heidelberg'
	],
	gallery: [
		{
			src: 'Uebersicht_Dimensionen.jpg',
			description:
				'Visualisierung der verschiedenen Dimensionen und Bereiche, die im SHUFFLE-Reifegradmodell analysiert werden. Es besteht aus den folgenden Bereichen: Beratung und Support (Beratung, Unterstützungsangebote, Austausch), Lehren und Lernen (Nachteilsausgleich, Prüfungsleistungen, Training und Unterstützung, Sensibilisierung, Prüfung auf Barrierefreiheit von Lehrmaterial), Strategie (Zielgruppe Studierende mit Beeinträchtigungen, Partizipation, Kollaboration, Steuerungsinstrumente, Akkreditierung) und Struktur (Feedback- und Beschwerdemanagement, Webauftritt, Infrastruktur, Beschaffung, Finanzielle Ressourcen, Personelle Ressourcen).'
		},
		{
			src: 'Beispiel-Ergebnis.jpg',
			description:
				'Beispielhafte Darstellung des Ergebnisses im Reifegradmodell: Mithilfe eines Netzdiagramms wird pro Indikator (19 Stück) die erreichte Stufen zwischen 0 und 4 dargestellt, um einen Überblick zu erhalten, wie die eigene Hochschule in den verschiedenen Bereichen aufgestellt ist.'
		}
	],
	publications: [
		{
			title:
				'How to measure the accessibility maturity of organizations—A survey on accessibility maturity models for higher education',
			titleLang: 'en',
			releaseDate: '2023-06',
			contributors: [
				'Nadine Auer',
				'Samira Kalemba',
				'Christin Stormer',
				'Ann-Katrin Böhm',
				'Hakan Ali Cetin',
				'Anja Gutjahr',
				'Franziska Neumann',
				'Verena Kersken',
				'Gerhard Weber',
				'Gottfried Zimmermann'
			],
			placeOfPublication: 'Frontiers Computer Science - Volume 5',
			placeOfPublicationLang: 'en',
			link: {
				label: 'Zum Paper',
				url: 'https://www.frontiersin.org/articles/10.3389/fcomp.2023.1134320/full'
			},
			category: 'Paper / Buchbeiträge',
			apa: `	<span class="apa-publication">
				Auer, N., Kalemba, S., Stormer, C., Boehm, A.‑K., Cetin, H. A., Gutjahr, A. et al.
				(2023).
				<span lang="en">
					How to measure the accessibility maturity of organizations - A survey on
					accessibility maturity models for higher education.
				</span>
				<em lang="en"> Frontiers in Computer Science, </em>
				5, 1134320.
				<a href="https://doi.org/10.3389/fcomp.2023.1134320"
					>https://doi.org/10.3389/fcomp.2023.1134320</a
				>
			</span>`
		},
		{
			title:
				'Applying Accessibility Maturity Models to Measure the Accessibility of Organizations (Educational Session)',
			titleLang: 'en',
			releaseDate: '2023-08',
			contributors: ['Gottfried Zimmermann', 'Nadine Auer', 'Verena Kersken'],
			placeOfPublication:
				'Association for the Advancement of Assistive Technology in Europe (AAATE)',
			placeOfPublicationLang: 'en',
			link: {
				label: 'Zum Abstract',
				url: 'https://aaate2023.eu/wp-content/uploads/sites/26/2023/08/BookOfAbstracts-Prelim.pdf#page=93'
			},
			category: 'Workshops',
			apa: `<span class="apa-publication">
				Zimmermann, G., Auer, N., & Kersken, V. (2023).
				<em lang="en">
					Applying Accessibility Maturity Models to Measure the Accessibility of Organizations
				</em>
				<span lang="en">
					[Educational Session]. Association for the Advancement of Assistive Technology in
					Europe (AAATE),
				</span>
				Paris, Frankreich.
				<a
					href="https://aaate2023.eu/wp-content/uploads/sites/26/2023/08/BookOfAbstracts-Prelim.pdf#page=93"
					>https://aaate2023.eu/wp-content/uploads/sites/26/2023/08/BookOfAbstracts-Prelim.pdf#page=93</a
				>
			</span>`
		},
		{
			title:
				'Methodik und Zwischenergebnisse zur Entwicklung eines Reifegradmodells für digitale Barrierefreiheit an Hochschulen',
			titleLang: 'de',
			releaseDate: '2023-09',
			contributors: [
				'Nadine Auer',
				'Verena Kersken',
				'Ann-Katrin Böhm',
				'Anja Gutjahr',
				'Samira Kalemba',
				'Hakan Ali Cetin',
				'Christin Stormer',
				'Gerhard Weber',
				'Gottfried Zimmermann'
			],
			placeOfPublication: 'Gemeinschaften in Neuen Medien',
			placeOfPublicationLang: 'de',
			link: {
				label: 'Zum Tagungsband',
				url: 'https://tud.qucosa.de/landing-page/?tx_dlf%5Bid%5D=https%3A%2F%2Ftud.qucosa.de%2Fapi%2Fqucosa%253A89795%2Fmets'
			},
			category: 'Paper / Buchbeiträge',
			apa: `
			<span class="apa-publication">
				Auer, N., Kersken, V., Böhm, A., Gutjahr, A., Kalemba, S., Cetin, H. A., Stormer, C.,
				Weber, G., & Zimmermann, G. (2023). Methodik und Zwischenergebnisse zur Entwicklung
				eines Reifegradmodells für digitale Barrierefreiheit an Hochschulen.
				<em>Gemeinschaften in Neuen Medien,</em>
				(pp. 139-145).
				<a href="https://d-nb.info/1321171013">https://d-nb.info/1321171013</a>
			</span>`
		},
		{
			title: 'Der Umfang von Barrierefreiheit an Hochschulen',
			titleLang: 'de',
			releaseDate: '2023-09',
			contributors: ['Nadine Auer', 'Verena Kersken', 'Gerhard Weber', 'Gottfried Zimmermann'],
			placeOfPublication: 'Gemeinschaften in Neuen Medien',
			placeOfPublicationLang: 'de',
			link: {
				label: 'Zum Tagungsband',
				url: 'https://tud.qucosa.de/landing-page/?tx_dlf%5Bid%5D=https%3A%2F%2Ftud.qucosa.de%2Fapi%2Fqucosa%253A89795%2Fmets'
			},
			category: 'Paper / Buchbeiträge',
			apa: `
			<span class="apa-publication">
				Auer, N., Kersken, V., Weber, G., & Zimmermann, G. (2023). Der Umfang von
				Barrierefreiheit an Hochschulen.
				<em>Gemeinschaften in Neuen Medien,</em>
				(pp. 126-138).
				<a href="https://d-nb.info/1321171013">https://d-nb.info/1321171013 </a>
			</span>`
		},
		{
			title: 'Digitale Barrierefreiheit an Hochschulen zum Wachsen bringen',
			titleLang: 'de',
			releaseDate: '2023-04',
			contributors: ['Ann-Katrin Böhm', 'Christin Stormer'],
			placeOfPublication: 'University:Future Festival',
			placeOfPublicationLang: 'en',
			link: {
				label: 'Zur Aufnahme (YouTube)',
				url: 'https://www.youtube.com/watch?v=i6yikMDgwSE#t=06m35s)'
			},
			category: 'Sonstige Veröffentlichungen',
			apa: `<span class="apa-publication">
				Böhm, A., & Stormer, C. (2023).
				<em> Digitale Barrierefreiheit an Hochschulen zum Wachsen bringen </em>
				<span lang="en">[Lightning Talk]. University:FutureFestival, Berlin,
				Germany</span>.
				<a href="https://www.youtube.com/watch?v=i6yikMDgwSE#t=06m35s)"
					>https://www.youtube.com/watch?v=i6yikMDgwSE#t=06m35s)
				</a>
			</span>`
		},
		{
			title: 'Vom Ungeheuer zum Schoßhund: Barrierenzähmen leicht gemacht',
			titleLang: 'de',
			releaseDate: '2024-06',
			contributors: ['Nadine Auer'],
			placeOfPublication: 'University:Future Festival',
			placeOfPublicationLang: 'en',
			link: {
				label: 'Zur Aufnahme (YouTube)',
				url: 'https://www.youtube.com/live/UbVegfQEUTU?feature=shared&t=22206'
			},
			category: 'Sonstige Veröffentlichungen',
			apa: `<span class="apa-publication">
			Auer, N. (2024). <em> Vom Ungeheuer zum Schoßhund: Barrierenzähmen leicht gemacht </em>
			<span lang="en">[Presentation]. University:Future Festival, Leipzig, Germany</span>. <a href="https://www.youtube.com/live/UbVegfQEUTU?feature=shared&t=22206">
			https://www.youtube.com/live/UbVegfQEUTU?feature=shared&t=22206</a>
			</span>
			
			`
		}
	]
};
