<script lang="ts">
	import VolumeButtonIcon from '$lib/assets/svg/now-playing-bar/volume-button-icon.svelte';
	import VolumeButtonMutedIcon from '$lib/assets/svg/now-playing-bar/volume-button-muted-icon.svelte';
	import ProgressBar from './ProgressBar.svelte';

	import { videoVolume, currentlySelectedCard } from '$lib/stores';
	import VolumeButtonLowIcon from '$lib/assets/svg/now-playing-bar/volume-button-low-icon.svelte';
	import VolumeButtonMediumIcon from '$lib/assets/svg/now-playing-bar/volume-button-medium-icon.svelte';

	let prevVolume: number; // Volume before the muted state

	/**
	 * Toggles the volume (0 or prevVolume)
	 */
	function toggleSound() {
		if ($currentlySelectedCard === 'null') {
			return;
		}

		if ($videoVolume !== 0) {
			prevVolume = $videoVolume;
		}

		let n = $videoVolume > 0 ? 0 : prevVolume;
		videoVolume.set(n);
	}
</script>

<div class="volume-bar">
	<button
		aria-label="Toggle sound"
		class="volume-bar__volume-button {$currentlySelectedCard === 'null' ? 'disabled' : ''}"
		on:click={toggleSound}
	>
		{#if $videoVolume === 0}
			<VolumeButtonMutedIcon />
		{:else if $videoVolume < 0.33}
			<VolumeButtonLowIcon />
		{:else if $videoVolume < 0.66}
			<VolumeButtonMediumIcon />
		{:else}
			<VolumeButtonIcon />
		{/if}
	</button>
	<div class="volume-bar__progress-container">
		<ProgressBar bindValue={$videoVolume} currentCard={$currentlySelectedCard} type="volume" />
	</div>
</div>

<style lang="scss">
	button {
		background-color: transparent;
		fill: var(--color-light-grey);
		display: flex;
		justify-content: center;
		margin-right: 0.25em;

		&:hover {
			fill: var(--color-white);
		}
	}

	.volume-bar {
		display: flex;
		align-items: center;
		flex: 0 1 125px;

		&__progress-container {
			--progress-bar-transform: 0%;
			height: 12px;
			position: relative;
			width: 100%;
			display: flex;
			align-items: center;
		}
	}
</style>
