import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as SkewButton } from "./SkewButton-DQm-cxCW.mjs";
import { t as SectionLabel } from "./SectionLabel-cVhLYZyM.mjs";
import { A as ArrowUpRight, y as Flame } from "../_libs/lucide-react.mjs";
import { a as useScroll, i as useMotionValue, n as useTransform, o as motion, t as useSpring } from "../_libs/framer-motion.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as IdentityCard } from "./IdentityCard-Dgbof_AG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-G32Zl49K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Magnetic({ children, className, strength = .35 }) {
	const ref = (0, import_react.useRef)(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const sx = useSpring(x, {
		stiffness: 200,
		damping: 18,
		mass: .4
	});
	const sy = useSpring(y, {
		stiffness: 200,
		damping: 18,
		mass: .4
	});
	function onMove(e) {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const cx = r.left + r.width / 2;
		const cy = r.top + r.height / 2;
		x.set((e.clientX - cx) * strength);
		y.set((e.clientY - cy) * strength);
	}
	function onLeave() {
		x.set(0);
		y.set(0);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		style: {
			x: sx,
			y: sy
		},
		className,
		children
	});
}
function Marquee({ children, speed = "normal", className, reverse }) {
	const anim = speed === "fast" ? "animate-marquee-fast" : speed === "slow" ? "animate-marquee-slow" : "animate-marquee";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `relative w-full overflow-hidden ${className ?? ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `flex w-max ${anim}`,
			style: reverse ? { animationDirection: "reverse" } : void 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0 items-center gap-12 pr-12",
				children
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0 items-center gap-12 pr-12",
				"aria-hidden": true,
				children
			})]
		})
	});
}
function RevealText({ children, className, as = "h2", delay = 0, once = true }) {
	const words = children.split(" ");
	const Comp = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		className,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once,
			margin: "-80px"
		},
		children: words.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block overflow-hidden align-bottom mr-[0.25em]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				className: "inline-block will-change-transform",
				variants: {
					hidden: {
						y: "110%",
						opacity: 0
					},
					show: {
						y: 0,
						opacity: 1
					}
				},
				transition: {
					duration: .7,
					delay: delay + i * .05,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				children: w
			})
		}, i))
	});
}
function FadeUp({ children, delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .7,
			delay,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className,
		children
	});
}
var FEATURES = [
	{
		to: "/quiz",
		num: "01",
		title: "The Quiz",
		desc: "10 scenario questions. One Identity Card. Shareable in seconds.",
		tag: "Flagship",
		span: "md:col-span-2 md:row-span-2",
		big: true
	},
	{
		to: "/generator",
		num: "02",
		title: "Generator",
		desc: "15 categories. 300+ curated lines. From Corporate to Dark Humor.",
		tag: "300+ lines",
		span: "md:col-span-2",
		big: false
	},
	{
		to: "/astro",
		num: "03",
		title: "AstroRizz",
		desc: "144 zodiac combos. Compatibility, opener, strategy, flags.",
		tag: "Cosmic",
		span: "",
		big: false
	},
	{
		to: "/horoscope",
		num: "04",
		title: "Horoscope",
		desc: "Daily charisma forecast. Score, lucky time, icebreaker.",
		tag: "Daily",
		span: "",
		big: false
	},
	{
		to: "/arena",
		num: "05",
		title: "Arena",
		desc: "Post your best lines. Community fires or fizzes. Climb the ladder.",
		tag: "Community",
		span: "md:col-span-2",
		big: false
	},
	{
		to: "/rate",
		num: "06",
		title: "Rate My Rizz",
		desc: "Submit a line. The internet decides: Smooth, Mid, or Cringe.",
		tag: "Brutal vote",
		span: "md:col-span-2",
		big: false
	}
];
var TOP_RIZZ = [
	{
		user: "CosmicRizzler",
		score: 98
	},
	{
		user: "SmoothPotato",
		score: 94
	},
	{
		user: "NeonMonk",
		score: 91
	},
	{
		user: "VelvetWizard",
		score: 89
	},
	{
		user: "QuietBandit",
		score: 87
	},
	{
		user: "MidnightSage",
		score: 96
	},
	{
		user: "FlirtyPenguin",
		score: 88
	},
	{
		user: "FeralCharmer",
		score: 84
	}
];
function Home() {
	const heroRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const heroOpacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	const cardY = useTransform(scrollYProgress, [0, 1], [0, -120]);
	const cardScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				ref: heroRef,
				className: "relative px-6 pt-12 pb-32 min-h-[88vh]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: {
						y: heroY,
						opacity: heroOpacity
					},
					className: "max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 space-y-8 z-10",
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
								className: "inline-flex items-center gap-2 bg-[#0f0f10] border border-white/10 px-3 py-1.5 rounded-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] uppercase tracking-[0.25em] font-bold text-white/60",
									children: "System Online · 12,847 cards minted today"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
								as: "h1",
								className: "font-display text-[clamp(60px,11vw,148px)] font-extrabold leading-[0.82] tracking-tighter uppercase text-white",
								children: "Have"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									x: -20
								},
								animate: {
									opacity: 1,
									x: 0
								},
								transition: {
									duration: .8,
									delay: .4,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								className: "-mt-6 sm:-mt-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif italic text-[#d4ff00] text-[clamp(72px,13vw,176px)] leading-[0.85] tracking-tight pr-4 inline-block",
									style: { textShadow: "0 0 60px rgba(212,255,0,0.35)" },
									children: "Rizz?"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
								delay: .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "max-w-lg text-base sm:text-lg text-white/60 leading-relaxed",
									children: [
										"The definitive biometric analysis of your social frequency. Get your",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white font-medium",
											children: "Rizz Identity Card"
										}),
										", find your zodiac match, and dominate the Arena."
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
								delay: .3,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-4 items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/quiz",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkewButton, {
											size: "lg",
											children: "Start The Quiz →"
										})
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
										strength: .25,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/arena",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkewButton, {
												size: "lg",
												variant: "outline",
												children: "Enter Arena"
											})
										})
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
								delay: .45,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pt-10 grid grid-cols-3 gap-8 border-t border-white/5 max-w-xl",
									children: [
										{
											v: "2.4M",
											l: "Cards minted"
										},
										{
											v: "94%",
											l: "Share rate"
										},
										{
											v: "15",
											l: "Categories"
										}
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-3xl sm:text-4xl font-bold text-white tracking-tighter",
										children: s.v
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase tracking-widest text-white/40 mt-1",
										children: s.l
									})] }, s.l))
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						style: {
							y: cardY,
							scale: cardScale
						},
						className: "lg:col-span-5 relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 40,
								rotate: 6
							},
							animate: {
								opacity: 1,
								y: 0,
								rotate: 3
							},
							transition: {
								duration: 1,
								delay: .3,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdentityCard, {
									cardNumber: "RZ-00412",
									score: 88,
									traits: [
										"Eye Contact King",
										"Texting Wizard",
										"Smooth Operator"
									],
									username: "@subject_zero"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										duration: .8,
										delay: .9
									},
									className: "absolute -bottom-8 -right-4 w-36 glass-strong border border-white/15 rounded-md p-3 -rotate-6 animate-float shadow-2xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1.5",
										children: "Pulse"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex gap-1 items-end h-10",
										children: [
											4,
											8,
											6,
											10,
											5,
											9,
											7
										].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-1 bg-[#d4ff00]",
											style: {
												height: `${h * 4}px`,
												boxShadow: "0 0 6px #d4ff00"
											}
										}, i))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										opacity: 0,
										scale: .7
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									transition: {
										duration: .6,
										delay: 1.1
									},
									className: "absolute -top-4 -left-4 transform -skew-x-12 bg-[#ff2e93] text-white px-3 py-1.5 border border-[#ff2e93]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block skew-x-12 font-mono text-[10px] font-bold uppercase tracking-widest",
										children: "Epic Tier"
									})
								})
							]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.4em] text-white/30 flex flex-col items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scroll" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-8 w-px bg-white/20" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-white/10 py-5 bg-[#050505] relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
					speed: "normal",
					children: Array.from({ length: 2 }).map((_, k) => TOP_RIZZ.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 font-mono text-sm uppercase tracking-wider",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/30 font-bold",
								children: "★"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-white/60",
								children: ["@", r.user]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#d4ff00] font-bold",
								children: r.score
							})
						]
					}, `${k}-${i}`)))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinnedHowItWorks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 py-32 relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "—",
							label: "The Receipts"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
							as: "h2",
							className: "mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter text-white leading-[0.95] max-w-4xl",
							children: "Most people fumble. The data is brutal."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10",
							children: [
								{
									v: "82%",
									l: "of first messages end in a permanent 'Seen.'"
								},
								{
									v: "67%",
									l: "freeze when texting their crush."
								},
								{
									v: "1/3",
									l: "still rely on arranged marriage — never learned to flirt."
								},
								{
									v: "12%",
									l: "actually know how to start a conversation."
								}
							].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeUp, {
								delay: i * .08,
								className: "bg-[#050505] p-8 sm:p-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-5xl sm:text-6xl font-extrabold text-white tracking-tighter",
									children: s.v
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-white/50 leading-relaxed max-w-[28ch]",
									children: s.l
								})]
							}, i))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 py-32 relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between flex-wrap gap-6 mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "—",
							label: "The Arsenal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
							as: "h2",
							className: "mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]",
							children: "Six weapons. One mission."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-widest text-white/30",
							children: "v.2.0.4"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-4 auto-rows-[minmax(220px,auto)] grid-flow-row-dense gap-4",
						children: FEATURES.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
							className: `${f.span} min-w-0`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: f.to,
								className: "group relative flex flex-col justify-between h-full min-h-[220px] p-7 sm:p-8 border border-white/10 bg-[#0a0a0c] hover:border-[#d4ff00]/60 hover:bg-[#0f0f10] transition-all overflow-hidden rounded-md min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-12 -right-12 w-40 h-40 bg-[#d4ff00]/0 group-hover:bg-[#d4ff00]/10 blur-3xl transition-all duration-700" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex justify-between items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs font-bold tracking-widest text-[#d4ff00]",
											children: f.num
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] text-white/40 uppercase tracking-widest text-right shrink-0",
											children: f.tag
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative mt-8 min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: `font-display font-extrabold uppercase tracking-tighter text-white leading-[0.9] break-words ${f.big ? "text-[clamp(34px,5vw,68px)]" : "text-[clamp(22px,2.6vw,38px)]"}`,
												children: f.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm text-white/55 leading-relaxed max-w-sm",
												children: f.desc
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-6 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-white/60 group-hover:text-[#d4ff00] transition",
												children: ["Open ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
											})
										]
									})
								]
							})
						}, f.to))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdentityShowcase, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-12 border-y border-white/10 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
					speed: "slow",
					children: Array.from({ length: 2 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-12 font-display text-6xl sm:text-8xl font-extrabold uppercase tracking-tighter text-white/10 whitespace-nowrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Quiz" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#d4ff00]",
								children: "★"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Generator" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#d4ff00]",
								children: "★"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AstroRizz" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#d4ff00]",
								children: "★"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Horoscope" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#d4ff00]",
								children: "★"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Arena" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#d4ff00]",
								children: "★"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rate" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#d4ff00]",
								children: "★"
							})
						]
					}, k))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 pt-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto relative overflow-hidden border border-white/10 p-10 sm:p-20 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-32 bg-gradient-to-tr from-[#d4ff00]/15 via-transparent to-[#ff2e93]/15 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
								index: "—",
								label: "Final Frontier"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
								as: "h2",
								className: "mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter text-white leading-[0.9]",
								children: "Your Rizz score"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-serif italic text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#d4ff00]",
								style: { textShadow: "0 0 40px rgba(212,255,0,0.4)" },
								children: "is one click away."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/60 mt-6 max-w-md mx-auto leading-relaxed",
								children: "No sign-up. Anonymous. Free. 10 questions, one card, infinite bragging rights."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
								delay: .2,
								className: "mt-10 inline-block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/quiz",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkewButton, {
										size: "lg",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-4" }), " Start the quiz"]
									})
								}) })
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "px-6 mt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-white/30",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 HaveRizz — Built for the bold." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-[#d4ff00] transition",
								children: "Twitter"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-[#d4ff00] transition",
								children: "Instagram"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-[#d4ff00] transition",
								children: "TikTok"
							})
						]
					})]
				})
			})
		]
	});
}
function PinnedHowItWorks() {
	const ref = (0, import_react.useRef)(null);
	const trackRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"]
	});
	const [maxScroll, setMaxScroll] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		function measure() {
			const t = trackRef.current;
			if (!t) return;
			setMaxScroll(Math.max(0, t.scrollWidth - window.innerWidth + 48));
		}
		measure();
		window.addEventListener("resize", measure);
		return () => window.removeEventListener("resize", measure);
	}, []);
	const x = useTransform(scrollYProgress, [
		0,
		.05,
		.92,
		1
	], [
		0,
		0,
		-maxScroll,
		-maxScroll
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "relative h-[340vh]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky top-0 h-screen flex flex-col justify-center overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto px-6 w-full mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					index: "—",
					label: "How It Works"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter text-white leading-[0.95] max-w-3xl",
					children: [
						"Three steps. ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#d4ff00]",
							children: "Zero"
						}),
						" fumble."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				ref: trackRef,
				style: { x },
				className: "flex gap-6 px-6 will-change-transform w-max",
				children: [
					{
						n: "01",
						t: "Take the Quiz",
						d: "10 scenario questions. Pick A/B/C/D. No registration. No data collection. ~3 minutes."
					},
					{
						n: "02",
						t: "Mint your Card",
						d: "Algorithm crunches your answers. You get a holographic Rizz Identity Card with score, rank & traits."
					},
					{
						n: "03",
						t: "Dominate the Arena",
						d: "Post lines. Vote on others. Climb the leaderboard. Share your card everywhere."
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-[88vw] md:w-[60vw] lg:w-[55vw] shrink-0 border border-white/10 bg-[#0a0a0c] p-10 sm:p-16 min-h-[55vh] flex flex-col justify-between rounded-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-sm font-bold tracking-[0.4em] text-[#d4ff00]",
						children: s.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]",
						children: s.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-white/60 leading-relaxed",
						children: s.d
					})] })]
				}, s.n))
			})]
		})
	});
}
function IdentityShowcase() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-6 py-32 relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:sticky lg:top-32 self-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdentityCard, {
					cardNumber: "RZ-00088",
					score: 94,
					traits: [
						"Certified Charmer",
						"Mystery Magnet",
						"Heart Collector"
					],
					username: "@you_next"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						index: "—",
						label: "The Card"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
						as: "h2",
						className: "mt-6 font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]",
						children: "Holographic. Numbered. Permanent."
					})] }),
					[
						{
							t: "Biometric scoring",
							d: "Every answer maps to a charisma vector. The algorithm doesn't grade on a curve — it tells you the truth."
						},
						{
							t: "Five rarity tiers",
							d: "From Common to Mythic. Less than 3% of cards reach Legendary. Less than 0.1% reach Mythic."
						},
						{
							t: "Built to share",
							d: "Export as PNG. Drop in your story. Send to the group chat. The card travels with you."
						},
						{
							t: "Yours forever",
							d: "Saved locally to your device. Re-take whenever your aura shifts."
						}
					].map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-white/10 pt-6 flex gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs font-bold text-[#d4ff00] tracking-widest pt-1",
								children: ["0", i + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold text-white uppercase tracking-tight",
								children: b.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-white/60 leading-relaxed",
								children: b.d
							})] })]
						})
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/quiz",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkewButton, {
							size: "lg",
							children: "Mint Yours →"
						})
					}) })
				]
			})]
		})
	});
}
//#endregion
export { Home as component };
