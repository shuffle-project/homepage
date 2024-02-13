import type { Project } from '$lib/interfaces/project.interface';

export const MELVIN: Project = {
	id: 'melvin',
	title: 'Melvin',
	category: 'Barrierefreie Videos',
	shortSummary:
		'Erstelle schnell und einfach Videos mit Untertiteln und teile sie in einem barrierefreien Video-Player.',
	targetGroup: ['Für Lehrende'],
	link: {
		toProject: 'https://melvin.shuffle-projekt.de',
		label: 'Zu Melvin'
	},
	summary:
		'Barrierefreie Videos sind wichtig, jedoch oft mit einem enormen Aufwand, notwendigem Know-How und dem Einsatz unterschiedlicher Tools verbunden. Melvin bietet hierfür eine schnellere und bequemere Lösung an. Innerhalb einer Webanwendung können Sie ihre Videos aufnehmen, automatisch untertiteln lassen und durch einen barrierefreien Player das fertige Video mitsamt Transkript teilen. Die Untertitel können Sie zudem alleine oder im Team verbessern, im Nachhinein oder während eines Livestreams.',
	partners: ['Hochschule der Medien Stuttgart', 'Pädagogische Hochschule Heidelberg'],
	joinEvaluation: {
		title: 'Melvin ausprobieren',
		introduction:
			'Melvin befindet sich aktuell noch in der Entwicklung. Falls Sie trotzdem schon mal die aktuelle Version ausprobieren möchten, können Sie sich gerne bei der folgenden Kontaktperson melden.',
		contactName: 'Korbinian Kuhn',
		contactEmail: 'kuhnko@hdm-stuttgart.de'
	},
	publications: [
		{
			title:
				'Evaluating Collaborative Editing of AI-Generated Live Subtitles by Non-Professionals in German University Lectures',
			titleLang: 'en',
			releaseDate: '2022-07',
			contributors: [
				'Patricia Piskorek',
				'Nadine Sienel',
				'Korbinian Kuhn',
				'Verena Kersken',
				'Gottfried Zimmermann'
			],
			placeOfPublication:
				'Joint International Conference on Digital Inclusion, Assistive Technology & Accessibility (ICCHP / AAATE) 2022',
			placeOfPublicationLang: 'en',
			link: 'https://aaate.net/wp-content/uploads/sites/12/2023/08/OAC22_V1.0_Part_1.pdf#page=165',
			linkText: 'Zum Paper (PDF)',
			showLink: true
		},
		{
			title: 'Accuracy of AI-generated Captions With Collaborative Manual Corrections in Real-Time',
			titleLang: 'en',
			releaseDate: '2023-04',
			contributors: ['Korbinian Kuhn', 'Verena Kersken', 'Gottfried Zimmermann'],
			placeOfPublication: 'ACM CHI Conference on Human Factors in Computing Systems 2023',
			placeOfPublicationLang: 'en',
			link: 'https://dl.acm.org/doi/10.1145/3544549.3585724',
			linkText: 'Zum Paper',
			showLink: true
		},
		{
			title: 'Measuring the Accuracy of Automatic Speech Recognition Solutions',
			titleLang: 'en',
			releaseDate: '2024-01',
			contributors: [
				'Korbinian Kuhn',
				'Verena Kersken',
				'Benedikt Reuter',
				'Niklas Egger',
				'Gottfried Zimmermann'
			],
			placeOfPublication: 'ACM Transactions on Accessible Computing, Volume 16, Issue 4',
			placeOfPublicationLang: 'en',
			link: 'https://dl.acm.org/doi/10.1145/3636513',
			linkText: 'Zum Paper',
			showLink: true
		}
	]
};
