# Thyroid Compass

A calm, visual dashboard turning the Hashimoto's / hypothyroidism treatment
landscape into **Insight → Action → (a question?) → Explore in ChatGPT**.

Built for one specific person — a non-technical visual learner in her mid-60s
with Hashimoto's. **Educational only. Not medical advice.** See PRD §3.

## Phase 1 (this build)

- Treatment Options Explorer — five cards, oldest/standard → newest/experimental
- 👵 60s lens on every card (heart, bones, start-low-go-slow)
- Side-by-side compare drawer
- "Questions for my doctor" list (local-only in Phase 1; Supabase in Phase 3)
- "❓ Not sure? Explore this" — copies a tailored ChatGPT prompt to clipboard
  and offers a deep-link to chatgpt.com. **No API key, no AI inside the app.**
- §3 safety anchor on every card and at the page foot

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Vercel for hosting
- Supabase (Phase 3 — auth, notes, doctor list sync)

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # produces dist/
```

## Deploy

```bash
vercel --prod
```

CI / build guards belong in `scripts/build.js`, not in Vercel protected config
(PRD §10).

## Content provenance

Seed content lives in `src/content/treatments.ts`, paraphrased from the
sources listed in PRD §11 and structured to mirror the Supabase content schema
in PRD §10. Re-verify on every §8.3 re-run; bump `lastChecked` per card when
sources are re-confirmed.

## Phase plan

| Phase | What | Status |
|---|---|---|
| 0 | Foundation, design system, deploy pipeline | ✅ |
| 1 | Treatment Options Explorer (MVP) | ✅ |
| 2 | Skill library + Skill Creator (§8.2) | – |
| 3 | Magic-link sign-in, Supabase sync of notes / doctor list | – |
| 4 | Nutrition + Holistic sections (§9.5–9.6) | – |
| 5 | What's New + clinicaltrials.gov feed + refresh job | – |

## See also

- `PRD.md` — single source of truth
- `KICKOFF.md` — autonomous-build instructions
- `CONTINUATION.md` — written before context runs low so a fresh session can resume

---

*Built with care. Not a replacement for your doctor.*
