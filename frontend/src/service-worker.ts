import { build, timestamp, files } from '$service-worker';

declare const self;

const ssrPages = [
	'/',
	'/index.json',
	'/skills',
	'/skills.json',
	'/library',
	'/library.json',
	'/upsell'
];

const applicationCache = `applicationCache-v${timestamp}`;
const staticCache = `staticCache-v${timestamp}`;

// Caches the svelte app (not the data)
self.addEventListener('install', (event) => {
	event.waitUntil(
		Promise.all([
			caches.open('ssrCache').then((cache) => cache.addAll(ssrPages)),
			caches.open(applicationCache).then((cache) => cache.addAll(build)),
			caches.open(staticCache).then((cache) => cache.addAll(files))
		]).then(self.skipWaiting())
	);
});

// Removes old caches
self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) => {
				return Promise.all(
					keys
						.filter((key) => key !== applicationCache && key !== staticCache && key !== 'ssrCache')
						.map((key) => caches.delete(key))
				);
			})
			.then(self.skipWaiting())
	);
});

self.addEventListener('fetch', (event) => {
	const request: Request = event.request;

	event.respondWith(caches.match(request).then((cacheRes) => cacheRes || fetch(request)));
});
