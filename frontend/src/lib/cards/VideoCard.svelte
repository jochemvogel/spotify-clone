<script lang="ts">
	import { isEqual } from 'lodash-es';

	import type { VideoCardType } from '$lib/types';

	import PlayButtonIcon from '$lib/assets/svg/other/play-button-icon.svelte';
	import PauseButtonIcon from '$lib/assets/svg/other/pause-button-icon.svelte';

	import { currentlySelectedCard, isCurrentlyPlaying } from '$lib/stores';

	function setCurrentTitle() {
		currentlySelectedCard.set(card);
		if ($isCurrentlyPlaying) {
			isCurrentlyPlaying.set(false);
			setTimeout(() => {
				isCurrentlyPlaying.set(true);
			}, 100);
		} else {
			isCurrentlyPlaying.set(true);
		}
	}

	function pauseVideo() {
		isCurrentlyPlaying.set(false);
	}

	export let card: VideoCardType;

	$: isCurrentCard = isEqual($currentlySelectedCard, card);
	$: isCurrentCardPlaying = $isCurrentlyPlaying && isCurrentCard;
</script>

<article>
	<div>
		<div class="img">
			<img src={card.img} alt="" />
			<div class="btn-container">
				{#if isCurrentCardPlaying}
					<button
						aria-label="Pause"
						data-title={card.title}
						on:click={pauseVideo}
						class="currently-playing"
					>
						<PauseButtonIcon />
					</button>
				{:else}
					<button aria-label="Play" data-title={card.title} on:click={setCurrentTitle}>
						<PlayButtonIcon />
					</button>
				{/if}
			</div>
		</div>
		<div class="text">
			<h4>{card.title}</h4>
			<p>{card.description}</p>
		</div>
	</div>
</article>

<style lang="scss">
	article {
		background: var(--color-black-components);
		border-radius: 4px;
		flex: 1;
		padding: 1em;
		position: relative;
		transition: background-color 0.3s ease;
		width: 100%;

		&:hover {
			cursor: pointer;
			background-color: var(--color-card-hover);
			transition: background-color 0.2s ease-in;
		}

		&:hover button,
		.currently-playing {
			opacity: 1;
			transform: translateY(0);
		}

		button:active {
			transform: scale(0.9);
		}

		& > div {
			height: 100%;
		}

		.img {
			box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
			padding-bottom: 100%;
			position: relative;
			width: 100%;
			img {
				border-radius: 2px;
				height: 100%;
				left: 0;
				position: absolute;
				top: 0;
				width: 100%;
				display: block;
			}
		}

		.text {
			color: var(--color-white);
		}

		h4 {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: 1em;
			line-height: 1.5em;
			margin-top: 1em;
		}

		p {
			color: var(--color-light-grey);
			font-size: 14px;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			display: -webkit-box;
			margin-top: 4px;
			overflow: hidden;
			text-overflow: ellipsis;
			line-height: 1.2em;
		}
	}

	.btn-container {
		position: absolute;
		right: 5%;
		bottom: 5%;
	}
	button {
		background-color: var(--color-green);
		color: var(--color-white);
		border: none;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 2.5em;
		width: 2.5em;
		opacity: 0;
		transition: all 0.3s ease;
		margin-left: 0.5em;
		box-shadow: 0 0.5em 0.5em rgb(0 0 0 / 30%);
		transform: translateY(10px);

		&:hover {
			transform: scale(1.06);
		}

		&:active {
			transform: scale(1);
		}
	}

	@media screen and (max-width: 860px) {
		article {
			flex: 0 0 auto;
			height: 100%;
			min-width: 0;
			padding: 0;
			margin-bottom: 1em;
			position: relative;
			width: 40%;
			background: none;

			&:last-child {
				margin-right: 4vw;
			}

			.img {
				box-shadow: none;
			}

			&:hover {
				background: none;
			}
		}

		.text {
			text-align: center;
			h4 {
				font-size: 2.8vw;
			}
			p {
				display: none;
			}
		}
	}

	@media screen and (max-width: 480px) {
		.text h4 {
			font-size: 13px;
		}
	}
</style>
