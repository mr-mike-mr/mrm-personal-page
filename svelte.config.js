//import adapter from '@sveltejs/adapter-node'; // NODE ADAPTER
import adapter from '@sveltejs/adapter-netlify'; // NETLIFY ADAPTER
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { createHighlighter } from "@bitmachina/highlighter";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: await createHighlighter({ theme: "github-dark" }),
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		})
	}
};

export default config;