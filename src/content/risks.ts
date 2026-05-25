/**
 * "Risks & Reality" content — honest, calm, peer-reviewed.
 *
 * Curated from a deep-research pass (2026-05-25). Every claim is tied to a
 * peer-reviewed paper, official regulatory body, or major guideline.
 *
 * Tone goal: she finishes reading and feels "I understand the stakes, I have
 * agency, and I don't have to be afraid."
 */

export interface RiskItem {
  id: string;
  title: string;
  magnitude: string;
  whoMostAtRisk: string;
  whatYouCanDo: string;
  sources: { name: string; url: string }[];
}

export interface RiskSection {
  id: "untreated" | "holistic_only" | "over_medication" | "middle_ground";
  kicker: string;
  title: string;
  framing: string;
  items: RiskItem[];
}

export const RISK_INTRO =
  "You have agency. Hashimoto's is one of the most-studied, most-manageable autoimmune conditions in medicine. This isn't a push toward or away from any choice — it's the real numbers in front of you so that whatever you decide, you decide with open eyes.";

export const riskSections: RiskSection[] = [
  {
    id: "untreated",
    kicker: "Part A",
    title: "If hypothyroidism is left untreated or undertreated",
    framing:
      "Most of these risks unfold slowly over years — not in days. They are reasons to engage, not reasons to panic.",
    items: [
      {
        id: "cardiovascular",
        title: "Heart & cholesterol",
        magnitude:
          "Overt hypothyroidism roughly 2–3× the risk of atherosclerosis and coronary disease. Up to 90% of overt-hypothyroid patients have raised LDL cholesterol. Even subclinical hypothyroidism (TSH ≥ 7) was tied to higher heart-failure risk in the Cardiovascular Health Study.",
        whoMostAtRisk:
          "Women over 60 with existing high LDL, hypertension, or a family history of heart disease.",
        whatYouCanDo:
          "Check LDL alongside TSH at each follow-up. Bringing TSH back into range typically drops LDL 10–30% in 3–6 months — often without needing a statin.",
        sources: [
          {
            name: "Razvi S. et al., Hypothyroidism: the cardiometabolic risk concerto, 2025",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12090691/",
          },
          {
            name: "Aziz M. et al., meta-analysis of 27 case-control studies (Nature Sci Rep 2018)",
            url: "https://www.nature.com/articles/s41598-018-22897-3",
          },
          {
            name: "Rodondi N. et al., Cardiovascular Health Study, JAMA 2010",
            url: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/486813",
          },
        ],
      },
      {
        id: "myxedema",
        title: "Myxedema coma — rare, real, mostly older women",
        magnitude:
          "Long-untreated end-state: hypothermia, slowed breathing, confusion, coma. Mortality 30–60% even with ICU care. Incidence ~1 per million per year, but two-thirds of cases are women, 80% are ≥60, and the mean age in the largest series is 77. Almost always triggered by infection, cold, surgery, or sedatives in someone with no thyroid reserve.",
        whoMostAtRisk:
          "Older women with longstanding untreated or self-stopped hypothyroidism, especially in winter.",
        whatYouCanDo:
          "Know the warning signs (extreme cold intolerance, slowed thinking, puffy face, unusual sleepiness). Never abruptly stop thyroid medication without telling your doctor — especially before surgery or a winter trip.",
        sources: [
          {
            name: "Ono Y. et al., Japanese national inpatient database",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5350620/",
          },
          {
            name: "Wiersinga W., Myxedema coma — challenges and future directions",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12502585/",
          },
        ],
      },
      {
        id: "cognition",
        title: "Brain fog, mood, and dementia risk",
        magnitude:
          "Mixed — which is itself reassuring. The Rotterdam Study (9,446 adults, mean age 65) found higher-normal TSH was linked to lower dementia risk. The Framingham Study found a U-shape: women in both the lowest and highest TSH tertiles had ~2× the risk of Alzheimer's. A 2016 meta-analysis of 11 cohorts found subclinical hypothyroidism was not consistently linked to cognitive decline.",
        whoMostAtRisk:
          "People with overt, longstanding untreated hypothyroidism, and those whose TSH sits well below or well above normal.",
        whatYouCanDo:
          "If brain fog is a main symptom, track it on a 1–10 scale before and after any treatment change — your subjective experience is real data.",
        sources: [
          {
            name: "Chaker L. et al., Rotterdam Study (Neurology)",
            url: "https://www.neurology.org/doi/10.1212/WNL.0000000000003227",
          },
          {
            name: "Tan ZS et al., Framingham Study (JAMA Intern Med)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2694610/",
          },
          {
            name: "Rieben C. et al., cognition meta-analysis (JCEM 2016)",
            url: "https://academic.oup.com/jcem/article/101/12/4945/2765080",
          },
        ],
      },
      {
        id: "bones",
        title: "Bones — the counterintuitive truth",
        magnitude:
          "Severe untreated hypothyroidism actually slows bone turnover, so bone often looks denser on DEXA. The real bone-loss risk is from over-replacement, not under-replacement (see Part C).",
        whoMostAtRisk: "Almost no one in the untreated state.",
        whatYouCanDo:
          "Get a baseline DEXA in your 60s. Don't lose sleep that untreated Hashimoto's is silently weakening your bones — it isn't.",
        sources: [
          {
            name: "Williams GR & Bassett JHD, Thyroid diseases and bone health (J Endocrinol Invest)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5754375/",
          },
          {
            name: "Delitala A. et al., Thyroid Hormone Diseases and Osteoporosis",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7230461/",
          },
        ],
      },
      {
        id: "subclinical",
        title: "Subclinical hypothyroidism after 65 (TSH 4–10)",
        magnitude:
          "The TRUST randomized trial (737 adults ≥65, TSH 4.6–19.99) found no symptom or quality-of-life improvement from levothyroxine vs placebo after a year. A pooled analysis with the IEMO trial found no cardiovascular benefit either. With TSH > 10 the picture changes — treatment is widely recommended regardless of age.",
        whoMostAtRisk: "Only people with mildly elevated TSH between 4 and 10 with no clear symptoms.",
        whatYouCanDo:
          "If your TSH is 4–10 and you feel well, ask whether re-checking in 3–6 months is reasonable before starting medication.",
        sources: [
          {
            name: "Stott DJ et al., TRUST trial, NEJM 2017",
            url: "https://bmcendocrdisord.biomedcentral.com/articles/10.1186/s12902-017-0156-8",
          },
          {
            name: "Mooijaart SP et al., pooled trial analysis (Frontiers Endo)",
            url: "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2021.674841/full",
          },
          {
            name: "Cleveland Clinic Journal review",
            url: "https://www.ccjm.org/content/92/4/221",
          },
        ],
      },
      {
        id: "progression",
        title: "Hashimoto's progression even with normal TSH",
        magnitude:
          "TPO and Tg antibodies typically appear 3–7 years before TSH rises. With positive antibodies and a normal TSH, the annual risk of progressing to overt hypothyroidism is ~2–5% per year — so roughly 20–30% will be hypothyroid within five years. Ultrasound changes often precede biochemistry.",
        whoMostAtRisk:
          "High TPO titers, visible ultrasound changes, and TSH already in the upper half of normal (3–4).",
        whatYouCanDo:
          "Yearly TSH (or sooner if symptoms change) is enough monitoring. You are not in a race.",
        sources: [
          {
            name: "Caturegli P. et al., Hashimoto thyroiditis review (Medscape)",
            url: "https://emedicine.medscape.com/article/120937-workup",
          },
        ],
      },
      {
        id: "autoimmune-clustering",
        title: "Autoimmune disease clustering",
        magnitude:
          "15–30% of Hashimoto's patients eventually develop a second autoimmune condition — most often celiac, vitiligo, pernicious anemia, rheumatoid arthritis, or Sjögren's. Shared HLA haplotypes (DR3/DR4/DQ2) explain the clustering.",
        whoMostAtRisk: "Anyone with a strong family history of autoimmunity.",
        whatYouCanDo:
          "Learn the symptoms — bloating after gluten (celiac), tingling or unexplained anemia (B12/pernicious), morning joint stiffness (RA), dry eyes and mouth (Sjögren's) — and mention any of them at your next visit.",
        sources: [
          {
            name: "Fallahi P. et al., Hashimoto and autoimmune comorbidity (EDM 2024)",
            url: "https://onlinelibrary.wiley.com/doi/10.1002/edm2.70119",
          },
        ],
      },
      {
        id: "falls-cv-stack",
        title: "After 60 — falls and cardiovascular stacking",
        magnitude:
          "79% of hypothyroid patients have muscle complaints; 54% weakness, 42% cramps. Combined with age-related sarcopenia, this drives measurably higher fall risk. Postmenopausal estrogen loss is already accelerating cardiovascular risk; uncorrected hypothyroidism stacks on top.",
        whoMostAtRisk: "Women 60–80 living independently, especially with prior falls or balance issues.",
        whatYouCanDo:
          "Twice-weekly resistance training (bands or light weights) is one of the most evidence-backed interventions for fall risk at any thyroid level.",
        sources: [
          {
            name: "Sindoni A. et al., Hypothyroid Myopathy (StatPearls)",
            url: "https://www.ncbi.nlm.nih.gov/books/NBK519513/",
          },
          {
            name: "Levothyroxine therapy in elderly patients (Frontiers Endo)",
            url: "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2021.641560/full",
          },
        ],
      },
    ],
  },
  {
    id: "holistic_only",
    kicker: "Part B",
    title: "If you go holistic-only",
    framing:
      "Diet, supplements, and lifestyle are genuinely useful around treatment. The danger is when they're sold as a replacement for hormone the thyroid can no longer make.",
    items: [
      {
        id: "diet-cannot-regenerate",
        title: "Diet cannot regenerate thyroid tissue",
        magnitude:
          "Hashimoto's destroys thyroid follicular cells through immune-mediated apoptosis. Once enough tissue is gone to push TSH above normal, no diet, supplement, or herb has ever been shown in a randomized trial to restore that tissue. Diet can reduce inflammation and slow further damage — it cannot replace a hormone the gland no longer makes.",
        whoMostAtRisk: "Anyone whose TSH is clearly elevated and who is symptomatic.",
        whatYouCanDo:
          "Use diet as a complement to replacement, not a substitute for it. Talk to your doctor about a clear TSH threshold (e.g., > 10) and a symptom threshold at which you would start medication.",
        sources: [
          {
            name: "Ihnatowicz P. et al., Nutritional interventions in Hashimoto's (systematic review)",
            url: "https://www.researchgate.net/publication/389942567",
          },
          {
            name: "Gluten-free diet meta-analysis (Nutrients 2025)",
            url: "https://www.mdpi.com/2072-6643/17/21/3437",
          },
        ],
      },
      {
        id: "missed-dx",
        title: "Documented deterioration on natural-only regimens",
        magnitude:
          "Case series of myxedema coma consistently note that morbidity and mortality are driven by missed or delayed diagnosis — patients who stopped or never started replacement and presented late with hypothermia, bradycardia, or coma. Mortality 30–60%.",
        whoMostAtRisk: "Anyone who chooses natural-only without a safety net.",
        whatYouCanDo:
          "If you want to try lifestyle-first, set a clear safety net with your doctor: a TSH threshold and a symptom threshold at which you'll start medication.",
        sources: [
          {
            name: "Wiersinga W., Myxedema coma: challenges and future directions",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12502585/",
          },
        ],
      },
      {
        id: "wellness-cost",
        title: "The wellness-industry cost",
        magnitude:
          'Comprehensive "Hashimoto\'s protocols" often layer 10–20 supplements at $200–$500/month. Of these, only selenium has RCT-level evidence: a 2024 meta-analysis showed 200 µg/day for 3–6 months modestly reduces TPO antibody levels — but does not consistently change TSH, symptoms, or progression.',
        whoMostAtRisk: "Anyone spending heavily on supplement stacks without checking the evidence.",
        whatYouCanDo:
          "Of all the supplements marketed for Hashimoto's, selenium is the only one with real RCT support — and even that one is modest. Skip the rest.",
        sources: [
          {
            name: "Wichman J. et al., Selenium in Hashimoto's meta-analysis (2024)",
            url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10951571/",
          },
        ],
      },
      {
        id: "iodine-trap",
        title: "The iodine trap — counterintuitive and important",
        magnitude:
          'Many wellness protocols recommend high-dose iodine (kelp, "iodine loading," iodine drops). This is one of the most documented ways to make Hashimoto\'s worse. Excess iodine increases oxidative stress, makes thyroglobulin more immunogenic, raises TPO antibody production, and triggers pyroptosis (inflammatory cell death) of thyroid cells. Population studies after universal salt iodization consistently show Hashimoto\'s prevalence rises.',
        whoMostAtRisk: "Anyone supplementing iodine above the RDA.",
        whatYouCanDo:
          "Aim for the RDA (~150 µg/day) from a normal diet with iodized salt. Avoid kelp supplements, iodine-loading protocols, and any product over ~200 µg.",
        sources: [
          {
            name: "Luo Y. et al., Excessive iodine and pyroptosis (Frontiers Endo)",
            url: "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2019.00778/full",
          },
          {
            name: "Duntas LH, Iodine excess as environmental risk for autoimmune thyroid (Int J Mol Sci)",
            url: "https://www.mdpi.com/1422-0067/15/7/12895",
          },
        ],
      },
      {
        id: "compounded-dte",
        title: "Compounded desiccated thyroid extract — FDA warning",
        magnitude:
          "In August 2025 the FDA sent enforcement letters to manufacturers of desiccated thyroid extract (Armour, NP Thyroid, etc.), saying T4 and T3 content can vary significantly outside their labeled dose. The FDA reclassified DTE as biologics and made them ineligible for compounding.",
        whoMostAtRisk: "Anyone on compounded thyroid extracts of uncertain potency.",
        whatYouCanDo:
          "If you prefer a T4+T3 approach, talk to an endocrinologist about combining FDA-approved levothyroxine with FDA-approved liothyronine — predictable, dose-stable, and monitored.",
        sources: [
          {
            name: "FDA — Actions on unapproved thyroid medications",
            url: "https://www.fda.gov/drugs/enforcement-activities-fda/fdas-actions-address-unapproved-thyroid-medications",
          },
          {
            name: "American Thyroid Association — DTE statement",
            url: "https://www.thyroid.org/ata-statement-desiccated-thyroid-extract/",
          },
          {
            name: "Graves' Disease & Thyroid Foundation",
            url: "https://gdatf.org/u-s-food-and-drug-administration-threatens-enforcement-action-over-desiccated-thyroid-extract-dte-products/",
          },
        ],
      },
      {
        id: "adrenal-fatigue",
        title: '"Adrenal fatigue" is a pseudo-diagnosis',
        magnitude:
          'A 2016 systematic review of 58 studies in BMC Endocrine Disorders concluded definitively: "adrenal fatigue" does not exist as a medical entity. No endocrine society recognizes it. The risk is real — it diverts attention from actual conditions (hypothyroidism!), leads to expensive saliva-cortisol panels with no clinical validity, and some "adrenal support" products contain unlabeled steroid hormones.',
        whoMostAtRisk:
          'Anyone told they have "adrenal fatigue" without a proper morning cortisol or ACTH stimulation test.',
        whatYouCanDo:
          'If a practitioner tells you you have "adrenal fatigue," ask whether they\'ve checked for actual adrenal insufficiency (Addison\'s) with a morning cortisol — and check your TSH at the same time.',
        sources: [
          {
            name: "Cadegiani FA & Kater CE, Adrenal fatigue does not exist (BMC Endocr Disord 2016)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4997656/",
          },
        ],
      },
    ],
  },
  {
    id: "over_medication",
    kicker: "Part C",
    title: "If you're over-medicated (so this view is balanced)",
    framing:
      "The same hormone that fixes a deficit can cause harm in excess. A good doctor uses the smallest dose that brings you to upper-normal — not a suppressed TSH.",
    items: [
      {
        id: "afib",
        title: "Atrial fibrillation risk",
        magnitude:
          "Over-replacement that suppresses TSH below normal raises atrial fibrillation risk. In adults ≥65, those with the lowest-quartile TSH and highest-quartile free T4 had significantly elevated AF risk — even within the technically-normal range.",
        whoMostAtRisk: "Older women on doses that push TSH below ~1.0.",
        whatYouCanDo:
          "Ask that your TSH be kept in the upper-normal range (1.5–4.0) rather than the bottom, particularly after 65.",
        sources: [
          {
            name: "Levothyroxine therapy in elderly (Frontiers Endo)",
            url: "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2021.641560/full",
          },
        ],
      },
      {
        id: "bone-loss-over",
        title: "Bone loss with suppressed TSH",
        magnitude:
          "Long-term over-replacement in postmenopausal women causes measurable bone loss. A meta-analysis of 25 studies found bone mineral density dropped ~7% at the lumbar spine and ~9% at the femoral neck with long-term levothyroxine. Patients on TSH-suppressive doses had ~2× the osteoporotic fracture risk.",
        whoMostAtRisk: "Postmenopausal women on doses that suppress TSH and who are not on it for thyroid cancer.",
        whatYouCanDo:
          "A DEXA every 2–3 years on long-term levothyroxine is reasonable. If TSH is suppressed and you're not on it for cancer, ask whether the dose can come down.",
        sources: [
          {
            name: "Modeling levothyroxine effect on BMD in postmenopausal women",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1914344/",
          },
          {
            name: "Levothyroxine dose and fracture risk",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3930806/",
          },
        ],
      },
      {
        id: "dose-changes-with-age",
        title: "Dose needs change with age",
        magnitude:
          "Levothyroxine requirements typically decrease by 20–25% between 60 and 80 as lean body mass, hepatic clearance, and absorption shift. A dose that's right at 65 may be too much at 70.",
        whoMostAtRisk: "Anyone whose dose hasn't been re-checked in years.",
        whatYouCanDo:
          "Yearly TSH check, sooner if you've lost weight, changed diet (high fiber, calcium, iron), or feel jittery / heart-pounding.",
        sources: [
          {
            name: "Levothyroxine in elderly patients (PMC)",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8006441/",
          },
        ],
      },
    ],
  },
  {
    id: "middle_ground",
    kicker: "Part D",
    title: "The honest middle ground",
    framing:
      "The defensible position in the literature is neither pure-natural nor pill-and-forget — it's replacement for the deficit, lifestyle for everything around it, monitored personally.",
    items: [
      {
        id: "deficit-plus-lifestyle",
        title: "Replace the deficit. Support everything around it.",
        magnitude:
          "Even biochemically euthyroid Hashimoto's patients score lower on quality-of-life scales than controls. Adding structured exercise and an anti-inflammatory diet improves those scores beyond what medication alone achieves. The combined approach — smallest effective levothyroxine + selenium if antibodies are high + vitamin D repletion + resistance training + Mediterranean-style diet — has the best published outcomes.",
        whoMostAtRisk: "Anyone treating only one side of the equation.",
        whatYouCanDo:
          "Treat both sides. Hormone for what the gland can't make. Lifestyle for inflammation, energy, sleep, and resilience. They are not in competition.",
        sources: [
          {
            name: "Quality of life in euthyroid Hashimoto's on long-term levothyroxine",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11173285/",
          },
          {
            name: "Lower FT3 levels and impaired quality of life",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8926544/",
          },
        ],
      },
      {
        id: "biondi-wartofsky",
        title: "Personalized — not population-average — replacement",
        magnitude:
          'Biondi & Wartofsky\'s 2012 JCEM paper set the modern framework: "Normal TSH" is a population statistic, not your personal optimum. Your set-point might be 1.2 or 2.8. About 10–15% of patients feel meaningfully better on combined T4+T3 therapy. Replacement should be titrated to symptoms + biochemistry, not biochemistry alone.',
        whoMostAtRisk: "Patients treated by-the-numbers without anyone asking how they feel.",
        whatYouCanDo:
          "Look for an endocrinologist who discusses symptoms alongside labs, who treats you as the expert on how you feel, and who will adjust based on both.",
        sources: [
          {
            name: "Biondi B & Wartofsky L, Combination T4+T3 — toward personalized replacement (JCEM 2012)",
            url: "https://academic.oup.com/jcem/article/97/7/2256/2833962",
          },
        ],
      },
    ],
  },
];

export const RISK_BOTTOM_LINE = [
  "You have Hashimoto's. That's a chronic, manageable autoimmune condition — not an emergency and not a death sentence.",
  "Ignoring it has real but slow risks, most of them reversible if caught.",
  "Holistic-only mostly fails by substituting unproven supplements for a proven, cheap, effective hormone — plus the specific danger of high-dose iodine making the disease worse.",
  "Over-medication has real risks too, especially for your bones and heart rhythm — that's why a thoughtful doctor under-doses you and titrates up.",
  "The honest middle: smallest effective replacement, plus the lifestyle pieces (selenium if antibodies are high, resistance training, anti-inflammatory diet, vitamin D, sleep) that genuinely change how you feel.",
  "You don't have to be afraid. You have time. You have options.",
];
