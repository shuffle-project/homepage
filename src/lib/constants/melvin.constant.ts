import type { Project } from '$lib/interfaces/project.interface';

export const MELVIN: Project = {
	id: 'melvin',
	title: 'Melvin',
	category: 'Barrierefreie Videos',
	shortSummary:
		'Erstelle schnell und einfach Videos mit Untertiteln und teile sie in einem barrierefreien Video-Player.',
	targetGroup: ['Für Lehrende'],
	linkToProject: 'https://melvin.shuffle-projekt.de',
	linkText: 'Zu Melvin',
	summary:
		'Barrierefreie Videos sind wichtig, jedoch oft mit einem enormen Aufwand, notwendigem Know-How und dem Einsatz unterschiedlicher Tools verbunden. Melvin möchte hierfür einen schnelleren und bequemeren Lösungsansatz bieten. Innerhalb einer Webanwendung können Sie ihre Videos aufnehmen, automatischen untertiteln lassen und durch einen barrierefreien Player das fertige Video mitsamt Transkript teilen. Die Untertitel können Sie zudem alleine oder im Team verbessern, im Nachhinein oder während eines Livestreams.',
	partners: ['Hochschule der Medien Stuttgart', 'Pädagogische Hochschule Heidelberg'],
	joinEvaluation: {
		title: 'Melvin ausprobieren',
		introduction:
			'Melvin befindet sich aktuell noch in der Entwicklung. Falls Sie trotzdem schon mal die aktuelle Version ausprobieren möchten, können Sie sich gerne bei der folgenden Kontaktperson melden.',
		contactName: 'Korbinian Kuhn',
		contactEmail: 'kuhnko@hdm-stuttgart.de'
	}
};
