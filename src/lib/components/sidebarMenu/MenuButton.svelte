<script lang="ts">
	import Icon from '../Icon.svelte';
	import SidebarMenu from './SidebarMenu.svelte';

	let sidebarMenu: SidebarMenu;

	function toggleSidebarMenuDisplay() {
		sidebarMenu.toggleDisplay();
	}
</script>

<button on:click={() => toggleSidebarMenuDisplay()} aria-label="Hauptmenü öffnen">
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
