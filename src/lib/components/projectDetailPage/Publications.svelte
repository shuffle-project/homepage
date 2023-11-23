<script lang="ts">
	import type { Publication } from '$lib/interfaces/project.interface';
	import Icon from '../Icon.svelte';
	import LinkNewTab from '../LinkNewTab.svelte';

	export let publications: Publication[];

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
	<h2>Publikationen</h2>
	<ul>
		{#each publications as publication, i}
			<li class:even-entry={(i + 1) % 2 === 0}>
				<p class="title" lang={publication.titleLang}>{publication.title}</p>
				<div class="more-info-wrapper">
					<div class="content-wrapper">
						<div class="contributors">
							<Icon svg="person" alt="Beitragende:" color="dark-grey" />
							<span>{getContributorsString(publication.contributors)}</span>
						</div>
						<div class="location">
							<Icon svg="location" alt="Ort der Veröffentlichung:" color="dark-grey" />
							<span>{publication.placeOfPublication}</span>
						</div>
					</div>
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
		margin-top: 5rem;
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

				.content-wrapper {
					.contributors,
					.location {
						display: flex;
						align-items: center;
						gap: 0.625rem;
						padding: 0.125rem 0 0.125rem 0.625rem;
						color: var(--color-grey);
					}
				}

				.link-wrapper {
					align-self: flex-end;
				}
			}

			&.even-entry {
				background: var(--color-blue-gradient);
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
