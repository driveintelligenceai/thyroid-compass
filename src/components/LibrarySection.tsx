import {
  LIBRARY_INTRO,
  HOW_TO_READ_PAPERS,
  TRUSTED_SOURCES,
  SOURCE_RED_FLAGS,
  researchSections,
  type ResearchCard as Card,
} from "../content/library";
import { SafetyAnchor } from "./SafetyAnchor";
import { SectionNav } from "./SectionNav";

const TYPE_LABEL: Record<Card["type"], string> = {
  guideline: "Clinical guideline",
  rct: "Randomized trial",
  "meta-analysis": "Meta-analysis",
  review: "Review",
  epidemiology: "Cohort / epidemiology",
  survey: "Patient survey",
};

const TYPE_CLASS: Record<Card["type"], string> = {
  guideline: "bg-sky-100 text-sky-700 ring-sky-500/30",
  rct: "bg-sage-100 text-sage-700 ring-sage-500/30",
  "meta-analysis": "bg-terracotta-50 text-terracotta-700 ring-terracotta-500/30",
  review: "bg-amber-50 text-amber-700 ring-amber-500/30",
  epidemiology: "bg-parchment-2 text-ink-soft ring-line",
  survey: "bg-rose-50 text-rose-700 ring-rose-300/40",
};

function Stars({ count }: { count: number }) {
  return (
    <span aria-label={`Evidence weight ${count} of 5`} className="text-sm tracking-tight">
      <span className="text-amber-500">{"★".repeat(count)}</span>
      <span className="text-ink-muted/40">{"★".repeat(5 - count)}</span>
    </span>
  );
}

export function LibraryTabContent() {
  return (
    <section className="space-y-12">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
          Research Library
        </p>
        <h2
          className="mt-1 font-display text-3xl text-ink md:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Peer-reviewed papers — in plain words you can bring to an appointment.
        </h2>
        <p className="mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
          {LIBRARY_INTRO}
        </p>
      </header>

      <SectionNav
        kicker="Jump to"
        items={researchSections.map((s) => ({ id: `lib-${s.id}`, label: s.kicker }))}
      />

      <section
        aria-labelledby="how-to-read"
        className="rounded-[var(--radius-card)] border border-line bg-parchment-2/40 p-4 shadow-[var(--shadow-card)] md:p-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
          Primer
        </p>
        <h3
          id="how-to-read"
          className="mt-1 font-display text-2xl text-ink md:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          How to read a medical paper.
        </h3>
        <ol className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink">
          {HOW_TO_READ_PAPERS.map((p, i) => (
            <li key={i} className="flex gap-3">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-ink/[0.06] font-display text-sm font-bold text-ink-soft">
                {i + 1}
              </span>
              <p>{p}</p>
            </li>
          ))}
        </ol>
      </section>

      {researchSections.map((sec) => (
        <section key={sec.id} aria-labelledby={`lib-${sec.id}`} className="space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-700">
              {sec.kicker}
            </p>
            <h3
              id={`lib-${sec.id}`}
              className="mt-1 font-display text-2xl text-ink md:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {sec.title}
            </h3>
            <p className="mt-2 max-w-2xl text-ink-soft">{sec.framing}</p>
          </div>
          <ul className="grid gap-4 md:gap-5">
            {sec.cards.map((card) => (
              <ResearchCard key={card.id} card={card} />
            ))}
          </ul>
        </section>
      ))}

      <section
        aria-labelledby="trusted"
        className="rounded-[var(--radius-card)] border border-sage-500/30 bg-sage-50/50 p-4 shadow-[var(--shadow-card)] md:p-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
          Where to read more
        </p>
        <h3
          id="trusted"
          className="mt-1 font-display text-2xl text-ink md:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Trusted sources (and how to spot the others).
        </h3>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {TRUSTED_SOURCES.map((src) => (
            <li key={src.url} className="rounded-2xl bg-white/70 p-4 ring-1 ring-line">
              <a
                href={src.url}
                target="_blank"
                rel="noreferrer noopener"
                className="font-semibold text-ink underline-offset-4 hover:underline"
              >
                {src.name}
              </a>
              <p className="mt-1 text-sm text-ink-soft">{src.note}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-2xl border border-rose-300/40 bg-rose-50/50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-700">
            How to spot the unreliable ones
          </p>
          <ul className="mt-3 space-y-2 text-[14.5px] leading-relaxed text-ink">
            {SOURCE_RED_FLAGS.map((flag, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden="true" className="text-rose-500">
                  ⚠
                </span>
                <span>{flag}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SafetyAnchor />
    </section>
  );
}

function ResearchCard({ card }: { card: Card }) {
  return (
    <li className="rounded-[var(--radius-card)] border border-line bg-white/85 p-4 shadow-[var(--shadow-card)] md:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${TYPE_CLASS[card.type]}`}
          >
            {TYPE_LABEL[card.type]}
          </span>
          <Stars count={card.stars} />
        </div>
        <span className="text-xs text-ink-muted">
          {card.journal} · {card.year}
        </span>
      </div>

      <h4
        className="mt-3 font-display text-xl leading-snug text-ink md:text-2xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        <a
          href={card.url}
          target="_blank"
          rel="noreferrer noopener"
          className="underline-offset-4 hover:underline"
        >
          {card.title}
        </a>
      </h4>
      <p className="mt-1 text-sm text-ink-muted">{card.authors}</p>

      <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
        <span className="font-semibold text-ink">In 3 sentences: </span>
        {card.inThreeSentences}
      </p>

      <div className="mt-3 grid gap-2 rounded-2xl bg-parchment-2/50 p-4 ring-1 ring-inset ring-line text-[14.5px] leading-relaxed">
        <p>
          <span className="font-semibold text-ink">What this means for me: </span>
          <span className="text-ink-soft">{card.whatThisMeans}</span>
        </p>
        <p>
          <span className="font-semibold text-ink">What to discuss with my doctor: </span>
          <span className="text-ink-soft">{card.whatToDiscuss}</span>
        </p>
      </div>

      <p className="mt-3 text-xs text-ink-muted">
        {card.pmid && (
          <>
            PMID:{" "}
            <a
              href={`https://pubmed.ncbi.nlm.nih.gov/${card.pmid}/`}
              target="_blank"
              rel="noreferrer noopener"
              className="underline"
            >
              {card.pmid}
            </a>
          </>
        )}
        {card.doi && (
          <>
            {card.pmid ? " · " : ""}
            DOI: <span>{card.doi}</span>
          </>
        )}
      </p>
    </li>
  );
}
