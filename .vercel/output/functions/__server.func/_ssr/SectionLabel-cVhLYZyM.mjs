import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionLabel-cVhLYZyM.js
var import_jsx_runtime = require_jsx_runtime();
function SectionLabel({ index, label, tone = "lime" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 font-mono",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `text-[10px] font-bold tracking-[0.3em] uppercase ${tone === "lime" ? "text-[#d4ff00]" : "text-white"}`,
				children: index
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-white/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] font-bold tracking-[0.3em] uppercase text-white/60",
				children: label
			})
		]
	});
}
//#endregion
export { SectionLabel as t };
