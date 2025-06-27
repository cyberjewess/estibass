<script lang="ts">
	import Link from '$lib/Link.svelte';
	import Nameplate from '$lib/Nameplate.svelte';
	import type { PostMetadata } from '$lib/posts';

	export let data: { posts: PostMetadata[] };
</script>

<svelte:head>
	<title>Blog - Esti Lurie</title>
</svelte:head>

<main>
	<Nameplate />
	<p>Sometimes I write things, and you can read those things here.</p>
	<ul class="links">
		{#each data.posts as post}
			<li>
				<Link url={`/blogger/${post.slug}`} text={post.title} />
				<p class="small">
					{new Date(post.date).toLocaleDateString('en-US', {
						year: 'numeric',
						month: '2-digit',
						day: '2-digit'
					})}
				</p>
			</li>
		{/each}
	</ul>
</main>

<style>
	.links {
		font-size: 1.25em;
		list-style-type: none; /* Remove bullets */
		padding: 0; /* Remove padding */
		margin: 0; /* Remove margins */
	}

	.small {
		font-size: 0.8em;
		margin: auto;
		padding-left: 10%;
		padding-bottom: 10%;
	}
</style>
