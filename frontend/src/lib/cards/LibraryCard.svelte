<script>
	export let libraryCard;
</script>

<a href={libraryCard.html_url} target="_blank">
	<article class={libraryCard.archived ? 'archived' : ''}>
		<h3>{libraryCard.name}</h3>
		<p>{libraryCard.description || 'No description available'}</p>
		{#if libraryCard.archived}
			<small>Archived</small>
		{/if}
		{#if libraryCard.topics}
			<ul class="topic-badge-container">
				{#each libraryCard.topics as topic}
					<li>
						<a class="topic-badge" href="https://github.com/topics/{topic}" target="_blank">
							{topic}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</article>
</a>

<style lang="scss">
	a {
		text-decoration: none;
		color: var(--color-white);
	}

	article {
		background: var(--color-black-components);
		border-radius: 4px;
		flex: 1;
		padding: 16px;
		transition: background-color 0.3s ease;
		width: 100%;
		position: relative;
		transition: all 0.2s;
		min-height: 200px;

		@media screen and (max-width: 900px) {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		&:hover {
			transform: scale(1.02);
			background-color: var(--color-card-hover);
		}
	}

	h3 {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 1em;
		line-height: 1.5em;
	}

	p {
		color: var(--color-light-grey);
		font-size: 14px;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		display: -webkit-box;
		margin-top: 4px;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 1.2em;
	}

	ul {
		display: flex;
		gap: 0.5em;
		overflow: auto hidden;

		@supports not (gap: 0.5em) {
			li {
				margin: 0 0.25em;
			}
		}
	}

	li {
		background-color: var(--color-green-bg);
		color: var(--color-white);
		padding: 0.5em;
		border-radius: 0.25em;
		text-align: center;
		white-space: nowrap;
		transition: all 0.2s;

		&:hover {
			opacity: 0.9;
			transform: scale(1.03);
		}
	}

	small {
		text-transform: uppercase;
		font-weight: 700;
		letter-spacing: 0.75px;
	}

	.archived {
		background: var(--color-card-bg);

		&:hover {
			background: var(--color-card-selected-bg);
		}
	}
</style>
