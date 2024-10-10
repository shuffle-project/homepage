import { writable } from 'svelte/store';

export const notificationMessage = writable('');

export const useAPAFormat = writable(false);
export const allowYouTubeEmbed = writable(false);
