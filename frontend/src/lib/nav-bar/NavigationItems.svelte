<script lang="ts">
	import { page } from '$app/stores';

	import HomeSvg from '$lib/assets/svg/nav-bar/home.svelte';
	import HomeActiveSvg from '$lib/assets/svg/nav-bar/home-active.svelte';
	import LibrarySvg from '$lib/assets/svg/nav-bar/library.svelte';
	import LibraryActiveSvg from '$lib/assets/svg/nav-bar/library-active.svelte';
	import MagGlassSvg from '$lib/assets/svg/nav-bar/mag-glass.svelte';
	import MagGlassActiveSvg from '$lib/assets/svg/nav-bar/mag-glass-active.svelte';
	import SpotifyLogoIcon from '$lib/assets/svg/nav-bar/spotify-logo-icon.svelte';
	import SpotifyLogoActiveIcon from '$lib/assets/svg/nav-bar/spotify-logo-active-icon.svelte';

	$: pathName = $page.path;
</script>

<div class="navigation">
	<ul>
		<li>
			<a class={pathName === '/' ? 'active' : ''} href="/">
				{#if pathName === '/'}
					<HomeActiveSvg />
				{:else}
					<HomeSvg />
				{/if}
				<span> Home </span>
			</a>
		</li>
		<li>
			<a class={pathName === '/skills' ? 'active' : ''} href="/skills">
				{#if pathName === '/skills'}
					<MagGlassActiveSvg />
				{:else}
					<MagGlassSvg />
				{/if}
				<span> Skills </span>
			</a>
		</li>
		<li>
			<a class={pathName === '/library' ? 'active' : ''} href="/library">
				{#if pathName === '/library'}
					<LibraryActiveSvg />
				{:else}
					<LibrarySvg />
				{/if}
				<span> Your Library </span>
			</a>
		</li>
		<li id="app">
			<a class={pathName === '/upsell' ? 'active' : ''} href="/upsell">
				{#if pathName === '/upsell'}
					<SpotifyLogoActiveIcon />
				{:else}
					<SpotifyLogoIcon />
				{/if}
				<span> Get App </span>
			</a>
		</li>
	</ul>
</div>

<style lang="scss">
	a {
		color: var(--color-light-grey);
		text-decoration: none;
		flex: 1 1 0%;
		font-size: 0.875em;
		padding: 0 16px;
		display: flex;
		align-items: center;
		gap: 16px;
		height: 40px;
		cursor: pointer;
		border-radius: 4px;

		@supports not (gap: 16px) {
			span {
				margin-left: 16px;
			}
		}
	}

	a.active {
		color: var(--color-white);
		background-color: var(--color-card-hover);
	}

	li {
		padding: 0 0.5em;
	}

	.navigation {
		font-weight: 700;
	}

	#app {
		display: none;
	}

	@media screen and (max-width: 860px) {
		a {
			padding: 0;
			display: block;
		}

		ul {
			width: 100%;
			margin: 0;
			display: flex;
		}

		li {
			flex: 1 1 0%;
			padding: 0.5em;
		}

		span {
			display: block;
			margin-top: -2px;
			font-size: 11px;
			line-height: 16px;
			font-weight: 400;
		}

		.navigation {
			width: 100%;
			background-color: rgb(40, 40, 40);
			text-align: center;
			height: 100%;
			border-top: 1px solid rgb(24, 24, 24);
		}

		#app {
			display: block;
		}
	}
</style>
