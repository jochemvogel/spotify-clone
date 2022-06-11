import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		target: '#spotify',
		adapter: adapter(),
		files: {
			serviceWorker: 'src/service-worker'
		}
	}
};

export default config;
