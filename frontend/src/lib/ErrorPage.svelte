<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import ExlamationMarkIcon from '$lib/assets/svg/other/exlamation-mark-icon.svelte';

	export let title: string;
	export let description: string;
	export let buttonText: string;
	export let buttonLink: string;
</script>

<div class="error-container">
	<div>
		<ExlamationMarkIcon />
	</div>
	<h1>{title}</h1>
	<p>{description}</p>
	<a href={buttonLink}>{buttonText}</a>
</div>

<style lang="scss">
	.error-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1em;

		@media screen and (max-width: 860px) {
			width: 100vw;
			height: 90vh;
		}

		a {
			font-weight: 700;
			padding: 13px 20px;
			background-color: var(--color-green);
			color: var(--color-white);
			border: none;
			border-radius: 500px;
			cursor: pointer;
			font-size: 12px;
			letter-spacing: 1.76px;
			text-transform: uppercase;
			text-align: center;
			text-decoration: none;

			&:hover {
				transform: scale(1.05);
			}
		}
	}
</style>
