<script context="module" lang="ts">
	export const prerender = true;

	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('library.json');
		if (res.ok) {
			const libraryCards = await res.json();

			return {
				props: {
					libraryCards
				}
			};
		}
		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script lang="ts">
	import LibraryCard from '$lib/cards/LibraryCard.svelte';
	import PageHead from '$lib/PageHead.svelte';

	// Object is too big for typing
	export let libraryCards;
</script>

<PageHead title="Your Library" />

<main>
	<section class="library-list">
		<div class="library-list__title">
			<h2>Library (Public GitHub repos)</h2>
		</div>
		<div class="library-list__articles">
			{#each libraryCards as libraryCard}
				<LibraryCard {libraryCard} />
			{/each}
		</div>
	</section>
</main>

<style>
	.library-list {
		margin-top: 4em;
	}

	.library-list__title {
		margin-bottom: 1em;
	}

	.library-list__articles {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		grid-gap: 24px;
	}
</style>
