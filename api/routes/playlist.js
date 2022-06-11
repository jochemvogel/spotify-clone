var express = require('express');
var router = express.Router();
const spotify = require('../spotify');

router.get('/:slug', getSingleGame);

async function getSingleGame(req, res) {
	const { slug } = req.params;

	const hue = req.query.h ?? '40';
	const saturation = req.query.s ?? '19%';
	const lightness = req.query.l ?? '50%';

	const playlistColor = `hsl(${hue}, ${saturation}, ${lightness})`;

	await spotify
		.getSinglePlaylistData(slug, playlistColor)
		.then((playlist) => res.json(playlist));
}

module.exports = router;
