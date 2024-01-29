<script lang="ts">
	import type { Publication } from '$lib/interfaces/project.interface';
	import Icon from '../Icon.svelte';
	import LinkNewTab from '../LinkNewTab.svelte';

	export let publications: Publication[];
	export let heading: string = '';
	export let year: number = -1;

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
	{#if heading !== ''}
		<h2>{heading}</h2>
	{/if}
	<ul aria-label={year !== -1 ? `Veröffentlichungen von ${year}` : ''}>
		{#each publications as publication, i}
			<li>
				<p class="title" lang={publication.titleLang}>{publication.title}</p>
				<div class="more-info-wrapper">
					<table>
						<tr>
							<th><Icon svg="person" alt="Beitragende:" color="dark-grey" /></th>
							<td>{getContributorsString(publication.contributors)}</td>
						</tr>
						<tr>
							<th><Icon svg="location" alt="Ort der Veröffentlichung:" color="dark-grey" /></th>
							<td lang={publication.placeOfPublicationLang}>{publication.placeOfPublication}</td>
						</tr>
					</table>

					<div class="link-wrapper">
						<LinkNewTab
							link={publication.link}
							details={publication.title}
							detailsLang={publication.titleLang}
						>
							{publication.linkText}
						</LinkNewTab>
					</div>
				</div>
			</li>
			{#if i !== publications.length - 1}
				<hr aria-hidden="true" />
			{/if}
		{/each}
	</ul>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		max-width: 60rem;
		box-sizing: border-box;

		ul {
			padding: 0;
			list-style-type: none;
		}

		li {
			padding: 0.625rem 0;

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

		h2 {
			margin-top: 5rem;
		}
	}

	@media (max-width: 40.5625rem) {
		.wrapper {
			h2,
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
