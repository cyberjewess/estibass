import { error } from '@sveltejs/kit';
import { getPost } from '$lib/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const post = getPost(params.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	// Only return metadata, not the component
	return {
		post: {
			title: post.title,
			date: post.date,
			slug: post.slug
		}
	};
};
