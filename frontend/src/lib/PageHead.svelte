<script lang="ts">
	import { currentlySelectedCard, isCurrentlyPlaying } from '$lib/stores';

	$: titleString = `${$currentlySelectedCard.title} - ${$currentlySelectedCard.artist}`;

	export let title = '';
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="robots" content="noindex nofollow" />
	<meta name="author" content="Jochem Vogel" />
	<meta
		name="description"
		content="Spotify is a digital music service that gives you access to millions of songs."
	/>
	{#if $currentlySelectedCard !== 'null' && $isCurrentlyPlaying}
		<title>{titleString}</title>
	{:else}
		<title>Spotify – {title}</title>
	{/if}
</svelte:head>
