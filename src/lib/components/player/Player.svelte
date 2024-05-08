<!--
captions	The track defines translation of dialogue and sound effects (suitable for deaf users)
chapters	The track defines chapter titles (suitable for navigating the media resource)
descriptions	The track defines a textual description of the video content (suitable for blind users)
metadata	The track defines content used by scripts. Not visible for the user
subtitles	The track defines subtitles, used to display subtitles in a video
 -->
<script lang="ts">
	import { base } from '$app/paths';
	import type { Video } from '$lib/interfaces/player.interface';
	import { getRandomId, isIOSDevice } from '$lib/utils/utils';
	import { onMount } from 'svelte';
	import Icon from '../Icon.svelte';
	import CaptionSettings from './CaptionSettings.svelte';

	export let videoData: Video;

	let useNativeControls = false;
	const randomId = getRandomId();

	let isiOSDevice = false;

	// video
	let videoWrapper: HTMLElement;
	let video: HTMLVideoElement;
	let fullscreen = false;

	//readonly
	let duration: number;
	$: durationMinutes = ('00' + Math.floor(duration / 60)).slice(-2);
	$: durationSeconds = ('00' + (Math.floor(duration) % 60)).slice(-2);

	//two way
	let currentTime: number = 0;
	$: currentTimeMinutes = ('00' + Math.floor(currentTime / 60)).slice(-2);
	$: currentTimeSeconds = ('00' + Math.floor(currentTime % 60)).slice(-2);

	let playbackRate: number = 1;
	let paused: boolean = true;
	let volume: number = 0.8; // between 0 and 1
	let muted: boolean;

	// caption styles
	let captionsBackgroundColor: string = 'black';
	let captionsFontColor: string = 'white';
	let captionsFontSize: string = 'small';

	// aria live
	let ariaLiveContent = '';

	let timeProgress: HTMLInputElement;
	let volumeSlider: HTMLInputElement;

	$: {
		// ::-webkit-slider-runnable-track{
		let normalizedSliderValue = (currentTime / duration) * 100;
		normalizedSliderValue = normalizedSliderValue < 0 ? 0 : normalizedSliderValue;
		if (timeProgress) {
			timeProgress.style.background = `linear-gradient(to right, var(--color-black) ${normalizedSliderValue}%, var(--color-light-grey) ${normalizedSliderValue}%)`;
		}
	}

	$: {
		if (volumeSlider) {
			volumeSlider.style.background = `linear-gradient(to right, var(--color-black) ${volume * 100}%, var(--color-light-grey) ${
				volume * 100
			}%)`;
		}
	}

	$: {
		if (!muted && volume === 0) {
			onMute();
		}
		if (muted && volume !== 0) {
			onMute();
		}
	}

	onMount(() => {
		isiOSDevice = isIOSDevice();
		useNativeControls = isiOSDevice;

		if (!isiOSDevice) {
			// load capationSsettings from localStorage
			captionsBackgroundColor = window.localStorage.getItem('captionsBackgroundColor') || 'black';
			captionsFontColor = window.localStorage.getItem('captionsFontColor') || 'white';
			captionsFontSize = window.localStorage.getItem('captionsFontSize') || 'medium';
		}

		[
			'fullscreenchange',
			'webkitfullscreenchange',
			'mozfullscreenchange',
			'msfullscreenchange'
		].forEach((eventType) =>
			document.addEventListener(eventType, (e) => {
				if (e.target === videoWrapper) {
					fullscreen = !fullscreen;
				}
			})
		);
	});

	// functions
	function onPlayPause() {
		if (useNativeControls) return;

		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
		ariaLiveContent = video.paused ? 'Pausiert' : 'Gestartet';
	}

	function onMute() {
		muted = !muted;
		ariaLiveContent = muted ? 'Stummgeschalten' : 'Ton aktiviert';

		if (muted && volume !== 0) {
			volume = 0;
		}

		if (!muted && volume === 0) {
			volume = 0.5;
		}
	}

	function onKeyDownTimeProgress(ev: KeyboardEvent) {
		if (ev.key === ' ') {
			ev.preventDefault();
			onPlayPause();
		} else if (ev.key === 'ArrowRight') {
			ev.preventDefault();
			currentTime += 10;
		} else if (ev.key === 'ArrowLeft') {
			ev.preventDefault();
			currentTime -= 10;
		}
	}

	function onToggleFullscreen() {
		if (document.fullscreenElement || (document as any).webkitFullscreenElement) {
			exitFullscreen();
		} else {
			enterFullscreen();
		}
	}

	async function exitFullscreen() {
		if (document.exitFullscreen) {
			await document.exitFullscreen();
		} else if ((document as any).webkitExitFullscreen) {
			await (document as any).webkitExitFullscreen();
		}
	}
	function enterFullscreen() {
		if (videoWrapper.requestFullscreen) {
			videoWrapper.requestFullscreen({ navigationUI: 'hide' });
		} else if ((videoWrapper as any).webkitRequestFullscreen) {
			(videoWrapper as any).webkitRequestFullscreen({ navigationUI: 'hide' });
		}
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="wrapper"
	bind:this={videoWrapper}
	on:focusout={() => {
		if (ariaLiveContent !== '') ariaLiveContent = '';
	}}
>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		poster={base + videoData.poster}
		id="video-{randomId}"
		controls={useNativeControls || isiOSDevice}
		preload="auto"
		width="100%"
		bind:this={video}
		bind:duration
		bind:muted
		bind:paused
		bind:playbackRate
		bind:volume
		bind:currentTime
		class={!isiOSDevice
			? `bg-${captionsBackgroundColor} fc-${captionsFontColor} fs-${captionsFontSize}`
			: ''}
		on:click={onPlayPause}
		on:dblclick={onToggleFullscreen}
		tabindex="0"
		aria-label="Videospieler anklickbar"
		class:native-controls={!useNativeControls}
	>
		<source type="video/mp4" src={base + videoData.videoPathMp4} />
		{#each videoData.captionsArray as captionPath}
			<track
				kind="captions"
				src={base + captionPath.path}
				label={captionPath.label}
				srclang={captionPath.lang}
			/>
		{/each}
		<!-- <track kind="subtitles" src="{base}/media/subtitles2.vtt" label="deutsche subtitles" srclang="de" /> -->
		Ihr Browser unterstützt das Video Element nicht. Falls möglich, können Sie es mit einem anderen Internetbrowser
		probieren, oder gegebenenfalls diesen Browser aktualisieren.
	</video>

	{#if !useNativeControls}
		<div id="video-controls" class="controls">
			{#if video}
				<div class="row-1">
					<input
						aria-valuetext="Zeit = {currentTimeMinutes} Minuten {currentTimeSeconds} Sekunden"
						aria-label="Video-Zeitleiste"
						class="time-progress"
						type="range"
						bind:value={currentTime}
						bind:this={timeProgress}
						min="0"
						max={duration}
						on:keydown={onKeyDownTimeProgress}
					/>
				</div>

				<div class="row-2">
					<div class="left-side">
						<button
							class="playpause player-btn"
							aria-label={paused ? 'Video abspielen' : 'Video pausieren'}
							title={paused ? 'Video abspielen' : 'Video pausieren'}
							on:click={onPlayPause}
						>
							{#if !paused}
								<Icon svg="pause" color="black" />
							{:else}
								<Icon svg="play" color="black" />
							{/if}
						</button>

						<button
							id="mute-{randomId}"
							aria-label="Ton stummschalten"
							title="Ton stummschalten"
							aria-pressed={muted}
							class="player-btn"
							on:click={onMute}
						>
							{#if muted}
								<Icon svg="volume-mute" color="black" />
							{:else}
								<Icon svg="volume" color="black" />
							{/if}
						</button>

						<input
							aria-valuetext="Lautstärke {volume}"
							title="Lautstärke"
							type="range"
							min="0"
							max="1"
							step="0.1"
							bind:value={volume}
							bind:this={volumeSlider}
							class="volume-slider"
						/>
					</div>

					<div class="right-side">
						<CaptionSettings
							{video}
							bind:captionsBackgroundColor
							bind:captionsFontColor
							bind:captionsFontSize
						/>

						<button class="player-btn" title="Fullscreen" on:click={onToggleFullscreen}>
							{#if fullscreen}
								<Icon svg="fullscreen-close" color="black" />
							{:else}
								<Icon svg="fullscreen" color="black" />
							{/if}
						</button>
					</div>
				</div>

				<div class="row-3">
					<span>
						{currentTimeMinutes}:{currentTimeSeconds} / {durationMinutes}:{durationSeconds}
					</span>

					<span>{paused ? 'Pausiert' : 'Gestartet'}</span>
				</div>
				<div />
			{/if}
		</div>
	{/if}
</div>

<div class="toggle-controls-wrapper">
	<input type="checkbox" id="toggle-playercontrols-{randomId}" bind:checked={useNativeControls} />
	<label for="toggle-playercontrols-{randomId}">Nativer Player verwenden</label>
</div>

<!-- Aria-Live Region -->
<div class="sr-only" aria-live="polite">
	{#key ariaLiveContent}
		{ariaLiveContent}
	{/key}
</div>

<style lang="scss">
	.controls {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--color-blue-line);
		background-color: var(--color-white);
		border-top: none;
		padding: 0 0.5rem 0.25rem;

		.time-progress,
		.volume-slider {
			appearance: none;
			-webkit-appearance: none;
			width: 100%;
			outline: none;
			border: 1px solid var(--color-white);
			// height: 1rem;
			height: 0.5rem;
			position: relative;

			&:disabled {
				opacity: 30%;
			}

			&:focus-visible:focus-within {
				outline: 2px solid var(--color-black);
				outline-offset: 6px;
			}

			cursor: pointer;

			&::-webkit-slider-thumb {
				-webkit-appearance: none;
				appearance: none;
				height: 1.125rem;
				width: 1.125rem;
				border: 1px solid var(--color-black);
				background-color: var(--color-white);
				border-radius: 50%;
				position: relative;
				z-index: 3;
				transition: outline 0.1s ease-out;

				&:hover,
				&:active {
					outline: 2px solid var(--color-white);
				}
			}

			&::-moz-range-thumb {
				-webkit-appearance: none;
				appearance: none;
				height: 1.125rem;
				width: 1.125rem;
				border: 1px solid var(--color-black);
				background-color: var(--color-white);
				border-radius: 50%;
				position: relative;
				z-index: 3;
				transition: outline 0.1s ease-out;

				&:hover,
				&:active {
					outline: 2px solid var(--color-white);
				}
			}

			&:focus-visible {
				&::-webkit-slider-thumb {
					outline: 2px solid var(--color-white);
					background-color: var(--color-black);
				}

				&::-moz-range-thumb {
					outline: 2px solid var(--color-white);
					background-color: var(--color-black);
				}
			}
		}

		.player-btn {
			width: 2.5rem;
			height: 2.5rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.row-1 {
			margin-top: 0.25rem;

			.time-progress {
				width: 100%;
				margin-inline: 0;

				&:focus-visible {
					outline: 2px solid var(--color-black) !important;
					outline-offset: 0px;
				}
			}
		}

		.row-2 {
			margin-top: 0.125rem;
			display: flex;
			justify-content: space-between;

			.left-side {
				display: flex;
				align-items: center;
				gap: 0.25rem;

				.volume-slider {
					margin-inline: 0;
					cursor: pointer;
					max-width: 6rem;

					&:focus-visible {
						outline: 2px solid var(--color-black) !important;
						outline-offset: 2px;
					}
				}
			}

			.right-side {
				display: flex;
				align-items: center;
				gap: 0.25rem;
			}
		}

		.row-3 {
			display: flex;
			justify-content: space-between;
			align-items: center;

			span {
				font-size: 0.875rem;
			}
		}
	}

	.toggle-controls-wrapper {
		margin: 0.625rem 0 0.25rem;
		display: flex;
		align-items: center;
		justify-content: end;
		gap: 0.375rem;

		label {
			font-size: 0.875rem;
			cursor: pointer;
		}

		input {
			-webkit-appearance: none;
			appearance: none;
			background-color: var(--color-white);

			margin: 0;

			height: 1.25rem;
			width: 1.25rem;
			aspect-ratio: 1;

			border: 1px solid var(--color-black);

			cursor: pointer;

			display: grid;
			place-content: center;

			&:checked:before {
				content: url('/icons/check.svg');
				display: flex;
				padding-bottom: 0.125rem;
				justify-content: center;
				width: 1.25rem;
				height: 1.25rem;
			}

			&:checked {
				background-color: var(--color-white);
			}

			&:focus-visible {
				outline: 2px solid var(--color-black);
				outline-offset: 1px;
			}
		}
	}

	video {
		margin-bottom: -0.375rem;
		border: none;
		background-color: var(--color-white);

		&.native-controls {
			max-height: calc(100% - 6.25rem); // so fullscreen doesn't cut of bottom
		}

		&.bg-black {
			&::cue {
				background-color: var(--color-black);
			}
		}
		&.bg-red {
			&::cue {
				background-color: var(--color-red);
			}
		}
		&.bg-yellow {
			&::cue {
				background-color: var(--color-yellow);
			}
		}
		&.bg-white {
			&::cue {
				background-color: var(--color-white);
			}
		}
		&.bg-blue {
			&::cue {
				background-color: var(--color-blue);
			}
		}

		// fc color
		&.fc-black {
			&::cue {
				color: var(--color-black);
			}
		}
		&.fc-red {
			&::cue {
				color: var(--color-red);
			}
		}
		&.fc-yellow {
			&::cue {
				color: var(--color-yellow);
			}
		}
		&.fc-white {
			&::cue {
				color: var(--color-white);
			}
		}
		&.fc-blue {
			&::cue {
				color: var(--color-blue);
			}
		}

		// font-size
		&.fs-small {
			&::cue {
				font-size: 1rem;
			}
		}
		&.fs-medium {
			&::cue {
				font-size: 1.3rem;
			}
		}
		&.fs-large {
			&::cue {
				font-size: 1.9rem;
			}
		}
		&.fs-larger {
			&::cue {
				font-size: 2rem;
			}
		}
	}

	@media (max-width: 22.5rem) {
		.wrapper {
			.controls {
				.row-2 {
					.volume-slider {
						max-width: 5rem;
					}
				}
			}
		}
	}
</style>
