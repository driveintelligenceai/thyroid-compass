/**
 * "Explore this" prompt templates.
 *
 * Every prompt is built to feel safe to paste into ChatGPT: it tells the model
 * who she is (a non-medical woman in her mid-60s with Hashimoto's), what she
 * wants (plain language, age-appropriate context, balanced framing), and what
 * it must NOT do (give doses or tell her what to take — that's her doctor).
 */

import type { PromptTemplate } from "../types";

const SAFETY_TAIL_DOCTOR =
  "I'm not asking for a dose or a prescription. I'll confirm anything with my own doctor.";

const SAFETY_TAIL_DIETITIAN =
  "I'll check anything I act on with my doctor and a registered dietitian.";

export function promptA1ExplainOption(optionName: string): PromptTemplate {
  return {
    pattern: "A1",
    build: () =>
      `I'm a 65-year-old woman with Hashimoto's and hypothyroidism. In plain, calm language, explain ${optionName} as a treatment: what it is, who it tends to help, and what to watch out for at my age (especially heart and bones). Keep it short and clear. ${SAFETY_TAIL_DOCTOR}`,
  };
}

export function promptA2CompareOptions(
  optionA: string,
  optionB: string
): PromptTemplate {
  return {
    pattern: "A2",
    build: () =>
      `Compare ${optionA} vs ${optionB} for treating hypothyroidism in a woman in her mid-60s. Give a simple side-by-side of pros, cons, and age-specific cautions. Don't tell me which to take — I'll discuss with my doctor.`,
  };
}

export function promptA3ActionToQuestions(action: string): PromptTemplate {
  return {
    pattern: "A3",
    build: () =>
      `I have Hashimoto's and hypothyroidism and I'm in my mid-60s. I'm considering this action: ${action}. Give me a short, smart list of questions I could bring to my next endocrinology appointment about it.`,
  };
}

export function promptA4DecodeTerm(term: string): PromptTemplate {
  return {
    pattern: "A4",
    build: () =>
      `Explain what ${term} means in simple words for a patient, and why it might matter more for someone over 65. General info only.`,
  };
}

export function promptA5NutritionRealityCheck(claim: string): PromptTemplate {
  return {
    pattern: "A5",
    build: () =>
      `I've read that ${claim}. As someone in my mid-60s with Hashimoto's, what does the actual evidence say — is it worth doing, and what should I be cautious about? ${SAFETY_TAIL_DIETITIAN}`,
  };
}

/**
 * A6 — Deep research expansion of a topic.
 * Useful for getting a longer, sourced briefing on any concept the dashboard surfaces.
 */
export function promptA6DeepDive(topic: string): PromptTemplate {
  return {
    pattern: "A1",
    build: () =>
      `Do a deep, sourced dive on ${topic} for a non-medical woman in her mid-60s who has Hashimoto's. Cite peer-reviewed papers and major guideline bodies (ATA, ETA, Endocrine Society). Cover what's known, what's debated, what's promising in research right now, and what specifically matters for a woman over 60 (heart, bones, cognition). Keep the tone calm and even-handed. ${SAFETY_TAIL_DOCTOR}`,
  };
}
