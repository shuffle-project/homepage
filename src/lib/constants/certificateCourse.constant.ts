import type { Project } from '$lib/interfaces/project.interface';

export const CERTIFICATE_COURSE: Project = {
	id: 'lernkurs-knowledge-badge',
	title: 'Knowledge Badge: Barrierefrei lehren',
	shortSummary:
		'Weiterbildungskurs für Hochschullehrende zum Thema digitale Barrierefreiheit (plus optionaler Prüfung).',
	summary:
		'Dieser Lernkurs befasst sich mit der Bedeutung der digitalen Barrierefreiheit in der Hochschulbildung. Er beleuchtet die demografischen Bedürfnisse, die rechtlichen Aspekte der inklusiven Bildung sowie die aktuellen Erfahrungen einiger Studierender mit Behinderungen in Universitätskursen. Er konzentriert sich auch auf praktische Tipps und Techniken, wie man digitale Lehrmaterialien und Plattformen besser barrierefrei gestalten kann.',
	webinar: 'barrierefrei-lehren',
	link: {
		label: 'Zum Knowledge Badge',
		url: 'https://iaap-dach.org/knowledge-badges/barrierefrei-lehren.html'
	},
	additionalLink: {
		label: 'Zum Lernkurs',
		url: 'https://mooc.hdm-stuttgart.de/course/view.php?id=43'
	},
	showInDevelopmentInfo: false,
	partners: ['Hochschule der Medien Stuttgart'],
	info: 'Damit Sie Zugang zu den Inhalten des Kurses erhalten, müssen Sie sich vorab anmelden. Dazu können Sie ein bestehendes Moodle-Konto nutzen oder ein kostenloses Konto anlegen. Nach dem erfolgreichen Login haben Sie Zugriff auf den Kurs.'
};
