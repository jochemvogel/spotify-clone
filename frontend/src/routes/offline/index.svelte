<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import ErrorPage from '$lib/ErrorPage.svelte';
</script>

<ErrorPage
	title="Offline"
	description="You don't have an internet connection. Retry later"
	buttonText="Go back home"
	buttonLink="/"
/>
