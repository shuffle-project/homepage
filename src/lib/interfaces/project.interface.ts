import type { TeamMemberName } from '$lib/constants/teamMembers.constant';
import type { ExtendedPlayerConfig } from './player.interface';

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
	contact: {
		short: string;
		domain: string;
	};
}

export interface Image {
	src: string;
	description: string;
}

export interface Publication {
	title: string;
	titleLang: 'de' | 'en';
	contributors: (TeamMemberName | (string & {}))[];
	placeOfPublication: string;
	placeOfPublicationLang: 'de' | 'en';
	releaseDate: string;
	link?: {
		label: string;
		url: string;
		download?: boolean;
		allowReferrer?: boolean;
	};
}

export interface SubProject {
	title: string;
	summary: string;
	link: {
		url: string;
		label: string;
	};
}

export interface Project {
	id: string;
	title: string;
	category: string;
	shortSummary: string;
	targetGroup: TargetGroup[];
	showInDevelopmentInfo?: boolean;
	link?: {
		url: string;
		label: string;
	};
	summary: string;
	partners: ProjectPartners[];
	subProjects?: SubProject[];
	info?: string;
	joinEvaluation?: JoinEvaluation;
	gallery?: Image[];
	publications?: Publication[];
	video?: ExtendedPlayerConfig;
}
