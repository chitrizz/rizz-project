import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionLabel-BZFuGHTC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var SkewButton = (0, import_react.forwardRef)(function SkewButton({ variant = "primary", size = "md", className, children, ...rest }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref,
		className: cn("relative inline-flex items-center justify-center font-bold uppercase tracking-tighter cursor-pointer transition-all duration-300 transform -skew-x-12 select-none disabled:opacity-50 disabled:cursor-not-allowed", {
			sm: "px-5 py-2.5 text-xs",
			md: "px-7 py-3.5 text-sm",
			lg: "px-10 py-5 text-base"
		}[size], {
			primary: "bg-[#d4ff00] text-black hover:bg-white shadow-[0_0_0_1px_#d4ff00,0_0_28px_-6px_#d4ff00] hover:shadow-[0_0_0_1px_#fff,0_0_36px_-4px_#fff]",
			outline: "bg-transparent text-white border border-white/25 hover:bg-white/5 hover:border-white/60",
			ghost: "bg-white/5 text-white hover:bg-white/10"
		}[variant], className),
		...rest,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block skew-x-12 flex items-center gap-2",
			children
		})
	});
});
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
export { SkewButton as n, cn as r, SectionLabel as t };
