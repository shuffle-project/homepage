import type { Project } from '$lib/interfaces/project.interface';

export const BLINDDATE: Project = {
	id: 'blinddate',
	title: 'BlindDate',
	shortSummary:
		'Virtuelle Studierende mit Beeinträchtigungen geben einen Einblick in ihren Studien&shy;alltag.',
	summary:
		'"BlindDate" ist eine digitale Plattform, die Lehrenden eine Begegnung mit virtuellen Studierende mit individuellen Bedarfen ermöglicht. Diese "Personas" zeigen typische Barrieren in ihrem Studienalltag, sowie Strategien zur Bewältigung derselben, auf und steigern so das Bewusstsein der Benutzenden. Konkrete Handlungsempfehlungen helfen Ihnen, Barrieren in der eigenen Lehre abzubauen.',
	webinar: 'blinddate',
	link: {
		label: 'Zu BlindDate',
		url: 'https://barrierefreies-blinddate.de/'
	},
	partners: ['Hochschule der Medien Stuttgart', 'Pädagogische Hochschule Heidelberg'],
	joinEvaluation: {
		title: 'Feedback geben',
		introduction:
			'Die Webseite befindet sich aktuell noch in der Entwicklung. Wir freuen uns über Feedback und Rückmeldungen zu den Inhalten oder möglichen technischen Barrieren. Durch die Umfragen auf der BlindDate-Startseite oder über die folgende Email-Adresse.',
		contactName: 'dem BlindDate-Team',
		contact: {
			short: 'kontakt',
			domain: 'barrierefreies-blinddate.de'
		}
	},
	publications: [
		{
			title: 'Using Design Thinking Methods in Developing a Digital Accessibility Resource Website',
			titleLang: 'en',
			releaseDate: '2022-07',
			contributors: [
				'Kathy-Ann Heitmeier',
				'Ann-Katrin Böhm',
				'Verena Kersken',
				'Patricia Piskorek',
				'Niklas Egger',
				'Markus Lang',
				'Gottfried Zimmermann'
			],
			placeOfPublication:
				'Joint International Conference on Digital Inclusion, Assistive Technology & Accessibility (ICCHP / AAATE)',
			placeOfPublicationLang: 'en',
			link: {
				label: 'Zum Poster Abstract',
				url: 'https://www.icchp-aaate.org/content/using-design-thinking-methods-developing-digital-accessibility-learning-resource'
			},
			category: 'Posterpräsentationen',
			apa: `<span class="apa-publication">
				Heitmeier, K., Böhm, A., Kersken, V., Piskorek, P., Egger, N., Lang, M., & Zimmermann,
				G. (2022).
				<em lang="en">
					Using Design Thinking Methods in Developing a Digital Accessibility Resource Website
				</em>
				<span lang="en">
					[Poster]. Joint International Conference on Digital Inclusion, Assistive Technology
					& Accessibility (ICCHP / AAATE),
				</span>
				Lecco, <span lang="en">Italy</span>.
				<a
					href="https://www.icchp-aaate.org/content/using-design-thinking-methods-developing-digital-accessibility-learning-resource"
					>https://www.icchp-aaate.org/content/using-design-thinking-methods-developing-digital-accessibility-learning-resource</a
				>
			</span>`
		},
		{
			title: 'Persona Co-design for Improving Digital Accessibility',
			titleLang: 'en',
			releaseDate: '2023-04',
			contributors: [
				'Kathy-Ann Heitmeier',
				'Verena Kersken',
				'Patricia Piskorek',
				'Niklas Egger',
				'Ann-Katrin Böhm',
				'Markus Lang',
				'Gottfried Zimmermann'
			],
			placeOfPublication: 'ACM CHI Conference on Human Factors in Computing Systems',
			placeOfPublicationLang: 'en',
			link: {
				label: 'Zum Paper',
				url: 'https://dl.acm.org/doi/10.1145/3544549.3585857?cid=99660778490',
				allowReferrer: true
			},
			category: 'Paper / Buchbeiträge',
			apa: `<span class="apa-publication">
				Heitmeier, K.-A., Kersken, V., Piskorek, P., Böhm, A.-K., Egger, N., Lang, M., &
				Zimmermann, G. (2023).
				<span lang="en">Persona Co-Design for Improving Digital Accessibility.</span>
				<em lang="en"
					>Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing
					Systems,</em
				>
				1-7
				<a href="https://doi.org/10.1145/3544549.3585857"
					>https://doi.org/10.1145/3544549.3585857</a
				>
			</span>`
		},
		{
			title: 'Re-Conceptualizing Disability Simulations: a guided strategies-based approach',
			titleLang: 'en',
			releaseDate: '2023-08',
			contributors: [
				'Patricia Piskorek',
				'Kathy-Ann Heitmeier',
				'Verena Kersken',
				'Gottfried Zimmermann'
			],
			placeOfPublication:
				'Association for the Advancement of Assistive Technology in Europe (AAATE)',
			placeOfPublicationLang: 'en',
			link: {
				label: 'Zum Paper (PDF)',
				url: 'https://aaate2023.eu/wp-content/uploads/sites/26/2023/08/BookOfAbstracts-Prelim.pdf#page=277'
			},
			category: 'Paper / Buchbeiträge',
			apa: `<span class="apa-publication">
				Piskorek, P., Heitmeier, K.-A., Kersken, V., & Zimmermann, G. (2023).
				<span lang="en">
					Re-Conceptualizing Disability Simulations: A guided strategies-based approach. In G.
					Kouroupetroglou & D. Archambault (Eds.),
				</span>
				<em lang="en">
					Book of Abstracts. 17th International Conference of the Association for the
					Advancement of Assistive Technology in Europe, AAATE 2023
				</em>
				(pp. 265-267).
				<a
					href="https://aaate2023.eu/wp-content/uploads/sites/26/2023/08/BookOfAbstracts-Prelim.pdf"
					>https://aaate2023.eu/wp-content/uploads/sites/26/2023/08/BookOfAbstracts-Prelim.pdf</a
				>
			</span>`
		},
		{
			title:
				'Ein Schlüssel zu mehr Barrierefreiheit - Sensibilisierung von Lehrenden gegenüber Menschen mit Blindheit und Sehbeeinträchtigungen: Ergebnisse und Handlungsansätze aus einem Forschungsprojekt',
			titleLang: 'de',
			releaseDate: '2024-12',
			contributors: [
				'Markus Lang',
				'Ann-Katrin Böhm',
				'Niklas Egger',
				'Patricia Piskorek',
				'Gottfried Zimmermann',
				'Johannes Hennies',
				'Anja Gutjahr',
				'Frank Laemers',
				'Barbara Bogner',
				'Verena Kersken',
				'Kathy-Ann Heitmeier'
			],
			placeOfPublication:
				'Kongress des Verband für Blinden- und Sehbehindertenpädagogik e. V. (VBS)',
			placeOfPublicationLang: 'de',
			link: {
				label: 'Zum Sammelband',
				url: 'https://www.vbs.eu/de/publikationen/kongressbericht-xxxvii/'
			},
			category: 'Paper / Buchbeiträge',
			apa: `<span class="apa-publication">
				Lang, M., Böhm, A. K., Egger, N., Piskorek, P., Zimmermann, G., Hennies, J., Gutjahr, A., Laemers, F., Bogner, B., Kersken, V. & Heitmeier, K. A. (2024). 
				<span>
					Ein Schlüssel zu mehr Barrierefreiheit - Sensibilisierung von Lehrenden gegenüber
					Menschen mit Blindheit und Sehbeeinträchtigungen: Ergebnisse und Handlungsansätze
					aus einem Forschungsprojekt,
				</span>
				<em> Verband für Blinden- und Sehbehindertenpädagogik e.V. (Hrsg.): Leben. Bildung. Partizipation (individuell - spezifisch - flexibel). Kongressbericht. XXXVII. Kongress für Blinden- und Sehbehindertenpädagogik. Band II </em><span>(S.102-110). Würzburg: Edition Bentheim.</span>
				<a
					download
					href="https://www.vbs.eu/de/publikationen/kongressbericht-xxxvii/"
					>https://www.vbs.eu/de/publikationen/kongressbericht-xxxvii/</a
				>
			</span>`
		},
		{
			title:
				'Conceptualization and Evaluation of Guidelines for Effective Disability Simulations in the Context of a Digital Information Platform',
			titleLang: 'en',
			releaseDate: '2024-08',
			contributors: ['Patricia Piskorek', 'Gottfried Zimmermann', 'Sabiha Ghellal'],
			placeOfPublication: 'Masterarbeit an der Hochschule der Medien Stuttgart',
			placeOfPublicationLang: 'de',
			link: {
				label: 'Masterarbeit herunterladen (PDF)',
				download: true,
				url: 'downloads/MA_Patricia-Piskorek_Disability-Simulations.pdf'
			},
			category: 'Abschlussarbeiten',
			apa: `<span class="apa-publication">
			Piskorek, P., Zimmermann, G. & Ghellal S. (2024).
			<em lang="en">
			Conceptualization and Evaluation of Guidelines for Effective Disability Simulations in the Context of a Digital Information Platform 
			</em>
			<span lang="en">(Master's thesis, <span lang="de">Hochschule der Medien Stuttgart</span>)</span>.
			<a download href="https://shuffle-projekt.de/downloads/MA_Patricia-Piskorek_Disability-Simulations.pdf">	https://shuffle-projekt.de/downloads/MA_Patricia-Piskorek_Disability-Simulations.pdf</a>
			</span>`
		},
		{
			title: 'Ein BlindDate mit virtuellen Studierenden im digitalen Lern- und Begegnungsraum',
			titleLang: 'de',
			releaseDate: '2024-11',
			contributors: ['Ann-Katrin Böhm', 'Patricia Piskorek', 'Niklas Egger'],
			placeOfPublication: 'Turn Conference',
			placeOfPublicationLang: 'en',
			link: {
				label: 'Folien herunterladen (PowerPoint)',
				url: 'downloads/BlindDate_Turn24.pptx',
				download: true
			},
			category: 'Sonstige Veröffentlichungen',
			apa: `
			<span class="apa-publication">
				Böhm, A., Piskorek, P. & Egger, N. (2024).
				<em>Ein BlindDate mit virtuellen Studierenden im digitalen Lern- und Begegnungsraum</em>
				<span lang="en">[Short Presentation]. Turn Conference, Berlin, Germany</span>.
				<a href="https://shuffle-projekt.de/downloads/BlindDate_Turn24.pptx">https://shuffle-projekt.de/downloads/BlindDate_Turn24.pptx</a>
			</span>
			`
		}
	]
};
