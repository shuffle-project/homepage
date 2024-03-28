<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import Icon from '../Icon.svelte';
	import ProjectDuration from './ProjectDuration.svelte';
	let mobileUserAgent = false;

	onMount(() => {
		mobileUserAgent = navigator.userAgent.includes('Mobile');
	});
</script>

<div class="hero-section" class:mobileUserAgent>
	<div class="title-wrapper">
		<img src="{base}/logos/shuffle-logo.svg" alt="" aria-hidden="true" />
		<h1>SHUFFLE</h1>
		<p>Hochschulinitiative digitale Barrierefreiheit für Alle</p>
	</div>
	<div class="content-wrapper">
		<div class="text-content">
			<p>
				In SHUFFLE werden Maßnahmen auf technischer, struktureller und didaktischer Ebene zur
				Verbesserung von digitaler Barrierefreiheit an Hochschulen entwickelt, erprobt und dauerhaft
				als <span lang="en">Open-Source</span>-Lösungen bereitgestellt. Damit setzt SHUFFLE an den
				Forderungen des Hochschulrahmengesetz an, eine chancengerechte digitaler Teilhabe für alle
				Studierenden zu gewährleisten.
			</p>
			<p>
				Wir beziehen Lehrende und Studierende in die Entwicklungen ein. Ebenso arbeiten wir nach dem
				<span lang="en">Universal Design for Learning</span> (UDL) Ansatz, um allen Studierenden zugängliche
				Lernmaterialien und -umgebungen zu bieten.
			</p>
		</div>
		<div class="table-content">
			<table>
				<tr>
					<th>Laufzeit</th>
					<td>
						<ProjectDuration />
					</td>
				</tr>
				<tr>
					<th>Gefördert von</th>
					<td class="funded-by">
						<Icon svg={'icon-stiftung'} size="24" color="dark-grey" />
						<span>Stiftung Innovation in der Hochschullehre</span>
					</td>
				</tr>
				<tr>
					<th class="project-partner-title">Projektpartner</th>
					<td class="project-partner">
						<ul>
							<li>
								<Icon svg={'icon-stuttgart'} size="24" color="dark-grey" />
								<span>Hochschule der Medien Stuttgart</span>
							</li>
							<li>
								<Icon svg={'icon-bielefeld'} size="24" color="dark-grey" />
								<span>Universität Bielefeld</span>
							</li>
							<li>
								<Icon svg={'icon-heidelberg'} size="24" color="dark-grey" />
								<span>Pädagogische Hochschule Heidelberg</span>
							</li>
							<li>
								<Icon svg={'icon-freiburg'} size="24" color="dark-grey" />
								<span>Pädagogische Hochschule Freiburg</span>
							</li>
						</ul>
					</td>
				</tr>
			</table>
		</div>
	</div>
</div>

<style lang="scss">
	.hero-section {
		background: var(--color-blue-gradient);

		.title-wrapper {
			display: flex;
			flex-direction: column;

			align-items: center;
			justify-content: center;

			img {
				width: 6rem;
				height: 6rem;
				margin-top: 6rem;
			}

			h1 {
				letter-spacing: 0.5rem;
				margin: 0.625rem 0;
			}

			p {
				font-size: clamp(1rem, 2vw + 1rem, 2rem);
				font-weight: 300;
				margin: 0;
				text-align: center;
				margin-inline: var(--outer-spacing);
			}
		}

		.content-wrapper {
			max-width: 80rem;
			padding: 3.75rem var(--outer-spacing);
			margin-inline: auto;

			display: flex;
			justify-content: space-evenly;

			.text-content,
			.table-content {
				max-width: 32rem;
				width: 100%;
			}

			.table-content {
				table {
					border-spacing: 1.25rem;
				}

				th {
					text-align: right;
					&.project-partner-title {
						vertical-align: text-top;
					}
				}

				.funded-by {
					display: flex;
					gap: 0.625rem;
				}

				.project-partner {
					ul {
						list-style: none;
						padding: 0;
						margin: 0;
					}

					li {
						display: flex;
						align-items: center;
						gap: 0.625rem;
						margin-bottom: 0.625rem;
					}
				}
			}
		}

		&.mobileUserAgent {
			height: max(42rem);
		}
	}
</style>
