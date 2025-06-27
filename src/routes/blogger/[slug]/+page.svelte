<script lang="ts">
	import type { Post } from '$lib/posts';

	export let data: { post: Post };

	$: post = data.post;
	$: PostComponent = post.component;
</script>

<svelte:head>
	<title>{post.title} - Esti Lurie</title>
</svelte:head>

<main>
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
	<svelte:component this={PostComponent} />
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
