<script lang="ts">
	import {
		currentlySelectedCard,
		isCurrentlyPlaying,
		isVideoVisible,
		currentVideoTime,
		currentVideoDuration,
		videoVolume,
		videoCardsArr
	} from '$lib/stores';
	import CloseButtonIcon from '$lib/assets/svg/other/close-button-icon.svelte';
	import FullscreenButtonIcon from './assets/svg/now-playing-bar/fullscreen-button-icon.svelte';

	import { getCardIndex } from '$lib/utils';

	let video: HTMLVideoElement;
	let ended: boolean;
	let paused: boolean;

	/* === DRAG VIDEO FUNCTIONALITY === */
	export let right = 0;
	export let bottom = 95;

	let moving = false;

	function onMouseDown() {
		moving = true;
	}

	function onMouseUp() {
		moving = false;
	}

	function onMouseMove(e) {
		if (moving) {
			if (right >= 0) {
				right -= e.movementX;
			} else {
				right = 0;
			}

			if (bottom >= 0) {
				bottom -= e.movementY;
			} else {
				bottom = 0;
			}
		}
	}

	/* ============================================ */

	$: isVideo = $isVideoVisible && $currentlySelectedCard.video !== undefined;

	$: paused ? isCurrentlyPlaying.set(false) : isCurrentlyPlaying.set(true);

	$: if (ended) {
		setTimeout(() => {
			setNextCardIndex();
		}, 0);
	}

	$: if (!$isCurrentlyPlaying) {
		video.pause();
	}

	$: if ($isCurrentlyPlaying) {
		setTimeout(() => {
			video.play();
		}, 0);
	}

	function disableVideo() {
		isVideoVisible.set(false);
	}

	/**
	 * Sets the index of the next card
	 */
	function setNextCardIndex(): number {
		let nextCardIndex = getCardIndex($currentlySelectedCard, $videoCardsArr) + 1;

		if (nextCardIndex >= $videoCardsArr.length) {
			nextCardIndex = 0;
		}

		currentlySelectedCard.set($videoCardsArr[nextCardIndex]);
		isCurrentlyPlaying.set(true);
	}

	/* === VIDEO WIDTH/HEIGHT FUNCTIONALITY === */
	let videoAspectRatio = 1920 / 1080;
	$: videoPlayerWidth = 480;
	$: videoPlayerHeight = videoPlayerWidth / videoAspectRatio;

	$: videoPlayerMinWidth = 320;
	$: videoPlayerMinHeight = videoPlayerMinWidth / videoAspectRatio;

	function increaseWidth() {
		videoPlayerWidth *= 1.2;
	}

	function decreaseWidth() {
		videoPlayerWidth /= 1.2;
	}

	/* ============================================ */

	function toggleVideoFullscreen() {
		if (video.mozRequestFullScreen) {
			// Firefox
			video.mozRequestFullScreen();
		} else if (video.webkitRequestFullScreen) {
			// Safari
			video.webkitRequestFullScreen();
		} else {
			video.requestFullscreen().catch((err) => {
				alert(err);
			});
		}
	}
</script>

<div
	class="video-player {isVideo === false ? 'hidden' : ''}"
	on:mousedown={onMouseDown}
	style="right: {right}px; bottom: {bottom}px; --video-player-width: {videoPlayerWidth}px; --video-player-height: {videoPlayerHeight}px; --video-player-min-width: {videoPlayerMinWidth}px; --video-player-min-heigth: {videoPlayerMinHeight}px;"
>
	<div class="video-player__buttons">
		<button aria-label="Disable video" on:click={disableVideo}>
			<CloseButtonIcon />
		</button>
		<button aria-label="Toggle fullscreen" on:click={toggleVideoFullscreen}>
			<FullscreenButtonIcon />
		</button>
		{#if videoPlayerWidth > videoPlayerMinWidth}
			<button aria-label="Decrease size" on:click={decreaseWidth}> - </button>
		{/if}
		<button aria-label="Increase size" on:click={increaseWidth}> + </button>
	</div>

	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		src={$currentlySelectedCard.video}
		autoplay
		bind:this={video}
		bind:currentTime={$currentVideoTime}
		bind:duration={$currentVideoDuration}
		bind:volume={$videoVolume}
		bind:ended
		bind:paused
	>
		Your browser does not support the video tag.
	</video>
</div>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style lang="scss">
	.video-player {
		height: var(--video-player-height);
		width: var(--video-player-width);
		min-width: 320px;
		min-height: 180px;
		position: fixed;
		bottom: 10%;
		right: 0;
		visibility: visible;

		&__buttons {
			display: none;
			position: absolute;
			width: 100%;
			flex-direction: row-reverse;
		}

		&:hover {
			outline: 2px solid rgb(41, 114, 209);
		}

		&:hover &__buttons {
			display: flex;
		}

		&:active {
			cursor: grabbing;
		}
	}

	.hidden {
		visibility: hidden;
	}

	button {
		margin: 0.5em 0.25em;
		background-color: rgba(0, 0, 0, 0.6);
		border-radius: 50%;
		padding: 10px;
		border: none;
		fill: var(--color-white);
		display: none;
		color: var(--color-white);
		font-size: 2em;
		width: 1.25em;
		height: 1.25em;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	video {
		width: 100%;
		height: 100%;
	}
</style>
