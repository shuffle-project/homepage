import type { Project } from '$lib/interfaces/project.interface';

export const IAAP_TOOLKITS: Project = {
	id: 'iaap-toolkits',
	title: 'IAAP-Toolkits',
	category: 'Toolbox',
	shortSummary:
		'Diese Ressourcen wurden mit IAAP-DACH entwickelt, um Barrierefreiheits-Zertifizierungsinfos bereitzustellen.',
	targetGroup: ['Für Lehrende', 'Für die Hochschulleitung'],
	summary:
		'IAAP D-A-CH ist die deutschsprachige Vertretung der IAAP (International Association of Accessibility Professionals) und umfasst Mitglieder in Deutschland, Österreich und der Schweiz. Als Berufsverband ermöglicht er Experten im Bereich der Barrierefreiheit, sich zu vernetzen, weiterzubilden und zu zertifizieren. IAAP D-A-CH definiert fachliche Kernkompetenzen im Bereich der digitalen Barrierefreiheit, bietet Zertifizierungsverfahren an, fördert das Bewusstsein für die barrierefreie Gestaltung digitaler Produkte und Dienstleistungen und ermöglicht den Informations- und Wissensaustausch im deutschsprachigen Raum.',
	showInDevelopmentInfo: false,
	partners: ['Hochschule der Medien Stuttgart'],
	subProjects: [
		{
			title: 'CPACC-Toolkit',
			summary:
				'Dieses Toolkit enthält Informationen über die CPACC-Zertifizierung (Certified Professional in Accessibility Core Competencies), die eine einjährige Erfahrung im Bereich der Barrierefreiheit oder eine neue/veränderte Rolle mit einer gewissen Verantwortung für Barrierefreiheit voraussetzt.  Es enthält einen Lehrplan für die Studienvorbereitung und Informationen über die Anmeldung und die Prüfungen. für Kandidaten aus der DACH-Region.',
			link: {
				label: 'Zum CPACC-Toolkit',
				url: 'https://iaap-dach.org/CPACC.html'
			}
		},
		{
			title: 'WAS-Toolkit',
			summary:
				'Dieses Toolkit enthält Informationen über die Zertifizierung zum Web Accessibility Specialist (WAS). Das WAS-Zertifikat bestätigt technische Fertigkeiten für Personen mit mindestens mittlerer Erfahrung in der Konzeption, Entwicklung, Implementierung, Bewertung und Bereitstellung barrierefreier webbasierter Inhalte, Projekte und Dienstleistungen.  Es enthält einen Lehrplan für die Studienvorbereitung und Informationen über die Anmeldung und die Prüfungen. für Kandidaten aus der DACH-Region.',
			link: {
				label: 'Zum WAS-Toolkit',
				url: 'https://iaap-dach.org/zertifizierungen/was.html'
			}
		}
	],
	info: 'Das Toolkit umfasst (i) den Lehrplan und (ii) die Unterlagen zur Prüfungsanmeldung, die am Ende der verlinkten Seite heruntergeladen werden können.',
	joinEvaluation: {
		title: 'Feedback geben',
		introduction:
			'Wir würden uns sehr über Ihr Feedback zu unseren Toolkits freuen! Ihre Meinung ist uns wichtig, damit wir unsere Kurse kontinuierlich verbessern können. Vielen Dank im Voraus!',
		contactName: 'Gottfried Zimmermann',
		contactEmail: 'zimmermanng@hdm-stuttgart.de'
	}
};
