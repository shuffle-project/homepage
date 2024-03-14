<script lang="ts">
	import { base } from '$app/paths';
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
	<svelte:fragment slot="title">Sitemap</svelte:fragment>
	<svelte:fragment slot="intro-text">Diese Sitemap listet alle Seiten auf.</svelte:fragment>
</TitleSection>

<div class="page-content headings-with-padding">
	<h2>Alle Seiten (alphabetisch)</h2>
	<ul>
		<li>
			<a href="{base}/aktuelles">Aktuelles</a>
		</li>
		<li>
			<a href="{base}/datenschutz">Datenschutz</a>
		</li>
		<li>
			<a href="{base}/barrierefreiheit">Erklärung zur Barrierefreiheit</a>
		</li>
		<li>
			<a href="{base}/dgs">Gebärdensprache (DGS)</a>
		</li>
		<li>
			<a href="{base}/impressum">Impressum</a>
		</li>
		<li>
			<a href="{base}/kontakt">Kontakt</a>
		</li>
		<li>
			<a href="{base}/leichte-sprache">Leichte Sprache</a>
		</li>
		<li>
			<a href="{base}/">Startseite</a>
		</li>
		<li>
			<a href="{base}/team">Team</a>
		</li>
	</ul>

	<h2>Alle Projekte (alphabetisch)</h2>
	<ul>
		{#each everyProjectSortedByName as project, i}
			<li>
				<a href="{base}/{project.id}">{project.title}</a>
			</li>
		{/each}
	</ul>

	<h2>Alle News (Neueste zuerst)</h2>
	<ul>
		<li>
			<a href="{base}/aktuelles/wir-wurden-verlaengert">Wir wurden verlängert!</a>
		</li>
		<li>
			<a href="{base}/aktuelles/shuffle-projekttreffen-in-heidelberg"
				>SHUFFLE-Projekttreffen in Heidelberg</a
			>
		</li>
		<li>
			<a href="{base}/aktuelles/konferenzbeitraege-bei-der-geneme-2023"
				>Konferenzbeiträge bei der GeNeMe 2023</a
			>
		</li>
		<li>
			<a href="{base}/aktuelles/zwei-tage-lernen-gruebeln-und-vernetzen-auf-der-summer-school"
				>Zwei Tage lernen, grübeln und vernetzen auf der Summer School</a
			>
		</li>
		<li>
			<a href="{base}/aktuelles/kennst-du-eigentlich-gabriel">Kennst Du eigentlich Gabriel?</a>
		</li>
		<li>
			<a href="{base}/aktuelles/chi2023">CHI2023</a>
		</li>
		<li>
			<a href="{base}/aktuelles/accessibility-day-in-stuttgart">Accessibility Day in Stuttgart</a>
		</li>
		<li>
			<a href="{base}/aktuelles/fruehlingstreffen-in-bielefeld">Frühlingstreffen in Bielefeld</a>
		</li>
		<li>
			<a
				href="{base}/aktuelles/die-zukunft-barrierefrei-shuffle-mit-zwei-beitraegen-beim-university-future-festival-2023"
				>Die Zukunft barrierefrei! – SHUFFLE mit zwei Beiträgen beim University Future Festival 2023</a
			>
		</li>
		<li>
			<a href="{base}/aktuelles/shuffle-unterwegs">SHUFFLE unterwegs</a>
		</li>
		<li>
			<a href="{base}/aktuelles/shuffle-beim-bi-teach-tag-der-lehre"
				>SHUFFLE beim Bi.teach – Tag der Lehre</a
			>
		</li>
		<li>
			<a href="{base}/aktuelles/shuffle-mitglieder-haben-pruefungen-erfolgreich-bestanden"
				>SHUFFLE-Mitglieder haben Prüfungen erfolgreich bestanden</a
			>
		</li>
		<li>
			<a href="{base}/aktuelles/shuffle-auf-der-icchp-aaate">SHUFFLE auf der ICCHP-AAATE</a>
		</li>
		<li>
			<a href="{base}/aktuelles/preisverleihung-zum-studierendenwettbewerb-acceess"
				>Preisverleihung zum Studierendenwettbewerb ACCEESS</a
			>
		</li>
		<li>
			<a href="{base}/aktuelles/posterpraesentation-vor-medienpaedagogischem-fachpublikum"
				>Posterpräsentation vor medienpädagogischem Fachpublikum</a
			>
		</li>
		<li>
			<a
				href="{base}/aktuelles/shuffle-bei-der-tagung-digitale-barrierefreiheit-weiter-denken-am-freitag-16-09-2022"
				>SHUFFLE bei der Tagung “Digitale Barrierefreiheit weiter denken” am Freitag 16.09.2022</a
			>
		</li>
		<li>
			<a href="{base}/aktuelles/danke-an-die-expertinnen-aus-beratung-und-strategieentwicklung"
				>Danke an die Expert*innen aus Beratung und Strategieentwicklung!</a
			>
		</li>
		<li>
			<a href="{base}/aktuelles/ein-jahr-shuffle-gemeinsames-treffen-in-praesenz-am-08-09-09-22"
				>Ein Jahr SHUFFLE: Gemeinsames Treffen in Präsenz am 08.-09.09.22</a
			>
		</li>
		<li>
			<a
				href="{base}/aktuelles/ich-brauche-unterstuetzung-was-sich-lehrende-fuer-eine-barrierearme-lehre-wuenschen"
				>“Ich brauche Unterstützung!” – Was sich Lehrende für eine barrierearme Lehre wünschen</a
			>
		</li>
		<li>
			<a href="{base}/aktuelles/here-it-comes-ilias-schulungsraum-mit-kleinem-hands-on"
				>Here it Comes: ILIAS Schulungsraum mit kleiner Preview</a
			>
		</li>
		<li>
			<a href="{base}/aktuelles/shuffle-beim-5-workshop-barrierefreie-dokumente"
				>SHUFFLE beim 5. Workshop barrierefreie Dokumente</a
			>
		</li>
		<li>
			<a href="{base}/aktuelles/erklaervideo-zu-universal-design-for-learning-udl"
				>Erklärvideo zu Universal Design for Learning (UDL)</a
			>
		</li>
		<li>
			<a href="{base}/aktuelles/start-des-studierendenprojekts-zur-digitalen-barrierefreiheit"
				>Start des Studierendenprojekts zur digitalen Barrierefreiheit</a
			>
		</li>
		<li>
			<a href="{base}/aktuelles/design-thinking-workshop-mit-accessibility-expertinnen"
				>Design Thinking Workshop mit Accessibility Expert*Innen</a
			>
		</li>
		<li>
			<a
				href="{base}/aktuelles/interview-zur-zukunft-der-digitalen-barrierefreien-lehre-an-der-universitaet-bielefeld"
				>Interview zur Zukunft der digitalen (barrierefreien) Lehre an der Universität Bielefeld</a
			>
		</li>
		<li>
			<a
				href="{base}/aktuelles/neues-aus-dem-ap01-umfrage-zu-digitaler-barrierefreiheit-in-der-hochschullehre"
				>Beginn der Umfrage!</a
			>
		</li>
		<li>
			<a href="{base}/aktuelles/jetzt-geht-es-los">Jetzt geht es los!</a>
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
