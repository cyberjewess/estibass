<script lang="ts">
	import type { Post } from '#lib/posts.ts';
	import Nameplate from '#lib/Nameplate.svelte';

	let { data }: { data: { post: Post } } = $props();

	let post = $derived(data.post);
	let PostComponent = $derived(post.component);
</script>

<svelte:head>
	<title>{post.title} - Esti Lurie</title>
</svelte:head>

<main>
	<Nameplate />
	<a href="/blogger">← All posts</a>
	<h2>{post.title}</h2>
	<h3>
		{new Date(post.date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			timeZone: 'UTC'
		})}
	</h3>
	<PostComponent />
</main>

<style>
	main {
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
