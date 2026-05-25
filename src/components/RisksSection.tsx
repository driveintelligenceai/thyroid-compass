import { useState } from "react";
import {
  RISK_INTRO,
  RISK_BOTTOM_LINE,
  riskSections,
  type RiskItem,
  type RiskSection,
} from "../content/risks";
import { SafetyAnchor } from "./SafetyAnchor";
import { SectionNav } from "./SectionNav";

const SECTION_TONE: Record<RiskSection["id"], string> = {
  untreated: "border-amber-500/30 bg-amber-50/40",
  holistic_only: "border-rose-300/40 bg-rose-50/40",
  over_medication: "border-sky-300/40 bg-sky-50/40",
  middle_ground: "border-sage-500/30 bg-sage-50/60",
};

const KICKER_TONE: Record<RiskSection["id"], string> = {
  untreated: "text-amber-700",
  holistic_only: "text-rose-700",
  over_medication: "text-sky-700",
  middle_ground: "text-sage-700",
};

export function RisksTabContent() {
  return (
    <section className="space-y-12">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
          Risks & Reality
        </p>
        <h2
          className="mt-1 font-display text-3xl text-ink md:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The honest numbers — calmly, without alarm.
        </h2>
        <p className="mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
          {RISK_INTRO}
        </p>
      </header>

      <SectionNav
        kicker="Jump to"
        items={riskSections.map((s) => ({ id: `risk-${s.id}`, label: s.kicker }))}
      />

      {riskSections.map((sec) => (
        <section
          key={sec.id}
          aria-labelledby={`risk-${sec.id}`}
          className={`rounded-[var(--radius-card)] border p-6 shadow-[var(--shadow-card)] md:p-8 ${SECTION_TONE[sec.id]}`}
        >
          <p
            className={`text-xs font-semibold uppercase tracking-[0.18em] ${KICKER_TONE[sec.id]}`}
          >
            {sec.kicker}
          </p>
          <h3
            id={`risk-${sec.id}`}
            className="mt-1 font-display text-2xl text-ink md:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {sec.title}
          </h3>
          <p className="mt-2 max-w-2xl text-ink-soft">{sec.framing}</p>

          <ul className="mt-6 grid gap-4 md:gap-5">
            {sec.items.map((item) => (
              <RiskCard key={item.id} item={item} />
            ))}
          </ul>
        </section>
      ))}

      <section className="rounded-[var(--radius-card)] border border-line bg-white/80 p-6 shadow-[var(--shadow-card)] md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-700">
          Bottom line
        </p>
        <h3
          className="mt-1 font-display text-2xl text-ink md:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          You have time. You have options. You don't have to be afraid.
        </h3>
        <ul className="mt-4 space-y-2">
          {RISK_BOTTOM_LINE.map((line, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-2xl bg-parchment-2/40 px-4 py-3 ring-1 ring-line"
            >
              <span aria-hidden="true" className="text-terracotta-500">
                ◆
              </span>
              <p className="text-[15px] leading-relaxed text-ink">{line}</p>
            </li>
          ))}
        </ul>
      </section>

      <SafetyAnchor />
    </section>
  );
}

function RiskCard({ item }: { item: RiskItem }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="rounded-2xl border border-line bg-white/85 p-5 md:p-6">
      <h4
        className="font-display text-lg leading-snug text-ink md:text-xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {item.title}
      </h4>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
        <span className="font-semibold text-ink">What we know: </span>
        {item.magnitude}
      </p>
      <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
        <span className="font-semibold text-ink">Who's most at risk: </span>
        {item.whoMostAtRisk}
      </p>
      <div className="mt-3 flex items-start gap-3 rounded-2xl bg-sage-50/70 px-4 py-3 ring-1 ring-inset ring-sage-500/20">
        <span aria-hidden="true" className="text-lg leading-6">
          🌿
        </span>
        <p className="text-[15px] leading-snug text-ink">
          <span className="font-semibold">You can: </span>
          {item.whatYouCanDo}
        </p>
      </div>

      <div className="mt-3 border-t border-line/60 pt-3">
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
