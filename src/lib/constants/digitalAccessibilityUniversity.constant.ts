import type { Project } from '$lib/interfaces/project.interface';
import { GESCHICHTEN_DER_ZUGAENGLICHKEIT } from './generalPublications.constant';

export const DIGITAL_ACCESSIBILITY_UNIVERSITY: Project = {
	id: 'handlungsfelder-digitale-inklusion',
	title: 'Barrierefreiheit gestalten',
	longTitle:
		'Barrierefreiheit gestalten: Handlungsempfehlungen und Beispiele aus der Hochschulpraxis',
	shortSummary:
		// 'Handlungsempfehlungen zur strategischen und systematischen Stärkung von digitaler Barrierefreiheit.',
		'Empfehlungen und Good Practices zur systematischen Stärkung von digitaler Inklusion an Hochschulen.',
	summary:
		'Die Materialien die in dem Kurs bereitgestellt sind, richten sich an alle Akteure an Hochschulen, die ihr Verständnis für das Thema der digitalen Barrierefreiheit vertiefen und aktiv dazu beitragen möchten, ihre Institutionen systematisch zugänglicher zu gestalten. Die Kursmaterialien bieten nicht nur zentrale Informationen zu verschiedenen Themen der digitalen Barrierefreiheit, sondern auch konkrete Handlungsempfehlungen, die Sie in Ihrer täglichen Arbeit anwenden können.',
	showInDevelopmentInfo: false,
	link: {
		label: 'Zum Handlungsfelder-Kurs',
		url: 'https://openmoodle.uni-bielefeld.de/course/view.php?id=72'
	},
	partners: ['Universität Bielefeld', 'Hochschule der Medien Stuttgart'],
	webinar: 'reifegradmodell',

	publications: [GESCHICHTEN_DER_ZUGAENGLICHKEIT]
};
