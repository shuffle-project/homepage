import type { Project } from '$lib/interfaces/project.interface';

export const ACCESSIBLE_MATERIAL_PACK: Project = {
	id: 'accessible-material-pack',
	title: 'Materialpaket barrierefreie Lehre',
	category: 'Moodle-Kurs',
	shortSummary:
		'Eine Sammlung von zentralen Informationen und Checklisten für Lehrende, die bei der Gestaltung barrierefreier digitaler Lehre unterstützt.',
	targetGroup: ['Für Lehrende'],
	linkToProject: 'https://openmoodle.uni-bielefeld.de/course/view.php?id=46',
	linkText: 'Zum Materialpaket barrierefreie Lehre (Moodle)',
	summary:
		'Das Materialpaket bündelt zentrale Informationen zur Umsetzung barrierefreier Hochschullehre. Knappe Checklisten geben Hinweise zur Umsetzung möglichst barrierefreier Dokumente und Lehrsituationen. Ergänzend dazu findet man ausführliche Anleitungen und Hilfestellungen zur Umsetzung der in den Checklisten aufgeführten Anforderungen. In einer Wissensdatenbank werden zusätzlich Informationen zu weiteren Aspekten im Kontext barrierefreier digitaler Lehre bereitgestellt.',
	partners: ['Universität Bielefeld'],
	joinEvaluation: {
		title: 'Projektpartner*in werden',
		introduction: '',
		contactName: 'Judith Kuhlmann',
		contactEmail: 'jkuhlmann3@uni-bielefeld.de'
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
			link: 'https://doi.org/10.21240/mpaed/jb20/2023.09.07.X',
			linkText: 'Zum Paper'
		}
	]
};
