import type { Project } from '$lib/interfaces/project.interface';

export const ACCESSIBLE_MATERIAL_PACK: Project = {
	id: 'materialpaket-barrierefreie-lehre',
	title: 'Materialpaket Lehre',
	category: 'Moodle-Kurs',
	shortSummary:
		'Checklisten und Anleitungen zur Umsetzung barrierefreier Dokumente und Lehr-/Lernsettings.',
	link: {
		url: 'https://openmoodle.uni-bielefeld.de/course/view.php?id=46',
		label: 'Materialpaket barrierefreie Lehre (Moodle)'
	},
	summary:
		'Das Materialpaket bündelt zentrale Informationen zur Umsetzung barrierefreier Hochschullehre. Knappe Checklisten geben Hinweise zur Umsetzung möglichst barrierefreier Dokumente und Lehrsituationen. Ergänzend dazu findet man ausführliche Anleitungen und Hilfestellungen zur Umsetzung der in den Checklisten aufgeführten Anforderungen. In einer Wissensdatenbank werden zusätzlich Informationen zu weiteren Aspekten im Kontext barrierefreier digitaler Lehre bereitgestellt.',
	partners: ['Universität Bielefeld'],
	joinEvaluation: {
		title: 'Feedback geben',
		introduction:
			'Unser umfangreiches Materialpaket ist ab sofort mit einem Gastzugang frei zugänglich. Nutzen Sie das Forum im Kurs oder die angegebene Kontaktadresse für Feedback, Diskussionen und Ideenaustausch. Ihre Rückmeldungen helfen uns dabei, unsere Materialien stetig zu verbessern.',
		contactName: 'Judith Kuhlmann',
		contact: {
			short: 'jkuhlmann3',
			domain: 'uni-bielefeld.de'
		}
	},
	video: {
		title: 'Vorstellungsvideo',
		videos: [
			{
				title: 'Video',
				videoPathMp4:
					'/videos/materialpaket-barrierefreie-lehre/vorstellung-materialpaket-barrierefreie-lehre.mp4',
				poster:
					'/videos/materialpaket-barrierefreie-lehre/teaser-vorstellung-materialpaket-barrierefreie-lehre.jpg',
				captionsArray: [
					{
						path: '/videos/materialpaket-barrierefreie-lehre/untertitel-vorstellung-materialpaket-barrierefreie-lehre.vtt',
						lang: 'de',
						label: 'Deutsche Untertitel'
					}
				]
			}
		],
		transcripts: [
			{
				title: 'Video mit Audiodeskription',
				body: '<p>Eine Audiodeskription liegt für dieses Video nicht vor. Das Bildgeschehen ist für das Verständnis nicht erforderlich.</p>'
			}
		]
	},
	publications: [
		{
			title:
				'Digitale Hochschullehre für Alle Gestalten: Ergebnisse Einer Lehrendenbefragung an Vier Hochschulen',
			titleLang: 'de',
			contributors: ['Judith Kuhlmann', 'Jule Günter', 'Anna-Maria Kamin'],
			releaseDate: '2023-09',
			placeOfPublication:
				'Medienpädagogik: Zeitschrift für Theorie Und Praxis Der Medienbildung 20 (Inklusive Medienbildung):169-182',
			placeOfPublicationLang: 'de',
			link: {
				url: 'https://doi.org/10.21240/mpaed/jb20/2023.09.07.X',
				label: 'Zum Paper'
			},
			category: 'Paper / Buchbeiträge',
			apa: `
			<span class="apa-publication">
				Kuhlmann, J., Günter, J. & Kamin, A.-M. (2023). Digitale Hochschullehre für Alle
				gestalten. Ergebnisse einer Lehrendenbefragung an vier Hochschulen.
				<em>MedienPädagogik: Zeitschrift für Theorie und Praxis in der Medienbildung,</em>
				20, 169-182.
				<a href="https://doi.org/10.21240/mpaed/jb20/2023.09.07.X."
					>https://doi.org/10.21240/mpaed/jb20/2023.09.07.X.</a
				>
			</span>`
		},
		{
			title: 'Sensibilisierung und Qualifizierung von Lehrenden für die digitale Barrierefreiheit',
			titleLang: 'de',
			releaseDate: '2023-09',
			contributors: ['Judith Kuhlmann, Anna-Maria Kamin, Dustin Matzel, Michael Johannfunke'],
			placeOfPublication: 'Turn Conference ’23 Prototyp Zukunft',
			placeOfPublicationLang: 'de',
			category: 'Sonstige Veröffentlichungen',
			link: {
				label: 'Folien herunterladen (PowerPoint)',
				url: 'downloads/Praesentation_TURN23_barrierefrei.pptx',
				download: true
			},
			apa: `	<span class="apa-publication">
				Kuhlmann, J., Kamin, A.-M., Matzel, D. & Johannfunke, M. (2023).
				<em>
					Sensibilisierung und Qualifizierung von Lehrenden für die digitale Barrierefreiheit
				</em>
				<span lang="en">[Presentation]</span>. Turn Conference ’23 Prototyp Zukunft, <span>Cologne, Germany</span>.
				<a href="https://shuffle-projekt.de/downloads/Praesentation_TURN23_barrierefrei.pptx"
					>https://shuffle-projekt.de/downloads/Praesentation_TURN23_barrierefrei.pptx</a
				>
			</span>`
		},
		{
			title: 'Sensitize and Qualify University Teachers for Digital Accessibility',
			titleLang: 'en',
			releaseDate: '2024-07',
			contributors: ['Judith Kuhlmann', 'Kim Althoff', 'Anna-Maria Kamin', 'Michael Johannfunke'],
			placeOfPublication:
				'HCI International 2024 Posters, 26th International Conference on Human-Computer Interaction',
			placeOfPublicationLang: 'en',
			category: 'Paper / Buchbeiträge',
			link: {
				label: 'Zum Artikel',
				url: 'https://link.springer.com/chapter/10.1007/978-3-031-61947-2_8'
			},
			apa: `
			<span class="apa-publication">
				Kuhlmann, J., Althoff, K., Kamin, A.-M. & Johannfunke, M. (2024). Sensitize and Qualify
				University Teachers for Digital Accessibility. In C. Stephanidis, M. Antona, S. Ntoa, G. Salvendy (Eds.), <em>HCI International 2024 Posters, 26th International Conference on Human-Computer Interaction, HCII 2024, Washington, DC, USA, June 29 – July 4, 2024, Proceedings, (Part 2, 66-74). Springer</em>.
				<a href="https://link.springer.com/chapter/10.1007/978-3-031-61947-2_8">https://link.springer.com/chapter/10.1007/978-3-031-61947-2_8</a>
			</span>
			`
		}
	]
};
