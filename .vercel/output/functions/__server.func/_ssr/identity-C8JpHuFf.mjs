import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/identity-C8JpHuFf.js
var useIdentity = create()(persist((set) => ({
	latest: null,
	history: [],
	save: (i) => set((s) => ({
		latest: i,
		history: [i, ...s.history].slice(0, 10)
	})),
	clear: () => set({
		latest: null,
		history: []
	})
}), { name: "rizz-identity-v1" }));
//#endregion
export { useIdentity as t };
