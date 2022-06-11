# Spotify Clone

**[Live link](https://spotify-clone.jchm.dev/)**

This is a Spotify clone created with Svelte(Kit) and Node. I don't know why I made this, but it was quite fun.

## Table of Contents

<table>

<tr>

<td align="center"><a href="#gear-installation">⚙️ Installation<a></td>

<td align="center"><a href="#eyeglasses-overview"> 👓 Overview <a></td>

<td align="center"><a href="#robot-tech-stack"> 🤖 Tech Stack<a></td>

</tr>

</table>

## :gear: Installation

### Front-end

SvelteKit is used as front-end framework. SvelteKit is an officially supported framework, built around Svelte. It adds key features to a Svelte app — like routing, layouts, and server-side rendering — and makes front-end development insanely easy.

More information can be found in the [specific README](/frontend/README.md) as well as the installation steps.

### API

Node.js is used to create a REST endpoint for every playlist that is requested. This step was necessary for retrieving public playlist data from the Spotify API. Quoting the docs:

> The [Client Credentials flow](https://developer.spotify.com/documentation/general/guides/authorization/client-credentials/) is used in server-to-server
> authentication. Since this flow does not include authorization, only
> endpoints that do not access user information can be accessed.

This endpoint `/playlists/:id` can be accessed within the front-end application.

More information can be found in the [specific README](/api/README.md). Navigate to the `api` folder and follow the steps.

## :eyeglasses: Overview

### Screenshot

<details>

<summary>Screenshot desktop</summary>

![Screenshot mobile](https://)

</details>

<details>

<summary>Screenshot mobile</summary>

![Screenshot mobile](https://)

</details>

## :robot: Tech Stack

1.  SvelteKit

2.  Node

3.  TypeScript (only in front-end app)

4.  CSS/Sass

5.  Vite

6.  Netlify

7.  GitHub

### Jest

I implemented Jest, but then I realised that I don't have the knowledge, yet. Tried to make some tests, but they all failed. Need some more time and experimenting with testing, so that's one thing I'll probably do it in the upcoming months.

### Progressive Web App (PWA)

The `manifest.json` is implemented and works, so the app can be downloaded as desktop/mobile app.

Unfortunately the Service Worker was a little bit more difficult (especially in SvelteKit) and is not really reliable. It looks like it's caching content and it sometimes works offline, but it's not production ready. It basically wasn't really my priority.

My endgoal with the service worker was to cache on demand. When a user clicks on the heart icon, the specific video (& image) would be cached and stored locally. Eventually, when the user goes offline, only the cached videos would be shown.

I wrote [an article](https://jochemvogel.medium.com/how-to-cache-dynamic-pages-on-demand-with-a-service-worker-in-sveltekit-4b4a7652583d) about it once, so I know how to do it. It basically didn't have my priority in this project, so if I had more time, it was probably implemented.

### Browser Support

BrowserStack is used to check some browsers and the application works on all the major browsers (IE11 is not a major browser).
