<script context="module" lang="ts">
	export function load({ error, status }: { error: Record<symbol, symbol>; status: number }): {
		props: { error: Record<symbol, symbol>; status: number };
	} {
		return {
			props: { error, status }
		};
	}
</script>

<script lang="ts">
	import Logo from '$lib/assets/svg/nav-bar/logo.svelte';
	/** @type {number} */
	export let status: number;
	/** @type {Error} */
	export let error: Error;

	import ErrorPage from '$lib/ErrorPage.svelte';
</script>

{#if status === 404}
	<ErrorPage
		title="Page not found"
		description="Are you sure that this is the right page?"
		buttonText="Go back home"
		buttonLink="/"
	/>
{:else}
	<div class="container__error">
		<div class="error__logo">
			<a href="/">
				<Logo />
			</a>
		</div>

		<div class="error__message">
			<h1>{error.message}</h1>
			{#if error.stack}
				<pre>{error.stack}</pre>
			{/if}
		</div>
	</div>
{/if}

<style lang="scss">
	.container__error {
		width: 100vw;
		height: 100vh;
		background: linear-gradient(45deg, #8c1932, #ff6437 60%);
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.error__logo {
		width: 6.625em;
		position: absolute;
		top: 3%;
		left: 2%;

		a {
			color: var(--color-white);
			text-decoration: none;
		}
	}

	.error__message {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: var(--color-white);

		pre {
			margin-top: 2em;
			padding: 0 2em;
		}
	}
</style>
