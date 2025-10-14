import type { Project } from '$lib/interfaces/project.interface';
import {
	BARRIEREFREIHEIT_IN_DER_LEHRE,
	GESCHICHTEN_DER_ZUGAENGLICHKEIT,
	LERNMANAGEMENTSYSTEME_MOODLE_UND_ILIAS
} from './generalPublications.constant';

export const ACCESSIBLE_MOODLE_COURSE: Project = {
	id: 'barrierefreie-moodle-kurse',
	title: 'Moodle Barrierefrei',
	shortSummary:
		'Informationen und Umsetz&shy;ungshilfen zur barrierefreien Gestaltung von Moodle-Kursen.',
	link: {
		url: 'https://openmoodle.uni-bielefeld.de/course/view.php?id=7',
		label: 'Zum Barrierefreien-Moodle-Kurs'
	},
	summary:
		'Bei der Planung von Lehrveranstaltungen ist es zwingend notwendig, die Bedarfe von allen Studierenden von Anfang an zu berücksichtigen. Dieser Moodle-Kurs umfasst wichtige Tipps und konkrete Anweisungen, um Moodle-Kurse möglichst barrierefrei zu gestalten. Er soll als Unterstützungstool für Lehrende dienen und mit Hintergrundinformationen sowie einfach verständlichen Tipps zur Barrierefreiheit in Moodle die Gestaltung von barrierefreier digitaler Lehre in Moodle vereinfachen.',
	webinar: 'digitale-lernraume',
	partners: ['Universität Bielefeld'],
	joinEvaluation: {
		title: 'Feedback geben',
		introduction:
			'Unser Kurs ist ab sofort frei zugänglich. Nutzen Sie das Forum im Kurs oder die angegebene Kontaktadresse für Feedback, Diskussionen und Ideenaustausch. Ihre Rückmeldungen helfen uns dabei, unsere Materialien stetig zu verbessern.',
		contact: {
			short: 'shuffle',
			domain: 'uni-bielefeld.de'
		},
		contactName: 'ZAB Uni Bielefeld'
	},
	video: {
		title: 'Vorstellungsvideo',
		videos: [
			{
				title: 'Video',
				videoPathMp4: '/videos/moodle-barrierefrei/moodle-barrierefrei.mp4',
				poster: '/videos/moodle-barrierefrei/teaser-moodle-barrierefrei.jpg',
				captionsArray: [
					{
						path: '/videos/moodle-barrierefrei/untertitel-moodle-barrierefrei.vtt',
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
			},
			{
				title: 'Transkript',
				body: `
				<p>In diesem Video wollen wir Ihnen einen Moodle-Kurs vorstellen, der alle wichtigen Informationen, 
				Tipps und konkrete Anweisungen enthält, um Moodle-Kurse so barrierefrei wie möglich zu gestalten. </p>

				<p>Warum es diesen Kurs überhaupt gibt? Moodle ist eines der meist genutzten Lernmanagementsysteme in Deutschland.
				 Damit die Zugänglichkeit zu Informationen und Inhalten von der Plattform für alle Studierende gewährleistet wird, 
				 ist die barrierefreie Gestaltung von Lehrinhalten notwendig. Ziel dieses Kurses ist es, 
				 Ihnen die nötigsten Informationen und Materialien gebündelt zur Verfügung zu stellen, 
				 damit Sie Moodle-Kurse barrierefrei gestalten können. </p>

				<p>Damit Sie sich im Moodle-Kurs orientieren können, 
				gelangen Sie über das Inhaltsverzeichnis in die unterschiedlichen Abschnitte. 
				Die Navigation im Kurs ist aber auch über das Inhaltsverzeichnis auf der linken Seite in der Sidebar möglich. </p>

				<p>Im ersten Abschnitt finden Sie Hintergrundinformationen zur Barrierefreiheit in Moodle sowie die Auflistung weiterer Moodle-Kurse, 
				die bei der Gestaltung barrierefreier Lehre unterstützen können. </p>

				<p>Im zweiten Abschnitt gelangen Sie zum Hauptbestandteil des Kurses. Dieser besteht aus einer nützlichen Checkliste und Umsetzungshilfe,
				 um Moodle-Kurse barrierefrei zu gestalten. Die Checkliste ist mit Verlinkungen zur Umsetzungshilfe ausgestattet. 
				 Falls Sie genauere Informationen zu einzelnen Punkten der Checkliste benötigen, 
				 gelangen Sie durch die direkte Verlinkung zu ausführlicheren Beschreibungen, Bedeutungserklärungen und Anleitungen. </p>

				<p>Durch das Abhaken der Checkpunkte fungiert die Checkliste automatisch als Testung auf Barrierefreiheit des Kurses. 
				Sowohl die Checkliste als auch die Umsetzungshilfe stehen auch als Download zur Verfügung. </p>

				<p>Möchten Sie weitere nützliche Informationen und Hinweise zur barrierefreien Lehre erhalten, 
				so finden Sie diese gebündelt im dritten Kapitel. Sowohl Hintergrundinformationen zur gesetzlichen Grundlage als auch 
				weitere Tipps und Tools sowie eine Linksammlung sind hier zusammengestellt. </p>

				<p>Bei Fragen oder Anregungen zu diesem Kurs finden Sie die Kontaktdaten im vierten und fünften Abschnitt.</p>
				
				<p>Verwenden auch Sie Moodle für Ihre Lehre? Dann nutzen Sie die Materialien,
				 um Ihren Moodle-Kurs möglichst barrierefrei zu gestalten und digitale Barrierefreiheit in Moodle voranzutreiben!</p>
				`
			}
		]
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
		},
		GESCHICHTEN_DER_ZUGAENGLICHKEIT,
		LERNMANAGEMENTSYSTEME_MOODLE_UND_ILIAS,
		BARRIEREFREIHEIT_IN_DER_LEHRE
	]
};
