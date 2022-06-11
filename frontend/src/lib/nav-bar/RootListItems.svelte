<script lang="ts">
	import ExternalLinkSvg from '$lib/assets/svg/nav-bar/icon-external-link.svelte';
	import type { RootListItem } from '$lib/types';

	const rootListItems: Array<RootListItem> = [
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/in/jochemvogel'
		},
		{
			name: 'GitHub',
			link: 'https://www.github.com/jochemvogel'
		},
		{
			name: 'Medium',
			link: 'https://jochemvogel.medium.com'
		},
		{
			name: 'Twitter',
			link: 'https://www.twitter.com/jochemvogel1'
		},
		{
			name: 'jochemvogel.com',
			link: 'https://jochemvogel.com'
		}
	];
</script>

<div>
	<ul>
		{#each rootListItems as item}
			<li>
				<a href={item.link} target="_blank">
					<span>{item.name}</span>
					<ExternalLinkSvg />
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding: 0.5em 0;
		border-top: 1px solid hsla(0, 0%, 70%, 50%);
		margin-top: 2em;
	}

	ul {
		list-style-type: none;
		margin: 0;
	}

	li {
		font-size: 0.875em;
		font-weight: 400;
		margin: 0.75em 0;
	}

	a {
		text-decoration: none;
		color: var(--color-light-grey);
		fill: var(--color-light-grey);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 1.5em;
	}

	a:hover {
		color: var(--color-white);
		fill: var(--color-white);
		cursor: default;
	}
</style>
