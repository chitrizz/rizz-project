import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as cn } from "./SkewButton-DQm-cxCW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shine-border-BWdCmEk2.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Shine Border — animated gradient outline. Tailwind v4 friendly.
* Uses CSS mask trick so only the border stroke shows the moving gradient.
*/
function ShineBorder({ borderRadius = 12, borderWidth = 1, duration = 14, color = "#FFFFFF", className, children }) {
	const maskStyle = {
		inset: 0,
		borderRadius,
		padding: borderWidth,
		background: `radial-gradient(transparent, transparent, ${Array.isArray(color) ? color.join(",") : `${color},${color}`}, transparent, transparent) 0% 0% / 300% 300%`,
		WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
		WebkitMaskComposite: "xor",
		mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
		maskComposite: "exclude",
		pointerEvents: "none",
		"--duration": `${duration}s`
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: { borderRadius },
		className: cn("relative", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			style: maskStyle,
			className: "absolute animate-shine"
		}), children]
	});
}
//#endregion
export { ShineBorder as t };
