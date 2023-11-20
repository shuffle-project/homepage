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

export interface Project {
	id: string;
	title: string;
	cardSubtitle: string;
	cardText: string;
	targetGroup: TargetGroup;
	linkToProject: string;
	summary: string;
	partners: ProjectPartners[];
}
