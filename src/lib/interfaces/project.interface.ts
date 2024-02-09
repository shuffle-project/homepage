import type { TeamMemberName } from '$lib/constants/teamMembers.constant';

const TARGET_GROUP = {
	LECTURERS: 'Für Lehrende',
	ADMINISTRATION: 'Für die Hochschulleitung'
} as const;

const PROJECT_PARTNERS = {
	HDM: 'Hochschule der Medien Stuttgart',
	BIELEFELD: 'Universität Bielefeld',
	HEIDELBERG: 'Pädagogische Hochschule Heidelberg',
	FREIBURG: 'Pädagogische Hochschule Freiburg'
} as const;

type ObjectValues<T> = T[keyof T];
export type TargetGroup = ObjectValues<typeof TARGET_GROUP>;
export type ProjectPartners = ObjectValues<typeof PROJECT_PARTNERS>;

export interface JoinEvaluation {
	title: string;
	introduction: string;
	contactName: string;
	contactEmail: string;
}

export interface Publication {
	title: string;
	titleLang: 'de' | 'en';
	contributors: (TeamMemberName | (string & {}))[];
	placeOfPublication: string;
	placeOfPublicationLang: 'de' | 'en';
	releaseDate: string;
	linkText: string;
	link: string;
	showLink: boolean;
}

export interface Project {
	id: string;
	title: string;
	category: string;
	shortSummary: string;
	targetGroup: TargetGroup[];
	showLinkToProject: boolean;
	linkToProject: string;
	linkText: string;
	summary: string;
	partners: ProjectPartners[];
	info?: string;
	joinEvaluation?: JoinEvaluation;
	publications?: Publication[];
}
