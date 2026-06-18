import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as useMotionValue, n as useTransform, o as motion, r as useMotionTemplate, t as useSpring } from "../_libs/framer-motion.mjs";
import { n as rankFor } from "./ranks-CsBP6wlg.mjs";
import { t as ShineBorder } from "./shine-border-BWdCmEk2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/IdentityCard-Dgbof_AG.js
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
var RARITY_COLOR = {
	Common: "text-white/80 border-white/25 bg-white/5",
	Rare: "text-[#22d3ee] border-[#22d3ee]/50 bg-[#22d3ee]/10",
	Epic: "text-[#ff2e93] border-[#ff2e93]/50 bg-[#ff2e93]/10",
	Legendary: "text-[#ffd400] border-[#ffd400]/50 bg-[#ffd400]/10",
	Mythic: "text-[#d4ff00] border-[#d4ff00]/60 bg-[#d4ff00]/10"
};
var Inner = (0, import_react.forwardRef)(function Inner({ cardNumber, score, traits, username = "Subject Zero" }, ref) {
	const rank = rankFor(score);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative w-full max-w-md mx-auto",
		style: { transform: "translateZ(0)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(212,255,0,0.35),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(255,46,147,0.3),transparent_60%)] blur-3xl pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShineBorder, {
			borderRadius: 20,
			borderWidth: 2,
			duration: 9,
			color: [
				"#d4ff00",
				"#22d3ee",
				"#ff2e93",
				"#ffd400"
			],
			className: "relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[1.586/1] w-full rounded-[20px] p-6 sm:p-7 overflow-hidden holo-frame",
				style: {
					background: "linear-gradient(135deg, #0a0a0c 0%, #121214 55%, #0a0a0c 100%)",
					boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 0 0 1px rgba(255,255,255,0.04), 0 30px 80px -20px rgba(0,0,0,0.7), 0 0 60px -20px rgba(212,255,0,0.25)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-60 pointer-events-none",
						style: {
							background: "radial-gradient(110% 80% at 0% 0%, rgba(212,255,0,0.18), transparent 55%), radial-gradient(110% 80% at 100% 100%, rgba(255,46,147,0.18), transparent 55%), radial-gradient(90% 60% at 80% 10%, rgba(34,211,238,0.15), transparent 60%)",
							mixBlendMode: "screen"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 holo-sheen rounded-[20px]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute inset-0 pointer-events-none opacity-70",
						style: {
							background: "radial-gradient(220px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.22), transparent 60%)",
							mixBlendMode: "screen"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grain-bg absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none",
						style: { backgroundSize: "140px 140px" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex justify-between items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.3em] text-white/45 mb-1",
							children: "Identity · Document"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl font-bold text-white tracking-tight uppercase",
							children: cardNumber
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `px-2.5 py-1 border rounded-md backdrop-blur-sm ${RARITY_COLOR[rank.rarity]}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] font-bold tracking-widest uppercase font-mono",
								children: rank.rarity
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-3 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-7 w-10 rounded-[4px] relative overflow-hidden",
							style: {
								background: "conic-gradient(from 200deg at 50% 50%, #d4ff00, #22d3ee, #ff2e93, #ffd400, #d4ff00)",
								boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4), inset 0 0 8px rgba(255,255,255,0.4)"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 grid grid-cols-3 grid-rows-2 gap-px p-px opacity-60",
								children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-black/40" }, i))
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-[2px] items-end h-6 flex-1",
							children: Array.from({ length: 32 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-white/30",
								style: {
									width: 1.5,
									height: `${30 + i * 53 % 70}%`
								}
							}, i))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-4 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1.5 bg-white/10 w-full rounded-full overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full",
								style: {
									width: `${score}%`,
									background: "linear-gradient(90deg, #d4ff00, #22d3ee, #ff2e93)",
									boxShadow: "0 0 12px rgba(212,255,0,0.6)"
								}
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between font-mono text-[9px] uppercase font-bold tracking-widest",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#d4ff00]",
								children: "Charisma Level"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/80",
								children: rank.title
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative flex flex-wrap gap-1.5 mt-3",
						children: traits.slice(0, 4).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[9px] px-2 py-0.5 rounded bg-white/[0.06] border border-white/15 text-white/80 font-mono uppercase tracking-wider backdrop-blur-sm",
							children: t
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-4 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[9px] uppercase tracking-widest text-white/45",
								children: "Bearer"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base font-medium text-white tracking-tight",
								children: username
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-[48px] font-bold leading-none tracking-tighter",
								style: {
									background: "linear-gradient(180deg, #ffffff 0%, #d4ff00 100%)",
									WebkitBackgroundClip: "text",
									backgroundClip: "text",
									color: "transparent",
									filter: "drop-shadow(0 0 8px rgba(212,255,0,0.35))"
								},
								children: score
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[9px] uppercase tracking-widest text-white/45 mt-0.5",
								children: "Rizz Score / 100"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-2 left-7 font-mono text-[8px] uppercase tracking-[0.3em] text-white/20",
						children: "haverizz.com · v2.0.4"
					})
				]
			})
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
