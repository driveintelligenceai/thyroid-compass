import { useEffect } from "react";
import type { Insight } from "../types";
import { StatusBadgePill } from "./StatusBadge";
import { SafetyAnchor } from "./SafetyAnchor";

/**
 * Side-by-side compare drawer (PRD §7.2). Columns surface the five PRD-spec
 * facets: what it is · how you take it / who it's for · generally good for ·
 * things to watch · where it stands today. Scrolls horizontally on mobile.
 */
export function CompareDrawer({
  selected,
  onClose,
  onRemove,
}: {
  selected: Insight[];
  onClose: () => void;
  onRemove: (id: string) => void;
}) {
  // Close on Escape.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center bg-ink/40 p-0 backdrop-blur-sm sm:items-center sm:p-6">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Side-by-side compare"
        className="flex max-h-[90dvh] w-full max-w-6xl flex-col overflow-hidden rounded-t-3xl bg-parchment shadow-2xl sm:rounded-3xl"
      >
        <header className="flex items-center justify-between gap-4 border-b border-line bg-parchment-2/80 px-5 py-4 md:px-7">
          <div>
            <h2 className="font-display text-2xl text-ink" style={{ fontFamily: "var(--font-display)" }}>
              Side-by-side compare
            </h2>
            <p className="mt-0.5 text-sm text-ink-muted">
              {selected.length === 0
                ? "Tap ☆ Save for compare on any card to add it here."
                : `${selected.length} option${selected.length === 1 ? "" : "s"} saved.`}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow ring-1 ring-line hover:bg-parchment-2"
          >
            Close ✕
          </button>
        </header>

        <div className="overflow-x-auto overflow-y-auto px-5 py-6 md:px-7">
          {selected.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-line bg-white/60 p-10 text-center">
              <p className="text-2xl text-ink">Nothing here yet — and that's fine.</p>
              <p className="prose-comfort mx-auto mt-3 text-base text-ink-soft">
                When you find treatments you want to look at side-by-side, tap the
                "☆ Save this one" button on those cards. They'll all come here so you can
                compare them in one calm view.
              </p>
            </div>
          ) : (
            <div
              className="grid auto-cols-[minmax(280px,1fr)] grid-flow-col gap-5"
              style={{ minWidth: `${Math.max(selected.length * 280, 280)}px` }}
            >
              {selected.map((opt) => (
                <article
                  key={opt.id}
                  className="flex flex-col gap-4 rounded-2xl border border-line bg-white/80 p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <StatusBadgePill status={opt.status} />
                    <button
                      type="button"
                      onClick={() => onRemove(opt.id)}
                      className="text-xs font-semibold text-ink-muted underline hover:text-terracotta-700"
                    >
                      Remove
                    </button>
                  </div>
                  <h3
                    className="font-display text-xl leading-snug text-ink"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {opt.title.split(" — ")[0]}
                  </h3>
                  {opt.subtitle && (
                    <p className="text-xs uppercase tracking-wide text-ink-muted">{opt.subtitle}</p>
                  )}

                  <Row label="What it is" body={opt.whatItIs} />
                  <Row label="Generally good for" list={opt.goodFor} tint="sage" />
                  <Row label="Things to watch" list={opt.watchFor} tint="amber" />
                  <Row label="At my age (60s)" body={opt.age65Note} tint="terracotta" />
                </article>
              ))}
            </div>
          )}
        </div>

        <footer className="border-t border-line bg-parchment-2/70 px-5 py-4 md:px-7">
          <SafetyAnchor />
        </footer>
      </div>
    </div>
  );
}

function Row({
  label,
  body,
  list,
  tint,
}: {
  label: string;
  body?: string;
  list?: string[];
  tint?: "sage" | "amber" | "terracotta";
}) {
  const labelClass =
    tint === "sage"
      ? "text-sage-700"
      : tint === "amber"
      ? "text-amber-700"
      : tint === "terracotta"
      ? "text-terracotta-700"
      : "text-ink-muted";
  return (
    <div>
      <h4 className={`text-[11px] font-semibold uppercase tracking-wide ${labelClass}`}>{label}</h4>
      {body && <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink">{body}</p>}
      {list && (
        <ul className="mt-1.5 space-y-1 text-[14.5px] leading-snug text-ink">
          {list.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span aria-hidden="true" className="text-ink-muted">
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
