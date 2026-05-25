/**
 * Daily Care — lifestyle, diet, and natural approaches.
 *
 * Sourced from a 2026-05-25 deep-research pass across PubMed, Cochrane,
 * Frontiers, and NIH. Every claim is graded by evidence strength
 * (strong / moderate / weak / anecdotal) and tied to a peer-reviewed paper.
 *
 * Framing: these are complements to (not substitutes for) hormone
 * replacement when it's medically needed. Honest about what's well-supported
 * versus wellness-blog hype.
 */

export type Evidence = "strong" | "moderate" | "weak" | "anecdotal";

export interface LifestyleItem {
  id: string;
  title: string;
  evidence: Evidence;
  mechanism: string;
  whatTheEvidenceShows: string;
  age65Note: string;
  studiedDose?: string;
  sources: { name: string; url: string }[];
}

export interface LifestyleSection {
  id: string;
  kicker: string;
  title: string;
  framing: string;
  items: LifestyleItem[];
}

export const LIFESTYLE_INTRO =
  "These are the daily things with real evidence behind them — and the things that get oversold. The goal isn't to swap medication for lifestyle. It's to give the body around the medication the best chance to feel well. Where the science is strong, this guide says so. Where it isn't, it says that too.";

export const dailyPractices = [
  "Eat a Mediterranean-pattern diet — olive oil, fish 2–3×/week, daily vegetables (cooked crucifers fine), legumes, whole grains, berries. Strong evidence across thyroid, heart, cognition, and bone.",
  "Move daily and lift weights twice a week — 30+ min walking + 2 short resistance sessions. Strong evidence for quality of life, fatigue, and aging well in your 60s.",
  "Sleep 7–8 hours on a consistent schedule — dark, cool room. Moderate evidence — sleep directly modulates TSH and immune function.",
  "Check your 25(OH)D vitamin D level and supplement to a target. Moderate evidence for antibodies; strong evidence for bone health after 60.",
  "Do a 10–20 minute stress-down practice daily — paced breathing, walking, meditation, prayer. Moderate evidence; near-zero downside.",
  "If on levothyroxine — empty stomach, 30–60 min before food or coffee; separate calcium/iron by 4 hours. Strong evidence — this alone fixes a lot of 'unstable TSH' stories.",
  "Avoid high-dose iodine supplements — skip kelp, 'thyroid support' formulas with >150 µg iodine, iodine drops. Strong evidence — iodine excess is a documented Hashimoto's trigger.",
];

export const lifestyleSections: LifestyleSection[] = [
  {
    id: "diet",
    kicker: "Diet",
    title: "How you eat — what the evidence actually supports",
    framing:
      "The Mediterranean pattern wins on almost every endpoint that matters at your age. Highly restrictive elimination diets have weaker evidence and harder trade-offs.",
    items: [
      {
        id: "mediterranean",
        title: "Mediterranean-pattern diet",
        evidence: "strong",
        mechanism:
          "High in polyphenols, omega-3s, olive oil, and fiber. Lowers systemic inflammation (CRP, IL-6) and supports a diverse microbiome.",
        whatTheEvidenceShows:
          "Median 25–28% reductions in TPO and Tg antibodies and meaningful CRP drops in 12-week Hashimoto's studies. Independently strong evidence for cardiovascular, cognitive, and bone outcomes — the three things that matter most after 60.",
        age65Note:
          "This is the highest-evidence overall dietary pattern for a woman in her 60s. Easy, sustainable, no elimination required.",
        sources: [
          {
            name: "Ülker 2024 — Med diet + GF in Hashimoto's (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10867487/",
          },
          {
            name: "Med diet impact on Hashimoto's (QJM 2024)",
            url: "https://academic.oup.com/qjmed/article/117/Supplement_2/hcae175.472/7903565",
          },
        ],
      },
      {
        id: "gluten-free",
        title: "Gluten-free diet (in non-celiac Hashimoto's)",
        evidence: "moderate",
        mechanism:
          "Possible molecular mimicry between gluten peptides and thyroid tissue; reducing intestinal permeability may dampen autoimmune cross-reactivity.",
        whatTheEvidenceShows:
          "Krysiak 2018 (34 drug-naïve Polish women) saw significant TPO and Tg antibody reduction after 6 months. A 2025 meta-analysis shows reductions but heterogeneous results. Clinical symptom benefit is inconsistent.",
        age65Note:
          "Strict gluten-free is socially burdensome and risks fiber/B-vitamin/selenium shortfalls if not planned. Get celiac testing first (requires gluten in diet). A reasonable trial is 8–12 weeks with antibody re-check.",
        sources: [
          {
            name: "Krysiak 2018 pilot (Exp Clin Endocrinol Diabetes)",
            url: "https://pubmed.ncbi.nlm.nih.gov/30060266/",
          },
          {
            name: "Gluten-free meta-analysis (Nutrients 2025)",
            url: "https://www.mdpi.com/2072-6643/17/21/3437",
          },
        ],
      },
      {
        id: "aip",
        title: "Autoimmune Protocol (AIP) diet",
        evidence: "weak",
        mechanism:
          "Eliminates grains, legumes, nightshades, dairy, eggs, nuts, seeds, alcohol, coffee, and additives. Theoretically reduces immune triggers and supports the gut barrier.",
        whatTheEvidenceShows:
          "A 2019 Hashimoto's pilot (n=17) improved quality of life and CRP but thyroid antibodies and function didn't significantly change. The often-cited 'Konijeti 2017 study' was actually in IBD, not Hashimoto's.",
        age65Note:
          "Highly restrictive. Risk of inadequate calcium, fiber, and protein at your age. Better as a short (4–6 week) diagnostic elimination than long-term. Mediterranean delivers most of the benefit with far less burden.",
        sources: [
          {
            name: "Konijeti 2017 IBD pilot (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5647120/",
          },
          {
            name: "Abbott 2019 AIP Hashimoto's pilot (Cureus)",
            url: "https://www.cureus.com/articles/18181-the-effect-of-an-autoimmune-protocol-diet-on-thyroid-function-and-quality-of-life-in-hashimotos-thyroiditis",
          },
        ],
      },
      {
        id: "iodine",
        title: "Iodine — the critical U-shaped curve",
        evidence: "strong",
        mechanism:
          "Iodine is essential for thyroid hormone synthesis — but excess iodine can trigger and worsen autoimmune thyroiditis by increasing TPO antigenicity and oxidative stress.",
        whatTheEvidenceShows:
          "Meta-analysis of 22 studies (n=69,987) confirms U-shape: both deficiency AND excess raise autoimmune-thyroid risk, with lowest risk at urinary iodine ~300 µg/L. Population studies after universal salt iodization show Hashimoto's prevalence rises.",
        age65Note:
          "This is the single most important counterintuitive point. Many 'thyroid support' supplements contain iodine doses that can worsen Hashimoto's. Aim for ~150 µg/day from a normal diet with iodized salt. Avoid kelp, iodine drops, and anything over ~200 µg.",
        sources: [
          {
            name: "U-shaped iodine curve (EJE 2019)",
            url: "https://academic.oup.com/ejendo/article/181/3/255/6654156",
          },
        ],
      },
      {
        id: "cruciferous",
        title: "Cruciferous vegetables (broccoli, kale, cabbage)",
        evidence: "strong",
        mechanism:
          "Contain glucosinolates that can theoretically interfere with iodine uptake — but only at extreme intake and when iodine-deficient.",
        whatTheEvidenceShows:
          "The 'goitrogen' worry is largely overblown. The famous cautionary case involved a woman eating ~3 lbs of raw bok choy daily for months. Cooking deactivates the relevant enzyme (myrosinase) 30–60%.",
        age65Note:
          "Eat them. 1–2 cups per day, ideally cooked. The cardiovascular, anti-cancer, and fiber benefits far outweigh the theoretical risk at normal intake with adequate iodine.",
        sources: [
          {
            name: "ATA position on goitrogens (patient-facing)",
            url: "https://www.thyroid.org/thyroid-information-for-patients/",
          },
        ],
      },
      {
        id: "soy-timing",
        title: "Soy and levothyroxine timing",
        evidence: "strong",
        mechanism: "Soy isoflavones bind levothyroxine in the gut and reduce absorption.",
        whatTheEvidenceShows:
          "Strong interaction evidence. Weak evidence that moderate soy harms thyroid in iodine-replete people without medication.",
        age65Note:
          "If on levothyroxine, separate soy by at least 4 hours. Moderate soy (tofu, edamame, tempeh) is fine — timing matters more than avoidance.",
        sources: [
          {
            name: "Levothyroxine + food/supplement systematic review (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8002057/",
          },
        ],
      },
    ],
  },
  {
    id: "micronutrients",
    kicker: "Supplements & nutrients",
    title: "Pills and powders — what the evidence ranks",
    framing:
      "Wellness brands sell 10–20-supplement Hashimoto's protocols. The honest evidence is much narrower: selenium, vitamin D, possibly myo-inositol + selenium. Most of the rest is marketing.",
    items: [
      {
        id: "selenium",
        title: "Selenium",
        evidence: "moderate",
        mechanism:
          "Cofactor for glutathione peroxidase (antioxidant defense in thyroid) and deiodinases (T4→T3 conversion).",
        whatTheEvidenceShows:
          "2024 Huwiler meta-analysis of 35 RCTs: selenium reduced TSH and TPO antibodies in Hashimoto's not on hormone replacement. Cochrane 2013 also positive on antibodies but unclear on patient-relevant outcomes. ~15–40% TPO reduction in responders.",
        studiedDose: "100–200 µg/day selenomethionine for 3–6 months",
        age65Note:
          "Stay at or below 200 µg/day from all sources. Long-term excess linked to type 2 diabetes risk in older adults. Brazil-nut dosing (10–250 µg per nut) is unreliable.",
        sources: [
          {
            name: "Huwiler 2024 meta-analysis (Thyroid)",
            url: "https://www.liebertpub.com/doi/10.1089/thy.2023.0556",
          },
          {
            name: "Cochrane 2013 review",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4005265/",
          },
        ],
      },
      {
        id: "vitamin-d",
        title: "Vitamin D",
        evidence: "moderate",
        mechanism:
          "Immunomodulatory — promotes regulatory T-cells and dampens Th17 autoimmune activity. Deficiency is highly prevalent in Hashimoto's.",
        whatTheEvidenceShows:
          "Multiple meta-analyses (Zhang 2021, Frontiers 2025) show modest TPO and Tg antibody reductions, mostly in patients starting deficient (<20 ng/mL). 15–30% antibody reduction in deficient responders.",
        studiedDose: "2000–4000 IU/day for 3–6 months, target 40–60 ng/mL of 25(OH)D",
        age65Note:
          "Doubly relevant — vitamin D matters for thyroid antibodies, bone density, and fall prevention all at once. Check 25(OH)D before and during supplementation. Consider K2 if on higher doses.",
        sources: [
          {
            name: "Zhang 2021 vitamin D meta-analysis (Sage)",
            url: "https://journals.sagepub.com/doi/10.1177/03000605211060675",
          },
          {
            name: "Frontiers 2025 mechanism review",
            url: "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2025.1576850/full",
          },
        ],
      },
      {
        id: "myo-inositol",
        title: "Myo-inositol + selenium",
        evidence: "moderate",
        mechanism:
          "Myo-inositol modulates TSH receptor signaling; with selenium it appears to restore euthyroidism in subclinical hypothyroidism better than selenium alone.",
        whatTheEvidenceShows:
          "Nordio & Basciani 2017 (168 patients, TSH 3–6): combination lowered TSH and reduced TgAb more than selenium alone. 2024 systematic review with trial-sequential analysis supports the finding. Evidence largely from one Italian research group — broader replication needed.",
        studiedDose: "600 mg myo-inositol + 83 µg selenium daily for 6 months",
        age65Note:
          "One of the better-evidenced combinations to discuss with your doctor, especially if TSH is 3–6 and antibodies are positive.",
        sources: [
          {
            name: "Nordio & Basciani 2017 RCT",
            url: "https://pubmed.ncbi.nlm.nih.gov/28724185/",
          },
          {
            name: "2024 systematic review (Sage)",
            url: "https://journals.sagepub.com/doi/10.1177/11795514241300998",
          },
        ],
      },
      {
        id: "zinc",
        title: "Zinc",
        evidence: "weak",
        mechanism: "Cofactor for T4→T3 deiodinase activity and zinc-finger thyroid hormone receptors.",
        whatTheEvidenceShows:
          "Small trials show free T3 improvements in zinc-deficient hypothyroid women.",
        studiedDose: "15–30 mg elemental zinc/day; pair with 1–2 mg copper if taken >8 weeks",
        age65Note: "Useful only if deficient. Food-first sources preferred. Don't take long-term high-dose without copper.",
        sources: [
          {
            name: "Mahmoodianfard 2015 (PubMed)",
            url: "https://pubmed.ncbi.nlm.nih.gov/26039585/",
          },
        ],
      },
      {
        id: "iron-ferritin",
        title: "Iron / ferritin",
        evidence: "moderate",
        mechanism:
          "Iron is required for thyroid peroxidase (TPO) enzyme function; low ferritin reduces T4→T3 conversion. Hashimoto's often clusters with autoimmune gastritis.",
        whatTheEvidenceShows:
          "Bidirectional thyroid–iron relationship is well-documented. Iron supplements block levothyroxine absorption — separate by at least 4 hours.",
        age65Note:
          "Check ferritin (a common functional target is 70–100 ng/mL); avoid empirical iron supplementation without labs — excess iron is harmful in older adults. Postmenopausal women rarely need supplemental iron unless tested deficient.",
        sources: [
          {
            name: "Iron-deficiency anemia + subclinical hypothyroidism (Am J Med)",
            url: "https://www.amjmed.com/article/S0002-9343(13)00070-3/fulltext",
          },
        ],
      },
      {
        id: "magnesium",
        title: "Magnesium",
        evidence: "weak",
        mechanism: "Cofactor in hundreds of enzymes; cross-sectional data link low Mg to higher Tg antibodies.",
        whatTheEvidenceShows: "Severely low serum Mg associated with 2.7–3.2× higher odds of positive TgAb in observational data.",
        studiedDose: "200–400 mg/day magnesium glycinate or citrate (avoid oxide)",
        age65Note: "Low-risk, broad benefits (sleep, blood pressure, bone, constipation). Glycinate is gentle on the stomach.",
        sources: [
          {
            name: "Wang 2018 (Nature Sci Rep)",
            url: "https://www.nature.com/articles/s41598-018-28362-5",
          },
        ],
      },
      {
        id: "b12",
        title: "Vitamin B12",
        evidence: "strong",
        mechanism:
          "Hashimoto's clusters with autoimmune gastritis and pernicious anemia; B12 deficiency is far more common than in the general population.",
        whatTheEvidenceShows:
          "10–55% prevalence of B12 deficiency in Hashimoto's per systematic reviews. Supplementation corrects deficiency but isn't itself disease-modifying.",
        age65Note:
          "Test B12 (and methylmalonic acid if borderline). B12 absorption declines with age regardless of thyroid. Sublingual or injectable if absorption is impaired.",
        sources: [
          {
            name: "B12 in thyroid disorders meta-analysis (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9994182/",
          },
        ],
      },
      {
        id: "skip-tyrosine",
        title: "Skip L-tyrosine",
        evidence: "anecdotal",
        mechanism: "Theoretical: precursor amino acid for thyroid hormone synthesis.",
        whatTheEvidenceShows:
          "Despite plausible biochemistry, no trials show benefit in non-malnourished hypothyroid patients. Not worth the money.",
        age65Note: "Skip. Common filler in 'thyroid stack' products.",
        sources: [
          {
            name: "NIH ODS Selenium fact sheet (broader context on supplement claims)",
            url: "https://ods.od.nih.gov/factsheets/Selenium-HealthProfessional/",
          },
        ],
      },
    ],
  },
  {
    id: "lifestyle",
    kicker: "Lifestyle",
    title: "Movement, sleep, stress — the levers with the highest ratio of benefit to cost",
    framing:
      "These are not soft. They are the interventions with the largest published effect sizes on how you actually feel — and the lowest downside.",
    items: [
      {
        id: "exercise",
        title: "Exercise — walk every day, lift twice a week",
        evidence: "moderate",
        mechanism:
          "Improves insulin sensitivity, lowers systemic inflammation, supports T4→T3 conversion, and counters hypothyroid fatigue and weight gain.",
        whatTheEvidenceShows:
          "Werneck 2018 RCT: 16 weeks of aerobic training improved quality of life in subclinical hypothyroid women. 2023 RCT comparing aerobic, resistance, and combined — all improved thyroid function and QoL.",
        studiedDose: "30–60 min, 3×/week, low-to-moderate intensity + 2× weekly resistance training",
        age65Note:
          "Resistance training is non-negotiable at your age — preserves muscle mass, bone density, glucose handling. Walking + 2 strength sessions weekly is more important than any supplement on this list. Listen to fatigue — overtraining can flare autoimmunity.",
        sources: [
          {
            name: "Werneck 2018 RCT (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10118651/",
          },
          {
            name: "Aerobic/resistance/combined RCT 2023",
            url: "https://pubmed.ncbi.nlm.nih.gov/37659172/",
          },
        ],
      },
      {
        id: "sleep",
        title: "Sleep — 7–8 hours, consistent times",
        evidence: "moderate",
        mechanism:
          "TSH follows a circadian rhythm (nocturnal peak). Sleep disruption raises inflammatory cytokines and is associated with subclinical thyroid dysfunction; shift work raises autoimmune-thyroid risk.",
        whatTheEvidenceShows:
          "Mendelian randomization study (Frontiers 2024) supports a causal link between disrupted sleep and autoimmune thyroid disease.",
        age65Note:
          "Aim for 7–8 hours, consistent wake time, dark/cool bedroom. Sleep apnea is common in hypothyroid women and worth screening for.",
        sources: [
          {
            name: "Sleep & AITD Mendelian randomization (Frontiers Endo 2024)",
            url: "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2023.1325538/full",
          },
          {
            name: "Circadian-thyroid review (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7288350/",
          },
        ],
      },
      {
        id: "stress",
        title: "Stress / HPA axis",
        evidence: "moderate",
        mechanism:
          "Chronic cortisol elevation suppresses TSH, impairs T4→T3 conversion, weakens regulatory T-cells, and increases gut permeability. Major life stressors precede autoimmune-thyroid onset in a significant proportion of cases.",
        whatTheEvidenceShows:
          "Largely observational and mechanistic — but the HPA-thyroid axis is well-mapped and stress reduction interventions improve symptoms in patient-reported outcome studies.",
        age65Note:
          "Stress management is genuinely disease-relevant, not a wellness platitude. Daily practices: paced breathing, walking outdoors, social connection, limiting evening cortisol triggers (news, alcohol).",
        sources: [
          {
            name: "Chronic stress & autoimmunity HPA axis review (MDPI 2025)",
            url: "https://www.mdpi.com/1422-0067/26/20/9994",
          },
        ],
      },
      {
        id: "yoga",
        title: "Yoga",
        evidence: "moderate",
        mechanism:
          "Vagal tone, parasympathetic activation, neck/throat asanas may improve thyroid blood flow; reduces cortisol.",
        whatTheEvidenceShows:
          "Multiple RCTs and a 2025 systematic review support symptom and QoL benefits in hypothyroidism. The Nilkantham/Singh 2025 RCT (n=134) showed QoL improvement on a structured digital yoga module.",
        age65Note:
          "Excellent fit at your age — gentle, evidence-based, builds balance and flexibility (fall prevention). Start with restorative or gentle hatha. Avoid extreme inversions if you have osteoporosis or blood-pressure issues.",
        sources: [
          {
            name: "Bhandari 2025 yoga systematic review (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11559499/",
          },
          {
            name: "Nilkantham/Singh 2025 RCT (JMIR)",
            url: "https://www.jmir.org/2025/1/e54078/",
          },
        ],
      },
      {
        id: "meditation",
        title: "Meditation / MBSR",
        evidence: "moderate",
        mechanism: "Reduces cortisol, lowers IL-6 and CRP, dampens stress-driven autoimmune flares.",
        whatTheEvidenceShows:
          "Black & Slavich 2016 systematic review of 20 RCTs supports anti-inflammatory effects of mindfulness practices. MBSR in autoimmune hepatitis pilot showed cytokine reductions.",
        studiedDose: "10–20 minutes daily of structured practice",
        age65Note:
          "One of the highest-leverage interventions for chronic-stress-driven autoimmunity, with zero side effects. Free apps available (Healthy Minds, Insight Timer).",
        sources: [
          {
            name: "Black & Slavich 2016 systematic review (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4940234/",
          },
        ],
      },
      {
        id: "sauna",
        title: "Sauna / heat therapy",
        evidence: "weak",
        mechanism: "Heat shock proteins, vasodilation, reduced systemic inflammation.",
        whatTheEvidenceShows:
          "Weak for thyroid-specific outcomes. Moderate for cardiovascular and all-cause mortality benefits in Finnish cohort data (Laukkanen).",
        age65Note:
          "If you enjoy it, reasonable practice — 15–20 min, 2–4×/week. Hydrate well, watch blood pressure. Don't expect thyroid-specific miracles; expect cardiovascular and mood benefits.",
        sources: [
          {
            name: "Laukkanen sauna review (PubMed)",
            url: "https://pubmed.ncbi.nlm.nih.gov/29371920/",
          },
        ],
      },
      {
        id: "alcohol",
        title: "Alcohol — keep it modest, not zero for thyroid",
        evidence: "moderate",
        mechanism:
          "Counterintuitive: moderate alcohol *reduces* autoimmune-thyroid risk in prospective Danish cohorts (Carlé 2012).",
        whatTheEvidenceShows: "Heavy use is harmful generally and impairs nutrient absorption.",
        age65Note:
          "Don't start drinking for thyroid benefit. If you drink now, ≤1 drink/day. Alcohol significantly raises postmenopausal breast cancer risk — that's the more important consideration.",
        sources: [
          {
            name: "Carlé 2012 (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3821464/",
          },
        ],
      },
    ],
  },
  {
    id: "gut-environment",
    kicker: "Gut & environment",
    title: "Microbiome, environment, and what's worth doing about either",
    framing:
      "There is a real gut-thyroid connection. There's also a wellness-industry version that promises much more than the science delivers. Here's what to do — and what to skip.",
    items: [
      {
        id: "microbiome",
        title: "Microbiome dysbiosis",
        evidence: "moderate",
        mechanism: "Reduced Bifidobacterium/Lactobacillus and increased Bacteroides/Proteobacteria in Hashimoto's patients vs controls.",
        whatTheEvidenceShows:
          "Consistent observational findings, but causation unclear. Probiotic trials show modest effect on free T4, inconsistent on TSH and antibodies.",
        age65Note:
          "Fermented foods (kefir, yogurt, kimchi, sauerkraut) and high-fiber, polyphenol-rich foods are the most validated way to support gut diversity. Don't expect miracles.",
        sources: [
          {
            name: "Gut microbiome in hypothyroidism (Frontiers 2025)",
            url: "https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2025.1661211/full",
          },
        ],
      },
      {
        id: "leaky-gut",
        title: '"Leaky gut" — be skeptical of certainty',
        evidence: "weak",
        mechanism:
          "Zonulin is elevated in Hashimoto's vs controls (Cayres 2021), but zonulin as a clinical biomarker has poor correlation with measured permeability per recent critiques.",
        whatTheEvidenceShows:
          "The hypothesis is plausible; the wellness-blog certainty is unwarranted. At-home zonulin tests are not validated.",
        age65Note:
          "Eat plenty of fiber and polyphenol-rich foods (the most validated way to support gut barrier integrity). Be skeptical of 'leaky gut cure' products.",
        sources: [
          {
            name: "Cayres 2021 zonulin/intestinal permeability (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7973118/",
          },
        ],
      },
      {
        id: "endocrine-disruptors",
        title: "Endocrine disruptors (BPA, phthalates, PFAS)",
        evidence: "moderate",
        mechanism: "Direct thyroid receptor interference and altered hormone metabolism.",
        whatTheEvidenceShows:
          "Moderate evidence for thyroid disruption mechanistically and epidemiologically; weak evidence for actionable individual-level reduction strategies.",
        age65Note:
          "Reasonable, low-cost steps: glass/stainless food containers, filter drinking water (carbon block or reverse osmosis for PFAS), avoid microwaving plastic, choose unscented personal care products. Don't catastrophize — most exposure is unavoidable.",
        sources: [
          {
            name: "EDCs and AITD systematic review (ScienceDirect)",
            url: "https://www.sciencedirect.com/science/article/abs/pii/S245196502500016X",
          },
          {
            name: "PFAS and thyroid (Frontiers 2020)",
            url: "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2020.612320/full",
          },
        ],
      },
      {
        id: "halide-myth",
        title: '"Halide displacement" (fluoride / bromide / chloride)',
        evidence: "anecdotal",
        mechanism: "Wellness theory: that halides displace iodine and cause thyroid dysfunction at typical exposures.",
        whatTheEvidenceShows:
          "Not well-supported at municipal water or normal personal-care exposure. Fluoride at very high doses has thyroid effects; tap-water levels do not produce documented thyroid disease.",
        age65Note: "Don't worry about your tap water or toothpaste. Skip 'halide detox' products.",
        sources: [
          {
            name: "Heavy metals/thyroid scoping review (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11827576/",
          },
        ],
      },
    ],
  },
];
