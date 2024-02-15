import type { Project } from '$lib/interfaces/project.interface';

export const MOOC_COURSES: Project = {
	id: 'mooc-courses',
	title: 'MOOC-Kurse',
	category: 'Digitale Barrierefreiheit / Moodle-Kurs?',
	shortSummary:
		'Diese Kurse konzentrieren sich auf das Verständnis und die Umsetzung der digitalen Barrierefreiheit in der Hochschulbildung.',
	targetGroup: ['Für Lehrende'],
	summary:
		'Der Kursinhalt wurde in Zusammenarbeit mit dem ERAMUS+ Projekt IWAC (Integration of Web Accessibility Courses in ICT Programs) entwickelt und ist daher auch als Open Educational Resources verfügbar. Eine wichtige Triebfeder für das Projekt ist die EU-Richtlinie über die Barrierefreiheit im Web (2016/2102), die kürzlich in allen EU-Mitgliedstaaten in nationales Recht umgesetzt wurde. Diese Richtlinie legt Barrierestandards für alle Websites und Apps des öffentlichen Sektors fest. Infolgedessen steigt die Nachfrage nach Fachleuten der Informations- und Kommunikationstechnologie (IKT) mit Kenntnissen über Barrierefreiheit. Zu den wichtigsten Zielgruppen für die Verbesserung der beruflichen Kenntnisse und Fähigkeiten im Bereich der Barrierefreiheit gehören: Hochschullehrer im Allgemeinen und Hochschulstudenten, insbesondere diejenigen, die an IKT-Programmen wie Softwareentwicklung, Medieninformatik und UX-Design beteiligt sind.',
	partners: ['Hochschule der Medien Stuttgart'],
	subProjects: [
		{
			title: 'Barrierefreies Lehren und Lernen',
			summary:
				'In diesem Kurs können Sie die Grundlagen des barrierefreien Lernens und Lehrens kennenlernen, sowohl aus der Sicht eines Professors, der Barrierefreiheit lehrt, als auch aus der Sicht mehrerer Studierender mit Behinderungen. Der Kurs beinhaltet auch praktische Aspekte der inklusiven Lehre, wie z. B. das barrierefreie Erstellen von Textdokumenten und Präsentationen oder das Hinzufügen von Untertiteln zu Videos. Dieser Einführungskurs richtet sich an Lehrkräfte und studentisches Hilfspersonal in der Hochschulbildung.',
			link: {
				label: 'Zu Barrierefreies Lehren und Lernen (Moodle)',
				toProject: 'https://mooc.hdm-stuttgart.de/course/view.php?id=21'
			}
		},
		{
			title: 'Einführung in die Barrierefreiheit im Web aus Sicht der Benutzer',
			summary:
				'Dieser Kurs ist eine Einführung in die Barrierefreiheit des Internets aus der Perspektive von Benutzern mit Behinderungen.  In den vier Kursmodulen werden Aspekte der Benutzerfreundlichkeit und Barrierefreiheit für Menschen mit Sehbehinderungen, Hörbehinderungen, motorischen Behinderungen und kognitiven Behinderungen untersucht. Der Inhalt umfasst Informationen über Herausforderungen und Strategien sowie praktische Übungen. Dieser Kurs richtet sich an Studierende, die an der Erstellung und Entwicklung von Produkten und Dienstleistungen beteiligt sind.',
			link: {
				label: 'Zur Einführung in die Barrierefreiheit (Moodle)',
				toProject: 'https://mooc.hdm-stuttgart.de/course/view.php?id=22'
			}
		}
	],
	joinEvaluation: {
		title: 'Feedback geben',
		introduction:
			'Wir würden uns freuen, Ihr Feedback zu unserem Online-Kurs zu erhalten! Ihre Meinung ist uns wichtig, um unsere Kurse kontinuierlich zu verbessern. Vielen Dank im Voraus!',
		contactEmail: 'Kathy-Ann Heitmeier',
		contactName: 'heitmeier@hdm-stuttgart.de'
	}
};