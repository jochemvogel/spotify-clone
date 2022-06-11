<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('skills.json');

		if (res.ok) {
			const result = await res.json();
			const skills = result.skills;

			return {
				props: {
					skills
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
	import type { Skill } from '$lib/types';
	import SkillCard from '$lib/cards/SkillCard.svelte';
	import PageHead from '$lib/PageHead.svelte';

	export let skills: Array<Skill>;
</script>

<PageHead title="Skills" />

<main>
	<section class="skills-list">
		<div class="skills-list__title">
			<h2>Skills</h2>
		</div>
		<div class="skills-list__articles">
			{#each skills as skill}
				<SkillCard {skill} />
			{/each}
		</div>
	</section>
</main>

<style>
	.skills-list {
		margin-top: 4em;
	}

	.skills-list__title {
		margin-bottom: 1em;
	}

	.skills-list__articles {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		grid-gap: 24px;
	}
</style>
