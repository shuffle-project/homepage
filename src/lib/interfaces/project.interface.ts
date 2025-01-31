import type { FILTER_OPTIONS } from '$lib/constants/filter.constant';
import type { TeamMemberName } from '$lib/constants/teamMembers.constant';
import type { ExtendedPlayerConfig } from './player.interface';

const PROJECT_PARTNERS = {
	HDM: 'Hochschule der Medien Stuttgart',
	BIELEFELD: 'Universität Bielefeld',
	HEIDELBERG: 'Pädagogische Hochschule Heidelberg',
	FREIBURG: 'Pädagogische Hochschule Freiburg'
} as const;

type ObjectValues<T> = T[keyof T];
export type ProjectPartners = ObjectValues<typeof PROJECT_PARTNERS>;
export type FilterOptions = (typeof FILTER_OPTIONS)[number]['value'];

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

export type PublicationCategory =
	| 'Paper / Buchbeiträge'
	| 'Workshops'
	| 'Posterpräsentationen'
	| 'Abschlussarbeiten'
	| 'Sonstige Veröffentlichungen';

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
	category: PublicationCategory;
	apa: string;
}

export interface SubProject {
	title: string;
	summary: string;
	link: {
		url: string;
		label: string;
	};
}

export const WEBINAR_COMPONENTS = {
	RGM: 'reifegradmodell',
	LERNRAUME: 'digitale-lernraume',
	BLINDDATE: 'blinddate',
	BADGE: 'barrierefrei-lehren'
} as const;

export type WebinarComponent = ObjectValues<typeof WEBINAR_COMPONENTS>;

export interface Project {
	id: string;
	title: string;
	longTitle?: string;
	category: string;
	shortSummary: string;
	showInDevelopmentInfo?: boolean;
	webinar?: WebinarComponent;
	link?: {
		url: string;
		label: string;
	};
	additionalLink?: {
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
