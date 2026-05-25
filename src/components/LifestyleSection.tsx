import { useState } from "react";
import {
  LIFESTYLE_INTRO,
  dailyPractices,
  lifestyleSections,
  type Evidence,
  type LifestyleItem,
} from "../content/lifestyle";
import { SafetyAnchor } from "./SafetyAnchor";
import { SectionNav } from "./SectionNav";

const EVIDENCE_LABEL: Record<Evidence, string> = {
  strong: "Strong evidence",
  moderate: "Moderate evidence",
  weak: "Weak evidence",
  anecdotal: "Anecdotal only",
};

const EVIDENCE_CLASS: Record<Evidence, string> = {
  strong: "bg-sage-100 text-sage-700 ring-sage-500/30",
  moderate: "bg-amber-100 text-amber-700 ring-amber-500/30",
  weak: "bg-parchment-2 text-ink-soft ring-line",
  anecdotal: "bg-rose-50 text-rose-700 ring-rose-300/40",
};

export function LifestyleTabContent() {
  return (
    <section className="space-y-12">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
          Daily Care
        </p>
        <h2
          className="mt-1 font-display text-3xl text-ink md:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          What you can do every day — and what's just wellness marketing.
        </h2>
        <p className="mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
          {LIFESTYLE_INTRO}
        </p>
      </header>

      <SectionNav
        kicker="Jump to"
        items={lifestyleSections.map((s) => ({ id: `life-${s.id}`, label: s.title.split("—")[0].trim() }))}
      />

      <section
        aria-labelledby="quick-card"
        className="rounded-[var(--radius-card)] border border-sage-500/30 bg-sage-50/60 p-6 shadow-[var(--shadow-card)] md:p-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
          Quick card · highest-evidence daily practices
        </p>
        <h3
          id="quick-card"
          className="mt-1 font-display text-2xl text-ink md:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The 7 things worth doing every day.
        </h3>
        <ol className="mt-5 grid gap-3 md:grid-cols-2">
          {dailyPractices.map((p, i) => (
            <li key={i} className="flex gap-3 rounded-2xl bg-white/70 p-4 ring-1 ring-line">
              <span
                aria-hidden="true"
                className="grid size-7 shrink-0 place-items-center rounded-full bg-sage-500 font-display text-sm font-bold text-white"
              >
                {i + 1}
              </span>
              <p className="text-[15px] leading-snug text-ink">{p}</p>
            </li>
          ))}
        </ol>
      </section>

      {lifestyleSections.map((sec) => (
        <section key={sec.id} aria-labelledby={`life-${sec.id}`} className="space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-700">
              {sec.kicker}
            </p>
            <h3
              id={`life-${sec.id}`}
              className="mt-1 font-display text-2xl text-ink md:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {sec.title}
            </h3>
            <p className="mt-2 max-w-2xl text-ink-soft">{sec.framing}</p>
          </div>
          <ul className="grid gap-4 md:gap-5">
            {sec.items.map((item) => (
              <LifestyleCard key={item.id} item={item} />
            ))}
          </ul>
        </section>
      ))}

      <SafetyAnchor />
    </section>
  );
}

function LifestyleCard({ item }: { item: LifestyleItem }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="rounded-[var(--radius-card)] border border-line bg-white/80 p-4 shadow-[var(--shadow-card)] md:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h4
          className="font-display text-xl leading-snug text-ink md:text-2xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {item.title}
        </h4>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${EVIDENCE_CLASS[item.evidence]}`}
        >
          {EVIDENCE_LABEL[item.evidence]}
        </span>
      </div>

      <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
        <span className="font-semibold text-ink">How it works: </span>
        {item.mechanism}
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
        <span className="font-semibold text-ink">What the evidence shows: </span>
        {item.whatTheEvidenceShows}
      </p>

      <div className="mt-3 flex items-start gap-3 rounded-2xl bg-terracotta-50/70 px-4 py-3 ring-1 ring-inset ring-terracotta-500/20">
        <span aria-hidden="true" className="text-lg leading-6">
          👵
        </span>
        <p className="text-[15px] leading-snug text-ink">
          <span className="font-semibold">In your 60s · </span>
          {item.age65Note}
        </p>
      </div>

      {item.studiedDose && (
        <p className="mt-3 rounded-2xl bg-parchment-2/60 px-4 py-2 text-sm text-ink-soft ring-1 ring-line">
          <span className="font-semibold text-ink">Studied range: </span>
          {item.studiedDose}{" "}
          <span className="text-ink-muted">
            (studies have used this — your dose is between you and your doctor)
          </span>
        </p>
      )}

      <div className="mt-4 border-t border-line/60 pt-3">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink-muted hover:text-ink"
        >
          <span aria-hidden="true">ⓘ</span>
          Sources {open ? "▴" : "▾"}
        </button>
        {open && (
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-ink-soft">
            {item.sources.map((s, i) => (
              <li key={i}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
