import type { SmallFavoritePlaylistItem, VideoCardType } from '$lib/types';

const VIDEO_STORAGE = 'https://scdn.jchm.dev/video';
const IMG_STORAGE = 'https://scdn.jchm.dev/img';

export const get = (): unknown => {
	const newFavCardArr: Array<SmallFavoritePlaylistItem> = [
		{
			id: '37i9dQZF1DXacX3REVaOqV',
			color: {
				hue: '210',
				saturation: '57',
				lightness: '44'
			}
		},
		{
			id: '37i9dQZF1DXa8NOEUWPn9W',
			color: {
				hue: '78',
				saturation: '82',
				lightness: '68'
			}
		},
		{
			id: '37i9dQZF1DWVCFqzSS1Ad0',
			color: {
				hue: '40',
				saturation: '19',
				lightness: '50'
			}
		},
		{
			id: '37i9dQZF1DZ06evO3a5z1u',
			color: {
				hue: '180',
				saturation: '43',
				lightness: '68'
			}
		},
		{
			id: '7nppx7uLgcmkZHg70HNfOk',
			color: {
				hue: '217',
				saturation: '83',
				lightness: '66'
			}
		},
		{
			id: '1Rz4kolVnkfOnMYtYiaebO',
			color: {
				hue: '5',
				saturation: '65',
				lightness: '50'
			}
		},
		{
			id: '5MnDWyXKuWUPdUOJgMGeph',
			color: {
				hue: '199',
				saturation: '62',
				lightness: '40'
			}
		},
		{
			id: '37i9dQZF1DWUq3wF0JVtEy',
			color: {
				hue: '21',
				saturation: '89',
				lightness: '48'
			}
		},
		{
			id: '37i9dQZEVXcLMWScq1EEZ9',
			color: {
				hue: '276',
				saturation: '16',
				lightness: '52'
			}
		},
		{
			id: '3UUjNTeM8tYw7MufRbZkVB',
			color: {
				hue: '0',
				saturation: '0',
				lightness: '33'
			}
		}
	];

	const videoCardArr: Array<VideoCardType> = [
		{
			title: 'Amsterdam',
			artist: 'Jochem Vogel',
			description: 'Venice of the North',
			album: 'Timelapses',
			img: `${IMG_STORAGE}/cities/amsterdam.png`,
			video: `${VIDEO_STORAGE}/timelapses/amsterdam-timelapse.mp4`,
			duration: 331
		},
		{
			title: 'Copenhagen',
			artist: 'Jochem Vogel',
			description: 'Originally a Viking fishing village established in the 10th century ',
			album: 'Timelapses',
			img: `${IMG_STORAGE}/cities/copenhagen.png`,
			video: `${VIDEO_STORAGE}/timelapses/copenhagen-timelapse.mp4`,
			duration: 82
		},
		{
			title: 'New York',
			artist: 'Jochem Vogel',
			description: 'The Big Apple',
			album: 'Timelapses',
			img: `${IMG_STORAGE}/cities/new-york.png`,
			video: `${VIDEO_STORAGE}/timelapses/new-york-timelapse.mp4`,
			duration: 194
		},
		{
			title: 'Lisbon',
			artist: 'Jochem Vogel',
			description: 'One of the oldest cities in the world',
			album: 'Timelapses',
			img: `${IMG_STORAGE}/cities/lisbon.png`,
			video: `${VIDEO_STORAGE}/timelapses/lisbon-timelapse.mp4`,
			duration: 179
		},
		{
			title: 'Rotterdam',
			artist: 'Jochem Vogel',
			description: 'The Gateway to Europe',
			album: 'Timelapses',
			img: `${IMG_STORAGE}/cities/rotterdam.png`,
			video: `${VIDEO_STORAGE}/timelapses/rotterdam-timelapse.mp4`,
			duration: 43
		}
	];
	return {
		body: {
			videoCards: videoCardArr,
			newFavCards: newFavCardArr
		}
	};
};
