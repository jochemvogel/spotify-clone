import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	try {
		const URL = 'https://api.github.com';
		const USERNAME = 'jochemvogel';
		const SORT_TYPE = 'updated';

		const response = await fetch(`${URL}/users/${USERNAME}/repos?sort=${SORT_TYPE}`);

		if (response.ok) {
			return {
				body: await response.json()
			};
		} else {
			return {
				status: response.status,
				body:
					response.body &&
					response.headers.has('Content-Type') &&
					response.headers.get('Content-Type') === 'application/json'
						? await response.json()
						: response.body
			};
		}
	} catch (error) {
		console.error('[library.json]:', error);
		return {
			status: 500,
			body: 'Internal Server Error'
		};
	}
};
