<script lang="ts">
	import { getGlobalState } from '$lib/globalState.svelte';
	import type { Publication, PublicationCategory } from '$lib/interfaces/project.interface';
	import { fade } from 'svelte/transition';
	import Icon from '../Icon.svelte';
	import Link from '../Link.svelte';

	const {
		publications,
		category,
		headingLevel = 'h3'
	}: {
		publications: Publication[];
		category: PublicationCategory;
		headingLevel?: 'h2' | 'h3';
	} = $props();

	const globalState = getGlobalState();

	function getContributorsString(contributors: string[]) {
		let allNames = '';
		contributors.forEach((contributor, i) => {
			if (i !== contributors.length - 1) {
				allNames = allNames + ` ${contributor};`;
			} else {
				allNames = allNames + ` ${contributor}`;
			}
		});
		return allNames;
	}
</script>

<div class="wrapper">
	{#if headingLevel === 'h2'}
		<h2>{category}</h2>
	{/if}
	{#if headingLevel === 'h3'}
		<h3>{category}</h3>
	{/if}

	<ul aria-label={category}>
		{#if globalState.useAPAFormat}
			<div in:fade={{ duration: 600 }}>
				{#each publications as publication, i}
					<li>
						{@html publication.apa}
					</li>
					{#if i !== publications.length - 1}
						<hr aria-hidden="true" />
					{/if}
				{/each}
			</div>
		{:else}
			<div in:fade={{ duration: 600 }}>
				{#each publications as publication, i}
					<li>
						<p class="title" lang={publication.titleLang}>{publication.title}</p>
						<div class="more-info-wrapper">
							<table>
								<tbody>
									<tr>
										<th><Icon svg="person" alt="Beitragende:" color="dark-grey" /></th>
										<td>{getContributorsString(publication.contributors)}</td>
									</tr>
									<tr>
										<th
											><Icon svg="location" alt="Ort der Veröffentlichung:" color="dark-grey" /></th
										>
										<td lang={publication.placeOfPublicationLang}
											>{publication.placeOfPublication}</td
										>
									</tr>
									<tr>
										<th
											><Icon svg="calender" alt="Jahr der Veröffentlichung" color="dark-grey" /></th
										>
										<td>{publication.releaseDate.split('-')[0]}</td>
									</tr>
								</tbody>
							</table>

							<div class="link-wrapper">
								{#if publication.link}
									<Link
										link={publication.link.url}
										details={publication.title}
										detailsLang={publication.titleLang}
										download={publication.link.download}
										allowReferrer={publication.link.allowReferrer}
									>
										{publication.link.label}
									</Link>
								{/if}
							</div>
						</div>
					</li>
					{#if i !== publications.length - 1}
						<hr aria-hidden="true" />
					{/if}
				{/each}
			</div>
		{/if}
	</ul>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		max-width: 60rem;
		box-sizing: border-box;

		ul {
			padding: 0;
			margin: 0;
			list-style-type: none;
		}

		li {
			padding: 1.25rem 0;

			.title {
				font-weight: bold;
				margin: 0 0 0.25rem;
			}

			.more-info-wrapper {
				display: flex;
				justify-content: space-between;
				gap: 1.25rem;

				table {
					color: var(--color-grey);

					th {
						min-width: 2rem;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}

				.link-wrapper {
					align-self: flex-end;
				}
			}
		}

		h2,
		h3,
		li {
			padding-inline: 1.875rem;
			box-sizing: border-box;
		}

		hr {
			margin: 0;
			height: 1px;
			border: none;
			background-color: var(--color-blue-line);
		}

		h2,
		h3 {
			margin-top: 2rem;
		}
	}

	@media (max-width: 40.5625rem) {
		.wrapper {
			h2,
			h3,
			li {
				padding-inline: 0;
			}

			li {
				.more-info-wrapper {
					flex-direction: column;
				}
			}
		}
	}
</style>
