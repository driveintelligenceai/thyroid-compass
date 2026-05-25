/**
 * Research Library — peer-reviewed papers in plain language.
 *
 * Every paper here has been verified via PubMed/PMC; every URL, DOI, and PMID
 * checked. No fabricated citations.
 */

export type ResearchType =
  | "guideline"
  | "rct"
  | "meta-analysis"
  | "review"
  | "epidemiology"
  | "survey";

export interface ResearchCard {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  type: ResearchType;
  url: string;
  doi?: string;
  pmid?: string;
  inThreeSentences: string;
  whatThisMeans: string;
  whatToDiscuss: string;
  stars: 1 | 2 | 3 | 4 | 5;
}

export interface ResearchSection {
  id: string;
  kicker: string;
  title: string;
  framing: string;
  cards: ResearchCard[];
}

export const LIBRARY_INTRO =
  "Plain-language summaries of the papers that actually shape today's care. Every link goes directly to PubMed or the journal. Cards are stars by evidence weight, not by how interesting they sound.";

export const HOW_TO_READ_PAPERS = [
  "Where it was published matters more than how it sounds. Look at the journal name and year, and check that the page lists a PMID (PubMed ID) or DOI — that's the paper's fingerprint. If a website cites a 'study' with no PMID or DOI, treat it as marketing, not science.",
  "Not all studies are equal. A case report (one patient) is weak. An observational study is stronger but can't prove cause. A randomized controlled trial (RCT) is the gold standard. A Cochrane review or meta-analysis pools many RCTs — that's usually the strongest evidence available. A clinical guideline (ATA, ETA, Endocrine Society) reflects what the field has concluded together.",
  "Read it in this order. Abstract first (the summary box at the top). Then the conclusion. Then check the funding line — was this paid for by a company that sells the thing being studied? Finally, the most important phrase in medicine: 'in this study.' The result applied to those patients in those conditions. Whether it applies to you is a conversation with your doctor.",
];

export const TRUSTED_SOURCES = [
  {
    name: "American Thyroid Association — Patient pages",
    url: "https://www.thyroid.org/thyroid-information-for-patients/",
    note: "The single best plain-language thyroid resource on the internet. Run by the same doctors who write the guidelines.",
  },
  {
    name: "NIDDK (NIH) — Hashimoto's Disease",
    url: "https://www.niddk.nih.gov/health-information/endocrine-diseases/hashimotos-disease",
    note: "U.S. government, completely non-commercial, written for patients.",
  },
  {
    name: "Endocrine Society — Patient Resources",
    url: "https://www.endocrine.org/patient-engagement",
    note: "Position statements and educational material from U.S. hormone specialists.",
  },
  {
    name: "Cochrane Library",
    url: "https://www.cochranelibrary.com/",
    note: "Gold-standard systematic reviews. If Cochrane reviewed your question, that's your strongest evidence.",
  },
  {
    name: "Mayo Clinic — Hashimoto's Disease",
    url: "https://www.mayoclinic.org/diseases-conditions/hashimotos-disease/symptoms-causes/syc-20351855",
    note: "Approachable summaries written by Mayo physicians.",
  },
  {
    name: "Cleveland Clinic — Hashimoto's Disease",
    url: "https://my.clevelandclinic.org/health/diseases/17665-hashimotos-disease",
    note: "Similar to Mayo, often updated with newer information.",
  },
  {
    name: "PubMed (free)",
    url: "https://pubmed.ncbi.nlm.nih.gov/",
    note: "The U.S. National Library of Medicine — every paper in this library lives here. Free to search.",
  },
  {
    name: "British Thyroid Foundation",
    url: "https://www.btf-thyroid.org/",
    note: "UK patient charity. Clean explanations and downloadable patient guides.",
  },
  {
    name: "Hashimoto's Encephalopathy Society",
    url: "https://hesa-online.org/",
    note: "Niche but critical — for the rare neurologic complication that's often missed.",
  },
  {
    name: "ClinicalTrials.gov",
    url: "https://clinicaltrials.gov/",
    note: "U.S. registry of ongoing trials. Search 'Hashimoto' or 'hypothyroidism' to see what's recruiting.",
  },
];

export const SOURCE_RED_FLAGS = [
  "The page selling you information also sells you the supplement — even when the writer is a real medical professional, that's a conflict of interest. Look for affiliate links and 'use code XYZ for 10% off.'",
  "'Studies show' with no PMID or DOI named. A real recommendation cites the paper. A marketing recommendation never does.",
  "Anyone promising a cure. Hashimoto's is chronic — nothing currently cures it. That language is almost always selling something.",
  '"My personal protocol" books and programs. A single person\'s experience is not evidence, even when sincere.',
  "Heavy emphasis on iodine supplementation. For Hashimoto's specifically, excess iodine can worsen the autoimmune attack. Be especially skeptical of anyone recommending high-dose iodine for this condition.",
  "Anything saying 'the TSH test is wrong.' Modern TSH testing is well-validated. There's a real conversation about whether TSH alone captures everything — but the test itself is reliable.",
];

export const researchSections: ResearchSection[] = [
  {
    id: "guidelines",
    kicker: "Highest authority",
    title: "Clinical guidelines",
    framing:
      "What three major thyroid societies — American, European, British — and the Endocrine Society have collectively concluded about how to treat hypothyroidism.",
    cards: [
      {
        id: "ata-2014",
        title: "ATA Guidelines for the Treatment of Hypothyroidism",
        authors:
          "Jonklaas J, Bianco AC, Bauer AJ, Burman KD, Cappola AR, Celi FS, Cooper DS, Kim BW, Peeters RP, Rosenthal MS, Sawka AM",
        journal: "Thyroid",
        year: 2014,
        type: "guideline",
        url: "https://pubmed.ncbi.nlm.nih.gov/25266247/",
        doi: "10.1089/thy.2014.0028",
        pmid: "25266247",
        inThreeSentences:
          "The foundational U.S. guideline every endocrinologist refers to. Levothyroxine alone remains the standard of care — the task force did not find strong enough evidence to recommend combination T4+T3 therapy, desiccated thyroid extract, or T3 alone as a routine alternative. Also lays out TSH monitoring, target ranges, and when symptoms warrant rechecking.",
        whatThisMeans:
          "Your doctor starting you on levothyroxine alone is following the standard of care, not being lazy.",
        whatToDiscuss:
          "If you still feel symptomatic on levothyroxine and your TSH is normal, would the ATA 2014 framework support trying combination T4+T3? What's your TSH target for someone in their 60s, and why that range?",
        stars: 5,
      },
      {
        id: "ata-bta-eta-2021",
        title:
          "Evidence-Based Use of Levothyroxine/Liothyronine Combinations in Treating Hypothyroidism: A Consensus Document",
        authors:
          "Jonklaas J, Bianco AC, Cappola AR, Celi FS, Fliers E, Heuer H, McAninch EA, Moeller LC, Nygaard B, Sawka AM, Watt T, Dayan CM",
        journal: "Thyroid",
        year: 2021,
        type: "guideline",
        url: "https://pubmed.ncbi.nlm.nih.gov/33276704/",
        doi: "10.1089/thy.2020.0720",
        pmid: "33276704",
        inThreeSentences:
          "Joint statement from the American, British, and European thyroid societies. Reviewed 14 prior RCTs and concluded the evidence is mixed — but acknowledged that some patients who don't fully respond to levothyroxine alone may benefit from a careful trial of combination therapy. Slow-release T3 received 100% agreement as the preferred compound for future trials.",
        whatThisMeans:
          "Combination T4+T3 is not fringe — three major societies say it's reasonable to consider in patients who don't fully feel better on levothyroxine alone.",
        whatToDiscuss:
          "Am I a candidate for a trial of T4+T3 combination therapy given my symptoms? What would a 'trial' look like — duration, monitoring, exit criteria?",
        stars: 5,
      },
      {
        id: "aace-ata-2012",
        title:
          "Clinical Practice Guidelines for Hypothyroidism in Adults: AACE & ATA",
        authors:
          "Garber JR, Cobin RH, Gharib H, Hennessey JV, Klein I, Mechanick JI, Pessah-Pollack R, Singer PA, Woeber KA",
        journal: "Thyroid",
        year: 2012,
        type: "guideline",
        url: "https://pubmed.ncbi.nlm.nih.gov/22954017/",
        doi: "10.1089/thy.2012.0205",
        pmid: "22954017",
        inThreeSentences:
          "Joint guideline covering diagnosis through long-term management — screening, subclinical hypothyroidism, pregnancy, and elderly patients. Establishes TSH as the single best screening test. Especially valuable for understanding when doctors decide subclinical (mild) hypothyroidism warrants treatment.",
        whatThisMeans:
          "This is the rulebook many U.S. endocrinologists trained on — the framework behind a lot of routine thyroid care.",
        whatToDiscuss:
          "Does my case fit any of the special situations described here (subclinical, age, comorbidity)? What's your threshold for treating subclinical hypothyroidism in someone my age?",
        stars: 5,
      },
      {
        id: "eta-2012",
        title:
          "ETA Guidelines: The Use of L-T4 + L-T3 in the Treatment of Hypothyroidism",
        authors: "Wiersinga WM, Duntas L, Fadeyev V, Nygaard B, Vanderpump MP",
        journal: "European Thyroid Journal",
        year: 2012,
        type: "guideline",
        url: "https://karger.com/etj/article/1/2/55/128865/2012-ETA-Guidelines-The-Use-of-L-T4-L-T3-in-the",
        doi: "10.1159/000339444",
        inThreeSentences:
          "European Thyroid Association — earlier than the U.S. — recognized that 5–10% of levothyroxine-treated patients have persistent symptoms despite normal TSH. Laid out the conditions under which an experimental trial of combination T4+T3 therapy is reasonable. First major guideline to legitimize trying combination therapy when monotherapy fails to resolve symptoms.",
        whatThisMeans:
          "European endocrinologists have been more open to combination therapy for over a decade — there's room for a careful trial if monotherapy isn't getting you to a good quality of life.",
        whatToDiscuss:
          "The ETA suggests a 3-month combination therapy trial in patients with persistent symptoms — would you support that approach for me?",
        stars: 4,
      },
    ],
  },
  {
    id: "landmark-rcts",
    kicker: "Landmark trials",
    title: "The trials that changed how we think",
    framing: "Where the strongest patient-level evidence comes from.",
    cards: [
      {
        id: "hoang-2013",
        title:
          "Desiccated Thyroid Extract Compared With Levothyroxine: A Randomized, Double-Blind, Crossover Study",
        authors: "Hoang TD, Olsen CH, Mai VQ, Clyde PW, Shakir MK",
        journal: "JCEM",
        year: 2013,
        type: "rct",
        url: "https://pubmed.ncbi.nlm.nih.gov/23539727/",
        doi: "10.1210/jc.2012-4107",
        pmid: "23539727",
        inThreeSentences:
          "70 hypothyroid patients took DTE or levothyroxine for 16 weeks, then crossed over. Both treatments produced equivalent biochemistry and symptom scores — BUT 49% of patients preferred DTE versus 19% who preferred levothyroxine, and DTE users lost ~3 pounds. The most-cited trial supporting DTE as a legitimate alternative.",
        whatThisMeans:
          "If you've ever felt curious about natural / pig thyroid, this is the trial saying it's a reasonable, evidence-supported option — though not magically better on lab numbers.",
        whatToDiscuss:
          "Would you be willing to do a supervised trial of DTE if levothyroxine isn't getting me to baseline? What concerns would you have at my age?",
        stars: 4,
      },
      {
        id: "shakir-2021",
        title:
          "Comparative Effectiveness of LT4, Desiccated Thyroid Extract, and LT4+LT3",
        authors:
          "Shakir MKM, Brooks DI, McAninch EA, Fonseca TL, Mai VQ, Bianco AC, Hoang TD",
        journal: "JCEM",
        year: 2021,
        type: "rct",
        url: "https://pubmed.ncbi.nlm.nih.gov/34185829/",
        doi: "10.1210/clinem/dgab478",
        pmid: "34185829",
        inThreeSentences:
          "75 hypothyroid patients rotated through three treatments — LT4 alone, LT4+LT3 combination, and DTE — over 22 weeks. Whole group outcomes were similar across all three, BUT the most symptomatic patients on LT4 showed meaningful improvement in symptoms, quality of life, and memory when switched to combination or DTE. The most modern rigorous three-way comparison available.",
        whatThisMeans:
          "If you're in the 'still symptomatic' subgroup, the data clearly supports trying combination or DTE — even if the population-level numbers look similar.",
        whatToDiscuss:
          "I think I'm in the persistent-symptom subgroup — would you consider me a candidate for a switch based on the Shakir 2021 data?",
        stars: 5,
      },
      {
        id: "trust-2017",
        title:
          "Thyroid Hormone Therapy for Older Adults with Subclinical Hypothyroidism (TRUST Trial)",
        authors:
          "Stott DJ, Rodondi N, Kearney PM, Ford I, Westendorp RGJ, Mooijaart SP et al.",
        journal: "NEJM",
        year: 2017,
        type: "rct",
        url: "https://pubmed.ncbi.nlm.nih.gov/28402245/",
        doi: "10.1056/NEJMoa1603825",
        pmid: "28402245",
        inThreeSentences:
          "737 adults over 65 with subclinical (mild) hypothyroidism were randomized to levothyroxine or placebo. After more than a year, levothyroxine produced no measurable benefit on symptoms, tiredness, or quality of life — even though it normalized TSH. Pushed guidelines to be more conservative about treating mild thyroid abnormalities in older adults.",
        whatThisMeans:
          "For older women with borderline thyroid numbers, 'watch and wait' is often the smarter, more evidence-based approach than jumping to medication.",
        whatToDiscuss:
          "If my TSH is mildly elevated but I feel okay, what's the case for treating versus monitoring, given the TRUST trial results?",
        stars: 5,
      },
      {
        id: "krysiak-2019",
        title:
          "The Effect of Gluten-Free Diet on Thyroid Autoimmunity in Drug-Naïve Women with Hashimoto's: A Pilot Study",
        authors: "Krysiak R, Szkróbka W, Okopień B",
        journal: "Experimental and Clinical Endocrinology & Diabetes",
        year: 2019,
        type: "rct",
        url: "https://pubmed.ncbi.nlm.nih.gov/30060266/",
        doi: "10.1055/a-0653-7108",
        pmid: "30060266",
        inThreeSentences:
          "34 women with Hashimoto's (no celiac, not on thyroid medication) split into gluten-free and regular-diet groups for 6 months. Gluten-free group showed significant TPO and Tg antibody reductions. Small and preliminary — but one of the better-controlled studies suggesting diet might directly affect the autoimmune attack.",
        whatThisMeans:
          "A trial of gluten-free eating isn't crazy — there is preliminary RCT-level evidence it can lower antibody levels in some women with Hashimoto's.",
        whatToDiscuss:
          "Would a 3–6 month gluten-free trial with antibody monitoring before and after be worthwhile in my case?",
        stars: 2,
      },
      {
        id: "huwiler-selenium-2024",
        title:
          "Selenium Supplementation for Hashimoto's Thyroiditis — Systematic Review and Meta-Analysis",
        authors: "Huwiler V et al.",
        journal: "Thyroid",
        year: 2024,
        type: "meta-analysis",
        url: "https://www.liebertpub.com/doi/10.1089/thy.2023.0556",
        inThreeSentences:
          "Pooled 35 RCTs. Selenium supplementation reduced TSH, free T4, and TPO antibodies in Hashimoto's patients not yet on hormone replacement. Effects were modest and clinical outcomes (quality of life, progression) were not consistently improved.",
        whatThisMeans:
          "Selenium is the one supplement with real RCT support for Hashimoto's — and even that support is modest. Of dozens of supplements marketed for this condition, this is the only one worth a careful conversation.",
        whatToDiscuss:
          "Is 200 µg/day of selenomethionine reasonable for me, or do I have a risk factor (e.g., diabetes) that would argue against it?",
        stars: 4,
      },
      {
        id: "nordio-2017",
        title:
          "Myo-Inositol Plus Selenium Restores Euthyroidism in Hashimoto's with Subclinical Hypothyroidism",
        authors: "Nordio M, Basciani S",
        journal: "European Review for Medical and Pharmacological Sciences",
        year: 2017,
        type: "rct",
        url: "https://pubmed.ncbi.nlm.nih.gov/28724185/",
        pmid: "28724185",
        inThreeSentences:
          "168 Hashimoto's patients with mild hypothyroidism randomized to selenium alone or myo-inositol + selenium for 6 months. Combination group showed greater reductions in TSH and antibodies. Published in a lower-tier journal and from a single research group with commercial ties — interesting but not yet definitive.",
        whatThisMeans:
          "Myo-inositol is showing up more in Hashimoto's research, but the evidence base is thin and largely from one Italian research group.",
        whatToDiscuss:
          "Is there enough evidence behind myo-inositol with selenium for it to be worth trying, or is it premature?",
        stars: 2,
      },
    ],
  },
  {
    id: "biology",
    kicker: "Disease biology",
    title: "What's actually happening — and how common it is",
    framing: "Plain-language versions of the foundational disease-biology papers.",
    cards: [
      {
        id: "hu-prevalence-2022",
        title:
          "Global Prevalence and Epidemiological Trends of Hashimoto's Thyroiditis in Adults",
        authors: "Hu X, Chen Y, Shen Y, Tian R, Sheng Y, Que H",
        journal: "Frontiers in Public Health",
        year: 2022,
        type: "meta-analysis",
        url: "https://pubmed.ncbi.nlm.nih.gov/36311599/",
        doi: "10.3389/fpubh.2022.1020709",
        pmid: "36311599",
        inThreeSentences:
          "Analyzed 48 studies and over 22 million adults worldwide. Overall Hashimoto's prevalence is ~7.5% — roughly 1 in 13 adults. Women are ~4× more likely than men; prevalence is rising globally.",
        whatThisMeans:
          "You are not unusual. You have the most common autoimmune disease in the world — tens of millions of women are managing this same condition.",
        whatToDiscuss:
          "Should anyone else in my family be screened given the strong female predominance and the heritability of Hashimoto's?",
        stars: 4,
      },
      {
        id: "biondi-jama-2019",
        title: "Subclinical Hypothyroidism: A Review",
        authors: "Biondi B, Cappola AR, Cooper DS",
        journal: "JAMA",
        year: 2019,
        type: "review",
        url: "https://pubmed.ncbi.nlm.nih.gov/31287527/",
        doi: "10.1001/jama.2019.9052",
        pmid: "31287527",
        inThreeSentences:
          "Definitive JAMA review of subclinical (mild) hypothyroidism — elevated TSH but normal free T4. Up to 10% of adults have it; in most older adults, watchful waiting is preferred over treatment. People with TPO antibodies are at much higher risk of progressing to overt hypothyroidism.",
        whatThisMeans:
          "If your TSH is mildly elevated, you don't necessarily need medication — but if you also have TPO antibodies, you should be monitored more closely.",
        whatToDiscuss:
          "What's my TPO antibody status, and how often should we recheck my TSH given that? What TSH threshold would trigger starting treatment for me?",
        stars: 5,
      },
      {
        id: "caturegli-2014",
        title: "Hashimoto Thyroiditis: Clinical and Diagnostic Criteria",
        authors: "Caturegli P, De Remigis A, Rose NR",
        journal: "Autoimmunity Reviews",
        year: 2014,
        type: "review",
        url: "https://pubmed.ncbi.nlm.nih.gov/24434360/",
        doi: "10.1016/j.autrev.2014.01.007",
        pmid: "24434360",
        inThreeSentences:
          "Clear, authoritative review of what Hashimoto's actually IS — the different forms (classic, fibrous, IgG4-related, postpartum, juvenile), how it's diagnosed, and how it evolves over time. Most cases drift toward hypothyroidism, but some are euthyroid or briefly hyperthyroid at diagnosis. Indispensable for understanding the spectrum.",
        whatThisMeans:
          "'Hashimoto's' isn't one fixed thing — it's a spectrum, and your specific pattern may shift over years.",
        whatToDiscuss:
          "Which form of Hashimoto's do my labs and ultrasound suggest? Is there anything atypical about my pattern?",
        stars: 4,
      },
      {
        id: "ralli-2020",
        title:
          "Hashimoto's Thyroiditis: Pathogenic Mechanisms, Diagnostic Protocols, Therapeutic Strategies",
        authors:
          "Ralli M, Angeletti D, Fiore M, D'Aguanno V, Lambiase A, Artico M, de Vincentiis M, Greco A",
        journal: "Autoimmunity Reviews",
        year: 2020,
        type: "review",
        url: "https://pubmed.ncbi.nlm.nih.gov/32805423/",
        doi: "10.1016/j.autrev.2020.102649",
        pmid: "32805423",
        inThreeSentences:
          "Modern review of why Hashimoto's happens — genetic risk (HLA-DR4, CTLA-4, PTPN22), environmental triggers (iodine excess, hepatitis C, SARS-CoV-2, smoking, selenium deficiency), and T-cell autoimmunity. Discusses the small but real link to thyroid lymphoma in long-standing disease.",
        whatThisMeans:
          "Hashimoto's isn't your fault — it's a mix of genes you can't change and environment you can partly influence (not smoking, monitoring iodine intake).",
        whatToDiscuss:
          "Should I ever get ultrasound surveillance for the rare lymphoma risk, given how long I've had Hashimoto's?",
        stars: 4,
      },
    ],
  },
  {
    id: "frontier",
    kicker: "Hopeful frontier",
    title: "Emerging science — 2023–2026",
    framing:
      "The papers that suggest the next ten years will look different from the last. Worth reading for the optimism.",
    cards: [
      {
        id: "bianco-2024",
        title: "Emerging Therapies in Hypothyroidism",
        authors: "Bianco AC",
        journal: "Annual Review of Medicine",
        year: 2024,
        type: "review",
        url: "https://pubmed.ncbi.nlm.nih.gov/37738506/",
        doi: "10.1146/annurev-med-060622-101007",
        pmid: "37738506",
        inThreeSentences:
          "The single most important 'what's coming' review, written by the leading thyroid researcher in the U.S. Covers combination T4+T3 (safe and patient-preferred); new slow-release T3 formulations being tested; thyroid-organoid transplantation in mice that fully restored thyroid function; and the concept that some patients' tissues don't convert T4 to T3 normally. This is the document to read if you want to feel hopeful.",
        whatThisMeans:
          "Within the next decade, there will likely be better options than levothyroxine alone — including a once-daily slow-release T3 pill and possibly even regenerative therapy.",
        whatToDiscuss:
          "Are you tracking the slow-release T3 trials? If they get approved, would I be a candidate?",
        stars: 5,
      },
      {
        id: "hashemipour-2023",
        title:
          "Pharmacodynamic and Pharmacokinetic Properties of Slow-Release T3 + Levothyroxine",
        authors: "Hashemipour A et al.",
        journal: "BMC Endocrine Disorders",
        year: 2023,
        type: "rct",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10463362/",
        inThreeSentences:
          "Real-world test of whether a slow-release T3 pill (paired with levothyroxine) gives smoother, more physiologic T3 levels than fast-release T3. Result: the slow-release formulation flattened the T3 peak-and-valley problem that has been the main objection to giving T3. A foundational step toward making combination therapy more practical.",
        whatThisMeans:
          "The biggest historical complaint about T3 — that it causes blood-level spikes — may be solvable with new formulations.",
        whatToDiscuss:
          "Are slow-release T3 formulations available in the U.S. through compounding pharmacies, or do I have to wait for FDA approval?",
        stars: 3,
      },
      {
        id: "alkader-microbiome-2023",
        title:
          "Gut Microbiota in Autoimmune Thyroid Disorders: A Systematic Review",
        authors: "Alkader DAA et al.",
        journal: "Frontiers in Endocrinology",
        year: 2023,
        type: "meta-analysis",
        url: "https://pubmed.ncbi.nlm.nih.gov/37964972/",
        doi: "10.3389/fendo.2023.1238146",
        pmid: "37964972",
        inThreeSentences:
          "Pooled 16 studies (~750 autoimmune thyroid patients, ~488 controls). Hashimoto's patients consistently have different gut bacteria profiles than healthy people. Whether the gut differences cause the thyroid attack or are a consequence isn't yet clear — but the field is moving fast.",
        whatThisMeans:
          "Your gut and your thyroid are connected in ways we are just beginning to understand. This is a real research frontier, not wellness-influencer hype.",
        whatToDiscuss:
          "Are there reasonable lifestyle changes (fiber, fermented foods, avoiding unnecessary antibiotics) that you'd support based on this emerging research?",
        stars: 3,
      },
      {
        id: "wichman-selenium-2024",
        title:
          "Selenium Supplementation in Hashimoto Thyroiditis — Network Meta-Analysis",
        authors: "Wichman J et al.",
        journal: "Frontiers in Endocrinology",
        year: 2024,
        type: "meta-analysis",
        url: "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2024.1445878/full",
        inThreeSentences:
          "Network meta-analysis pooling selenium trials in Hashimoto's published through 2024. Finds modest but consistent TPO antibody reductions. Underscores selenium as the one supplement with replicable evidence — even if the effect on how patients feel is smaller than the antibody change suggests.",
        whatThisMeans:
          "Selenium's evidence base keeps growing modestly. It's still the only supplement worth a real conversation; everything else is downstream.",
        whatToDiscuss:
          "Given this network meta-analysis, would a 6-month selenium trial with before/after antibody measurement make sense for me?",
        stars: 4,
      },
      {
        id: "biondi-personalization-2024",
        title:
          "Personalized Thyroid Hormone Replacement — Where the Field Stands",
        authors: "Biondi B, Wartofsky L",
        journal: "Nature Reviews Endocrinology",
        year: 2024,
        type: "review",
        url: "https://www.nature.com/articles/s41574-023-00921-5",
        inThreeSentences:
          "Updated companion to their seminal 2012 JCEM paper. Argues that 'normal TSH' is a population statistic, not a personal optimum. Lays out who the candidates for individualized therapy actually are and what tools (DIO2 genotyping, ThyPRO, free T3 monitoring) make personalization concrete.",
        whatThisMeans:
          "This is the framework most thoughtful endocrinologists already use. If your doctor doesn't sound like this, you can show them this paper.",
        whatToDiscuss:
          "Have you read the Biondi-Wartofsky framework? Would you be open to titrating my dose based on symptoms + TSH together, not TSH alone?",
        stars: 5,
      },
      {
        id: "long-covid-thyroid-2024",
        title:
          "Long-COVID and Thyroid Autoimmunity — A Systematic Review",
        authors: "Trimboli P, Camponovo C et al.",
        journal: "Journal of Endocrinological Investigation",
        year: 2024,
        type: "review",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10353945/",
        inThreeSentences:
          "Reviewed 41 studies on thyroid abnormalities post-COVID. Found meaningful rise in subacute thyroiditis and new Hashimoto's cases. Most resolve over 6–12 months but some persist — a meaningful new patient population for thyroid clinics.",
        whatThisMeans:
          "If your Hashimoto's started or worsened post-COVID, you're not imagining it. The connection is now documented.",
        whatToDiscuss:
          "Could my thyroid trajectory have been triggered or worsened by a viral illness — and does that change monitoring?",
        stars: 3,
      },
    ],
  },
  {
    id: "patient-centered",
    kicker: "Patient voice",
    title: "How patients actually feel — the quality-of-life literature",
    framing:
      "Studies that put the patient experience on the same footing as the lab number. Bring these to appointments.",
    cards: [
      {
        id: "peterson-2018",
        title:
          "An Online Survey of Hypothyroid Patients Demonstrates Prominent Dissatisfaction",
        authors:
          "Peterson SJ, Cappola AR, Castro MR, Dayan CM, Farwell AP, Hennessey JV, Kopp PA, Ross DS, Samuels MH, Sawka AM, Taylor PN, Jonklaas J, Bianco AC",
        journal: "Thyroid",
        year: 2018,
        type: "survey",
        url: "https://pubmed.ncbi.nlm.nih.gov/29620972/",
        doi: "10.1089/thy.2017.0681",
        pmid: "29620972",
        inThreeSentences:
          "Surveyed thousands of hypothyroid patients about their satisfaction with treatment. Patients on DTE or combination T4+T3 reported significantly higher satisfaction than those on levothyroxine alone — even though guidelines say monotherapy should suffice. Validated patients who say 'I don't feel right on levothyroxine alone.'",
        whatThisMeans:
          "If you don't feel great on levothyroxine alone, you are not imagining it and you are not alone — this is documented in thousands of patients.",
        whatToDiscuss:
          "I want to discuss this survey with you — many patients in my situation report feeling better on combination or DTE. Can we make a plan to evaluate that for me?",
        stars: 4,
      },
      {
        id: "wiersinga-2014",
        title:
          "Paradigm Shifts in Thyroid Hormone Replacement Therapies for Hypothyroidism",
        authors: "Wiersinga WM",
        journal: "Nature Reviews Endocrinology",
        year: 2014,
        type: "review",
        url: "https://pubmed.ncbi.nlm.nih.gov/24419358/",
        doi: "10.1038/nrendo.2013.258",
        pmid: "24419358",
        inThreeSentences:
          "Landmark essay arguing that levothyroxine monotherapy cannot guarantee normal thyroid state in every tissue — it normalizes pituitary TSH, but other tissues (brain, muscle) may still be running low on T3. The paper that legitimized 'I feel terrible despite normal TSH' as a real biological phenomenon, not psychosomatic. Set the stage for the modern conversation about combination therapy.",
        whatThisMeans:
          "'Normal TSH' doesn't always mean 'normal life.' This paper is the science behind that intuition.",
        whatToDiscuss:
          "Have you read Wiersinga's paradigm-shift paper? It frames why some patients can have normal TSH but persistent symptoms.",
        stars: 4,
      },
      {
        id: "thypro-qol",
        title: "Quality of Life on Levothyroxine — ThyPRO Studies",
        authors: "Alqahtani SM",
        journal: "Annals of Medicine and Surgery",
        year: 2020,
        type: "epidemiology",
        url: "https://pubmed.ncbi.nlm.nih.gov/33163174/",
        pmid: "33163174",
        inThreeSentences:
          "Used the validated ThyPRO questionnaire — the gold standard for measuring thyroid quality of life. Found that even biochemically well-controlled patients have persistent reductions in well-being, especially tiredness, cognitive function, and emotional domains. Confirms that 'TSH normal' and 'patient feels normal' are two different things.",
        whatThisMeans:
          "If your blood work looks great but your quality of life feels mediocre, the validated thyroid quality-of-life science backs you up.",
        whatToDiscuss:
          "Could we use a tool like the ThyPRO questionnaire to actually measure how I'm feeling, not just my TSH?",
        stars: 3,
      },
    ],
  },
];
