## HaveRizz.com — Build Plan

A premium dark-aesthetic Gen-Z entertainment webapp. Frontend-only v1 (localStorage for persistence). Visual system locked to the selected "Asymmetric Split-Hero Identity" direction: `#0A0A0A` background, electric purple/cyan/magenta/gold, Space Grotesk display, Inter body, glassmorphic cards with holographic gradient edges.

### Routes (TanStack file-based)

```
/                  Homepage (split hero + stats + carousel + features + floating coffee btn)
/quiz              Do I Have Rizz quiz (10 random Qs, animated, scored)
/quiz/result       Animated reveal + shareable Identity Card
/generator         Best Rizz Generator (15 categories, copy/share/react)
/astro             AstroRizz (sign × sign compatibility, 144 combos)
/horoscope         Daily Rizz Horoscope (zodiac picker → deterministic daily output)
/arena             Rizz Battle Arena (submit + vote + Hot/New/Top/Controversial + leaderboard)
/rate              Rate My Rizz (submit pickup line/text, community votes Smooth/Mid/Cringe)
```

A shared layout has the glass nav + floating Buy Me a Coffee modal trigger.

### Feature scope

1. **Homepage** — exact composition from the chosen direction: sticky glass pill nav, split hero (headline + CTAs left, live Identity Card mockup right), animated stat triplet, infinite marquee live leaderboard, 3-card feature grid, floating coffee button, footer.
2. **Do I Have Rizz Quiz** — pool of ~30+ scenario questions seeded from Feature 1 PDF, randomly pick 10 per session, A/B/C/D with hidden 10/7/4/1 scoring, animated progress bar, sound-free confetti reveal at the end.
3. **Rizz Identity Card** — generated from quiz result: score 0–100, rank (Rookie → Ultimate Master), 1–3 personality traits derived from answer pattern, rarity tier weighted by score, card number `RZ-XXXXX`, holographic gradient edge. Share buttons: copy link, download PNG (`html-to-image`), tweet/WhatsApp intent URLs. Saved to localStorage so users can revisit.
4. **Best Rizz Generator** — all 15 categories × 20 lines parsed from Feature 2 PDF into a typed dataset. Category picker rail, card stack with copy + share + emoji reactions (count persisted in localStorage).
5. **AstroRizz** — 144-combo dataset (12 × 12) seeded from Feature 2.1 PDF. Two zodiac wheel pickers → animated compatibility ring + opener, strategy, green/red flags, best time to text, flirting style. Result is shareable.
6. **Daily Horoscope** — port the Python generator deterministically to TypeScript (same SHA-256-based seeding, same trait/forecast/icebreaker pools). User picks sign → today's score, lucky emoji, lucky time window, confidence tier, flirting forecast, best icebreaker. New every day, same per day per sign.
7. **Rizz Battle Arena** — localStorage-backed Reddit-style feed. Anonymous username generator (adjective + noun). Submit a line + category. Fire/Fizz voting. Hot/New/Top/Controversial sort. Today/Week/Month/All-Time leaderboard tabs. Seeded with ~20 example posts so it feels alive on first load. (Note flagged below.)
8. **Rate My Rizz** — submit pickup line or text screenshot caption → community votes Smooth/Mid/Cringe with running tallies. Same localStorage backend as Arena.
9. **Buy Me a Coffee** — floating glass button on every page → modal with ₹49 / ₹99 / ₹199 / ₹499 + custom amount. Razorpay integration stubbed with a "Coming soon" toast (real Razorpay needs Cloud + your key — call this out for phase 2).
10. **404 + error boundaries** wired on `__root.tsx` and every route with a loader.

### Tech & libraries

- TanStack Start (existing). File-based routes under `src/routes/`.
- Tailwind v4 tokens in `src/styles.css` ported verbatim from the chosen direction (`--color-brand-purple`, `--color-brand-cyan`, `--color-brand-magenta`, `--color-brand-gold`, mesh-drift + marquee keyframes, `.glass` + `.holo-edge` utilities).
- Fonts loaded via `<link>` in `__root.tsx` (Space Grotesk + Inter).
- Add: `framer-motion` (page transitions, card reveals, counter animation), `html-to-image` (PNG export of Identity Card), `canvas-confetti` (result reveal), `zustand` (Arena + reactions state with localStorage middleware).
- Datasets live in `src/data/`: `quiz-questions.ts`, `rizz-lines.ts`, `astro-combos.ts`, `horoscope-engine.ts`.
- Shared UI primitives: `GlassNav`, `MeshBackdrop`, `MagneticButton`, `IdentityCard`, `ZodiacPicker`, `CoffeeFab` + `CoffeeModal`.

### Limitations / phase 2 (called out upfront)

- **No real auth or cross-device persistence** — Arena posts, votes, reactions, and saved Identity Cards live in `localStorage`. Cards survive on the device that made them; voting is per-browser only. To move to a real shared community + Google/anonymous login + cross-device cards, we flip on Lovable Cloud (Postgres + auth + RLS) — say the word and I'll wire it.
- **Razorpay** — UI + modal built, payment call stubbed. Going live needs Lovable Cloud (to hold the order-creation server function) + your Razorpay Key ID and Key Secret.
- **Quiz question pool** — the Feature 1 PDF has 500+ planned questions but ~70 survived the 50-page parse limit. I'll seed with what's parsed (~30 clean ones across categories) plus 20 originals in the same tone; we expand the pool later by sharing the rest as JSON.
- **AstroRizz** — same situation: the parse covered ~20 of 144 combos cleanly. I'll generate the remaining combos algorithmically using the same field shape (compatibility %, opener, strategy, flags, best time, flirting style) keyed off zodiac element compatibility rules, so all 144 work on day one and we swap in your authored copy as you provide it.

### Build order

1. Design tokens + fonts + global layout (`__root.tsx`, `MeshBackdrop`, `GlassNav`, `CoffeeFab`).
2. Homepage (`/`) end-to-end matching the chosen direction.
3. Quiz flow + Identity Card + share.
4. Generator + AstroRizz + Horoscope.
5. Arena + Rate My Rizz with seeded content.
6. Polish: framer-motion page transitions, magnetic CTA, scroll-triggered counters, mobile pass.

After approval I'll start at step 1 and ship through to step 6 in one continuous build.
