import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: [
				vitePreprocess(),
				mdsvex({
					extensions: ['.md']
				})
			],
			extensions: ['.svelte', '.md'],
			adapter: adapter()
		})
	],
	assetsInclude: ['**/*.md']
});
