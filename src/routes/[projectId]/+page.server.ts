import { PLACEHOLDERS } from '$lib/constants/placeholders.js';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const project = PLACEHOLDERS.find((pj) => pj.id === params.projectId);

	if (project) {
		return { project };
	} else {
		throw error(404, `Das Projekt "${params.projectId}" konnte nicht gefunden werden.`);
	}
};
