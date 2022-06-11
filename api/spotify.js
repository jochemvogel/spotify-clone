const axios = require('axios');
require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

/**
 * Gets the data from a single playlist
 *
 * @param {String} playlistID
 * @param {String} playlistColor
 * @returns {Object} - Data from playlist
 */
async function getSinglePlaylistData(playlistID, playlistColor) {
	return axios({
		url: 'https://accounts.spotify.com/api/token',
		method: 'post',
		params: {
			grant_type: 'client_credentials',
		},
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		auth: {
			username: CLIENT_ID,
			password: CLIENT_SECRET,
		},
	}).then(
		(response) => {
			const token = response.data.access_token;

			return axios({
				url: `https://api.spotify.com/v1/playlists/${playlistID}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then((res) => {
					return res.data;
				})
				.then((singlePlaylist) =>
					spotifyPatchSinglePlaylist(singlePlaylist, playlistColor)
				);
		},
		(error) => {
			console.log(error);
		}
	);
}

/**
 * Returns a patched version (only data that is needed) of the fetched playlist
 *
 * @param { Object } playlist
 * @param { String } playlistColor
 * @returns { Object } playlistData
 */
function spotifyPatchSinglePlaylist(playlist, playlistColor) {
	const playlistData = {
		id: playlist.id,
		name: playlist.name,
		url: playlist.external_urls.spotify,
		image: playlist.images[0].url,
		color: playlistColor,
	};

	return playlistData;
}

module.exports = {
	getSinglePlaylistData,
};
