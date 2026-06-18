import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as SkewButton } from "./SkewButton-DQm-cxCW.mjs";
import { t as getAuthorName } from "./anon-name-D9GPsktW.mjs";
import { t as SectionLabel } from "./SectionLabel-cVhLYZyM.mjs";
import { d as Plus, l as Send, t as X } from "../_libs/lucide-react.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rate-BAiPQZEe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SEEDED = [
	{
		id: "r1",
		author: "CosmicRizzler812",
		type: "Pickup Line",
		body: "Are you a parking ticket? Because you've got 'fine' written all over you.",
		createdAt: Date.now() - 36e5,
		smooth: 412,
		mid: 219,
		cringe: 1804,
		myVote: null
	},
	{
		id: "r2",
		author: "VelvetWizard199",
		type: "Text Message",
		body: "I was going to text you a meme, but meeting you in person seemed more efficient.",
		createdAt: Date.now() - 72e5,
		smooth: 2103,
		mid: 188,
		cringe: 41,
		myVote: null
	},
	{
		id: "r3",
		author: "SmoothPotato342",
		type: "Pickup Line",
		body: "Aap roti ho, main daal — combo banaya hi gaya hai.",
		createdAt: Date.now() - 1e7,
		smooth: 1644,
		mid: 322,
		cringe: 110,
		myVote: null
	},
	{
		id: "r4",
		author: "NeonMonk104",
		type: "Text Message",
		body: "If you were a Sunday morning, I'd never set an alarm again.",
		createdAt: Date.now() - 15e6,
		smooth: 1980,
		mid: 200,
		cringe: 60,
		myVote: null
	},
	{
		id: "r5",
		author: "ChaoticDaydreamer",
		type: "Pickup Line",
		body: "Are you Wi-Fi? I'm not getting a signal from anyone else.",
		createdAt: Date.now() - 22e6,
		smooth: 740,
		mid: 510,
		cringe: 880,
		myVote: null
	},
	{
		id: "r6",
		author: "StoicHeartbreak11",
		type: "Text Message",
		body: "I'm not great at pickup lines, but I'm excellent at dinner reservations.",
		createdAt: Date.now() - 3e7,
		smooth: 2310,
		mid: 140,
		cringe: 22,
		myVote: null
	}
];
var useRate = create()(persist((set) => ({
	entries: SEEDED,
	add: (e) => set((s) => ({ entries: [{
		...e,
		id: crypto.randomUUID(),
		createdAt: Date.now(),
		smooth: 0,
		mid: 0,
		cringe: 0,
		myVote: null
	}, ...s.entries] })),
	vote: (id, v) => set((s) => ({ entries: s.entries.map((e) => {
		if (e.id !== id) return e;
		const next = { ...e };
		if (e.myVote) next[e.myVote] = Math.max(0, next[e.myVote] - 1);
		if (e.myVote === v) {
			next.myVote = null;
			return next;
		}
		next[v]++;
		next.myVote = v;
		return next;
	}) }))
}), { name: "rizz-rate-v1" }));
var COLORS = {
	smooth: {
		active: "bg-[#d4ff00]/15 text-[#d4ff00] border-[#d4ff00]",
		bar: "bg-[#d4ff00]",
		emoji: "😎"
	},
	mid: {
		active: "bg-[#ffd400]/15 text-[#ffd400] border-[#ffd400]",
		bar: "bg-[#ffd400]",
		emoji: "😐"
	},
	cringe: {
		active: "bg-[#ff2e93]/15 text-[#ff2e93] border-[#ff2e93]",
		bar: "bg-[#ff2e93]",
		emoji: "💀"
	}
};
function RatePage() {
	const entries = useRate((s) => s.entries);
	const vote = useRate((s) => s.vote);
	const add = useRate((s) => s.add);
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 flex items-end justify-between flex-wrap gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						index: "06",
						label: "Rate My Rizz"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]",
						children: "Brutal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif italic text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#d4ff00]",
						style: { textShadow: "0 0 30px rgba(212,255,0,0.35)" },
						children: "honesty."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-white/60 max-w-xl text-lg",
						children: "Post a line. Post a text. The community decides if you cooked or fumbled."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkewButton, {
					onClick: () => setOpen(true),
					size: "lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Submit Yours"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px bg-white/10 border border-white/10",
				children: entries.map((e) => {
					const total = e.smooth + e.mid + e.cringe || 1;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[#050505] hover:bg-[#0a0a0c] p-6 transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-3 font-mono text-[10px] uppercase tracking-widest text-white/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-white/70 font-bold",
										children: ["@", e.author]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-1.5 py-0.5 bg-white/5 border border-white/10 text-white/60",
										children: e.type
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white text-base sm:text-lg leading-snug mb-5",
								children: e.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "h-1 w-full bg-white/5 overflow-hidden flex mb-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: COLORS.smooth.bar + " h-full",
										style: { width: `${e.smooth / total * 100}%` }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: COLORS.mid.bar + " h-full",
										style: { width: `${e.mid / total * 100}%` }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: COLORS.cringe.bar + " h-full",
										style: { width: `${e.cringe / total * 100}%` }
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2 flex-wrap",
								children: [
									"smooth",
									"mid",
									"cringe"
								].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => vote(e.id, v),
									className: `px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider border transition flex items-center gap-2 ${e.myVote === v ? COLORS[v].active : "bg-[#0a0a0c] text-white/50 border-white/10 hover:text-white hover:border-white/30"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm",
											children: COLORS[v].emoji
										}),
										v,
										" · ",
										e[v]
									]
								}, v))
							})
						]
					}, e.id);
				})
			})]
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
				onClick: (e) => e.stopPropagation(),
				className: "w-full max-w-md glass-strong border border-white/15 holo-edge p-6 relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(false),
						className: "absolute top-4 right-4 size-8 grid place-items-center hover:bg-white/5",
						"aria-label": "Close",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4 text-white/60" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2",
						children: "Verdict Protocol"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-extrabold text-white uppercase tracking-tighter",
						children: "Get rated."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-white/60 mt-2",
						children: "Post anonymously. Take the L gracefully."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubmitForm, { onSubmit: (type, body) => {
						add({
							author: getAuthorName(),
							type,
							body
						});
						toast.success("Posted. May the votes be ever in your favor.");
						setOpen(false);
					} })
				]
			})
		}) })]
	});
}
function SubmitForm({ onSubmit }) {
	const [type, setType] = (0, import_react.useState)("Pickup Line");
	const [body, setBody] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 border-b border-white/10",
				children: ["Pickup Line", "Text Message"].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setType(t),
					className: `px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-wider border-b-2 -mb-px transition ${type === t ? "border-[#d4ff00] text-[#d4ff00]" : "border-transparent text-white/40 hover:text-white"}`,
					children: t
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value: body,
				onChange: (e) => setBody(e.target.value),
				rows: 4,
				maxLength: 280,
				placeholder: "Paste what you sent…",
				className: "w-full bg-[#0a0a0c] border border-white/15 px-3 py-2.5 text-sm text-white outline-none resize-none placeholder:text-white/25 focus:border-[#d4ff00]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-[10px] text-white/30 text-right",
				children: [body.length, "/280"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkewButton, {
				className: "w-full",
				onClick: () => {
					if (body.trim().length < 6) {
						toast.error("A bit longer.");
						return;
					}
					onSubmit(type, body.trim());
					setBody("");
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), " Post for rating"]
			})
		]
	});
}
//#endregion
export { RatePage as component };
