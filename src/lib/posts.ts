import { marked } from 'marked';
import matter from 'gray-matter';

export interface Post {
	title: string;
	date: string;
	slug: string;
	externalLink?: string;
	content: string;
	html: string;
}

// Import all markdown files as raw text
const posts = import.meta.glob('./posts/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

export function getPosts(): Post[] {
	return Object.entries(posts)
		.map(([path, content]) => {
			const { data, content: markdownContent } = matter(content as string);
			const slug = path.split('/').pop()?.replace('.md', '') || '';

			return {
				...data,
				slug,
				content: markdownContent,
				html: marked(markdownContent)
			} as Post;
		})
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post | undefined {
	const post = posts[`./posts/${slug}.md`];
	if (!post) return undefined;

	const { data, content: markdownContent } = matter(post as string);
	return {
		...data,
		slug,
		content: markdownContent,
		html: marked(markdownContent)
	} as Post;
}
