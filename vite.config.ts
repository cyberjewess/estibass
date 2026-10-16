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
			adapter: adapter(),
			// Force Svelte 5 runes mode for our components; mdsvex output (.md) stays in auto mode
			dynamicCompileOptions: ({ filename }) =>
				filename.endsWith('.svelte') ? { runes: true } : undefined
		})
	],
	assetsInclude: ['**/*.md']
});
