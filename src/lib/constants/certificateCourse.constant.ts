import type { Project } from '$lib/interfaces/project.interface';

export const CERTIFICATE_COURSE: Project = {
	id: 'certificate-course',
	title: 'Zertifikat: Barrierefrei lehren',
	category: 'Moodle-Kurs',
	shortSummary:
		'Dieser Kurs bietet Informationen und praktische Ressourcen zur Verbesserung der digitalen Zugänglichkeit in der Hochschulbildung.',
	targetGroup: ['Für Lehrende'],
	summary:
		'Dieser Zertifikatskurs befasst sich mit der Bedeutung der digitalen Barrierefreiheit in der Hochschulbildung. Er beleuchtet die demografischen Bedürfnisse, die rechtlichen Aspekte der inklusiven Bildung sowie die aktuellen Erfahrungen einiger Studierender mit Behinderungen in Universitätskursen. Er konzentriert sich auch auf praktische Tipps und Techniken, wie man digitale Lehrmaterialien und Plattformen besser barrierefrei gestalten kann. Zertifikat „Barrierefrei lehren“',
	// link: {
	// 	label: 'Zum Zertifikat: Barrierefrei lehren',
	// 	url: 'https://mooc.hdm-stuttgart.de/course/view.php?id=43'
	// },
	showInDevelopmentInfo: true,
	partners: ['Hochschule der Medien Stuttgart'],
	// info: 'Damit Sie Zugang zu den Inhalten des Kurses erhalten, müssen Sie sich vorab anmelden. Dazu können Sie ein bestehendes Moodle-Konto nutzen oder ein kostenloses Konto anlegen. Nach dem erfolgreichen Login haben Sie Zugriff auf den Kurs.',
	joinEvaluation: {
		title: 'Feedback geben',
		introduction:
			'Wir würden uns freuen, Ihr Feedback zu unserem Online-Kurs zu erhalten! Ihre Meinung ist uns wichtig, um unsere Kurse kontinuierlich zu verbessern. Vielen Dank im Voraus!',
		contactEmail: 'heitmeier@hdm-stuttgart.de',
		contactName: 'Kathy-Ann Heitmeier'
	}
};
