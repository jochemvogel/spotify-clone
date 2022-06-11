import type { Skill } from '$lib/types';

export const get = (): unknown => {
	const skillsArr: Array<Skill> = [
		{
			name: 'HTML',
			color: '#EC613A',
			src: 'img/skills/html.png'
		},
		{
			name: 'CSS',
			color: '#4E6DE9',
			src: 'img/skills/css.png'
		},
		{
			name: 'JavaScript',
			color: '#E3A650',
			src: 'img/skills/javascript.png'
		},
		{
			name: 'Node.js',
			color: '#56A545'
		},
		{
			name: 'Git',
			color: '#F05033'
		},
		{
			name: 'UI Design',
			color: '#FBAA65'
		},
		{
			name: 'Figma',
			color: '#A259FF'
		},
		{
			name: 'English (C2)',
			color: '#3F1019'
		},
		{
			name: '(Online) Marketing',
			color: '#F7B516'
		},
		{
			name: 'Scrum',
			color: '#014500'
		},
		{
			name: 'GraphQL',
			color: '#E536AB'
		},
		{
			name: 'Azure',
			color: '#0D569E'
		},
		{
			name: 'Vue',
			color: '#41B883'
		},
		{
			name: 'React',
			color: '#61DAFB'
		},
		{
			name: 'Svelte',
			color: '#FF3E00'
		},
		{
			name: 'TypeScript ⏳',
			color: '#3178C6'
		},
		{
			name: 'Jest ⏳',
			color: '#99425B'
		},
		{
			name: 'GCP ⏳',
			color: '#4285F4'
		}
	];
	return {
		body: {
			skills: skillsArr
		}
	};
};
