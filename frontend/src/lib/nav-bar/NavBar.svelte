<script lang="ts">
	import NavigationItems from '$lib/nav-bar/NavigationItems.svelte';
	import RootListItems from '$lib/nav-bar/RootListItems.svelte';

	import Logo from '$lib/assets/svg/nav-bar/logo.svelte';
</script>

<nav>
	<div class="logo-spotify">
		<a href="/">
			<Logo />
		</a>
	</div>
	<NavigationItems />
	<div class="root-list-items">
		<RootListItems />
	</div>
</nav>

<style lang="scss">
	nav {
		height: 100%;
		width: 209px;
		display: flex;
		flex-direction: column;
		background-color: var(--color-black);
		grid-area: nav-bar;
		padding-top: 1.5em;
		user-select: none;
	}

	.logo-spotify {
		color: var(--color-white);
		display: flex;
		margin-bottom: 0.5em;
		padding: 0 1.5em;
	}

	a {
		height: 2.5em;
		width: 100%;
		max-width: 8em;
		color: var(--color-white);
		text-decoration: none;
	}

	@media screen and (max-width: 860px) {
		.logo-spotify,
		.root-list-items {
			display: none;
		}

		nav {
			position: fixed;
			bottom: 0;
			width: 100%;
			padding-top: 0;
			height: 60px;
		}
	}
</style>
