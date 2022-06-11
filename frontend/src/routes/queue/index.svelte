<script lang="ts">
	import {
		currentlySelectedCard,
		videoCardsArr,
		isCurrentlyPlaying,
		queueVideoCardsArr
	} from '$lib/stores';

	import { getCardIndex } from '$lib/utils';
	import type { VideoCardType } from '$lib/types';

	import QueueCard from '$lib/cards/QueueCard.svelte';

	/* ==================================================== */

	queueVideoCardsArr.set($videoCardsArr); // Copy the array in a new writable
	const currentCardIndex = getCardIndex($currentlySelectedCard, $queueVideoCardsArr);

	let lowerIndexCards = setLowerIndexCardsArr();
	let higherIndexCards = setHigherIndexCardsArr();

	// Add lowerIndexCards array to the higherIndexCards
	queueVideoCardsArr.set(higherIndexCards.concat(lowerIndexCards));

	// Remove current card from array
	removeCurrentCardFromArray();

	let previousCard = $currentlySelectedCard;

	// Check if next or previous card is clicked (change detected)
	$: if ($currentlySelectedCard !== previousCard) {
		removeCurrentCardFromArray();

		// Push the previous card to the existing array (it will become the last item)
		$queueVideoCardsArr.push(previousCard);

		// Set the current card as the value of the previousCard variable (can be used later)
		previousCard = $currentlySelectedCard;
	}

	/**
	 * Returns a new array with all the cards that has a lower index than the current card
	 *
	 * @returns {Array<VideoCardType>} - Array with lower index cards
	 */
	function setLowerIndexCardsArr(): Array<VideoCardType> {
		let lowerIndexCardsArr = [];

		$queueVideoCardsArr.forEach(function (card, index) {
			if (index < currentCardIndex) {
				lowerIndexCardsArr.push(card);
			}
		});

		return lowerIndexCardsArr;
	}

	/**
	 * Returns a new array with all the cards that has a higher index than the current card
	 *
	 * @returns {Array<VideoCardType>} - Array with lower index cards
	 */
	function setHigherIndexCardsArr(): Array<VideoCardType> {
		const lowerIndexCardsSet = new Set(lowerIndexCards);

		return $queueVideoCardsArr.filter((x) => !lowerIndexCardsSet.has(x));
	}

	/**
	 * Create a new array with the same cards as before, but without the current card
	 * (with .filter() -> Svelte best practice) & reset the array (in store) to the
	 * updatedArray
	 */
	function removeCurrentCardFromArray() {
		const updatedArray = $queueVideoCardsArr.filter(
			(x) => x.title !== $currentlySelectedCard.title
		);

		queueVideoCardsArr.set(updatedArray);
	}
</script>

<main>
	<section>
		<h1>Queue</h1>

		{#if $currentlySelectedCard === 'null'}
			<h2>No video playing</h2>
		{:else}
			<h2>Now playing</h2>

			<QueueCard
				currentCard={$currentlySelectedCard}
				index={1}
				isActive={true}
				isPlaying={$isCurrentlyPlaying}
			/>

			<h2 class="next-songs__heading">Next from: {$currentlySelectedCard.title}</h2>

			{#each $queueVideoCardsArr as videoCard, i}
				<QueueCard
					currentCard={videoCard}
					index={i + 2}
					isActive={false}
					isPlaying={$isCurrentlyPlaying}
				/>
			{/each}
		{/if}
	</section>
</main>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		color: var(--color-white);
		margin-top: 5em;
		height: 100%;
	}

	h1 {
		margin-bottom: 16px;
	}

	h2 {
		font-size: 16px;
		font-weight: 700;
		letter-spacing: normal;
		line-height: 24px;
		text-transform: none;
		color: var(--color-light-grey);
	}

	.next-songs__heading {
		margin-top: 40px;
		margin-bottom: 8px;
	}
</style>
