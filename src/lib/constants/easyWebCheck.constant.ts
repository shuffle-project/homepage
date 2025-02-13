import type { Project } from '$lib/interfaces/project.interface';

export const EASY_WEB_CHECK: Project = {
	id: 'easy-web-check',
	title: 'Easy-Web-Check',
	shortSummary:
		'Schnell und einfach die Barrierefreiheit digitaler Inhalte prüfen und dokumentieren.',
	link: {
		url: 'https://easy-web-check.bf-lernen.de',
		label: 'Zum Easy-Web-Check'
	},
	summary:
		'Der Easy-Web-Check ist ein Werkzeug zur schnellen und unkomplizierten Überprüfung digitaler Inhalte auf Barrierefreiheit. Er richtet sich an Personen und Organisationen, die ihre Webseiten oder Anwendungen hinsichtlich der Zugänglichkeit verbessern möchten. Durch eine einfache Handhabung ermöglicht der Easy-Web-Check eine erste Einschätzung, ob zentrale Barrierefreiheitsanforderungen erfüllt sind. So können frühzeitig potenzielle Hürden für Nutzende mit unterschiedlichen Bedürfnissen identifiziert und behoben werden.',
	partners: ['Hochschule der Medien Stuttgart'],
	joinEvaluation: {
		title: 'Feedback geben',
		introduction:
			'Die Webseite befindet sich aktuell noch in der Entwicklung. Wir freuen uns über Feedback und Rückmeldungen zu den Inhalten oder möglichen technischen Barrieren über die folgende E-Mail-Adresse.',
		contactName: 'dem Easy-Web-Check-Team',
		contact: {
			short: 'ewc',
			domain: 'bf-lernen.de'
		}
	}
};
