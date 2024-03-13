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
		adapter: adapter({
			pages: 'public',
			assets: 'public',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		paths: { base: process.env.NODE_ENV === 'pages' ? '/homepage' : '' }
	}
};

export default config;
