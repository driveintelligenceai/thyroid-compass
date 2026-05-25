import { useState } from "react";
import type { Insight } from "../types";
import { ActionChip } from "./ActionChip";
import { EvidenceMeter, StatusBadgePill } from "./StatusBadge";
import { SafetyAnchor } from "./SafetyAnchor";

/**
 * The Insight → Action → Explore card (PRD §6).
 *
 * Glance: headline, badge, why it matters. (10-second read.)
 * Tap "Show details": what it is, good for, watch for. (Progressive disclosure.)
 * Actions: always visible — these are the next small steps.
 * §3 safety anchor closes every treatment card.
 */
export function InsightCard({
  insight,
  saved,
  onToggleSave,
}: {
  insight: Insight;
  saved: boolean;
  onToggleSave: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [sourcesOpen, setSourcesOpen] = useState(false);

  return (
    <article
      id={`insight-${insight.id}`}
      className="group relative flex flex-col gap-5 rounded-[var(--radius-card)] border border-line bg-white/80 p-6 shadow-[var(--shadow-card)] backdrop-blur-sm transition hover:shadow-[var(--shadow-card-hover)] md:p-8"
    >
      {/* Header — badge row + headline. */}
      <header className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadgePill status={insight.status} />
          <EvidenceMeter level={insight.evidence} />
        </div>
        <h3
          className="font-display text-[1.6rem] leading-[1.2] text-ink md:text-[1.85rem]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {insight.title}
        </h3>
        {insight.subtitle && (
          <p className="text-sm text-ink-muted md:text-base">{insight.subtitle}</p>
        )}
        <p className="text-[1.05rem] leading-relaxed text-ink-soft md:text-[1.1rem]">
          <span className="font-semibold text-ink">Why it matters: </span>
          {insight.whyItMatters}
        </p>
      </header>

      {/* 60s lens — persistent, on every card. */}
      <div className="flex items-start gap-3 rounded-2xl bg-terracotta-50/70 px-4 py-3 ring-1 ring-inset ring-terracotta-500/20">
        <span aria-hidden="true" className="text-xl leading-6">
          👵
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-terracotta-700">
            For women in their 60s
          </p>
          <p className="mt-1 text-[15px] leading-snug text-ink">{insight.age65Note}</p>
        </div>
      </div>

      {/* Progressive disclosure — details only on tap. */}
      <div>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={`details-${insight.id}`}
          className="inline-flex items-center gap-2 rounded-full bg-ink/[0.04] px-4 py-2 text-sm font-semibold text-ink-soft transition hover:bg-ink/[0.08]"
        >
          {expanded ? "Hide details" : "Show details"}
          <span aria-hidden="true" className={expanded ? "rotate-180 transition" : "transition"}>
            ▾
          </span>
        </button>

        {expanded && (
          <div
            id={`details-${insight.id}`}
            className="mt-4 grid gap-5 rounded-2xl border border-line/70 bg-parchment-2/40 p-5 md:grid-cols-3"
          >
            <div className="md:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                What it is
              </h4>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink">
                {insight.whatItIs}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-sage-700">
                Generally good for
              </h4>
              <ul className="mt-2 space-y-1.5 text-[15px] leading-snug text-ink">
                {insight.goodFor.map((g, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden="true" className="text-sage-500">
                      ✓
                    </span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                Things to watch
              </h4>
              <ul className="mt-2 space-y-1.5 text-[15px] leading-snug text-ink">
                {insight.watchFor.map((w, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden="true" className="text-amber-500">
                      ⚠
                    </span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Actions — always visible (the "next small step"). */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
          What you can do next
        </h4>
        <ul className="mt-3 grid gap-3">
          {insight.actions.map((action) => (
            <ActionChip
              key={action.id}
              action={action}
              saved={action.type === "save_compare" ? saved : undefined}
              onSave={action.type === "save_compare" ? onToggleSave : undefined}
            />
          ))}
        </ul>
      </div>

      {/* Sources — tucked behind an info disclosure per §14 default. */}
      <div className="border-t border-line/60 pt-4">
        <button
          type="button"
          onClick={() => setSourcesOpen((v) => !v)}
          aria-expanded={sourcesOpen}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink-muted hover:text-ink"
        >
          <span aria-hidden="true">ⓘ</span>
          Sources {sourcesOpen ? "▴" : "▾"}
          <span className="font-normal normal-case text-ink-muted/80">
            · last checked {insight.lastChecked}
          </span>
        </button>
        {sourcesOpen && (
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-ink-soft">
            {insight.sources.map((s, i) => (
              <li key={i}>
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noreferrer noopener" className="underline">
                    {s.name}
                  </a>
                ) : (
                  s.name
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      <SafetyAnchor />
    </article>
  );
}
