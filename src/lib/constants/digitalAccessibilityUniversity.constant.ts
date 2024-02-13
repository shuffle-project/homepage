import type { Project } from '$lib/interfaces/project.interface';

export const DIGITAL_ACCESSIBILITY_UNIVERSITY: Project = {
	id: 'digital-accessibility-university',
	title: 'Digitale Barrierefreiheit an Hochschulen',
	category: 'Moodle-Kurs',
	shortSummary:
		'Informationen und konkrete Handlungsempfehlungen zur strategischen und systematischen Stärkung von digitaler Barrierefreiheit.',
	targetGroup: ['Für die Hochschulleitung', 'Für Lehrende'],
	summary:
		'Die Materialien die in dem Kurs bereitgestellt sind, richten sich an alle Akteure an Hochschulen, die ihr Verständnis für das Thema der digitalen Barrierefreiheit vertiefen und aktiv dazu beitragen möchten, ihre Institutionen systematisch zugänglicher zu gestalten. Die Kursmaterialien bieten nicht nur zentrale Informationen zu verschiedenen Themen der digitalen Barrierefreiheit, sondern auch konkrete Handlungsempfehlungen, die Sie in Ihrer täglichen Arbeit anwenden können.',
	showInDevelopmentInfo: true,
	partners: ['Universität Bielefeld', 'Hochschule der Medien Stuttgart'],
	joinEvaluation: {
		title: 'Melden Sie sich bei uns!',
		introduction:
			'Egal, ob Sie bereits Erfahrung haben oder sich dem Thema annähern möchten. Auf Anfrage erhalten Sie Zugang zu unserem Kurs und können uns Ihr wertvolles Feedback im Anschluss mitteilen. Wir freuen uns auf Ihre Beteiligung!',
		contactEmail: 'jkuhlmann3@uni-bielefeld.de',
		contactName: 'Judith Kuhlmann'
	}
};
