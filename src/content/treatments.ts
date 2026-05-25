/**
 * Treatment Options Explorer — expanded, peer-reviewed.
 *
 * Curated from a deep-research pass against ATA 2014, ETA 2012, the 2021
 * ATA/BTA/ETA Joint Consensus, ClinicalTrials.gov, 2024 meta-analyses, and
 * 2025 trial protocols. Educational only — no doses, no "take this."
 *
 * Order: standard-of-care → common alternatives → adjuncts → off-label →
 * trial-stage → preclinical / future. She should be able to see her
 * options-today AND her options-tomorrow on one scroll.
 */

import type { Insight } from "../types";
import {
  promptA1ExplainOption,
  promptA2CompareOptions,
  promptA3ActionToQuestions,
  promptA6DeepDive,
} from "./prompts";

const LAST_CHECKED = "2026-05-25";

export const treatments: Insight[] = [
  // ─── 1. Standard-of-care ───────────────────────────────────────────
  {
    id: "levothyroxine",
    category: "treatment",
    title:
      "Levothyroxine (T4) — the standard first treatment. Once a day, predictable, decades of safety data.",
    subtitle: "Synthetic T4 · Synthroid, Levoxyl, Unithroid, Euthyrox, generics",
    whyItMatters:
      "It's what every major guideline body (ATA, ETA, BTA, AACE, Endocrine Society) recommends as first-line. It works well for the majority of people.",
    whatItIs:
      "A lab-made copy of T4, the main thyroid hormone. Your body converts it into the active hormone, T3, as it needs it.",
    goodFor: [
      "Almost everyone, as the starting point",
      "Predictable, once-daily dose",
      "Inexpensive as a generic; FDA-approved since 1955",
      "Strong recommendation in ATA 2014 guidelines",
    ],
    watchFor: [
      "A minority (~10–15%) still feel symptoms even when labs look normal",
      "Coffee, calcium, iron, soy, high-fiber food, PPIs, and some supplements reduce absorption — separate by 30–60 minutes (4 hours for calcium / iron)",
      "Switching between brand and generic can shift levels slightly",
      "Suppressed TSH from over-replacement is linked to higher atrial-fibrillation risk and bone loss after 65",
    ],
    age65Note:
      "Start low, go slow. Over-replacement raises atrial-fibrillation risk up to ~3× in elderly hypothyroid patients on suppressive doses, and accelerates bone loss in postmenopausal women. ATA guidance: keep TSH in the upper half of the normal range after 65 (often 1.5–4.0).",
    status: "standard",
    evidence: "strong",
    sources: [
      {
        name: "ATA 2014 Guidelines for the Treatment of Hypothyroidism (Jonklaas et al., Thyroid)",
        url: "https://www.liebertpub.com/doi/10.1089/thy.2014.0028",
      },
      {
        name: "Levothyroxine therapy in elderly patients (Frontiers in Endocrinology)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8006441/",
      },
      {
        name: "Levothyroxine dose and fracture risk (BMJ)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3084377/",
      },
      {
        name: "Quality of life on levothyroxine — Danish cohort (Winther et al.)",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4892657/",
      },
    ],
    lastChecked: LAST_CHECKED,
    actions: [
      {
        id: "levo-discuss-dose",
        label: "Whether your current dose is still right at your age",
        type: "discuss",
        prompt: promptA3ActionToQuestions(
          "talking about whether my levothyroxine dose is still appropriate at my age, given the heart-rhythm and bone considerations after 65"
        ),
      },
      {
        id: "levo-timing",
        label: "Take on an empty stomach — 30–60 min before food or coffee; 4h from calcium/iron",
        type: "try_note",
        prompt: promptA1ExplainOption(
          "the levothyroxine timing rule — what foods, drinks, and supplements interfere with absorption"
        ),
      },
      {
        id: "levo-save",
        label: "Save to compare",
        type: "save_compare",
        prompt: promptA1ExplainOption("Levothyroxine (synthetic T4)"),
      },
    ],
  },

  // ─── 2. Tirosint family ────────────────────────────────────────────
  {
    id: "tirosint",
    category: "treatment",
    title:
      "Tirosint (gel-cap) and Tirosint-SOL (liquid) — same T4, but virtually no fillers.",
    subtitle: "Synthetic T4 in alternative formulations · FDA-approved 2006 / 2016",
    whyItMatters:
      "If you have absorption issues — celiac, IBS, reflux meds (PPIs), or sensitivities to dyes/lactose/binders — these formulations often give a steadier TSH.",
    whatItIs:
      "The same levothyroxine molecule, in a gelatin/glycerin gel cap or oral solution. No lactose, gluten, dyes, or most binders.",
    goodFor: [
      "People on proton pump inhibitors (PPIs) like omeprazole",
      "Celiac disease, IBS, or post-thyroidectomy patients",
      "Anyone with unstable TSH on standard tablets",
      "Sensitivities to dyes or lactose",
    ],
    watchFor: [
      "Significantly more expensive than generic tablets — insurance coverage varies",
      "Same over-replacement cautions as standard levothyroxine",
      "Liquid version (SOL) requires careful single-dose handling",
    ],
    age65Note:
      "Especially relevant after 65 because PPI and metformin use is so common at this age — both interfere with standard levothyroxine absorption. The FDA label specifically instructs lower starting doses in elderly and cardiac patients.",
    status: "standard",
    evidence: "strong",
    sources: [
      {
        name: "FDA Tirosint label (2017)",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/021924s013lbl.pdf",
      },
      {
        name: "Tirosint-SOL and PPI co-therapy study (PMC)",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10754356/",
      },
    ],
    lastChecked: LAST_CHECKED,
    actions: [
      {
        id: "tirosint-discuss",
        label: "Whether a gel-cap or liquid formulation might give you steadier numbers",
        type: "discuss",
        prompt: promptA3ActionToQuestions(
          "talking about whether switching to Tirosint (gel cap) or Tirosint-SOL (liquid) might give me more stable TSH given the medications and foods I take"
        ),
      },
      {
        id: "tirosint-save",
        label: "Save to compare",
        type: "save_compare",
        prompt: promptA1ExplainOption("Tirosint and Tirosint-SOL"),
      },
    ],
  },

  // ─── 3. Liothyronine ───────────────────────────────────────────────
  {
    id: "liothyronine",
    category: "treatment",
    title:
      "Liothyronine (T3) — adds the active hormone directly, usually on top of T4.",
    subtitle: "Synthetic T3 · Cytomel, generics; rarely used alone",
    whyItMatters:
      "A small but real group (~10–15%) still feels symptomatic on T4 alone. Some have a genetic variant (DIO2 Thr92Ala) that may reduce how well they convert T4 to T3.",
    whatItIs:
      "The active hormone (T3), given as a pill. Provides T3 directly instead of relying on the body's conversion from T4.",
    goodFor: [
      "Persistent symptoms on optimized T4 alone",
      "Possibly people with DIO2 Thr92Ala (research-grade evidence — not standard testing yet)",
      "Almost always added to T4, not used as monotherapy",
    ],
    watchFor: [
      "Short half-life — levels rise and fall through the day (peaks and dips)",
      "Higher risk of palpitations, atrial fibrillation, sleep disruption, and bone loss vs T4 alone",
      "Strong caution in older adults and anyone with a heart condition",
    ],
    age65Note:
      "The 2021 joint guideline specifically cautions against T3 use in older adults with cardiovascular disease or arrhythmia history. T3 swings are bigger than T4 swings and the heart feels them.",
    status: "common_alt",
    evidence: "some",
    sources: [
      {
        name: "2021 ATA/BTA/ETA Joint Consensus on LT4/LT3 Combination Therapy",
        url: "https://journals.sagepub.com/doi/10.1089/thy.2020.0720",
      },
      {
        name: "DIO2 Thr92Ala polymorphism (Jonklaas et al., JCEM 2017)",
        url: "https://academic.oup.com/jcem/article/102/5/1623/2966904",
      },
      {
        name: "2024 safety review of T3+T4 combination therapy (CMRO)",
        url: "https://www.tandfonline.com/doi/full/10.1080/03007995.2024.2435460",
      },
    ],
    lastChecked: LAST_CHECKED,
    actions: [
      {
        id: "lio-discuss-add",
        label: "Whether adding T3 could be a reasonable trial if you still feel off",
        type: "discuss",
        prompt: promptA3ActionToQuestions(
          "talking about whether a careful trial of adding liothyronine (T3) to my levothyroxine could help me feel better — and how the heart and bone risks would be monitored"
        ),
      },
      {
        id: "lio-compare",
        label: "Compare with levothyroxine alone",
        type: "save_compare",
        prompt: promptA2CompareOptions(
          "levothyroxine (T4) alone",
          "levothyroxine plus liothyronine (T4 + T3)"
        ),
      },
    ],
  },

  // ─── 4. Combination T4+T3 ──────────────────────────────────────────
  {
    id: "combo-t4-t3",
    category: "treatment",
    title:
      "Combination T4 + T3 — a reasonable trial when symptoms persist on T4 alone.",
    subtitle: "Two pills together · endorsed conditionally by the 2021 joint consensus",
    whyItMatters:
      "The 2021 ATA/BTA/ETA joint consensus — 100% agreement on this — recognized that a small subset of patients feel better on combination therapy. The major Dutch T3-4-Hypo Trial (NCT05682482) is testing exactly this group now.",
    whatItIs:
      "Levothyroxine (T4) plus a small amount of liothyronine (T3) taken together, aiming for the more physiologic ~14:1 T4:T3 ratio the healthy thyroid produces.",
    goodFor: [
      "Persistent symptoms despite biochemically adequate T4 alone",
      "People who clearly prefer how they feel on combination therapy",
      "Conditionally endorsed by 2021 ATA/BTA/ETA joint consensus",
    ],
    watchFor: [
      "14 RCTs reviewed in 2021 found no consistent superiority overall — it's for a subset, not everyone",
      "Needs careful monitoring (TSH, free T4, free T3, symptoms)",
      "Brings T3 cautions: peaks/dips, cardiac sensitivity, bone effects",
    ],
    age65Note:
      "The 2021 consensus is explicit: 'use with caution in older adults with cardiovascular disease or arrhythmia history.' Many endocrinologists prefer lower-than-standard T3 doses in this age group, with a higher TSH target.",
    status: "common_alt",
    evidence: "some",
    sources: [
      {
        name: "2021 ATA/BTA/ETA Joint Consensus on LT4/LT3 (Thyroid)",
        url: "https://journals.sagepub.com/doi/10.1089/thy.2020.0720",
      },
      {
        name: "T3-4-Hypo Trial (NCT05682482) — Dutch RCT, recruiting",
        url: "https://clinicaltrials.gov/study/NCT05682482",
      },
      {
        name: "Shakir et al. 2021 three-way comparison (JCEM)",
        url: "https://pubmed.ncbi.nlm.nih.gov/34185829/",
      },
    ],
    lastChecked: LAST_CHECKED,
    actions: [
      {
        id: "combo-discuss-trial",
        label: "Whether a trial of combination therapy is reasonable for you",
        type: "discuss",
        prompt: promptA3ActionToQuestions(
          "talking about whether a careful trial of combination T4 + T3 therapy is reasonable given that I still don't feel quite right on T4 alone — and how we would monitor heart and bone effects at my age"
        ),
      },
      {
        id: "combo-compare-ndt",
        label: "Compare combo with desiccated thyroid",
        type: "save_compare",
        prompt: promptA2CompareOptions(
          "combination T4 + T3 (two synthetic pills)",
          "natural desiccated thyroid (NDT)"
        ),
      },
    ],
  },

  // ─── 5. NDT ────────────────────────────────────────────────────────
  {
    id: "ndt",
    category: "treatment",
    title:
      "Natural Desiccated Thyroid (NDT) — animal-derived; many patients prefer how they feel, but supply is unstable.",
    subtitle: "From pig thyroid · Armour, NP Thyroid · FDA enforcement action Aug 2025",
    whyItMatters:
      "In the pivotal Hoang 2013 crossover RCT, 49% of patients preferred desiccated extract vs 19% who preferred levothyroxine — but TSH and symptom scores didn't statistically differ. ATA 2014 does not endorse it as first-line.",
    whatItIs:
      "Dried thyroid tissue from pigs, containing both T4 and T3 (and trace T2 and T1) in a fixed ~4:1 ratio by weight.",
    goodFor: [
      "Patients who specifically prefer an animal-derived option with T3 included",
      "People who report feeling better on it than on synthetic T4 alone",
      "Adthyza is a newer formulation that is lactose-, corn-, dye-, and latex-free",
    ],
    watchFor: [
      "Contains proportionally more T3 than a healthy human thyroid secretes — more heart and bone risk",
      "Not the guideline first-line treatment",
      "In August 2025, the FDA reclassified DTE as biologics and issued enforcement letters citing potency variability",
      "Historical supply gaps (Nature-Throid, WP Thyroid) and batch-to-batch variation",
    ],
    age65Note:
      "Same theme as the other T3-containing options — the heart-rhythm and bone conversations matter more after 65. The August 2025 FDA action also means supply and consistency are real concerns to think about.",
    status: "less_common",
    evidence: "limited",
    sources: [
      {
        name: "Hoang et al. 2013 RCT, JCEM",
        url: "https://pubmed.ncbi.nlm.nih.gov/23539727/",
      },
      {
        name: "FDA — Actions on unapproved thyroid medications (Aug 2025)",
        url: "https://www.fda.gov/drugs/enforcement-activities-fda/fdas-actions-address-unapproved-thyroid-medications",
      },
      {
        name: "American Thyroid Association statement on DTE",
        url: "https://www.thyroid.org/ata-statement-desiccated-thyroid-extract/",
      },
      {
        name: "Comparative effectiveness LT4 vs DTE vs LT4+LT3 (Shakir et al.)",
        url: "https://pubmed.ncbi.nlm.nih.gov/34185829/",
      },
    ],
    lastChecked: LAST_CHECKED,
    actions: [
      {
        id: "ndt-discuss",
        label: "Whether NDT is a reasonable option given the 2025 FDA action",
        type: "discuss",
        prompt: promptA3ActionToQuestions(
          "talking about whether natural desiccated thyroid (NDT) is a reasonable option given the 2025 FDA enforcement action — and how the supply, potency, and heart-risk concerns apply to me"
        ),
      },
      {
        id: "ndt-explain",
        label: "What NDT actually is, in plain words",
        type: "try_note",
        prompt: promptA1ExplainOption("Natural Desiccated Thyroid (NDT)"),
      },
    ],
  },

  // ─── 6. Selenium ───────────────────────────────────────────────────
  {
    id: "selenium",
    category: "nutrition",
    title:
      "Selenium — the one supplement with real RCT support for lowering TPO antibodies.",
    subtitle: "Adjunct · studies have used 100–200 µg/day for 3–6 months",
    whyItMatters:
      "Of the dozens of supplements marketed for Hashimoto's, selenium is the only one with consistent meta-analysis-level evidence — and even that is modest. A 2024 systematic review (Huwiler) found it reduces TSH and TPO antibodies in patients not yet on hormone replacement.",
    whatItIs:
      "A trace mineral that's a cofactor for the enzymes that protect thyroid tissue from oxidative damage (glutathione peroxidase) and convert T4 to T3 (deiodinases).",
    goodFor: [
      "Lowering TPO antibody levels modestly (~15–40% in responders)",
      "Especially in Hashimoto's patients not yet on thyroid hormone",
      "Backed by 2024 meta-analysis of 35 RCTs and the 2013 Cochrane review",
    ],
    watchFor: [
      "Doesn't consistently improve TSH, symptoms, or progression to overt hypothyroidism",
      "Upper limit is 400 µg/day — selenosis at higher chronic doses",
      "Long-term excess linked to type 2 diabetes risk in older adults (SELECT trial)",
      "Brazil nuts vary 10–250 µg per nut depending on origin — not a reliable dosing route",
    ],
    age65Note:
      "Modest benefit, real upper-limit safety. Discuss baseline selenium status with your doctor; keep total intake (food + supplement) at or below 200 µg/day.",
    status: "common_alt",
    evidence: "some",
    sources: [
      {
        name: "Huwiler et al. 2024 systematic review and meta-analysis (Thyroid)",
        url: "https://www.liebertpub.com/doi/10.1089/thy.2023.0556",
      },
      {
        name: "Cochrane 2013 review (van Zuuren et al.)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4005265/",
      },
      {
        name: "ATA July 2024 patient-facing summary",
        url: "https://www.thyroid.org/patient-thyroid-information/ct-for-patients/july-2024/vol-17-issue-7-p-5-6/",
      },
    ],
    lastChecked: LAST_CHECKED,
    actions: [
      {
        id: "se-discuss",
        label: "Whether a selenium trial makes sense for you and at what dose",
        type: "discuss",
        prompt: promptA3ActionToQuestions(
          "talking about whether a selenium supplement trial is reasonable for me, what dose has been studied, and how we'd know if it's actually doing anything"
        ),
      },
      {
        id: "se-save",
        label: "Save to compare",
        type: "save_compare",
        prompt: promptA1ExplainOption("Selenium supplementation for Hashimoto's"),
      },
    ],
  },

  // ─── 7. Myo-inositol + selenium ────────────────────────────────────
  {
    id: "myo-inositol-selenium",
    category: "nutrition",
    title:
      "Myo-inositol + Selenium — a promising newer combination from Italian research.",
    subtitle:
      "Adjunct · studies have used 600 mg myo-inositol + 83 µg selenium daily for 6 months",
    whyItMatters:
      "Several RCTs (Nordio & Basciani 2017; 2024 systematic review with trial-sequential analysis) show this combination lowers TSH and reduces TPO and Tg antibodies more than selenium alone in subclinical hypothyroid Hashimoto's patients.",
    whatItIs:
      "Myo-inositol is a naturally-occurring sugar alcohol that helps cells respond to TSH; paired with selenium it appears to restore normal thyroid function better than selenium alone in early-stage disease.",
    goodFor: [
      "Subclinical hypothyroidism with positive antibodies",
      "People not yet on thyroid hormone replacement",
      "Antibody-positive patients with TSH 3–6 still in normal range",
    ],
    watchFor: [
      "Trials are short (mostly 6 months) — long-term effects unknown",
      "Mild GI upset is the most reported side effect",
      "Most evidence comes from a single Italian research group — needs broader replication",
    ],
    age65Note:
      "If your TSH is in the 3–6 mIU/L range and you're not on hormone yet, this is one of the better-evidenced combinations to discuss. Few safety signals reported in older adults.",
    status: "common_alt",
    evidence: "some",
    sources: [
      {
        name: "Nordio & Basciani 2017 RCT (168 patients)",
        url: "https://pubmed.ncbi.nlm.nih.gov/28724185/",
      },
      {
        name: "2024 systematic review (Sage)",
        url: "https://journals.sagepub.com/doi/10.1177/11795514241300998",
      },
      {
        name: "2025 narrative review (PMC)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12565457/",
      },
    ],
    lastChecked: LAST_CHECKED,
    actions: [
      {
        id: "mi-discuss",
        label: "Whether myo-inositol + selenium fits your stage of disease",
        type: "discuss",
        prompt: promptA3ActionToQuestions(
          "talking about whether myo-inositol with selenium is a reasonable trial for me, given where my TSH and antibodies are now"
        ),
      },
      {
        id: "mi-save",
        label: "Save to compare",
        type: "save_compare",
        prompt: promptA1ExplainOption("Myo-inositol plus selenium for early Hashimoto's"),
      },
    ],
  },

  // ─── 8. Vitamin D ──────────────────────────────────────────────────
  {
    id: "vitamin-d",
    category: "nutrition",
    title:
      "Vitamin D — modest antibody-lowering effect, especially if you start deficient.",
    subtitle: "Adjunct · target 25(OH)D ~40–60 ng/mL",
    whyItMatters:
      "Vitamin D deficiency is common in Hashimoto's. Multiple meta-analyses (Zhang 2021, Frontiers 2025) show supplementation modestly reduces TPO and Tg antibodies — most in patients who started deficient.",
    whatItIs:
      "A fat-soluble vitamin / steroid hormone that modulates immune cells (T regs, T helpers). The receptor is found on immune cells throughout the body.",
    goodFor: [
      "Hashimoto's patients with baseline 25(OH)D below 30 ng/mL",
      "Bone health and falls prevention after 60",
      "Supporting immune balance generally",
    ],
    watchFor: [
      "Chronic excess (>4000 IU/day) raises kidney-stone risk in older women",
      "Test 25(OH)D before and during supplementation — don't dose blind",
      "Effect on thyroid antibodies is modest, not curative",
    ],
    age65Note:
      "Doubly relevant after 60 — vitamin D matters for thyroid antibodies, bone density, and fall prevention all at once. Get 25(OH)D measured and supplement to a target with your doctor; consider K2 if on higher doses.",
    status: "common_alt",
    evidence: "some",
    sources: [
      {
        name: "Zhang 2021 meta-analysis (Sage Open Med)",
        url: "https://journals.sagepub.com/doi/10.1177/03000605211060675",
      },
      {
        name: "Vitamin D mechanism review (Frontiers Endo 2025)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12355199/",
      },
      {
        name: "2025 autoantibody meta-analysis (PMC)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12178248/",
      },
    ],
    lastChecked: LAST_CHECKED,
    actions: [
      {
        id: "vd-discuss",
        label: "Whether your 25(OH)D level should be checked and a target set",
        type: "discuss",
        prompt: promptA3ActionToQuestions(
          "talking about getting my 25(OH)D vitamin D level checked, and what target makes sense for me given my antibodies and bone health"
        ),
      },
      {
        id: "vd-save",
        label: "Save to compare",
        type: "save_compare",
        prompt: promptA1ExplainOption("Vitamin D for Hashimoto's"),
      },
    ],
  },

  // ─── 9. Low-Dose Naltrexone ───────────────────────────────────────
  {
    id: "ldn",
    category: "treatment",
    title:
      "Low-dose Naltrexone (LDN) — off-label and unproven, but generally well tolerated.",
    subtitle: "Off-label · 0.5–4.5 mg/day (vs 50 mg for addiction medicine)",
    whyItMatters:
      "Patient communities talk about LDN often. The honest picture: no published randomized trials in Hashimoto's exist. Mechanism is biologically plausible, observational reports are mostly positive, and side effects are usually mild.",
    whatItIs:
      "An opioid-receptor antagonist used at very low doses to briefly block opioid receptors overnight, which appears to upregulate endogenous endorphins and may shift Th1/Th2 immune balance.",
    goodFor: [
      "Patients with persistent autoimmune-feeling symptoms who've tried first-line approaches",
      "Generally well tolerated — vivid dreams and sleep disturbance are the most common side effects",
      "Inexpensive, prescribed and compounded",
    ],
    watchFor: [
      "No randomized controlled trials in Hashimoto's — evidence is observational and anecdotal",
      "Cannot be taken with opioid pain medications",
      "Requires a clinician comfortable with off-label prescribing",
    ],
    age65Note:
      "Generally safe in older adults, but if you take any opioid pain medicine — even occasionally — this is a contraindication. Discuss with your doctor before pursuing.",
    status: "less_common",
    evidence: "experimental",
    sources: [
      {
        name: "Paloma Health LDN summary",
        url: "https://www.palomahealth.com/learn/naltrexone-hashimotos",
      },
      {
        name: "LDN Research Trust review",
        url: "https://ldnresearchtrust.org/hashimoto-thyroiditis-and-low-dose-naltrexone-ldn-paula-johnson",
      },
      {
        name: "Healthmatch evidence review (notes lack of RCTs)",
        url: "https://healthmatch.io/hashimotos-disease/low-dose-naltrexone-hashimotos-thyroiditis",
      },
    ],
    lastChecked: LAST_CHECKED,
    actions: [
      {
        id: "ldn-discuss",
        label: "Whether LDN fits your situation — and the honest evidence gap",
        type: "discuss",
        prompt: promptA3ActionToQuestions(
          "talking about whether low-dose naltrexone (LDN) is a reasonable off-label trial for me, what the evidence gap is, and what monitoring would look like"
        ),
      },
      {
        id: "ldn-save",
        label: "Save to compare",
        type: "save_compare",
        prompt: promptA1ExplainOption(
          "Low-dose naltrexone (LDN) as an off-label option for Hashimoto's"
        ),
      },
    ],
  },

  // ─── 10. Slow-release T3 ──────────────────────────────────────────
  {
    id: "slow-release-t3",
    category: "treatment",
    title:
      "Slow-release T3 — in active clinical trials. Aims to deliver steady T3 without the peaks.",
    subtitle: "SRT3 + levothyroxine · experimental · 2021 consensus' preferred trial compound",
    whyItMatters:
      "This is the most-watched possible solution to the combination-therapy debate. The 2021 ATA/BTA/ETA joint consensus reached 100% agreement that sustained-release T3 is the preferred experimental compound for future trials. A 2025 trial protocol (100 patients, 48 weeks) is recruiting.",
    whatItIs:
      "A modified-release liothyronine formulation designed to release T3 slowly across the day, preventing the supraphysiologic peak that ordinary T3 produces — theoretically delivering T3 benefits without the heart and bone risks.",
    goodFor: [
      "A future option for people who feel better with T3 added but struggle with the daily peaks and dips",
      "Antibodies-and-symptoms-but-normal-TSH patients in trials",
      "Endorsed as the preferred trial compound by the 2021 consensus",
    ],
    watchFor: [
      "Not commercially available — only in clinical trials",
      "Long-term safety data still being gathered",
      "Compounding pharmacies do produce off-label SR-T3, but potency consistency is the same concern as compounded DTE",
    ],
    age65Note:
      "If your endocrinologist mentions a trial, the same older-adult cautions apply (heart, bones, drug interactions). The hope is that steadier T3 levels mean less arrhythmia risk than conventional T3 — but the data to confirm this hasn't been generated yet.",
    status: "experimental",
    evidence: "experimental",
    sources: [
      {
        name: "Slow-release T3 PK/PD RCT (Hashemipour 2023)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10463362/",
      },
      {
        name: "2025 SRT3 study protocol (Trials, Springer)",
        url: "https://link.springer.com/article/10.1186/s13063-025-08940-5",
      },
      {
        name: "Bianco 2024 Emerging Therapies in Hypothyroidism (Annual Review of Medicine)",
        url: "https://pubmed.ncbi.nlm.nih.gov/37738506/",
      },
    ],
    lastChecked: LAST_CHECKED,
    actions: [
      {
        id: "srt3-discuss",
        label: "Whether any slow-release T3 trial near you is enrolling",
        type: "discuss",
        prompt: promptA3ActionToQuestions(
          "talking about whether there are any slow-release T3 clinical trials I might be eligible for, and what the trade-offs of joining a trial would look like at my age"
        ),
      },
      {
        id: "srt3-explain",
        label: "Explain slow-release T3 in plain words",
        type: "try_note",
        prompt: promptA1ExplainOption(
          "slow-release T3 (SRT3), an experimental option being studied in trials"
        ),
      },
    ],
  },

  // ─── 11. AI-guided dosing ─────────────────────────────────────────
  {
    id: "ai-guided-dosing",
    category: "research",
    title:
      "AI-guided dosing — models that personalize your starting dose based on your data.",
    subtitle: "Decision-support tools in early validation · likely to reach clinics in 2–5 years",
    whyItMatters:
      "Weight-based dosing formulas miss most often in older patients — exactly the group where over-replacement is most dangerous. Machine-learning models trained on BMI, comorbidities, and lab trends are reaching 83–87% accuracy and reducing over-dosing rates in simulation studies.",
    whatItIs:
      "Software that takes your age, weight, sex, labs, and meds and predicts the dose most likely to land your TSH where you want it — not as a replacement for your doctor, as a second opinion they can use.",
    goodFor: [
      "Older patients where conventional dosing formulas perform worst",
      "Patients whose TSH has been hard to stabilize",
      "A future tool — not something to ask for at a regular appointment yet",
    ],
    watchFor: [
      "Not yet integrated into standard clinical workflows",
      "Models trained on specific populations may underperform on others",
      "A second opinion, not a first answer",
    ],
    age65Note:
      "This is the group these tools should help most. The Spaggiari 2024 simulation reduced over-dosing from 30.5% to 23.9% in general practice. If your endocrinologist mentions or already uses MIPD software, it's a good sign.",
    status: "experimental",
    evidence: "experimental",
    sources: [
      {
        name: "Frontiers 2025 — ML levothyroxine dosing model",
        url: "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2025.1415206/full",
      },
      {
        name: "Spaggiari 2024 MIPD simulation in general practice",
        url: "https://pubmed.ncbi.nlm.nih.gov/38711388/",
      },
      {
        name: "2025 Computational Intelligence ML dosing study",
        url: "https://onlinelibrary.wiley.com/doi/10.1111/coin.70060",
      },
    ],
    lastChecked: LAST_CHECKED,
    actions: [
      {
        id: "ai-explain",
        label: "What model-informed precision dosing (MIPD) actually means in plain words",
        type: "try_note",
        prompt: promptA6DeepDive("AI-guided / model-informed precision dosing for levothyroxine"),
      },
      {
        id: "ai-save",
        label: "Save to compare",
        type: "save_compare",
        prompt: promptA1ExplainOption("AI-guided levothyroxine dosing"),
      },
    ],
  },

  // ─── 12. CAR-T / B-cell biologics ─────────────────────────────────
  {
    id: "car-t-biologics",
    category: "research",
    title:
      "CAR-T and B-cell biologics — autoimmune disease's next frontier, not Hashimoto's yet.",
    subtitle: "Phase I/II trials across lupus, myasthenia, scleroderma · 119 trials registered",
    whyItMatters:
      "After remarkable results in lupus, engineered T-cells that hunt down rogue B-cells (the cells that make TPO antibodies) are moving across autoimmune disease one indication at a time. Hashimoto's-specific trials don't exist yet — but the field is moving fast.",
    whatItIs:
      "Your own T-cells, removed and engineered in a lab to recognize and kill the B-cells driving autoimmunity (and the BAFF survival signal that keeps them alive). One treatment may produce long remissions in some autoimmune diseases.",
    goodFor: [
      "A genuine 'future option' worth knowing exists",
      "Currently being tested in lupus, myasthenia gravis, systemic sclerosis (Phase I/II)",
      "119 CAR-T autoimmunity trials registered as of 2025; 25 new ones in 2024 alone",
    ],
    watchFor: [
      "Not in Hashimoto's-specific trials yet",
      "Significant infection risk during the B-cell-depletion window",
      "Very expensive; not realistic outside of trial settings now",
      "Paradoxically, Hashimoto's has been reported as a side effect of CAR-T given for lymphoma",
    ],
    age65Note:
      "Older adults face higher infection risk from immune-cell-depleting therapies. This is a 'know it exists' option for the late-decade, not something to pursue today.",
    status: "experimental",
    evidence: "experimental",
    sources: [
      {
        name: "2025 CAR-T in autoimmunity review (Frontiers Immunology)",
        url: "https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2025.1630569/full",
      },
      {
        name: "CD19-BAFF CAR-T trial (NCT06279923)",
        url: "https://clinicaltrials.gov/study/NCT06279923",
      },
      {
        name: "CAR-T advances 2025 (PMC)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12643756/",
      },
    ],
    lastChecked: LAST_CHECKED,
    actions: [
      {
        id: "cart-explain",
        label: "What CAR-T for autoimmunity means in plain words",
        type: "try_note",
        prompt: promptA6DeepDive(
          "CAR-T cell therapy and B-cell-targeting biologics for autoimmune disease — including where Hashimoto's might fit in the future"
        ),
      },
      {
        id: "cart-save",
        label: "Save to compare",
        type: "save_compare",
        prompt: promptA1ExplainOption("CAR-T therapy for autoimmune disease"),
      },
    ],
  },

  // ─── 13. Stem-cell / regenerative ─────────────────────────────────
  {
    id: "stem-cell",
    category: "research",
    title:
      "Stem-cell and regenerative therapy — preclinical. The 'maybe we can fix the gland itself' research.",
    subtitle: "Mesenchymal and induced-pluripotent stem cells · animal-model and ex-vivo stage",
    whyItMatters:
      "All of our current treatments replace the hormone but don't repair the gland. This is the research direction trying to change that. It's early — but it exists.",
    whatItIs:
      "Two approaches: (1) mesenchymal stem cells (MSCs) that release anti-inflammatory signals to slow autoimmune damage, and (2) iPSCs/ESCs differentiated into actual functional thyroid follicular cells that could theoretically replace damaged tissue.",
    goodFor: [
      "A genuine 'future option' worth knowing exists",
      "Promising 2025 animal-model results (MSC transplant reduced TgAb, normalized Th17/Treg ratio)",
      "Mount Sinai group has differentiated functional thyroid cells from skin fibroblasts in lab work",
    ],
    watchFor: [
      "No clinical-grade product exists for Hashimoto's",
      "Offshore 'stem cell clinics' marketing this are unregulated — endorsed by no thyroid society",
      "Likely 10+ years from routine clinical reality, if it gets there at all",
    ],
    age65Note:
      "Not a current option for anyone at any age. Worth knowing exists. Be especially wary of any clinic — international or domestic — selling stem-cell therapy for autoimmune disease today.",
    status: "experimental",
    evidence: "experimental",
    sources: [
      {
        name: "2025 BMSC iodine-induced autoimmune thyroiditis study",
        url: "https://pubmed.ncbi.nlm.nih.gov/40435196/",
      },
      {
        name: "2025 limbal MSC extracellular vesicles (PMC)",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12705507/",
      },
      {
        name: "Bianco 2024 Emerging Therapies (Annual Review of Medicine)",
        url: "https://pubmed.ncbi.nlm.nih.gov/37738506/",
      },
    ],
    lastChecked: LAST_CHECKED,
    actions: [
      {
        id: "stem-explain",
        label: "What stem-cell research for autoimmune thyroid actually means",
        type: "try_note",
        prompt: promptA6DeepDive(
          "stem-cell and regenerative therapy research for Hashimoto's thyroiditis — what's been done, what hasn't, what to be skeptical of"
        ),
      },
      {
        id: "stem-save",
        label: "Save to compare",
        type: "save_compare",
        prompt: promptA1ExplainOption(
          "Stem-cell and regenerative approaches for Hashimoto's"
        ),
      },
    ],
  },

  // ─── 14. Tissue-selective TR agonists ─────────────────────────────
  {
    id: "tr-agonists",
    category: "research",
    title:
      "Tissue-selective thyroid analogs — a new chemistry the field is learning from.",
    subtitle: "Resmetirom (Rezdiffra) FDA-approved 2024 for liver, not Hashimoto's",
    whyItMatters:
      "Resmetirom became the first FDA-approved liver-selective thyroid receptor agonist in March 2024 (for fatty liver disease — MASH). It's not a Hashimoto's drug. But it proves the principle: thyroid signaling can be turned on tissue-by-tissue. This is the chemistry that may, eventually, give us replacement hormones that spare the heart and bones.",
    whatItIs:
      "Resmetirom selectively activates the TR-β receptor (mostly in liver) while sparing TR-α (mostly in heart). Earlier compounds in this class (sobetirome, eprotirome) were halted for safety, but the principle keeps advancing.",
    goodFor: [
      "Knowing where the chemistry is heading",
      "Future drugs in this family may eventually offer T4-like benefit without T3-like cardiac risk",
    ],
    watchFor: [
      "Resmetirom itself is NOT a treatment for hypothyroidism — it's for fatty liver",
      "Sobetirome and eprotirome were both discontinued due to safety signals",
      "True 'selective replacement hormones' for hypothyroidism are not yet in clinical trials",
    ],
    age65Note:
      "Aspirational, not actionable today. The reason this matters is that the heart and bone problems of current T3-containing options come from non-selective activation. Selective chemistry is the path to 'T3 benefits without T3 costs' — but we are not there yet.",
    status: "experimental",
    evidence: "experimental",
    sources: [
      {
        name: "Thyroid hormone analog update (PMC)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7415871/",
      },
      {
        name: "Resmetirom FDA approval review",
        url: "https://www.explorationpub.com/Journals/eds/Article/100878",
      },
    ],
    lastChecked: LAST_CHECKED,
    actions: [
      {
        id: "tra-explain",
        label: "What 'tissue-selective thyroid agonist' actually means",
        type: "try_note",
        prompt: promptA6DeepDive(
          "tissue-selective thyroid hormone receptor agonists like resmetirom, sobetirome and eprotirome — what they do, why this chemistry matters for the future of hypothyroidism treatment"
        ),
      },
      {
        id: "tra-save",
        label: "Save to compare",
        type: "save_compare",
        prompt: promptA1ExplainOption("Tissue-selective thyroid receptor agonists"),
      },
    ],
  },
];
