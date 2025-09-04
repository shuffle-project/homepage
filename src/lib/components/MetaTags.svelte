<script lang="ts">
	let description = 'Hochschulinitiative digitale Barrierefreiheit für Alle';
	let title = 'SHUFFLE';
	let previewImage = 'https://shuffle-projekt.de/meta/shuffle-preview.jpg';
</script>

<svelte:head>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="Digital, Barrierefreiheit, Hochschule, Universität, Inklusion, Reifegradmodell, Checkliste"
	/>

	<!-- Facebook / WhatsApp -->
	<meta property="og:locale" content="de_DE" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<!-- TODO adjust image source -->
	<meta property="og:image" content={previewImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="675" />

	<!-- Twitter / X -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={previewImage} />
</svelte:head>
