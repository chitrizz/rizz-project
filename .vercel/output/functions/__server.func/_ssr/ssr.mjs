//#region node_modules/.nitro/vite/services/ssr/index.js
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-DEK1YX-W.mjs").then((m) => m.default ?? m);
	return serverEntryPromise;
}
var server_default = { async fetch(request, env, ctx) {
	try {
		return await (await getServerEntry()).fetch(request, env, ctx);
	} catch (error) {
		console.error(error);
		return new Response("Internal Server Error", {
			status: 500,
			headers: { "content-type": "text/plain" }
		});
	}
} };
//#endregion
export { server_default as default };
