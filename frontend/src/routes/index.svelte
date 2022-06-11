<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const prerender = true;

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('index.json');

		if (res.ok) {
			const result = await res.json();

			const videoCard = result.videoCards;

			return {
				props: {
					videoCard
				}
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script lang="ts">
	import type { VideoCardType } from '$lib/types';

	import FavoriteCard from '$lib/cards/FavoriteCard.svelte';
	import VideoCard from '$lib/cards/VideoCard.svelte';
	import TopBackground from '$lib/TopBackground.svelte';
	import PageHeader from '$lib/PageHead.svelte';

	import { fetchFavoritesData } from '$lib/utils';

	import { videoCardsArr, favoritePlaylistsArr } from '$lib/stores';
	import Error from './__error.svelte';

	let selectedCardColor: string;

	/**
	 * Gets the color of the current card and sets it to selectedCardColor
	 * @param event - MouseEvent
	 */
	function getColor(event) {
		const currentCard = event.currentTarget;
		const currentColor = currentCard.getAttribute('data-color');
		selectedCardColor = currentColor;
	}

	/**
	 * Resets the color (on mouse leave) to the old color
	 */
	function resetColor() {
		selectedCardColor = 'hsl(40, 19%, 50%)';
	}

	/**
	 * Fetches the favorites data if the store is empty (is not done already)
	 */
	if ($favoritePlaylistsArr.length === 0) {
		fetchFavoritesData().then((data) => {
			favoritePlaylistsArr.set(data);
		});
	}

	export let videoCard: Array<VideoCardType>;

	videoCardsArr.set(videoCard);
</script>

<PageHeader title="Home" />

<TopBackground {selectedCardColor} />

<main>
	<section class="fav-section">
		<div class="fav-section__title">
			<h2>Jochem's favorites</h2>
		</div>
		<div class="fav-section__articles">
			{#if $favoritePlaylistsArr.length !== 0}
				{#each $favoritePlaylistsArr as card}
					<FavoriteCard
						{card}
						isLoading={false}
						on:mouseover={getColor}
						on:mouseleave={resetColor}
					/>
				{/each}
			{:else}
				{#each Array(10) as card, i}
					<FavoriteCard
						{card}
						isLoading={true}
						on:mouseover={getColor}
						on:mouseleave={resetColor}
					/>
				{/each}
			{/if}
		</div>
	</section>
	<section class="vid-section">
		<div class="vid-section__title">
			<h3>Timelapses</h3>
		</div>
		<div class="vid-section__articles">
			{#each videoCard as card}
				<VideoCard {card} />
			{/each}
		</div>
	</section>
</main>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		margin-top: 24px;
	}

	h2 {
		font-size: 32px;
		margin: 0;
	}

	.fav-section__title {
		margin-top: 3em;
		margin-bottom: 1em;
	}

	.fav-section__articles {
		--minColumnWidth: 300px;
		--cardHeight: 80px;
		--cardRows: 2;
		--rowGap: 16px;
		display: grid;
		grid-auto-rows: auto;
		grid-template-rows: 1fr;
		grid-template-columns: repeat(auto-fill, minmax(var(--minColumnWidth), 1fr));
		grid-gap: 24px;
		row-gap: var(--rowGap);
		height: calc(var(--cardHeight) * var(--cardRows) + var(--rowGap));
		overflow-y: hidden;
		@media screen and (max-width: 1613px) {
			--minColumnWidth: 270px;
		}

		@media screen and (max-width: 913px) {
			--minColumnWidth: 240px;
		}

		@media screen and (max-width: 860px) {
			margin-right: 1em;
		}
	}

	.vid-section__title {
		margin-bottom: 1em;

		@media screen and (max-width: 860px) {
			margin-top: 1em;
		}
	}

	.vid-section__articles {
		display: grid;
		grid-auto-rows: 0;
		grid-template-rows: 1fr;
		overflow-y: hidden;
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		grid-gap: 24px;

		@media screen and (max-width: 860px) {
			grid-gap: 4vw;
			display: flex;
			flex-flow: row nowrap;
			overflow: auto hidden;
			width: 100%;
		}
	}
</style>
