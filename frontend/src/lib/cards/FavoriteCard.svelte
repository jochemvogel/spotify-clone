<script lang="ts">
	import type { FavoritePlaylistItem } from '$lib/types';

	import PlayButtonIcon from '$lib/assets/svg/other/play-button-icon.svelte';

	$: loadingDotsCount = 1;

	setInterval(() => {
		loadingDotsCount < 3 ? loadingDotsCount++ : (loadingDotsCount = 1);
	}, 400);

	export let card: FavoritePlaylistItem;
	export let isLoading: boolean;
</script>

{#if isLoading}
	<article class="card">
		<img src="https://scdn.jchm.dev/img/loading.gif" alt="" />
		<div class="text">
			{#if loadingDotsCount === 1}
				<p>Fetching Spotify API.</p>
			{:else if loadingDotsCount === 2}
				<p>Fetching Spotify API..</p>
			{:else}
				<p>Fetching Spotify API...</p>
			{/if}
			<div />
		</div>
	</article>
{:else}
	<a href={card.url} target="_blank">
		<article data-color={card.color} class="card" on:mouseover on:focus on:mouseleave>
			<img src={card.image} alt="" />
			<div class="text">
				<p>{card.name}</p>
				<div>
					<button aria-label="Play">
						<PlayButtonIcon />
					</button>
				</div>
			</div>
		</article>
	</a>
{/if}

<style lang="scss">
	a {
		text-decoration: none;
	}

	article {
		height: 80px;
		width: 100%;
		max-width: 440px;
		background-color: var(--color-card-bg);
		border-radius: 0.5em;
		display: flex;
		align-items: center;

		&:hover {
			cursor: pointer;
			background-color: var(--color-card-selected-bg);
			transition: background-color 0.2s ease-in;
		}

		&:hover button {
			opacity: 1;
		}

		img {
			height: 100%;
			width: 80px;
			background-color: var(--color-dark-grey);
			border-top-left-radius: 0.5em;
			border-bottom-left-radius: 0.5em;
			box-shadow: 0 0.5em 2em rgb(0 0 0 / 50%);
		}

		.text {
			color: var(--color-white);
			font-size: 1em;
			justify-content: space-between;
			align-items: center;
			display: flex;
			padding: 1em;
			flex: 1;

			p {
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: normal;
				word-break: break-word;
				line-height: 24px;
				letter-spacing: 0.15px;
				margin: 0;
				font-weight: 700;
			}
		}

		button {
			background-color: var(--color-green);
			color: var(--color-white);
			border: none;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 40px;
			width: 40px;
			opacity: 0;
			transition: opacity 0.3s ease-in, transform 0.3s cubic-bezier(0.3, 0, 0, 1);
			margin-left: 8px;
			box-shadow: 0 0.5em 0.5em rgb(0 0 0 / 30%);

			&:hover {
				transform: scale(1.06);
			}

			&:active {
				transform: scale(1);
			}
		}
	}
</style>
