<script lang="ts">
	import Icon from '../Icon.svelte';
</script>

<div class="wrapper">
	<p>Sie möchten Melvin auf einem eigenen Server aufsetzen und nutzen?</p>
	<a href="https://github.com/shuffle-project/melvin">
		Zum GitHub-Repo
		<Icon svg="github" color="white" />
	</a>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		max-width: 60rem;
		padding: 1.875rem;
		margin-top: 3.125rem;
		box-sizing: border-box;

		background-color: var(--color-black);

		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;

		p,
		a {
			color: rgba(var(--color-white-rgb), 0.9);
		}

		a {
			display: flex;
			align-items: center;
			gap: 0.375rem;
			font-weight: bold;
			text-decoration: none;
			padding: 0.25rem 0.125rem;

			&:hover,
			&:focus {
				text-decoration: none !important;
				outline: 1px solid var(--color-white);
				outline-offset: 1px;
			}
		}
	}
</style>
