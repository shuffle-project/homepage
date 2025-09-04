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
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		// paths: { base: process.env.NODE_ENV === 'pages' ? '/homepage' : '', relative: false }
		paths: { base: '', relative: false }
	}
};

export default config;
