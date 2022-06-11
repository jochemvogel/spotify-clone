<script>
	import { currentlySelectedCard } from '$lib/stores';

	import NavBar from '$lib/nav-bar/NavBar.svelte';
	import NowPlayingBar from '$lib/now-playing-bar/NowPlayingBar.svelte';
	import TopBar from '$lib/top-bar/TopBar.svelte';
	import VideoPlayer from '$lib/VideoPlayer.svelte';

	import '../global.css';

	$: isCardSelected = $currentlySelectedCard.video !== undefined;
</script>

<div class="root">
	<TopBar />
	<NavBar />
	<slot />
	<NowPlayingBar />
	{#if isCardSelected}
		<div>
			<VideoPlayer />
		</div>
	{/if}
</div>

<style>
	.root {
		display: grid;
		grid-template-areas:
			'nav-bar         main       	 main'
			'now-playing-bar now-playing-bar now-playing-bar';
		grid-template-columns: auto 1fr;
		grid-template-rows: 1fr auto;
	}
</style>
