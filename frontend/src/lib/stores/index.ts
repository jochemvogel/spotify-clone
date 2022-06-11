import { writable } from 'svelte/store';

// Writables
export const currentlySelectedCard = writable('null');
export const isCurrentlyPlaying = writable(false);

export const isVideoVisible = writable(true);
export const currentVideoTime = writable(0);
export const currentVideoDuration = writable(0);
export const videoVolume = writable(0.5);

export const videoCardsArr = writable([]);
export const queueVideoCardsArr = writable([]);
export const favoritePlaylistsArr = writable([]);

export const pwaDeferredPrompt = writable(null);
