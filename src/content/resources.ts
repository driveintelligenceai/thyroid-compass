/**
 * Resources tab — the "calm reference" content.
 *
 * Five compact modules she can flip through when she needs a definition,
 * a question to walk in with, an honest answer to a common worry, or a
 * picture of where the field is headed.
 *
 * All content is educational. No doses. No "take this drug." All terms
 * sourced to NIH, ATA, Endocrine Society, Mayo, NIDDK, or peer-reviewed
 * reviews.
 */

// ─── GLOSSARY ───────────────────────────────────────────────────────

export interface GlossaryTerm {
  id: string;
  term: string;
  short: string;
  longer?: string;
  source?: { name: string; url: string };
}

export const glossary: GlossaryTerm[] = [
  {
    id: "tsh",
    term: "TSH (Thyroid-Stimulating Hormone)",
    short:
      "A signal from your pituitary gland that tells the thyroid to make more hormone. When TSH is high, your pituitary is shouting because thyroid output is low. The most-used screening test.",
    longer:
      "TSH operates on a feedback loop: low thyroid hormone → high TSH; replacement that brings thyroid hormone back to normal → TSH falls. Reference range varies by lab (commonly 0.4–4.5) and your personal target may differ from the population's.",
    source: {
      name: "ATA — Thyroid Function Tests",
      url: "https://www.thyroid.org/thyroid-function-tests/",
    },
  },
  {
    id: "t4",
    term: "T4 (Thyroxine)",
    short:
      "The main hormone your thyroid produces. It's a prohormone — your body converts it into the active hormone, T3, as needed.",
    longer:
      "Levothyroxine (Synthroid, Tirosint, etc.) is a synthetic copy of T4. About 80% of your circulating thyroid hormone is T4; it acts like a slow-release reservoir.",
  },
  {
    id: "t3",
    term: "T3 (Triiodothyronine)",
    short:
      "The active form of thyroid hormone. Most of it comes from T4 being converted by deiodinase enzymes in your tissues. Liothyronine (Cytomel) is synthetic T3.",
  },
  {
    id: "free-t4",
    term: "Free T4 / Free T3",
    short:
      "The fraction of T4 or T3 that's not bound to protein — the part that's actually available to do work. These are the more clinically meaningful versions of the basic hormone tests.",
  },
  {
    id: "tpo-ab",
    term: "TPO antibodies (anti-TPO)",
    short:
      "Antibodies against thyroid peroxidase, the enzyme that builds thyroid hormone. The single best marker for Hashimoto's. Positive TPO often appears years before TSH rises.",
    source: {
      name: "ATA Patient — Thyroid Antibodies",
      url: "https://www.thyroid.org/thyroid-information-for-patients/",
    },
  },
  {
    id: "tg-ab",
    term: "Tg antibodies (anti-thyroglobulin)",
    short:
      "Antibodies against thyroglobulin, the protein your thyroid uses to make hormone. Less specific than TPO but often measured alongside it.",
  },
  {
    id: "deiodinase",
    term: "Deiodinase (D1, D2, D3)",
    short:
      "The enzymes that convert T4 into T3 (or inactivate T3 into reverse-T3). Found in liver, brain, muscle, and many other tissues. A common cause of 'normal TSH but feel terrible' is reduced D2 activity in specific tissues.",
  },
  {
    id: "dio2-thr92ala",
    term: "DIO2 Thr92Ala",
    short:
      "A common genetic variant (~12–36% prevalence) that reduces D2 enzyme activity. People with two copies may convert T4 to T3 less efficiently and might feel better on combination T4+T3. Not yet standard testing.",
    source: {
      name: "Jonklaas et al. JCEM 2017 (PubMed)",
      url: "https://academic.oup.com/jcem/article/102/5/1623/2966904",
    },
  },
  {
    id: "euthyroid",
    term: "Euthyroid",
    short:
      "Having normal thyroid function. You can be euthyroid on medication. You can also have antibodies while still euthyroid.",
  },
  {
    id: "subclinical",
    term: "Subclinical hypothyroidism",
    short:
      "TSH is mildly elevated but free T4 is still in range. Cooper and Biondi's JAMA review (2019) and the TRUST trial (2017) shaped current practice: in older adults with TSH 4–10, watchful waiting is often preferred over starting medication.",
    source: {
      name: "TRUST Trial (NEJM)",
      url: "https://pubmed.ncbi.nlm.nih.gov/28402245/",
    },
  },
  {
    id: "overt-hypo",
    term: "Overt hypothyroidism",
    short:
      "TSH is elevated AND free T4 is low. Treatment is widely recommended at any age.",
  },
  {
    id: "myxedema",
    term: "Myxedema (and myxedema coma)",
    short:
      "Myxedema is the puffy-skin, cold-intolerant, slowed state of severe long-untreated hypothyroidism. Myxedema coma is the rare worst-case — confusion progressing to coma, mortality 30–60%, mostly older women in winter. Almost always triggered by infection, surgery, or sedatives.",
  },
  {
    id: "ndt-dte",
    term: "NDT / DTE",
    short:
      "Natural Desiccated Thyroid (Armour, NP Thyroid, Adthyza) — also called Desiccated Thyroid Extract. Dried pig thyroid containing T4 + T3 in a fixed ~4:1 ratio.",
  },
  {
    id: "hashimoto-encephalopathy",
    term: "Hashimoto's encephalopathy (SREAT)",
    short:
      "Steroid-responsive encephalopathy associated with autoimmune thyroiditis. Rare neurologic syndrome — confusion, seizures, stroke-like episodes — that responds to corticosteroids. Often missed because TSH may be normal.",
  },
  {
    id: "thypro",
    term: "ThyPRO",
    short:
      "Thyroid-related Patient-Reported Outcome questionnaire. The validated survey that measures how you actually feel — energy, mood, cognition — independent of TSH.",
  },
  {
    id: "free-set-point",
    term: "Personal set-point",
    short:
      "Your individual 'happy place' for TSH and free T4. May be 1.2 for one person and 2.8 for another, both within the lab's 'normal' range. Biondi & Wartofsky's central argument: dose to YOUR set-point, not the lab's midpoint.",
  },
  {
    id: "thyroidectomy",
    term: "Thyroidectomy",
    short:
      "Surgical removal of part or all of the thyroid. People who've had a thyroidectomy depend entirely on replacement hormone and may need higher doses.",
  },
  {
    id: "ablation",
    term: "Radioiodine ablation",
    short:
      "Treatment that destroys thyroid tissue using radioactive iodine, used for hyperthyroid disease or thyroid cancer. Most people end up hypothyroid afterward.",
  },
];

// ─── FAQ ────────────────────────────────────────────────────────────

export interface FaqItem {
  id: string;
  question: string;
  short: string;
  longer: string;
}

export const faqs: FaqItem[] = [
  {
    id: "diagnosis-now",
    question: "I just got diagnosed. What should I do first?",
    short:
      "Breathe. Hashimoto's is chronic, not urgent — you have weeks to make decisions, not minutes.",
    longer:
      "The first few weeks are about understanding what you have, not changing everything. Confirm your TSH, free T4, and TPO antibody numbers. If you're starting on medication, give it 6–8 weeks before judging how it makes you feel — that's how long it takes hormone levels to stabilize. Read this dashboard, write down questions, and bring those questions to your next appointment.",
  },
  {
    id: "feel-bad-normal-labs",
    question: "Why do I feel terrible when my labs are normal?",
    short:
      "It's a real, documented phenomenon. Roughly 10–15% of patients feel symptomatic on levothyroxine alone with normal TSH — and the science backs you up.",
    longer:
      "Wiersinga's 2014 paradigm-shift paper in Nature Reviews Endocrinology argues that levothyroxine monotherapy normalizes pituitary TSH but may leave brain, muscle, and other tissues running low on T3. The Peterson 2018 survey of thousands of patients showed similar dissatisfaction. Options to discuss: trying a different formulation (Tirosint), evening dosing, combination T4+T3, or NDT — all individually, with monitoring.",
  },
  {
    id: "diet-cure",
    question: "Can diet cure my Hashimoto's?",
    short:
      "No. But it can meaningfully reduce inflammation, improve symptoms, and lower antibody levels in some people.",
    longer:
      "Hashimoto's destroys thyroid tissue through an immune process — once it's gone, diet can't regrow it. What diet CAN do is reduce systemic inflammation (Mediterranean pattern, strong evidence), possibly lower TPO antibodies (gluten-free trial in some women, moderate evidence), and improve daily energy and quality of life. Treat lifestyle as a complement, not a replacement.",
  },
  {
    id: "iodine",
    question: "Should I take iodine?",
    short:
      "No — high-dose iodine can WORSEN Hashimoto's. This is one of the most counterintuitive and most-important points.",
    longer:
      "Excess iodine increases reactive oxygen species in thyroid cells, makes thyroglobulin more immunogenic, and stimulates TPO antibody production. Population studies after universal salt iodization consistently show Hashimoto's prevalence rises. Aim for the RDA (~150 µg/day) from normal diet with iodized salt. Avoid kelp, iodine drops, and 'thyroid support' formulas with >150 µg.",
  },
  {
    id: "supplements-worth",
    question: "Which supplements are actually worth taking?",
    short:
      "Selenium and vitamin D have real RCT evidence. Possibly myo-inositol + selenium. Mostly the rest is marketing.",
    longer:
      "Selenium (100–200 µg/day) — 2024 meta-analysis of 35 RCTs shows modest TPO antibody reduction. Vitamin D — modest antibody benefit if you start deficient, plus the bone/falls benefits that matter at your age. Myo-inositol + selenium — promising for subclinical disease. Most other supplements marketed for Hashimoto's (tyrosine, ashwagandha protocols, complex 'thyroid stacks') have weak or no evidence.",
  },
  {
    id: "doctor-disagreement",
    question: "What if I disagree with my doctor about treatment?",
    short:
      "Bring evidence, not feelings. Print papers, bring questions, ask specifically about a trial.",
    longer:
      "Most endocrinologists will work with you if you come prepared. Use the Research Library tab to find the specific paper that supports your question (e.g., Hoang 2013 for NDT, Wiersinga 2014 for combination, Shakir 2021 for symptomatic subgroup). Ask for a 'time-limited trial' with clear outcomes: 'Could we try X for 12 weeks, then re-check labs and symptoms together?'",
  },
  {
    id: "family",
    question: "Will my daughter or granddaughter get this?",
    short:
      "Risk is higher because Hashimoto's is highly heritable, but not certain — and the diagnosis is well-managed if caught early.",
    longer:
      "First-degree relatives of Hashimoto's patients have roughly 5–10× the population risk. Encourage TSH and TPO antibody checks in any female relative who develops fatigue, weight changes, or fertility issues. If a daughter is planning pregnancy, a pre-pregnancy TSH check is one of the most consequential things she can do — undiagnosed hypothyroidism in early pregnancy is linked to miscarriage and developmental issues.",
  },
  {
    id: "anxious",
    question: "I'm anxious about all this. What helps?",
    short:
      "Knowing the facts is the first step. The second is realizing that even untreated, this disease unfolds over years — not days.",
    longer:
      "The risks of untreated Hashimoto's are real but slow. Most are reversible if caught. The risks of over-medication are also real and respected by good doctors — which is why the right approach is the smallest dose that brings you to upper-normal, not a suppressed TSH. You have time. You have options. Anxiety about this is normal; it's also worth treating directly (your daily-care tab has the evidence for movement, sleep, and stress-down practices).",
  },
];

// ─── FUTURE HOPE ────────────────────────────────────────────────────

export const futureHopeIntro =
  "The next 5–10 years of thyroid medicine should look different from the last. Here's what's coming — sourced and specific, not aspirational fluff.";

export interface FutureHopeItem {
  id: string;
  title: string;
  timeline: string;
  whatChanges: string;
  source: { name: string; url: string };
}

export const futureHope: FutureHopeItem[] = [
  {
    id: "fh-srt3",
    title: "Slow-release T3",
    timeline: "Possibly available 2027–2030",
    whatChanges:
      "Flattens the peak-and-valley problem that has been the main objection to giving T3. The 2021 ATA/BTA/ETA joint consensus picked this as the preferred experimental compound — 100% agreement. A 2025 trial protocol (100 patients, 48 weeks) is already recruiting.",
    source: {
      name: "Slow-release T3 study protocol (Trials/Springer)",
      url: "https://link.springer.com/article/10.1186/s13063-025-08940-5",
    },
  },
  {
    id: "fh-ai-dosing",
    title: "AI-guided dosing",
    timeline: "Decision-support tools likely in clinics 2026–2029",
    whatChanges:
      "Models trained on age, weight, comorbidities, and lab trends are reaching 83–87% accuracy in matching the right starting dose. Will help most in older patients, where conventional weight-based formulas miss most often. Simulation studies already show reduced over-dosing rates.",
    source: {
      name: "Spaggiari 2024 MIPD simulation (PubMed)",
      url: "https://pubmed.ncbi.nlm.nih.gov/38711388/",
    },
  },
  {
    id: "fh-personalization",
    title: "Genotype-guided personalization (DIO2 Thr92Ala)",
    timeline: "Entering prospective trials now; routine 2030+",
    whatChanges:
      "Testing for the DIO2 polymorphism may eventually identify which 12–36% of patients benefit most from combination T4+T3 therapy. Today it's research-grade; tomorrow it could be a single cheek-swab test that personalizes your regimen.",
    source: {
      name: "Jonklaas et al. DIO2 polymorphism (JCEM)",
      url: "https://academic.oup.com/jcem/article/102/5/1623/2966904",
    },
  },
  {
    id: "fh-microbiome",
    title: "Microbiome-modulating therapies",
    timeline: "Targeted probiotics within 5 years; broader interventions later",
    whatChanges:
      "Hashimoto's patients consistently have a different gut bacteria profile than healthy controls. The 2023 systematic review confirms the pattern; what comes next is whether modifying the microbiome modifies the disease. Specific strains are already in trials.",
    source: {
      name: "Alkader 2023 gut microbiome systematic review",
      url: "https://pubmed.ncbi.nlm.nih.gov/37964972/",
    },
  },
  {
    id: "fh-car-t",
    title: "CAR-T and antigen-specific tolerance induction",
    timeline: "Phase II/III autoimmunity trials now; Hashimoto's-specific late decade",
    whatChanges:
      "After remarkable lupus results, engineered T-cells are moving across autoimmune disease one indication at a time. 119 CAR-T autoimmunity trials are registered. Hashimoto's-specific protocols don't exist yet — but they're plausibly the next-next indication.",
    source: {
      name: "CAR-T autoimmunity 2025 review (Frontiers Immunology)",
      url: "https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2025.1630569/full",
    },
  },
  {
    id: "fh-organoids",
    title: "Thyroid-organoid transplantation",
    timeline: "Mouse-to-human gap remains; clinical reality unlikely before 2035",
    whatChanges:
      "Functional thyroid follicular cells have been grown from skin cells in mouse models and have restored thyroid function. The work is real; the path to humans is long.",
    source: {
      name: "Bianco 2024 Emerging Therapies (Annual Review of Medicine)",
      url: "https://pubmed.ncbi.nlm.nih.gov/37738506/",
    },
  },
  {
    id: "fh-now",
    title: "Personalization is already happening — quietly",
    timeline: "Today, in many endocrinology clinics",
    whatChanges:
      "The Biondi-Wartofsky framework — dose to symptoms + biochemistry, not biochemistry alone — is how most thoughtful endocrinologists already practice. The 'future' here is just convincing more practices to do it openly. You don't need to wait.",
    source: {
      name: "Biondi & Wartofsky JCEM 2012 (foundational paper)",
      url: "https://academic.oup.com/jcem/article/97/7/2256/2833962",
    },
  },
];

// ─── WALK-IN CHECKLIST ──────────────────────────────────────────────

export interface WalkInTopic {
  id: string;
  topic: string;
  questions: string[];
}

export const walkInChecklist: WalkInTopic[] = [
  {
    id: "first-visit",
    topic: "If this is your first thyroid visit",
    questions: [
      "What were my exact numbers — TSH, free T4, free T3, TPO antibodies, Tg antibodies?",
      "Which of those numbers will we track over time?",
      "How often should I get labs repeated?",
      "What symptoms should make me call you in between visits?",
    ],
  },
  {
    id: "starting-medication",
    topic: "If you're starting medication",
    questions: [
      "Why this medication and not another option?",
      "What's the smallest effective starting dose at my age?",
      "How will we know if it's working — biochemistry, symptoms, or both?",
      "When should we re-check labs after starting (4 weeks? 6 weeks? 8 weeks?)",
      "Which foods, drinks, supplements, or other meds interfere with this pill?",
    ],
  },
  {
    id: "still-symptomatic",
    topic: "If you're still symptomatic on T4 alone",
    questions: [
      "Could a trial of combination T4 + T3 therapy be reasonable for me?",
      "Have you read the 2021 ATA/BTA/ETA joint consensus or Shakir 2021?",
      "Could we try a different formulation (Tirosint, evening dosing) first?",
      "Could my TSH target be too low (or too high) for my personal set point?",
      "Would a ThyPRO questionnaire help us track how I actually feel?",
    ],
  },
  {
    id: "tsh-borderline",
    topic: "If your TSH is borderline (4–10) and you feel mostly okay",
    questions: [
      "Are you familiar with the TRUST trial? Does the evidence support watchful waiting in my case?",
      "What threshold would change your mind?",
      "How often would we re-check?",
      "Should I have a thyroid ultrasound at baseline?",
    ],
  },
  {
    id: "older-adult",
    topic: "Specifically for me, after 65",
    questions: [
      "What TSH target do you aim for in patients my age?",
      "When should we get a DEXA scan to track bone density?",
      "Should we check for atrial fibrillation periodically?",
      "Does my dose typically need to come down as I get older?",
    ],
  },
  {
    id: "lifestyle",
    topic: "If you want to talk about lifestyle and supplements",
    questions: [
      "Should I get my 25(OH)D vitamin D level checked?",
      "Should I get a baseline selenium status?",
      "Is a 3-month selenium trial reasonable for me (with antibody re-check)?",
      "Any reason to consider a gluten-free trial in my case?",
      "Anything in my current supplement list that's working against my levothyroxine?",
    ],
  },
];

// ─── DECODE YOUR LABS ───────────────────────────────────────────────

export interface LabRow {
  id: string;
  test: string;
  whatItMeasures: string;
  typicalRange: string;
  whatItMeansForYou: string;
}

export const decodeYourLabs: LabRow[] = [
  {
    id: "lab-tsh",
    test: "TSH",
    whatItMeasures: "How loudly your pituitary is telling your thyroid to work harder.",
    typicalRange: "0.4–4.5 mIU/L (varies by lab; ATA suggests upper-normal targets ~1.5–4.0 after 65)",
    whatItMeansForYou:
      "High = thyroid not making enough hormone. Low = either too much hormone (or too much replacement). Your personal set-point may be different from the lab midpoint.",
  },
  {
    id: "lab-free-t4",
    test: "Free T4",
    whatItMeasures: "The unbound, active T4 in your blood — what's actually available.",
    typicalRange: "0.8–1.8 ng/dL (lab-dependent)",
    whatItMeansForYou:
      "Together with TSH, this is the key pair. A high TSH plus a low free T4 = overt hypothyroidism. A high TSH plus a normal free T4 = subclinical.",
  },
  {
    id: "lab-free-t3",
    test: "Free T3",
    whatItMeasures: "The unbound active hormone — the thing your tissues actually use.",
    typicalRange: "2.3–4.2 pg/mL (lab-dependent)",
    whatItMeansForYou:
      "Not part of routine screening, but often informative if you feel symptomatic with normal TSH. Lower-end free T3 has been linked to lower quality of life.",
  },
  {
    id: "lab-tpo-ab",
    test: "TPO antibodies",
    whatItMeasures: "The single best marker for autoimmune (Hashimoto's) thyroid disease.",
    typicalRange: "Negative is typically <35 IU/mL (lab-dependent); positive titers can range into the thousands",
    whatItMeansForYou:
      "Positive = autoimmune attack confirmed. Higher titers don't necessarily mean worse disease — but they do mean higher risk of progression over time.",
  },
  {
    id: "lab-tg-ab",
    test: "Tg antibodies",
    whatItMeasures: "Antibodies against thyroglobulin, the protein your thyroid uses.",
    typicalRange: "Negative is typically <40 IU/mL (lab-dependent)",
    whatItMeansForYou:
      "Less specific than TPO. Often measured alongside TPO. Some people are TPO-negative but Tg-positive.",
  },
  {
    id: "lab-reverse-t3",
    test: "Reverse T3 (rT3)",
    whatItMeasures: "An inactive form of T3 your body makes when it's stressed, ill, or starved.",
    typicalRange: "9–24 ng/dL (lab-dependent)",
    whatItMeansForYou:
      "Not part of standard panels. Some integrative doctors order it; the evidence base for clinical decisions is thin. Useful mostly in research contexts.",
  },
  {
    id: "lab-vitamin-d",
    test: "25(OH)D (Vitamin D)",
    whatItMeasures: "Your body's vitamin D store.",
    typicalRange: "30–60 ng/mL (target); deficient <20",
    whatItMeansForYou:
      "Deficiency is common in Hashimoto's. Correcting it modestly lowers TPO antibodies and substantially helps bone density — a double-benefit at your age.",
  },
  {
    id: "lab-ferritin",
    test: "Ferritin",
    whatItMeasures: "Your iron stores.",
    typicalRange: "Postmenopausal women: 30–200 ng/mL typical; some functional medicine targets 70–100",
    whatItMeansForYou:
      "Low ferritin slows T4→T3 conversion. Iron supplements also block levothyroxine absorption — separate by 4 hours.",
  },
];

// ─── DRUG / FOOD INTERACTIONS ───────────────────────────────────────

export interface Interaction {
  id: string;
  what: string;
  effect: string;
  whatToDo: string;
}

export const interactions: Interaction[] = [
  {
    id: "calcium",
    what: "Calcium supplements (or calcium-fortified juice)",
    effect: "Significantly reduces levothyroxine absorption.",
    whatToDo: "Separate by at least 4 hours.",
  },
  {
    id: "iron",
    what: "Iron supplements / multivitamins with iron",
    effect: "Significantly reduces levothyroxine absorption.",
    whatToDo: "Separate by at least 4 hours.",
  },
  {
    id: "coffee",
    what: "Coffee, tea, espresso",
    effect: "Reduces levothyroxine absorption by ~30%.",
    whatToDo: "Wait 30–60 minutes after the pill before drinking.",
  },
  {
    id: "high-fiber",
    what: "High-fiber food (oatmeal, bran, fiber supplements)",
    effect: "Reduces absorption by binding the pill.",
    whatToDo: "Take pill on empty stomach; eat fibrous breakfast 30–60 min later.",
  },
  {
    id: "soy",
    what: "Soy products (tofu, soy milk, edamame, soy protein)",
    effect: "Isoflavones bind levothyroxine in the gut.",
    whatToDo: "Separate by 4 hours.",
  },
  {
    id: "ppi",
    what: "PPIs (omeprazole, esomeprazole, pantoprazole)",
    effect: "Raise stomach pH and reduce pill dissolution.",
    whatToDo:
      "Discuss with your doctor — Tirosint (gel cap) or Tirosint-SOL (liquid) is often better with PPIs.",
  },
  {
    id: "antacids",
    what: "Antacids (Tums, Maalox)",
    effect: "Aluminum / magnesium binds levothyroxine.",
    whatToDo: "Separate by 4 hours.",
  },
  {
    id: "statins-cholestyramine",
    what: "Bile acid sequestrants (cholestyramine, colesevelam)",
    effect: "Strongly bind levothyroxine in the gut.",
    whatToDo: "Separate by 4–6 hours; tell your doctor about overlap.",
  },
  {
    id: "biotin",
    what: "Biotin (high-dose hair-skin-nail supplements)",
    effect: "Doesn't change thyroid hormone — but interferes with the LAB TEST, producing falsely low TSH.",
    whatToDo: "Stop biotin 72 hours before your blood draw.",
  },
  {
    id: "ashwagandha",
    what: "Ashwagandha and other 'thyroid-supportive' adaptogens",
    effect: "Can raise T4/T3 levels, potentially pushing you toward over-replacement.",
    whatToDo: "Discuss with your doctor before adding; you may need a dose adjustment.",
  },
  {
    id: "estrogen",
    what: "Oral estrogen / HRT",
    effect: "Raises thyroid-binding globulin and may increase your levothyroxine requirement.",
    whatToDo: "Recheck TSH 6–8 weeks after starting or changing HRT.",
  },
  {
    id: "metformin",
    what: "Metformin",
    effect: "May modestly lower TSH; rarely clinically meaningful but can shift labs.",
    whatToDo: "Inform your endocrinologist about any change.",
  },
];
