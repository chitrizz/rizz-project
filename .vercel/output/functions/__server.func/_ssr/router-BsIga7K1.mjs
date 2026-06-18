import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as SkewButton } from "./SkewButton-DQm-cxCW.mjs";
import { h as Heart, p as Menu, t as X, y as Coffee } from "../_libs/lucide-react.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as ShineBorder } from "./shine-border-BWdCmEk2.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BsIga7K1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CRDCj4w6.css";
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
var $$splitComponentImporter$8 = () => import("./rate-BAiPQZEe.mjs");
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
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./quiz-DYfq8PzL.mjs");
var Route$7 = createFileRoute("/quiz")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./horoscope-CuF8LpSd.mjs");
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
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./generator-Dwsuck6B.mjs");
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
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./astro-CDAW3NBh.mjs");
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
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./arena-BMzfcC-E.mjs");
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
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./routes-G32Zl49K.mjs");
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
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
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
var $$splitComponentImporter = () => import("./quiz.result-CvZ01SrV.mjs");
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
