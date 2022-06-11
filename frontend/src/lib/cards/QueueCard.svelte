<script lang="ts">
	import { formatSeconds } from '$lib/utils';

	import type { VideoCardType } from '$lib/types';

	import { isCurrentlyPlaying, currentlySelectedCard } from '$lib/stores';

	import PauseIcon from '$lib/assets/svg/queue/pause-icon.svelte';
	import PlayIcon from '$lib/assets/svg/queue/play-icon.svelte';

	export let currentCard: VideoCardType | string;
	export let index: number;
	export let isActive: boolean;
	export let isPlaying: boolean;

	/**
	 * @TODO Description and renaming function
	 */
	function toggleIsPlaying() {
		const isNewCard = $currentlySelectedCard.title !== currentCard.title;

		isNewCard
			? currentlySelectedCard.set(currentCard)
			: isCurrentlyPlaying.set(!$isCurrentlyPlaying);
	}
</script>

<article class="queue-item" data-title={$currentlySelectedCard.title} on:dblclick={toggleIsPlaying}>
	{#if isActive && isPlaying}
		<img
			class="queue-item__img queue-item__control"
			alt=""
			src="https://open.scdn.co/cdn/images/equaliser-animated-green.f93a2ef4.gif"
		/>
		<button class="queue-item__on-hover" on:click={toggleIsPlaying}>
			<PauseIcon />
		</button>
	{:else}
		<p class="queue-item__index queue-item__control {isActive ? 'active' : ''}">{index}</p>
		<button class="queue-item__on-hover" on:click={toggleIsPlaying}>
			<PlayIcon />
		</button>
	{/if}
	<div class="queue-item__content">
		<img src={currentCard.img} alt="" />
		<div class="queue-item__text">
			<p class={isActive ? 'active' : ''}>{currentCard.title}</p>
			<small>
				{currentCard.artist}
			</small>
		</div>
	</div>
	<div class="queue-item__album">
		<a href="albums/timelapses" target="_blank">
			{currentCard.album}
		</a>
	</div>
	<div class="queue-item__total-duration" on:click={toggleIsPlaying}>
		<p>{formatSeconds(currentCard.duration)}</p>
	</div>
</article>

<style lang="scss">
	.queue-item {
		position: relative;
		display: grid;
		grid-gap: 1em;
		justify-items: baseline;
		align-items: center;
		padding: 1em;
		grid-template-columns: 1em 4fr 2fr minmax(7.5em, 1fr);
		border-radius: 4px;

		&__on-hover {
			display: none;
			background: none;
			color: var(--color-white);
			justify-content: center;
			align-items: center;
			padding-left: 0.2em;
		}

		&:hover {
			background-color: var(--color-card-hover);
			cursor: default;

			.queue-item__control {
				display: none;
			}

			.queue-item__on-hover {
				display: flex;
			}
		}

		&__img {
			width: 14px;
			height: 14px;
		}

		&__content {
			display: flex;
			align-items: center;
			justify-self: start;

			img {
				background-color: var(--color-card-hover);
				height: 2.5em;
				width: 2.5em;
				margin-right: 1em;
				object-fit: cover;
			}
		}

		&__text {
			padding-right: 0.5em;

			p {
				justify-self: start;
				overflow: hidden;
				text-overflow: ellipsis;
				line-height: 1.5em;
			}

			small {
				color: var(--color-light-grey);
				font-size: 14px;
				line-height: 16px;
				text-decoration: none;

				&:hover {
					text-decoration: underline;
					cursor: not-allowed;
				}
			}
		}

		&__album {
			display: flex;
			justify-self: start;
			align-items: center;

			a {
				color: var(--color-light-grey);
				font-size: 14px;
				font-weight: 400;
				letter-spacing: normal;
				line-height: 16px;
				text-transform: none;
				text-decoration: none;

				&:hover {
					text-decoration: underline;
				}
			}
		}

		&__total-duration {
			align-items: center;
			display: flex;
			justify-self: end;

			p {
				color: var(--color-light-grey);
				margin-right: 16px;
				display: flex;
				justify-content: flex-end;
				font-size: 14px;
				font-weight: 400;
				letter-spacing: normal;
				line-height: 16px;
				text-transform: none;
			}
		}
	}

	.active {
		color: var(--color-green);
	}
</style>
