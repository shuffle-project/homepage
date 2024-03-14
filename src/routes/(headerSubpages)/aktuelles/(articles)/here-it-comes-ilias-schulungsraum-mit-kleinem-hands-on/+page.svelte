<script>
	import ArticleHeader from '../../../../../lib/components/ArticleHeader.svelte';
</script>

<svelte:head>
	<title>Here it Comes: ILIAS Schulungsraum mit kleiner Preview - SHUFFLE</title>
</svelte:head>

<ArticleHeader
	title="Here it Comes: ILIAS Schulungsraum mit kleiner Preview"
	authorName="Franziska Neumann"
	date="19.05.2022"
/>

<p>
	Um Lehrende bei der Erstellung von barrierearmen Lernmaterialien und der Gestaltung von einer
	barrierearmen Lernumgebung zu unterstützen, wird an der PH Freiburg gerade ein ILIAS Schulungsraum
	entwickelt. Dort können Lehrende verschiedene Lernmodule durchlaufen, die das Erstellen von
	barrierearmen Dokumenten, barrierearmen ILIAS-Kursräumen und barrierearmen E-Prüfungen auf ILIAS
	behandeln. Der Schulungsraum wird mit einer CC-Lizenz Ende Juni veröffentlicht. Sie werden hier
	darüber informiert, sobald der Schulungsraum zur Verfügung steht.
</p>

<p>
	Damit Sie nicht bis zur Veröffentlichung warten müssen, erhalten Sie hier einen kleinen Ausblick
	und Leitfaden, wie Sie schon jetzt ein Word-Dokument barrierearm gestalten können.
</p>

<h2>Formatvorlagen</h2>

<p>
	Verwenden Sie Formatvorlagen, um Überschriften als solche zu markieren. Überschriften, die nur
	fett, unterstrichen oder kursiv markiert wurden, werden von assistiven Technologien (z.B.
	Screenreadern) nicht als Überschriften wahrgenommen, was die Kommunikation der Dokumentenstruktur
	verhindert. Formatvorlagen finden Sie in einem Word-Dokument in der Registerkarte <em
		>Start > Formatvorlagen.</em
	>
</p>

<h2>Inhaltsverzeichnis</h2>

<p>
	Mithilfe der verwendeten Formatvorlagen können Sie ein Inhaltsverzeichnis erstellen. Dies dient
	der besseren Navigation und dem Überblick. Über die Registerkarte <em
		>Verweise (oder: Referenzen) > Inhaltsverzeichnis > Benutzerdefiniertes Inhaltsverzeichnis</em
	> können Sie das Inhaltsverzeichnis erstellen und die entsprechenden Formatvorlagen bzw. Überschriften
	auswählen.
</p>

<h2>Alternativtext</h2>

<p>
	Abbildungen oder Grafiken werden häufig zur besseren Verständlichkeit und für weitere
	Informationen genutzt. Ohne Alternativtext können Abbildungen jedoch von assistiven Technologien
	nicht wiedergegeben, wodurch sehbeeinträchtigen Lesenden die Abbildungen und folglich die
	Informationen verwehrt werden. Um bei einer Abbildung einen Alternativtext hinzuzufügen, klicken
	Sie per Rechtsklick auf das <em
		>Bild > Grafik formatieren > Layout und Eigenschaften > Alternativtext.</em
	>
	Auf der rechten Seite öffnet sich ein Eingabefeld, indem Sie den Alternativtext eingeben können oder
	die Abbildung als dekorativ markieren.
</p>

<p>
	Viele weitere Punkte, wie Sie ohne große Mühen, ein Word-Dokumente und vieles mehr barrierearm
	gestalten können, finden Sie im ILIAS Schulungsraum (coming soon).
</p>

<style lang="scss">
	h2 {
		font-size: clamp(1.25rem, 1vw + 1rem, 1.375rem);
		margin-top: 1.875rem;
	}
</style>
