<script lang="ts">
	import SpotifyLogoAppIcon from '$lib/assets/svg/other/spotify-logo-app-icon.svelte';
	import SpotifyLogoPwaIcon from '$lib/assets/svg/other/spotify-logo-pwa-icon.svelte';

	let deferredPrompt;

	function handleInstall(e) {
		e.preventDefault();
		deferredPrompt = e;
	}

	function installApp() {
		deferredPrompt.prompt();
	}
</script>

<svelte:window on:beforeinstallprompt={handleInstall} />

<section>
	<article>
		<div class="img">
			<SpotifyLogoAppIcon />
		</div>
		<h1>Spotify Mobile App</h1>
		<p>Build your library · Listen to podcasts · Use less data · Try Spotify Premium</p>
		<a href="https://apps.apple.com/us/app/spotify-discover-new-music/id324684580">
			<span> Get the app</span></a
		>
	</article>
	<article>
		<div class="img">
			<SpotifyLogoPwaIcon />
		</div>
		<h1>Spotify on Home Screen</h1>
		<p>
			Open Spotify in one tap · Listen in your browser · No download required · Save space on your
			phone
		</p>
		<button aria-label="Install app" on:click={installApp}><span>Add now</span></button>
	</article>
</section>

<style lang="scss">
	section {
		height: 100vh;
		min-height: 100%;
		width: 100vw;
		padding-top: 4em;
		padding-bottom: 10em;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		background-image: linear-gradient(48.366deg, rgb(80, 155, 245), rgb(175, 40, 150));
		color: var(--color-white);

		&::after {
			background-image: linear-gradient(rgba(18, 18, 18, 0), rgb(18, 18, 18) 90%);
			content: '';
			height: 100%;
			left: 0px;
			position: absolute;
			top: 0px;
			width: 100%;
		}
	}

	article {
		background-color: rgba(255, 255, 255, 0.3);
		display: flex;
		flex-direction: column;
		margin: 0px 16px 16px;
		padding: 16px 16px 16px;
		border-radius: 8px;
		align-items: center;

		.img {
			width: 50px;
			height: 50px;
			margin-bottom: 0.5em;
		}

		h1 {
			margin: 0px 0px 8px;
			font-size: 18px;
		}

		p {
			margin: 0px 0px 12px;
			font-size: 16px;
			line-height: 24px;
		}

		a,
		button {
			background-color: var(--color-white);
			border-radius: 24px;
			text-decoration: none;
			padding: 16px 48px;
			text-align: center;
		}

		span {
			color: var(--color-black);
			font-size: 14px;
			font-weight: 700;
			letter-spacing: 0.1em;
			text-transform: uppercase;
			line-height: 16px;
		}
	}
</style>
