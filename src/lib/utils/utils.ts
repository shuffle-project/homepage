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
