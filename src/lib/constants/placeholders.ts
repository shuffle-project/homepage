import type { Project } from '$lib/interfaces/project.interface';

export const PLACEHOLDERS: Project[] = [
	{
		id: 'blinddate',
		title: 'BlindDate',
		cardSubtitle: 'Website',
		cardText:
			'Volutpat feugiat ultricies lectus elit velit quis. Scelerisque egestas hac tempor nisl ac.',
		targetGroup: 'Für die Hochschulleitung',
		linkToProject: 'https://barrierefreies-blinddate.de/',
		summary:
			'Lorem ipsum dolor sit amet consectetur. A pellentesque amet mattis nec molestie. Lectus dictum ac urna fermentum aliquam commodo elementum cursus. Leo et rutrum dignissim aliquam sed orci ut est viverra. Tincidunt nunc tortor sit ultricies dui orci mauris sed diam. Tristique nunc mauris ut diam ac sem ultrices ut. Egestas pretium arcu quis nam velit.',
		partners: ['Hochschule der Medien Stuttgart', 'Pädagogische Hochschule Freiburg'],
		joinEvaluation: {
			introduction:
				'Tincidunt nunc tortor sit ultricies dui orci mauris sed diam. Tristique nunc mauris ut diam ac sem ultrices ut. Egestas pretium arcu quis nam velit.',
			contactEmail: 'mustermann@hdm-stuttgart.de',
			contactName: 'Herr Mustermann'
		},
		publications: [
			{
				title:
					'Using Design Thinking Methods in Developing a Digital Accessibility Resource Website',
				titleLang: 'en',
				contributors: [
					'K. Heitmeier',
					'A. Böhm',
					'V. Kersken',
					'P. Piskorek',
					'N. Egger',
					'M. Lang',
					'G. Zimmermann'
				],
				placeOfPublication: 'ICCHP-AAATE 2022',
				placeOfPublicationLang: 'en',
				linkText: 'Zum Paper',
				link: '/'
			},
			{
				title: 'Persona Co-design for Improving Digital Accessibility',
				titleLang: 'en',
				contributors: [
					'K. Heitmeier',
					'V. Kersken',
					'P. Piskorek',
					'N. Egger',
					'A. Böhm',
					'M. Lang',
					'G. Zimmermann'
				],
				placeOfPublication: 'ACM CHI Conference on Human Factors in Computing Systems 2023',
				placeOfPublicationLang: 'en',
				linkText: 'Paper anzeigen (PDF)',
				link: '/'
			}
		]
	},
	{
		id: 'moodle-course',
		title: 'Barrierefreier Moodle-Kurs',
		cardSubtitle: 'Leitfaden',
		cardText:
			'Lorem ipsum dolor sit amet consectetur. Volutpat feugiat ultricies lectus elit velit quis. Scelerisque egestas hac tempor nisl falle mir solano.',
		targetGroup: 'Für Lehrende',
		linkToProject: 'https://barrierefreies-blinddate.de/',
		summary:
			'Lorem ipsum dolor sit amet consectetur. A pellentesque amet mattis nec molestie. Lectus dictum ac urna fermentum aliquam commodo elementum cursus. Leo et rutrum dignissim aliquam sed orci ut est viverra. Tincidunt nunc tortor sit ultricies dui orci mauris sed diam. Tristique nunc mauris ut diam ac sem ultrices ut. Egestas pretium arcu quis nam velit.',
		partners: ['Hochschule der Medien Stuttgart', 'Pädagogische Hochschule Freiburg']
	},
	{
		id: 'maturity-model',
		title: 'Reifegradmodell',
		cardSubtitle: 'Lectus',
		cardText:
			'Lorem ipsum dolor sit amet consectetur. Volutpat feugiat ultricies lectus elit velit quis. Scelerisque egestas hac tempor nisl ac malesuada.',
		targetGroup: 'Für Lehrende',
		linkToProject: 'https://barrierefreies-blinddate.de/',
		summary:
			'Lorem ipsum dolor sit amet consectetur. A pellentesque amet mattis nec molestie. Lectus dictum ac urna fermentum aliquam commodo elementum cursus. Leo et rutrum dignissim aliquam sed orci ut est viverra. Tincidunt nunc tortor sit ultricies dui orci mauris sed diam. Tristique nunc mauris ut diam ac sem ultrices ut. Egestas pretium arcu quis nam velit.',
		partners: [
			'Hochschule der Medien Stuttgart',
			'Pädagogische Hochschule Freiburg',
			'Pädagogische Hochschule Heidelberg',
			'Universität Bielefeld'
		]
	},
	{
		id: 'checklist',
		title: 'Checklisten',
		cardSubtitle: 'Volutpat',
		cardText:
			'Egestas mauris urna dictumst feugiat tristique. Quam tempus sit a consequat elit.  Et risus risus netus elit rhoncus.',
		targetGroup: 'Für Lehrende',
		linkToProject: 'https://barrierefreies-blinddate.de/',
		summary:
			'Lorem ipsum dolor sit amet consectetur. A pellentesque amet mattis nec molestie. Lectus dictum ac urna fermentum aliquam commodo elementum cursus. Leo et rutrum dignissim aliquam sed orci ut est viverra. Tincidunt nunc tortor sit ultricies dui orci mauris sed diam. Tristique nunc mauris ut diam ac sem ultrices ut. Egestas pretium arcu quis nam velit.',
		partners: ['Hochschule der Medien Stuttgart', 'Pädagogische Hochschule Freiburg']
	}
];
