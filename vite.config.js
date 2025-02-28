import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit({dev: true})],
	build: {
	  sourcemap: true, // generate source maps
	}
});
