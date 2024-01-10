import type { TeamMember } from '$lib/interfaces/teamMember.interface';

export const TEAM_LEADERSHIP = [
	{
		title: 'Konsortialführung',
		name: 'Prof. Dr. Gottfried Zimmermann',
		projectPartner: 'Hochschule der Medien Stuttgart',
		img: 'gottfried-zimmermann.jpg'
	},
	{
		title: 'Projektleitung',
		name: 'Dr. Verena Kersken',
		projectPartner: 'Hochschule der Medien Stuttgart',
		email: 'kersken@hdm-stuttgart.de',
		img: 'verena-kersken.jpg'
	}
] as const satisfies TeamMember[];

export const TEAM_MEMBERS = [
	{
		name: 'Dr. Anja Gutjahr',
		projectPartner: 'Pädagogische Hochschule Heidelberg',
		img: 'anja-gutjahr.jpg'
	},
	{
		name: 'Ann-Katrin Böhm',
		projectPartner: 'Pädagogische Hochschule Heidelberg',
		email: 'boehm3@ph-heidelberg.de',
		img: 'ann-katrin-boehm.jpg'
	},
	{
		name: 'Anna Weidenbach',
		projectPartner: 'Pädagogische Hochschule Freiburg'
	},
	{
		name: 'Prof. Dr. Anna-Maria Kamin',
		projectPartner: 'Universität Bielefeld',
		email: 'anna-maria.kamin@uni-bielefeld.de',
		img: 'anna-maria-kamin.jpg'
	},
	{
		name: 'Dr. Barbara Bogner',
		projectPartner: 'Pädagogische Hochschule Heidelberg',
		img: 'barbara-bogner.jpg'
	},
	{
		name: 'Benedikt Reuter',
		projectPartner: 'Hochschule der Medien Stuttgart',
		img: 'benedikt-reuter.jpg'
	},
	{
		name: 'Dustin Matzel',
		projectPartner: 'Universität Bielefeld',
		img: 'dustin-matzel.jpg'
	},
	{
		name: 'Frank Laemers',
		projectPartner: 'Pädagogische Hochschule Heidelberg'
	},
	{
		name: 'Prof. Dr. Georg Brunner',
		projectPartner: 'Pädagogische Hochschule Freiburg'
	},
	{
		name: 'Hakan Ali Cetin',
		projectPartner: 'Pädagogische Hochschule Freiburg',
		img: 'hakan-ali-cetin.jpg'
	},
	{
		name: 'Prof. Dr. Johannes Hennies',
		projectPartner: 'Pädagogische Hochschule Heidelberg'
	},
	{
		name: 'Jörn Hoffmann',
		projectPartner: 'Hochschule der Medien Stuttgart'
	},
	{
		name: 'Judith Kuhlmann',
		projectPartner: 'Universität Bielefeld',
		img: 'judith-kuhlmann.jpeg'
	},
	{
		name: 'Dr. Kathy-Ann Heitmeier',
		projectPartner: 'Hochschule der Medien Stuttgart',
		email: 'heitmeier@hdm-stuttgart.de',
		img: 'kathy-ann-heitmeier.jpg'
	},
	{
		name: 'Kim Althoff',
		projectPartner: 'Universität Bielefeld'
	},
	{
		name: 'Korbinian Kuhn',
		projectPartner: 'Hochschule der Medien Stuttgart',
		email: 'kuhnko@hdm-stuttgart.de',
		img: 'korbinian-kuhn.jpg'
	},
	{
		name: 'Prof. Dr. Markus Lang',
		projectPartner: 'Pädagogische Hochschule Heidelberg'
	},
	{
		name: 'Michael Johannfunke',
		projectPartner: 'Universität Bielefeld',
		img: 'michael-johannfunke.jpg'
	},
	{
		name: 'Nadine Auer',
		projectPartner: 'Hochschule der Medien Stuttgart',
		email: 'auer@hdm-stuttgart.de',
		img: 'nadine-auer.jpg'
	},
	{
		name: 'Niklas Egger',
		projectPartner: 'Hochschule der Medien Stuttgart',
		email: 'egger@hdm-stuttgart.de',
		img: 'niklas-egger.jpg'
	},
	{
		name: 'Patricia Piskorek',
		projectPartner: 'Hochschule der Medien Stuttgart',
		img: 'patricia-piskorek.jpg'
	},
	{
		name: 'Prof. Dr. Petra Grimm',
		projectPartner: 'Hochschule der Medien Stuttgart',
		img: 'petra-grimm.jpg'
	},
	{
		name: 'Sarah Bergmann',
		projectPartner: 'Universität Bielefeld'
	},
	{
		name: 'Sebastian Koch',
		projectPartner: 'Hochschule der Medien Stuttgart',
		img: 'sebastian-koch.jpg'
	},
	{
		name: 'Susanne Kuhnert',
		projectPartner: 'Hochschule der Medien Stuttgart'
	}
] as const;

export const OLD_MEMBERS = [
	{
		name: 'Jule Günter',
		projectPartner: 'Universität Bielefeld'
	},
	{
		name: 'Christin Stormer',
		projectPartner: 'Universität Bielefeld'
	}
] as const satisfies TeamMember[];

export const WHOLE_TEAM = [...TEAM_LEADERSHIP, ...TEAM_MEMBERS, ...OLD_MEMBERS];
export type TeamMemberName = (typeof WHOLE_TEAM)[number]['name'];
