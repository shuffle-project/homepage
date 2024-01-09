import type { ProjectPartners } from './project.interface';

export interface TeamMember {
	title?: string;
	name: string;
	projectPartner: ProjectPartners;
	img?: string;
	email?: string;
}
