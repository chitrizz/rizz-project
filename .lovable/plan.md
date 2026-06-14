# HaveRizz — Kinetic Brutalism Redesign

Full visual overhaul to match the selected "Kinetic Brutalism" direction. Tokens copied verbatim from the prototype; same composition logic extended across every route.

## Design system (locked)

- **Background:** `#050505` ink
- **Surface:** `#0F0F10` / glass `rgba(255,255,255,0.04)` w/ 24px blur + 160% saturate
- **Accent (primary):** `#D4FF00` acid lime (CTAs, highlights, glow)
- **Accent (secondary):** `#FF2E93` magenta + `#22D3EE` cyan (sparingly, for chips/data viz)
- **Text:** `#FFFFFF` / muted `rgba(255,255,255,0.6)` / faint `0.4`
- **Type:** Syne 700/800 (display, oversized, uppercase, tracking-tighter) + Instrument Serif italic (accent word) + Plus Jakarta Sans (body) + Space Grotesk (mono-ish UI labels)
- **Borders:** 1px `rgba(255,255,255,0.1)` — never bare `border`
- **Effects:** SVG grain overlay (mix-blend-overlay, 10% opacity), liquid blob gradients (blur 120px), holo-edge on cards, skew transforms on buttons (`-skew-x-12`)

All tokens land in `src/styles.css` under `@theme`. Old purple/cyan/magenta/gold brand tokens get replaced.

## Motion system (scroll vibe = 5)

Add Lenis smooth-scroll + a `useScroll`-based system on top of existing Framer Motion:

- **Lenis** smooth scroll wrapper at root
- **Hero:** parallax on headline + Identity Card (Y translate, scale, rotate on scroll), mouse-tilt 3D on card (rotateX/Y via mouse position), letter-by-letter Syne reveal on mount
- **Pinned sections:** sticky scrubbed sections for "How it works" (3 steps revealed on scroll) and "Identity Card showcase" (card rotates + scales as you scroll past)
- **Marquee:** diagonal infinite ticker of recent rizz scores crossing hero
- **Cursor:** gooey magenta blob follows cursor (desktop only, mix-blend-difference)
- **Magnetic buttons:** primary CTAs pull toward cursor within 80px
- **Grain:** animated SVG noise overlay (fixed, 8% opacity)
- **Reveal-on-scroll:** every section uses `whileInView` with stagger
- **Blob backdrop:** two large blurred radial blobs (lime + cyan) that drift via `animate-mesh`

## Files to change

### Tokens & shell
- `src/styles.css` — replace palette tokens, swap fonts, add `@utility skew-cta`, `@utility holo-edge` (lime), `@utility grain`, add new keyframes (`marquee-diag`, `letter-rise`)
- `src/routes/__root.tsx` — swap Google Fonts link to **Syne + Instrument Serif + Plus Jakarta Sans + Space Grotesk**; add `<LenisProvider>` wrapper, `<Grain>`, `<CursorBlob>` (desktop only)
- `package.json` — add `lenis` and `@studio-freight/react-lenis` (or `lenis/react`)

### New shared components
- `src/components/Lenis.tsx` — smooth-scroll provider
- `src/components/CursorBlob.tsx` — gooey magenta blob, mix-blend-difference
- `src/components/Grain.tsx` — fixed SVG noise overlay
- `src/components/MagneticButton.tsx` — cursor-magnetic wrapper
- `src/components/SkewButton.tsx` — brutalist skewed CTA (primary lime / outline)
- `src/components/SectionLabel.tsx` — magazine-style `01 — QUIZ` numbered labels
- `src/components/Marquee.tsx` — straight + diagonal variants
- `src/components/RevealText.tsx` — letter/word reveal on scroll
- `src/components/TiltCard.tsx` — mouse-tilt 3D wrapper (perspective + rotateX/Y)

### Updated components
- `src/components/GlassNav.tsx` — brutalist pill: skewed CTA, lime status dot, Syne brand mark `HAVE/RIZZ`, monospace version tag
- `src/components/IdentityCard.tsx` — rebuild to match prototype: 1.6:1 ratio, lime progress bar with glow, grain overlay, "RIZZ ID-###", "Charisma Level" bar, big tabular score, holo edge, mouse-tilt
- `src/components/MeshBackdrop.tsx` — swap to lime + cyan blobs, slower drift
- `src/components/CoffeeFab.tsx` — restyle as brutalist skewed lime chip

### Routes (all get the new system)
- `src/routes/index.tsx` — full rebuild:
  1. Hero (prototype composition, scaled to viewport, with parallax + tilt card + floating "Pulse" widget)
  2. Diagonal marquee of top scores
  3. Pinned "How it works" — 3 steps scrubbed on scroll
  4. Broken-grid features (6 tiles: Quiz, Generator, AstroRizz, Horoscope, Arena, Rate) with off-grid offsets, mixed sizes, hover lime borders
  5. Identity Card showcase — sticky card, copy reveals beside it
  6. Stats band — brutalist concrete blocks
  7. Final CTA — oversized Syne headline + skewed lime CTA
  8. Footer — minimal, mono labels
- `src/routes/quiz.index.tsx` — restyle: oversized Syne question, lime progress bar with glow, skewed option cards with hover lime border, magazine question counter
- `src/routes/quiz.result.tsx` — restyle: hero reveal of new IdentityCard, lime CTA row, share buttons
- `src/routes/generator.tsx` — brutalist filter pills, lime "Generate" SkewButton, line cards as glass slabs with grain
- `src/routes/astro.tsx` — zodiac pickers as brutalist grid, compatibility ring with lime stroke
- `src/routes/horoscope.tsx` — editorial layout: oversized sign name, Instrument Serif italic accents, glass info cards
- `src/routes/arena.tsx` — Reddit feed restyled as brutalist post slabs, lime vote button, sort tabs as skewed pills
- `src/routes/rate.tsx` — vote buttons (Smooth/Mid/Cringe) as oversized skewed brutalist buttons with haptic-style feedback

## Out of scope (this pass)

- No backend changes (still frontend-only, localStorage)
- No new content/data (keep existing quiz questions, lines, combos, horoscope engine)
- No real 3D (Three.js) — "3D" achieved via CSS perspective + mouse-tilt + parallax depth layers (keeps it fast, no new heavy deps)
- No mobile cursor blob (desktop only via `matchMedia('(pointer:fine)')`)

## Technical notes

- Lenis is the only new runtime dep; everything else uses existing Framer Motion + Tailwind v4
- All scroll effects use `useScroll` + `useTransform` so they're GPU-friendly
- Grain SVG is inlined (no external request)
- Skewed buttons keep their text un-skewed via inner `<span class="inline-block skew-x-12">`
- Identity Card tilt uses `transform-style: preserve-3d` + `perspective: 1000px` on parent
- Reduced-motion: respect `prefers-reduced-motion` — disable Lenis, parallax, cursor blob, tilt; keep static layout
