import type { Project } from '$lib/interfaces/project.interface';

export const IAAP_TOOLKITS: Project = {
	id: 'iaap-toolkits',
	title: 'IAAP-Toolkits',
	shortSummary:
		// 'Diese Ressourcen wurden mit IAAP-DACH entwickelt, um Barrierefreiheits-Zertifizierungsinfos bereitzustellen.',
		'Leitfaden zur Zertifizierung im Bereich Barrierefreiheit in Kooperation mit IAAP-DACH.',
	summary:
		'IAAP D-A-CH ist die deutschsprachige Vertretung der IAAP <span lang="en">(International Association of Accessibility Professionals)</span> und umfasst Mitglieder in Deutschland, Österreich und der Schweiz. Als Berufsverband ermöglicht er Experten im Bereich der Barrierefreiheit, sich zu vernetzen, weiterzubilden und zu zertifizieren. IAAP D-A-CH definiert fachliche Kernkompetenzen im Bereich der digitalen Barrierefreiheit, bietet Zertifizierungsverfahren an, fördert das Bewusstsein für die barrierefreie Gestaltung digitaler Produkte und Dienstleistungen und ermöglicht den Informations- und Wissensaustausch im deutschsprachigen Raum.',
	showInDevelopmentInfo: false,
	partners: ['Hochschule der Medien Stuttgart'],
	subProjects: [
		{
			title: 'CPACC-Toolkit',
			summary:
				'Dieses Toolkit enthält Informationen über die CPACC-Zertifizierung <span lang="en">(Certified Professional in Accessibility Core Competencies)</span>, die eine einjährige Erfahrung im Bereich der Barrierefreiheit oder eine neue/veränderte Rolle mit einer gewissen Verantwortung für Barrierefreiheit voraussetzt.  Es enthält einen Lehrplan für die Studienvorbereitung und Informationen über die Anmeldung und die Prüfungen. für Kandidaten aus der DACH-Region.',
			link: {
				label: 'Zum CPACC-Toolkit',
				url: 'https://iaap-dach.org/CPACC.html'
			}
		},
		{
			title: 'WAS-Toolkit',
			summary:
				'Dieses Toolkit enthält Informationen über die Zertifizierung zum <span lang="en">Web Accessibility Specialist (WAS)</span>. Das WAS-Zertifikat bestätigt technische Fertigkeiten für Personen mit mindestens mittlerer Erfahrung in der Konzeption, Entwicklung, Implementierung, Bewertung und Bereitstellung barrierefreier webbasierter Inhalte, Projekte und Dienstleistungen.  Es enthält einen Lehrplan für die Studienvorbereitung und Informationen über die Anmeldung und die Prüfungen. für Kandidaten aus der DACH-Region.',
			link: {
				label: 'Zum WAS-Toolkit',
				url: 'https://iaap-dach.org/zertifizierungen/was.html'
			}
		},
		{
			title:
				'Toolkit zur lokalen Organisation von IAAP-Prüfungen <span lang="en">(Hosted Exam Events)</span>',
			summary:
				'IAAP-Zertifikatsprüfungen werden zentral von IAAP Global koordiniert. Als Organisation (zum Beispiel Bildungseinrichtung oder Firma) kann man <span lang="en">"Proctor"</span> dafür sein. Das heißt, man stellt einen Raum, die Infrastruktur und eine Aufsicht (<span lang="en">"Proctoring"</span>) für eine geschlossene oder offene Gruppe von Prüfungskandidatinnen und -kandidaten zur Verfügung, in Absprache mit IAAP Global.',
			link: {
				label: 'Zum Organisations-Toolkit',
				url: 'https://iaap-dach.org/zertifizierungen/pruefungsmoeglichkeiten-fuer-iaap-zertifizierungen.html'
			}
		}
	],
	info: 'Das Toolkit umfasst (i) den Lehrplan und (ii) die Unterlagen zur Prüfungsanmeldung, die am Ende der verlinkten Seite heruntergeladen werden können.'
};
