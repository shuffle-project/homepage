<script>
	import { base } from '$app/paths';
</script>

<footer>
	<hr aria-hidden="true" />
	<img src="{base}/logos/shuffle-logo.svg" alt="" aria-hidden="true" />
	<ul>
		<li>
			<a href="{base}/impressum">Impressum</a>
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
			<a href="{base}/leichte-sprache">Leichte Sprache</a>
		</li>
		<li>
			<a href="{base}/datenschutz-in-leichter-sprache">Datenschutz in leichter Sprache</a>
		</li>
		<li>
			<a href="{base}/sitemap">Sitemap</a>
		</li>
	</ul>
	<p class="shuffle-logo-text">© SHUFFLE</p>
</footer>

<style lang="scss">
	footer {
		display: flex;
		flex-direction: column;
		align-items: center;

		hr {
			width: 100%;
			background-color: var(--color-blue-line);
			height: 1px;
			border: none;
			margin: 0;
		}

		img {
			width: 3.125rem;
			height: 3.125rem;
			margin: 1.25rem 0;
		}

		ul {
			margin-inline: var(--outer-spacing);
			padding: 0;

			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			gap: 1.25rem;

			list-style: none;

			a {
				color: var(--color-black);
				text-decoration: none;
			}
		}

		p {
			background: var(--color-blue-gradient);

			text-align: center;
			font-weight: bold;

			width: 100%;
			padding: 1.25rem 0;
			margin: 1.25rem 0 0;
		}
	}
</style>
