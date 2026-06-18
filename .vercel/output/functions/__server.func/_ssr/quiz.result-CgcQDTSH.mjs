import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as SkewButton, t as SectionLabel } from "./SectionLabel-BZFuGHTC.mjs";
import { _ as Download, a as Sparkles, f as MessageCircle, m as Link2, n as Twitter, u as RotateCw } from "../_libs/lucide-react.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as shareTwitter, r as shareWhatsApp, t as copyToClipboard } from "./share-vCaAEs8W.mjs";
import { n as rankFor } from "./ranks-CsBP6wlg.mjs";
import { t as useIdentity } from "./identity-C8JpHuFf.mjs";
import { t as IdentityCard } from "./IdentityCard-CazIW9LB.mjs";
import { t as confetti_module_default } from "../_libs/canvas-confetti.mjs";
import { t as toPng } from "../_libs/html-to-image.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quiz.result-CgcQDTSH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ResultPage() {
	const latest = useIdentity((s) => s.latest);
	const navigate = useNavigate();
	const cardRef = (0, import_react.useRef)(null);
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!latest) {
			navigate({ to: "/quiz" });
			return;
		}
		const t = setTimeout(() => {
			setRevealed(true);
			if (latest.score >= 60) confetti_module_default({
				particleCount: 160,
				spread: 110,
				origin: { y: .4 },
				colors: [
					"#d4ff00",
					"#22d3ee",
					"#ff2e93",
					"#ffd400",
					"#ffffff"
				]
			});
		}, 350);
		return () => clearTimeout(t);
	}, [latest, navigate]);
	if (!latest) return null;
	const rank = rankFor(latest.score);
	async function downloadCard() {
		if (!cardRef.current) return;
		try {
			const dataUrl = await toPng(cardRef.current, {
				backgroundColor: "#050505",
				pixelRatio: 2
			});
			const link = document.createElement("a");
			link.download = `rizz-card-${latest.cardNumber}.png`;
			link.href = dataUrl;
			link.click();
		} catch {
			toast.error("Couldn't generate image. Try again.");
		}
	}
	const shareText = `I scored ${latest.score}/100 on HaveRizz — Rank: ${rank.title}. Find out your Rizz: haverizz.com`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[calc(100vh-120px)] px-6 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					className: "text-center mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "—",
							label: "Your Verdict"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]",
							children: "You're a"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 font-serif italic text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#d4ff00]",
							style: { textShadow: "0 0 40px rgba(212,255,0,0.4)" },
							children: [rank.title, "."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-white/60 mt-5 max-w-md mx-auto",
							children: rank.tagline
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 40,
						scale: .94
					},
					animate: revealed ? {
						opacity: 1,
						y: 0,
						scale: 1
					} : {},
					transition: {
						duration: .8,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdentityCard, {
						ref: cardRef,
						cardNumber: latest.cardNumber,
						score: latest.score,
						traits: latest.traits,
						username: `@anon_${latest.cardNumber.slice(3)}`
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: revealed ? {
						opacity: 1,
						y: 0
					} : {},
					transition: {
						duration: .5,
						delay: .3
					},
					className: "mt-12 flex flex-wrap gap-3 justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkewButton, {
							onClick: downloadCard,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Download"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkewButton, {
							variant: "outline",
							onClick: () => shareTwitter(shareText),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "size-4" }), " Tweet"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkewButton, {
							variant: "outline",
							onClick: () => shareWhatsApp(shareText),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), " WhatsApp"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkewButton, {
							variant: "outline",
							onClick: async () => {
								await copyToClipboard(shareText) ? toast.success("Copied. Paste it anywhere.") : toast.error("Copy failed.");
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "size-4" }), " Copy"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid sm:grid-cols-2 gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/quiz",
						className: "group p-7 border border-white/10 bg-[#0a0a0c] hover:border-[#d4ff00]/60 transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "size-4 text-[#d4ff00]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase tracking-widest text-white/60 font-bold",
									children: "Re-test"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-extrabold text-white uppercase tracking-tight",
								children: "10 new questions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-white/50",
								children: "Different vibe, different score."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/astro",
						className: "group p-7 border border-white/10 bg-[#0a0a0c] hover:border-[#22d3ee]/60 transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-[#22d3ee]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase tracking-widest text-white/60 font-bold",
									children: "Try AstroRizz"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-extrabold text-white uppercase tracking-tight",
								children: "Check compatibility"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-white/50",
								children: "Before you fumble a perfectly good crush."
							})
						]
					})]
				})
			]
		})
	});
}
//#endregion
export { ResultPage as component };
