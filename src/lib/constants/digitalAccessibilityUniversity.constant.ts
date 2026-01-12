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
	publications: [
		GESCHICHTEN_DER_ZUGAENGLICHKEIT,
		{
			title: 'Barrierefreiheit und Inklusion lehren? Zur curricularen Verankerung in der Hochschullehre. Status quo an deutschen Hochschulen.',
			titleLang: 'de',
			releaseDate: '2025-12',
			contributors: [
				'Judith Kuhlmann',
				'Sarah Bergmann',
				'Kim Althoff',
				'Prof. Dr. Anna-Maria Kamin',
				'Nadine Auer',
				'Michael Johannfunke',
				'Prof. Dr. Gottfried Zimmermann'
			],
			placeOfPublication:
				'Bielefeld: Fakultät für Erziehungswissenschaft und Zentrale Anlaufstelle Barrierefrei.',
			placeOfPublicationLang: 'de',
			link: {
				label: 'Zum Bericht',
				url: 'https://pub.uni-bielefeld.de/record/3012499'
			},
			category: 'Sonstige Veröffentlichungen',
			apa: `<span class="apa-publication">
				Kuhlmann, J., Bergmann, S., Althoff, K., Kamin, A.-M., Auer, N., Johannfunke, M., & Zimmermann, G. (2025).
				<em>
					Barrierefreiheit und Inklusion lehren? Zur curricularen Verankerung in der Hochschullehre. Status quo an deutschen Hochschulen.
				</em>
				Bielefeld: Fakultät für Erziehungswissenschaft und Zentrale Anlaufstelle Barrierefrei.
				<a
					href="https://doi.org/10.4119/unibi/3012499"
					>https://doi.org/10.4119/unibi/3012499</a
				>
			</span>`
		}

	]
};
