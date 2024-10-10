import type { Project } from '$lib/interfaces/project.interface';

export const ILIAS_COURSE: Project = {
	id: 'ilias-barrierefrei',
	title: 'ILIAS Barrierefrei',
	category: 'ILIAS-Kurs',
	shortSummary:
		'Informationen, Beispiele und Ressourcen zum Thema (digitale) Barrierefreiheit in und um ILIAS.',
	summary:
		'Sowohl auf ILIAS selbst, als auch bei der Gestaltung von Lehrmaterialien mit Drittanwendungen (wie z.B. den Office-Programmen Word etc.), können unabsichtlich Barrieren eingebaut werden, die einige Nutzer*innen ausschließen. In diesem Kurs lernen Sie, worauf Sie achten müssen, um solche Barrieren zu vermeiden. Außerdem finden Sie hier Hintergrundinformationen zu Begriffen wie Inklusion und verschiedenen Arten von Beeinträchtigungen sowie weiterführende Links.',

	partners: ['Pädagogische Hochschule Freiburg'],
	webinar: 'digitale-lernraume',
	link: {
		label: 'Zum Lernraum für (digitale) Barrierefreiheit in der Lehre (ILIAS)',
		url: 'https://ilias-extern.ph-freiburg.de/goto.php?target=cat_18205&client_id=phfr-ext'
	},
	joinEvaluation: {
		title: 'Feedback und Rückfragen',
		introduction:
			'Damit wir unser Angebot für Sie optimieren können, sind wir auf Ihr Feedback angewiesen. Haben Sie Fragen zu den Inhalten, Einwände, oder Anregungen, schreiben Sie uns eine E-Mail. Wir freuen uns über jede Nachricht.',
		contact: {
			short: 'shuffle',
			domain: 'ph-freiburg.de'
		},
		contactName: 'dem SHUFFLE Freiburg Team'
	}
};
