<script lang="ts">
	import { resolve } from '$app/paths';
	import { ALL_PROJECTS } from '$lib/constants/allProjects.constant';
	import TitleSection from '../../../lib/components/TitleSection.svelte';

	const everyProjectSortedByName = ALL_PROJECTS.toSorted((a, b) => {
		return a.title < b.title ? -1 : 1;
	});
</script>

<svelte:head>
	<title>Sitemap - SHUFFLE</title>
</svelte:head>

<TitleSection>
	{#snippet title()}
		Sitemap
	{/snippet}

	{#snippet introText()}
		Diese Sitemap listet alle Seiten auf.
	{/snippet}
</TitleSection>

<div class="page-content headings-with-padding">
	<h2>Alle Seiten (alphabetisch)</h2>
	<ul>
		<li>
			<a href={resolve('/aktuelles')}>Aktuelles</a>
		</li>
		<li>
			<a href={resolve('/datenschutz')}>Datenschutz</a>
		</li>
		<li>
			<a href={resolve('/datenschutz-in-einfacher-sprache')}>Datenschutz in einfacher Sprache</a>
		</li>
		<li>
			<a href={resolve('/barrierefreiheit')}>Erklärung zur Barrierefreiheit</a>
		</li>
		<li>
			<a href={resolve('/dgs')}>Gebärdensprache (DGS)</a>
		</li>
		<li>
			<a href={resolve('/impressum')}>Impressum</a>
		</li>
		<li>
			<a href={resolve('/kontakt')}>Kontakt</a>
		</li>
		<li>
			<a href={resolve('/leichte-sprache')}>Leichte Sprache</a>
		</li>
		<li>
			<a href={resolve('/')}>Startseite</a>
		</li>
		<li>
			<a href={resolve('/team')}>Team</a>
		</li>
		<li>
			<a href={resolve('/webinaraufnahmen')}>Webinaraufnahmen</a>
		</li>
	</ul>

	<h2>Alle Projekte (alphabetisch)</h2>
	<ul>
		{#each everyProjectSortedByName as project, i}
			<li>
				<a href={resolve(`/${project.id}`)}>{project.title}</a>
			</li>
		{/each}
	</ul>

	<h2>Alle News (Neueste zuerst)</h2>
	<ul>
		<li>
			<a href={resolve('/aktuelles/die-neue-melvin-version-ist-da')}>
				Die neue Melvin-Version ist da!
			</a>
		</li>

		<li>
			<a href={resolve('/aktuelles/neue-horizonte')}
				>Neue Horizonte: SHUFFLE auf der TURN Conference in Berlin</a
			>
		</li>

		<li>
			<a href={resolve('/aktuelles/herbsttreffen-in-bielefeld')}>Herbsttreffen in Bielefeld</a>
		</li>
		<li>
			<a href={resolve('/aktuelles/barrierenzaehmen-leicht-gemacht')}
				>Barrierenzähmen leicht gemacht!</a
			>
		</li>
		<li>
			<a href={resolve('/aktuelles/webinar-serie-zu-shuffle-projektergebnissen')}
				>Webinar-Serie zu SHUFFLE-Projektergebnissen</a
			>
		</li>
		<li>
			<a href={resolve('/aktuelles/durchgeshufflet-in-freiburg')}>DurchgeSHUFFLEt in Freiburg</a>
		</li>
		<li>
			<a href={resolve('/aktuelles/wir-wurden-verlaengert')}>Wir wurden verlängert!</a>
		</li>
		<li>
			<a href={resolve('/aktuelles/shuffle-projekttreffen-in-heidelberg')}
				>SHUFFLE-Projekttreffen in Heidelberg</a
			>
		</li>
		<li>
			<a href={resolve('/aktuelles/konferenzbeitraege-bei-der-geneme-2023')}
				>Konferenzbeiträge bei der GeNeMe 2023</a
			>
		</li>
		<li>
			<a href={resolve('/aktuelles/zwei-tage-lernen-gruebeln-und-vernetzen-auf-der-summer-school')}
				>Zwei Tage lernen, grübeln und vernetzen auf der Summer School</a
			>
		</li>
		<li>
			<a href={resolve('/aktuelles/kennst-du-eigentlich-gabriel')}>Kennst Du eigentlich Gabriel?</a>
		</li>
		<li>
			<a href={resolve('/aktuelles/chi2023')}>CHI2023</a>
		</li>
		<li>
			<a href={resolve('/aktuelles/accessibility-day-in-stuttgart')}
				>Accessibility Day in Stuttgart</a
			>
		</li>
		<li>
			<a href={resolve('/aktuelles/fruehlingstreffen-in-bielefeld')}
				>Frühlingstreffen in Bielefeld</a
			>
		</li>
		<li>
			<a
				href={resolve(
					'/aktuelles/die-zukunft-barrierefrei-shuffle-mit-zwei-beitraegen-beim-university-future-festival-2023'
				)}
				>Die Zukunft barrierefrei! – SHUFFLE mit zwei Beiträgen beim University Future Festival 2023</a
			>
		</li>
		<li>
			<a href={resolve('/aktuelles/shuffle-unterwegs')}>SHUFFLE unterwegs</a>
		</li>
		<li>
			<a href={resolve('/aktuelles/shuffle-beim-bi-teach-tag-der-lehre')}
				>SHUFFLE beim Bi.teach – Tag der Lehre</a
			>
		</li>
		<li>
			<a href={resolve('/aktuelles/shuffle-mitglieder-haben-pruefungen-erfolgreich-bestanden')}
				>SHUFFLE-Mitglieder haben Prüfungen erfolgreich bestanden</a
			>
		</li>
		<li>
			<a href={resolve('/aktuelles/shuffle-auf-der-icchp-aaate')}>SHUFFLE auf der ICCHP-AAATE</a>
		</li>
		<li>
			<a href={resolve('/aktuelles/preisverleihung-zum-studierendenwettbewerb-acceess')}
				>Preisverleihung zum Studierendenwettbewerb ACCEESS</a
			>
		</li>
		<li>
			<a href={resolve('/aktuelles/posterpraesentation-vor-medienpaedagogischem-fachpublikum')}
				>Posterpräsentation vor medienpädagogischem Fachpublikum</a
			>
		</li>
		<li>
			<a
				href={resolve(
					'/aktuelles/shuffle-bei-der-tagung-digitale-barrierefreiheit-weiter-denken-am-freitag-16-09-2022'
				)}>SHUFFLE bei der Tagung “Digitale Barrierefreiheit weiter denken” am Freitag 16.09.2022</a
			>
		</li>
		<li>
			<a href={resolve('/aktuelles/danke-an-die-expertinnen-aus-beratung-und-strategieentwicklung')}
				>Danke an die Expert*innen aus Beratung und Strategieentwicklung!</a
			>
		</li>
		<li>
			<a
				href={resolve('/aktuelles/ein-jahr-shuffle-gemeinsames-treffen-in-praesenz-am-08-09-09-22')}
				>Ein Jahr SHUFFLE: Gemeinsames Treffen in Präsenz am 08.-09.09.22</a
			>
		</li>
		<li>
			<a
				href={resolve(
					'/aktuelles/ich-brauche-unterstuetzung-was-sich-lehrende-fuer-eine-barrierearme-lehre-wuenschen'
				)}>“Ich brauche Unterstützung!” – Was sich Lehrende für eine barrierearme Lehre wünschen</a
			>
		</li>
		<li>
			<a href={resolve('/aktuelles/here-it-comes-ilias-schulungsraum-mit-kleinem-hands-on')}
				>Here it Comes: ILIAS Schulungsraum mit kleiner Preview</a
			>
		</li>
		<li>
			<a href={resolve('/aktuelles/shuffle-beim-5-workshop-barrierefreie-dokumente')}
				>SHUFFLE beim 5. Workshop barrierefreie Dokumente</a
			>
		</li>
		<li>
			<a href={resolve('/aktuelles/erklaervideo-zu-universal-design-for-learning-udl')}
				>Erklärvideo zu Universal Design for Learning (UDL)</a
			>
		</li>
		<li>
			<a href={resolve('/aktuelles/start-des-studierendenprojekts-zur-digitalen-barrierefreiheit')}
				>Start des Studierendenprojekts zur digitalen Barrierefreiheit</a
			>
		</li>
		<li>
			<a href={resolve('/aktuelles/design-thinking-workshop-mit-accessibility-expertinnen')}
				>Design Thinking Workshop mit Accessibility Expert*Innen</a
			>
		</li>
		<li>
			<a
				href={resolve(
					'/aktuelles/interview-zur-zukunft-der-digitalen-barrierefreien-lehre-an-der-universitaet-bielefeld'
				)}
				>Interview zur Zukunft der digitalen (barrierefreien) Lehre an der Universität Bielefeld</a
			>
		</li>
		<li>
			<a
				href={resolve(
					'/aktuelles/neues-aus-dem-ap01-umfrage-zu-digitaler-barrierefreiheit-in-der-hochschullehre'
				)}>Beginn der Umfrage!</a
			>
		</li>
		<li>
			<a href={resolve('/aktuelles/jetzt-geht-es-los')}>Jetzt geht es los!</a>
		</li>
	</ul>
</div>

<style lang="scss">
	.page-content {
		max-width: var(--max-text-width);
		padding-inline: var(--outer-spacing);
		width: 100%;
		box-sizing: border-box;

		margin: 1.875rem auto 0 auto;

		ul {
			li {
				margin: 0.25rem 0;
			}
		}

		a {
			text-decoration: none;
		}
	}
</style>
