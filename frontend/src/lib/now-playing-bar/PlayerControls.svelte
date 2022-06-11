<script lang="ts">
	import PlaybackBar from '../progress-bar/PlaybackBar.svelte';
	import PlayerControlsButtons from './PlayerControlsButtons.svelte';
</script>

<div class="player-controls">
	<PlayerControlsButtons />
	<PlaybackBar />
</div>

<style lang="scss">
	.player-controls {
		max-width: 45em;
		width: 40%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		flex: 1;

		@media screen and (max-width: 860px) {
			width: 100%;
		}
	}
</style>
