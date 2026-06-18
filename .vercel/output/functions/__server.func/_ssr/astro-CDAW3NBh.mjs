import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as SkewButton } from "./SkewButton-DQm-cxCW.mjs";
import { t as SectionLabel } from "./SectionLabel-cVhLYZyM.mjs";
import { a as Sparkles, b as Clock, c as Share2, h as Heart, i as TriangleAlert, v as Copy } from "../_libs/lucide-react.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as getCombo, n as SYMBOL, r as ZodiacPicker } from "./ZodiacPicker-DxmeY79W.mjs";
import { r as shareWhatsApp, t as copyToClipboard } from "./share-vCaAEs8W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/astro-CDAW3NBh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AstroPage() {
	const [you, setYou] = (0, import_react.useState)(null);
	const [them, setThem] = (0, import_react.useState)(null);
	const combo = you && them ? getCombo(you, them) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-6 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "03",
							label: "AstroRizz"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]",
							children: "Cosmic"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif italic text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#d4ff00]",
							style: { textShadow: "0 0 30px rgba(212,255,0,0.35)" },
							children: "compatibility."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-white/60 max-w-xl text-lg",
							children: "Pick both signs. Get your real compatibility, opener, strategy, flags, and best time to text."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-6 bg-[#050505]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZodiacPicker, {
							label: "Your sign",
							value: you,
							onChange: setYou
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-6 bg-[#050505]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZodiacPicker, {
							label: "Their sign",
							value: them,
							onChange: setThem
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: combo && you && them && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: { opacity: 0 },
					transition: {
						duration: .6,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "border border-white/10 p-6 sm:p-10 bg-[#0a0a0c] holo-edge relative overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-12 right-12 w-60 h-60 bg-[#d4ff00]/10 blur-3xl rounded-full" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center justify-between flex-wrap gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-6xl",
										children: SYMBOL[you]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-3xl font-extrabold text-white/30",
										children: "×"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-6xl",
										children: SYMBOL[them]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-7xl sm:text-8xl font-extrabold text-[#d4ff00] leading-none tracking-tighter",
									style: { textShadow: "0 0 30px rgba(212,255,0,0.4)" },
									children: combo.compatibility
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-base text-white/50 pb-2 uppercase",
									children: "% match"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-[#d4ff00]" }),
									label: "Best opener",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-serif italic text-xl text-white leading-snug",
										children: [
											"\"",
											combo.opener,
											"\""
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2 mt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkewButton, {
											size: "sm",
											variant: "outline",
											onClick: async () => {
												await copyToClipboard(combo.opener) ? toast.success("Copied.") : toast.error("Copy failed.");
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" }), " Copy"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkewButton, {
											size: "sm",
											variant: "outline",
											onClick: () => shareWhatsApp(combo.opener),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-3" }), " Send"]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-[#22d3ee]" }),
									label: "Conversation strategy",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white/80 leading-relaxed",
										children: combo.strategy
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-3.5 text-[#d4ff00]" }),
										label: "Green flags",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-white/80 leading-relaxed",
											children: combo.greenFlags
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-3.5 text-[#ff2e93]" }),
										label: "Red flags",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-white/80 leading-relaxed",
											children: combo.redFlags
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5 text-[#ffd400]" }),
										label: "Best time to text",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-white/80 leading-relaxed",
											children: combo.bestTime
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-[#ff2e93]" }),
										label: "Flirting style",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-white/80 leading-relaxed",
											children: combo.flirtingStyle
										})
									})]
								})
							]
						})
					]
				}) }),
				!combo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center font-mono text-[10px] uppercase tracking-widest text-white/30 mt-12",
					children: "↑ Pick both signs to reveal the reading"
				})
			]
		})
	});
}
function Section({ icon, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-5 bg-white/[0.02] border border-white/10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 mb-3",
			children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold",
				children: label
			})]
		}), children]
	});
}
//#endregion
export { AstroPage as component };
