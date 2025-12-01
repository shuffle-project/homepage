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
		apa: `<span class="apa-publication">
            Stormer, C., Kalemba, S., Brunner, G., Hennies, J., Johannfunke, M., Kamin, A.-M.,
            Kersken, V. & Zimmermann, G. (2023). SHUFFLE – Hochschulinitiative digitale
            Barrierefreiheit für Alle: Vorhaben und Visionen. In Voß-Nakkour, S., Rustemeier, L.,
            Möhring, M., Deitmer, A. & HalGrimminger, S. (Hrsg.),
            <em>
                Digitale Barrierefreiheit in der Bildung weiter denken. Innovative Impulse aus
                Praxis, Technik und Didaktik,
            </em>
            (pp. 60-69). Universitätsbibliothek Johann Christian Senckenberg.
            <a href="https://doi.org/10.21248/gups.62773">
                https://doi.org/10.21248/gups.62773
            </a>
        </span>`
	}
];

// Publications that are part of several different projects

export const BARRIEREFREIHEIT_IN_DER_LEHRE: Publication = {
	title: 'Barrierefreiheit in der Lehre – das ist doch viel zu kompliziert, oder?!',
	titleLang: 'de',
	releaseDate: '2025-10',
	contributors: ['Judith Kuhlmann', 'Kim Althoff', 'Hakan Ali Cetin'],
	placeOfPublication: 'Hochschulforum Digitalisierung',
	placeOfPublicationLang: 'de',
	category: 'Sonstige Veröffentlichungen',
	link: {
		label: 'Zum Blogbeitrag',
		url: 'https://hochschulforumdigitalisierung.de/barrierefreiheit-in-der-lehre/'
	},
	apa: `
	<span class="apa-publication">
		Kuhlmann, J., Althoff, K. & Cetin, H. A. (2025, October 13). Barrierefreiheit in der Lehre – das ist doch viel zu kompliziert, oder?!. <em>Hochschulforum Digitalisierung</em>.
		<a href="https://hochschulforumdigitalisierung.de/barrierefreiheit-in-der-lehre/">https://hochschulforumdigitalisierung.de/barrierefreiheit-in-der-lehre/</a>
	</span>
	`
};

export const GESCHICHTEN_DER_ZUGAENGLICHKEIT: Publication = {
	title: 'Geschichten der Zugänglichkeit – Digital barrierefreie Hochschule',
	titleLang: 'de',
	releaseDate: '2024-06',
	contributors: ['Judith Kuhlmann', 'Sarah Bergmann'],
	placeOfPublication: 'University:Future Festival',
	placeOfPublicationLang: 'en',
	category: 'Sonstige Veröffentlichungen',
	link: {
		label: 'Zur Aufnahme (YouTube)',
		url: 'https://www.youtube.com/watch?v=4we2jfmzMXg&list=PLDE3NyZgHoK52iHqxk9CWDqocG2fxEf8Y'
	},
	apa: `
	<span class="apa-publication">
		Kuhlmann, J. & Bergmann, S. (2024). <em>Geschichten der Zugänglichkeit – Digital barrierefreie Hochschule</em> [Input]. <span lang="en">University:Future Festival, digital stage</span>.
		<a href="https://www.youtube.com/watch?v=4we2jfmzMXg&list=PLDE3NyZgHoK52iHqxk9CWDqocG2fxEf8Y">https://www.youtube.com/watch?v=4we2jfmzMXg&list=PLDE3NyZgHoK52iHqxk9CWDqocG2fxEf8Y</a>
	</span>
	`
};

export const LERNMANAGEMENTSYSTEME_MOODLE_UND_ILIAS: Publication = {
	title: 'Lernmanagementsysteme Moodle und Ilias barrierefrei gestalten',
	titleLang: 'de',
	releaseDate: '2024-11',
	contributors: ['Judith Kuhlmann', 'Kim Althoff', 'Hakan Ali Cetin'],
	placeOfPublication: 'Turn Conference',
	placeOfPublicationLang: 'en',
	category: 'Sonstige Veröffentlichungen',
	link: {
		label: 'Folien herunterladen (PDF)',
		url: 'downloads/Lernmanagementsysteme_TURN24.pdf',
		download: true
	},
	apa: `
		<span class="apa-publication">
			Kuhlmann, J., Althoff, K. & Cetin, H. A. (2024). <em>Lernmanagementsysteme Moodle und Ilias barrierefrei gestalten</em> <span lang="en">[Short Presentation]. Turn Conference, Berlin, Germany</span>.
			<a href="https://shuffle-projekt.de/downloads/Lernmanagementsysteme_TURN24.pdf">https://shuffle-projekt.de/downloads/Lernmanagementsysteme_TURN24.pdf</a>
		</span>
	`
};

export const POSTER_SELBSTLERNKURSE: Publication = {
	title: 'Selbstlernkurse - Digitale Barrierefreiheit in der Lehre kompetent umsetzen',
	titleLang: 'de',
	releaseDate: '2025',
	contributors: ['Judith Kuhlmann', 'Kim Althoff', 'Dustin Matzel', 'Prof. Dr. Anna-Maria Kamin', 'Michael Johannfunke'],
	placeOfPublication: 'Bi.teach Uni Bielefeld',
	placeOfPublicationLang: 'de',
	category: 'Posterpräsentationen',
	link: {
		label: 'Poster herunterladen (PDF)',
		url: 'downloads/BiTeach_Poster_Selbstlernkurse.pdf',
		download: true
	},
	apa: `
		<span class="apa-publication">
			Kuhlmann, J., Althoff, K., Matzel, D., Kamin, A.-M. & Johannfunke, M. (2025). <em>Selbstlernkurse - Digitale Barrierefreiheit in der Lehre kompetent umsetzen.</em> Bi.teach Uni Bielefeld.
			<a href="https://shuffle-projekt.de/downloads/BiTeach_Poster_Selbstlernkurse.pdf">https://shuffle-projekt.de/downloads/BiTeach_Poster_Selbstlernkurse.pdf</a>
		</span>
	`
};
