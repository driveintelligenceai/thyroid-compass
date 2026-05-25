/**
 * Types mirror the Supabase content-store schema documented in PRD §10
 * (`insights`, `actions`, `user_saves`). When Supabase comes online in
 * Phase 3, the seed module just becomes a migration — types stay stable.
 */

export type StatusBadge =
  | "standard"
  | "common_alt"
  | "less_common"
  | "experimental";

export type EvidenceStrength =
  | "strong"
  | "some"
  | "limited"
  | "experimental";

export type Category =
  | "treatment"
  | "nutrition"
  | "holistic"
  | "research";

export type ActionType = "discuss" | "try_note" | "save_compare";

/**
 * An "Explore this" prompt template. `pattern` is one of the Appendix A
 * recipes from the PRD. `build()` fills the slots and returns the exact
 * text she will paste into ChatGPT.
 */
export interface PromptTemplate {
  pattern: "A1" | "A2" | "A3" | "A4" | "A5";
  build: () => string;
}

export interface InsightAction {
  id: string;
  label: string;
  type: ActionType;
  /** The tailored prompt she copies into ChatGPT when she taps "Not sure? Explore this". */
  prompt: PromptTemplate;
}

export interface Source {
  name: string;
  url?: string;
}

export interface Insight {
  id: string;
  category: Category;
  /** Plain-language headline — the "insight" line. */
  title: string;
  /** Optional subtitle / generic/brand names where useful. */
  subtitle?: string;
  /** One short line — why she should care. */
  whyItMatters: string;
  /** What it is, in plain language. Kept under ~3 short sentences. */
  whatItIs: string;
  /** "Generally good for…" bullets. */
  goodFor: string[];
  /** "Things to watch…" bullets. */
  watchFor: string[];
  /** The persistent 👵 60s lens — heart, bones, start-low-go-slow. */
  age65Note: string;
  status: StatusBadge;
  evidence: EvidenceStrength;
  sources: Source[];
  lastChecked: string; // ISO date
  actions: InsightAction[];
}
