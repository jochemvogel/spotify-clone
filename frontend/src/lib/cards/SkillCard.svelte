<script lang="ts">
	import type { Skill } from '$lib/types';

	export let skill: Skill;
</script>

<article style="background-color:{skill.color}">
	<div>
		<h3>{skill.name}</h3>
		<div>
			<img src={skill.src} alt="" />
		</div>
	</div>
</article>

<style lang="scss">
	article {
		height: auto;
		min-height: 11.25em;
		width: 100%;
		border-radius: 0.5em;
		position: relative;
		overflow: hidden;
		transition: all 0.2s ease-in;

		&:hover {
			transform: scale(1.1);
			opacity: 0.75;
		}
	}

	h3 {
		font-size: 1.5em;
		padding: 0.67em;
		line-height: 1.3em;
		letter-spacing: -0.04em;
		max-width: 100%;
		overflow-wrap: break-word;
		position: absolute;
		margin: 0;
	}

	img {
		position: absolute;
		right: 0;
		bottom: 0;
		height: 6.25em;
		transform: rotate(25deg) translate(18%, -2%);
	}
</style>
