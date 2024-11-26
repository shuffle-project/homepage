import type { Project } from '$lib/interfaces/project.interface';
import { GESCHICHTEN_DER_ZUGAENGLICHKEIT } from './generalPublications.constant';

export const DIGITAL_ACCESSIBILITY_UNIVERSITY: Project = {
	// id: 'digitale-barrierefreiheit-an-hochschulen',
	id: 'handlungsfelder-digitale-inklusion',
	// title: 'Digitale Barrierefreiheit an Hochschulen',
	title: 'Handlungsfelder digitale Inklusion',
	category: 'Moodle-Kurs',
	shortSummary:
		// 'Handlungsempfehlungen zur strategischen und systematischen Stärkung von digitaler Barrierefreiheit.',
		'Empfehlungen und Good Practices zur systematischen Stärkung von digitaler Inklusion an Hochschulen.',
	summary:
		'Die Materialien die in dem Kurs bereitgestellt sind, richten sich an alle Akteure an Hochschulen, die ihr Verständnis für das Thema der digitalen Barrierefreiheit vertiefen und aktiv dazu beitragen möchten, ihre Institutionen systematisch zugänglicher zu gestalten. Die Kursmaterialien bieten nicht nur zentrale Informationen zu verschiedenen Themen der digitalen Barrierefreiheit, sondern auch konkrete Handlungsempfehlungen, die Sie in Ihrer täglichen Arbeit anwenden können.',
	showInDevelopmentInfo: true,
	partners: ['Universität Bielefeld', 'Hochschule der Medien Stuttgart'],
	webinar: 'reifegradmodell',
	joinEvaluation: {
		title: 'Melden Sie sich bei uns!',
		introduction:
			'Egal, ob Sie bereits Erfahrung haben oder sich dem Thema annähern möchten. Auf Anfrage erhalten Sie Zugang zu unserem Kurs und können uns Ihr wertvolles Feedback im Anschluss mitteilen. Wir freuen uns auf Ihre Beteiligung!',
		contact: {
			short: 'jkuhlmann3',
			domain: 'uni-bielefeld.de'
		},
		contactName: 'Judith Kuhlmann'
	},
	publications: [GESCHICHTEN_DER_ZUGAENGLICHKEIT]
};
