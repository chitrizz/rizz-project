//#region node_modules/.nitro/vite/services/ssr/assets/share-vCaAEs8W.js
function shareWhatsApp(text) {
	const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
	window.open(url, "_blank", "noopener,noreferrer");
}
function shareTwitter(text) {
	const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
	window.open(url, "_blank", "noopener,noreferrer");
}
async function copyToClipboard(text) {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		return false;
	}
}
//#endregion
export { shareTwitter as n, shareWhatsApp as r, copyToClipboard as t };
