<script lang="ts">
	import ChevronLeft from '$lib/assets/svg/top-bar/chevron-left.svelte';
	import ChevronRight from '$lib/assets/svg/top-bar/chevron-right.svelte';

	import { onMount } from 'svelte';

	onMount(() => {
		const background = document.getElementById('background');

		document.addEventListener('scroll', () => {
			const opacityBasedOnScroll = (window.scrollY * 0.01).toString();
			const isOpacitySmallerThan1 = window.scrollY <= 100;
			let backgroundOpacity = isOpacitySmallerThan1 ? opacityBasedOnScroll : '1';

			background.style.opacity = backgroundOpacity;
		});
	});
</script>

<header>
	<div id="background" />
	<div class="controls-container">
		<button aria-label="Previous page" class="controls">
			<ChevronLeft />
		</button>
		<button aria-label="Next page" class="controls">
			<ChevronRight />
		</button>
	</div>
	<a href="https://volt.fm/jochem" class="user-widget-link" target="_blank">
		<img src="/img/jochemvogel_profile-picture.png" alt="" />
		<p>jochemvogel</p>
	</a>
</header>

<style lang="scss">
	header {
		height: 60px;
		width: 100%;
		max-width: calc(100vw - 209px);
		position: fixed;
		top: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1em 2em;

		@media screen and (max-width: 860px) {
			width: 100%;
			max-width: 100%;
			justify-content: flex-end;
		}
	}

	p {
		color: var(--color-white);
	}

	.controls-container {
		display: flex;
		white-space: no-wrap;
	}

	.controls {
		background-color: var(--color-black);
		cursor: not-allowed;
		color: var(--color-white);
		opacity: 0.6;
		transform: scale(1);
		align-items: center;
		border: none;
		border-radius: 50%;
		display: flex;
		height: 32px;
		justify-content: center;
		width: 32px;
		margin-right: 16px;

		&:active {
			transform: none;
		}
	}

	.user-widget-link {
		display: flex;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.7);
		border-radius: 2em;
		gap: 0.75em;
		height: 2.5em;
		padding-right: 1.15em;
		padding-left: 0;
		border: none;
		text-decoration: none;
		font-size: 13px;

		&:hover {
			cursor: pointer;
			background-color: var(--color-card-hover);
		}
	}

	img {
		height: 28px;
		width: 28px;
		background-color: var(--color-green);
		border-radius: 50%;
		margin-left: 2px;
	}

	@media screen and (max-width: 860px) {
		.controls-container {
			display: none;
		}
	}

	#background {
		bottom: 0;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		background-color: hsl(0, 0%, 2%);
		opacity: 0;
	}
</style>
