import type { Project } from '$lib/interfaces/project.interface';

export const ACCESSIBLE_MATERIAL_PACK: Project = {
	id: 'materialpaket-barrierefreie-lehre',
	title: 'Materialpaket barrierefreie Lehre',
	category: 'Moodle-Kurs',
	shortSummary:
		'Eine Sammlung von zentralen Informationen und Checklisten für Lehrende, die bei der Gestaltung barrierefreier digitaler Lehre unterstützt.',
	targetGroup: ['Für Lehrende'],
	link: {
		url: 'https://openmoodle.uni-bielefeld.de/course/view.php?id=46',
		label: 'Materialpaket barrierefreie Lehre (Moodle)'
	},
	summary:
		'Das Materialpaket bündelt zentrale Informationen zur Umsetzung barrierefreier Hochschullehre. Knappe Checklisten geben Hinweise zur Umsetzung möglichst barrierefreier Dokumente und Lehrsituationen. Ergänzend dazu findet man ausführliche Anleitungen und Hilfestellungen zur Umsetzung der in den Checklisten aufgeführten Anforderungen. In einer Wissensdatenbank werden zusätzlich Informationen zu weiteren Aspekten im Kontext barrierefreier digitaler Lehre bereitgestellt.',
	partners: ['Universität Bielefeld'],
	joinEvaluation: {
		title: 'Feedback geben',
		introduction:
			'Unser umfangreiches Materialpaket ist ab sofort mit einem Gastzugang frei zugänglich. Nutzen Sie das Forum im Kurs oder die angegebene Kontaktadresse für Feedback, Diskussionen und Ideenaustausch. Ihre Rückmeldungen helfen uns dabei, unsere Materialien stetig zu verbessern.',
		contactName: 'Judith Kuhlmann',
		contact: {
			short: 'jkuhlmann3',
			domain: 'uni-bielefeld.de'
		}
	},
	video: {
		title: 'Vorstellungsvideo',
		videos: [
			{
				title: 'Video',
				videoPathMp4:
					'/videos/materialpaket-barrierefreie-lehre/vorstellung-materialpaket-barrierefreie-lehre.mp4',
				poster:
					'/videos/materialpaket-barrierefreie-lehre/teaser-vorstellung-materialpaket-barrierefreie-lehre.jpg',
				captionsArray: [
					{
						path: '/videos/materialpaket-barrierefreie-lehre/untertitel-vorstellung-materialpaket-barrierefreie-lehre.vtt',
						lang: 'de',
						label: 'Deutsche Untertitel'
					}
				]
			}
		],
		transcripts: [
			{
				title: 'Video mit Audiodeskription',
				body: '<p>Eine Audiodeskription liegt für dieses Video nicht vor. Das Bildgeschehen ist für das Verständnis nicht erforderlich.</p>'
			}
		]
	},
	publications: [
		{
			title:
				'Digitale Hochschullehre für Alle Gestalten: Ergebnisse Einer Lehrendenbefragung an Vier Hochschulen',
			titleLang: 'de',
			contributors: ['Judith Kuhlmann', 'Jule Günter', 'Anna-Maria Kamin'],
			releaseDate: '2023-09',
			placeOfPublication:
				'Medienpädagogik: Zeitschrift für Theorie Und Praxis Der Medienbildung 20 (Inklusive Medienbildung):169-82',
			placeOfPublicationLang: 'de',
			link: {
				url: 'https://doi.org/10.21240/mpaed/jb20/2023.09.07.X',
				label: 'Zum Paper'
			},
			category: 'Paper / Buchbeiträge'
		}
	]
};
