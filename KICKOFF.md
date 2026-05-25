# Autonomous First Build — Thyroid Research Dashboard

Work autonomously. Do NOT ask me questions — every scope decision is already answered in PRD.md (§14, "locked"). Use the listed safe defaults for the few open items.

## Read first
PRD.md is the single source of truth. §3 (medical safety) is INVIOLABLE.
Core model = Insight -> Action -> Explore. Going deeper = copy-to-ChatGPT prompts only (NO API, NO built-in AI).

## Build this run: Phase 0 + Phase 1
- Phase 0: Vite + React + Tailwind app, Supabase project, calm warm design system (large type, high contrast, reusable card component). Deploy a placeholder to Vercel so the pipeline works.
- Phase 1 (MVP): the Treatment Options Explorer as Insight -> Action(s) -> Explore cards, seeded from PRD §9.2-9.4, with the "women in their 60s" lens, status badges, side-by-side compare, and §3 safety anchors. Each action gets a copy-to-clipboard ChatGPT prompt (Appendix A patterns). Deploy to a real Vercel URL.

## Rules
- Deliverable = a real Vercel URL. NEVER hand back a localhost link.
- Run the §8.3 protocol: deep-research-verify the seed content, structure it as Insight->Action->Prompt, then run the `responsive-qa` skill across mobile + desktop before declaring done.
- If you delete any folder/file, back it up first and log it to DELETED-INDEX.md.
- If you hit an auth wall (Supabase login / Vercel login), STOP and tell me the exact button to click — do not spin.
- Before context runs low (or when done), write CONTINUATION.md so I can resume in a fresh session exactly where you left off.

Begin.
