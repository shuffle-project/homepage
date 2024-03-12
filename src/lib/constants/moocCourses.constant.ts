import type { Project } from '$lib/interfaces/project.interface';

export const MOOC_COURSES: Project = {
	id: 'mooc-courses',
	title: 'Barrierefreiheit: Lehren & Web',
	category: 'Moodle-Kurs',
	shortSummary:
		'Diese Kurse konzentrieren sich auf das Verständnis und die Umsetzung der digitalen Barrierefreiheit in der Hochschulbildung.',
	targetGroup: ['Für Lehrende'],
	summary:
		'Der Kursinhalt wurde in Zusammenarbeit mit dem ERAMUS+ Projekt <span lang="en">IWAC (Integration of Web Accessibility Courses in ICT Programs)</span> entwickelt. Die EU-Richtlinie zur Barrierefreiheit im Web (2016/2102) legt Standards für die Barrierefreiheit aller Websites und Apps des öffentlichen Sektors fest. Zu den wichtigsten Zielgruppen für die Verbesserung der professionellen Kenntnisse und Fähigkeiten im Bereich Barrierefreiheit gehören Hochschullehrer und Studierende in IKT-Studiengängen.',
	partners: ['Hochschule der Medien Stuttgart'],
	subProjects: [
		{
			title: 'Barrierefreies Lehren und Lernen',
			summary:
				'In diesem Kurs können Sie die Grundlagen des barrierefreien Lernens und Lehrens kennenlernen, sowohl aus der Sicht eines Professors, der Barrierefreiheit lehrt, als auch aus der Sicht mehrerer Studierender mit Behinderungen. Der Kurs beinhaltet auch praktische Aspekte der inklusiven Lehre, wie z. B. das barrierefreie Erstellen von Textdokumenten und Präsentationen oder das Hinzufügen von Untertiteln zu Videos. Dieser Einführungskurs richtet sich an Lehrkräfte und studentisches Hilfspersonal in der Hochschulbildung.',
			link: {
				label: 'Zu Barrierefreies Lehren und Lernen (Moodle)',
				url: 'https://mooc.hdm-stuttgart.de/course/view.php?id=21'
			}
		},
		{
			title: 'Einführung in die Barrierefreiheit im Web aus Sicht der Benutzer',
			summary:
				'Dieser Kurs ist eine Einführung in die Barrierefreiheit des Internets aus der Perspektive von Benutzern mit Behinderungen.  In den vier Kursmodulen werden Aspekte der Benutzerfreundlichkeit und Barrierefreiheit für Menschen mit Sehbehinderungen, Hörbehinderungen, motorischen Behinderungen und kognitiven Behinderungen untersucht. Der Inhalt umfasst Informationen über Herausforderungen und Strategien sowie praktische Übungen. Dieser Kurs richtet sich an Studierende, die an der Erstellung und Entwicklung von Produkten und Dienstleistungen beteiligt sind.',
			link: {
				label: 'Zur Einführung in die Barrierefreiheit (Moodle)',
				url: 'https://mooc.hdm-stuttgart.de/course/view.php?id=22'
			}
		}
	],
	info: 'Damit Sie Zugang zu den Inhalten des Kurses erhalten, müssen Sie sich vorab anmelden. Dazu können Sie ein bestehendes Moodle-Konto nutzen oder ein kostenloses Konto anlegen. Nach dem erfolgreichen Login haben Sie Zugriff auf den Kurs.',
	joinEvaluation: {
		title: 'Feedback geben',
		introduction:
			'Wir würden uns freuen, Ihr Feedback zu unserem Online-Kurs zu erhalten! Ihre Meinung ist uns wichtig, um unsere Kurse kontinuierlich zu verbessern. Vielen Dank im Voraus!',
		contact: {
			short: 'heitmeier',
			domain: 'hdm-stuttgart.de'
		},
		contactName: 'Kathy-Ann Heitmeier'
	}
};
