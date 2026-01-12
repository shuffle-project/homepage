import type { Project } from '$lib/interfaces/project.interface';
import {
	BARRIEREFREIHEIT_IN_DER_LEHRE,
	LERNMANAGEMENTSYSTEME_MOODLE_UND_ILIAS
} from './generalPublications.constant';

export const ILIAS_COURSE: Project = {
	id: 'ilias-barrierefrei',
	title: 'ILIAS Barrierefrei',
	shortSummary:
		'Informationen, Beispiele und Ressourcen zum Thema (digitale) Barrierefreiheit in und um ILIAS.',
	summary:
		'Sowohl auf ILIAS selbst, als auch bei der Gestaltung von Lehrmaterialien mit Drittanwendungen (wie z.B. den Office-Programmen Word etc.), können unabsichtlich Barrieren eingebaut werden, die einige Nutzer*innen ausschließen. In diesem Kurs lernen Sie, worauf Sie achten müssen, um solche Barrieren zu vermeiden. Außerdem finden Sie hier Hintergrundinformationen zu Begriffen wie Inklusion und verschiedenen Arten von Beeinträchtigungen sowie weiterführende Links.',

	partners: ['Pädagogische Hochschule Freiburg'],
	webinar: 'digitale-lernraume',
	link: {
		label: 'Zum Lernraum für (digitale) Barrierefreiheit in der Lehre (ILIAS)',
		url: 'https://ilias-extern.ph-freiburg.de/goto.php?target=cat_18205&client_id=phfr-ext'
	},
	publications: [LERNMANAGEMENTSYSTEME_MOODLE_UND_ILIAS, BARRIEREFREIHEIT_IN_DER_LEHRE]
};
