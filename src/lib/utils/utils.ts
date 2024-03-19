import { notificationMessage } from '$lib/store';

export function onCopyEmailToClipboard(short: string, domain: string) {
	const email = `${short}@${domain}`;

	setTimeout(async () => {
		//date to retrigger the #key in the notification component
		//while pressing the same button again
		notificationMessage.set(`${email}=${Date.now()}`);
		await navigator.clipboard.writeText(email);
	});
}

export function getRandomId() {
	return Math.random().toString(16).slice(2);
}

export function isIOSDevice() {
	return (
		['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(
			navigator.platform
		) ||
		// iPad on iOS 13 detection
		(navigator.userAgent.includes('Mac') && navigator.maxTouchPoints > 0)
	);
	// return navigator.maxTouchPoints > 0 && /iPad|iPhone|iPod/.test(navigator.userAgent);
}

export function deviceHasTouchScreen() {
	let hasTouchScreen = false;
	if ('maxTouchPoints' in navigator) {
		hasTouchScreen = navigator.maxTouchPoints > 0;
	} else {
		const mQ = matchMedia?.('(pointer:coarse)');
		if (mQ?.media === '(pointer:coarse)') {
			hasTouchScreen = !!mQ.matches;
		} else if ('orientation' in window) {
			hasTouchScreen = true; // deprecated, but good fallback
		} else {
			// Only as a last resort, fall back to user agent sniffing
			const UA = (navigator as any).userAgent;

			hasTouchScreen =
				/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
				/\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
		}
	}
	return hasTouchScreen;
}
