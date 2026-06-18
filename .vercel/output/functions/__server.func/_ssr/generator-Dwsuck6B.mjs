import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as SkewButton } from "./SkewButton-DQm-cxCW.mjs";
import { t as RIZZ_CATEGORIES } from "./rizz-lines-BzOjcbPk.mjs";
import { t as SectionLabel } from "./SectionLabel-cVhLYZyM.mjs";
import { c as Share2, g as Flame, s as Shuffle, v as Copy } from "../_libs/lucide-react.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { r as shareWhatsApp, t as copyToClipboard } from "./share-vCaAEs8W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/generator-Dwsuck6B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var useReactions = create()(persist((set) => ({
	counts: {},
	toggle: (key) => set((s) => {
		const cur = s.counts[key] ?? 0;
		return { counts: {
			...s.counts,
			[key]: cur + 1
		} };
	})
}), { name: "rizz-reactions-v1" }));
function GeneratorPage() {
	const [cat, setCat] = (0, import_react.useState)(RIZZ_CATEGORIES[0].id);
	const reactions = useReactions((s) => s.counts);
	const toggle = useReactions((s) => s.toggle);
	const current = (0, import_react.useMemo)(() => RIZZ_CATEGORIES.find((c) => c.id === cat), [cat]);
	const [shuffle, setShuffle] = (0, import_react.useState)(0);
	const shuffledLines = (0, import_react.useMemo)(() => {
		const arr = [...current.lines];
		let s = shuffle * 9301 + 49297;
		for (let i = arr.length - 1; i > 0; i--) {
			s = (s * 9301 + 49297) % 233280;
			const j = Math.floor(s / 233280 * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	}, [current, shuffle]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-6 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "02",
							label: "Generator"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]",
							children: "300+ Lines."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif italic text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#d4ff00]",
							style: { textShadow: "0 0 30px rgba(212,255,0,0.35)" },
							children: "Zero fumble."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-white/60 max-w-xl text-lg",
							children: "Pick a category. Copy what fits. Send it. Your future self thanks you."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2 overflow-x-auto no-scrollbar pb-2 -mx-6 px-6 mb-10 border-b border-white/10",
					children: RIZZ_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setCat(c.id);
							setShuffle(0);
						},
						className: `shrink-0 px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-wider border-b-2 transition flex items-center gap-2 -mb-px ${cat === c.id ? "border-[#d4ff00] text-[#d4ff00]" : "border-transparent text-white/40 hover:text-white"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.emoji }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.name })]
					}, c.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-8 flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-14 border border-[#d4ff00]/40 bg-[#d4ff00]/5 grid place-items-center text-2xl",
							children: current.emoji
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-extrabold text-white uppercase tracking-tight",
							children: current.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-white/50",
							children: current.description
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkewButton, {
						variant: "outline",
						size: "sm",
						onClick: () => setShuffle((s) => s + 1),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: "size-3.5" }), " Shuffle"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: { opacity: 0 },
						transition: { duration: .3 },
						className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10",
						children: shuffledLines.map((line, i) => {
							const key = `${cat}-${i}`;
							const count = reactions[key] ?? 0;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								transition: { delay: i * .015 },
								className: "bg-[#050505] p-6 flex flex-col gap-4 group hover:bg-[#0a0a0c] transition relative overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-[9px] uppercase tracking-widest text-white/30 font-bold",
										children: ["LN.", String(i + 1).padStart(3, "0")]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "flex-1 text-white text-base leading-relaxed",
										children: line
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-t border-white/5 pt-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => toggle(key),
											className: "flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white/40 hover:text-[#d4ff00] transition",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: `size-3.5 ${count > 0 ? "text-[#d4ff00]" : ""}` }),
												" ",
												count
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: async () => {
													await copyToClipboard(line) ? toast.success("Copied. Use wisely.") : toast.error("Copy failed.");
												},
												className: "size-8 grid place-items-center hover:bg-white/5 text-white/50 hover:text-[#d4ff00] transition",
												"aria-label": "Copy",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => shareWhatsApp(line),
												className: "size-8 grid place-items-center hover:bg-white/5 text-white/50 hover:text-[#d4ff00] transition",
												"aria-label": "Share",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-3.5" })
											})]
										})]
									})
								]
							}, key);
						})
					}, cat + shuffle)
				})
			]
		})
	});
}
//#endregion
export { GeneratorPage as component };
