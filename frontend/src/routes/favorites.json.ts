import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	try {
		const response = await fetch('https://spotify-clone.jchm.dev/index.json');

		if (response.ok) {
			const data = await response.json();
			const favoriteCards = data.newFavCards;

			const playlistsArray = [];

			const API_URL = 'https://spotify-api-jochem.herokuapp.com';

			for (const card of favoriteCards) {
				const hue = card.color.hue;
				const saturation = card.color.saturation;
				const lightness = card.color.lightness;

				const colorQuery = `h=${hue}&s=${saturation}%&l=${lightness}%`;

				await fetch(`${API_URL}/playlist/${card.id}?${colorQuery}`)
					.then((res) => res.json())
					.then((data) => playlistsArray.push(data));
			}

			return {
				body: playlistsArray
			};
		} else {
			return {
				status: response.status,
				body:
					response.body &&
					response.headers.has('Content-Type') &&
					response.headers.get('Content-Type') === 'application/json'
						? await response.json()
						: response.body
			};
		}
	} catch (error) {
		console.error('[favorites.json]:', error);
		return {
			status: 500,
			body: 'Internal Server Error'
		};
	}
};
