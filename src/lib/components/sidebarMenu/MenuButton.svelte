<script lang="ts">
	import Icon from '../Icon.svelte';
	import SidebarMenu from './SidebarMenu.svelte';

	let sidebarMenu: SidebarMenu | undefined = $state();

	function toggleSidebarMenuDisplay(e: Event) {
		sidebarMenu?.toggleDisplay(e);
	}
</script>

<button onclick={(e) => toggleSidebarMenuDisplay(e)} aria-label="Hauptmenü öffnen">
	<Icon svg="menu" size="parent" />
</button>

<SidebarMenu bind:this={sidebarMenu} />

<style lang="scss">
	button {
		background-color: transparent;
		width: 1.875rem;
		aspect-ratio: 1;
		padding: 0;
	}
</style>
