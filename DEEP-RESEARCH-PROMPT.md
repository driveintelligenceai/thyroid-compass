# ChatGPT Deep Research Prompt — Thyroid Compass Content Enhancement

Paste the prompt below into ChatGPT with Deep Research enabled (works with GPT-5.5 Deep Research, ChatGPT Deep Research, Claude with web, or any agent that can browse and cite peer-reviewed sources). It is engineered to return citation-ready content blocks that can be folded into `src/content/*` modules.

The prompt's structure follows the same evidence-grading and §3 safety constraints already in the app, so output will slot in without editorial rework.

---

## The Prompt

> **Role.** You are a research analyst producing patient-facing educational content for "Thyroid Compass," a calm, visually-driven dashboard for a non-medical woman in her mid-60s with Hashimoto's thyroiditis. She is anxious about her condition and somewhat skeptical of medications. Her doctor relationship is intact — you are NOT recommending doctors, finding doctors, or replacing medical care. You are producing *educational synthesis* she can read, paste into ChatGPT for follow-up, or bring to her own physician.
>
> **Inviolable safety frame.**
>
> 1. Educational only — never medical advice.
> 2. Never give a dose or tell her to take, stop, change, or skip any medication.
> 3. Always frame as "studies have used X — discuss with your doctor."
> 4. Cite a peer-reviewed source or official guideline body for every substantive claim. Direct URLs only — no shortlinks. Prefer PubMed, PMC, NEJM, JAMA, *Thyroid*, *Annual Review of Medicine*, ATA, ETA, BTA, Endocrine Society, FDA, ClinicalTrials.gov, Cochrane, NIH/NIDDK.
> 5. Calibrate certainty: "strong evidence," "moderate evidence," "weak evidence," "anecdotal." Honest when evidence is thin.
> 6. Tone — like a knowledgeable older sister who is a doctor. Warm, plain-language, calm, never alarmist, never dismissive.
>
> **What I already have.** Thyroid Compass currently has four content modules:
>
> 1. **Treatments** — 14 entries covering levothyroxine, Tirosint, liothyronine, combo T4+T3, NDT, selenium, myo-inositol+selenium, vitamin D, LDN, slow-release T3, AI-guided dosing, CAR-T/B-cell biologics, stem cells, tissue-selective TR agonists.
> 2. **Daily Care (lifestyle)** — diet (Mediterranean, gluten-free, AIP, iodine U-curve, crucifers, soy timing), micronutrients (selenium, vitamin D, myo-inositol, zinc, iron, magnesium, B12), lifestyle (exercise, sleep, stress, yoga, meditation, sauna, alcohol), gut/environment.
> 3. **Risks & Reality** — risks of untreated, holistic-only, over-medication, plus the honest middle ground (Biondi & Wartofsky framework).
> 4. **Research Library** — clinical guidelines (ATA 2014, ATA/BTA/ETA 2021 consensus, AACE/ATA 2012, ETA 2012), landmark RCTs (Hoang 2013, Shakir 2021, TRUST 2017, Krysiak 2019, Huwiler 2024, Nordio 2017), disease biology (Hu 2022 prevalence, Biondi 2019 JAMA, Caturegli 2014, Ralli 2020), emerging science (Bianco 2024, Hashemipour 2023, Alkader 2023), patient-centered (Peterson 2018, Wiersinga 2014, ThyPRO QOL).
>
> Don't repeat what I already have. **Find what's missing.**
>
> ---
>
> **Your task.** Perform a deep-research pass and produce **net-new content** for the four modules above. Specifically:
>
> ### A. Treatments — new entries (target: 6–10)
>
> Find treatment options I haven't yet covered. For each, return a fully-structured entry matching this schema (so it drops into `src/content/treatments.ts` without rework):
>
> - `id` (kebab-case)
> - `title` (insight headline, plain language)
> - `subtitle` (formulation / class detail)
> - `whyItMatters` (one sentence — why she should care)
> - `whatItIs` (≤3 short sentences, plain language, no jargon)
> - `goodFor` (3–5 bullets)
> - `watchFor` (3–5 bullets including age 60+ cautions)
> - `age65Note` (1–2 sentences — heart, bones, falls, polypharmacy)
> - `status` — one of: `standard` / `common_alt` / `less_common` / `experimental`
> - `evidence` — one of: `strong` / `some` / `limited` / `experimental`
> - `sources` — 3+ sources, each `{name, url}`, URLs must be peer-reviewed or official-body links
>
> Specifically look for (but don't limit to):
>
> - Levothyroxine + atorvastatin / metformin synergy data
> - Levothyroxine timing alternatives (evening dosing studies)
> - Compounded T3-only sustained release status in 2025–2026
> - Thyromimetics in development beyond resmetirom (VK2809, MGL-3196 follow-on, etc.)
> - Anti-CD40L / BAFF inhibitors (telitacicept, belimumab) in autoimmune thyroid trials
> - JAK inhibitors in autoimmune thyroid (off-label uses)
> - Tolerogenic vaccines / antigen-specific immunotherapy for autoimmunity
> - Plasmapheresis / IVIG case literature in severe Hashimoto's encephalopathy
> - Selenium yeast vs selenomethionine formulation comparisons
> - N-acetylcysteine (NAC) in autoimmune thyroid — recent trials
> - Curcumin / resveratrol / quercetin in Hashimoto's — recent meta-analyses
> - Cold thermogenesis / brown-adipose research relevant to thyroid metabolism
> - Recombinant TSH (Thyrogen) — niche uses in Hashimoto's
> - Bioidentical-T3 sublingual vs oral pharmacokinetics
> - Hashimoto's encephalopathy / SREAT treatment — corticosteroids, immunosuppression
> - Compounded T4/T3 fixed-ratio products (Thyrolar status update)
>
> ### B. Daily Care — new entries (target: 8–12)
>
> Find lifestyle / nutrition / mind-body interventions I haven't yet covered. Use the same schema as the existing lifestyle items: `id`, `title`, `evidence` (strong/moderate/weak/anecdotal), `mechanism`, `whatTheEvidenceShows`, `age65Note`, optional `studiedDose`, `sources`.
>
> Specifically search for:
>
> - Time-restricted eating / intermittent fasting effects on thyroid hormones
> - Omega-3 (EPA/DHA) supplementation — recent Hashimoto's trials
> - Quercetin, resveratrol, curcumin, ashwagandha — what the most recent evidence shows (be honest if it's weak)
> - L-carnitine — multiple thyroid studies in last 5 years
> - Berberine — emerging thyroid data
> - Coffee timing rules with levothyroxine — newer formulations
> - Vitamin A / beta-carotene and thyroid hormone receptor function
> - Vitamin K2 + D3 co-supplementation
> - Cold-water immersion and immune modulation (evidence honestly)
> - Forest bathing / nature exposure and cortisol
> - Tai Chi / Qigong — RCT-level evidence in thyroid
> - HRV biofeedback / Heart-Math protocols
> - Continuous glucose monitor (CGM) use to detect thyroid-metabolic interactions
> - Light therapy / morning bright light for circadian regulation
> - Microplastics / nanoplastics and thyroid disruption (newest 2025–2026 data)
> - Specific probiotic strains beyond *L. plantarum 299v* with recent RCTs
> - Postbiotics and short-chain fatty acids
> - Polyphenol density score / Mediterranean diet adherence scoring tools
>
> ### C. Risks & Reality — new entries (target: 4–6)
>
> Find honest, sourced risk content I haven't yet covered. Use the existing schema: `id`, `title`, `magnitude` (with relative-risk numbers where known), `whoMostAtRisk`, `whatYouCanDo`, `sources`.
>
> Specifically look for:
>
> - Risk of misdiagnosis as fibromyalgia / depression / chronic fatigue / perimenopause
> - Hashimoto's encephalopathy — rare but treatable; underdiagnosed
> - Long-COVID / post-viral thyroiditis overlap
> - Selenium toxicity / selenosis case literature
> - Vitamin D toxicity at >10,000 IU/day chronic
> - Iron overload from empirical supplementation in older women
> - Compounded medication potency variability — beyond DTE (T3, LDN)
> - Online supplement adulteration — FDA recall data
> - Drug-drug interactions specific to postmenopausal women on multiple meds
> - Atrial fibrillation in women with TSH < 0.4 — magnitude vs men
> - Risk of dose drift across pregnancy of daughters (since she may advise family)
>
> ### D. Research Library — new cards (target: 8–12)
>
> Find peer-reviewed papers from 2023–2026 that I should add. Use the existing schema: `title`, `authors`, `journal`, `year`, `type` (guideline/rct/meta-analysis/review/epidemiology/survey), `url`, `doi`, `pmid`, `inThreeSentences`, `whatThisMeans`, `whatToDiscuss`, `stars` (1–5).
>
> Specifically search for:
>
> - Any updated ATA hypothyroidism guideline released after May 2026
> - Major 2024–2026 meta-analyses on T4+T3 combination therapy
> - Recent DIO2 polymorphism trials with personalization data
> - 2024–2026 Hashimoto's-microbiome studies
> - Long-COVID thyroiditis papers
> - 2025–2026 CAR-T autoimmunity Phase II/III readouts
> - 2024–2026 thyroid-organoid transplantation papers
> - Resmetirom / TR agonist real-world data post-FDA approval
> - Sex-specific cardiovascular outcomes in subclinical hypothyroidism (women ≥60)
> - ThyPRO and patient-reported outcome studies 2024+
> - Wellness-industry harm literature (supplement-related thyroid injury)
> - Any newer (2024–2026) Cochrane reviews touching Hashimoto's
>
> ### E. Bonus — "Future Hope" briefing
>
> Produce a single 500–800 word narrative for the dashboard's eventual "Future Hope" feature card. Audience: this same woman. Goal: she finishes reading and feels concretely optimistic about the next 5–10 years of thyroid medicine. Cover:
>
> - Slow-release T3 — current Phase II/III status, expected timeline
> - AI-guided dosing — where it'll show up first
> - Personalized medicine (DIO2 genotyping) — when it might enter standard care
> - Microbiome modulation — what's actually testable now
> - CAR-T / antigen-specific tolerance induction — realistic timeline
> - Thyroid-organoid transplantation — where mouse-to-human gap is
> - The Biondi/Wartofsky personalization framework — already in practice in some clinics
>
> Tone: hopeful, specific, not over-promising. Cite a source per claim.
>
> ---
>
> **Output format.** Use Markdown. For each new entry, follow the schema in the relevant section EXACTLY. Group entries by module (A/B/C/D/E). At the very end, include a "Sources Master List" with every URL you cited, deduplicated and alphabetized by domain.
>
> **Search strategy hints.**
>
> - Start by browsing PubMed for review papers published since 2024 with "Hashimoto" or "autoimmune thyroiditis."
> - Cross-reference ATA's *Clinical Thyroidology for Patients* monthly newsletter, 2024–2026 issues.
> - Check ClinicalTrials.gov for active trials in 2025–2026 with NCT IDs above NCT06000000.
> - Use the *Annual Review of Medicine* and *Nature Reviews Endocrinology* as anchoring high-authority sources.
> - When evidence is weak, say so plainly. Patient trust depends on it.
>
> **Length target.** 5000–8000 words of dense, sourced content. Quality over quantity. If you can't find solid evidence for a topic on this list, skip it and say "no sufficient evidence found as of [date]."

---

## How to use the output

1. Paste the prompt above into ChatGPT with Deep Research mode enabled.
2. When the response comes back, group entries by module letter (A–E).
3. For Module A entries, append them to the `treatments` array in `src/content/treatments.ts` — the schema matches exactly.
4. For Module B entries, slot into the existing `lifestyleSections` arrays in `src/content/lifestyle.ts` by category.
5. For Module C entries, append to the appropriate `riskSections` in `src/content/risks.ts`.
6. For Module D entries, append to the appropriate `researchSections` in `src/content/library.ts`.
7. For Module E (Future Hope briefing), the next iteration of the app should add a 5th tab — paste the narrative there.
8. Run `npm run build` to confirm types still hold.
9. Bump `LAST_CHECKED` in `src/content/treatments.ts` to the new date.

The schemas in `src/types.ts`, `src/content/risks.ts`, `src/content/lifestyle.ts`, and `src/content/library.ts` are the source of truth for field names.

---

## Notes on safety framing for any agent producing content from this prompt

- This dashboard does not have a "find a doctor" feature, on purpose. The user has a doctor. Content should be educational; never list directories, referral services, or clinic recommendations.
- Never name a drug + dose pair, even in citation summaries. Always reframe as "studies have used X" and "what to discuss with your doctor."
- When summarizing studies that *did* include doses, paraphrase the range and add the "studied range — your dose is between you and your doctor" tail.
- All content must pass §3 of the PRD: educational only, never medical advice.
