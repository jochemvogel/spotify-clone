<script lang="ts">
	import CoverArtWidget from './CoverArtWidget.svelte';
	import PlayerControls from './PlayerControls.svelte';
	import ExtraControls from './ExtraControls.svelte';

	import { currentlySelectedCard } from '$lib/stores';
</script>

<div class="now-playing-bar {$currentlySelectedCard === 'null' ? 'idle' : ''}">
	<CoverArtWidget />
	<PlayerControls />
	<ExtraControls />
</div>

<style lang="scss">
	.now-playing-bar {
		user-select: none;
		position: fixed;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 1em;
		min-height: 92px;
		height: auto;
		min-width: 620px;
		width: 100%;
		background-color: var(--color-black-components);
		bottom: 0;
		left: 0;
		grid-area: now-playing-bar;
		border-top: 1px solid var(--color-card-hover);

		@media screen and (max-width: 860px) {
			bottom: 52px;
			min-width: 0;
			display: flex;
		}
	}

	.idle {
		@media screen and (max-width: 860px) {
			display: none;
		}
	}
</style>
