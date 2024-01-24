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
	linkText: 'Zu BlindDate',
	linkToProject: 'https://barrierefreies-blinddate.de/',
	partners: ['Hochschule der Medien Stuttgart', 'Pädagogische Hochschule Heidelberg'],
	joinEvaluation: {
		title: 'Feedback geben',
		introduction:
			'Die Webseite befindet sich aktuell noch in der Entwicklung. Wir freuen uns über Feedback und Rückmeldungen zu den Inhalten oder möglichen technischen Barrieren. Durch die Umfragen auf den jeweiligen Persona-Seiten oder über die folgende Email-Adresse.',
		contactName: 'Niklas Egger',
		contactEmail: 'egger@hdm-stuttgart.de'
	},
	gallery: [
		{
			src: 'blinddate-gallery-3',
			alt: 'TODO'
		}
	],
	publications: [
		{
			title: 'Using Design Thinking Methods in Developing a Digital Accessibility Resource Website',
			titleLang: 'en',
			releaseDate: '2022-07',
			contributors: [
				'Dr. Kathy-Ann Heitmeier',
				'Ann-Katrin Böhm',
				'Dr. Verena Kersken',
				'Patricia Piskorek',
				'Niklas Egger',
				'Prof. Dr. Markus Lang',
				'Prof. Dr. Gottfried Zimmermann'
			],
			placeOfPublication:
				'Joint International Conference on Digital Inclusion, Assistive Technology & Accessibility (ICCHP-AAATE) 2022',
			placeOfPublicationLang: 'en',
			linkText: 'Zum Poster Abstract',
			link: 'https://www.icchp-aaate.org/content/using-design-thinking-methods-developing-digital-accessibility-learning-resource'
		},
		{
			title: 'Persona Co-design for Improving Digital Accessibility',
			titleLang: 'en',
			releaseDate: '2023-04',
			contributors: [
				'Dr. Kathy-Ann Heitmeier',
				'Dr. Verena Kersken',
				'Patricia Piskorek',
				'Niklas Egger',
				'Ann-Katrin Böhm',
				'Prof. Dr. Markus Lang',
				'Prof. Dr. Gottfried Zimmermann'
			],
			placeOfPublication: 'ACM CHI Conference on Human Factors in Computing Systems 2023',
			placeOfPublicationLang: 'en',
			linkText: 'Zum Poster Abstract',
			link: 'https://dl.acm.org/doi/10.1145/3544549.3585857'
		},
		{
			title: 'Re-Conceptualizing Disability Simulations: a guided strategies-based approach',
			titleLang: 'en',
			releaseDate: '2023-08',
			contributors: [
				'Patricia Piskorek',
				'Dr. Kathy-Ann Heitmeier',
				'Dr. Verena Kersken',
				'Prof. Dr. Gottfried Zimmermann'
			],
			placeOfPublication:
				'Association for the Advancement of Assistive Technology in Europe (AAATE) 2023',
			placeOfPublicationLang: 'en',
			linkText: 'Zum Paper (PDF)',
			link: 'https://aaate2023.eu/wp-content/uploads/sites/26/2023/08/BookOfAbstracts-Prelim.pdf#page=277'
		},
		{
			title:
				'Ein Schlüssel zu mehr Barrierefreiheit - Sensibilisierung von Lehrenden gegenüber Menschen mit Blindheit und Sehbeeinträchtigungen: Ergebnisse und Handlungsansätze aus einem Forschungsprojekt',
			titleLang: 'de',
			releaseDate: '2023-08',
			contributors: [
				'Prof. Dr. Markus Lang',
				'Ann-Katrin Böhm',
				'Patricia Piskorek',
				'Niklas Egger',
				'Dr. Verena Kersken',
				'Dr. Kathy-Ann Heitmeier',
				'Prof. Dr. Gottfried Zimmermann'
			],
			placeOfPublication:
				'Kongress des Verband für Blinden- und Sehbehindertenpädagogik e. V. (VBS) 2023',
			placeOfPublicationLang: 'de',
			linkText: 'TODO',
			link: 'https://shuffle-projekt.de/'
		}
	]
};
