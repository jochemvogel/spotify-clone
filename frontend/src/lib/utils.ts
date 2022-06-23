import type { VideoCardType, FavoritePlaylistItem } from '$lib/types';

/**
 * Takes an amount of seconds and returns a formatted string (minutes:seconds)
 *
 * @param {number} seconds
 * @returns {string} Formatted string with minutes and seconds
 */

export function formatSeconds(seconds: number): string {
	if (isNaN(seconds)) return '0:00';

	const minutes = Math.floor(seconds / 60);
	seconds = Math.floor(seconds % 60);
	if (seconds < 10) seconds = '0' + seconds;

	return `${minutes}:${seconds}`;
}

/**
 * Gets the index of a card in an array
 *
 * @param card - Card where the index is needed
 * @param array - Array with the given card
 *
 * @returns {Number} - Index of the card
 */
export function getCardIndex(card: VideoCardType, array: Array<VideoCardType>): number {
	return array.findIndex((x) => x.title === card.title);
}

/**
 * Fetches the favorites data from the endpoint
 *
 * @returns {Array} - All the favorite cards
 */
export async function fetchFavoritesData(): Promise<FavoritePlaylistItem[]> {
	const res = await fetch('https://spotify-backup.jchm.dev/favorites.json');

	if (res.ok) {
		const result = await res.json();
		return result;
	}

	const { message } = await res.json();

	return {
		error: new Error('[fetchFavData(): ]', message)
	};
}
