import type { TeamMember } from '$lib/interfaces/teamMember.interface';

export const TEAM_LEADERSHIP = [
	{
		title: 'Konsortialführung',
		name: 'Prof. Dr. Gottfried Zimmermann',
		projectPartner: 'Hochschule der Medien Stuttgart',
		img: 'gottfried-zimmermann.jpg'
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
		img: 'ann-katrin-boehm.jpg',
		contact: {
			short: 'boehm3',
			domain: 'ph-heidelberg.de'
		}
	},
	{
		name: 'Anna Weidenbach',
		projectPartner: 'Pädagogische Hochschule Freiburg'
	},
	{
		name: 'Prof. Dr. Anna-Maria Kamin',
		projectPartner: 'Universität Bielefeld',
		img: 'anna-maria-kamin.jpg',
		contact: {
			short: 'anna-maria.kamin',
			domain: 'uni-bielefeld.de'
		}
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
		img: 'hakan-ali-cetin.jpg',
		contact: {
			short: ' hakan.cetin',
			domain: 'ph-freiburg.de'
		}
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
		img: 'kathy-ann-heitmeier.jpg',
		contact: {
			short: 'heitmeier',
			domain: 'hdm-stuttgart.de'
		}
	},
	{
		name: 'Kim Althoff',
		projectPartner: 'Universität Bielefeld',
		img: 'kim-althoff.jpg'
	},
	{
		name: 'Korbinian Kuhn',
		projectPartner: 'Hochschule der Medien Stuttgart',
		img: 'korbinian-kuhn.jpg',
		contact: {
			short: 'kuhnko',
			domain: 'hdm-stuttgart.de'
		}
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
		img: 'nadine-auer.jpg',
		contact: {
			short: 'auer',
			domain: 'hdm-stuttgart.de'
		}
	},
	{
		name: 'Niklas Egger',
		projectPartner: 'Hochschule der Medien Stuttgart',
		img: 'niklas-egger.jpg',
		contact: {
			short: 'egger',
			domain: 'hdm-stuttgart.de'
		}
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
] as const satisfies TeamMember[];

export const OLD_MEMBERS = [
	{
		name: 'Dr. Verena Kersken',
		projectPartner: 'Hochschule der Medien Stuttgart',
		img: 'verena-kersken.jpg'
	},
	{
		name: 'Jule Günter',
		projectPartner: 'Universität Bielefeld'
	},
	{
		name: 'Christin Stormer',
		projectPartner: 'Universität Bielefeld'
	},
	{
		name: 'Franziska Neumann',
		projectPartner: 'Pädagogische Hochschule Freiburg'
	},
	{
		name: 'Samira Kalemba',
		projectPartner: 'Pädagogische Hochschule Freiburg'
	},
	{
		name: 'Anna-Maria Warmuth',
		projectPartner: 'Pädagogische Hochschule Heidelberg'
	},
	{
		name: 'Insa Menke',
		projectPartner: 'Universität Bielefeld'
	},
	{
		name: 'Andreas Burkard',
		projectPartner: 'Hochschule der Medien Stuttgart'
	}
] as const satisfies TeamMember[];

export const WHOLE_TEAM = [...TEAM_LEADERSHIP, ...TEAM_MEMBERS, ...OLD_MEMBERS];
export type TeamMemberName = (typeof WHOLE_TEAM)[number]['name'];
