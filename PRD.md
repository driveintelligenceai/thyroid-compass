# PRD — "Thyroid Compass" (working codename)

> A calm, visual dashboard that turns the entire Hashimoto's & hypothyroidism treatment landscape into **insights → actions → (when she has a question) a ready-to-paste ChatGPT prompt** — for one specific woman in her mid-60s, without overwhelming her.

| | |
|---|---|
| **Owner / PM** | Andrew Klein (DK Labs) |
| **Built for (end user)** | Andrew's mom — mid-60s, Hashimoto's + hypothyroidism, visual learner, has ADHD, non-technical |
| **Status** | Draft v2 — decisions locked, ready for autonomous first build |
| **Repo (exact local path)** | `/Users/andrewpklein/Developer/DriveIntelligenceAI/Thyroid-Dashboard/Thyroid Research Dashboard/` |
| **This file lives at** | `…/Thyroid Research Dashboard/PRD.md` (repo root) |
| **Deliverable rule** | Ships to a real Vercel URL she bookmarks. Never a localhost link. |
| **No-API decision** | She will NOT connect an API key. There is **no built-in AI**. Going deeper = copy-able ChatGPT prompts only. |

---

## 1. TL;DR (read this if you read nothing else)

We're building a **web app dashboard** organized around one simple loop:

> **Insight → Action → (a question?) → Explore in ChatGPT**

Every screen surfaces a clear, visual **insight** about her thyroid treatment options (from the standard pill to every alternative to the experimental frontier). Each insight comes with **suggested actions** — things to ask her doctor, simple things to try, or options to save and compare. And whenever she's unsure about an action, a **"copy this into ChatGPT"** button hands her a smart, pre-written question she pastes into the tool she already uses. She can **save notes and build a "questions for my doctor" list**. The whole thing is **educational, not medical advice** — it helps her walk into her appointment informed.

---

## 2. The human we're building for

She is in her mid-sixties, diagnosed with Hashimoto's, living with hypothyroidism. Smart but **not technical**, and a **visual learner** — walls of text shut her brain off; a clean card with a clear headline pulls her in. She has **ADHD**, which means three concrete design rules:

1. **One idea per screen.** Never make her hold five things at once.
2. **Progressive disclosure.** Headline first; detail only on tap.
3. **No homework feeling.** No long onboarding, no jargon. She should feel *calmer* after using it.

Her goal, paraphrased: *"Understand as much as possible, succinctly, without drowning in information."*

**Emotional design note:** warm, steady, respectful, never alarmist, never a sales pitch. She's the expert on her own body; we're the friendly briefing before her next appointment.

---

## 3. ⚠️ Medical safety guardrails — NON-NEGOTIABLE

> **This section overrides every other section. If a feature conflicts with this, the feature loses.**

- **No diagnosis. No prescribing. No dose recommendations for her specifically.** We explain what options *exist* and their general trade-offs.
- **Actions are never "take this drug."** Actions are limited to: *ask your doctor about X, consider trying a simple habit (e.g. pill timing), save/compare an option, or explore a question.* Nothing that constitutes a treatment decision.
- **Every treatment view ends with the same anchor:** *"This is general information. Your doctor knows your labs, your heart, your bones, and your full medication list — bring these questions to them."*
- **No personalization to her health data.** The app never asks for her TSH, weight, or meds to compute advice. Notes are *hers to record*, not inputs for the app to reason from.
- **Sourcing standard:** reputable sources only — Mayo Clinic, the American Thyroid Association, the Endocrine Society, NIH/StatPearls/Endotext, peer-reviewed journals, clinicaltrials.gov. Every insight cites its source.
- **Experimental ≠ available.** Trials (stem cells, organoids, biologics, weekly injections, slow-release T3) are clearly badged *"Experimental / in research — not prescribable today,"* with honest evidence strength.
- **Active harm flag — stem-cell tourism:** present overseas "stem cell cures" as *investigational, unproven, potentially unsafe/expensive.* Never link to commercial clinics.
- **Urgent-symptom line where relevant:** *"If you feel very unwell, call your doctor — don't wait for an appointment."*

---

## 4. Goals & non-goals

**Goals**
1. **Deliver insights, not just information** — every piece of content lands as a clear, visual takeaway she can grasp at a glance.
2. **Pair every insight with concrete actions** — so she always knows the next small step (usually: a question for her doctor).
3. **Let her resolve questions about an action** by handing her a ready-to-paste ChatGPT prompt — depth on demand, in her own tool.
4. She leaves with a short, personal **"questions for my doctor"** list.
5. Comprehensive enough that it *reduces* her anxious questions instead of spawning new ones.

**Non-goals (v1)**
- Not a symptom/lab/medication tracker or reminder app.
- Not telehealth or "find a doctor."
- Not personalized medical advice (see §3).
- **No built-in AI / no API key.** (Her explicit decision.)
- Not a community/forum.

---

## 5. Product principles

1. **The core loop is sacred: Insight → Action → Explore.** Every card follows it.
2. **Visual first.** Cards, icons, simple "good for / watch for" splits, color-coded categories. Minimal paragraphs.
3. **Glance, then dig.** Each screen works at a 10-second glance *and* rewards a deeper tap. Nothing auto-expands.
4. **Calm over comprehensive-looking.** The *content* is comprehensive; the *interface* never looks busy.
5. **One good thing, beautifully.** Nail the Treatment Explorer with excellent UI/UX first, then add sections component by component while keeping it visually cohesive.

---

## 6. The core loop, in detail

This is the heart of the product. Every insight card is structured as:

1. **Insight** — a clear, plain-language headline. *("Levothyroxine is the standard starting treatment — once a day, predictable, decades of safety data.")*
2. **Why it matters** — one short line.
3. **Actions** — 1–3 concrete, safe next steps as tappable chips:
   - 🩺 **Ask my doctor** → adds a question to her "Questions for my doctor" list.
   - 💡 **Try / note** → a simple, safe habit (e.g. pill-timing) or a fact to remember.
   - ⭐ **Save / compare** → bookmark this option.
4. **Explore (only when she has a question)** — each action shows a quiet **"❓ Not sure? Explore this"** affordance. Tapping it reveals + copies a **ChatGPT prompt tailored to that exact action** (Appendix A patterns), so she can research before she acts or asks.

**Worked example — the levothyroxine card:**
- **Insight:** "Levothyroxine (synthetic T4) is the standard first treatment — once daily, predictable, inexpensive, decades of safety data."
- **Why it matters:** "It's what most doctors start with, and it works well for most people."
- **Actions:**
  - 🩺 *Ask my doctor:* "Is my dose still right for my age?" → saved to my list
  - 💡 *Try:* take it on an empty stomach, 30–60 min before coffee/breakfast
  - ⭐ *Save to compare*
  - ❓ *Not sure? Explore this* → copies Prompt A1 with OPTION = "Levothyroxine"

---

## 7. Information architecture (the screens)

A single dashboard with simple nav. Six destinations:

**7.1 🏠 Home / "At a glance"** — the calm landing. 4–6 large tiles (*Treatment options · Food & nutrition · Holistic & lifestyle · What's new · My notes & questions*) plus one rotating **"Insight of the day"** card with its own action.

**7.2 💊 Treatment Options Explorer (centerpiece)** — a visual gallery of every medication category, **oldest/standard → newest/experimental**, each an insight card (per §6). Includes:
- A **side-by-side compare** toggle (*What it is · How you take it · Generally good for · Things to watch · Where it stands today*).
- A persistent **"👵 For women in their 60s"** lens that surfaces age-specific notes (heart, bones, start-low-go-slow) on every card.
- **Status badges:** `Standard` · `Common alternative` · `Less common` · `Experimental / in trials`.

**7.3 🥗 Nutrition & Food** — evidence-tagged insight cards: selenium, vitamin D, Mediterranean/anti-inflammatory pattern, the **gluten question answered honestly**, the **iodine warning** (more is not better), and **pill-timing around food/coffee**. Tags: `Strong evidence` / `Some evidence` / `Talk to your doctor`.

**7.4 🌿 Holistic & Lifestyle** — stress, sleep, gentle movement, weight — plus honestly-framed off-label options people ask about (low-dose naltrexone, metformin) clearly marked *limited evidence, discuss with doctor.*

**7.5 🔬 What's New (Research & Trials)** — the cutting edge, kept separate from today's options: slow-release T3, weekly levothyroxine injections, regenerative/organoid research, immune-targeting biologics, and a feed of relevant **clinicaltrials.gov** studies. Every item badged *experimental* with an evidence-strength meter.

**7.6 📝 My Notes & Questions** — her saved space (light sign-in, §10). ⭐ favorites, notes, and the **"Questions for my doctor"** list she can print or email to herself.

---

## 8. Going deeper — the prompt system (no API, copy-to-ChatGPT only)

She won't connect an API key, so there is **no AI inside the app**. Depth comes entirely from **hand-crafted prompts she copies into ChatGPT**, triggered by questions about an action.

**8.1 "Explore this" buttons (the primary mechanism)**
Each action's "❓ Not sure? Explore this" does two things: (a) reveals the tailored prompt on screen, and (b) **copies it to her clipboard** with a "Copied! ✅ Open ChatGPT →" link to `chatgpt.com`. She pastes and hits send. Optionally we also build the `https://chatgpt.com/?q=<encoded prompt>` deep link so it arrives pre-typed — but the **copy-to-clipboard path is the required, robust default** (it never breaks).

**8.2 Skill Search / Skill Creator (the prompt library)**
A small, searchable library of **named, reusable question recipes** ("skills") — e.g. *"Explain this like I'm 65 and new to it," "Compare two of my options," "Make me a question list for my appointment," "Decode this lab term."* **Skill Creator** lets her (or Andrew) save a new fill-in-the-blank recipe. Each skill is just a stored prompt template feeding the §8.1 copy flow. Low engineering cost, high "I can dig into anything" feeling.

**8.3 The "25-loop" build protocol — co-work deep research + UI/UX presentation**
This is the codified version of "run 25 loops." It is the routine **the co-work / Claude Code agent runs at build time** to (a) do the deep research and (b) make sure the UI/UX presents it correctly. Run it and log each pass.

| Track | Loops | What happens |
|---|---|---|
| **Research — Landscape** | 1–5 | Standard care; full medication list (T4 brands, T3, combo, NDT); how each is taken; current availability; guideline status. |
| **Research — Age-65 lens** | 6–9 | Over-treatment risks; age-adjusted TSH targets; start-low-go-slow; drug interactions; heart & bone notes. |
| **Research — Nutrition** | 10–13 | Selenium; vitamin D; Mediterranean pattern; gluten nuance; iodine caution; iron/B12; pill-timing. |
| **Research — Holistic** | 14–15 | Stress/sleep/movement; LDN; metformin — each with evidence rating. |
| **Research — Cutting edge** | 16–18 | Slow-release T3; weekly LT4 injection; organoids; biologics; stem-cell *caution*; live clinicaltrials.gov sweep. |
| **Structure into the loop** | 19–21 | Convert every finding into **Insight → Action(s) → Explore prompt**; assign status badge, evidence strength, source URL, last-checked date. |
| **Presentation / UX** | 22–24 | Build/refine the cards; verify glance-then-dig works; confirm §3 safety anchors render on every treatment view; accessibility (large type, contrast, tap targets). **Run the `responsive-qa` skill across mobile + desktop.** |
| **Safety & sourcing audit** | 25 | Re-check every claim against a reputable source; strip anything weak; confirm full §3 compliance before publish. |

A scheduled (or manual) re-run keeps "What's New" fresh.

---

## 9. Content Source of Truth (built from real research)

> Build agent: **use this as the seed content.** Paraphrased from reputable sources (§11). Re-verify via §8.3, render **every item as Insight → Action(s) → Explore**, keep the plain-language tone, attach the matching source. Never present as personalized advice.

### 9.1 Plain-language overview
Hashimoto's is an autoimmune condition where the immune system slowly attacks the thyroid, often leading to an underactive thyroid (hypothyroidism). The standard approach: **replace the missing hormone with a daily pill** and monitor blood levels (mainly TSH), adjusting the dose over time. It's usually a lifelong but very manageable condition — the goal is feeling well and keeping levels steady, not "curing" the gland. *(Mayo Clinic; StatPearls)*

### 9.2 The medication landscape (oldest/standard → newest)

**① Levothyroxine — synthetic T4 — `Standard, first-line`**
Brands: Synthroid, Levoxyl, Unithroid, generics; plus **Tirosint** (gel capsule) and **Tirosint-SOL** (liquid).
- *What it is:* a lab-made copy of T4, the main thyroid hormone; the body converts it into the active hormone, T3.
- *Generally good for:* almost everyone as the starting point — once daily, predictable, inexpensive (generic), decades of safety data.
- *Things to watch:* a minority still feel symptoms despite normal labs; absorption is reduced by food, coffee, calcium, iron, and some reflux meds (take on an empty stomach, ~30–60 min before breakfast); brand↔generic switches can shift levels slightly.
- *Tirosint angle:* very few inactive ingredients (gelatin, glycerin, water) — helpful for allergies/sensitivities or absorption issues (celiac, IBS, reflux meds); costs more.
- *👵 60s lens:* start low, go slow; too much raises risk of irregular heartbeat (atrial fibrillation) and bone thinning. *(Mayo; Paloma; GoodRx; FDA label; Endotext)*

**② Liothyronine — synthetic T3 — `Common alternative / add-on`**
Brands: Cytomel, generics, compounded; **slow-release T3** in trials.
- *What it is:* the active hormone (T3) given directly, instead of relying on conversion.
- *Generally good for:* people still symptomatic on T4 alone or who convert poorly; usually added to T4, not used alone.
- *Things to watch:* short-acting → peaks/dips; too much causes overactive-thyroid symptoms; **extra heart caution in older adults.** *(Dr. Brighten; Emerging Therapies review, NIH)*

**③ Combination T4 + T3 — `Common alternative`**
Two pills together or a combo formulation.
- *Generally good for:* persistent symptoms despite normal labs on T4 alone; some clearly prefer how they feel. A 2021 Endocrine Society (ENDO) randomized study found it worked about as well as levothyroxine.
- *Things to watch:* still **controversial** — major trials conflict, so not first-line; needs careful monitoring. ~5–10% are dissatisfied with T4 alone — the group this conversation is really about. *(ENDO 2021; European Thyroid Journal consensus 2021; Annals of Internal Medicine; JCEM)*

**④ Natural Desiccated Thyroid (NDT) — `Less common / patient-requested`**
Brands: Armour Thyroid, NP Thyroid, **Adthyza** (newer); Nature-Throid & WP Thyroid have had supply gaps.
- *What it is:* from pig thyroid; contains T4 + T3 (+ trace T2/T1), ~4:1 T4:T3.
- *Generally good for:* those wanting an animal-derived option with T3; many report a preference. Adthyza is lactose/corn/dye/latex-free.
- *Things to watch:* more T3 (relative to T4) than the body naturally makes; not guideline first-line; same heart caution for older adults; historical potency/supply variation. *(GoodRx; Marley Drug; Dr. Izabella Wentz; Dr. Brighten)*

### 9.3 The combination-therapy debate (one honest card)
Levothyroxine resolves symptoms for most. But a real minority feel "not back to normal" despite normal TSH. For them, adding T3 or trying desiccated extract *may* help — the research is genuinely mixed, which is why thoughtful doctors disagree. Honest framing: *"If you still feel off on standard treatment and your labs are normal, it's fair to ask your doctor about a trial of combination therapy."* *(European Thyroid Journal 2021; ScienceDirect case series 2025)*

### 9.4 The "👵 women in their 60s" lens (cross-cutting)
- **Start low, go slow** — older bodies are more sensitive.
- **Don't over-treat.** Too much hormone (suppressed TSH, esp. below ~0.1) raises risk of **atrial fibrillation, bone loss/fractures, possibly cognitive effects.** Many doctors aim for a **slightly higher TSH target in older patients** (often ~1.0–4.0).
- **Mild ("subclinical") hypothyroidism in older adults often doesn't need treating** — large trials (TRUST, IEMO80+) found little benefit and possible harm. "Watch and recheck" is legitimate.
- **Drug interactions matter more** with age/polypharmacy.
- **Heart conditions:** T3-containing options (Cytomel, NDT, combo) deserve extra caution.
- *(Endotext "Hypothyroidism in Older Adults"; Cleveland Clinic Journal of Medicine 2025; Journal of Internal Medicine 2022; Paloma Health)*

### 9.5 Nutrition (evidence-tagged)
- **Selenium — `Some evidence`:** may modestly lower thyroid antibodies (TPOAb); studied ~200 mcg/day. Don't overdo.
- **Vitamin D — `Some evidence`:** deficiency common and linked to higher antibodies; check and correct if low.
- **Mediterranean / anti-inflammatory diet — `Recommended pattern`:** increasingly suggested; rich in the helpful micronutrients.
- **Gluten — `Nuanced / individualize`:** clear benefit mainly with **celiac disease, gluten sensitivity, or gut symptoms.** Systematic reviews do **not** support strict gluten-free for *everyone* with Hashimoto's.
- **Iodine — `⚠️ Caution`:** both too little *and* too much are harmful. **More is not better** — avoid high-dose iodine/kelp unless directed.
- **Iron & B12 — `Check & correct`:** deficiencies more common; test and treat if low.
- **Pill-timing — `Strong, practical`:** separate levothyroxine from coffee, calcium, iron, soy, high-fiber foods by 30–60 min.
- *(Medicine 2025 selenium meta-analysis; World J Meta-Anal 2025; Nutrients 2025 GFD meta-analysis)*

### 9.6 Holistic & lifestyle (honestly framed)
- **Stress, sleep, gentle strength + cardio, weight — `Supportive`:** good for wellbeing; not a replacement for hormone treatment.
- **Low-dose naltrexone (LDN) — `Limited evidence, off-label`:** immune-modulating at small doses; ~half of users report some improvement, few side effects; no large trials. *Discuss with doctor.*
- **Metformin — `Limited evidence, off-label`:** small studies suggest lower antibodies/TSH, esp. with insulin resistance; cheap, not established. *Discuss with doctor.*
- *(RestartMed 2026 review; Autoimmunity 2020 metformin meta-analysis)*

### 9.7 What's New / experimental (all badged `Experimental — not prescribable today`)
- **Slow-release T3 (SRT3) + levothyroxine:** in randomized trials; steady T3 without the peaks/dips.
- **Weekly levothyroxine injection:** phase II (2023); bypasses the gut; once-weekly — for absorption problems.
- **Thyroid organoids / regenerative medicine:** lab-grown tissue restored function in mice — very early.
- **Biologics / targeted immunotherapy:** aim at the autoimmune root; early research.
- **Stem-cell therapy — `⚠️ Unproven`:** heavily marketed overseas; investigational, not validated, potentially costly/unsafe. Caution, not an option.
- **Active trial example:** Cleveland Clinic gluten-free-diet study (clinicaltrials.gov NCT07060118, recruiting 2025).
- *(Emerging Therapies in Hypothyroidism, NIH/PMC; Trials/Springer 2025; RestartMed 2026; clinicaltrials.gov)*

---

## 10. Tech architecture (sized for a technical-marketer / vibe-coder)

- **Frontend:** React + Vite + Tailwind. Component-driven so the Treatment Explorer ships beautifully first. (Use the `frontend-design` skill.)
- **Backend / data:** **Supabase** —
  1. **Content store** — insights + their actions (schema below). The §8.3 protocol writes here.
  2. **Her private data** — favorites, notes, and the "questions for my doctor" list, tied to her account.
- **Auth:** Supabase magic-link (email) — no password to remember. **She signs herself up; the app must not create the account for her.**
- **Going deeper:** pure front-end — copy-to-clipboard prompt + "Open ChatGPT" link (and optional `chatgpt.com/?q=` deep link). **No API keys, no AI backend.**
- **Deployment:** **Vercel**, a real URL she bookmarks. Any build guard goes in `scripts/build.js`, not protected config.
- **Content freshness:** scheduled or manual re-run of §8.3 for "What's New."

**Data model (content store):**
```
insights(
  id, category, title, why_it_matters, body_plain,
  good_for, watch_for, age65_note,
  status_badge,         -- standard | common_alt | less_common | experimental
  evidence_strength,    -- strong | some | limited | experimental
  source_name, source_url, last_checked
)
actions(
  id, insight_id, label,
  type,                 -- ask_doctor | try_note | save_compare
  chatgpt_prompt        -- the tailored "Explore this" prompt (Appendix A pattern)
)
user_saves(id, user_id, insight_id, note, in_doctor_list)
```

**Engineering hygiene (you're leveling up as PM):** real README, `.env.example` (no secrets committed), content seeded via a migration so it's reproducible, a short CHANGELOG. If any folder/repo gets deleted during the build, back it up first and log it to `DELETED-INDEX.md` with where it used to live.

---

## 11. Sources (seed set — re-verify on build)

Mayo Clinic (Hashimoto's diagnosis & treatment) · American Thyroid Association (Clinical Thyroidology for the Public) · Endocrine Society / ENDO 2021 combination-therapy study · NIH/NCBI — StatPearls, Endotext "Hypothyroidism in Older Adults," Emerging Therapies in Hypothyroidism (PMC) · European Thyroid Journal 2021 (LT4/LT3 consensus) · Journal of Internal Medicine 2022 & Cleveland Clinic Journal of Medicine 2025 (older-adult TSH targets) · TRUST / IEMO80+ trials · Nutrients 2025 (gluten meta-analysis), Medicine 2025 (selenium meta-analysis), World J Meta-Anal 2025 · FDA label (Tirosint); GoodRx, Marley Drug, Paloma Health, Dr. Brighten, Dr. Izabella Wentz (formulation/practical detail) · Trials/Springer 2025 (slow-release T3); RestartMed 2026; clinicaltrials.gov (NCT07060118 et al.). *(Attach URLs per-card during the §8.3 build.)*

---

## 12. Build plan — phased, UI/UX-first

> Component by component, cohesive throughout, deployed to a real URL at the end of **every** phase.

- **Phase 0 — Foundation:** repo at the exact path, Vite+React+Tailwind, Supabase project, warm/calm design system (large type, high contrast, card component), deploy a "hello" page to Vercel so the pipeline works day one.
- **Phase 1 — Treatment Explorer (MVP):** content store seeded from §9.2–9.4, **Insight → Action → Explore** cards, oldest→newest gallery, status badges, the 👵 60s lens, side-by-side compare, copy-to-ChatGPT prompts on actions, §3 safety anchors. Deploy.
- **Phase 2 — Skill library + creator** (§8.2).
- **Phase 3 — Notes & account:** magic-link sign-in, favorites, notes, "Questions for my doctor," print/PDF export.
- **Phase 4 — Nutrition + Holistic** (§9.5–9.6).
- **Phase 5 — What's New** (§9.7) + clinicaltrials.gov feed + refresh job.

---

## 13. Success metrics

- She uses it **before a doctor's appointment** at least once (the real win).
- She turns ≥ 1 insight into a saved **action / doctor question**.
- She uses an **"Explore this" prompt** in ChatGPT at least once.
- "Felt clearer / less overwhelmed after using it" — a simple thumbs-up check-in.
- Zero instances of anything reading like personalized medical advice (§3 audit).

---

## 14. Decisions (locked) & remaining open questions

**Locked (per Andrew, this session):**
- ✅ Educational, not advice. §3 is inviolable.
- ✅ **No built-in AI / no API key.** Depth = copy-to-ChatGPT prompts only, triggered by questions about an action.
- ✅ Core model = **Insight → Action → Explore.**
- ✅ "25 loops" = co-work deep research **+** UI/UX presentation verification (§8.3).
- ✅ Web app with notes + saved progress; deploy to a real Vercel URL.

**Still open (safe to default; revisit anytime):**
1. **Final name** — keep "Thyroid Compass" or pick a warmer one?
2. **Device priority** — laptop-first, or laptop + phone equally? *(Default: works great on both; design laptop-first.)*
3. **Citation visibility** — source links visible on every card, or tucked behind an info icon to keep it calm? *(Default: behind an info icon.)*

---

## Appendix A — "Explore this" prompt templates (these power the action buttons)

Each is copied to her clipboard (and optionally pre-filled into ChatGPT). Note the safety tail on every one.

**A1 — Explain one option simply**
> "I'm a 65-year-old woman with Hashimoto's and hypothyroidism. In plain, calm language, explain **[OPTION NAME]** as a treatment: what it is, who it tends to help, and what to watch out for at my age (especially heart and bones). Keep it short and clear. This is general info only — I'll confirm anything with my own doctor."

**A2 — Compare two options**
> "Compare **[OPTION A]** vs **[OPTION B]** for treating hypothyroidism in a woman in her mid-60s. Give a simple side-by-side of pros, cons, and age-specific cautions. Don't tell me which to take — I'll discuss with my doctor."

**A3 — Turn an action into appointment questions**
> "I have Hashimoto's and hypothyroidism and I'm in my mid-60s. I'm considering this action: **[ACTION]**. Give me a short, smart list of questions to ask my endocrinologist about it at my next appointment."

**A4 — Decode a lab or term**
> "Explain what **[TERM]** means in simple words for a patient, and why it might matter more for someone over 65. General info only."

**A5 — Nutrition reality-check**
> "I've read that **[CLAIM]**. As someone in my mid-60s with Hashimoto's, what does the actual evidence say — is it worth doing, and what should I be cautious about? I'll confirm with my doctor and dietitian."

---

*End of PRD v2. Decisions locked; build the first run autonomously from this file. §3 stays inviolable.*
