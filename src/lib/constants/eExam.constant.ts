import type { Project } from '$lib/interfaces/project.interface';

export const E_EXAM: Project = {
	id: 'elektronische-pruefungen',
	title: 'Barrierefreie digitale und E-Prüfungen',
	shortSummary: 'Informationen und Checkliste zur barrierefreien Gestaltung von E-Prüfungen.',
	summary: `Bei der Durchführung von E-Prüfungen ist es
zwingend notwendig, dass diese für alle Studierenden zugänglich und bearbeitbar sind.
Entsprechend sollten E-Prüfungen so gestaltet sein, dass sowohl die gestellten Aufgaben als
auch die Rückmeldungen barrierefrei abrufbar sind. Dazu umfasst dieser Moodle-Kurs die
wichtigsten Informationen zu Überlegungen während des gesamten Prozesses von E-Prüfungen,
verfügt über eine Checkliste, einen Leitfaden sowie weiterführende
Informationen.`,
	link: {
		label: 'Zum Moddle-Kurs',
		url: 'https://openmoodle.uni-bielefeld.de/course/view.php?id=112'
	},
	partners: ['Universität Bielefeld', 'Pädagogische Hochschule Freiburg'],
	joinEvaluation: {
		title: 'Feedback geben',
		introduction:
			'Unser Kurs ist ab sofort frei zugänglich. Nutzen Sie die angegebene Kontaktadresse für Feedback, Diskussionen und Ideenaustausch. Ihre Rückmeldungen helfen uns dabei, unsere Materialien stetig zu verbessern.',
		contactName: 'ZAB Uni Bielefeld',
		contact: {
			short: 'shuffle',
			domain: 'uni-bielefeld.de'
		}
	}
};
