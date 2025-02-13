import type { Project } from '$lib/interfaces/project.interface';

export const ETHICAL_GUIDELINES: Project = {
	id: 'ethische-leitlinien',
	title: 'Ethische Leitlinien',
	shortSummary:
		'Hürdelos statt würdelos das Menschenrecht der digitalen Teilhabe umsetzen (plus leichte Sprache Übersetzung).',
	summary:
		'Die ethischen Leitlinien thematisieren die Bedeutung barrierefreier Hochschullehre als Voraussetzung für digitale Teilhabe. Sie unterstützen ein vielschichtiges Verantwortungsbewusstsein, das unter anderem Medienkompetenz, Datenschutz, Datensicherheit und Inklusion adressiert. Die Leitlinien betonen die Förderung individueller Entfaltung und sozialen Zusammenhalts. Eine Version in leichter Sprache steht ebenfalls zur Verfügung.',
	showInDevelopmentInfo: false,
	partners: ['Hochschule der Medien Stuttgart'],
	download: {
		url: '',
		label: 'Leitlininen (PDF)'
	},
	additionalDownload: {
		url: '',
		label: 'Leitlinien (Leichte Sprache, PDF)'
	}
};
