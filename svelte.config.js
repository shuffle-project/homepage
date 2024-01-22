import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		css: (css) => {
			css.write('public/bundle.css');
		}
	}),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'public',
			assets: 'public',
			fallback: null,
			precompress: false,
			strict: true
		}),
		paths: { base: process.env.NODE_ENV === 'pages' ? '/homepage' : '' }
	}
};

export default config;
