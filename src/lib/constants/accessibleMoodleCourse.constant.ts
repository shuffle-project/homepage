import type { Project } from '$lib/interfaces/project.interface';

export const ACCESSIBLE_MOODLE_COURSE: Project = {
	id: 'barrierefreie-moodle-kurse',
	title: 'Moodle Barrierefrei',
	category: 'Moodle-Kurs',
	shortSummary:
		'Informationen und Umsetz&shy;ungshilfen zur barrierefreien Gestaltung von Moodle-Kursen und E-Prüfungen.',
	link: {
		url: 'https://openmoodle.uni-bielefeld.de/course/view.php?id=7',
		label: 'Zum Barrierefreien-Moodle-Kurs'
	},
	summary:
		'Bei der Planung von Lehrveranstaltungen und Prüfungen ist es zwingend notwendig, die Bedarfe von allen Studierenden von Anfang an zu berücksichtigen. Dieser Moodle-Kurs umfasst wichtige Tipps und konkrete Anweisungen, um Moodle-Kurse und E-Prüfungen möglichst barrierefrei zu gestalten. Er soll als Unterstützungstool für Lehrende dienen und mit Hintergrundinformationen sowie einfach verständlichen Tipps zur Barrierefreiheit in Moodle die Gestaltung von barrierefreier digitaler Lehre in Moodle vereinfachen.',
	partners: ['Universität Bielefeld'],
	joinEvaluation: {
		title: 'Evaluationsteilnahme',
		introduction:
			'Nutzen Sie jetzt die Chance zur partizipativen Mitgestaltung. Nehmen Sie an der Evaluation des Moodle-Kurses "Moodle-Kurse barrierefrei gestalten" teil und äußern Sie mit Ihrer Beteiligung konstruktives Feedback.',
		contact: {
			short: 'shuffle',
			domain: 'uni-bielefeld.de'
		},
		contactName: 'ZAB Uni Bielefeld'
	},
	publications: [
		{
			title: 'SHUFFLE – Hochschul-Initiative Digitale Barrierefreiheit für Alle',
			titleLang: 'de',
			contributors: ['Tanja Kräwinkel (Herausgebende)', 'Michael Joahnnfunke', 'Christin Stormer'],
			placeOfPublication: 'Sammelbandartikel in "MoodleKannMehr - nicht nur im Distanzunterricht!"',
			placeOfPublicationLang: 'de',
			releaseDate: '2022-06',
			link: {
				url: 'https://visual-books.com/moodle-kann-mehr/',
				label: 'Zum Sammelband'
			},
			category: 'Paper / Buchbeiträge',
			apa: `<span class="apa-publication">
				Johannfunke, M. & Stormer, C. (2022). SHUFFLE – Hochschul-Initiative Digitale
				Barrierefreiheit für Alle. In T. Kräwinkel (Hrsg.),
				<em>#MoodleKannMehr: - nicht nur im Distanzunterricht!,</em>
				(pp. 105-108). Visual Ink Publishing.
			</span>`
		}
	]
};
