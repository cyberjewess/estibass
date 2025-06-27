import type { ComponentType } from 'svelte';

// Import all mdsvex files
const posts = import.meta.glob('/src/routes/blogger/posts/*.md', {
	eager: true
});

export interface Post {
	title: string;
	date: string;
	slug: string;
	externalLink?: string;
	component: ComponentType;
}

export function getPosts(): Post[] {
	return Object.entries(posts)
		.map(([path, file]) => {
			const slug = path.split('/').pop()?.replace('.md', '') || '';
			const metadata = (file as { metadata: Post }).metadata;

			return {
				...metadata,
				slug,
				component: (file as { default: ComponentType }).default
			} as Post;
		})
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post | undefined {
	const post = posts[`/src/routes/blogger/posts/${slug}.md`];
	if (!post) return undefined;

	const metadata = (post as { metadata: Post }).metadata;
	return {
		...metadata,
		slug,
		component: (post as { default: ComponentType }).default
	} as Post;
}
