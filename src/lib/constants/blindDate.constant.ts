import type { Project } from '$lib/interfaces/project.interface';

export const BLINDDATE: Project = {
	id: 'blinddate',
	title: 'BlindDate',
	category: 'Begegnungsplattform',
	shortSummary:
		'Virtuelle Studierende mit Beeinträchtigungen geben einen Einblick in ihren Studien&shy;alltag, typische Barrieren und Strategien zur Bewältigung dieser.',
	targetGroup: ['Für Lehrende'],
	summary:
		'"BlindDate" ist eine digitale Plattform, die Lehrenden eine Begegnung mit virtuellen Studierende mit individuellen Bedarfen ermöglicht. Diese "Personas" zeigen typische Barrieren in ihrem Studienalltag, sowie Strategien zur Bewältigung derselben, auf und steigern so das Bewusstsein der Benutzenden. Konkrete Handlungsempfehlungen helfen Ihnen, Barrieren in der eigenen Lehre abzubauen.',
	link: {
		label: 'Zu BlindDate',
		url: 'https://barrierefreies-blinddate.de/'
	},
	partners: ['Hochschule der Medien Stuttgart', 'Pädagogische Hochschule Heidelberg'],
	joinEvaluation: {
		title: 'Feedback geben',
		introduction:
			'Die Webseite befindet sich aktuell noch in der Entwicklung. Wir freuen uns über Feedback und Rückmeldungen zu den Inhalten oder möglichen technischen Barrieren. Durch die Umfragen auf den jeweiligen Persona-Seiten oder über die folgende Email-Adresse.',
		contactName: 'Niklas Egger',
		contact: {
			short: 'egger',
			domain: 'hdm-stuttgart.de'
		}
	},
	gallery: [
		{
			src: 'blinddate-gallery-2.png',
			description:
				'Die Persona Maxi ist neben einer interaktiven Komponente zu sehen. Die "Umdrehbare Karte" beinhaltet ein klares Statement der Persona, in diesem Fall: "Ich bin nicht faul und unzuverlässig!" '
		},
		{
			src: 'blinddate-gallery-3.png',
			description:
				'Die Persona Gabriel erklärt in seinem Simulationsspiel auf BlindDate eine Strategie, die ihm bei seiner Sehbeeinträchtigung hilft. So bewegt er sein Kopf viel hin und her und empfiehlt der spielenden Person dies ebenso zu tun, um die Aufgabe zu lösen.'
		}
	],
	publications: [
		{
			title: 'Using Design Thinking Methods in Developing a Digital Accessibility Resource Website',
			titleLang: 'en',
			releaseDate: '2022-07',
			contributors: [
				'Kathy-Ann Heitmeier',
				'Ann-Katrin Böhm',
				'Verena Kersken',
				'Patricia Piskorek',
				'Niklas Egger',
				'Markus Lang',
				'Gottfried Zimmermann'
			],
			placeOfPublication:
				'Joint International Conference on Digital Inclusion, Assistive Technology & Accessibility (ICCHP / AAATE) 2022',
			placeOfPublicationLang: 'en',
			link: {
				label: 'Zum Poster Abstract',
				url: 'https://www.icchp-aaate.org/content/using-design-thinking-methods-developing-digital-accessibility-learning-resource'
			}
		},
		{
			title: 'Persona Co-design for Improving Digital Accessibility',
			titleLang: 'en',
			releaseDate: '2023-04',
			contributors: [
				'Kathy-Ann Heitmeier',
				'Verena Kersken',
				'Patricia Piskorek',
				'Niklas Egger',
				'Ann-Katrin Böhm',
				'Markus Lang',
				'Gottfried Zimmermann'
			],
			placeOfPublication: 'ACM CHI Conference on Human Factors in Computing Systems 2023',
			placeOfPublicationLang: 'en',
			link: {
				label: 'Zum Poster Abstract',
				url: 'https://dl.acm.org/doi/10.1145/3544549.3585857'
			}
		},
		{
			title: 'Re-Conceptualizing Disability Simulations: a guided strategies-based approach',
			titleLang: 'en',
			releaseDate: '2023-08',
			contributors: [
				'Patricia Piskorek',
				'Kathy-Ann Heitmeier',
				'Verena Kersken',
				'Gottfried Zimmermann'
			],
			placeOfPublication:
				'Association for the Advancement of Assistive Technology in Europe (AAATE) 2023',
			placeOfPublicationLang: 'en',
			link: {
				label: 'Zum Paper (PDF)',
				url: 'https://aaate2023.eu/wp-content/uploads/sites/26/2023/08/BookOfAbstracts-Prelim.pdf#page=277'
			}
		},
		{
			title:
				'Ein Schlüssel zu mehr Barrierefreiheit - Sensibilisierung von Lehrenden gegenüber Menschen mit Blindheit und Sehbeeinträchtigungen: Ergebnisse und Handlungsansätze aus einem Forschungsprojekt',
			titleLang: 'de',
			releaseDate: '2023-08',
			contributors: [
				'Markus Lang',
				'Ann-Katrin Böhm',
				'Patricia Piskorek',
				'Niklas Egger',
				'Verena Kersken',
				'Kathy-Ann Heitmeier',
				'Gottfried Zimmermann'
			],
			placeOfPublication:
				'Kongress des Verband für Blinden- und Sehbehindertenpädagogik e. V. (VBS) 2023',
			placeOfPublicationLang: 'de',
			link: {
				label: 'Folien herunterladen (PowerPoint)',
				url: 'downloads/Marburg_2023_Shuffle_Vortrag_AB_25.07.23.pptx',
				download: true
			}
		}
	]
};
