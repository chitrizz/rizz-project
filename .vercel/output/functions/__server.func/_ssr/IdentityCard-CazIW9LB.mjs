import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as useMotionValue, n as useTransform, o as motion, r as useMotionTemplate, t as useSpring } from "../_libs/framer-motion.mjs";
import { n as rankFor } from "./ranks-CsBP6wlg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/IdentityCard-CazIW9LB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TiltCard({ children, className, max = 12 }) {
	const ref = (0, import_react.useRef)(null);
	const mx = useMotionValue(.5);
	const my = useMotionValue(.5);
	const sx = useSpring(mx, {
		stiffness: 200,
		damping: 22
	});
	const sy = useSpring(my, {
		stiffness: 200,
		damping: 22
	});
	const rx = useTransform(sy, [0, 1], [max, -max]);
	const ry = useTransform(sx, [0, 1], [-max, max]);
	const styleVars = useMotionTemplate`--mx:${useTransform(sx, (v) => `${v * 100}%`)}; --my:${useTransform(sy, (v) => `${v * 100}%`)};`;
	function onMove(e) {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		mx.set((e.clientX - r.left) / r.width);
		my.set((e.clientY - r.top) / r.height);
	}
	function onLeave() {
		mx.set(.5);
		my.set(.5);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		className,
		style: { perspective: 1100 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			style: {
				rotateX: rx,
				rotateY: ry,
				transformStyle: "preserve-3d",
				...styleVars
			},
			className: "will-change-transform",
			children
		})
	});
}
var TIER_THEME = {
	Common: {
		bg: "linear-gradient(135deg, #ffffff 0%, #f2f2f5 20%, #dcdcd6 40%, #c4c4cc 55%, #e1e1e6 75%, #ffffff 100%)",
		outerGlow: "radial-gradient(ellipse at 25% 25%, rgba(180,180,200,0.4) 0%, transparent 60%), radial-gradient(ellipse at 75% 75%, rgba(150,150,170,0.25) 0%, transparent 60%)",
		shadow: "0 0 60px -10px rgba(150,150,170,0.35), 0 30px 60px -20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(0,0,0,0.06)",
		border: "rgba(180,180,190,0.6)",
		holoOpacity: .38,
		text: "#0f172a",
		subtext: "#64748b",
		accentText: "#475569",
		scoreText: "#0f172a",
		barTrack: "rgba(0,0,0,0.08)",
		barFill: "linear-gradient(90deg, #94a3b8 0%, #cbd5e1 50%, #64748b 100%)",
		barGlow: "rgba(148,163,184,0.3)",
		traitBg: "rgba(0,0,0,0.05)",
		traitBorder: "rgba(0,0,0,0.08)",
		traitText: "#475569",
		chipGrad: "conic-gradient(from 180deg, #94a3b8, #cbd5e1, #94a3b8)",
		barcode: "rgba(15,23,42,0.15)",
		rarityClass: "bg-slate-200/60 border-slate-400/30 text-slate-800"
	},
	Rare: {
		bg: "linear-gradient(135deg, #ffffff 0%, #e6f0fa 20%, #c0d8f0 40%, #a2bce4 55%, #c5dcf2 75%, #ffffff 100%)",
		outerGlow: "radial-gradient(ellipse at 25% 25%, rgba(14,165,233,0.45) 0%, transparent 60%), radial-gradient(ellipse at 75% 75%, rgba(2,132,199,0.3) 0%, transparent 60%)",
		shadow: "0 0 70px -10px rgba(14,165,233,0.4), 0 30px 60px -20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(2,132,199,0.06)",
		border: "rgba(125,175,225,0.6)",
		holoOpacity: .52,
		text: "#034078",
		subtext: "#3a7ca5",
		accentText: "#1d4ed8",
		scoreText: "#001f54",
		barTrack: "rgba(3,64,120,0.08)",
		barFill: "linear-gradient(90deg, #38bdf8 0%, #1d4ed8 50%, #0369a1 100%)",
		barGlow: "rgba(56,189,248,0.4)",
		traitBg: "rgba(3,64,120,0.05)",
		traitBorder: "rgba(3,64,120,0.1)",
		traitText: "#1d4ed8",
		chipGrad: "conic-gradient(from 180deg, #38bdf8, #1d4ed8, #38bdf8)",
		barcode: "rgba(3,64,120,0.18)",
		rarityClass: "bg-sky-100/60 border-sky-400/30 text-sky-800"
	},
	Epic: {
		bg: "linear-gradient(135deg, #ffffff 0%, #faf0ff 20%, #e6d3ff 40%, #cca3ff 55%, #e6d5ff 75%, #ffffff 100%)",
		outerGlow: "radial-gradient(ellipse at 25% 25%, rgba(168,85,247,0.45) 0%, transparent 60%), radial-gradient(ellipse at 75% 75%, rgba(192,38,211,0.3) 0%, transparent 60%)",
		shadow: "0 0 70px -10px rgba(168,85,247,0.4), 0 30px 60px -20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(168,85,247,0.06)",
		border: "rgba(200,160,250,0.6)",
		holoOpacity: .65,
		text: "#3b0764",
		subtext: "#701a75",
		accentText: "#a21caf",
		scoreText: "#2e004f",
		barTrack: "rgba(59,7,100,0.08)",
		barFill: "linear-gradient(90deg, #c084fc 0%, #a21caf 50%, #7e22ce 100%)",
		barGlow: "rgba(192,132,252,0.4)",
		traitBg: "rgba(59,7,100,0.05)",
		traitBorder: "rgba(59,7,100,0.1)",
		traitText: "#a21caf",
		chipGrad: "conic-gradient(from 180deg, #c084fc, #7e22ce, #c084fc)",
		barcode: "rgba(59,7,100,0.18)",
		rarityClass: "bg-purple-100/60 border-purple-400/30 text-purple-800"
	},
	Legendary: {
		bg: "linear-gradient(135deg, #ffffff 0%, #fffbea 20%, #fdf0bd 40%, #ebd060 55%, #fff1b8 75%, #ffffff 100%)",
		outerGlow: "radial-gradient(ellipse at 25% 25%, rgba(234,179,8,0.5) 0%, transparent 60%), radial-gradient(ellipse at 75% 75%, rgba(202,138,4,0.3) 0%, transparent 60%)",
		shadow: "0 0 80px -10px rgba(234,179,8,0.45), 0 30px 60px -20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(202,138,4,0.06)",
		border: "rgba(230,190,70,0.6)",
		holoOpacity: .76,
		text: "#451a03",
		subtext: "#78350f",
		accentText: "#b45309",
		scoreText: "#3b1702",
		barTrack: "rgba(69,26,3,0.08)",
		barFill: "linear-gradient(90deg, #fde047 0%, #ea580c 50%, #ca8a04 100%)",
		barGlow: "rgba(253,224,71,0.5)",
		traitBg: "rgba(69,26,3,0.05)",
		traitBorder: "rgba(69,26,3,0.1)",
		traitText: "#b45309",
		chipGrad: "conic-gradient(from 180deg, #fde047, #ca8a04, #fde047)",
		barcode: "rgba(69,26,3,0.2)",
		rarityClass: "bg-amber-100/60 border-amber-400/30 text-amber-800"
	},
	Mythic: {
		bg: "linear-gradient(135deg, #ffffff 0%, #fbf8ff 20%, #ebd5ff 40%, #cca3ff 55%, #ebd8ff 75%, #ffffff 100%)",
		outerGlow: "radial-gradient(ellipse at 20% 20%, rgba(234,179,8,0.45) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(236,72,153,0.45) 0%, transparent 55%), radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.35) 0%, transparent 65%)",
		shadow: "0 0 90px -10px rgba(139,92,246,0.5), 0 30px 60px -20px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(99,102,241,0.06)",
		border: "rgba(180,140,255,0.65)",
		holoOpacity: .9,
		text: "#1e1b4b",
		subtext: "#312e81",
		accentText: "#4338ca",
		scoreText: "#120e3d",
		barTrack: "rgba(30,27,75,0.08)",
		barFill: "linear-gradient(90deg, #a78bfa 0%, #ec4899 50%, #f59e0b 100%)",
		barGlow: "rgba(167,139,250,0.5)",
		traitBg: "rgba(30,27,75,0.05)",
		traitBorder: "rgba(30,27,75,0.1)",
		traitText: "#4338ca",
		chipGrad: "conic-gradient(from 180deg, #a78bfa, #ec4899, #f59e0b, #a78bfa)",
		barcode: "rgba(30,27,75,0.2)",
		rarityClass: "bg-indigo-100/60 border-indigo-400/30 text-indigo-800"
	}
};
var Inner = (0, import_react.forwardRef)(function Inner({ cardNumber, score, traits, username = "Subject Zero" }, ref) {
	const rank = rankFor(score);
	const theme = TIER_THEME[rank.rarity];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative w-full max-w-md mx-auto",
		style: { transform: "translateZ(0)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute -inset-10 blur-3xl pointer-events-none",
			style: { background: theme.outerGlow }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[1.586/1] w-full rounded-[20px] p-6 sm:p-7 overflow-hidden",
			style: {
				background: theme.bg,
				boxShadow: theme.shadow,
				border: `1px solid ${theme.border}`
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						position: "absolute",
						inset: "-20%",
						background: `linear-gradient(
                115deg,
                transparent 15%,
                rgba(255, 0, 128, 0.35) 30%,
                rgba(255, 230, 0, 0.35) 42%,
                rgba(0, 255, 128, 0.35) 50%,
                rgba(0, 128, 255, 0.35) 58%,
                rgba(128, 0, 255, 0.35) 70%,
                transparent 85%
              )`,
						backgroundSize: "200% 200%",
						backgroundPosition: `calc(var(--mx, 50%) * 1.6 - 30%) calc(var(--my, 50%) * 1.6 - 30%)`,
						mixBlendMode: "overlay",
						opacity: theme.holoOpacity * .9,
						filter: "blur(12px)",
						willChange: "background-position"
					} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						position: "absolute",
						inset: "-20%",
						background: `linear-gradient(
                115deg,
                transparent 20%,
                rgba(255, 0, 128, 0.45) 32%,
                rgba(255, 230, 0, 0.45) 44%,
                rgba(0, 255, 128, 0.45) 50%,
                rgba(0, 128, 255, 0.45) 58%,
                rgba(128, 0, 255, 0.45) 68%,
                transparent 80%
              )`,
						backgroundSize: "220% 220%",
						backgroundPosition: `calc(var(--mx, 50%) * 1.8 - 40%) calc(var(--my, 50%) * 1.8 - 40%)`,
						mixBlendMode: "color-dodge",
						opacity: theme.holoOpacity,
						filter: "blur(9px)",
						willChange: "background-position"
					} })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 rounded-[20px] pointer-events-none",
					style: {
						background: "linear-gradient(115deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.2) 48%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.2) 52%, rgba(255,255,255,0) 70%) 0 0 / 250% 100% no-repeat",
						animation: "sheen-pan 7s linear infinite",
						mixBlendMode: "screen"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute inset-0 pointer-events-none",
					style: {
						background: "radial-gradient(220px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.32), transparent 70%)",
						mixBlendMode: "screen"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grain-bg absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none",
					style: { backgroundSize: "140px 140px" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex justify-between items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[9px] uppercase tracking-[0.3em] mb-0.5",
						style: { color: theme.subtext },
						children: "Identity · Document"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl font-bold tracking-tight uppercase",
						style: { color: theme.text },
						children: cardNumber
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `px-2.5 py-0.5 border rounded-md backdrop-blur-sm ${theme.rarityClass}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[9px] font-bold tracking-widest uppercase font-mono",
							children: rank.rarity
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-2.5 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-7 w-10 rounded-[4px] relative overflow-hidden flex-shrink-0",
						style: {
							background: theme.chipGrad,
							boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1), inset 0 0 6px rgba(255,255,255,0.2)"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 grid grid-cols-3 grid-rows-2 gap-px p-px opacity-30",
							children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-black/20 rounded-[1px]" }, i))
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-[2px] items-end h-6 flex-1",
						children: Array.from({ length: 32 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
							display: "inline-block",
							width: 1.5,
							height: `${30 + i * 53 % 70}%`,
							backgroundColor: theme.barcode
						} }, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-3.5 space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1.5 rounded-full overflow-hidden",
						style: { background: theme.barTrack },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full animate-pulse-soft",
							style: {
								width: `${score}%`,
								background: theme.barFill,
								boxShadow: `0 0 8px ${theme.barGlow}`
							}
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between font-mono text-[9px] uppercase font-bold tracking-widest",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: theme.accentText },
							children: "Charisma Level"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: theme.subtext },
							children: rank.title
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex flex-wrap gap-1.5 mt-3",
					children: traits.slice(0, 4).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[9px] px-2 py-0.5 rounded font-mono uppercase tracking-wider backdrop-blur-sm",
						style: {
							background: theme.traitBg,
							border: `1px solid ${theme.traitBorder}`,
							color: theme.traitText
						},
						children: t
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-3.5 flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[9px] uppercase tracking-widest",
							style: { color: theme.subtext },
							children: "Bearer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base font-semibold tracking-tight",
							style: { color: theme.text },
							children: username
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[44px] font-bold leading-none tracking-tighter",
							style: { color: theme.scoreText },
							children: score
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[9px] uppercase tracking-widest mt-0.5",
							style: { color: theme.subtext },
							children: "Rizz Score / 100"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-2 left-7 font-mono text-[8px] uppercase tracking-[0.3em]",
					style: { color: theme.subtext + "60" },
					children: "haverizz.com · v2.0.4"
				})
			]
		})]
	});
});
var IdentityCard = (0, import_react.forwardRef)(function IdentityCard(props, ref) {
	if (props.tilt === false) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inner, {
		ref,
		...props
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
		className: "w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inner, {
			ref,
			...props
		})
	});
});
//#endregion
export { IdentityCard as t };
