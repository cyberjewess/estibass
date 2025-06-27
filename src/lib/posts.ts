import type { ComponentType } from 'svelte';

// Import all mdsvex files as modules
const posts = import.meta.glob('../routes/blogger/posts/*.md', {
	eager: true
});

export interface Post {
	title: string;
	date: string;
	slug: string;
	component: ComponentType;
}

export interface PostMetadata {
	title: string;
	date: string;
	slug: string;
}

interface MdsvexFile {
	metadata: Post;
	default: ComponentType;
}

export function getPostsMetadata(): PostMetadata[] {
	console.log('Available posts:', Object.keys(posts));

	return Object.entries(posts)
		.map(([path, file]) => {
			console.log('Processing post:', path, file);
			const slug = path.split('/').pop()?.replace('.md', '') || '';

			// For mdsvex files, the metadata and component are in the file object
			const metadata = (file as MdsvexFile).metadata || {};

			return {
				...metadata,
				slug
			} as PostMetadata;
		})
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPosts(): Post[] {
	console.log('Available posts:', Object.keys(posts));

	return Object.entries(posts)
		.map(([path, file]) => {
			console.log('Processing post:', path, file);
			const slug = path.split('/').pop()?.replace('.md', '') || '';

			// For mdsvex files, the metadata and component are in the file object
			const metadata = (file as MdsvexFile).metadata || {};
			const component = (file as MdsvexFile).default;

			return {
				...metadata,
				slug,
				component
			} as Post;
		})
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post | undefined {
	const post = posts[`../routes/blogger/posts/${slug}.md`];
	if (!post) return undefined;

	const metadata = (post as MdsvexFile).metadata || {};
	const component = (post as MdsvexFile).default;

	return {
		...metadata,
		slug,
		component
	} as Post;
}
