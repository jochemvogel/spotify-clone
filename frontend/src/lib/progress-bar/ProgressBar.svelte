<script>
	import { videoVolume, currentVideoDuration, currentVideoTime } from '$lib/stores';

	// Prefer to remove this part, but haven't figured out (yet) how to do it.
	$: {
		if (type === 'volume') {
			videoVolume.set(bindValue);
		} else {
			let currentVidTime = bindValue * $currentVideoDuration;
			currentVideoTime.set(currentVidTime);
		}
	}

	export let bindValue;
	export let currentCard;
	export let type;

	$: transformPercentage = (bindValue * 100).toFixed(1);
</script>

<div class="progress-bar {currentCard === 'null' ? 'disabled' : ''}">
	<div class="progress-bar__container" style="--progress-bar-transform: {transformPercentage}%">
		<input type="range" min="0" max="1" step="0.01" id="range" bind:value={bindValue} />
		<div class="progress-bar__user-selector" />
	</div>
</div>

<style lang="scss">
	.progress-bar {
		width: 100%;
		height: 12px;
		position: relative;
		border-radius: 50%;
		color: var(--color-dark-grey);
		display: flex;

		&.disabled {
			opacity: 0.2;

			&:hover {
				cursor: not-allowed;

				input[type='range']::-moz-range-progress {
					background-color: none;
				}

				input[type='range']::-ms-fill-lower {
					background-color: none;
				}

				input[type='range']::-webkit-slider-thumb {
					box-shadow: none;
				}

				input[type='range']::-ms-thumb {
					box-shadow: none;
				}

				.progress-bar__user-selector {
					display: none;
				}
			}

			input[type='range']::-webkit-slider-thumb {
				box-shadow: none;
			}

			input[type='range']::-ms-thumb {
				box-shadow: none;
			}

			input[type='range']::-moz-range-progress {
				background-color: transparent;
			}
		}

		&__container {
			--progress-bar-height: 4px;
			--progress-bar-radius: calc(var(--progress-bar-height) / 2);
			--progress-bar-transform: 0%;
			width: 100%;
			overflow: hidden;
			display: flex;
			align-items: center;

			&:hover {
				input[type='range']::-moz-range-progress {
					background-color: var(--color-green);
				}

				input[type='range']::-ms-fill-lower {
					background-color: var(--color-green);
				}

				input[type='range']::-webkit-slider-thumb {
					box-shadow: -355px 0 0 355px var(--color-green);
				}

				input[type='range']::-ms-thumb {
					box-shadow: -355px 0 0 355px var(--color-green);
				}

				.progress-bar__user-selector {
					display: block;
				}
			}
		}

		&__user-selector {
			background-color: var(--color-white);
			border: 0;
			border-radius: 50%;
			box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
			height: 0.75em;
			width: 0.75em;
			margin-left: -6px;
			position: absolute;
			left: var(--progress-bar-transform);
			top: 50%;
			transform: translateY(-50%);
			display: none;
			pointer-events: none;
		}
	}

	input[type='range'] {
		overflow: hidden;
		height: 4px;
		border-radius: 2px;
		width: 100%;
		-webkit-appearance: none;
		background-color: var(--color-dark-grey);
	}

	input[type='range']::-webkit-slider-thumb {
		width: 0;
		height: 0;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		box-shadow: -355px 0 0 355px var(--color-light-grey);
	}

	input[type='range']::-moz-range-thumb {
		width: 0;
		height: 0;
	}

	input[type='range']::-ms-thumb {
		width: 0;
		height: 0;
	}

	input[type='range']::-moz-range-progress {
		background-color: var(--color-light-grey);
	}

	input[type='range']::-ms-fill-lower {
		background-color: var(--color-light-grey);
	}

	input[type='range']::-moz-range-track {
		background-color: var(--color-dark-grey);
	}
	input[type='range']::-ms-fill-upper {
		background-color: var(--color-dark-grey);
	}
</style>
