import { useState } from "react";
import {
  glossary,
  faqs,
  futureHope,
  futureHopeIntro,
  walkInChecklist,
  decodeYourLabs,
  interactions,
} from "../content/resources";
import { SafetyAnchor } from "./SafetyAnchor";

type SubKey = "glossary" | "faq" | "future" | "walkin" | "labs" | "interactions";

const SUB_TABS: { key: SubKey; label: string; icon: string; desc: string }[] = [
  { key: "labs", label: "Decode your labs", icon: "🧪", desc: "What each number actually means" },
  { key: "glossary", label: "Glossary", icon: "📖", desc: "TSH, T4, T3, antibodies — plain language" },
  { key: "interactions", label: "Interactions", icon: "💊", desc: "What blocks your pill" },
  { key: "walkin", label: "Walk-in checklist", icon: "📝", desc: "Questions by visit type" },
  { key: "faq", label: "FAQ", icon: "💬", desc: "Honest answers to common worries" },
  { key: "future", label: "Future hope", icon: "🌅", desc: "What's coming in the next decade" },
];

export function ResourcesTabContent() {
  const [sub, setSub] = useState<SubKey>("labs");

  return (
    <section className="space-y-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
          Calm Reference
        </p>
        <h2
          className="mt-1 font-display text-3xl text-ink md:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The pocket reference — when you need a definition, a question, or a calm answer.
        </h2>
        <p className="mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
          Six small modules. Flip through them when you need to decode a lab, find the right
          question for your next appointment, or get an honest answer to something that's
          worrying you.
        </p>
      </header>

      <nav
        role="tablist"
        aria-label="Resources sections"
        className="flex flex-wrap gap-2"
      >
        {SUB_TABS.map((t) => {
          const active = t.key === sub;
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={active}
              onClick={() => setSub(t.key)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "bg-ink text-white shadow-sm"
                  : "bg-white text-ink ring-1 ring-line hover:bg-parchment-2"
              }`}
            >
              <span aria-hidden="true">{t.icon}</span>
              <span>{t.label}</span>
            </button>
          );
        })}
      </nav>

      {sub === "labs" && <LabsPanel />}
      {sub === "glossary" && <GlossaryPanel />}
      {sub === "interactions" && <InteractionsPanel />}
      {sub === "walkin" && <WalkInPanel />}
      {sub === "faq" && <FaqPanel />}
      {sub === "future" && <FuturePanel />}

      <SafetyAnchor />
    </section>
  );
}

function LabsPanel() {
  return (
    <section className="space-y-4">
      <p className="max-w-2xl text-ink-soft">
        Bring your last lab results, scroll down this table, and translate them into plain words.
        Numbers are typical lab ranges — yours may differ slightly.
      </p>
      <div className="overflow-x-auto rounded-[var(--radius-card)] border border-line bg-white/85 shadow-[var(--shadow-card)]">
        <table className="w-full min-w-[640px] text-left text-[15px]">
          <thead className="bg-parchment-2/60 text-xs font-semibold uppercase tracking-wide text-ink-muted">
            <tr>
              <th className="px-4 py-3">Test</th>
              <th className="px-4 py-3">What it measures</th>
              <th className="px-4 py-3">Typical range</th>
              <th className="px-4 py-3">What it means for you</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {decodeYourLabs.map((row) => (
              <tr key={row.id} className="align-top">
                <td className="px-4 py-4 font-semibold text-ink">{row.test}</td>
                <td className="px-4 py-4 text-ink-soft">{row.whatItMeasures}</td>
                <td className="px-4 py-4 text-ink-soft">{row.typicalRange}</td>
                <td className="px-4 py-4 text-ink">{row.whatItMeansForYou}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function GlossaryPanel() {
  return (
    <section>
      <p className="max-w-2xl text-ink-soft">
        Plain-language definitions of the terms you'll hear at any thyroid appointment.
      </p>
      <ul className="mt-5 grid gap-4 md:grid-cols-2">
        {glossary.map((g) => (
          <li
            key={g.id}
            className="rounded-[var(--radius-card)] border border-line bg-white/85 p-5 shadow-[var(--shadow-card)]"
          >
            <h3
              className="font-display text-lg text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {g.term}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink">{g.short}</p>
            {g.longer && (
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{g.longer}</p>
            )}
            {g.source && (
              <p className="mt-3 text-xs text-ink-muted">
                <a
                  href={g.source.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline"
                >
                  Source · {g.source.name}
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

function InteractionsPanel() {
  return (
    <section className="space-y-4">
      <p className="max-w-2xl text-ink-soft">
        These are the most common reasons levothyroxine "stops working" — usually it's not the
        pill, it's something competing with it.
      </p>
      <ul className="grid gap-3">
        {interactions.map((it) => (
          <li
            key={it.id}
            className="rounded-2xl border border-line bg-white/85 p-5 shadow-sm md:flex md:items-start md:gap-6"
          >
            <div className="md:w-1/4">
              <p className="font-semibold text-ink">{it.what}</p>
            </div>
            <div className="md:flex-1">
              <p className="text-[15px] leading-relaxed text-ink-soft">
                <span className="font-semibold text-ink">Effect: </span>
                {it.effect}
              </p>
              <p className="mt-2 rounded-xl bg-sage-50/70 px-3 py-2 text-[15px] leading-relaxed text-ink ring-1 ring-inset ring-sage-500/20">
                <span className="font-semibold">What to do: </span>
                {it.whatToDo}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function WalkInPanel() {
  return (
    <section className="space-y-4">
      <p className="max-w-2xl text-ink-soft">
        Pre-loaded question lists by visit type. Print the page or screenshot the section that
        applies — bring it with you.
      </p>
      <ul className="grid gap-5">
        {walkInChecklist.map((t) => (
          <li
            key={t.id}
            className="rounded-[var(--radius-card)] border border-line bg-white/85 p-6 shadow-[var(--shadow-card)]"
          >
            <h3
              className="font-display text-xl text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.topic}
            </h3>
            <ol className="mt-3 space-y-2">
              {t.questions.map((q, i) => (
                <li key={i} className="flex gap-3 rounded-xl bg-parchment-2/40 px-3 py-2">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-terracotta-500 font-display text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-[15px] leading-snug text-ink">{q}</span>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FaqPanel() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="space-y-3">
      <p className="max-w-2xl text-ink-soft">
        Eight honest answers. Tap any question to read more.
      </p>
      <ul className="grid gap-3">
        {faqs.map((f) => {
          const expanded = open === f.id;
          return (
            <li
              key={f.id}
              className="rounded-2xl border border-line bg-white/85 shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpen((cur) => (cur === f.id ? null : f.id))}
                aria-expanded={expanded}
                className="flex w-full items-start gap-3 px-5 py-4 text-left"
              >
                <span
                  aria-hidden="true"
                  className={`mt-1 inline-block text-terracotta-500 transition ${expanded ? "rotate-90" : ""}`}
                >
                  ▸
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-lg leading-snug text-ink">{f.question}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{f.short}</p>
                </div>
              </button>
              {expanded && (
                <p className="px-5 pb-5 pl-12 text-[15px] leading-relaxed text-ink">
                  {f.longer}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function FuturePanel() {
  return (
    <section className="space-y-5">
      <p className="max-w-2xl text-ink-soft">{futureHopeIntro}</p>
      <ul className="grid gap-4">
        {futureHope.map((h) => (
          <li
            key={h.id}
            className="rounded-[var(--radius-card)] border border-sage-500/30 bg-sage-50/40 p-6 shadow-[var(--shadow-card)]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3
                className="font-display text-xl text-ink md:text-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {h.title}
              </h3>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-sage-700 ring-1 ring-sage-500/30">
                {h.timeline}
              </span>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-ink">{h.whatChanges}</p>
            <p className="mt-3 text-xs text-ink-muted">
              <a
                href={h.source.url}
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
              >
                Source · {h.source.name}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
