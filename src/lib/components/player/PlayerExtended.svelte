<script lang="ts">
	import type { ExtendedPlayerConfig } from '$lib/interfaces/player.interface';
	import { getRandomId } from '$lib/utils/utils';
	import Player from './Player.svelte';

	interface Props {
		extendedPlayerConfig: ExtendedPlayerConfig;
	}

	let { extendedPlayerConfig }: Props = $props();

	const randomId = getRandomId();

	let selectedTab: number = $state(1);

	let tabcount = extendedPlayerConfig.videos.length + extendedPlayerConfig.transcripts.length;

	function onSelectTab(index: number) {
		selectedTab = index;
	}

	function onKeyUpTab(event: KeyboardEvent) {
		if (event.key === 'ArrowRight') {
			event.preventDefault();
			onSelectTab(selectedTab === tabcount ? 1 : selectedTab + 1);
			document.getElementById('playertab-' + selectedTab + '-' + randomId)?.focus();
		} else if (event.key === 'ArrowLeft') {
			event.preventDefault();
			onSelectTab(selectedTab === 1 ? tabcount : selectedTab - 1);
			document.getElementById('playertab-' + selectedTab + '-' + randomId)?.focus();
		}
	}
</script>

<div class="wrapper">
	<h2>{extendedPlayerConfig.title}</h2>
	<div role="tablist" class="tablist" aria-label="Video alternativen">
		{#each extendedPlayerConfig.videos as video, i}
			{@const index = i + 1}
			<button
				id="playertab-{i + 1}-{randomId}"
				role="tab"
				aria-selected={selectedTab === index}
				tabindex={selectedTab === index ? 0 : -1}
				onclick={() => onSelectTab(index)}
				onkeydown={onKeyUpTab}
			>
				{video.title}
			</button>
		{/each}

		{#each extendedPlayerConfig.transcripts as transcript, i}
			{@const index = extendedPlayerConfig.videos.length + i + 1}
			<button
				id="playertab-{index}-{randomId}"
				role="tab"
				aria-selected={selectedTab === index}
				tabindex={selectedTab === index ? 0 : -1}
				onclick={() => onSelectTab(index)}
				onkeydown={onKeyUpTab}
			>
				{transcript.title}
			</button>
		{/each}
	</div>

	{#each extendedPlayerConfig.videos as video, i}
		{@const index = i + 1}
		{#if selectedTab === index}
			<div class="video" id="panel-{index}-{randomId}">
				<Player videoData={video} />
			</div>
		{/if}
	{/each}

	{#each extendedPlayerConfig.transcripts as transcript, i}
		{@const index = extendedPlayerConfig.videos.length + i + 1}
		{#if selectedTab === index}
			<div id="panel-{index}-{randomId}">
				<div class="transcript">
					{@html transcript.body}
				</div>
			</div>
		{/if}
	{/each}
</div>

<style lang="scss">
	.wrapper {
		margin-top: 5rem;
		max-width: 60rem;
		width: 100%;
		overflow: hidden;

		h2 {
			margin-bottom: 1.875rem;
		}

		.tablist {
			display: flex;
			flex-wrap: wrap;
			gap: 0.625rem;

			margin-bottom: 0.625rem;

			button {
				border: 1px solid var(--color-blue-line);
				background-color: var(--color-white);
				padding: 0.25rem 0.5rem;

				font-size: 1rem;
				color: var(--color-black);

				outline-offset: -4px;
				outline-color: var(--color-black);

				&[aria-selected='true'] {
					background: var(--color-black);
					color: var(--color-white);
					border: 1px solid var(--color-black);

					outline-color: var(--color-white);
				}

				&[aria-selected='false']:hover {
					// background-color: var(--color-blue-line);
					background-color: rgba(var(--color-black-rgb), 0.08);
				}
			}
		}
	}
</style>
