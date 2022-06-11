<script lang="ts">
	import NextButtonIcon from '$lib/assets/svg/now-playing-bar/next-button-icon.svelte';
	import PauseButtonIcon from '$lib/assets/svg/now-playing-bar/pause-button-icon.svelte';
	import PlayButtonIcon from '$lib/assets/svg/other/play-button-icon.svelte';
	import PrevButtonIcon from '$lib/assets/svg/now-playing-bar/prev-button-icon.svelte';

	import VidBackButtonIcon from '$lib/assets/svg/now-playing-bar/vid-back-button-icon.svelte';
	import VidForwardButtonIcon from '$lib/assets/svg/now-playing-bar/vid-forward-button-icon.svelte';

	import {
		isCurrentlyPlaying,
		currentlySelectedCard,
		currentVideoTime,
		videoCardsArr
	} from '$lib/stores';

	function toggleIsCurrentlyPlaying() {
		isCurrentlyPlaying.set(!$isCurrentlyPlaying);
	}

	function fastForwardVideoTime() {
		currentVideoTime.update((n) => n + 15);
	}

	function rewindVideoTime() {
		currentVideoTime.update((n) => n - 15);
	}

	$: isCtrlBtnDisabled = $currentlySelectedCard === 'null' && !$isCurrentlyPlaying;

	/**
	 * Sets the next card index. This can be the prev or the next card
	 *
	 * @param {string} type - 'next' or 'prev'
	 */

	function setCardIndex(type: string) {
		const currentlySelectedCardIndex = getCurrentSelectedCardIndex();
		const videoCardsArrLength = $videoCardsArr.length;
		let nextCardIndex =
			type === 'next'
				? setNextCardIndex(currentlySelectedCardIndex, videoCardsArrLength)
				: setPrevCardIndex(currentlySelectedCardIndex, videoCardsArrLength);

		currentlySelectedCard.set($videoCardsArr[nextCardIndex]);
		isCurrentlyPlaying.set(true);
	}

	/**
	 *
	 * Gets the index of the currently selected card and returns it
	 *
	 */
	function getCurrentSelectedCardIndex(): number {
		const currentlySelectedCardTitle = $currentlySelectedCard.title;
		return $videoCardsArr.findIndex((x) => x.title === currentlySelectedCardTitle);
	}

	/**
	 * Sets the index of the next card
	 *
	 * @param {number} currentIndex - Index of the currently selected card (before click)
	 * @param {number} arrLength - Length of the array
	 *
	 * @returns {number} The index of the next card
	 */
	function setNextCardIndex(currentIndex: number, arrLength: number): number {
		let nextCardIndex = currentIndex + 1;

		if (nextCardIndex >= arrLength) {
			nextCardIndex = 0;
		}

		return nextCardIndex;
	}

	/**
	 * Sets the index of the previous card
	 *
	 * @param {number} currentIndex - Index of the currently selected card (before click)
	 * @param {number} arrLength - Length of the array
	 *
	 * @returns {number} The index of the previous card
	 */
	function setPrevCardIndex(currentIndex: number, arrLength: number): number {
		let prevCardIndex = currentIndex - 1;

		if (prevCardIndex < 0) {
			prevCardIndex = arrLength - 1;
		}

		return prevCardIndex;
	}
</script>

<div class="controls-buttons">
	<div class="controls-buttons__left">
		<button
			aria-label="Rewind 15 sec from video"
			class="controls-buttons__rewind {isCtrlBtnDisabled === true ? 'disabled' : ''}"
			on:click={rewindVideoTime}
		>
			<VidBackButtonIcon />
		</button>
		<button
			aria-label="Previous video"
			class="controls-buttons__prev {isCtrlBtnDisabled === true ? 'disabled' : ''}"
			on:click={() => setCardIndex('prev')}
		>
			<PrevButtonIcon />
		</button>
	</div>
	{#if $isCurrentlyPlaying}
		<button aria-label="Pause" class="controls-buttons__pause" on:click={toggleIsCurrentlyPlaying}>
			<PauseButtonIcon />
		</button>
	{:else}
		<button
			aria-label="Play"
			class="controls-buttons__pause {$currentlySelectedCard === 'null' ? 'disabled' : ''}"
			on:click={toggleIsCurrentlyPlaying}
		>
			<PlayButtonIcon />
		</button>
	{/if}
	<div class="controls-buttons__right">
		<button
			aria-label="Next video"
			class="controls-buttons__next {isCtrlBtnDisabled === true ? 'disabled' : ''}"
			on:click={() => setCardIndex('next')}
		>
			<NextButtonIcon />
		</button>
		<button
			aria-label="Fast forward 15 sec from video"
			class="controls-buttons__forward {isCtrlBtnDisabled === true ? 'disabled' : ''}"
			on:click={fastForwardVideoTime}
		>
			<VidForwardButtonIcon />
		</button>
	</div>
</div>

<style lang="scss">
	button {
		border: none;
		background-color: transparent;
		height: 32px;
		width: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.controls-buttons {
		display: flex;
		flex-flow: row nowrap;
		gap: 0.5em;
		width: 100%;
		margin-bottom: 12px;

		@supports not (gap: 0.5em) {
			div {
				margin: 0 0.25em;
			}
		}

		@media screen and (max-width: 860px) {
			width: auto;
		}

		&__left {
			display: flex;
			flex: 1;
			gap: 0.5em;
			justify-content: flex-end;
		}

		&__pause {
			transition: transform 50ms;
			background-color: var(--color-white);
			fill: var(--color-black);
			border-radius: 50%;

			&:hover {
				transform: scale(1.05);
			}
		}

		&__right {
			display: flex;
			flex: 1;
			gap: 0.5em;
			justify-content: flex-start;
		}
		&__left,
		&__right {
			fill: var(--color-light-grey);

			button:hover {
				fill: var(--color-white);
			}
		}

		&__rewind,
		&__forward {
			@media screen and (max-width: 860px) {
				display: none;
			}
		}
	}
</style>
