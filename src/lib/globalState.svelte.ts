import { getContext, setContext } from 'svelte';

export class GlobalState {
	notificationMessage = $state('');
	useAPAFormat = $state(false);
	_allowYouTubeEmbed = $state(false);

	constructor() {}

	set allowYouTubeEmbed(value: boolean) {
		this._allowYouTubeEmbed = value;
		if (this._allowYouTubeEmbed && !localStorage.getItem('allowYouTubeEmbed')) {
			localStorage.setItem('allowYouTubeEmbed', 'true');
		}
	}

	get allowYouTubeEmbed() {
		return this._allowYouTubeEmbed;
	}

	resetNotificationMessage() {
		this.notificationMessage = '';
	}

	copyEmailToClipboard(short: string, domain: string) {
		const email = `${short}@${domain}`;

		setTimeout(async () => {
			//date to retrigger the #key in the notification component
			//while pressing the same button again
			this.notificationMessage = `${email}=${Date.now()}`;
			await navigator.clipboard.writeText(email);
		});
	}
}

const GLOBAL_STATE_KEY = Symbol('state');

export function setGlobalState() {
	return setContext(GLOBAL_STATE_KEY, new GlobalState());
}

export function getGlobalState() {
	return getContext<ReturnType<typeof setGlobalState>>(GLOBAL_STATE_KEY);
}
