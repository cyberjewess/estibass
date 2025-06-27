<script lang="ts">
	import Nameplate from '$lib/Nameplate.svelte';
	import type { Post } from '$lib/posts';

	export let data: { post: Post };

	$: post = data.post;
</script>

<svelte:head>
	<title>{post.title} - Esti Lurie</title>
</svelte:head>

<main>
	<Nameplate />
	<article>
		{#if post.externalLink}
			<a class="link" target="_blank" rel="noopener noreferrer" href={post.externalLink}>
				<h2>{post.title}</h2>
			</a>
		{:else}
			<h2>{post.title}</h2>
		{/if}
		<h3>
			{new Date(post.date).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
		</h3>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html post.html}
	</article>
</main>

<style>
	article {
		line-height: 1.6;
	}

	h2 {
		margin-bottom: 0.5rem;
	}

	h3 {
		color: #db9ba7;
		font-weight: normal;
		margin-bottom: 2rem;
	}

	/* Style markdown content */
	:global(article p) {
		margin-bottom: 1.5rem;
	}

	:global(article em) {
		font-style: italic;
	}

	:global(article strong) {
		font-weight: bold;
	}
</style>
