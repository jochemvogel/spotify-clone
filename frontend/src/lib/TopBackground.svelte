<script lang="ts">
	export let selectedCardColor;
</script>

<div style="background-color:{selectedCardColor}" aria-hidden="true" />

<style>
	div {
		background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0, var(--color-black-bg) 100%);
		height: 360px;
		margin-top: -60px;
		position: absolute;
		transition: background 1s ease;
		width: 100%;
		background-color: hsl(40, 19%, 50%);
	}
</style>
