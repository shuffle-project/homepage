<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div class="wrapper">
	<h1>404</h1>
	<p>Oops! Diese Seite gibt es nicht.</p>
	<a href={resolve('/')}>Zurück zur Startseite</a>
</div>

<style>
	.wrapper {
		flex: 1;

		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		padding: 5rem 1.25rem 0;
		box-sizing: border-box;
		color: var(--color-black);

		h1 {
			font-size: clamp(10rem, 25vw + 0.25rem, 14rem);
			line-height: 100%;
			margin: 0;
		}

		p {
			font-size: clamp(1.25rem, 2.5vw + 0.25rem, 1.625rem);
			margin: 0;
		}

		a {
			font-size: 1.125rem;
			background-color: var(--color-black);
			color: var(--color-white);
			padding: 0.75rem 1.5rem;
			border-radius: 2rem;
			text-decoration: none;
			margin-top: 3rem;

			&:focus,
			&:hover {
				outline: 2px solid #070d1c;
				outline-offset: 2px;
			}
		}
	}
</style>
