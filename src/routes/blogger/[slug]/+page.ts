import { getPost } from '$lib/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params, data }) => {
	const post = getPost(params.slug);

	if (!post) {
		return { post: data.post };
	}

	return {
		post: {
			...data.post,
			component: post.component
		}
	};
};
