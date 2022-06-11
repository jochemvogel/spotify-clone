<script lang="ts">
	import VideoToggleButtonIcon from '$lib/assets/svg/now-playing-bar/video-toggle-button-icon.svelte';
	import { currentlySelectedCard, isVideoVisible } from '$lib/stores';

	function toggleVideoVisibility() {
		isVideoVisible.set(!$isVideoVisible);
	}
</script>

<div class="cover-art-widget {$currentlySelectedCard === 'null' ? 'hidden' : ''}">
	<img src={$currentlySelectedCard.img} alt="Cover art" />
	<div class="cover-art-widget__text">
		<p>{$currentlySelectedCard.title}</p>
		<small>{$currentlySelectedCard.artist}</small>
	</div>
	<div class="control-button-wrapper">
		<button
			aria-label="Toggle video visibility"
			on:click={toggleVideoVisibility}
			class={$isVideoVisible === true ? 'active' : ''}
		>
			<VideoToggleButtonIcon />
		</button>
	</div>
</div>

<style lang="scss">
	.cover-art-widget {
		display: flex;
		min-width: 180px;
		width: 30%;

		img {
			height: 56px;
			width: 56px;
			box-shadow: 0 0 10px rgb(0 0 0 / 30%);
		}

		&__text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin: 0.75em;

			p {
				font-size: 14px;
				color: var(--color-white);
			}

			small {
				color: var(--color-light-grey);
				font-size: 11px;
				margin: 0;
			}

			p:hover,
			small:hover {
				text-decoration: underline;
				color: var(--color-white);
				cursor: pointer;
			}
		}
	}

	.control-button-wrapper {
		position: relative;
		display: flex;
		justify-content: center;

		@media screen and (max-width: 860px) {
			display: none;
		}
	}

	button {
		background-color: transparent;
		border: none;
		fill: var(--color-light-grey);
		display: flex;
		justify-content: center;
		align-items: center;

		&:hover {
			fill: var(--color-green);
		}
	}

	.active {
		fill: var(--color-green);
	}

	.hidden {
		visibility: hidden;
	}

	@media screen and (max-width: 860px) {
		.cover-art-widget {
			min-width: 150px;
		}
		.cover-art-widget img {
			display: none;
		}

		// .cover-art-widget__text {
		// 	white-space: nowrap;
		// 	display: flex;
		// 	flex-direction: row;
		// 	justify-content: center;
		// 	align-items: center;
		// 	width: 100%;
		// }
	}
</style>
