import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { n as SkewButton, r as cn, t as SectionLabel } from "./SectionLabel-BZFuGHTC.mjs";
import { g as Flame, h as Heart, p as Menu, t as X, x as ArrowUpRight, y as Coffee } from "../_libs/lucide-react.mjs";
import { a as useScroll, i as useMotionValue, n as useTransform, o as motion, s as AnimatePresence, t as useSpring } from "../_libs/framer-motion.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as IdentityCard } from "./IdentityCard-CazIW9LB.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DTaKZit2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D_QW2LLr.css";
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
var links = [
	{
		to: "/quiz",
		label: "Quiz",
		num: "01"
	},
	{
		to: "/generator",
		label: "Generator",
		num: "02"
	},
	{
		to: "/astro",
		label: "AstroRizz",
		num: "03"
	},
	{
		to: "/horoscope",
		label: "Horoscope",
		num: "04"
	},
	{
		to: "/arena",
		label: "Arena",
		num: "05"
	},
	{
		to: "/rate",
		label: "Rate",
		num: "06"
	}
];
function GlassNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "sticky top-0 z-50 w-full px-4 sm:px-6 py-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShineBorder, {
				borderRadius: 9999,
				borderWidth: 1,
				duration: 10,
				color: [
					"#d4ff00",
					"#22d3ee",
					"#ff2e93"
				],
				className: "rounded-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-full pl-5 pr-2 py-2 flex items-center justify-between overflow-hidden",
					style: {
						background: "linear-gradient(135deg, rgba(20,20,22,0.7) 0%, rgba(10,10,12,0.55) 100%)",
						backdropFilter: "blur(22px) saturate(180%)",
						boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.4), 0 12px 40px -12px rgba(0,0,0,0.6)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "pointer-events-none absolute top-0 left-0 h-full w-1/3 animate-liquid-sweep",
							style: { background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center gap-6 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "flex items-center gap-2 shrink-0 group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-[#d4ff00] animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display font-bold text-white tracking-tighter text-lg uppercase",
									children: [
										"HAVE",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#d4ff00]",
											children: "/"
										}),
										"RIZZ"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden lg:flex items-center gap-0.5",
								children: links.map((l) => {
									const active = pathname === l.to || pathname.startsWith(l.to + "/");
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: l.to,
										className: "relative group px-3 py-1.5 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 rounded-full transition-colors",
										children: [
											active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
												layoutId: "nav-active-pill",
												className: "absolute inset-0 rounded-full",
												style: {
													background: "linear-gradient(135deg, rgba(212,255,0,0.18), rgba(34,211,238,0.12))",
													boxShadow: "inset 0 0 0 1px rgba(212,255,0,0.4), 0 0 18px -2px rgba(212,255,0,0.4)"
												},
												transition: {
													type: "spring",
													stiffness: 400,
													damping: 32
												}
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `relative font-mono text-[9px] transition ${active ? "text-[#d4ff00]" : "text-[#d4ff00]/50 group-hover:text-[#d4ff00]"}`,
												children: l.num
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `relative transition ${active ? "text-white" : "text-white/55 group-hover:text-white"}`,
												children: l.label
											})
										]
									}, l.to);
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden md:inline font-mono text-[9px] uppercase tracking-widest text-white/30 px-2",
									children: "v2.0.4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/quiz",
									className: "hidden sm:block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkewButton, {
										size: "sm",
										children: "Start Quiz"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setOpen((o) => !o),
									className: "lg:hidden h-9 w-9 grid place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur-xl",
									"aria-label": "Toggle nav",
									children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
								})
							]
						})
					]
				})
			}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:hidden mt-2 rounded-3xl p-4 grid gap-1 border border-white/10",
				style: {
					background: "linear-gradient(135deg, rgba(20,20,22,0.85) 0%, rgba(10,10,12,0.7) 100%)",
					backdropFilter: "blur(22px) saturate(180%)",
					boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)"
				},
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "px-3 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white/70 hover:text-white hover:bg-white/5 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] text-[#d4ff00]",
						children: l.num
					}), l.label]
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-white/10 mt-2 pt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/quiz",
						onClick: () => setOpen(false),
						className: "px-3 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-[#d4ff00] hover:bg-[#d4ff00]/10 flex items-center gap-3",
						children: "Start Quiz"
					})
				})]
			})]
		})
	});
}
function MeshBackdrop() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "fixed inset-0 z-0 overflow-hidden pointer-events-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[#d4ff00]/12 blur-[140px] rounded-full animate-mesh" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-[10%] -right-[10%] w-[55%] h-[55%] bg-[#22d3ee]/10 blur-[140px] rounded-full animate-mesh",
				style: { animationDelay: "-6s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -bottom-[20%] left-[15%] w-[70%] h-[60%] bg-[#ff2e93]/8 blur-[140px] rounded-full animate-mesh",
				style: { animationDelay: "-12s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,#050505_85%)]" })
		]
	});
}
var AMOUNTS = [
	{
		value: 49,
		label: "Coffee",
		emoji: "☕"
	},
	{
		value: 99,
		label: "Boost",
		emoji: "⚡"
	},
	{
		value: 199,
		label: "Supporter",
		emoji: "💎"
	},
	{
		value: 499,
		label: "Patron",
		emoji: "👑"
	}
];
function CoffeeFab() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [custom, setCustom] = (0, import_react.useState)("");
	const [picked, setPicked] = (0, import_react.useState)(null);
	function handleSupport() {
		const amount = picked ?? Number(custom);
		if (!amount || amount < 10) {
			toast.error("Pick an amount or enter ₹10 or more");
			return;
		}
		toast.success("Razorpay coming soon — thanks for the love.", { description: `We logged your intent of ₹${amount}.` });
		setOpen(false);
		setPicked(null);
		setCustom("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => setOpen(true),
		className: "fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 transform -skew-x-12 bg-[#d4ff00] text-black h-12 pl-3 pr-5 flex items-center gap-3 border border-[#d4ff00] hover:bg-white transition-all shadow-[0_0_24px_-4px_#d4ff00] hover:shadow-[0_0_36px_-4px_#fff]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-block skew-x-12 flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coffee, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-bold uppercase tracking-tighter",
				children: "Fuel Us"
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 grid place-items-center p-4 bg-black/80 backdrop-blur-md",
		onClick: () => setOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 30,
				scale: .95
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: 30,
				scale: .95
			},
			transition: {
				type: "spring",
				stiffness: 280,
				damping: 26
			},
			onClick: (e) => e.stopPropagation(),
			className: "w-full max-w-md glass-strong border border-white/15 rounded-2xl p-6 sm:p-8 relative holo-edge",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(false),
					className: "absolute top-4 right-4 size-8 grid place-items-center rounded-full hover:bg-white/5",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4 text-white/60" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "size-12 rounded-md bg-[#d4ff00]/15 border border-[#d4ff00]/40 grid place-items-center mb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-5 text-[#d4ff00]" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2",
					children: "Patron Protocol"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl font-bold text-white tracking-tighter uppercase",
					children: [
						"Fuel the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#d4ff00]",
							children: "Rizz"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-white/60 mt-2 leading-relaxed",
					children: "If we made you laugh, fixed your fumble, or just gave you something to share — keep the lights on."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2 mt-6",
					children: AMOUNTS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setPicked(a.value);
							setCustom("");
						},
						className: `p-3 rounded-md text-left border transition ${picked === a.value ? "border-[#d4ff00] bg-[#d4ff00]/10" : "border-white/10 bg-white/[0.02] hover:border-white/25"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-lg",
								children: a.emoji
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-lg font-bold text-white mt-1 tracking-tight",
								children: ["₹", a.value]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] text-white/50 uppercase tracking-wider",
								children: a.label
							})
						]
					}, a.value))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "font-mono text-[10px] uppercase tracking-widest text-white/50",
						children: "Custom"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1.5 flex items-center glass border border-white/10 rounded-md pl-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-white/50",
							children: "₹"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							inputMode: "numeric",
							placeholder: "100",
							value: custom,
							onChange: (e) => {
								setCustom(e.target.value);
								setPicked(null);
							},
							className: "flex-1 bg-transparent h-10 px-2 text-sm text-white outline-none placeholder:text-white/30"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkewButton, {
					onClick: handleSupport,
					className: "mt-6 w-full",
					children: "Support HaveRizz"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[9px] text-white/30 text-center mt-3 uppercase tracking-widest",
					children: "Razorpay · UPI · Cards · Wallets"
				})
			]
		})
	}) })] });
}
function Grain() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "grain-bg pointer-events-none fixed inset-0 z-[60] opacity-[0.08] mix-blend-overlay animate-grain",
		style: { backgroundSize: "160px 160px" }
	});
}
function CursorBlob() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (!window.matchMedia("(pointer:fine)").matches) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const el = ref.current;
		if (!el) return;
		let x = window.innerWidth / 2;
		let y = window.innerHeight / 2;
		let tx = x, ty = y;
		const onMove = (e) => {
			tx = e.clientX;
			ty = e.clientY;
		};
		window.addEventListener("mousemove", onMove);
		let raf = 0;
		const tick = () => {
			x += (tx - x) * .12;
			y += (ty - y) * .12;
			el.style.transform = `translate3d(${x - 180}px, ${y - 180}px, 0)`;
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => {
			window.removeEventListener("mousemove", onMove);
			cancelAnimationFrame(raf);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		"aria-hidden": true,
		className: "pointer-events-none fixed top-0 left-0 z-[55] h-[360px] w-[360px] rounded-full blur-[80px] opacity-60 mix-blend-screen hidden md:block",
		style: { background: "radial-gradient(circle, #ff2e93 0%, transparent 70%)" }
	});
}
function LenisProvider({ children }) {
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const lenis = new Lenis({
			duration: 1.15,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});
		let raf = 0;
		const tick = (time) => {
			lenis.raf(time);
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => {
			cancelAnimationFrame(raf);
			lenis.destroy();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[10rem] leading-none tracking-tighter font-bold text-[#d4ff00] italic",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-2xl font-bold uppercase tracking-tighter text-white",
					children: "Off the rizz map."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-white/50",
					children: "This page never had any aura to begin with."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkewButton, { children: "Go home" })
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		console.error(error);
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-bold uppercase tracking-tighter text-white",
					children: "That fumbled."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-white/50",
					children: "Something broke on our end. Try again?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkewButton, {
						onClick: () => {
							router.invalidate();
							reset();
						},
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkewButton, {
							variant: "outline",
							children: "Go home"
						})
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "HaveRizz — Do You Actually Have Rizz?" },
			{
				name: "description",
				content: "Biometric analysis of your social frequency. Get your Rizz Identity Card, find your zodiac match, and dominate the Arena."
			},
			{
				name: "theme-color",
				content: "#050505"
			},
			{
				property: "og:title",
				content: "HaveRizz — Do You Actually Have Rizz?"
			},
			{
				property: "og:description",
				content: "The definitive charisma diagnostic for the digital age."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-screen bg-background text-foreground antialiased",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LenisProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-screen overflow-x-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeshBackdrop, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grain, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorBlob, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassNav, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "relative z-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoffeeFab, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
					theme: "dark",
					position: "top-center"
				})
			]
		}) })
	});
}
var $$splitComponentImporter$7 = () => import("./rate-LQxnaWrb.mjs");
var Route$8 = createFileRoute("/rate")({
	head: () => ({ meta: [
		{ title: "Rate My Rizz — The Verdict" },
		{
			name: "description",
			content: "Submit a pickup line or text. Community votes Smooth, Mid, or Cringe. Brutal honesty included."
		},
		{
			property: "og:title",
			content: "Rate My Rizz"
		},
		{
			property: "og:description",
			content: "Submit your line. The internet decides if it's Smooth, Mid, or Cringe."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./quiz-DYfq8PzL.mjs");
var Route$7 = createFileRoute("/quiz")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./horoscope-Cy31I6Rf.mjs");
var Route$6 = createFileRoute("/horoscope")({
	head: () => ({ meta: [
		{ title: "Daily Rizz Horoscope" },
		{
			name: "description",
			content: "Your daily charisma forecast. Score, lucky emoji, lucky time, confidence tier, today's flirting forecast, and a fresh icebreaker."
		},
		{
			property: "og:title",
			content: "Daily Rizz Horoscope"
		},
		{
			property: "og:description",
			content: "Your daily charisma forecast — new every morning."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./generator-CqUNqipJ.mjs");
var Route$5 = createFileRoute("/generator")({
	head: () => ({ meta: [
		{ title: "Best Rizz Generator — 15 Categories" },
		{
			name: "description",
			content: "Corporate, Gym, Tech, Anime, Desi, Romantic, Dark Humor — 300+ curated rizz lines for every vibe."
		},
		{
			property: "og:title",
			content: "Best Rizz Generator — 15 Categories"
		},
		{
			property: "og:description",
			content: "300+ curated pickup lines, 15 categories. Copy, share, send."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./astro-Dsb3DnhA.mjs");
var Route$4 = createFileRoute("/astro")({
	head: () => ({ meta: [
		{ title: "AstroRizz — Zodiac Compatibility" },
		{
			name: "description",
			content: "144 zodiac combos. Compatibility %, opener, conversation strategy, green & red flags, best time to text."
		},
		{
			property: "og:title",
			content: "AstroRizz — Zodiac Compatibility"
		},
		{
			property: "og:description",
			content: "Find out your cosmic rizz match before you text them."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./arena-kmxjzPHV.mjs");
var Route$3 = createFileRoute("/arena")({
	head: () => ({ meta: [
		{ title: "Rizz Battle Arena — Community Combat" },
		{
			name: "description",
			content: "Submit your best rizz lines. Community votes Fire (upvote) or Fizz (downvote). Climb the leaderboard."
		},
		{
			property: "og:title",
			content: "Rizz Battle Arena"
		},
		{
			property: "og:description",
			content: "Reddit-style rizz combat. Submit. Vote. Climb."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
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
var Route$2 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "HaveRizz — Do You Actually Have Rizz?" },
		{
			name: "description",
			content: "Biometric analysis of your social frequency. Get your official Rizz Identity Card, dominate the Arena, find your zodiac match."
		},
		{
			property: "og:title",
			content: "HaveRizz — Do You Actually Have Rizz?"
		},
		{
			property: "og:description",
			content: "The definitive charisma diagnostic for the digital age."
		}
	] }),
	component: Home
});
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
function ScrollProgressBar() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 280,
		damping: 28
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: "fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left pointer-events-none",
		style: {
			scaleX,
			background: "linear-gradient(90deg, #d4ff00 0%, #22d3ee 40%, #ff2e93 70%, #ffd400 100%)"
		}
	});
}
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgressBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
									].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											y: 16
										},
										animate: {
											opacity: 1,
											y: 0
										},
										transition: {
											duration: .6,
											delay: .55 + i * .1
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-3xl sm:text-4xl font-bold text-white tracking-tighter",
											children: s.v
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-[10px] uppercase tracking-widest text-white/40 mt-1",
											children: s.l
										})]
									}, s.l))
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
									className: "absolute -top-4 -left-4 transform -skew-x-12 bg-[#ffd400] text-black px-3 py-1.5 border border-[#ffd400] shadow-[0_0_15px_rgba(253,224,71,0.4)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block skew-x-12 font-mono text-[10px] font-bold uppercase tracking-widest",
										children: "Legendary Tier"
									})
								})
							]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.4em] text-white/30 flex flex-col items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scroll" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-8 w-px bg-white/20",
						style: { animation: "scroll-hint 2s ease-in-out infinite" }
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
				initial: { opacity: 0 },
				whileInView: { opacity: 1 },
				viewport: {
					once: true,
					margin: "-40px"
				},
				transition: { duration: .8 },
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorksSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 py-32 relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "—",
							label: "The Receipts"
						}) }),
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "—",
							label: "The Arsenal"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
							as: "h2",
							className: "mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]",
							children: "Six weapons. One mission."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: { opacity: 0 },
							whileInView: { opacity: 1 },
							viewport: { once: true },
							transition: {
								duration: .6,
								delay: .3
							},
							className: "font-mono text-[10px] uppercase tracking-widest text-white/30",
							children: "v.2.0.4"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-4 auto-rows-[minmax(220px,auto)] grid-flow-row-dense gap-4",
						children: FEATURES.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: `${f.span} min-w-0`,
							initial: {
								opacity: 0,
								y: 50
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-60px"
							},
							transition: {
								duration: .65,
								delay: i * .07,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
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
												children: [
													"Open",
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
												]
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
				initial: { opacity: 0 },
				whileInView: { opacity: 1 },
				viewport: {
					once: true,
					margin: "-100px"
				},
				transition: { duration: 1 },
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
								index: "—",
								label: "Final Frontier"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
								as: "h2",
								className: "mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter text-white leading-[0.9]",
								children: "Your Rizz score"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: {
									duration: .8,
									delay: .2
								},
								className: "mt-2 font-serif italic text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#d4ff00]",
								style: { textShadow: "0 0 40px rgba(212,255,0,0.4)" },
								children: "is one click away."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: { opacity: 0 },
								whileInView: { opacity: 1 },
								viewport: { once: true },
								transition: {
									duration: .6,
									delay: .35
								},
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.footer, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-40px"
				},
				transition: { duration: .7 },
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
	})] });
}
function HowItWorksSection() {
	const containerRef = (0, import_react.useRef)(null);
	const stepRefs = [
		(0, import_react.useRef)(null),
		(0, import_react.useRef)(null),
		(0, import_react.useRef)(null)
	];
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"]
	});
	const [activeStep, setActiveStep] = (0, import_react.useState)(0);
	const steps = [
		{
			n: "01",
			t: "Take the Quiz",
			d: "10 scenario questions. Pick A/B/C/D. No registration. No data collection. ~3 minutes.",
			sub: "Engineered around real social scenarios — from DMs to IRL encounters."
		},
		{
			n: "02",
			t: "Mint Your Card",
			d: "Algorithm crunches your answers. You get a holographic Rizz Identity Card with score, rank & traits.",
			sub: "Five rarity tiers. Sub-1% chance of hitting Mythic. Every card is unique."
		},
		{
			n: "03",
			t: "Dominate the Arena",
			d: "Post lines. Vote on others. Climb the leaderboard. Share your card everywhere.",
			sub: "Reddit meets rizz. Anonymous posting. Community votes: Fire or Fizz."
		}
	];
	const scrollToStep = (idx) => {
		stepRefs[idx].current?.scrollIntoView({
			behavior: "smooth",
			block: "center"
		});
	};
	const scaleY = useSpring(scrollYProgress, {
		stiffness: 80,
		damping: 15
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: containerRef,
		className: "px-6 py-20 lg:py-32 relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5 lg:sticky lg:top-32 space-y-8 lg:pr-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						index: "—",
						label: "How It Works"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-4xl sm:text-5xl lg:text-[clamp(44px,5.5vw,68px)] font-extrabold uppercase tracking-tighter text-white leading-[0.95]",
						children: [
							"Three steps.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#d4ff00]",
								style: { textShadow: "0 0 30px rgba(212,255,0,0.35)" },
								children: "Zero"
							}),
							" ",
							"fumble."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-white/50 text-sm max-w-sm leading-relaxed",
						children: "We took biometric profile creation and simplified it. No downloads, no signups, just instant validation."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative pl-8 space-y-10 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-[11px] top-3 bottom-3 w-[2px] bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "absolute top-0 left-0 right-0 bg-[#d4ff00] origin-top h-full",
							style: { scaleY }
						})
					}), steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => scrollToStep(i),
						className: "relative flex items-center gap-6 group cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: `w-6 h-6 rounded-full border-2 z-10 flex items-center justify-center text-[10px] font-bold font-mono transition-all duration-300 ${i <= activeStep ? "bg-[#d4ff00] border-[#d4ff00] text-black shadow-[0_0_12px_#d4ff00]" : "bg-[#050505] border-white/20 text-white/40 group-hover:border-white/40"}`,
							children: s.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								className: "font-mono text-xs uppercase tracking-widest font-bold transition-colors duration-300",
								style: { color: i === activeStep ? "#d4ff00" : "rgba(255, 255, 255, 0.4)" },
								children: s.t
							})
						})]
					}, i))]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7 space-y-12 lg:space-y-20 py-2",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					ref: stepRefs[i],
					initial: {
						opacity: .3,
						y: 40,
						scale: .97
					},
					whileInView: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					viewport: {
						amount: .55,
						once: false
					},
					onViewportEnter: () => setActiveStep(i),
					className: `relative border rounded-xl p-8 sm:p-10 transition-all duration-500 overflow-hidden ${activeStep === i ? "border-[#d4ff00]/40 bg-[#0f0f12] shadow-[0_0_40px_rgba(212,255,0,0.06)]" : "border-white/10 bg-[#070709]/60 opacity-40 scale-98 blur-[0.5px]"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -right-4 -bottom-10 font-display font-extrabold leading-none select-none pointer-events-none transition-opacity duration-500",
							style: {
								fontSize: "clamp(120px,16vw,220px)",
								color: "rgba(255, 255, 255, 0.015)",
								letterSpacing: "-0.05em",
								opacity: activeStep === i ? 1 : .4
							},
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0 left-0 w-48 h-48 bg-[#d4ff00]/[0.03] blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-500 ${activeStep === i ? "opacity-100" : "opacity-0"}` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-[10px] font-bold tracking-[0.4em] text-[#d4ff00]",
									children: ["STEP ", s.n]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-extrabold uppercase tracking-tighter text-white leading-[0.9] transition-colors duration-300",
									style: { fontSize: "clamp(26px,5vw,56px)" },
									children: s.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-[1fr_1px_1fr] gap-6 items-center border-t border-white/5 pt-6 mt-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-white/60 text-base leading-relaxed",
											children: s.d
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden sm:block w-px bg-white/5 self-stretch" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-xs text-white/30 leading-relaxed",
											children: s.sub
										})
									]
								})
							]
						})
					]
				}, i))
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						index: "—",
						label: "The Card"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealText, {
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
var $$splitComponentImporter$1 = () => import("./quiz.index-C-RH20dB.mjs");
var Route$1 = createFileRoute("/quiz/")({
	head: () => ({ meta: [
		{ title: "Do I Have Rizz? — The Quiz" },
		{
			name: "description",
			content: "10 scenario-based questions. One Identity Card. Find out your real Rizz score in under 3 minutes."
		},
		{
			property: "og:title",
			content: "Do I Have Rizz? — The Quiz"
		},
		{
			property: "og:description",
			content: "10 scenario-based questions. One Identity Card. Find out your real Rizz score."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./quiz.result-CgcQDTSH.mjs");
var Route = createFileRoute("/quiz/result")({
	head: () => ({ meta: [
		{ title: "Your Rizz Identity Card" },
		{
			name: "description",
			content: "Your official Rizz Identity Card — score, rank, traits, rarity. Share it everywhere."
		},
		{
			property: "og:title",
			content: "I just got my Rizz Identity Card"
		},
		{
			property: "og:description",
			content: "Find out your Rizz score on HaveRizz."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var RateRoute = Route$8.update({
	id: "/rate",
	path: "/rate",
	getParentRoute: () => Route$9
});
var QuizRoute = Route$7.update({
	id: "/quiz",
	path: "/quiz",
	getParentRoute: () => Route$9
});
var HoroscopeRoute = Route$6.update({
	id: "/horoscope",
	path: "/horoscope",
	getParentRoute: () => Route$9
});
var GeneratorRoute = Route$5.update({
	id: "/generator",
	path: "/generator",
	getParentRoute: () => Route$9
});
var AstroRoute = Route$4.update({
	id: "/astro",
	path: "/astro",
	getParentRoute: () => Route$9
});
var ArenaRoute = Route$3.update({
	id: "/arena",
	path: "/arena",
	getParentRoute: () => Route$9
});
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var QuizIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => QuizRoute
});
var QuizRouteChildren = {
	QuizResultRoute: Route.update({
		id: "/result",
		path: "/result",
		getParentRoute: () => QuizRoute
	}),
	QuizIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	ArenaRoute,
	AstroRoute,
	GeneratorRoute,
	HoroscopeRoute,
	QuizRoute: QuizRoute._addFileChildren(QuizRouteChildren),
	RateRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
