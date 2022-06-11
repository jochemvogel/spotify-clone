export default {
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.svelte$': [
			'svelte-jester',
			{
				preprocess: true
			}
		]
	},
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	moduleFileExtensions: ['js', 'svelte', 'ts'],
	moduleNameMapper: {
		'^\\$lib(.*)$': '<rootDir>/src/lib$1',
		'^lodash-es$': 'lodash'
	}
};
