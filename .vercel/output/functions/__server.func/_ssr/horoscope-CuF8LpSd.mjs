import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as SkewButton } from "./SkewButton-DQm-cxCW.mjs";
import { t as SectionLabel } from "./SectionLabel-cVhLYZyM.mjs";
import { a as Sparkles, b as Clock, c as Share2, g as Flame, v as Copy } from "../_libs/lucide-react.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as SYMBOL, r as ZodiacPicker, t as ELEMENT } from "./ZodiacPicker-DxmeY79W.mjs";
import { r as shareWhatsApp, t as copyToClipboard } from "./share-vCaAEs8W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/horoscope-CuF8LpSd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LUCKY_EMOJIS = [
	"🔥",
	"✨",
	"🌟",
	"💎",
	"🦋",
	"🎀",
	"💜",
	"🧊",
	"👑",
	"🍀",
	"🌈",
	"⚡",
	"🎯",
	"💖",
	"🪐",
	"🎲",
	"🌙",
	"🔮",
	"🏹",
	"🌸",
	"❤️‍🔥",
	"☀️",
	"💃",
	"🧧",
	"🪬",
	"🧿",
	"🦄",
	"🌺",
	"🪷",
	"🌴"
];
var FORECASTS = {
	Fire: [
		"Your energy is untouchable today. Walk in like you own every room — because you do.",
		"Main character energy is MAXED. People can't help but stare; let them.",
		"Today you radiate hot-person energy that's borderline illegal. Use it wisely. Or don't.",
		"Bold moves pay off BIG today. Shoot your shot — the stars cleared your path.",
		"Your charisma is a five-alarm fire today. Don't be surprised when jaws drop.",
		"Every conversation you enter becomes yours. Natural leader hours.",
		"The cosmos handed you the aux cord of attraction. Play your greatest hits.",
		"You're giving 'I know my worth' energy. Others can feel it across the room.",
		"Confidence is contagious today. Drop crumbs of it everywhere you go.",
		"Today you turn 'no' into 'not yet.' Don't take exits early."
	],
	Earth: [
		"You don't need to chase — they're coming to you. Sit back and choose wisely.",
		"Your grounded energy is magnetic today. In a loud world, your calm is irresistible.",
		"You're giving 'I have my life together' energy. That's the ultimate rizz.",
		"Subtle flex: your mere presence makes people feel safe AND attracted. Rare combo.",
		"Today you make 'let's stay in' sound better than any night out. Cozy rizz activated.",
		"Your maturity is showing, and it's the most attractive thing in the room.",
		"You're the human equivalent of a warm blanket — comforting, wanted, irreplaceable.",
		"Stability is sexy today. Lean into your routines and let them watch.",
		"Your patience pays off in the form of a text you weren't expecting.",
		"The right one is noticing you slowly, then all at once."
	],
	Air: [
		"Your quick thinking saves awkward moments and creates cute ones. Hero energy.",
		"Your playlist sharing is a love language today. Curate something for them.",
		"Your written word is powerful today. Send that text.",
		"You've got 'we talked for 6 hours and it felt like 20 minutes' energy.",
		"Your observations are scarily accurate — and impressively attractive.",
		"Your random fun facts are conversation starters. Lead with curiosity.",
		"Voice notes are your weapon today. Use them.",
		"Banter is your love language. Bring the heat in a group chat.",
		"Your laugh is doing all the work today. Be heard.",
		"You're rewiring someone's idea of attractive in real time."
	],
	Water: [
		"Today you turn a simple moment into a core memory. You make the ordinary extraordinary.",
		"You see straight through people today — and they LOVE being truly seen.",
		"Your silence speaks volumes today. Sometimes saying nothing says everything.",
		"Your check-ins are irresistible. Nurture game strong.",
		"Your capacity to love fully is terrifying and beautiful. Own it.",
		"The moon charges your romantic batteries. Full power after sunset.",
		"You give 'the universe brought us together' energy. Maybe it did.",
		"Soft eye contact is your superpower today.",
		"Today, lead with feeling. Logic will catch up.",
		"Someone's about to find out how good it feels to be remembered."
	]
};
var ICEBREAKERS = [
	"I was having a good day, but seeing you just upgraded it to legendary.",
	"Something tells me you appreciate the finer things. I'd love to know what those are.",
	"I'm not great at pickup lines, but I'm excellent at dinner reservations.",
	"Real talk — what's the best meal you've ever had? I need recommendations… and company.",
	"Do you believe in parallel universes? Because in every one, I'm still talking to you.",
	"I think we'd have the kind of conversation that makes the waiter come back three times.",
	"What's the most random skill you have? I'll trade you one of mine.",
	"I believe the universe puts people in our path for a reason. So… what's our reason?",
	"If feelings had colors, what color would you be today? I'm genuinely curious.",
	"You feel like a Sunday morning. Warm, slow, something I never want to end.",
	"What's something you're passionate about that most people don't know?",
	"You have 'watches the sunset alone and actually enjoys it' energy. That's poetic."
];
var TIME_WINDOWS = [
	"6 AM — 7 AM",
	"8 AM — 9 AM",
	"10 AM — 11 AM",
	"12 PM — 1 PM",
	"2 PM — 3 PM",
	"4 PM — 5 PM",
	"6 PM — 7 PM",
	"8 PM — 9 PM",
	"9 PM — 10 PM",
	"10 PM — 11 PM",
	"11 PM — 12 AM"
];
function confidenceFor(score) {
	if (score >= 95) return {
		tier: "GOD-TIER",
		emoji: "👑"
	};
	if (score >= 85) return {
		tier: "UNSTOPPABLE",
		emoji: "🚀"
	};
	if (score >= 75) return {
		tier: "MAGNETIC",
		emoji: "✨"
	};
	if (score >= 65) return {
		tier: "RISING",
		emoji: "📈"
	};
	if (score >= 55) return {
		tier: "WARMING UP",
		emoji: "☀️"
	};
	if (score >= 45) return {
		tier: "STEADY",
		emoji: "☁️"
	};
	if (score >= 35) return {
		tier: "CHARGING",
		emoji: "🔋"
	};
	return {
		tier: "SLEEPER MODE",
		emoji: "😴"
	};
}
function seedFor(sign, dateISO) {
	let h = 2166136261;
	for (const c of `${sign}-${dateISO}`) {
		h ^= c.charCodeAt(0);
		h = Math.imul(h, 16777619) >>> 0;
	}
	return h;
}
function generateHoroscope(sign, date = /* @__PURE__ */ new Date()) {
	const dateISO = date.toISOString().slice(0, 10);
	const dateLabel = date.toLocaleDateString(void 0, {
		weekday: "long",
		month: "long",
		day: "numeric"
	});
	const seed = seedFor(sign, dateISO);
	const element = ELEMENT[sign];
	const rizzScore = 40 + seed % 61;
	const luckyEmoji = LUCKY_EMOJIS[(seed >>> 3) % LUCKY_EMOJIS.length];
	const luckyTime = TIME_WINDOWS[(seed >>> 7) % TIME_WINDOWS.length];
	const forecast = FORECASTS[element][(seed >>> 11) % FORECASTS[element].length];
	const icebreaker = ICEBREAKERS[(seed >>> 13) % ICEBREAKERS.length];
	const c = confidenceFor(rizzScore);
	return {
		sign,
		dateISO,
		dateLabel,
		element,
		rizzScore,
		luckyEmoji,
		luckyTime,
		confidence: c.tier,
		confidenceEmoji: c.emoji,
		forecast,
		icebreaker
	};
}
function HoroscopePage() {
	const [sign, setSign] = (0, import_react.useState)(null);
	const h = (0, import_react.useMemo)(() => sign ? generateHoroscope(sign) : null, [sign]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-6 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "04",
							label: "Daily Horoscope"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]",
							children: "Your rizz,"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif italic text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#d4ff00]",
							style: { textShadow: "0 0 30px rgba(212,255,0,0.35)" },
							children: "forecasted."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-white/60 max-w-xl text-lg",
							children: "Pick your sign. Get today's score, lucky time window, confidence tier, and a fresh icebreaker. Resets every day at midnight."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-6 border border-white/10 bg-[#0a0a0c] mb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZodiacPicker, {
						label: "Your sign",
						value: sign,
						onChange: setSign
					})
				}),
				h && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "border border-white/10 p-7 sm:p-10 bg-[#0a0a0c] holo-edge relative overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-12 right-12 w-60 h-60 bg-[#d4ff00]/10 blur-3xl rounded-full" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-start justify-between flex-wrap gap-4 mb-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-6xl",
									children: SYMBOL[h.sign]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-3xl font-extrabold text-white uppercase tracking-tight",
									children: h.sign
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-[10px] uppercase tracking-widest text-white/50 mt-1",
									children: [
										h.dateLabel,
										" · ",
										h.element
									]
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-3 py-1.5 border border-[#d4ff00]/40 bg-[#d4ff00]/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-[10px] font-bold text-[#d4ff00] uppercase tracking-widest",
									children: [
										h.confidence,
										" ",
										h.confidenceEmoji
									]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-4 text-[#d4ff00]" }),
									label: "Rizz Score",
									value: `${h.rizzScore}/100`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-base",
										children: h.luckyEmoji
									}),
									label: "Lucky Emoji",
									value: h.luckyEmoji
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-[#22d3ee]" }),
									label: "Lucky Time",
									value: h.luckyTime
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 bg-white/[0.02] border border-white/10 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-[#ff2e93]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold",
									children: "Today's Forecast"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-serif italic text-xl text-white leading-snug",
								children: [
									"\"",
									h.forecast,
									"\""
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 bg-white/[0.02] border border-white/10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-[#22d3ee]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold",
										children: "Best Icebreaker"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-serif italic text-xl text-white leading-snug",
									children: [
										"\"",
										h.icebreaker,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2 mt-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkewButton, {
										size: "sm",
										variant: "outline",
										onClick: async () => {
											await copyToClipboard(h.icebreaker) ? toast.success("Copied. Go shoot the shot.") : toast.error("Copy failed.");
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" }), " Copy"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkewButton, {
										size: "sm",
										variant: "outline",
										onClick: () => shareWhatsApp(h.icebreaker),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-3" }), " Send"]
									})]
								})
							]
						})
					]
				}, h.sign + h.dateISO)
			]
		})
	});
}
function Stat({ icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-[#050505] p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 mb-2",
			children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl font-extrabold text-white tracking-tight",
			children: value
		})]
	});
}
//#endregion
export { HoroscopePage as component };
