<!-- @migration-task Error while migrating Svelte code: `<tr>` cannot be a child of `<table>`. `<table>` only allows these children: `<caption>`, `<colgroup>`, `<tbody>`, `<thead>`, `<tfoot>`, `<style>`, `<script>`, `<template>`. The browser will 'repair' the HTML (by moving, removing, or inserting elements) which breaks Svelte's assumptions about the structure of your components.
https://svelte.dev/e/node_invalid_placement -->
<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '../Icon.svelte';
	import Modal from '../Modal.svelte';

	export let video: HTMLVideoElement;

	let captionMenuButton: HTMLButtonElement;

	let captionMenu: HTMLDialogElement;
	let displayCaptionMenu = false;

	let modal: Modal;
	let displayModal = false;

	function toggleDisplayCaptionMenu() {
		displayCaptionMenu = !displayCaptionMenu;
	}

	$: {
		if (captionMenu) {
			displayCaptionMenu ? captionMenu.show() : captionMenu.close();
		}
	}

	function handleKeyEvent(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			toggleDisplayCaptionMenu();
		}
	}

	function handleMouseClick(e: MouseEvent) {
		if (e.target) {
			let target = e.target as HTMLElement;

			if (target === captionMenuButton || target.parentNode === captionMenuButton) {
				return;
			}

			if (displayModal) {
				return;
			}

			if (displayCaptionMenu && target !== captionMenu && target.parentNode !== captionMenu) {
				const dialogDimensions = captionMenu.getBoundingClientRect();
				if (
					e.clientX < dialogDimensions.left ||
					e.clientX > dialogDimensions.right ||
					e.clientY < dialogDimensions.top ||
					e.clientY > dialogDimensions.bottom
				) {
					captionMenu.close();
				}
			}
		}
	}

	onMount(() => {
		if (captionMenu) {
			captionMenu.addEventListener('close', () => {
				displayCaptionMenu = false;
			});
		}
	});

	// caption styles
	export let captionsBackgroundColor: string = 'black';
	export let captionsFontColor: string = 'white';
	export let captionsFontSize: string = 'small';

	$: {
		window.localStorage.setItem('captionsBackgroundColor', captionsBackgroundColor);
	}
	$: {
		window.localStorage.setItem('captionsFontColor', captionsFontColor);
	}
	$: {
		window.localStorage.setItem('captionsFontSize', captionsFontSize);
	}

	let selectedTrackLabel: string | null = null; // track active Caption

	function onSelectTextTrack(textTrack: TextTrack | null) {
		if (textTrack) {
			selectedTrackLabel = textTrack.label;

			for (let index = 0; index < video.textTracks.length; index++) {
				video.textTracks[index].mode = 'hidden';
			}
			textTrack.mode = 'showing';
		} else {
			selectedTrackLabel = null;
			for (let index = 0; index < video.textTracks.length; index++) {
				video.textTracks[index].mode = 'hidden';
			}
		}
		displayCaptionMenu = false;
	}
</script>

<svelte:window on:click={(e) => handleMouseClick(e)} />

<div class="wrapper">
	<button
		bind:this={captionMenuButton}
		aria-expanded={displayCaptionMenu}
		on:click={() => toggleDisplayCaptionMenu()}
		title="Untertitel Untermenü"
		aria-label="Untertitel Untermenü"
		class="cc-btn"
	>
		<Icon svg="subtitles" />
	</button>
	<dialog class="caption-menu" bind:this={captionMenu} on:keyup={(e) => handleKeyEvent(e)}>
		<ul>
			<li>
				<button aria-pressed={selectedTrackLabel === null} on:click={() => onSelectTextTrack(null)}
					>{#if selectedTrackLabel === null}
						<div class="icon">
							<Icon svg="check" />
						</div>
					{:else}
						<div class="icon"></div>
					{/if}
					Untertitel ausschalten</button
				>
			</li>
			{#each video.textTracks as track}
				<li>
					<button
						aria-pressed={track.label === selectedTrackLabel}
						on:click={() => onSelectTextTrack(track)}
					>
						{#if track.label === selectedTrackLabel}
							<div class="icon">
								<Icon svg="check" />
							</div>
						{:else}
							<div class="icon"></div>
						{/if}
						{track.label}
					</button>
				</li>
			{/each}
			<li>
				<button on:click={(e) => modal.toggleDisplay(e)}>
					<div class="icon">
						<Icon svg="settings" />
					</div>
					Einstellungen
				</button>
			</li>
		</ul>
	</dialog>

	<Modal bind:this={modal}>
		{#snippet headline()}
			Untertitel Einstellungen
		{/snippet}

		{#snippet content()}
			<div class="modal-content">
				<div class="hint-wrapper">
					<div class="hint">
						<Icon svg="attention" />
						<strong>Hinweis</strong>
					</div>

					<p class="hint-text">
						Die ausgewählten Einstellungen werden direkt übernommen. In gewissen Internetbrowser
						Betriebssystem Kombinationen kann es dazu kommen, dass die Änderung der Hintergrundfarbe
						nicht übernommen wird.
					</p>
				</div>

				<table class="style-selection" role="presentation">
					<tbody>
						<tr>
							<td><label for="selectBackgroundColor">Hintergrundfarbe der Untertitel</label></td>
							<td>
								<select
									id="selectBackgroundColor"
									bind:value={captionsBackgroundColor}
									on:click|stopPropagation
									title="Untertitel Hintergrundfarbe"
									class="custom-select"
								>
									<option on:click|stopPropagation value="black">schwarz</option>
									<option on:click|stopPropagation value="red">rot</option>
									<option on:click|stopPropagation value="yellow">gelb</option>
									<option on:click|stopPropagation value="white">weiß</option>
									<option on:click|stopPropagation value="blue">blau</option>
								</select>
							</td>
						</tr>
						<tr>
							<td><label for="selectFontColor">Schriftfarbe der Untertitel</label></td>
							<td>
								<select
									id="selectFontColor"
									class="custom-select"
									bind:value={captionsFontColor}
									on:click|stopPropagation
									title="Untertitel Schriftfarbe"
								>
									<option on:click|stopPropagation value="black">schwarz</option>
									<option on:click|stopPropagation value="red">rot</option>
									<option on:click|stopPropagation value="yellow">gelb</option>
									<option on:click|stopPropagation value="white">weiß</option>
									<option on:click|stopPropagation value="blue">blau</option>
								</select>
							</td>
						</tr>
						<tr>
							<td><label for="selectFontSize">Schriftgröße der Untertitel</label></td>
							<td>
								<select
									id="selectFontSize"
									class="custom-select"
									bind:value={captionsFontSize}
									on:click|stopPropagation
									title="Untertitel Schriftgröße"
								>
									<option on:click|stopPropagation value="small">klein</option>
									<option on:click|stopPropagation value="medium">normal</option>
									<option on:click|stopPropagation value="large">groß</option>
									<option on:click|stopPropagation value="larger">größer</option>
								</select>
							</td>
						</tr>
					</tbody>
				</table>

				<p
					class="exampleText example-{captionsFontSize} bg-{captionsBackgroundColor} fc-{captionsFontColor}"
				>
					So werden die Untertitel angezeigt
				</p>
			</div>
		{/snippet}
		<!-- <svelte:fragment slot="headline">Untertitel Einstellungen</svelte:fragment>
		<svelte:fragment slot="content">
			<div class="modal-content">
				<div class="hint-wrapper">
					<div class="hint">
						<Icon svg="attention" />
						<strong>Hinweis</strong>
					</div>

					<p class="hint-text">
						Die ausgewählten Einstellungen werden direkt übernommen. In gewissen Internetbrowser
						Betriebssystem Kombinationen kann es dazu kommen, dass die Änderung der Hintergrundfarbe
						nicht übernommen wird.
					</p>
				</div>

				<table class="style-selection" role="presentation">
					<tbody>
						<tr>
							<td><label for="selectBackgroundColor">Hintergrundfarbe der Untertitel</label></td>
							<td>
								<select
									id="selectBackgroundColor"
									bind:value={captionsBackgroundColor}
									on:click|stopPropagation
									title="Untertitel Hintergrundfarbe"
									class="custom-select"
								>
									<option on:click|stopPropagation value="black">schwarz</option>
									<option on:click|stopPropagation value="red">rot</option>
									<option on:click|stopPropagation value="yellow">gelb</option>
									<option on:click|stopPropagation value="white">weiß</option>
									<option on:click|stopPropagation value="blue">blau</option>
								</select>
							</td>
						</tr>
						<tr>
							<td><label for="selectFontColor">Schriftfarbe der Untertitel</label></td>
							<td>
								<select
									id="selectFontColor"
									class="custom-select"
									bind:value={captionsFontColor}
									on:click|stopPropagation
									title="Untertitel Schriftfarbe"
								>
									<option on:click|stopPropagation value="black">schwarz</option>
									<option on:click|stopPropagation value="red">rot</option>
									<option on:click|stopPropagation value="yellow">gelb</option>
									<option on:click|stopPropagation value="white">weiß</option>
									<option on:click|stopPropagation value="blue">blau</option>
								</select>
							</td>
						</tr>
						<tr>
							<td><label for="selectFontSize">Schriftgröße der Untertitel</label></td>
							<td>
								<select
									id="selectFontSize"
									class="custom-select"
									bind:value={captionsFontSize}
									on:click|stopPropagation
									title="Untertitel Schriftgröße"
								>
									<option on:click|stopPropagation value="small">klein</option>
									<option on:click|stopPropagation value="medium">normal</option>
									<option on:click|stopPropagation value="large">groß</option>
									<option on:click|stopPropagation value="larger">größer</option>
								</select>
							</td>
						</tr>
					</tbody>
				</table>

				<p
					class="exampleText example-{captionsFontSize} bg-{captionsBackgroundColor} fc-{captionsFontColor}"
				>
					So werden die Untertitel angezeigt
				</p>
			</div>
		</svelte:fragment> -->
	</Modal>
</div>

<style lang="scss">
	.wrapper {
		position: relative;
	}

	.hint-wrapper {
		padding: 1rem;
		margin: 1rem;
		border: 1px dashed var(--color-yellow);

		.hint {
			display: inline-flex;
			flex-direction: row;
			gap: 0.5rem;
			background-color: var(--color-yellow);
			padding: 0.125rem 0.25rem;

			p {
				font-weight: bold;
			}
		}

		.hint-text {
			margin: 0;
		}
	}

	.cc-btn {
		border: none;
		outline: none;

		width: 2.5rem;
		height: 2.5rem;

		display: flex;
		justify-content: center;
		align-items: center;

		&:focus-visible {
			outline: 2px solid var(--color-black);
		}
	}

	.caption-menu {
		width: 10rem;
		padding: 0.5rem;
		background-color: var(--color-white);
		box-sizing: border-box;

		border: 1px solid var(--color-blue-line);

		bottom: 0.5rem;

		transform: translateX(-4.1875rem) translateY(-2.25rem);

		ul {
			margin: 0;
			padding: 0;
			list-style: none;
		}

		button {
			cursor: pointer;

			color: var(--color-black);

			display: flex;
			align-items: center;
			text-align: left;
			gap: 0.5rem;

			width: 100%;
			min-height: 1.875rem;
			margin-bottom: 0.375rem;

			border: none;

			&:focus-visible {
				outline: 2px solid var(--color-black);
			}

			.icon {
				height: 1.25rem;
				width: 1.25rem;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}

	.modal-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;

		.style-selection {
			margin-inline: auto;

			tr {
				width: 100%;
				td {
					padding: 0.5rem 0;
				}

				td:first-child {
					text-align: right;
				}
				td:last-child {
					padding-left: 10px;
					select {
						min-width: 5rem;

						padding: 0.3rem;
						background-color: var(--color-white);
						border: 1px solid var(--color-black);
						outline: 2px solid var(--color-white);
						border-radius: 0.33rem;
						font-weight: bold;

						&:focus-visible {
							outline: 2px solid var(--color-black);
						}
					}
				}
			}
		}

		.exampleText {
			width: 100%;
			height: 8rem;
			padding: 1.25rem 0.625rem;
			box-sizing: border-box;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			margin: 0;

			&.bg-black {
				background-color: var(--color-black);
			}
			&.bg-red {
				background-color: var(--color-red);
			}
			&.bg-yellow {
				background-color: var(--color-yellow);
			}
			&.bg-white {
				background-color: var(--color-white);
			}
			&.bg-blue {
				background-color: var(--color-blue);
			}

			// fc color
			&.fc-black {
				color: var(--color-black);
			}
			&.fc-red {
				color: var(--color-red);
			}
			&.fc-yellow {
				color: var(--color-yellow);
			}
			&.fc-white {
				color: var(--color-white);
			}
			&.fc-blue {
				color: var(--color-blue);
			}
		}

		.example-small {
			font-size: 1rem;
		}
		.example-medium {
			font-size: 1.3rem;
		}
		.example-large {
			font-size: 1.9rem;
		}
		.example-larger {
			font-size: 2rem;
		}
	}
</style>
