# Spotify Clone API

Node.js is used to dynamically create a REST endpoint for every playlist that is requested. This step was necessary for retrieving public playlist data from the Spotify API. [Express application generator](https://expressjs.com/en/starter/generator.html) is used to quickly generate this app.

Because of the CORS options, every app can retrieve data from this API. Could specify this, so that only the front-end application would've access to the data. It's public data, so that won't be a big problem imo.

## Table of Contents

<table>

<tr>

<td align="center"><a href="#gear-installation">⚙️ Installation<a></td>

<td align="center"><a href="#page_facing_up-endpoints"> 📄 Endpoints <a></td>

<td align="center"><a href="#cloud-heroku"> ☁️ Heroku<a></td>

</tr>

</table>

## :gear: Installation

The Spotify API is used and you need to register your app first. Then you'll get a Client ID and Client Secret.

1. https://developer.spotify.com/dashboard/login
2. Login or create an account
3. Create an app
4. Go back to code
5. Copy `.env.example` and rename it to `.env`
6. Go back to the Spotify developer dashboard and copy the Client ID and Client Secret.
7. `npm install`
8. `npm start`
9. `localhost:3000`

## :page_facing_up: Endpoints

There is only one type of endpoint: `/playlist:id`.

I.e. `playlist/37i9dQZF1DXacX3REVaOqV?h=1&s=2&l=3` will return:

```json
{
	"id": "37i9dQZF1DXacX3REVaOqV",
	"name": "House Supreme",
	"url": "https://open.spotify.com/playlist/37i9dQZF1DXacX3REVaOqV",
	"image": "https://i.scdn.co/image/ab67706f00000003fa101ab9170b506b328691dd",
	"color": "hsl(1, 2%, 3%)"
}
```

Default value of the colors attribute (no or incorrect query parameter) is `hsl(40, 19%, 50%)`. The color value is used for the hover/background effect on favorite cards.
