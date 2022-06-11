<script lang="ts">
	import { page } from '$app/stores';
	import { currentlySelectedCard } from '$lib/stores';

	import VolumeBar from '$lib/progress-bar/VolumeBar.svelte';

	import QueueButtonIcon from '$lib/assets/svg/now-playing-bar/queue-button-icon.svelte';

	$: pathName = $page.path;

	function toggleQueueView() {
		if (pathName === '/queue') {
			window.history.back();
		}
	}
</script>

<div class="extra-controls-container">
	<div class="extra-controls">
		<div>
			<div class="extra-controls__button-wrapper">
				<a
					class="extra-controls__queue-button {pathName === '/queue'
						? 'active'
						: ''} {$currentlySelectedCard === 'null' ? 'disabled' : ''}"
					href="/queue"
					on:click={toggleQueueView}
				>
					<QueueButtonIcon />
				</a>
			</div>
		</div>
		<VolumeBar />
	</div>
</div>

<style lang="scss">
	a {
		background-color: transparent;
		fill: var(--color-light-grey);

		&:hover {
			fill: var(--color-white);
			transform: scale(1.06);
		}
	}

	.extra-controls-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		min-width: 180px;
		width: 30%;
		flex: 1;

		@media screen and (max-width: 860px) {
			display: none;
		}
	}

	.extra-controls__button-wrapper {
		position: relative;
	}

	.extra-controls {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-grow: 1;
		gap: 0.25em;
	}

	.active {
		fill: var(--color-green);

		&:hover {
			fill: var(--color-green);
		}

		&:after {
			background-color: var(--color-green);
			border-radius: 50%;
			bottom: -15%;
			content: '';
			height: 4px;
			width: 4px;
			left: 50%;
			position: absolute;
			transform: translateX(-50%);
		}
	}

	.disabled {
		opacity: 0.2;

		&:hover {
			cursor: not-allowed;
		}
	}
</style>
