import type { Project } from '$lib/interfaces/project.interface';

export const MELVIN: Project = {
	id: 'melvin',
	title: 'Melvin',
	category: 'Barrierefreie Videos',
	shortSummary:
		'Erstelle schnell und einfach Videos mit Untertiteln und teile sie in einem barrierefreien Video-Player.',
	targetGroup: ['Für Lehrende'],
	link: {
		url: 'https://melvin.shuffle-projekt.de',
		label: 'Zu Melvin'
	},
	summary:
		'Barrierefreie Videos sind wichtig, jedoch oft mit einem enormen Aufwand, notwendigem Know-How und dem Einsatz unterschiedlicher Tools verbunden. Melvin bietet hierfür eine schnellere und bequemere Lösung an. Innerhalb einer Webanwendung können Sie ihre Videos aufnehmen, automatisch untertiteln lassen und durch einen barrierefreien Player das fertige Video mitsamt Transkript teilen. Die Untertitel können Sie zudem alleine oder im Team verbessern, im Nachhinein oder während eines Livestreams.',
	partners: ['Hochschule der Medien Stuttgart', 'Pädagogische Hochschule Heidelberg'],
	joinEvaluation: {
		title: 'Melvin ausprobieren',
		introduction:
			'Melvin befindet sich aktuell noch in der Entwicklung. Falls Sie trotzdem schon mal die aktuelle Version ausprobieren möchten, können Sie sich gerne bei der folgenden Kontaktperson melden.',
		contactName: 'Korbinian Kuhn',
		contact: {
			short: 'kuhnko',
			domain: 'hdm-stuttgart.de'
		}
	},
	publications: [
		{
			title:
				'Evaluating Collaborative Editing of AI-Generated Live Subtitles by Non-Professionals in German University Lectures',
			titleLang: 'en',
			releaseDate: '2022-07',
			contributors: [
				'Patricia Piskorek',
				'Nadine Sienel',
				'Korbinian Kuhn',
				'Verena Kersken',
				'Gottfried Zimmermann'
			],
			placeOfPublication:
				'Joint International Conference on Digital Inclusion, Assistive Technology & Accessibility (ICCHP / AAATE)',
			placeOfPublicationLang: 'en',
			link: {
				url: 'https://aaate.net/wp-content/uploads/sites/12/2023/08/OAC22_V1.0_Part_1.pdf#page=165',
				label: 'Zum Paper (PDF)'
			},
			category: 'Paper / Buchbeiträge',
			apa: `	<span>
				Piskorek, P., Sienel, N., Kuhn, K., Kersken, V., & Zimmermann, G. (2022).
				<span lang="en">
					Evaluating collaborative editing of ai-generated live subtitles by non-professionals
					in German university lectures. In A. Petz & E.-J. Hoogerwerf (edt.),
				</span>
				<em lang="en">
					ICCHP-AAATE 2022 Open Access Compendium "Assistive Technology, Accessibility and
					(e)Inclusion" Part I
				</em>
				(S.165-175).
				<a href="https://doi.org/10.35011/icchp-aaate22-p1-22"
					>https://doi.org/10.35011/icchp-aaate22-p1-22</a
				>
			</span>`
		},
		{
			title: 'Accuracy of AI-generated Captions With Collaborative Manual Corrections in Real-Time',
			titleLang: 'en',
			releaseDate: '2023-04',
			contributors: ['Korbinian Kuhn', 'Verena Kersken', 'Gottfried Zimmermann'],
			placeOfPublication: 'ACM CHI Conference on Human Factors in Computing Systems',
			placeOfPublicationLang: 'en',
			link: {
				url: 'https://dl.acm.org/doi/10.1145/3544549.3585724?cid=99660781441',
				label: 'Zum Paper',
				allowReferrer: true
			},
			category: 'Paper / Buchbeiträge',
			apa: `	<span>
			Kuhn, K., Kersken, V., & Zimmermann, G. (2023).
				<span lang="en">
					Accuracy of AI-generated Captions With Collaborative Manual Corrections in
					Real-Time.</span
				>
				<em lang="en">
					Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing Systems,
				</em>
				1-7.
				<a href="https://doi.org/10.1145/3544549.3585724"
					>https://doi.org/10.1145/3544549.3585724</a
				>
			</span>`
		},
		{
			title: 'Measuring the Accuracy of Automatic Speech Recognition Solutions',
			titleLang: 'en',
			releaseDate: '2024-01',
			contributors: [
				'Korbinian Kuhn',
				'Verena Kersken',
				'Benedikt Reuter',
				'Niklas Egger',
				'Gottfried Zimmermann'
			],
			placeOfPublication: 'ACM Transactions on Accessible Computing, Volume 16, Issue 4',
			placeOfPublicationLang: 'en',
			link: {
				url: 'https://dl.acm.org/doi/10.1145/3636513',
				label: 'Zum Paper'
			},
			category: 'Paper / Buchbeiträge',
			apa: `	<span>
							Kuhn, K., Kersken, V., Reuter, B., Egger, N., & Zimmermann, G. (2024). 
							<span lang="en"
								>Measuring the Accuracy of Automatic Speech Recognition Solutions.</span
							>
							<em lang="en">ACM Transactions on Accessible Computing, Volume 16, Issue 4,</em>
							1-23.
							<a href="https://doi.org/10.1145/3636513">https://doi.org/10.1145/3636513</a>
					</span>`
		},
		{
			title: 'Melvin – Multi-user editor for live subtitles',
			titleLang: 'en',
			releaseDate: '2022-07',
			contributors: ['Benedikt Reuter', 'Korbinian Kuhn', 'Niklas Egger', 'Gottfried Zimmermann'],
			placeOfPublication:
				'Joint International Conference on Digital Inclusion, Assistive Technology & Accessibility (ICCHP / AAATE)',
			placeOfPublicationLang: 'en',
			link: {
				label: 'Zum Poster Abstract',
				url: 'https://www.icchp-aaate.org/content/melvin-%E2%80%93-multi-user-editor-live-subtitles'
			},
			category: 'Posterpräsentationen',
			apa: `<span>
				Reuter, B., Kuhn, K., Egger, N., & Zimmermann, G. (2022).
				<em lang="en"> Melvin – Multi-user editor for live subtitles </em>
				<span lang="en">
					[Poster]. Joint International Conference on Digital Inclusion, Assistive Technology
					& Accessibility (ICCHP / AAATE),
				</span>
				Lecco, Italien.
				<a
					href="https://www.icchp-aaate.org/content/melvin-%E2%80%93-multi-user-editor-live-subtitles"
				>
					https://www.icchp-aaate.org/content/melvin-%E2%80%93-multi-user-editor-live-subtitles</a
				>
			</span>`
		}
	]
};
