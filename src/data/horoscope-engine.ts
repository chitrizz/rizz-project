import { type Zodiac, ELEMENT, type Element } from "./astro-combos";

const LUCKY_EMOJIS = ["🔥","✨","🌟","💎","🦋","🎀","💜","🧊","👑","🍀","🌈","⚡","🎯","💖","🪐","🎲","🌙","🔮","🏹","🌸","❤️‍🔥","☀️","💃","🧧","🪬","🧿","🦄","🌺","🪷","🌴"];

const FORECASTS: Record<Element, string[]> = {
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
    "Today you turn 'no' into 'not yet.' Don't take exits early.",
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
    "The right one is noticing you slowly, then all at once.",
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
    "You're rewiring someone's idea of attractive in real time.",
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
    "Someone's about to find out how good it feels to be remembered.",
  ],
};

const ICEBREAKERS = [
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
  "You have 'watches the sunset alone and actually enjoys it' energy. That's poetic.",
];

const TIME_WINDOWS = [
  "6 AM — 7 AM","8 AM — 9 AM","10 AM — 11 AM","12 PM — 1 PM","2 PM — 3 PM",
  "4 PM — 5 PM","6 PM — 7 PM","8 PM — 9 PM","9 PM — 10 PM","10 PM — 11 PM","11 PM — 12 AM",
];

function confidenceFor(score: number): { tier: string; emoji: string } {
  if (score >= 95) return { tier: "GOD-TIER", emoji: "👑" };
  if (score >= 85) return { tier: "UNSTOPPABLE", emoji: "🚀" };
  if (score >= 75) return { tier: "MAGNETIC", emoji: "✨" };
  if (score >= 65) return { tier: "RISING", emoji: "📈" };
  if (score >= 55) return { tier: "WARMING UP", emoji: "☀️" };
  if (score >= 45) return { tier: "STEADY", emoji: "☁️" };
  if (score >= 35) return { tier: "CHARGING", emoji: "🔋" };
  return { tier: "SLEEPER MODE", emoji: "😴" };
}

// Deterministic seed: same sign + same date = same output.
function seedFor(sign: string, dateISO: string): number {
  let h = 2166136261 >>> 0;
  for (const c of `${sign}-${dateISO}`) {
    h ^= c.charCodeAt(0);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h;
}

export interface DailyHoroscope {
  sign: Zodiac;
  dateISO: string;
  dateLabel: string;
  element: Element;
  rizzScore: number;
  luckyEmoji: string;
  luckyTime: string;
  confidence: string;
  confidenceEmoji: string;
  forecast: string;
  icebreaker: string;
}

export function generateHoroscope(sign: Zodiac, date = new Date()): DailyHoroscope {
  const dateISO = date.toISOString().slice(0, 10);
  const dateLabel = date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
  const seed = seedFor(sign, dateISO);
  const element = ELEMENT[sign];
  const rizzScore = 40 + (seed % 61); // 40–100
  const luckyEmoji = LUCKY_EMOJIS[(seed >>> 3) % LUCKY_EMOJIS.length];
  const luckyTime = TIME_WINDOWS[(seed >>> 7) % TIME_WINDOWS.length];
  const forecast = FORECASTS[element][(seed >>> 11) % FORECASTS[element].length];
  const icebreaker = ICEBREAKERS[(seed >>> 13) % ICEBREAKERS.length];
  const c = confidenceFor(rizzScore);
  return { sign, dateISO, dateLabel, element, rizzScore, luckyEmoji, luckyTime, confidence: c.tier, confidenceEmoji: c.emoji, forecast, icebreaker };
}
