import type { Project } from '$lib/interfaces/project.interface';

export const ETHICAL_GUIDELINES: Project = {
	id: 'digitale-barrierefreiheit-und-ethik',
	title: 'Digitale Barrierefreiheit und Ethik ',
	shortSummary:
		'Ethische Leitlinien inkl. Storybook und ethische Lehr- und Lernmaterialien: Kurzvideos, Podcast und Qualifizierungsprogramm.',
	summary:
		'Inklusion ist ein Menschenrecht. Menschen mit individuellen Bedarfen durchleben teils prägende Ausgrenzungserfahrungen und müssen noch immer viele Barrieren überwinden, um überhaupt am öffentlichen Leben teilhaben zu können. Zur Bewältigung dieser Herausforderungen nehmen die Ethik und ein damit verbundener Wertekompass eine wichtige Rolle ein. Auf dieser Seite finden Sie Forschungsergebnisse sowie Lehr- und Lernmaterialien des Instituts für Digitale Ethik zu den ethischen Dimensionen digitaler Barrierefreiheit: Lernen Sie mehr zum Thema mithilfe unserer ethischen Leitlinien, einem Podcast, niedrigschwelligen Kurzvideos und unserem Qualifizierungsprogramm. ',
	showInDevelopmentInfo: false,
	partners: ['Hochschule der Medien Stuttgart'],
	subProjects: [
		{
			title: 'Ethische Leitlinien und Storybook',
			summary:
				'Die ethischen Leitlinien thematisieren die Bedeutung barrierefreier Hochschullehre als Voraussetzung für digitale Teilhabe. Sie unterstützen ein vielschichtiges Verantwortungsbewusstsein, das unter anderem Medienkompetenz, Datenschutz, Datensicherheit und Inklusion adressiert. Die Leitlinien betonen die Förderung individueller Entfaltung und sozialen Zusammenhalts. Eine Version in leichter Sprache steht ebenfalls zur Verfügung. Begleitend zu den ethischen Leitlinien wurde ein Storybook entwickelt, das die Kernthemen der Leitlinien anhand von fiktiven Geschichten veranschaulicht erklärt.',
			link: {
				label: 'Zu den Leitlinien',
				url: 'https://hdms.bsz-bw.de/frontdoor/index/index/docId/7240'
			},
			additionalLink: {
				label: 'Zum Storybook',
				url: 'https://hdms.bsz-bw.de/frontdoor/index/index/docId/7295'
			}
		},
		{
			title: 'Podcast „hürdelos statt würdelos“',
			summary:
				' Barrierefreiheit bedeutet mehr als nur barrierefreie Zugänge im öffentlichen Raum. Auch digitale Angebote – Websites, Apps, E-Learning-Plattformen oder Verwaltungsportale – müssen so gestaltet sein, dass sie für alle Menschen nutzbar sind. Doch was heißt das konkret in der Praxis? Und wie können technische Vorgaben in eine reale Hochschullehre übersetzt werden, ohne dass Barrierefreiheit als Zusatzaufgabe oder Störfaktor wahrgenommen wird? Diesen Fragen widmet sich der Podcast „hürdelos statt würdelos“ in insgesamt sechs Folgen im Gespräch mit den Projektmitarbeitenden von SHUFFLE. ',
			link: {
				label: 'Zum Podcast',
				url: 'https://huerdelos-statt-wuerdelos.podigee.io/'
			}
		},
		{
			title:
				'Kurzvideos „hürdelos statt würdelos“ – Ethische Dimensionen, Tipps & Tricks und Erfahrungswelten',
			summary:
				'Die am Institut für Digitale Ethik der Hochschule der Medien konzipierten und produzierten Kurzvideos „hürdelos statt würdelos - Digitale Barrierefreiheit in der Lehre“ wurden entwickelt, um in der breiten Öffentlichkeit niedrigschwellig über das Thema und damit verbundene ethische Dimensionen zu informieren und aufzuklären, Tipps an die Hand zu geben und Einblicke in die Welt von Betroffenen zu geben. Durch die Veröffentlichung der Videosnippets über Social Media sollen auch neue Zielgruppen erreicht und neuartige sowie innovative Formen der Wissenschaftskommunikation genutzt werden.',
			link: {
				label: 'Zu den Kurzvideos',
				url: 'https://hdm-stuttgart.de/digitale-ethik/lehre/digitale_barrierefreiheit'
			}
		}
		// ,{
		// 	title:
		// 		'Qualifizierungsprogramm „Ethisch gestalten – Vielfalt verstehen, Gerechtigkeit verhandeln, Teilhabe ermöglichen“',
		// 	summary:
		// 		'Das Qualifizierungsprogramm „Ethisch gestalten – Vielfalt verstehen, Gerechtigkeit verhandeln, Teilhabe ermöglichen“ richtet sich an Lehrende, wissenschaftliche Mitarbeitende, Verwaltungspersonal und Entscheidungsträger:innen im Bildungsbereich, insbesondere an Hochschulen. Ziel ist es, ethische Reflexionskompetenz im Kontext von Barrierefreiheit und digitaler Teilhabe zu stärken. Statt technischer Detailkenntnis steht die Entwicklung ethischer Urteilskraft, moralischer Sensibilität und institutioneller Verantwortung im Mittelpunkt. Die Teilnehmenden begegnen ethischen Dilemmata, vertiefen ihre Perspektivenvielfalt und entwickeln ein grundlegendes Verständnis für die moralischen Herausforderungen von Lehre, Gestaltung und Verwaltung in inklusiven Bildungskontexten.',
		// 	link: {
		// 		label: 'Zum Qualifizierungsprogramm',
		// 		url: 'TODO'
		// 	}
		// }
	]
};
