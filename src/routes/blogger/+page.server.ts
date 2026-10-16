import { getPostsMetadata } from '#lib/posts.ts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const posts = getPostsMetadata();

	return {
		posts
	};
};
