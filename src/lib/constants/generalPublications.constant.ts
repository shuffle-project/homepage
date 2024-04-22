import type { Publication } from '$lib/interfaces/project.interface';

export const GENERAL_PUBLICATIONS: Publication[] = [
	{
		title:
			'SHUFFLE – Hochschulinitiative digitale Barrierefreiheit für Alle: Vorhaben und Visionen',
		titleLang: 'de',
		releaseDate: '2023-03',
		contributors: [
			'Christin Stormer',
			'Samira Kalemba',
			'Georg Brunner',
			'Johannes Hennies',
			'Michael Johannfunke',
			'Anna-Maria Kamin',
			'Verena Kersken',
			'Gottfried Zimmermann'
		],
		placeOfPublication:
			'Sammelbandartikel in Digitale Barrierefreiheit in der Bildung weiter denken. Innovative Impulse aus Praxis, Technik und Didaktik',
		placeOfPublicationLang: 'de',
		link: {
			label: 'Zum Sammelband',
			url: 'https://doi.org/10.21248/gups.62773'
		},
		category: 'Paper / Buchbeiträge',
		apa: `<span>
            Stormer, C., Kalemba, S., Brunner, G., Hennies, J., Johannfunke, M., Kamin, A.-M.,
            Kersken, V. & Zimmermann, G. (2023). SHUFFLE – Hochschulinitiative digitale
            Barrierefreiheit für Alle: Vorhaben und Visionen. In Voß-Nakkour, S., Rustemeier, L.,
            Möhring, M., Deitmer, A. & HalGrimminger, S. (Hrsg.),
            <em>
                Digitale Barrierefreiheit in der Bildung weiter denken. Innovative Impulse aus
                Praxis, Technik und Didaktik,
            </em>
            (S. 60-69). Universitätsbibliothek Johann Christian Senckenberg.
            <a href="https://doi.org/10.21248/gups.62773">
                https://doi.org/10.21248/gups.62773
            </a>
        </span>`
	}
];
