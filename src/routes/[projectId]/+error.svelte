<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="wrapper">
	<h1>404 - Seite nicht gefunden</h1>
	<p>{$page.error?.message}</p>
</div>

<style>
	.wrapper {
		margin: 6.5rem var(--outer-spacing) 0;
	}
</style>
