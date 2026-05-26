# Changelog

All notable changes to Thyroid Compass.

## [1.0.0] — 2026-05-26

Release: production-polished educational dashboard.

### Content
- 18 treatment cards spanning standard-of-care (levothyroxine, Tirosint, NDT)
  through experimental (CAR-T, stem cells, slow-release T3, AI-guided dosing,
  tissue-selective TR agonists)
- 33 daily-care items across diet, micronutrients, lifestyle, gut/environment
- 24 risk entries including post-COVID thyroiditis, dementia, surgical risk,
  and the iodine U-curve
- 24 peer-reviewed research papers with verified PMIDs and DOIs
- Pocket Reference with 18 glossary terms, 8 FAQs, 6 walk-in checklists,
  7 future-hope items, 8 decode-your-labs rows, 12 drug interactions

### Experience
- 5 tabs: Treatments · Daily Care · Risks & Reality · Research Library · Pocket Reference
- Calm Anchor and Safety Net on every tab
- "I'm overwhelmed" button at the bottom of every tab
- Compare drawer (bottom-sheet on mobile)
- ChatGPT prompt copy-to-clipboard on every action

### Accessibility & comfort
- Larger-text toggle (persists)
- Calm-mode toggle (persists)
- Print stylesheet for appointment hand-outs
- Skip-to-content link
- Focus-visible rings at 3px
- prefers-reduced-motion respected

### Mobile / iPhone
- Fluid type scale (clamp) from iPhone SE 1st gen (320px) to Pro Max (430px)
- Bottom-sheet compare with drag handle
- Decode-your-labs table → card layout below 768px
- Kebab "More" menu collapses Larger / Calm / Print on small screens
- safe-area-inset honored top/bottom/left/right
- 44×44 touch-target floor on every interactive element
- -webkit-tap-highlight-color softened to terracotta 15%

### Production hardening
- LICENSE: CC-BY-NC-4.0
- robots.txt allowlist (including GPTBot, ClaudeBot, PerplexityBot)
- sitemap.xml
- JSON-LD MedicalWebPage structured data
- Security headers: CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy
- Cache-Control immutable on hashed assets
- Open Graph + Twitter card meta
- apple-touch-icon + apple-mobile-web-app meta

### Sources
- ATA 2014 Guidelines, ATA/BTA/ETA 2021 Joint Consensus
- ETA 2012 Guidelines on T4+T3 Combination Therapy
- 2024–2026 meta-analyses on selenium, vitamin D, myo-inositol, gluten-free diet
- ClinicalTrials.gov references for active 2025–2026 trials
- FDA Aug 2025 enforcement action on desiccated thyroid extract
- All claims verified against PubMed/PMC/journal direct as of 2026-05-26
