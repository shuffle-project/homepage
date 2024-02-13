import type { Project } from '$lib/interfaces/project.interface';

export const ACCESSIBLE_MOODLE_COURSE: Project = {
	id: 'accessible-moodle-course',
	title: 'Barrierefreie Moodle-Kurse',
	category: 'Moodle-Kurs',
	shortSummary:
		'Dieser Moodle-Kurs beinhaltet Informationen und Umsetz&shy;ungshilfen zur barrierefreien Gestaltung eines Moodle-Kurses und E-Prüfungen.',
	targetGroup: ['Für Lehrende'],
	link: {
		toProject: 'https://openmoodle.uni-bielefeld.de/course/view.php?id=7',
		label: 'Zum Barrierefreien-Moodle-Kurs'
	},
	summary:
		'Bei der Planung von Lehrveranstaltungen und Prüfungen ist es zwingend notwendig, die Bedarfe von allen Studierenden von Anfang an zu berücksichtigen. Dieser Moodle-Kurs umfasst wichtige Tipps und konkrete Anweisungen, um Moodle-Kurse und E-Prüfungen möglichst barrierefrei zu gestalten. Er soll als Unterstützungstool für Lehrende dienen und mit Hintergrundinformationen sowie einfach verständlichen Tipps zur Barrierefreiheit in Moodle die Gestaltung von barrierefreier digitaler Lehre in Moodle vereinfachen.',
	partners: ['Universität Bielefeld'],
	info: 'Damit Sie Zugang zu den Inhalten des Kurses erhalten, müssen Sie sich vorab anmelden. Dazu können Sie ein bestehendes Moodle-Konto nutzen oder ein kostenloses Konto anlegen. Nach dem erfolgreichen Login haben Sie Zugriff auf den Kurs.',
	joinEvaluation: {
		title: 'Projektpartner*in werden',
		introduction: '',
		contactEmail: 'shuffle@uni-bielefeld.de',
		contactName: 'ZAB Uni Bielefeld'
	},
	publications: [
		{
			title: 'Inklusion und Barrierefreiheit',
			titleLang: 'de',
			contributors: ['Tanja Kräwinkel (Herausgebende)', 'Michael Joahnnfunke', 'Christin Stormer'],
			placeOfPublication: 'Buchkapitel in "MoodleKannMehr - nicht nur im Distanzunterricht!"',
			placeOfPublicationLang: 'de',
			releaseDate: '2022-06',
			linkText: 'Zum Kapitel',
			link: 'https://visual-books.com/moodle-kann-mehr/',
			showLink: true
		}
	]
};
