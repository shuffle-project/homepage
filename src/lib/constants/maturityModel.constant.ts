import type { Project } from '$lib/interfaces/project.interface';

export const MATURITY_MODEL: Project = {
	id: 'shuffle-reifegradmodell',
	title: 'SHUFFLE-Reifegradmodell',
	category: 'Analyse-Tool',
	shortSummary:
		'Ein Unterstützungstool zur Analyse und Optimierung der digitalen Barrierefreiheit von Hochschulen.',
	targetGroup: ['Für Lehrende', 'Für die Hochschulleitung'],
	summary:
		'Das SHUFFLE-Reifegradmodell ist ein Unterstützungstool zur Verbesserung der (digitalen) Barrierefreiheit an Hochschulen. Es hilft Verantwortlichen, relevante Daten strukturiert zu erheben und zu bündeln. Durch das 5-stufige Modell können sich Hochschulen einen Überblick über den Stand ihrer (digitalen) Barrierefreiheit verschaffen. Das Reifegradmodell unterstützt dann bei dessen systematischen Ausbau, indem es Optimierungspotentiale aufzeigt und konkrete Handlungsempfehlungen dafür gibt.',
	showInDevelopmentInfo: true,
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
	joinEvaluation: {
		title: 'Reifegradmodell testen',
		introduction:
			'Das Reifegradmodell kann momentan in einer ersten Pilotphase getestet werden. Wenn Sie es an Ihrer Hochschule einsetzen möchten, kontaktieren Sie uns gerne. Sie erhalten dann die Dokumente zur Anwendung des Reifegradmodells. Auch bei allgemeinen Fragen zu unserem Reifegradmodell können Sie sich jederzeit an uns wenden.',
		contact: {
			short: 'auer',
			domain: 'hdm-stuttgart.de'
		},
		contactName: 'Nadine Auer'
	},
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
			placeOfPublication: 'Frontiers Computer Science - Volume 5 2023',
			placeOfPublicationLang: 'en',
			link: {
				label: 'Zum Paper',
				url: 'https://www.frontiersin.org/articles/10.3389/fcomp.2023.1134320/full'
			},
			category: 'Paper'
		},
		{
			title:
				'Applying Accessibility Maturity Models to Measure the Accessibility of Organizations (Educational Session)',
			titleLang: 'en',
			releaseDate: '2023-08',
			contributors: ['Gottfried Zimmermann', 'Nadine Auer', 'Verena Kersken'],
			placeOfPublication:
				'Association for the Advancement of Assistive Technology in Europe (AAATE) 2023',
			placeOfPublicationLang: 'en',
			link: {
				label: 'Zum Abstract',
				url: 'https://aaate2023.eu/wp-content/uploads/sites/26/2023/08/BookOfAbstracts-Prelim.pdf#page=93'
			},
			category: 'Workshops'
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
			placeOfPublication: 'Gemeinschaften in Neuen Medien 2023',
			placeOfPublicationLang: 'de',
			link: {
				label: 'Zum Tagungsband',
				url: 'https://tud.qucosa.de/landing-page/?tx_dlf%5Bid%5D=https%3A%2F%2Ftud.qucosa.de%2Fapi%2Fqucosa%253A89795%2Fmets'
			},
			category: 'Paper'
		},
		{
			title: 'Der Umfang von Barrierefreiheit an Hochschulen',
			titleLang: 'de',
			releaseDate: '2023-09',
			contributors: ['Nadine Auer', 'Verena Kersken', 'Gerhard Weber', 'Gottfried Zimmermann'],
			placeOfPublication: 'Gemeinschaften in Neuen Medien 2023',
			placeOfPublicationLang: 'de',
			link: {
				label: 'Zum Tagungsband',
				url: 'https://tud.qucosa.de/landing-page/?tx_dlf%5Bid%5D=https%3A%2F%2Ftud.qucosa.de%2Fapi%2Fqucosa%253A89795%2Fmets'
			},
			category: 'Paper'
		},
		{
			title: 'Digitale Barrierefreiheit an Hochschulen zum Wachsen bringen ',
			titleLang: 'de',
			releaseDate: '2023-04',
			contributors: ['Ann-Katrin Böhm', 'Christin Stormer'],
			placeOfPublication: 'Lightning Talk auf dem University:Future Festival 2023',
			placeOfPublicationLang: 'de',
			link: {
				label: 'Zur Aufnahme (YouTube)',
				url: 'https://www.youtube.com/watch?v=i6yikMDgwSE#t=06m35s)'
			},
			category: 'Sonstige Veröffentlichungen'
		}
	]
};
