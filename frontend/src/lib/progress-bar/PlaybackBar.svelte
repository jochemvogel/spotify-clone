<script lang="ts">
	import ProgressBar from './ProgressBar.svelte';

	import { currentVideoDuration, currentVideoTime, currentlySelectedCard } from '$lib/stores';

	import { formatSeconds } from '$lib/utils';

	const NaNPreventer = 0; // 0 divided by 0 makes NaN. This will make it return 0 instead of NaN

	$: bindValue = $currentVideoTime / $currentVideoDuration || NaNPreventer;

	$: {
		let currentVidTime = bindValue * $currentVideoDuration;
		currentVideoTime.set(currentVidTime);
	}
</script>

<div class="playback-bar">
	<p class="playback-bar__time-elapsed">{formatSeconds($currentVideoTime)}</p>
	<div class="playback-bar__progress-container">
		<ProgressBar {bindValue} currentCard={$currentlySelectedCard} type="playback" />
	</div>
	<p class="playback-bar__time-duration">{formatSeconds($currentVideoDuration)}</p>
</div>

<style lang="scss">
	p {
		font-size: 0.6875em;
		color: var(--color-light-grey);
	}

	.playback-bar {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		gap: 0.5em;
		width: 100%;

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
